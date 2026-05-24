import heroBg from '../../../assets/dashboard-hero-background.mp4';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden w-full h-full z-0 bg-black">
      <video
        src={heroBg}
        className="absolute left-1/2 -translate-x-1/2 top-0"
        style={{
          width: '115%',
          height: '115%',
          minWidth: '115%',
          minHeight: '115%',
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        autoPlay
        muted
        playsInline
        loop
      />
    </div>
  );
}
