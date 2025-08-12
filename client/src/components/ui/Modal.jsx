export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="w-full max-w-lg p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-dark-base">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 transition-colors duration-200 rounded text-dark-base/70 hover:text-dark-base hover:bg-primary-accent/20"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
