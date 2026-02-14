import { Search, Layout, Tag, Star, X } from 'lucide-react';
import type { Cheatsheet } from '../utils/cheatsheetLoader';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  cheatsheets: Cheatsheet[];
  onSelect: (id: string) => void;
  selectedId: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  showFavorites: boolean;
  setShowFavorites: (show: boolean) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({
  cheatsheets,
  onSelect,
  selectedId,
  searchQuery,
  onSearchChange,
  theme,
  toggleTheme,
  favorites,
  toggleFavorite,
  showFavorites,
  setShowFavorites,
  isOpen,
  onClose
}: SidebarProps) => {

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(id);
      if (window.innerWidth < 768) {
        onClose();
      }
    }
  };

  const handleSelect = (id: string) => {
    onSelect(id);
    if (window.innerWidth < 768) {
      onClose();
    }
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} aria-label="Cheatsheet navigation">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <Layout className="icon" />
            <span>Jiffy Cheats</span>
          </div>
          <div className="header-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              className="close-sidebar-btn"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="search-container">
          <Search className="search-icon" size={18} aria-hidden="true" />
          <input
            type="text"
            placeholder="Search cheatsheets..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search cheatsheets"
          />
          <button
            className={`favorite-filter-btn ${showFavorites ? 'active' : ''}`}
            onClick={() => setShowFavorites(!showFavorites)}
            title={showFavorites ? "Show all" : "Show favorites only"}
            aria-label={showFavorites ? "Show all cheatsheets" : "Show favorites only"}
          >
            <Star size={18} fill={showFavorites ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="Cheatsheet list">
        <ul role="listbox" aria-label="Available cheatsheets">
          {cheatsheets.map((sheet) => (
            <li
              key={sheet.id}
              role="option"
              aria-selected={selectedId === sheet.id}
              className={selectedId === sheet.id ? 'active' : ''}
              onClick={() => handleSelect(sheet.id)}
              onKeyDown={(e) => handleKeyDown(e, sheet.id)}
              tabIndex={0}
            >
              <div className="title-row">
                <span className="title">{sheet.title}</span>
                <button
                  className={`favorite-btn ${favorites.has(sheet.id) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(sheet.id);
                  }}
                  title={favorites.has(sheet.id) ? "Remove from favorites" : "Add to favorites"}
                  aria-label={favorites.has(sheet.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Star size={14} fill={favorites.has(sheet.id) ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="tags">
                {sheet.tags.map(tag => (
                  <span key={tag} className="tag">
                    <Tag size={10} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
