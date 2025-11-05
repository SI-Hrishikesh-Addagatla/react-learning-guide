import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const ScrollToSection = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-ref" className="hover:text-foreground">useRef</Link>
        <span>/</span>
        <Link to="/hooks/use-ref/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Scroll to Section</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <ArrowDown className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Scroll to Section</h1>
          <Badge variant="secondary">Intermediate</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Create a navigation system that smoothly scrolls to different sections using refs.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Build a single-page layout with multiple sections (Home, About, Services, Contact). 
            Create a sticky navigation bar with buttons that scroll to each section when clicked.
          </p>
          <p>
            Use <code className="px-2 py-1 bg-muted rounded">useRef</code> to store references to each section's DOM element 
            and implement smooth scrolling behavior.
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
              <span>Create 4 sections: Home, About, Services, Contact</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Use <code className="px-2 py-1 bg-muted rounded">useRef</code> for each section</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Create a sticky navigation bar at the top</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Implement smooth scroll using <code className="px-2 py-1 bg-muted rounded">scrollIntoView</code></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Each section should have enough content to scroll</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Highlight active section in navigation</span>
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
            <div className="flex gap-2 border-b pb-2">
              <div className="px-3 py-1 border rounded text-sm">[Home]</div>
              <div className="px-3 py-1 border rounded text-sm">[About]</div>
              <div className="px-3 py-1 border rounded text-sm">[Services]</div>
              <div className="px-3 py-1 border rounded text-sm">[Contact]</div>
            </div>
            <div className="space-y-2">
              <div className="border rounded p-4 h-20 flex items-center justify-center text-muted-foreground">
                Home Section
              </div>
              <div className="border rounded p-4 h-20 flex items-center justify-center text-muted-foreground">
                About Section
              </div>
              <div className="border rounded p-4 h-20 flex items-center justify-center text-muted-foreground">
                Services Section
              </div>
              <div className="border rounded p-4 h-20 flex items-center justify-center text-muted-foreground">
                Contact Section
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
          <p className="text-sm">• Create refs: <code className="px-2 py-1 bg-muted rounded">const homeRef = useRef(null)</code></p>
          <p className="text-sm">• Attach refs: <code className="px-2 py-1 bg-muted rounded">&lt;section ref={'{homeRef}'}&gt;</code></p>
          <p className="text-sm">• Scroll: <code className="px-2 py-1 bg-muted rounded">homeRef.current?.scrollIntoView({'{ behavior: "smooth" }'})</code></p>
          <p className="text-sm">• Use sticky positioning for navigation: <code className="px-2 py-1 bg-muted rounded">className="sticky top-0"</code></p>
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
              <span>Navigation bar stays at top when scrolling</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Clicking each nav button scrolls to correct section</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Scrolling is smooth, not instant</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>All sections are fully visible when scrolled to</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScrollToSection;
