import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
const workshopFeatures = [
  'כל החומרים כלולים',
  'קבוצות קטנות ואינטימיות',
  'הדרכה אישית צמודה',
  'יוצאים עם ספר מפוסל מוכן',
  'שתייה חמה וכיבוד קל',
  'מתאים גם למתחילים לגמרי'
];
export default function Workshop() {
  return (
    <section id="workshop" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="hidden sm:block absolute top-0 left-0 w-64 h-64 bg-soft-pink rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-cream rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            הסדנאות שלי
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown mb-4 sm:mb-6">
            סדנת פיסול ספרים
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            בואו ללמוד את האמנות של פיסול ספרים וצרו יצירה משלכם
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="bg-gradient-to-br from-cream to-soft-pink rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg sm:shadow-xl">
            <h3 className="font-bold text-xl sm:text-2xl text-deep-brown mb-4 sm:mb-6">
              מה מחכה לכן/ם בסדנה?
            </h3>
            
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              {workshopFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm sm:text-base text-warm-brown">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-primary/20">
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>משך הסדנה: 2-3 שעות</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span>לנשים וגברים (16+)</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <span>תאריכים גמישים - בדקו זמינות</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>צפון תל אביב</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-3xl transform rotate-3 opacity-20" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <div className="text-center">
                <div className="inline-block px-4 py-1 bg-gold/20 rounded-full text-gold font-medium text-sm mb-4">
                  מקומות מוגבלים
                </div>
                <h3 className="font-display text-3xl text-deep-brown mb-4">
                  הצטרפו לסדנה הבאה
                </h3>
                <p className="text-muted-foreground mb-8">
                  חוויה יצירתית שתזכרו לתמיד.
                  צרו משהו מיוחד בידיים שלכם.
                </p>
                <a
                  href="https://pay.grow.link/82c259dab99d2157be35462ff4b81091-Mjc4NjA5MQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-4 bg-gradient-to-r from-primary to-gold text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  להרשמה ותשלום
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  💳 תשלום מאובטח דרך Grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
