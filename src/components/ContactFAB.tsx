'use client';

import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Viber Icon Component
const ViberIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.644s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.323 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546l-.01-.006c-.66-1.105-2.316-2.038-4.847-2.053C13.524-.1 11.4 0 11.4 0zm.052 1.75h.05c2.38.013 5.713.26 7.452 1.633 1.687 1.463 2.585 4.9 1.906 10.355-.615 4.932-4.047 5.178-4.656 5.38-.292.096-2.98.763-6.346.48 0 0-2.528 3.05-3.313 3.84-.123.124-.27.173-.37.152-.148-.028-.19-.196-.188-.43l.01-4.58c-4.677-1.293-4.397-6.27-4.345-8.886.053-2.614.543-4.77 1.97-6.293C6.18 1.05 9.916.764 11.452 1.75zm5.624 3.656c-.01.11-.08.197-.225.195-.124-.002-1.048-.09-1.735.18-.686.27-1.72.9-1.97 1.068-.25.168-.41.48-.41.73 0 .256-.01 1.013.13 1.68.142.666.55 1.41.905 2.02.355.61 1.19 1.93 2.11 2.73.92.8 2.16 1.61 2.16 1.61s.59.33 1.03.42c.442.09.963.07 1.093-.16.13-.232.44-1.02.58-1.39.144-.37.214-.61.39-.63.175-.02.694-.01.993.2.3.208 2.15 1.48 2.15 1.48s.39.23.55.38c.16.15.26.38.25.64-.01.26-.11.95-.31 1.66-.2.71-.73 1.51-1.05 1.74-.32.23-.86.41-1.22.46-.36.05-1.27.15-2.76-.36-1.49-.51-3.47-1.76-4.98-3.38-1.51-1.62-2.59-3.67-2.97-4.45-.38-.78-.77-1.76-.77-2.68 0-.92.23-1.61.56-2.04.33-.43.64-.67 1.03-.77.39-.1.67-.07 1.05-.08.38-.01.67-.06.84.32.17.38.62 1.54.73 1.84.11.3.2.54.05.82-.15.28-.31.51-.53.76-.22.25-.43.41-.61.62-.18.21-.38.44-.16.82.22.38 1.07 1.87 2.37 3.03 1.3 1.16 2.45 1.61 2.88 1.81.43.2.7.17.96-.1.26-.27.98-1.17 1.24-1.57.26-.4.52-.34.88-.2.36.14 2.25 1.13 2.64 1.34.39.21.65.32.74.49.09.17.09.98-.01 1.93z"/>
  </svg>
);

export const ContactFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const phoneNumber = '+306981889560';
  const whatsappUrl = `https://wa.me/306981889560?text=${encodeURIComponent(
    isEnglish 
      ? 'Hello! I would like information about Ktima Orion...'
      : 'Γεια σας! Θα ήθελα πληροφορίες για το Κτήμα Ωρίων...'
  )}`;
  const viberUrl = `viber://chat?number=${encodeURIComponent(phoneNumber)}`;

  return (
    <>
      {/* Backdrop when open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[48]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-[51] flex flex-col items-end gap-3">
        {/* WhatsApp & Viber Options - Show when open */}
        {isOpen && (
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 relative z-[52]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              aria-label={isEnglish ? "Contact us on WhatsApp" : "Επικοινωνήστε μαζί μας στο WhatsApp"}
            >
              <WhatsAppIcon className="w-7 h-7" />
              <span className="font-bold text-base pr-2">WhatsApp</span>
            </a>

            <a
              href={viberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#665CAC] hover:bg-[#59519A] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              aria-label={isEnglish ? "Contact us on Viber" : "Επικοινωνήστε μαζί μας στο Viber"}
            >
              <ViberIcon className="w-7 h-7" />
              <span className="font-bold text-base pr-2">Viber</span>
            </a>
          </div>
        )}

        {/* Main FAB Button - ALWAYS VISIBLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center gap-2 px-6 py-4 bg-brand-main hover:bg-brand-dark text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group z-[52] min-h-[48px] min-w-[48px]"
          aria-label={isEnglish ? "Contact us" : "Επικοινωνήστε μαζί μας"}
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 transition-transform group-hover:rotate-90 stroke-[2.5]" />
              <span className="font-bold text-sm">{isEnglish ? 'Close' : 'Κλείσιμο'}</span>
            </>
          ) : (
            <>
              <Phone className="w-5 h-5 transition-transform duration-300 stroke-[2.5]" />
              <span className="font-bold text-sm">{isEnglish ? 'Contact us' : 'Επικοινωνία'}</span>
            </>
          )}
          
          {/* Pulse animation - only when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-brand-main animate-ping opacity-20"></span>
          )}
        </button>
      </div>
    </>
  );
};
