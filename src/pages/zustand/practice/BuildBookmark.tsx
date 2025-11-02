import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useMemo, useReducer, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { Bookmark, useBookmarkStore } from './stores/bookmark/bookmarkStore';
import { useDebouncedCallback } from '@/utils/useDebounceCallback';
import { useDebounce } from '@/utils/useDebounce';

interface BookmarkFormState {
  id?: string;
  title: string;
  url: string;
  description: string;
  category: string;
  isFavorite: boolean;
  errors: {
    title?: string;
    url?: string;
    category?: string;
  };
}

type BookmarkFormAction =
  | { type: 'SET_FIELD'; field: keyof Omit<BookmarkFormState, 'errors'>; value: string | boolean }
  | { type: 'SET_ERROR'; field: keyof BookmarkFormState['errors']; error: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'RESET_FORM' }
  | { type: 'LOAD_BOOKMARK'; bookmark: Bookmark };

const bookmarkFormReducer = (
  state: BookmarkFormState,
  action: BookmarkFormAction
): BookmarkFormState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { 
        ...state, 
        [action.field]: action.value,
        // Clear error for that field when user starts typing
        errors: {
          ...state.errors,
          [action.field]: undefined
        }
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: {}
      };
    
    case 'RESET_FORM':
      return {
        title: '',
        url: '',
        description: '',
        category: '',
        isFavorite: false,
        errors: {}
      };
    
    case 'LOAD_BOOKMARK':
      return {
        id: action.bookmark.id,
        title: action.bookmark.title,
        url: action.bookmark.url,
        description: action.bookmark.description,
        category: action.bookmark.category,
        isFavorite: action.bookmark.isFavorite,
        errors: {}
      };
    
    default:
      return state;
  }
};

