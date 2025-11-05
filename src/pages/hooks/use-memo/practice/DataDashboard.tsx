import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, CheckCircle2 } from 'lucide-react';

const DataDashboard = () => {
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
        <span className="text-foreground">Data Dashboard</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Data Dashboard</h1>
          <Badge variant="destructive">Advanced</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Build a sales dashboard with multiple memoized calculations and statistics.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Create a sales analytics dashboard that displays various statistics from sales data. 
            Use multiple <code className="px-2 py-1 bg-muted rounded">useMemo</code> hooks to optimize 
            different calculations and prevent unnecessary recomputations.
          </p>
          <p>
            Include filters that affect different calculations independently.
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
              <span>Sample data: 50+ sales records (product, amount, date, category, region)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Filters: Date range, Category, Region</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Memoized calculations:</span>
            </li>
            <li className="flex items-start gap-2 ml-6">
              <span>• Total Revenue</span>
            </li>
            <li className="flex items-start gap-2 ml-6">
              <span>• Average Sale Amount</span>
            </li>
            <li className="flex items-start gap-2 ml-6">
              <span>• Top 5 Products by Revenue</span>
            </li>
            <li className="flex items-start gap-2 ml-6">
              <span>• Sales by Category (breakdown)</span>
            </li>
            <li className="flex items-start gap-2 ml-6">
              <span>• Monthly Trend Data</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display calculation counters for each metric</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Show loading state during calculations</span>
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
            <div className="grid grid-cols-3 gap-2 text-sm">
              <select className="border rounded px-2 py-1">
                <option>[Date Range]</option>
              </select>
              <select className="border rounded px-2 py-1">
                <option>[Category]</option>
              </select>
              <select className="border rounded px-2 py-1">
                <option>[Region]</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded p-4">
                <div className="text-xs text-muted-foreground">Total Revenue (calc: 1x)</div>
                <div className="text-2xl font-bold">$125,430</div>
              </div>
              <div className="border rounded p-4">
                <div className="text-xs text-muted-foreground">Avg Sale (calc: 1x)</div>
                <div className="text-2xl font-bold">$2,508</div>
              </div>
            </div>

            <div className="border rounded p-4">
              <div className="font-medium mb-2">Top Products (calc: 1x)</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>1. Product A</span>
                  <span>$45,000</span>
                </div>
                <div className="flex justify-between">
                  <span>2. Product B</span>
                  <span>$32,000</span>
                </div>
              </div>
            </div>

            <div className="border rounded p-4">
              <div className="font-medium mb-2">By Category (calc: 1x)</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Electronics</span>
                  <span>60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Clothing</span>
                  <span>40%</span>
                </div>
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
          <p className="text-sm">• Filter data first: <code className="px-2 py-1 bg-muted rounded">{'const filtered = useMemo(() => data.filter(...), [filters])'}</code></p>
          <p className="text-sm">• Each calculation depends on <code className="px-2 py-1 bg-muted rounded">filtered</code> data</p>
          <p className="text-sm">• Use separate <code className="px-2 py-1 bg-muted rounded">useMemo</code> for each metric</p>
          <p className="text-sm">• Track calculation count with <code className="px-2 py-1 bg-muted rounded">useRef</code> inside memoized function</p>
          <p className="text-sm">• Consider using <code className="px-2 py-1 bg-muted rounded">reduce</code> for aggregations</p>
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
              <span>All filters work correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Metrics update when filters change</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Unrelated state changes don't trigger recalculations</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Each metric has independent calculation counter</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Top products are correctly sorted</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Category breakdown percentages are accurate</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Performance is noticeably better with memoization</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataDashboard;
