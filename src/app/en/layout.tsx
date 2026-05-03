import type { ReactNode } from 'react';

interface EnLayoutProps {
  readonly children: ReactNode;
}

/** English section: `lang` for accessibility and SEO parsers. */
export default function EnLayout({ children }: EnLayoutProps) {
  return <div lang="en">{children}</div>;
}
