import { ExternalLink } from 'lucide-react';
export default function AboutMe() {
  return (
    <section id="about-me" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl max-w-sm mx-auto md:max-w-none bg-soft-pink aspect-[3/4]">
              <div className="w-full h-full flex items-center justify-center text-warm-brown">
                <span className="text-6xl">👩‍🎨</span>
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-20 md:w-24 h-20 md:h-24 bg-soft-pink rounded-full -z-10" />
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 order-1 md:order-2">
            <span className="inline-block px-4 py-2 bg-soft-pink rounded-full text-warm-brown text-sm font-medium w-fit">
              הסיפור שלי
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown">
              היי, אני להב
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              מה שהתחיל כמתנה לחברה הכי טובה, הפך במהרה לעשרות בקשות ממשפחה, חברים ומכרים. אנשים התאהבו ברעיון שספר ישן יכול להפוך למתנה כל כך מרגשת ומשמעותית.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              כשהבנתי שיש ביקוש אמיתי לאמנות הזו, החלטתי להפוך את התשוקה שלי למקצוע. ליוויתי את הידע שצברתי בתואר השני במנהל עסקים עם האהבה שלי ליצירה בידיים, והקמתי את Lilou Books.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              היום אני לא רק יוצרת ספרים מפוסלים בהזמנה אישית, אלא גם מעבירה סדנאות שבהן אני משתפת את הטכניקות והאהבה לאומנות הזו.
            </p>
            
            <a
              href="https://www.ynet.co.il/entertainment/article/bkdbzv3ubx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-2 sm:mt-4 px-4 sm:px-6 py-3 sm:py-4 bg-cream hover:bg-soft-pink rounded-xl sm:rounded-2xl transition-all duration-300 group w-full sm:w-fit"
            >
              <div className="flex flex-col flex-1">
                <span className="text-xs sm:text-sm text-warm-brown font-medium">כתבו עליי ב-Ynet</span>
                <span className="text-deep-brown font-bold text-sm sm:text-base">קראו את הכתבה המלאה</span>
              </div>
              <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-[-4px] transition-transform flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
