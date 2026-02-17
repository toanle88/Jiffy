import { useState, useMemo, useEffect } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar'
import MarkdownViewer from './components/MarkdownViewer'
import { useCheatsheets } from './hooks/useCheatsheets'
import { useTheme } from './hooks/useTheme'
import { useFavorites } from './hooks/useFavorites'
import './index.css'

function App() {
  const { filteredCheatsheets: searchResults, searchQuery, setSearchQuery, loading } = useCheatsheets()
  const { theme, toggleTheme } = useTheme()
  const { favorites, toggleFavorite } = useFavorites()

  const [activeId, setActiveId] = useState<string | null>(null)
  const [renderedId, setRenderedId] = useState<string | null>(null)
  const [showFavorites, setShowFavorites] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const filteredCheatsheets = useMemo(() => {
    if (showFavorites) {
      return searchResults.filter(sheet => favorites.has(sheet.id))
    }
    return searchResults
  }, [searchResults, showFavorites, favorites])

  const effectiveActiveId = useMemo(() => {
    if (activeId && filteredCheatsheets.some(s => s.id === activeId)) {
      return activeId
    }
    return filteredCheatsheets.length > 0 ? filteredCheatsheets[0].id : null
  }, [activeId, filteredCheatsheets])

  useEffect(() => {
    if (effectiveActiveId && !renderedId) {
      setActiveId(effectiveActiveId)
      setRenderedId(effectiveActiveId)
    }
  }, [effectiveActiveId, renderedId])

  const selectedCheatsheet = filteredCheatsheets.find(s => s.id === renderedId) || filteredCheatsheets[0]
  const isTransitioning = activeId !== renderedId && renderedId !== null

  const handleSelect = (id: string) => {
    setActiveId(id)

    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
      setTimeout(() => {
        setRenderedId(id)
      }, 350)
    } else {
      setRenderedId(id)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-muted">Loading your knowledge...</p>
      </div>
    )
  }

  return (
    <>
      <button
        className="flex md:hidden items-center justify-center absolute top-4 left-4 z-50 bg-card border border-border text-foreground p-2 rounded-lg backdrop-blur-md cursor-pointer hover:bg-sidebar-hover transition-colors"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] backdrop-blur-[2px] animate-fadeIn md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar
        cheatsheets={filteredCheatsheets}
        onSelect={handleSelect}
        selectedId={effectiveActiveId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="flex-1 overflow-y-auto p-8 w-full md:p-8">
        {selectedCheatsheet ? (
          <div className={`max-w-[900px] mx-auto bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-fadeIn transition-opacity duration-200 ${isTransitioning ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <MarkdownViewer content={selectedCheatsheet.content} theme={theme} />
          </div>
        ) : (
          <div className="max-w-[900px] mx-auto text-center p-12 text-muted">
            <p>No cheatsheets matched your search.</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
