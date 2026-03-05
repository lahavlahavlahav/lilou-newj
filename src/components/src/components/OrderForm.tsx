


import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/xwpewzgk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', occasion: '', details: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  if (status === 'success') {
    return (
      <section id="order" className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-green-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
            <CheckCircle className="w-16 sm:w-20 h-16 sm:h-20 text-green-500 mx-auto mb-4 sm:mb-6" />
            <h2 className="font-display text-2xl sm:text-3xl text-deep-brown mb-3 sm:mb-4">
              ההודעה נשלחה בהצלחה!
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              תודה על פנייתך! אחזור אליך בהקדם.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              שליחת הודעה נוספת
            </button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="order" className="py-16 sm:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-soft-pink rounded-full text-warm-brown text-sm font-medium mb-4">
            בואו ניצור יחד
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown mb-4 sm:mb-6">
            הזמנת ספר מפוסל
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            ספרו לי על היצירה שאתם מדמיינים ואחזור אליכם עם הצעה
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-deep-brown mb-2">
                שם מלא *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base"
                placeholder="השם שלכם"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-deep-brown mb-2">
                טלפון *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base"
                placeholder="050-0000000"
                dir="ltr"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-deep-brown mb-2">
              אימייל *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base"
              placeholder="your@email.com"
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-deep-brown mb-2">
              לאיזה אירוע?
            </label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base appearance-none"
            >
              <option value="">בחרו אירוע</option>
              <option value="wedding">חתונה</option>
              <option value="birthday">יום הולדת</option>
              <option value="bar-mitzvah">בר/בת מצווה</option>
              <option value="anniversary">יום נישואין</option>
              <option value="gift">מתנה</option>
              <option value="other">אחר</option>
            </select>
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-deep-brown mb-2">
              ספרו לי על היצירה שאתם מדמיינים *
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={4}
              value={formData.details}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-base"
              placeholder="איזו מילה/עיצוב תרצו? למי המתנה מיועדת? יש תאריך מיוחד?"
            />
          </div>
          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl text-red-600">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">משהו השתבש. נסו שוב או צרו קשר ישירות.</span>
            </div>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-gradient-to-r from-primary to-gold text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                שולח...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                שליחת הפנייה
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
