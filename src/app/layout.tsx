import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Brava Consultoria em E-commerce e Marketplace",
  description: "Consultoria estratégica para estruturar e acelerar a sua operação de e-commerce e marketplace. Mais de 13 anos de atuação, atendendo empresas como Stihl, Anselmi, Carraro e mais!",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

/** Sinaliza ao Google que a Brava (nome antigo) é a mesma entidade da Norden. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brava",
  sameAs: ["https://norden.ec"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-T5QV4H66');
          `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        <SiteChrome header={<Header />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
