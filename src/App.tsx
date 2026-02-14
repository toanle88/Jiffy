import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import MarkdownViewer from './components/MarkdownViewer'
import { useCheatsheets } from './hooks/useCheatsheets'
import './index.css'

function App() {
  const { filteredCheatsheets, searchQuery, setSearchQuery, loading } = useCheatsheets()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedId && filteredCheatsheets.length > 0) {
      setSelectedId(filteredCheatsheets[0].id)
    }
  }, [filteredCheatsheets, selectedId])

  const selectedCheatsheet = filteredCheatsheets.find(s => s.id === selectedId) || filteredCheatsheets[0]

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
        selectedId={selectedId || (filteredCheatsheets[0]?.id)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main>
        {selectedCheatsheet ? (
          <div className="content-container">
            <MarkdownViewer content={selectedCheatsheet.content} />
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
