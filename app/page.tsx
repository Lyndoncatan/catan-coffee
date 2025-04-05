import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section with New Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background/coffee-toast.png"
            alt="Coffee Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-in-down">
            Crafted with Passion
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300 animate-slide-in-up delay-200">
            Experience the perfect blend of artisanal coffee and innovative flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up delay-300">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="/menu">
                Explore Our Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/locations">
                Find a Location <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white text-black">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-in-up">Featured Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Choco Crumble",
                image: "/images/products/choco-crumble.png",
                description: "Rich chocolate frappuccino topped with whipped cream and chocolate crumbles",
                slug: "choco-crumble",
                delay: "delay-100",
              },
              {
                name: "Vanilla Fountain",
                image: "/images/products/vanilla-fountain.png",
                description: "Smooth vanilla frappuccino with caramel drizzle and sweet toppings",
                slug: "vanilla-fountain",
                delay: "delay-300",
              },
              {
                name: "Strawberry Frappuccino",
                image: "/images/products/strawberry.png",
                description: "Refreshing strawberry frappuccino with fresh strawberry puree",
                slug: "strawberry",
                delay: "delay-500",
              },
            ].map((product, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-gray-100 transition-all hover:shadow-xl animate-slide-in-up ${product.delay}`}
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
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
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="w-full bg-amber-100 text-amber-900 hover:bg-amber-200 border-2 border-amber-700 font-bold text-base"
                    >
                      <Link href={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950 border-0 font-bold text-base"
                    >
                      <Link href={`/products/${product.slug}`}>Add to Cart</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Catan Coffee was born from a passion for exceptional coffee and innovative flavors. Our journey began
                with a simple idea: to create a space where coffee enthusiasts could experience unique, handcrafted
                beverages in an inviting atmosphere.
              </p>
              <p className="text-gray-300 mb-8">
                Today, we continue to push the boundaries of what coffee can be, combining traditional techniques with
                creative new approaches to bring you an unforgettable coffee experience.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image src="/images/latte-art.png" alt="Latte Art" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Image */}
      <section className="py-20 bg-white text-black relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/coffee-shop-interior.png" alt="Coffee Shop" fill className="object-cover" />
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-in-up">Join Our Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-in-up delay-200">
            Sign up for our newsletter to receive updates on new flavors, special offers, and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-slide-in-up delay-300">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 flex-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <Button className="bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950 border-0">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

