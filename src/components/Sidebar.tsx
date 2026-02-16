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
    <aside
      className={`fixed inset-y-0 left-0 w-[280px] bg-sidebar border-r border-border flex flex-col h-full shrink-0 transition-transform duration-300 ease-in-out z-[100] shadow-[2px_0_10px_rgba(0,0,0,0.2)] md:relative md:w-80 md:translate-x-0 md:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      aria-label="Cheatsheet navigation"
    >
      <div className="p-6 border-b border-border">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3 text-xl font-bold text-primary">
            <Layout size={24} />
            <span>Jiffy Cheats</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              className="hidden max-md:flex items-center justify-center p-2 text-muted bg-transparent border-none cursor-pointer"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="relative flex items-center w-full min-w-0 overflow-hidden">
          <Search className="absolute left-3 text-muted" size={18} aria-hidden="true" />
          <input
            type="text"
            placeholder="Search cheatsheets..."
            className="flex-1 min-w-0 bg-background border border-border rounded-lg py-2.5 px-3 pl-10 text-foreground text-sm transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-accent-glow"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search cheatsheets"
          />
          <button
            className={`flex items-center justify-center p-1.5 ml-2 shrink-0 rounded-md bg-transparent border-none cursor-pointer transition-all duration-200 hover:bg-sidebar-hover hover:text-primary ${showFavorites ? 'text-[#e3b341]' : 'text-muted'}`}
            onClick={() => setShowFavorites(!showFavorites)}
            title={showFavorites ? "Show all" : "Show favorites only"}
            aria-label={showFavorites ? "Show all cheatsheets" : "Show favorites only"}
          >
            <Star size={18} fill={showFavorites ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4" aria-label="Cheatsheet list">
        <ul role="listbox" aria-label="Available cheatsheets">
          {cheatsheets.map((sheet) => (
            <li
              key={sheet.id}
              role="option"
              aria-selected={selectedId === sheet.id}
              className={`group p-3 px-4 rounded-lg cursor-pointer transition-all duration-200 mb-2 ${selectedId === sheet.id ? 'bg-sidebar-active text-white' : 'text-foreground hover:bg-sidebar-hover'}`}
              onClick={() => handleSelect(sheet.id)}
              onKeyDown={(e) => handleKeyDown(e, sheet.id)}
              tabIndex={0}
            >
              <div className="flex justify-between items-center w-full relative mb-1">
                <span className="block font-medium flex-1 truncate pr-2">{sheet.title}</span>
                <button
                  className={`flex items-center justify-center p-1 rounded bg-transparent border-none cursor-pointer transition-all duration-200 hover:bg-sidebar-hover hover:text-[#e3b341] focus:opacity-100 ${favorites.has(sheet.id) ? 'opacity-100 text-[#e3b341]' : 'opacity-0 group-hover:opacity-100 text-muted'}`}
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
              <div className="flex flex-wrap gap-2">
                {sheet.tags.map(tag => (
                  <span key={tag} className={`text-[0.75rem] p-1 px-2 rounded-md flex items-center gap-1.5 border border-white/5 ${selectedId === sheet.id ? 'text-white/80 bg-white/10' : 'text-muted bg-white/5'}`}>
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
