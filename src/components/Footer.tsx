import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">MY STORE</h3>
            <p className="text-sm leading-relaxed mb-4">
              Your premier destination for cutting-edge technology and premium electronics. 
              We bring you the future of tech, today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span className="text-sm">
                  49, Anand Nagar<br />
                  Vasant Vihar, Ujjain<br />
                  MP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+91-9685533878</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-sm">support@mystore.com</span>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">Shipping Information</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} MY STORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}