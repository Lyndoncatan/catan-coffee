import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import SectionAnimator from "@/components/section-animator"

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-down">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto animate-slide-in-up delay-200">
            We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <SectionAnimator className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="block font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="block font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950 border-0"
                >
                  Send Message
                </Button>
              </form>
            </SectionAnimator>

            <SectionAnimator className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-600">123 Coffee Street</p>
                    <p className="text-gray-600">Catan City, CT 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">+63 945 280 7867</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">catanlyndon200316@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7am - 8pm</p>
                    <p className="text-gray-600">Saturday: 8am - 8pm</p>
                    <p className="text-gray-600">Sunday: 8am - 6pm</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/dondon.catan.359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span>Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/d0n2n/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span>Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <span>Twitter</span>
                  </Link>
                </div>
              </div>
            </SectionAnimator>
          </div>
        </div>
      </div>
    </div>
  )
}