const BuildBookmark = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [selectedBookmarkId, setSelectedBookmarkId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { bookmarks, addBookmark, updateBookmark, deleteBookmark, toggleFavorite, searchBookmarks, filterBookmarksByCategory} = useBookmarkStore();
  const debounceSearchQuery = useDebounce(searchQuery, 300);

  const initialFormState: BookmarkFormState = {
    title: '',
    url: '',
    description: '',
    category: '',
    isFavorite: false,
    errors: {}
  }

  const [formState, dispatch] = useReducer(bookmarkFormReducer,initialFormState);

  const categoryOptions = [
    { label: "Learning", value: "learning" },
    { label: "Reference", value: "reference" },
    { label: "Books", value: "books" },
    { label: "DevOps", value: "devops" },
    { label: "Database", value: "database" },
    { label: "Architecture", value: "architecture" },
    { label: "Projects", value: "projects" }
  ];

  const filteredBookmarks = useMemo(()=> {
    let result = bookmarks;

    if (activeCategory !== 'all') {
      result = filterBookmarksByCategory(activeCategory);
    }

    if (debounceSearchQuery.trim() !== '') {
      result = searchBookmarks(debounceSearchQuery);
    }

    if (activeCategory !== 'all' && searchQuery.trim() !== '') {
      result = filterBookmarksByCategory(activeCategory).filter(bookmark =>
        bookmark.title.toLowerCase().includes(debounceSearchQuery.toLowerCase()) ||
        bookmark.url.toLowerCase().includes(debounceSearchQuery.toLowerCase())
      );
    }
    return result; 
  }, [bookmarks, debounceSearchQuery, activeCategory]);


  const handleAddClick = () => {
    setMode('create');
    dispatch({ type: 'RESET_FORM' });
    setDialogOpen(true);
  };

  const handleEditClick = (bookmark: Bookmark) => {
    setMode('edit');
    setSelectedBookmarkId(bookmark.id);
    dispatch({ type: 'LOAD_BOOKMARK', bookmark });
    setDialogOpen(true);
  };

  const handleDeleteDialogOpen = (id: string) => {
    setSelectedBookmarkId(id);
    setDeleteDialogOpen(true);
  }

  const handleDeleteDialogConfirm = () => {
    if (selectedBookmarkId) {
      deleteBookmark(selectedBookmarkId);
    }
    setDeleteDialogOpen(false);
  }

  const handleFieldChange = (field: keyof Omit<Bookmark, 'id' | 'createdAt'>, value: string | boolean) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const debouncedToggleFavorite = useDebouncedCallback((id: string) => {
    toggleFavorite(id);
  }, 300);

  const validateForm = (form: BookmarkFormState): boolean => {
    let isValid = true;

    // Validate title
    if (!form.title.trim()) {
      dispatch({ 
        type: 'SET_ERROR', 
        field: 'title', 
        error: 'Title is required' 
      });
      isValid = false;
    }

    // Validate URL
    if (!form.url.trim()) {
      dispatch({ 
        type: 'SET_ERROR', 
        field: 'url', 
        error: 'URL is required' 
      });
      isValid = false;
    } else if (!/^https?:\/\/\S+$/.test(form.url)) {
      dispatch({ 
        type: 'SET_ERROR', 
        field: 'url', 
        error: 'Please enter a valid URL (must start with http:// or https://)' 
      });
      isValid = false;
    }

    // Validate category
    if (!form.category.trim()) {
      dispatch({ 
        type: 'SET_ERROR', 
        field: 'category', 
        error: 'Please select a category' 
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if(!validateForm(formState)) { 
      return;
    }
    if (mode === 'create') {
      const newBookmark: Bookmark = {
        ...formState,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
      addBookmark(newBookmark);
    } else if (mode === 'edit' && selectedBookmarkId) {
      updateBookmark(selectedBookmarkId, {
        title: formState.title,
        url: formState.url,
        description: formState.description,
        category: formState.category,
      });
    }
    setDialogOpen(false);
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className='flex justify-between flex-wrap'>
        <Link to="/zustand/practice">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Practice
          </Button>
        </Link>
        <Button variant="outline" className="mb-6" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? 'Show Instructions' : 'Show Preview'}
        </Button>
      </div>

      {showPreview ? (
        <div className="border rounded-lg p-6 bg-muted/30">
          <div className="space-y-6">
            {/* Header */}
            <div className="border-b pb-4">
              <div className="mb-2">
                <span className="text-5xl font-bold text-wrap">📚 BookMark Manager</span>
              </div>
              <div className="text-base text-muted-foreground">
                Save and organize your favorite websites
              </div>
            </div>

            {/* Category Filters */}
            <div>
              <div className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                Filter by Category
              </div>
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="flex gap-2 flex-wrap h-auto bg-transparent p-0">
                  <TabsTrigger 
                    value="all" 
                    className="h-9 bg-muted rounded px-4 text-sm font-medium data-[state=active]:bg-primary/30"
                  >
                    All
                  </TabsTrigger>
                  {categoryOptions.map((category,index) => (
                    <TabsTrigger 
                      key={index}
                      value={category.value} 
                      className="h-9 bg-muted rounded px-4 text-sm capitalize data-[state=active]:bg-primary/30"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {/* Search & Add Button */}
            <div>
              <div className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                Search & Add
              </div>
              <div className="flex gap-2">
                <Input placeholder="🔍 Search bookmarks..." className='flex-1 h-10 text-base' onChange={(e) => setSearchQuery(e.target.value)} />
                <Button variant="default" className='h-10 px-5 text-sm font-semibold' onClick={handleAddClick}>
                  + Add Bookmark
                </Button>
              </div>
            </div>

            {/* Bookmark Cards Grid */}
            <div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredBookmarks.map((bookmark: Bookmark) => (
                  <div key={bookmark.id} className="border rounded-lg p-4 bg-background">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        {bookmark.isFavorite ? (
                          <Star size={18} fill='yellow' stroke='0' className='cursor-pointer' onClick={() => debouncedToggleFavorite(bookmark.id)}/>
                        ) : (
                          <Star size={18} fill='none' stroke='gray' className='cursor-pointer' onClick={() => debouncedToggleFavorite(bookmark.id)}/>
                        )}
                        <div className="text-base font-semibold">{bookmark.title}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-muted rounded" size='icon_xs' onClick={() => handleEditClick(bookmark)}>✏️</Button>
                        <Button className="bg-muted rounded" size='icon_xs' onClick={()=>{ handleDeleteDialogOpen(bookmark.id) }}>🗑️</Button>
                      </div>
                    </div>
                    <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary text-wrap mb-2 font-mono hover:underline block break-all">
                      {bookmark.url}
                    </a>
                    <div className="text-sm text-muted-foreground mb-3 leading-relaxed">{bookmark.description}</div>
                    <div className="flex gap-2 items-center">
                      <Badge variant="secondary">{bookmark.category}</Badge>
                      <div className="text-xs text-muted-foreground">{new Date(bookmark.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Footer */}
            <div className="border-t pt-4 flex justify-between text-sm font-medium">
              <div className="text-muted-foreground">Total: {bookmarks.length} bookmarks</div>
              <div className="text-muted-foreground">⭐ {bookmarks.filter(b => b.isFavorite).length} favorites</div>
            </div>
          </div>

          {/* Dialog Component */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{mode === 'create' ? 'Add New Bookmark' : 'Edit Bookmark'}</DialogTitle>
                <DialogDescription>
                  {mode === 'create' 
                    ? 'Add a new bookmark to your collection.' 
                    : 'Update the details of your bookmark.'}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    placeholder="React Documentation"
                    value={formState.title}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                  />
                  {formState.errors.title && (
                    <p className="text-sm text-destructive">{formState.errors.title}</p>
                  )}
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="url">URL</Label>
                  <Input 
                    id="url" 
                    type="url" 
                    placeholder="https://react.dev"
                    value={formState.url}
                    onChange={(e) => handleFieldChange('url', e.target.value)}
                  />
                  {formState.errors.url && (
                    <p className="text-sm text-destructive">{formState.errors.url}</p>
                  )}
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Official React documentation and tutorials"
                    defaultValue={mode === 'edit' ? 'Official React documentation and tutorials' : ''}
                    value={formState.description}
                    className='max-h-48 overflow-auto'
                    rows={3}
                    onChange={(e) => handleFieldChange('description', e.target.value)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    defaultValue={mode === 'edit' ? 'learning' : undefined} 
                    onValueChange={(value) => handleFieldChange('category', value)}
                    value={formState.category}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formState.errors.category && (
                    <p className="text-sm text-destructive">{formState.errors.category}</p>
                  )}
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={handleSubmit}>
                  {mode === 'create' ? 'Add Bookmark' : 'Save Changes'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* DeleteDialog Component */}
          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogContent>
              <div className='flex flex-col items-center gap-2 mt-2'>
                <div className='h-20 w-20 flex items-center justify-center bg-destructive/30 rounded-full'>
                  <Trash2 size={40} className='text-destructive' />
                </div>
                <div className='text-md font-semibold text-center'>Are you sure you want to delete this bookmark?</div>
              </div>
              <DialogFooter>
                <div className='w-full flex justify-center gap-2'>
                  <Button variant="outline" onClick={() => setDeleteDialogOpen(false)} className='w-28'>
                    Cancel
                  </Button>
                  <Button variant="destructive" type="submit" onClick={handleDeleteDialogConfirm} className='w-28'>
                    Delete
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ):(
        <>
          <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold">Build a Bookmark Manager</h1>
            <Badge variant="secondary">Medium</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Create a complete bookmark manager application from scratch using Zustand for state management.
          </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Problem Statement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Build a bookmark manager where users can save, organize, and manage their favorite websites.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Features Required:</h4>
                    <ul className="list-disc ml-5 space-y-1 text-sm">
                      <li>Add new bookmarks (URL, title, description, category)</li>
                      <li>Display all bookmarks in a card grid</li>
                      <li>Filter bookmarks by category</li>
                      <li>Search bookmarks by title or URL</li>
                      <li>Delete bookmarks</li>
                      <li>Edit existing bookmarks</li>
                      <li>Mark bookmarks as favorite</li>
                      <li>View total count of bookmarks</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Store Structure:</h4>
                    <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
    {`interface Bookmark {
      id: string;
      title: string;
      url: string;
      description: string;
      category: string;
      isFavorite: boolean;
      createdAt: Date;
    }

    interface BookmarkState {
      bookmarks: Bookmark[];
      addBookmark: (bookmark) => void;
      deleteBookmark: (id) => void;
      updateBookmark: (id, updates) => void;
      toggleFavorite: (id) => void;
      // Add more as needed
    }`}
                    </pre>
                  </div>

                  <Alert>
                    <AlertDescription>
                      <strong>Bonus:</strong> Use persist middleware to save bookmarks to localStorage
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>UI Wireframe</CardTitle>
                  <CardDescription>Reference design for your implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="border-b pb-3">
                        <div className="flex items-center justify-center h-8 bg-primary/20 rounded w-full mb-2">
                          <span className="text-sm font-bold">📚 My Bookmarks</span>
                        </div>
                        <div className="flex items-center justify-center h-4 bg-muted rounded w-full text-xs">
                          Save and organize your favorite websites
                        </div>
                      </div>

                      {/* Category Filters */}
                      <div>
                        <div className="text-xs font-semibold mb-2 text-muted-foreground">Filter by Category:</div>
                        <div className="flex gap-2 flex-wrap">
                          <div className="h-8 bg-primary/30 rounded px-3 flex items-center text-xs font-medium">All</div>
                          <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Work</div>
                          <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Personal</div>
                          <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Learning</div>
                        </div>
                      </div>

                      {/* Search & Add Button */}
                      <div>
                        <div className="text-xs font-semibold mb-2 text-muted-foreground">Search & Add:</div>
                        <div className="flex gap-2">
                          <div className="h-10 bg-background border rounded flex-1 flex items-center px-3 text-xs text-muted-foreground">
                            🔍 Search bookmarks...
                          </div>
                          <div className="h-10 bg-primary/40 rounded px-4 flex items-center text-xs font-medium">
                            + Add Bookmark
                          </div>
                        </div>
                      </div>

                      {/* Bookmark Cards Grid */}
                      <div>
                        <div className="text-xs font-semibold mb-2 text-muted-foreground">Bookmark Cards (2-column grid):</div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {[1, 2].map((i) => (
                            <div key={i} className="border rounded-lg p-3 bg-background">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs">⭐</span>
                                  <div className="text-xs font-semibold">React Documentation</div>
                                </div>
                                <div className="flex gap-1">
                                  <div className="h-5 w-5 bg-muted rounded flex items-center justify-center text-[10px]">✏️</div>
                                  <div className="h-5 w-5 bg-muted rounded flex items-center justify-center text-[10px]">🗑️</div>
                                </div>
                              </div>
                              <div className="text-[10px] text-primary mb-1">https://react.dev</div>
                              <div className="text-[10px] text-muted-foreground mb-2">
                                Official React documentation and tutorials
                              </div>
                              <div className="flex gap-2 items-center">
                                <div className="h-5 bg-secondary/30 rounded px-2 flex items-center text-[10px]">
                                  Learning
                                </div>
                                <div className="text-[10px] text-muted-foreground">2 days ago</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats Footer */}
                      <div className="border-t pt-3 flex justify-between text-xs">
                        <div className="text-muted-foreground">Total: 12 bookmarks</div>
                        <div className="text-muted-foreground">⭐ 5 favorites</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm space-y-2">
                    <h4 className="font-semibold">Detailed Component Breakdown:</h4>
                    <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                      <li><strong>Header:</strong> Title "My Bookmarks" and subtitle description</li>
                      <li><strong>Category Filter Tabs:</strong> Buttons for "All", "Work", "Personal", "Learning" (highlight active)</li>
                      <li><strong>Search Input:</strong> Full-width input with search icon to filter by title/URL</li>
                      <li><strong>Add Button:</strong> "Add Bookmark" button next to search (opens dialog/form)</li>
                      <li><strong>Bookmark Cards:</strong> 2-column responsive grid showing:
                        <ul className="list-circle ml-5 mt-1">
                          <li>Star icon (filled if favorite, empty if not)</li>
                          <li>Title (clickable to open URL)</li>
                          <li>URL (displayed in smaller text)</li>
                          <li>Description (2 lines max)</li>
                          <li>Category badge</li>
                          <li>Created date</li>
                          <li>Edit and Delete icon buttons</li>
                        </ul>
                      </li>
                      <li><strong>Footer Stats:</strong> Total bookmark count and favorite count</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Step 1:</strong> Create the store at <code className="bg-background px-1 py-0.5 rounded">src/stores/bookmarkStore.ts</code></p>
                  <p><strong>Step 2:</strong> Replace this component's content with your implementation</p>
                  <p><strong>Step 3:</strong> Build the UI following the wireframe</p>
                  <p><strong>Step 4:</strong> Connect the UI to your Zustand store</p>
                  <p><strong>Step 5:</strong> Test all features thoroughly</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BuildBookmark;