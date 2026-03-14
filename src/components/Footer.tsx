interface FooterProps {
  scrollTo: (id: string) => void
  openBooking: () => void
}

const Footer: React.FC<FooterProps> = ({ scrollTo, openBooking }) => {
  const quickLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Our Venues', id: 'venues' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ]

  const venueLinks = ['The Grand Hall', 'Grand Greens', 'The Intimate Hall']
  const socialLinks = [
    { label: 'FB', href: '#' },
    { label: 'IG', href: '#' },
    { label: 'YT', href: '#' },
  ]

  return (
    <footer>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '48px',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(195,165,105,0.1)',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', fontWeight: 600, color: '#C3A569', letterSpacing: '0.12em', marginBottom: '4px' }}>
            Grandora
          </div>
          <div style={{ fontFamily: 'Jost', fontSize: '0.46rem', letterSpacing: '0.5em', color: 'rgba(195,165,105,0.4)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Convention Centre
          </div>
          <p style={{ fontFamily: 'Jost', fontSize: '0.82rem', color: 'rgba(250,247,240,0.4)', lineHeight: 1.8, maxWidth: '260px', marginBottom: '24px' }}>
            Crafting Celebrations. A striking blend of modern architecture and refined elegance in Hyderabad.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} className="social-btn">{s.label}</a>
            ))}
          </div>
          <button
            onClick={openBooking}
            className="btn-primary"
            style={{ cursor: 'pointer', padding: '12px 28px', fontSize: '0.65rem' }}
          >
            Book an Event
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ fontFamily: 'Jost', fontSize: '0.56rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.5)', marginBottom: '24px' }}>
            Quick Links
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {quickLinks.map(link => (
              <button key={link.id} className="footer-link" onClick={() => scrollTo(link.id)} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'none' }}>
                <span style={{ color: 'rgba(195,165,105,0.35)', fontSize: '0.7rem', marginRight: '8px' }}>›</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Venues */}
        <div>
          <div style={{ fontFamily: 'Jost', fontSize: '0.56rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.5)', marginBottom: '24px' }}>
            Our Venues
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {venueLinks.map(v => (
              <button key={v} className="footer-link" onClick={() => scrollTo('venues')} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'none' }}>
                <span style={{ color: 'rgba(195,165,105,0.35)', fontSize: '0.7rem', marginRight: '8px' }}>›</span>
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: 'Jost', fontSize: '0.56rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.5)', marginBottom: '24px' }}>
            Contact Us
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Sy No. 763/a, Pocharam Village, Narepally, Hyderabad – 500088',
              '+91-91545 20099',
              'info@grandoraconvention.com',
              'Mon–Sun 9:00 AM – 9:00 PM',
            ].map(info => (
              <div key={info} className="footer-link" style={{ cursor: 'default', display: 'block' }}>
                {info}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '28px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Jost', fontSize: '0.72rem', color: 'rgba(250,247,240,0.25)' }}>
          © 2025 Grandora Convention. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
