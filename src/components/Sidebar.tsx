import { Search, Layout, Tag } from 'lucide-react';
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
}

const Sidebar = ({
  cheatsheets,
  onSelect,
  selectedId,
  searchQuery,
  onSearchChange,
  theme,
  toggleTheme
}: SidebarProps) => {

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(id);
    }
  };

  return (
    <aside className="sidebar" aria-label="Cheatsheet navigation">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <Layout className="icon" />
            <span>Jiffy Cheats</span>
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
              onClick={() => onSelect(sheet.id)}
              onKeyDown={(e) => handleKeyDown(e, sheet.id)}
              tabIndex={0}
            >
              <span className="title">{sheet.title}</span>
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
