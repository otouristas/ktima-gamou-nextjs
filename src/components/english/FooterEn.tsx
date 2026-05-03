import Image from 'next/image';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
const logoDark = "/images/logo-dark.png";

export const FooterEn = () => {
  return (
    <footer className="bg-forest text-secondary-foreground">
      <div className="container-max py-16 px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <Image
              src={logoDark}
              alt="Ktima Orion"
              width={200}
              height={80}
              className="h-24 w-auto mb-6 filter brightness-0 invert"
              sizes="200px"
              loading="lazy"
            />
            <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
              A beautiful green space where luxury meets the natural environment. 
              We create unforgettable memories for life's most special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-brand-main mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/en/weddings" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Wedding</a></li>
              <li><a href="/en/baptism" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Baptism</a></li>
              <li><a href="/en/corporate-events" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Corporate Events</a></li>
              <li><a href="/en/party" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Party</a></li>
              <li><a href="/en/photographer" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Photographer</a></li>
              <li><a href="/en/dj-music" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">DJ - Music</a></li>
              <li><a href="/en/reviews" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Blog & Resources */}
          <div>
            <h3 className="text-xl font-bold text-brand-main mb-6">Blog & Resources</h3>
            <ul className="space-y-3">
              <li><a href="/en/blog" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Blog</a></li>
              <li><a href="/en/weddings" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Wedding Venue Athens</a></li>
              <li><a href="/en/baptism" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Baptism Venues</a></li>
              <li><a href="/en/churches" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Seaside Churches</a></li>
              <li><a href="/en/venue" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">The Venue</a></li>
              <li><a href="/en/services" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-brand-main mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-main flex-shrink-0" />
                <span className="text-secondary-foreground/80">Keratea, Attica</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-main flex-shrink-0" />
                <span className="text-secondary-foreground/80">2299068812</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-main flex-shrink-0" />
                <span className="text-secondary-foreground/80">6981889560</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-main flex-shrink-0" />
                <span className="text-secondary-foreground/80">info@ktimaorion.gr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
            <div className="text-secondary-foreground/60 text-sm">
              <p>Γ.Ε.ΜΗ. 062719803000</p>
            </div>
            
            <div className="flex items-center space-x-2 text-secondary-foreground/60 text-sm">
              <span>Created with</span>
              <Heart className="w-4 h-4 text-brand-main fill-current" />
              <span>for Ktima Orion</span>
            </div>
            
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 Ktima Orion. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
