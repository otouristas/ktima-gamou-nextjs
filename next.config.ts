import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-markdown"],
  },
  async rewrites() {
    return [{ source: "/assets/:path*", destination: "/images/:path*" }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.php/:path*", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/o-xoros", destination: "/o-horos", permanent: true },
      { source: "/deksiosi/gamos", destination: "/gamos", permanent: true },
      { source: "/deksiosi/vaptisi", destination: "/vaptisi", permanent: true },
      { source: "/deksiosi/vaptisi/:path*", destination: "/vaptisi", permanent: true },
      { source: "/deksiosi", destination: "/dexiosi", permanent: true },
      { source: "/deksiosi/:path*", destination: "/dexiosi", permanent: true },
      { source: "/en/about-us", destination: "/en/about", permanent: true },
      { source: "/en/epikoinonia", destination: "/en/contact", permanent: true },
      { source: "/en/event", destination: "/en/corporate-events", permanent: true },
      { source: "/ekklisies/author/:path*", destination: "/ekklisies", permanent: true },
      { source: "/ekklisies/content/:path*", destination: "/ekklisies", permanent: true },
      { source: "/emeis/author/:path*", destination: "/emeis", permanent: true },
      { source: "/emeis/content/:path*", destination: "/emeis", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/emeis/content/ekklisies", destination: "/ekklisies", permanent: true },
      { source: "/deksiosi/vaptisi/content/profil", destination: "/vaptisi", permanent: true },
      { source: "/deletem", destination: "/", permanent: true },
      { source: "/en/wedding", destination: "/en/weddings", permanent: true },
      { source: "/en/christening", destination: "/en/baptism", permanent: true },
      { source: "/en/diorganotis-gamon", destination: "/en/weddings", permanent: true },
      { source: "/en/dexiosi", destination: "/en/reception", permanent: true },
      { source: "/en/emeis", destination: "/en/about", permanent: true },
      { source: "/en/request", destination: "/en/contact", permanent: true },
      { source: "/en/ekklisies", destination: "/en/churches", permanent: true },
      { source: "/en/privacy", destination: "/en", permanent: true },
      { source: "/ekklisies/", destination: "/ekklisies", permanent: true },
      { source: "/en/", destination: "/en", permanent: true },
      { source: "/emeis/", destination: "/emeis", permanent: true },
      { source: "/en/en/photographer", destination: "/en/photographer", permanent: true },
      { source: "/en/en/weddings", destination: "/en/weddings", permanent: true },
      { source: "/en/en/baptism", destination: "/en/baptism", permanent: true },
      {
        source: "/en/churches/agios-alexandros-daskaleio",
        destination: "/el/ekklisies/agios-alexandros-daskaleio",
        permanent: true,
      },
      {
        source: "/en/churches/profitis-ilias-thoriko",
        destination: "/el/ekklisies/profitis-ilias-thoriko",
        permanent: true,
      },
      {
        source: "/en/churches/agios-panteleimonas-keratea",
        destination: "/el/ekklisies/agios-panteleimonas-keratea",
        permanent: true,
      },
      {
        source: "/en/churches/panagia-gkarika",
        destination: "/el/ekklisies/panagia-gkarika",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
