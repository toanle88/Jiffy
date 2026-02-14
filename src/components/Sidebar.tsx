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
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <Layout className="icon" />
            <span>Jiffy Cheats</span>
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search cheatsheets..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {cheatsheets.map((sheet) => (
            <li 
              key={sheet.id}
              className={selectedId === sheet.id ? 'active' : ''}
              onClick={() => onSelect(sheet.id)}
            >
              <span className="title">{sheet.title}</span>
              <div className="tags">
                {sheet.tags.map(tag => (
                  <span key={tag} className="tag">
                    <Tag size={10} />
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
