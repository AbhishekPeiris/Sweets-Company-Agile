export default function Empty({ title = "No data", subtitle }) {
  return (
    <div className="p-12 text-center border-2 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl border-primary-accent/30 animate-glow">
      <div className="flex flex-col items-center gap-6">
        <span className="text-6xl animate-bounce-gentle">🌟</span>
        <div className="font-fancy text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          {title}
        </div>
        {subtitle && (
          <div className="font-modern text-lg text-dark-base/70">
            {subtitle}
          </div>
        )}
        <div className="w-16 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
