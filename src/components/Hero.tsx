import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-soft-pink">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/40 to-soft-pink/70 pointer-events-none" />
      <div className={`relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-warm-brown text-xs sm:text-sm font-medium shadow-lg">
            ✨ פיסול ספרים בעבודת יד
          </span>
        </div>
        <h1 className="font-logo text-4xl sm:text-5xl md:text-7xl text-deep-brown mb-4 sm:mb-6 leading-tight drop-shadow-sm tracking-widest font-light">
          LILOU | BOOKS
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-warm-brown mb-3 sm:mb-4 font-medium">
          אמנות פיסול ספרים
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
          אני יוצרת ספרים מפוסלים ייחודיים בעבודת יד.
          הזמינו ספר מפוסל בהתאמה אישית, הצטרפו לסדנה, או רכשו תבניות ליצירה עצמאית.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#order"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              להזמנת ספר מפוסל
            </span>
          </a>
          
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-sm text-warm-brown rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white text-center"
          >
            גלי עוד
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-warm-brown/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-warm-brown/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
