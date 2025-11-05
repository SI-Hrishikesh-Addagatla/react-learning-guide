import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, CheckCircle2 } from 'lucide-react';

const FilteredListPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-memo" className="hover:text-foreground">useMemo</Link>
        <span>/</span>
        <Link to="/hooks/use-memo/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Filtered List</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Filtered Product List</h1>
          <Badge>Beginner</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Optimize a product list with filtering and sorting using useMemo.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Build a product list with search, category filter, and price sorting. 
            Use <code className="px-2 py-1 bg-muted rounded">useMemo</code> to memoize the filtered 
            and sorted list to avoid unnecessary recalculations.
          </p>
          <p>
            Track render count to demonstrate the performance benefit of memoization.
          </p>
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
              <span>Create an array of 20+ products with: name, category, price</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Search input to filter by product name</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Category filter dropdown (All, Electronics, Clothing, Food)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Sort options: Price Low-High, Price High-Low, Name A-Z</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Use <code className="px-2 py-1 bg-muted rounded">useMemo</code> for filtered/sorted list</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display count of filtered results</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Add a counter to show component renders</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎨 Wireframe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 space-y-4">
            <div className="text-sm text-muted-foreground text-right">Renders: 1</div>
            <div className="grid grid-cols-3 gap-2">
              <input className="border rounded px-3 py-2 text-sm col-span-1" placeholder="Search..." />
              <select className="border rounded px-3 py-2 text-sm">
                <option>[All Categories]</option>
              </select>
              <select className="border rounded px-3 py-2 text-sm">
                <option>[Sort by...]</option>
              </select>
            </div>
            <div className="text-sm">Showing 20 products</div>
            <div className="space-y-2">
              <div className="border rounded p-3 flex justify-between items-center">
                <div>
                  <div className="font-medium">Product Name</div>
                  <div className="text-xs text-muted-foreground">Category</div>
                </div>
                <div className="font-bold">$99.99</div>
              </div>
              <div className="border rounded p-3 flex justify-between items-center opacity-50">
                <div>
                  <div className="font-medium">Product Name</div>
                  <div className="text-xs text-muted-foreground">Category</div>
                </div>
                <div className="font-bold">$79.99</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• Memoize: <code className="px-2 py-1 bg-muted rounded">{'useMemo(() => products.filter(...).sort(...), [search, category, sort])'}</code></p>
          <p className="text-sm">• Chain operations: filter by search, then by category, then sort</p>
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">.toLowerCase()</code> for case-insensitive search</p>
          <p className="text-sm">• Include all dependencies in the dependency array</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✅ Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Search filters products correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Category filter works</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Sorting orders products correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Result count updates correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Changing unrelated state doesn't recalculate list</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilteredListPractice;
