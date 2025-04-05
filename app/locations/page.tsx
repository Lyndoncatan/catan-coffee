import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionAnimator from "@/components/section-animator"

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: "Downtown",
      address: "123 Main Street, Catan City, CT 10001",
      hours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-8pm",
      phone: "+1 (555) 123-4567",
      image: "/placeholder.svg?height=400&width=600",
      delay: "delay-100",
    },
    {
      id: 2,
      name: "Westside",
      address: "456 Ocean Avenue, Catan City, CT 10002",
      hours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-7pm",
      phone: "+1 (555) 234-5678",
      image: "/placeholder.svg?height=400&width=600",
      delay: "delay-300",
    },
    {
      id: 3,
      name: "Northside Mall",
      address: "789 Shopping Center, Catan City, CT 10003",
      hours: "Mon-Sun: 9am-9pm",
      phone: "+1 (555) 345-6789",
      image: "/placeholder.svg?height=400&width=600",
      delay: "delay-500",
    },
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-down">Our Locations</h1>
          <p className="text-gray-300 max-w-2xl mx-auto animate-slide-in-up delay-200">
            Find a Catan Coffee near you and experience our exceptional coffee and service.
          </p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <SectionAnimator key={location.id} className={`animate-slide-in-up ${location.delay}`}>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                        <p>{location.address}</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                        <p>{location.hours}</p>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 mt-0.5 text-gray-500" />
                        <p>{location.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-up">Find Us on the Map</h2>
          <div className="aspect-[16/9] bg-gray-200 rounded-xl max-w-4xl mx-auto animate-slide-in-up delay-200">
            {/* This would be replaced with an actual map integration */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

