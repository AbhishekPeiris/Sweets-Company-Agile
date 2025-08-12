export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg p-8 border-2 shadow-2xl rounded-3xl bg-white/90 backdrop-blur-xl border-primary-accent/30 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold font-fancy text-dark-base">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 transition-all duration-300 transform rounded-full text-dark-base/70 hover:text-white hover:bg-gradient-to-r hover:from-primary-accent hover:to-secondary-accent hover:scale-110"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>
        <div className="font-modern">{children}</div>
      </div>
    </div>
  );
}
