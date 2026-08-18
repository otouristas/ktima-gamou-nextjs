import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

/** Article the promotion points at, in both locales. */
const PROMO_SLUG = 'paketa-vaptisis-ktima-orion-varsos-catering';
/** The offer flyer itself — also what the download button hands the visitor. */
const PROMO_IMAGE = '/promo/ktimaorion1.jpeg';
const DOWNLOAD_NAME = 'prosfora-vaptisis-ktima-orion.jpg';

/**
 * Anchor for the section. `PromoPopup` tells dismissing visitors the offer lives
 * here permanently, so this id is part of the contract with /vaptisi#prosfora-vaptisis.
 */
export const BAPTISM_OFFER_ANCHOR = 'prosfora-vaptisis';

const COPY = {
  el: {
    eyebrow: 'Τρέχουσα προσφορά',
    title: 'Ολοκληρωμένα Πακέτα Βάπτισης με L. Varsos Catering',
    lead: 'Δύο ολοκληρωμένες προτάσεις για τη δεξίωση της βάπτισης, με το catering, το προσωπικό, τα ποτά και όλες τις παροχές του Κτήματος Ωρίων σε μία τιμή.',
    bullets: [
      'Classic Finger Food – 33€ / άτομο, με δωρεάν τούρτα βάπτισης',
      'Premium Finger Food – 38€ / άτομο',
      'Για εκδηλώσεις από 100 καλεσμένους, ανοιχτά 365 ημέρες τον χρόνο',
    ],
    cta: 'Δείτε αναλυτικά τα πακέτα',
    download: 'Κατεβάστε την προσφορά',
    quote: 'Ζητήστε προσφορά',
    note: 'Η προσφορά είναι πάντα διαθέσιμη εδώ — κατεβάστε την και δείτε την με την ησυχία σας.',
    alt: 'Προσφορά: πακέτα βάπτισης στο Κτήμα Ωρίων με L. Varsos Catering, Classic 33€ και Premium 38€ ανά άτομο',
    zoom: 'Πατήστε την εικόνα για μεγέθυνση',
  },
  en: {
    eyebrow: 'Current offer',
    title: 'All-Inclusive Baptism Packages with L. Varsos Catering',
    lead: 'Two complete proposals for your baptism reception, with catering, staff, drinks and every Ktima Orion venue amenity in a single price.',
    bullets: [
      'Classic Finger Food – €33 per person, baptism cake included free',
      'Premium Finger Food – €38 per person',
      'For events from 100 guests, open 365 days a year',
    ],
    cta: 'See the packages in detail',
    download: 'Download the offer',
    quote: 'Request a quote',
    note: 'The offer always stays here — download it and read it at your own pace.',
    alt: 'Offer: baptism packages at Ktima Orion with L. Varsos Catering, Classic €33 and Premium €38 per person',
    zoom: 'Tap the image to enlarge',
  },
} as const;

interface BaptismOfferProps {
  readonly lang?: 'el' | 'en';
}

/**
 * Permanent home for the baptism offer that `PromoPopup` advertises: once the
 * popup is dismissed it never returns, so the flyer has to be findable — and
 * downloadable — from the baptism pages themselves.
 */
export const BaptismOffer = ({ lang = 'el' }: BaptismOfferProps) => {
  const copy = lang === 'en' ? COPY.en : COPY.el;
  const postHref = lang === 'en' ? `/en/blog/${PROMO_SLUG}` : `/blog/${PROMO_SLUG}`;
  const quoteHref = lang === 'en' ? '/en/contact' : '/request';

  return (
    <section
      id={BAPTISM_OFFER_ANCHOR}
      className="section-padding scroll-mt-24 bg-gradient-to-b from-brand-main/10 to-background"
    >
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-main">
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              <span className="text-gradient-brand">{copy.title}</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{copy.lead}</p>

            <ul className="mt-6 space-y-3">
              {copy.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-main" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={postHref}
                className="flex min-h-[44px] items-center justify-center rounded-md bg-brand-main px-6 font-bold text-white transition-colors hover:bg-brand-dark"
              >
                {copy.cta}
              </Link>
              {/* Plain anchor, not next/link: `download` must reach the DOM element. */}
              <a
                href={PROMO_IMAGE}
                download={DOWNLOAD_NAME}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-brand-main px-6 font-semibold text-brand-main transition-colors hover:bg-brand-main/10"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {copy.download}
              </a>
              <Link
                href={quoteHref}
                className="flex min-h-[44px] items-center justify-center rounded-md border border-border px-6 text-muted-foreground transition-colors hover:bg-muted"
              >
                {copy.quote}
              </Link>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{copy.note}</p>
          </div>

          <div className="order-1 lg:order-2">
            <a
              href={PROMO_IMAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={PROMO_IMAGE}
                alt={copy.alt}
                width={1448}
                height={1086}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 92vw, 560px"
              />
            </a>
            <p className="mt-2 text-center text-xs text-muted-foreground">{copy.zoom}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
