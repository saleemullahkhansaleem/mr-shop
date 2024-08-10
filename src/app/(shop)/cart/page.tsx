"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      image: "/placeholder.svg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      image: "/placeholder.svg",
      quantity: 2,
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      image: "/placeholder.svg",
      quantity: 1,
    },
  ]);
  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  return (
    <div className="container grid md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-12">
      <div>
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="grid gap-4">
              <img
                src="/placeholder.svg"
                alt={item.name}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full aspect-square"
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-muted/40 rounded-lg p-6 sticky top-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${(subtotal + shipping + tax).toFixed(2)}</span>
          </div>
        </div>
        <Button className="w-full mt-6">Proceed to Checkout</Button>
      </div>
    </div>
  );
}
