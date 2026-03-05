import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
const galleryImages = [
  { title: 'תאריך מיוחד', description: 'חתונה, נישואין, יום הולדת או כל תאריך שמשמעותי לכם' },
  { title: 'בית', description: 'או כל מילה שתעניק משמעות לאהובכם' },
  { title: 'לב בתוך לב עם סרט', description: 'מתנה רומנטית מושלמת' },
  { title: 'סימן אינפיניטי', description: 'עיצוב מורכב ומרהיב' },
  { title: 'אהבה', description: 'על סטנד עץ מעוצב' },
  { title: 'שלום', description: 'כי זה הדבר שהכי צריך עכשיו' },
  { title: 'סמל יחידה או לוגו', description: 'סמל של יחידה צבאית או לוגו של חברה' },
  { title: 'EAT PRAY LOVE', description: 'או צירוף שאתם אוהבים', wide: true },
];
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-white rounded-full text-warm-brown text-sm font-medium mb-4">
            הגלריה שלי
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-brown mb-4 sm:mb-6">
            היצירות שלי
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            הצצה לספרים שיצרתי - כל אחד מהם סיפור ייחודי
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-md sm:shadow-lg p-2 sm:p-4 ${
                (image as any).wide ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
              onClick={() => setSelectedImage(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-full bg-soft-pink rounded-lg flex items-center justify-center">
                <span className="text-4xl">📖</span>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white">
                  <h3 className="font-bold text-sm sm:text-lg">{image.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 text-white hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 sm:w-8 h-6 sm:h-8" />
          </button>
          
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
          >
            <ChevronLeft className="w-8 sm:w-10 h-8 sm:h-10" />
          </button>
          
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
          >
            <ChevronRight className="w-8 sm:w-10 h-8 sm:h-10" />
          </button>
          <div className="max-w-4xl w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mx-2" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-64 sm:h-96 bg-soft-pink rounded-lg flex items-center justify-center">
              <span className="text-6xl">📖</span>
            </div>
            <div className="text-center mt-3 sm:mt-4">
              <h3 className="font-bold text-lg sm:text-xl text-deep-brown">{galleryImages[selectedImage].title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
