import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { loadCheatsheets } from '../utils/cheatsheetLoader';
import type { Cheatsheet } from '../utils/cheatsheetLoader';

export const useCheatsheets = () => {
  const [cheatsheets, setCheatsheets] = useState<Cheatsheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCheatsheets = async () => {
      const data = await loadCheatsheets();
      setCheatsheets(data);
      setLoading(false);
    };
    fetchCheatsheets();
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(cheatsheets, {
      keys: ['title', 'tags', 'content'],
      threshold: 0.3,
    });
  }, [cheatsheets]);

  const filteredCheatsheets = useMemo(() => {
    if (!searchQuery) return cheatsheets;
    return fuse.search(searchQuery).map((result) => result.item);
  }, [fuse, searchQuery, cheatsheets]);

  return {
    cheatsheets,
    filteredCheatsheets,
    loading,
    searchQuery,
    setSearchQuery,
  };
};
