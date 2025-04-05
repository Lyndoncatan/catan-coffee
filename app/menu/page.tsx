"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MenuPage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("frappuccinos")

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    { id: "frappuccinos", name: "Frappuccinos" },
    { id: "milk-tea", name: "Milk Tea" },
    { id: "coffee", name: "Coffee" },
    { id: "pastries", name: "Pastries" },
  ]

  const products = {
    frappuccinos: [
      {
        id: 1,
        name: "Choco Crumble",
        description: "Rich chocolate frappuccino topped with whipped cream and chocolate crumbles",
        price: "$5.99",
        image: "/images/products/choco-crumble.png",
        slug: "choco-crumble",
      },
      {
        id: 2,
        name: "Vanilla Fountain",
        description: "Smooth vanilla frappuccino with caramel drizzle and sweet toppings",
        price: "$5.99",
        image: "/images/products/vanilla-fountain.png",
        slug: "vanilla-fountain",
      },
      {
        id: 3,
        name: "Strawberry Frappuccino",
        description: "Refreshing strawberry frappuccino with fresh strawberry puree",
        price: "$5.99",
        image: "/images/products/strawberry.png",
        slug: "strawberry",
      },
    ],
    "milk-tea": [
      {
        id: 4,
        name: "Mango Milk Tea",
        description: "Sweet mango milk tea with chewy tapioca pearls",
        price: "$4.99",
        image: "/images/products/milk-tea.png",
        slug: "mango-milk-tea",
      },
      {
        id: 5,
        name: "Ube Milk Tea",
        description: "Creamy ube-flavored milk tea with tapioca pearls",
        price: "$4.99",
        image: "/images/products/milk-tea.png",
        slug: "ube-milk-tea",
      },
      {
        id: 6,
        name: "Kiwi Milk Tea",
        description: "Refreshing kiwi milk tea with tapioca pearls",
        price: "$4.99",
        image: "/images/products/milk-tea.png",
        slug: "kiwi-milk-tea",
      },
    ],
    coffee: [
      {
        id: 7,
        name: "Ice Coffee",
        description: "Our signature cold brew coffee with milk",
        price: "$3.99",
        image: "/images/products/ice-coffee.png",
        slug: "ice-coffee",
      },
      {
        id: 8,
        name: "Espresso",
        description: "Rich and intense espresso shot",
        price: "$2.99",
        image: "/images/products/ice-coffee.png",
        slug: "espresso",
      },
      {
        id: 9,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: "$4.49",
        image: "/images/products/ice-coffee.png",
        slug: "cappuccino",
      },
    ],
    pastries: [
      {
        id: 10,
        name: "Chocolate Croissant",
        description: "Buttery croissant filled with chocolate",
        price: "$3.99",
        image: "/placeholder.svg?height=300&width=300",
        slug: "chocolate-croissant",
      },
      {
        id: 11,
        name: "Cinnamon Roll",
        description: "Soft cinnamon roll with cream cheese frosting",
        price: "$4.49",
        image: "/placeholder.svg?height=300&width=300",
        slug: "cinnamon-roll",
      },
      {
        id: 12,
        name: "Blueberry Muffin",
        description: "Moist muffin packed with blueberries",
        price: "$3.49",
        image: "/placeholder.svg?height=300&width=300",
        slug: "blueberry-muffin",
      },
    ],
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  if (!mounted) {
    return (
      <div className="pt-16 min-h-screen">
        <div className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our carefully crafted selection of beverages and treats, made with the finest ingredients and
              passion.
            </p>
          </div>
        </div>
        <div className="bg-white text-black py-16">
          <div className="container mx-auto px-4">
            <div className="h-96 flex items-center justify-center">
              <p className="text-gray-500">Loading menu...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-down">Our Menu</h1>
          <p className="text-gray-300 max-w-2xl mx-auto animate-slide-in-up delay-200">
            Explore our carefully crafted selection of beverages and treats, made with the finest ingredients and
            passion.
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="w-full mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-100 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={`py-3 px-4 text-lg font-medium rounded-md transition-all ${
                    activeTab === category.id ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[activeTab as keyof typeof products].map((product, index) => (
              <Card key={product.id} className="overflow-hidden group shadow-lg">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      asChild
                      className="bg-white text-black font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Link href={`/products/${product.slug}`}>Quick View</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="font-bold">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-amber-100 text-amber-900 hover:bg-amber-200 border-2 border-amber-700 font-bold text-base"
                    >
                      <Link href={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950 border-0 font-bold text-base"
                    >
                      <Link href={`/products/${product.slug}`}>Add to Cart</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

