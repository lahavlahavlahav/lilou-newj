import { Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="bg-deep-brown text-white py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div className="text-center md:text-right">
            <h3 className="font-display text-2xl sm:text-3xl mb-3 sm:mb-4">Lilou Books</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              ספרים מפוסלים בעבודת יד
              <br />
              כל יצירה - סיפור ייחודי
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">ניווט מהיר</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'אודות', id: 'about' },
                { label: 'גלריה', id: 'gallery' },
                { label: 'סדנאות', id: 'workshop' },
                { label: 'הזמנה', id: 'order' },
                { label: 'צור קשר', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm sm:text-base text-white/70 hover:text-gold transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">הצטרפו לסדנה</h4>
            <p className="text-sm sm:text-base text-white/70 mb-4">
              למדו את אמנות פיסול הספרים וצרו יצירה משלכם
            </p>
            <a
              href="https://pay.grow.link/82c259dab99d2157be35462ff4b81091-Mjc4NjA5MQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gold hover:bg-gold/90 text-deep-brown rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-colors"
            >
              להרשמה
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-white/50 flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Lilou Books. נוצר עם
            <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-gold fill-gold" />
            על ידי להב
          </p>
        </div>
      </div>
    </footer>
  );
}
