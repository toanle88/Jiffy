import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFavorites } from '../hooks/useFavorites';

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('initialization', () => {
    it('should initialize with empty Set when no saved favorites', () => {
      const { result } = renderHook(() => useFavorites());

      expect(result.current.favorites).toEqual(new Set());
    });

    it('should initialize with saved favorites from localStorage', () => {
      const savedFavorites = ['react', 'node'];
      localStorage.setItem('jiffy-favorites', JSON.stringify(savedFavorites));

      const { result } = renderHook(() => useFavorites());

      expect(result.current.favorites).toEqual(new Set(savedFavorites));
    });

    it('should handle malformed localStorage data gracefully', () => {
      localStorage.setItem('jiffy-favorites', 'invalid-json');

      expect(() => {
        renderHook(() => useFavorites());
      }).toThrow();
    });
  });

  describe('toggleFavorite', () => {
    it('should add a favorite when not already in set', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
      });

      expect(result.current.favorites.has('react')).toBe(true);
      expect(result.current.favorites.size).toBe(1);
    });

    it('should remove a favorite when already in set', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
      });

      expect(result.current.favorites.has('react')).toBe(true);

      act(() => {
        result.current.toggleFavorite('react');
      });

      expect(result.current.favorites.has('react')).toBe(false);
      expect(result.current.favorites.size).toBe(0);
    });

    it('should handle multiple favorites', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
        result.current.toggleFavorite('node');
        result.current.toggleFavorite('python');
      });

      expect(result.current.favorites.size).toBe(3);
      expect(result.current.favorites.has('react')).toBe(true);
      expect(result.current.favorites.has('node')).toBe(true);
      expect(result.current.favorites.has('python')).toBe(true);
    });

    it('should toggle favorites independently', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
        result.current.toggleFavorite('node');
      });

      expect(result.current.favorites.size).toBe(2);

      act(() => {
        result.current.toggleFavorite('react');
      });

      expect(result.current.favorites.size).toBe(1);
      expect(result.current.favorites.has('react')).toBe(false);
      expect(result.current.favorites.has('node')).toBe(true);
    });
  });

  describe('isFavorite', () => {
    it('should return true for favorite items', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
      });

      expect(result.current.isFavorite('react')).toBe(true);
    });

    it('should return false for non-favorite items', () => {
      const { result } = renderHook(() => useFavorites());

      expect(result.current.isFavorite('react')).toBe(false);
    });

    it('should return correct status after adding and removing', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('python');
      });

      expect(result.current.isFavorite('python')).toBe(true);

      act(() => {
        result.current.toggleFavorite('python');
      });

      expect(result.current.isFavorite('python')).toBe(false);
    });
  });

  describe('localStorage persistence', () => {
    it('should persist favorites to localStorage on change', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
      });

      const saved = localStorage.getItem('jiffy-favorites');
      const parsed = JSON.parse(saved as string);

      expect(parsed).toContain('react');
    });

    it('should persist multiple favorites correctly', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
        result.current.toggleFavorite('node');
        result.current.toggleFavorite('python');
      });

      const saved = localStorage.getItem('jiffy-favorites');
      const parsed = JSON.parse(saved as string);

      expect(parsed).toHaveLength(3);
      expect(parsed).toEqual(expect.arrayContaining(['react', 'node', 'python']));
    });

    it('should update localStorage when favorite is removed', () => {
      const { result } = renderHook(() => useFavorites());

      act(() => {
        result.current.toggleFavorite('react');
        result.current.toggleFavorite('node');
      });

      const initialSave = JSON.parse(localStorage.getItem('jiffy-favorites') as string);
      expect(initialSave).toHaveLength(2);

      act(() => {
        result.current.toggleFavorite('react');
      });

      const updatedSave = JSON.parse(localStorage.getItem('jiffy-favorites') as string);
      expect(updatedSave).toHaveLength(1);
      expect(updatedSave).toContain('node');
    });

    it('should restore from localStorage on remount', () => {
      const { result: result1 } = renderHook(() => useFavorites());

      act(() => {
        result1.current.toggleFavorite('react');
        result1.current.toggleFavorite('node');
      });

      const { result: result2 } = renderHook(() => useFavorites());

      expect(result2.current.favorites).toEqual(new Set(['react', 'node']));
      expect(result2.current.isFavorite('react')).toBe(true);
      expect(result2.current.isFavorite('node')).toBe(true);
    });
  });
});
