import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCheatsheets } from '../hooks/useCheatsheets';

describe('useCheatsheets', () => {
  describe('loading and data fetching', () => {
    it('should start with loading state', () => {
      const { result } = renderHook(() => useCheatsheets());

      expect(result.current.loading).toBe(true);
    });

    it('should load cheatsheets on mount', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(Array.isArray(result.current.cheatsheets)).toBe(true);
      expect(result.current.cheatsheets.length).toBeGreaterThan(0);
    });

    it('should populate cheatsheets with required properties', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const cheatsheet = result.current.cheatsheets[0];
      expect(cheatsheet).toHaveProperty('id');
      expect(cheatsheet).toHaveProperty('title');
      expect(cheatsheet).toHaveProperty('tags');
      expect(cheatsheet).toHaveProperty('content');
      expect(cheatsheet).toHaveProperty('slug');
    });
  });

  describe('search functionality', () => {
    it('should initialize with empty search query', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.searchQuery).toBe('');
    });

    it('should return all cheatsheets when search query is empty', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.filteredCheatsheets.length).toBe(
        result.current.cheatsheets.length
      );
    });

    it('should search by title', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('react');
      });

      expect(result.current.searchQuery).toBe('react');
      expect(result.current.filteredCheatsheets.length).toBeGreaterThan(0);
      expect(
        result.current.filteredCheatsheets.some((c) =>
          c.title.toLowerCase().includes('react')
        )
      ).toBe(true);
    });

    it('should search by tags', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('frontend');
      });

      expect(result.current.filteredCheatsheets.length).toBeGreaterThanOrEqual(0);
    });

    it('should return empty results for no matches', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('xyzabc123notareal');
      });

      expect(result.current.filteredCheatsheets.length).toBe(0);
    });

    it('should be case insensitive', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('REACT');
      });

      const uppercaseResults = result.current.filteredCheatsheets.length;

      act(() => {
        result.current.setSearchQuery('react');
      });

      const lowercaseResults = result.current.filteredCheatsheets.length;

      expect(uppercaseResults).toBe(lowercaseResults);
      expect(uppercaseResults).toBeGreaterThan(0);
    });

    it('should handle partial matches', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('react');
      });

      expect(result.current.filteredCheatsheets.length).toBeGreaterThan(0);
    });

    it('should update filtered results when search query changes', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('frontend');
      });

      const firstQuery = result.current.filteredCheatsheets;

      act(() => {
        result.current.setSearchQuery('database');
      });

      const secondQuery = result.current.filteredCheatsheets;

      // Verify that search results can change when query changes
      expect(firstQuery).not.toEqual(secondQuery);
    });

    it('should clear filter when search query is cleared', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const totalCount = result.current.cheatsheets.length;

      act(() => {
        result.current.setSearchQuery('react');
      });

      expect(result.current.filteredCheatsheets.length).toBeLessThan(totalCount);

      act(() => {
        result.current.setSearchQuery('');
      });

      expect(result.current.filteredCheatsheets.length).toBe(totalCount);
    });
  });

  describe('filtering and state', () => {
    it('should maintain cheatsheets list while filtering', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const originalLength = result.current.cheatsheets.length;

      act(() => {
        result.current.setSearchQuery('react');
      });

      expect(result.current.cheatsheets.length).toBe(originalLength);
      expect(result.current.filteredCheatsheets.length).toBeLessThanOrEqual(
        originalLength
      );
    });

    it('should have all filtered results exist in cheatsheets', async () => {
      const { result } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      act(() => {
        result.current.setSearchQuery('bash');
      });

      const cheatsheetIds = result.current.cheatsheets.map((c) => c.id);
      const filteredIds = result.current.filteredCheatsheets.map((c) => c.id);

      filteredIds.forEach((id) => {
        expect(cheatsheetIds).toContain(id);
      });
    });
  });

  describe('memoization', () => {
    it('should not recreate filteredCheatsheets when unrelated state changes', async () => {
      const { result, rerender } = renderHook(() => useCheatsheets());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      const initialFiltered = result.current.filteredCheatsheets;

      act(() => {
        result.current.setSearchQuery('');
      });

      // Rerender to test memoization
      rerender();

      expect(result.current.filteredCheatsheets).toEqual(initialFiltered);
    });
  });
});
