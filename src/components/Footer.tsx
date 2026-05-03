import Image from 'next/image';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
const logoDark = "/images/logo-dark.png";
export const Footer = () => {
  return <footer className="bg-forest text-secondary-foreground">
    <div className="container-max py-16 px-4 md:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Logo & Description */}
        <div>
          <Image
            src={logoDark}
            alt="Κτήμα Ωρίων"
            width={200}
            height={80}
            className="h-24 w-auto mb-6 filter brightness-0 invert"
            sizes="200px"
            loading="lazy"
          />
          <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
            Ένας υπέροχος καταπράσινος χώρος όπου η πολυτέλεια συναντά το φυσικό περιβάλλον.
            Δημιουργούμε αξέχαστες αναμνήσεις για τις πιο ξεχωριστές στιγμές της ζωής σας.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-brand-main mb-6">Υπηρεσίες</h3>
          <ul className="space-y-3">
            <li><a href="/gamos" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Γάμος</a></li>
            <li><a href="/vaptisi" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Βάπτιση</a></li>
            <li><a href="/eterikes-ekdiloseis" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Εταιρικές Εκδηλώσεις</a></li>
            <li><a href="/parti" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Πάρτι</a></li>
            <li><a href="/fotografos" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Φωτογράφος</a></li>
            <li><a href="/dj-mousiki" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">DJ - Μουσική</a></li>
            <li><a href="/reviews" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Κριτικές</a></li>
          </ul>
        </div>

        {/* Blog & Resources */}
        <div>
          <h3 className="text-xl font-bold text-brand-main mb-6">Blog & Πληροφορίες</h3>
          <ul className="space-y-3">
            <li><a href="/ktima-gamou" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Κτήμα Γάμου</a></li>
            <li><a href="/ktima-vaptisis" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Κτήμα Βάπτισης</a></li>
            <li><a href="/el/ktima-gamou-athina" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Κτήμα Γάμου Αθήνα</a></li>
            <li><a href="/ekklisies" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Εκκλησίες Κερατέα</a></li>
            <li><a href="/o-horos" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Ο Χώρος</a></li>
            <li><a href="/blog" className="text-secondary-foreground/80 hover:text-brand-main transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-brand-main mb-6">Επικοινωνία</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-brand-main flex-shrink-0" />
              <span className="text-secondary-foreground/80">Κερατέα, Αττική</span>
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
            <span>Δημιουργήθηκε με</span>
            <Heart className="w-4 h-4 text-brand-main fill-current" />
            <span>για το Κτήμα Ωρίων</span>
          </div>

          <div className="text-secondary-foreground/60 text-sm">© 2025 Κτήμα Ωρίων. Όλα τα δικαιώματα κατοχυρωμένα.</div>
        </div>
      </div>
    </div>
  </footer>;
};