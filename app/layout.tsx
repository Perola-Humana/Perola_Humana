import type { Metadata } from 'next'
import Script from 'next/script'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

import { Geist_Mono, Rubik as V0_Font_Rubik, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _rubik = V0_Font_Rubik({ subsets: ['latin'], weight: ["300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: 'Pérola Humana',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="mx-0" lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />

        {/* Google Translate Widget */}
       <div id="google_translate_element" style={{ display: 'none' }} />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'pt',
                includedLanguages: 'fr,en,es,ar',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              },
              'google_translate_element'
            );
          }
        `}</Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <Script id="google-translate-fix" strategy="afterInteractive">{`
          function hideBanner() {
            var banner = document.querySelector('.goog-te-banner-frame');
            if (banner) {
              banner.style.display = 'none';
              banner.style.visibility = 'hidden';
              banner.style.height = '0';
            }
            document.body.style.setProperty('top', '0px', 'important');
            document.body.style.setProperty('margin-top', '0px', 'important');
            document.documentElement.style.setProperty('top', '0px', 'important');
          }

          hideBanner();
          setInterval(hideBanner, 300);

          var observer = new MutationObserver(hideBanner);
          observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
        `}</Script>
      </body>
    </html>
  )
}