


import { MessageCircle, Instagram, Mail } from 'lucide-react';
const contactMethods = [
  {
    icon: MessageCircle,
    title: 'וואטסאפ',
    subtitle: 'תשובה מהירה',
    action: 'שלחו הודעה',
    href: 'https://wa.me/972547669930',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    icon: Instagram,
    title: 'אינסטגרם',
    subtitle: '@liloubooks',
    action: 'עקבו אחריי',
    href: 'https://instagram.com/liloubooks',
    color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500'
  },
  {
    icon: Mail,
    title: 'אימייל',
    subtitle: 'liloubooks@gmail.com',
    action: 'שלחו מייל',
    href: 'mailto:liloubooks@gmail.com',
    color: 'bg-primary hover:bg-primary/90'
  }
];
export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-white rounded-full text-warm-brown text-sm font-medium mb-4">
            דברו איתי
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown mb-4 sm:mb-6">
            יצירת קשר
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            יש שאלות? רוצים לשמוע עוד? אשמח לשמוע מכם!
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className={`w-14 sm:w-16 h-14 sm:h-16 ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110`}>
                <method.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-deep-brown mb-1">{method.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{method.subtitle}</p>
              <span className="text-sm sm:text-base font-medium text-primary group-hover:underline">
                {method.action} ←
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
