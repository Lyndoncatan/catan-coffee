import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

// This would typically come from a database
const products = {
  "choco-crumble": {
    id: "choco-crumble",
    name: "Choco Crumble",
    description:
      "Rich chocolate frappuccino topped with whipped cream and chocolate crumbles. Our signature blend combines premium cocoa with our house-made coffee base for a decadent treat that satisfies both coffee and chocolate lovers alike.",
    price: "$5.99",
    image: "/images/products/choco-crumble.png",
    ingredients: ["Premium Coffee", "Chocolate Syrup", "Whipped Cream", "Chocolate Crumbles", "Milk"],
    nutritionalInfo: {
      calories: "380 kcal",
      fat: "18g",
      carbs: "52g",
      protein: "5g",
      sugar: "48g",
    },
  },
  "vanilla-fountain": {
    id: "vanilla-fountain",
    name: "Vanilla Fountain",
    description:
      "Smooth vanilla frappuccino with caramel drizzle and sweet toppings. This delightful creation features our signature vanilla bean paste blended with our house coffee and topped with a swirl of caramel.",
    price: "$5.99",
    image: "/images/products/vanilla-fountain.png",
    ingredients: ["Premium Coffee", "Vanilla Bean Paste", "Caramel Drizzle", "Whipped Cream", "Milk"],
    nutritionalInfo: {
      calories: "360 kcal",
      fat: "16g",
      carbs: "50g",
      protein: "5g",
      sugar: "46g",
    },
  },
  strawberry: {
    id: "strawberry",
    name: "Strawberry Frappuccino",
    description:
      "Refreshing strawberry frappuccino with fresh strawberry puree. Made with real strawberries and our signature cream base for a fruity, refreshing treat that's perfect for warm days.",
    price: "$5.99",
    image: "/images/products/strawberry.png",
    ingredients: ["Strawberry Puree", "Cream Base", "Whipped Cream", "Strawberry Drizzle", "Milk"],
    nutritionalInfo: {
      calories: "340 kcal",
      fat: "14g",
      carbs: "54g",
      protein: "4g",
      sugar: "50g",
    },
  },
  "ice-coffee": {
    id: "ice-coffee",
    name: "Ice Coffee",
    description:
      "Our signature cold brew coffee with milk. Steeped for 20 hours to create a smooth, rich flavor with low acidity. Served over ice with your choice of milk for a refreshing coffee experience.",
    price: "$3.99",
    image: "/images/products/ice-coffee.png",
    ingredients: ["Cold Brew Coffee", "Ice", "Milk of Choice"],
    nutritionalInfo: {
      calories: "120 kcal",
      fat: "4g",
      carbs: "12g",
      protein: "4g",
      sugar: "10g",
    },
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link href="/menu" className="inline-flex items-center text-sm font-medium mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Menu
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold mb-6">{product.price}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Nutritional Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                  <div key={key} className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 capitalize">{key}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-amber-100 text-amber-900 hover:bg-amber-200 border-2 border-amber-700 font-bold text-base"
              >
                Customize
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950 border-0 font-bold"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

