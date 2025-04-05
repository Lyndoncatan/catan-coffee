"use client"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "./cart-provider"

export function CartButton() {
  const { itemCount } = useCart()

  return (
    <SheetTrigger asChild>
      <Button variant="outline" size="sm" className="text-white relative">
        <ShoppingBag className="h-4 w-4 mr-2" />
        Cart
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </SheetTrigger>
  )
}

export function CartSheet() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()

  return (
    <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
      <SheetHeader className="border-b pb-4">
        <SheetTitle className="text-xl">Your Cart</SheetTitle>
      </SheetHeader>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
          <p className="text-gray-500 mb-6">Your cart is empty</p>
          <SheetTrigger asChild>
            <Button asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </SheetTrigger>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-auto py-6">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 border-b pb-4">
                  <div className="h-20 w-20 relative rounded-md overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 flex items-center justify-center border rounded-md"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 flex items-center justify-center border rounded-md"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-medium">{subtotal}</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Shipping and taxes calculated at checkout</p>
            <div className="space-y-2">
              <Button className="w-full bg-black text-white hover:bg-gray-800">Checkout</Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>
        </>
      )}
    </SheetContent>
  )
}

export default function Cart() {
  return (
    <Sheet>
      <CartButton />
      <CartSheet />
    </Sheet>
  )
}

