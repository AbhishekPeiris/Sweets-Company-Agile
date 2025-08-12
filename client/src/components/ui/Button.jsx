export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-2xl bg-gradient-to-r from-primary-accent to-secondary-accent text-white hover:from-secondary-accent hover:to-primary-accent transition-all duration-300 font-stylish font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 animate-glow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
