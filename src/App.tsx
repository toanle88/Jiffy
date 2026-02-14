import { useState, useMemo } from 'react'
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
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showFavorites, setShowFavorites] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const filteredCheatsheets = useMemo(() => {
    if (showFavorites) {
      return searchResults.filter(sheet => favorites.has(sheet.id))
    }
    return searchResults
  }, [searchResults, showFavorites, favorites])

  const effectiveSelectedId = useMemo(() => {
    if (selectedId && filteredCheatsheets.some(s => s.id === selectedId)) {
      return selectedId
    }
    return filteredCheatsheets.length > 0 ? filteredCheatsheets[0].id : null
  }, [selectedId, filteredCheatsheets])

  const selectedCheatsheet = filteredCheatsheets.find(s => s.id === effectiveSelectedId) || filteredCheatsheets[0]

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading your knowledge...</p>
      </div>
    )
  }

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar
        cheatsheets={filteredCheatsheets}
        onSelect={setSelectedId}
        selectedId={effectiveSelectedId || (filteredCheatsheets[0]?.id)}
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
      <main>
        {selectedCheatsheet ? (
          <div className="content-container">
            <MarkdownViewer content={selectedCheatsheet.content} theme={theme} />
          </div>
        ) : (
          <div className="no-results">
            <p>No cheatsheets matched your search.</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
