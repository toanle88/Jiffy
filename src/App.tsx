import { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import MarkdownViewer from './components/MarkdownViewer'
import { useCheatsheets } from './hooks/useCheatsheets'
import { useTheme } from './hooks/useTheme'
import './index.css'

function App() {
  const { filteredCheatsheets, searchQuery, setSearchQuery, loading } = useCheatsheets()
  const { theme, toggleTheme } = useTheme()
  const [selectedId, setSelectedId] = useState<string | null>(null)

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
      <Sidebar
        cheatsheets={filteredCheatsheets}
        onSelect={setSelectedId}
        selectedId={effectiveSelectedId || (filteredCheatsheets[0]?.id)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
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
