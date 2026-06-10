import ClientWrapper from './ClientWrapper';
import './globals.css';
import Header from './Header';
import PoliTOceanLogo from './PoliTOceanLogo';
import ScrollToTopButton from './ScrollToTopButton';

export const metadata = {
  title: 'PoliTOcean',
  description: 'Underwater ROV student team – Politecnico di Torino',
  icons: {
    icon: '/PoliTOcean-colored-logo.png',
  }
}

const socialLinks = [
  { href: 'https://www.youtube.com/@politocean', label: 'YouTube', icon: '/SocialLinksIcons/YoutubeIcon.png' },
  { href: 'https://www.linkedin.com/company/team-politocean/?originalSubdomain=it', label: 'LinkedIn', icon: '/SocialLinksIcons/LinkedInIcon.png' },
  { href: 'https://www.instagram.com/politocean/', label: 'Instagram', icon: '/SocialLinksIcons/InstagramIcon.png' },
]

function Footer() {
  return (
    <footer className="site-footer-wave bg-night py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6">
          <PoliTOceanLogo />
          <div className="flex flex-col gap-2 text-sm text-sea-light/80">
            <p>Corso Castelfidardo, 39 – 10129 Torino TO</p>
            <p>politocean@gmail.com</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-sea-light/70">
            <span>© 2017–2026 PoliTOcean. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sea-light/60 hover:text-white hover:border-white/70 transition-all text-xs"
              >
                <img src={icon} alt={`${label} icon`} className="w-4 h-4 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <ScrollToTopButton />

        <div className="flex flex-col items-start lg:items-end gap-6">
          <div className="bg-transparent rounded flex items-center justify-center">
            <img src="/Politecnico-banner.png" alt="Politecnico di Torino" className="h-20" />
          </div>
          <p className="text-sm text-sea-light/80 lg:text-right max-w-sm">
            We&apos;re thankful to the <strong>Polytechnic University of Turin </strong> for supporting us on our journey towards innovation and improvement. With their guidance and resources, we are empowered to push boundaries, tackle challenges, and make meaningful contributions in today&apos;s world.
          </p>
          <p className="text-sm text-sea-light/80">Site credits – Designed & Developed by Students</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-sea-light font-aileron text-base font-light text-ocean-dark overflow-x-hidden">
          <ClientWrapper>
            <Header />
            {children}
            <Footer />
          </ClientWrapper>
      </body>
    </html>
  );
}