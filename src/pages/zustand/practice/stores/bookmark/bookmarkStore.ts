import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sampleBookmarks } from "./bookmarkData";

export interface Bookmark {
    id: string;
    title: string;
    url: string;
    description: string;
    category: string;
    isFavorite?: boolean;
    createdAt: Date;
}

export interface BookmarkState{
    bookmarks: Bookmark[];
    addBookmark: (bookmark: Bookmark) => void;
    updateBookmark: (id: string, updatedBookmark: Partial<Bookmark>) => void;
    deleteBookmark: (id: string) => void;
    toggleFavorite: (id: string) => void;
    searchBookmarks: (query: string) => Bookmark[];
    filterBookmarksByCategory: (category: string) => Bookmark[];
}

export const useBookmarkStore = create<BookmarkState>()(
    persist(
        (set,get) => ({
            bookmarks: [],
            addBookmark: (newBookmark: Bookmark) => {
                set((state)=> ({ bookmarks: [...state.bookmarks, newBookmark]}));
            },
            updateBookmark: (id: string, updatedBookmark: Partial<Bookmark>) => {
                set((state)=> ({
                    bookmarks: state.bookmarks.map((bookmark) =>
                        bookmark.id === id ? { ...bookmark, ...updatedBookmark } : bookmark
                    ),
                }));
            },
            deleteBookmark: (id: string) => {
                set((state) => ({ bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id )}));
            },
            toggleFavorite: (id: string) => {
                set((state) => ({ bookmarks: state.bookmarks.map((bookmark) =>
                    bookmark.id === id ? { ...bookmark, isFavorite: !bookmark.isFavorite } : bookmark
                )}));
            },
            searchBookmarks: (query: string) => {
                const lowerQuery = query.toLowerCase();
                return get().bookmarks.filter((bookmark) =>
                    bookmark.title.toLowerCase().includes(lowerQuery) ||
                    bookmark.url.toLowerCase().includes(lowerQuery)
                );
            },
            filterBookmarksByCategory: (category: string) => {
                return get().bookmarks.filter((bookmark) => bookmark.category === category);
            },
        }),
        {
            name: 'bookmarks',
        }
    )
)