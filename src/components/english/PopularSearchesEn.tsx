import Link from 'next/link';

interface SearchLink {
  label: string;
  href: string;
}

interface PopularSearchesEnProps {
  links: SearchLink[];
}

export const PopularSearchesEn = ({ links }: PopularSearchesEnProps) => {
  return (
    <div className="section-padding border-t border-border/50">
      <div className="container-max">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {links.map((link, index) => (
            <div key={link.href} className="flex items-center gap-4">
              {index > 0 && <span className="text-muted-foreground">•</span>}
              <Link 
                href={link.href} 
                className="text-brand-main hover:underline transition-all"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
