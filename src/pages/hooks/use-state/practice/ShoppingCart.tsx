import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';

const ShoppingCartPractice = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-state" className="text-muted-foreground hover:text-foreground transition-colors">
            useState
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-state/practice" className="text-muted-foreground hover:text-foreground transition-colors">
            Practice
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Shopping Cart</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <ShoppingCart className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-4xl font-bold">Shopping Cart</h1>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Manage cart items with quantities and price calculations
            </p>
          </div>
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Challenge Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Build a shopping cart where users can add products, adjust quantities, remove items, and see the total price. This exercise focuses on managing arrays of objects in state.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Display a list of available products with "Add to Cart" buttons',
              'Show cart items with product name, price, and quantity',
              'Increase/decrease quantity buttons for each cart item',
              'Remove item button for each cart item',
              'Calculate and display subtotal for each item (price × quantity)',
              'Calculate and display total cart value',
              'Show empty cart message when cart is empty',
              'Prevent negative quantities'
            ].map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wireframe</CardTitle>
          <CardDescription>Use this as a reference for your implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-lg font-semibold text-center mb-6">Shopping Cart</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Products */}
                <div className="space-y-4">
                  <h4 className="font-medium">Available Products</h4>
                  <div className="space-y-3">
                    {['Laptop - $999', 'Mouse - $29', 'Keyboard - $79'].map((product, i) => (
                      <div key={i} className="border-2 border-border rounded-lg p-3 bg-background flex justify-between items-center">
                        <span className="text-sm">{product}</span>
                        <div className="h-8 px-4 border border-primary rounded bg-primary/10 flex items-center">
                          <span className="text-xs font-medium">Add</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart */}
                <div className="space-y-4">
                  <h4 className="font-medium">Your Cart (2 items)</h4>
                  <div className="space-y-3">
                    <div className="border-2 border-border rounded-lg p-3 bg-background space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="text-sm">
                          <div className="font-medium">Laptop</div>
                          <div className="text-xs text-muted-foreground">$999.00 each</div>
                        </div>
                        <button className="text-xs text-destructive">Remove</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 border rounded bg-muted flex items-center justify-center text-xs">−</div>
                          <span className="text-sm font-medium w-8 text-center">1</span>
                          <div className="w-8 h-8 border rounded bg-muted flex items-center justify-center text-xs">+</div>
                        </div>
                        <span className="text-sm font-bold">$999.00</span>
                      </div>
                    </div>

                    <div className="border-2 border-border rounded-lg p-3 bg-background space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="text-sm">
                          <div className="font-medium">Mouse</div>
                          <div className="text-xs text-muted-foreground">$29.00 each</div>
                        </div>
                        <button className="text-xs text-destructive">Remove</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 border rounded bg-muted flex items-center justify-center text-xs">−</div>
                          <span className="text-sm font-medium w-8 text-center">2</span>
                          <div className="w-8 h-8 border rounded bg-muted flex items-center justify-center text-xs">+</div>
                        </div>
                        <span className="text-sm font-bold">$58.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total:</span>
                      <span className="text-2xl font-bold text-primary">$1,057.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sample Product Data</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
{`const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Keyboard', price: 79 },
  { id: 4, name: 'Monitor', price: 299 },
];`}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>State to Manage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="font-medium">Cart items structure:</p>
            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
{`// Array of cart items
[
  { id: 1, name: 'Laptop', price: 999, quantity: 1 },
  { id: 2, name: 'Mouse', price: 29, quantity: 2 }
]`}
            </pre>
            <p className="text-muted-foreground mt-4">
              Think about: How will you update quantity? How will you add/remove items? How will you calculate totals?
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="text-amber-600 dark:text-amber-400">Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✓ Add items to cart successfully</p>
            <p>✓ Increase quantity updates subtotal correctly</p>
            <p>✓ Decrease quantity updates subtotal correctly</p>
            <p>✓ Cannot decrease quantity below 1</p>
            <p>✓ Remove item removes from cart</p>
            <p>✓ Total price calculates correctly</p>
            <p>✓ Adding same item again increases quantity (not duplicate)</p>
            <p>✓ Empty cart shows appropriate message</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingCartPractice;
