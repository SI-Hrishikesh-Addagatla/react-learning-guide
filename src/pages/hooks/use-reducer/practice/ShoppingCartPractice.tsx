import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

const ShoppingCartPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-reducer" className="hover:text-foreground">useReducer</Link>
        <span>/</span>
        <Link to="/hooks/use-reducer/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Shopping Cart</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <ShoppingBag className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <Badge variant="secondary">Intermediate</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Build a shopping cart with add, remove, update quantity, and discount features using useReducer.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Create a shopping cart system with products that can be added, removed, and have their quantities updated. 
            Include a discount code feature and calculate totals.
          </p>
          <p>
            Use <code className="px-2 py-1 bg-muted rounded">useReducer</code> to manage all cart operations 
            and state (items, discount, totals).
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
              <span>Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, APPLY_DISCOUNT, CLEAR_CART</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>State: items array, discount percentage, subtotal, total</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display a list of available products to add</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Show cart items with quantity controls (+ / -)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display subtotal, discount, and final total</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Discount code input (use "SAVE10" for 10% off)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Clear cart button</span>
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
            <div>
              <div className="font-bold mb-2">Available Products</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Product 1 - $10</span>
                  <div className="px-2 py-1 border rounded text-xs">[Add]</div>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="font-bold mb-2">Cart (2 items)</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Product 1 x2</span>
                  <div className="flex gap-1">
                    <div className="px-1 border rounded text-xs">[-]</div>
                    <div className="px-1 border rounded text-xs">[+]</div>
                    <div className="px-1 border rounded text-xs">[×]</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t pt-4 space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$20.00</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount (10%):</span>
                <span>-$2.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>$18.00</span>
              </div>
            </div>
            <div className="flex gap-2">
              <input className="flex-1 border rounded px-2 py-1 text-sm" placeholder="Discount code" />
              <div className="px-3 py-1 border rounded text-sm">[Apply]</div>
            </div>
            <div className="px-3 py-1 border rounded text-sm text-center">[Clear Cart]</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• Item structure: <code className="px-2 py-1 bg-muted rounded">{'{ id, name, price, quantity }'}</code></p>
          <p className="text-sm">• Calculate totals in the reducer after each action</p>
          <p className="text-sm">• Check if item exists before adding (update quantity if it does)</p>
          <p className="text-sm">• Remove item when quantity reaches 0</p>
          <p className="text-sm">• Validate discount code before applying</p>
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
              <span>Adding product increases cart count</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Adding same product again increases quantity</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Quantity controls work correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Remove button deletes item from cart</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Discount code "SAVE10" applies 10% discount</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Totals calculate correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Clear cart empties all items</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingCartPractice;
