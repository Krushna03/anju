import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <footer className="bg-[#e8ddd4] px-8 py-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 pb-10">
          {/* Left Section */}
          <div className="flex-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-orange-400 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-orange-400" />
              </div>
            </div>
              <h2 className="text-4xl font-bold text-gray-800">Yoga Studio</h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-gray-900 font-medium text-lg">+971 50 9052882 (Dubai)</p>
              <p className="text-gray-900 font-medium text-lg">+91 9769207468 (India)</p>
              <p className="text-gray-900 font-medium text-lg">Anju.d.shahani@gmail.com</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 lg:max-w-xs">
            {/* Location */}
            <div className="mb-6">
              <h3 className="text-gray-600 text-sm mb-2">location</h3>
              <p className="text-gray-800 font-medium">123 Serenity Lane, City, State, ZIP</p>
            </div>

            {/* Working Hours */}
            <div className="mb-6">
              <h3 className="text-gray-600 text-sm mb-2">working hours</h3>
              <div className="space-y-1">
                <p className="text-gray-800 font-medium">Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p className="text-gray-800 font-medium">Saturday & Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-gray-600 text-sm mb-3">connect with us</h3>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>© Yoga Studio 2025</p>
          <p>Build with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
