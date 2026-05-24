import { useState } from 'react';
import { Play } from 'lucide-react';
import thumbnailImg from '../../assets/image.png';

type VideoShowcaseProps = {
  scrollProgress?: number; // 0 to 1
};

export default function VideoShowcase({ scrollProgress = 0 }: VideoShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Eased progress using smooth cubic interpolation for organic feel
  const eased = scrollProgress < 0.5
    ? 4 * scrollProgress * scrollProgress * scrollProgress
    : 1 - Math.pow(-2 * scrollProgress + 2, 3) / 2;

  // Scale from 0.78 → 1.0 (larger range = more dramatic expansion)
  const scale = 0.78 + eased * 0.22;
  // Border radius from 52px → 16px as it scales up
  const radius = 52 - eased * 36;
  // Opacity fades in from 0.6 → 1.0 for cinematic reveal
  const opacity = 0.6 + eased * 0.4;

  return (
    <div 
      className="mt-10 sm:mt-16 pb-16 w-full relative z-10"
      style={{
        /* 4px gap from edges when fully expanded: outer padding shrinks as it expands */
        paddingLeft: `${Math.max(4, 16 - eased * 12)}px`,
        paddingRight: `${Math.max(4, 16 - eased * 12)}px`,
        transition: 'padding 0.02s linear',
      }}
    >
      <div
        className="relative w-full overflow-hidden cursor-pointer group mx-auto"
        style={{
          aspectRatio: '16 / 9',
          borderRadius: `${radius}px`,
          transform: `scale(${scale})`,
          opacity,
          willChange: 'transform, border-radius, opacity',
          boxShadow: `0 ${24 * eased}px ${64 * eased}px rgba(0, 0, 0, ${0.15 + eased * 0.1})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail Image */}
        <img
          src={thumbnailImg}
          alt="MUSE platform preview"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />

        {/* Subtle dark overlay for contrast */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 100%)',
            opacity: isHovered ? 0.85 : 0.7,
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Centered Play Button with Liquid Glass */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            className="relative flex items-center justify-center"
            style={{
              width: '80px',
              height: '80px',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            }}
          >
            {/* Outer glow pulse */}
            <div 
              className="absolute inset-[-12px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                opacity: isHovered ? 1 : 0.4,
                transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Liquid Glass Circle */}
            <div className="absolute inset-0 liquid-glass rounded-full overflow-hidden" 
              style={{
                boxShadow: `
                  inset 0 2px 8px rgba(255, 255, 255, 0.45),
                  inset 0 -4px 8px rgba(0, 0, 0, 0.12),
                  0 12px 40px rgba(0, 0, 0, 0.25),
                  0 4px 12px rgba(0, 0, 0, 0.1)
                `,
              }}
            />

            {/* Play Icon */}
            <Play 
              className="relative z-10 text-white fill-white"
              style={{
                width: '28px',
                height: '28px',
                marginLeft: '3px',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                transition: 'filter 0.6s ease',
              }}
            />
          </button>
        </div>

        {/* Bottom gradient fade for depth */}
        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
}
