import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary mt-16">
      <div className="flex flex-col w-full justify-between items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)] py-8 px-4">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">Balaji Hi Tech Garment</h3>
            <p className="text-muted-foreground">
              Quality garments for babies and mothers, crafted with care and
              comfort in mind.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/baby" className="hover:text-primary">
                  Baby Products
                </Link>
              </li>
              <li>
                <Link href="/products/mother" className="hover:text-primary">
                  Mother Care
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="hover:text-primary"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary" />
                <span>123, Industrial Area, Tirupur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <span>info@balajihitech.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t w-full py-4 text-center text-sm text-muted-foreground">
          <p className="px-4">
            © {new Date().getFullYear()} Balaji Hi Tech Garment. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
