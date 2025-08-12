export default function Select({ label, children, ...props }) {
  return (
    <label className="grid gap-3">
      {label && <span className="font-semibold font-stylish text-dark-base">{label}</span>}
      <select
        className="w-full px-4 py-3 transition-all duration-300 border-2 rounded-2xl bg-white/70 border-primary-accent/30 text-dark-base focus:outline-none focus:ring-4 focus:ring-primary-accent/20 focus:border-primary-accent font-modern"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
