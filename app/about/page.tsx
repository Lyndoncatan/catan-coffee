import Image from "next/image"
import SectionAnimator from "@/components/section-animator"

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-down">About Catan Coffee</h1>
          <p className="text-gray-300 max-w-2xl mx-auto animate-slide-in-up delay-200">
            Our story, mission, and passion for exceptional coffee.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionAnimator className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Catan Coffee was founded in 2015 with a simple mission: to create exceptional coffee experiences that
                bring people together. What started as a small coffee cart has grown into multiple locations across the
                city, each maintaining our commitment to quality and community.
              </p>
              <p className="mb-4">
                Our founder, Lyndon Domini Catan, developed a passion for coffee during travels across the world's
                premier coffee-growing regions. Inspired by the diverse flavors and techniques encountered, Lyndon
                returned home determined to create a coffee shop that would honor these traditions while innovating with
                new flavors and experiences.
              </p>
              <p>
                Today, Catan Coffee continues to push the boundaries of what coffee can be, combining traditional
                techniques with creative new approaches to bring you an unforgettable coffee experience.
              </p>
            </SectionAnimator>
            <SectionAnimator className="animate-slide-in-right">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/images/coffee-shop-interior.png" alt="Our Coffee Shop" fill className="object-cover" />
              </div>
            </SectionAnimator>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-slide-in-up">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We source only the finest beans and ingredients, carefully selecting each component to ensure an exceptional experience in every cup.",
                delay: "delay-100",
              },
              {
                title: "Innovation",
                description:
                  "We're constantly exploring new flavors, techniques, and combinations to bring you unique coffee experiences you won't find anywhere else.",
                delay: "delay-300",
              },
              {
                title: "Community",
                description:
                  "We believe coffee brings people together. Our spaces are designed to foster connection, conversation, and community.",
                delay: "delay-500",
              },
            ].map((value, index) => (
              <div key={index} className={`bg-gray-900 p-8 rounded-xl animate-slide-in-up ${value.delay}`}>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-slide-in-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lyndon Domini Catan",
                role: "Founder & CEO",
                bio: "Coffee enthusiast with over 15 years of experience in the industry.",
                image: "/images/team/lyndon-catan.png",
                delay: "delay-100",
              },
              {
                name: "Tony Stark",
                role: "Head Barista",
                bio: "Award-winning barista with a passion for latte art and perfect extractions.",
                image: "/images/team/tony-stark.png",
                delay: "delay-300",
              },
              {
                name: "Iron Man",
                role: "Flavor Innovator",
                bio: "Culinary expert who develops our unique seasonal offerings and signature drinks.",
                image: "/images/team/iron-man.png",
                delay: "delay-500",
              },
            ].map((member, index) => (
              <div key={index} className={`text-center animate-slide-in-up ${member.delay}`}>
                <div className="aspect-square relative rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

