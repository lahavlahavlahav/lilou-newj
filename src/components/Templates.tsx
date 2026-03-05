import { FileText, Download, Sparkles } from 'lucide-react';
export default function Templates() {
  return (
    <section id="templates" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-white rounded-full text-warm-brown text-sm font-medium mb-4">
            ליוצרות עצמאיות
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown mb-4 sm:mb-6">
            תבניות להורדה
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            כבר יודעות לפסל? הורידו תבניות מוכנות וצרו בבית
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg sm:shadow-xl">
            <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary/20 to-gold/20 rounded-xl sm:rounded-2xl mx-auto mb-6">
              <FileText className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-deep-brown text-center mb-3 sm:mb-4">
              חבילת תבניות דיגיטלית
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-6 sm:mb-8 leading-relaxed">
              אוסף תבניות מקצועיות להדפסה ביתית. מתאים למי שכבר מכירה את הטכניקה ורוצה להרחיב את מגוון העיצובים.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-cream rounded-xl">
                <Download className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-warm-brown">קבצי PDF להדפסה ביתית</span>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-cream rounded-xl">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-warm-brown">מגוון עיצובים ורמות קושי</span>
              </div>
            </div>
            <a
              href="https://pay.grow.link/5f64cea61fb3ea8bdd9df9f0eb5e2178-Mjc4NjA5MQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 sm:py-4 bg-gradient-to-r from-warm-brown to-deep-brown text-white rounded-xl font-bold text-base sm:text-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              לרכישת התבניות
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4">
              💳 תשלום מאובטח • קבלה מיידית למייל
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
