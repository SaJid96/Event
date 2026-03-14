interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, scrollTo }) => {
  const links = [
    { label: 'About', id: 'about' },
    { label: 'Venues', id: 'venues' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleClick = (id: string) => {
    scrollTo(id);
    onClose();
  };

  return (
    <div id="mobile-menu" className={open ? 'open' : ''}>
      {links.map((link) => (
        <button
          key={link.id}
          className="mob-link"
          onClick={() => handleClick(link.id)}
        >
          {link.label}
        </button>
      ))}
      <button
        className="btn-primary"
        onClick={() => handleClick('contact')}
        style={{ marginTop: '12px' }}
      >
        Book Now
      </button>
    </div>
  );
};

export default MobileMenu;
