


import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
const navLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'סדנאות', href: '#workshop' },
  { label: 'תבניות', href: '#templates' },
  { label: 'הזמנת ספר', href: '#order' },
  { label: 'צרו קשר', href: '#contact' }
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <BookOpen className={`w-7 h-7 ${isScrolled ? 'text-primary' : 'text-deep-brown'}`} />
            <span className={`font-logo text-xl tracking-wider font-light ${isScrolled ? 'text-deep-brown' : 'text-deep-brown'}`}>
              LILOU | BOOKS
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-warm-brown hover:text-primary' : 'text-deep-brown hover:text-primary'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://pay.grow.link/82c259dab99d2157be35462ff4b81091-Mjc4NjA5MQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              הרשמה לסדנה
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="תפריט"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-deep-brown" />
            ) : (
              <Menu className="w-6 h-6 text-deep-brown" />
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-border px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-warm-brown hover:bg-cream rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://pay.grow.link/82c259dab99d2157be35462ff4b81091-Mjc4NjA5MQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 bg-primary text-white rounded-lg font-medium text-center"
          >
            הרשמה לסדנה
          </a>
        </div>
      </div>
    </nav>
  );
}
