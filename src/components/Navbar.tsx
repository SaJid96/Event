import { useNavScroll } from '../hooks/useNavScroll'

interface NavbarProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  scrollTo: (id: string) => void
  openBooking: () => void
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen, scrollTo, openBooking }) => {
  const scrolled = useNavScroll(60)

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Venues', id: 'venues' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      {/* Logo */}
      <div style={{ cursor: 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="nav-logo-main">Grandora</div>
        <div className="nav-logo-sub">Convention Centre</div>
      </div>

      {/* Desktop nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {navLinks.map((link) => (
          <button key={link.id} className="nav-link" onClick={() => scrollTo(link.id)}>
            {link.label}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          className="btn-outline nav-book-btn"
          onClick={openBooking}
          style={{ padding: '10px 24px', color: '#FAF7F0', cursor: 'pointer' }}
        >
          <span>Book Now</span>
        </button>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
