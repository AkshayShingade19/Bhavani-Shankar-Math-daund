import { Instagram, MessageCircle } from "lucide-react";
import { TEMPLE_NAME, NAVIGATION, CONTACT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-white font-serif text-3xl font-bold italic">{TEMPLE_NAME}</h3>
            <p className="leading-relaxed">
              Preserving our sacred traditions and providing a spiritual home for devotees in Gopalwadi, Daund.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-saffron transition-all hover:scale-110 text-white"
                title="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href={CONTACT_INFO.whatsappGroup} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all hover:scale-110 text-white"
                title="WhatsApp Group"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm underline decoration-saffron decoration-2 underline-offset-8">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-saffron transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm underline decoration-saffron decoration-2 underline-offset-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 italic font-light tracking-wide">
                {CONTACT_INFO.address}
              </li>
              <li className="text-white font-bold text-lg">
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-saffron transition-colors">+{CONTACT_INFO.phone}</a>
              </li>
              <li className="italic">
                info@bhavanishankarmath.org
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm underline decoration-saffron decoration-2 underline-offset-8">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-sm">Subscribe to receive updates about festivals and events.</p>
              <div className="flex gap-2 p-1 bg-white/5 rounded-2xl">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none px-4 py-2 w-full text-white"
                />
                <button className="px-6 py-2 bg-saffron text-white rounded-xl font-bold hover:bg-saffron-dark transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {TEMPLE_NAME}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
