import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, CheckCircle2 } from 'lucide-react';

const SearchFilterPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
        <span>/</span>
        <Link to="/hooks/use-callback/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Search Filter</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Search className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Memoized Search Filter</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">Intermediate</Badge>
              <Badge variant="outline">useCallback</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Create a search filter with optimized callback functions and proper dependencies
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Build a product search with category filters and optimized callbacks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Create a searchable product list with category filters. The search and filter functions should be memoized to prevent unnecessary re-renders of the product list component.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create a list of products with name, category, and price</li>
                <li>Add a search input that filters by product name</li>
                <li>Add category filter buttons (All, Electronics, Clothing, Food)</li>
                <li>Memoize search and filter handler functions with useCallback</li>
                <li>Pass memoized functions to a memoized ProductList component</li>
                <li>Track renders to verify optimization</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📋 Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Sample product data with at least 10 products</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Search input that filters products by name (case-insensitive)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Category filter buttons that work with search</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Memoized filter function with proper dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Separate ProductList component wrapped with React.memo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display count of filtered results</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-4">
              <div>
                <div className="text-sm font-medium mb-2">Search Products</div>
                <div className="border rounded p-2 text-sm text-muted-foreground">[Search input...]</div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Category</div>
                <div className="flex gap-2">
                  <div className="border rounded px-3 py-1 text-sm">[All]</div>
                  <div className="border rounded px-3 py-1 text-sm">[Electronics]</div>
                  <div className="border rounded px-3 py-1 text-sm">[Clothing]</div>
                  <div className="border rounded px-3 py-1 text-sm">[Food]</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Showing 10 products</div>
                <div className="space-y-2">
                  <div className="border rounded p-3">Product 1 - $99.99</div>
                  <div className="border rounded p-3">Product 2 - $49.99</div>
                  <div className="border rounded p-3">Product 3 - $149.99</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💡 Hints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                What should be in the dependency array?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Include searchTerm and selectedCategory in the dependencies of your filter callback. These values are used inside the function to determine which products to display.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How should I structure the filter logic?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Create a memoized function that takes the full product list and returns filtered results. First filter by category, then by search term. Pass the filtered list to your ProductList component.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                Should I memoize the filtered list too?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Yes! Use useMemo for the filtered product list itself. This prevents recalculating the filtered list on every render. The memoized callback should be used for event handlers.
              </p>
            </details>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>✅ Testing Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Search filters products correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Category filters work independently</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Search and category filters work together</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">ProductList component doesn't re-render unnecessarily</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Product count updates correctly</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchFilterPractice;
