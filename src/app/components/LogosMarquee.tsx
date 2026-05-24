

const logos = [
  { name: 'Supabase', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Supabase_logo.svg' },
  { name: 'Vercel', url: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Github', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
  { name: 'Adobe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Adobe_Systems_logo_and_wordmark.svg' },
  { name: 'Zendesk', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Zendesk_logo.svg' },
  { name: 'Uber', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
];

export default function LogosMarquee() {
  return (
    <section className="py-12 border-b border-neutral-200/60 flex flex-col items-center justify-center space-y-8 w-full overflow-hidden bg-white">
      <p className="text-sm font-medium text-neutral-500">Teams from top companies build with Muse</p>
      
      <div 
        className="w-full relative flex items-center overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {/* Double the logos to create the infinite scroll effect */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-8 sm:mx-12 lg:mx-16 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-6 sm:h-7 object-contain max-w-[120px]" 
                style={{ filter: logo.name === 'Github' || logo.name === 'Vercel' ? 'brightness(0)' : 'none' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
