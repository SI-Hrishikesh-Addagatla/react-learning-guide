import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const sampleProducts = [
  { id: '1', name: 'Laptop', price: 999.99, image: '💻' },
  { id: '2', name: 'Smartphone', price: 699.99, image: '📱' },
  { id: '3', name: 'Headphones', price: 199.99, image: '🎧' },
  { id: '4', name: 'Keyboard', price: 149.99, image: '⌨️' },
  { id: '5', name: 'Mouse', price: 79.99, image: '🖱️' },
  { id: '6', name: 'Monitor', price: 399.99, image: '🖥️' },
];

const Cart = () => {
  const { items, addItem, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } =
    useCartStore();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Shopping Cart Example</h1>
        <p className="text-muted-foreground">
          Advanced state management with computed values and devtools integration.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Products</CardTitle>
              <CardDescription>Click to add items to your cart</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {sampleProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:border-primary transition-colors"
                    onClick={() => addItem(product)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2">{product.image}</div>
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <p className="text-lg font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Cart Items
                <Badge variant="secondary">
                  {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border"
                    >
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {getTotalPrice() > 0 ? '$10.00' : '$0.00'}
                  </span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-primary">
                      ${(getTotalPrice() + (getTotalPrice() > 0 ? 10 : 0)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full" disabled={items.length === 0}>
                Checkout
              </Button>

              {items.length > 0 && (
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DevTools Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                This store uses the <code className="bg-muted px-1 rounded">devtools</code> middleware.
              </p>
              <p className="text-sm text-muted-foreground">
                Open Redux DevTools to see state changes in real-time!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
