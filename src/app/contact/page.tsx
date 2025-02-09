import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16 ">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            Get in touch with us for any inquiries
          </p>
        </div>
        {/* Contact Cards */}
        <div className="flex flex-col gap-4 w-full sm:px-0 mb-12">
          <div className="grid lg:grid-cols-4 row-span-1 gap-2 lg:gap-8 w-full sm:px-0">
            <Link href="tel:+918805240301">
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <Phone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-center">
                  +91 88052 40301
                </p>
              </div>
            </Link>
            <Link href={"mailto:balajihitechg@gmail.com"}>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-center">
                  balajihitechg@gmail.com
                </p>
              </div>
            </Link>
            <Link href="https://maps.app.goo.gl/jrgajxfWHgKkHeSN6">
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-center">
                  Ichalkaranji, Maharashtra
                </p>
              </div>
            </Link>
            <div className="flex flex-col items-center p-6 border rounded-lg">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground text-center">
                Mon - Sat: 9AM - 6PM
              </p>
            </div>
          </div>
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
            {/* Left Column contact form*/}
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 border rounded-md w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 border rounded-md w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border rounded-md w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="p-2 border rounded-md w-full"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="p-2 border rounded-md w-full"
                />
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column contact map*/}
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Find us on Map</h2>
              <div className="w-full h-[400px] bg-muted rounded-lg">
                {/* Replace this div with your map component */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4513.047611021716!2d74.45825124808842!3d16.706756240435354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQyJzI2LjQiTiA3NMKwMjcnMzUuNCJF!5e0!3m2!1sen!2sin!4v1739093188840!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="rounded-lg border-black-2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
