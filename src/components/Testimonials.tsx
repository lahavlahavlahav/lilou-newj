


import { useState, useEffect } from 'react';
import { Quote, ChevronRight, ChevronLeft } from 'lucide-react';
const testimonials = [
  { name: 'מיכל כהן', role: 'הזמינה ספר לחתונה', text: 'להב יצרה לנו ספר מדהים עם התאריך של החתונה. כל האורחים התלהבו! זו הייתה המתנה הכי מיוחדת שקיבלנו.' },
  { name: 'רונית לוי', role: 'השתתפה בסדנה', text: 'הסדנה הייתה חוויה מדהימה! להב מסבירה בסבלנות ובאהבה, ויצאתי עם ספר שאני גאה בו. ממליצה בחום!' },
  { name: 'דנה אברהם', role: 'הזמינה מתנה ליום הולדת', text: 'חיפשתי מתנה מיוחדת לאמא שלי ליום הולדת 60, והספר המפוסל היה בדיוק מה שרציתי. היא הייתה המומה!' },
  { name: 'יעל שמעוני', role: 'לקוחה חוזרת', text: 'כבר הזמנתי שלושה ספרים מלהב - לחתונה של אחותי, ליום נישואין של ההורים ולבר מצווה של הבן. תמיד מושלם!' },
  { name: 'נועה גולן', role: 'השתתפה בסדנה זוגית', text: 'הגענו עם בעלי לסדנה זוגית וזו הייתה פעילות הכי מגבשת שעשינו. יצרנו יחד ספר לסלון שלנו.' },
  { name: 'שירה מזרחי', role: 'הזמינה סדרת ספרים', text: 'להב עזרה לי ליצור סדרה של ספרים לעסק שלי. הם עומדים בכניסה למשרד וכל לקוח שואל עליהם!' },
  { name: 'אורית ברק', role: 'השתתפה בסדנה', text: 'לא האמנתי שאני מסוגלת ליצור משהו כזה יפה. להב נתנה לי את הביטחון ואת הכלים. יוצאת מהסדנה עם חיוך ענק!' },
  { name: 'טלי פרידמן', role: 'הזמינה ספר זיכרון', text: 'הזמנתי ספר זיכרון לזכר אבא שלי עם התאריכים המשמעותיים. זה כל כך מרגש ויפה. תודה להב.' },
  { name: 'ליאת כץ', role: 'רכשה תבניות', text: 'אחרי שהשתתפתי בסדנה, רכשתי את חבילת התבניות וממשיכה ליצור בבית. זה ממכר!' }
];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    if (direction === 'prev') {
      setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    } else {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }
  };
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-deep-brown to-warm-brown text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-4">
            מה אומרות הלקוחות
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
            חוויות אמיתיות
          </h2>
        </div>
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 min-h-[250px] sm:min-h-[280px] flex flex-col justify-center">
            <Quote className="w-10 sm:w-12 h-10 sm:h-12 text-gold mb-4 sm:mb-6 mx-auto" />
            <p className="text-lg sm:text-xl md:text-2xl text-center leading-relaxed mb-6 sm:mb-8">
              {testimonials[currentIndex].text}
            </p>
            <div className="text-center">
              <p className="font-bold text-base sm:text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-sm sm:text-base text-white/70">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-full p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
          <button
            onClick={() => navigate('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-full p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-gold w-6 sm:w-8' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
