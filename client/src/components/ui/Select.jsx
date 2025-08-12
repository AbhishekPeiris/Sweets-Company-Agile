export default function Select({ label, children, ...props }) {
  return (
    <label className="grid gap-2">
      {label && <span className="text-sm font-medium text-dark-base">{label}</span>}
      <select
        className="w-full px-3 py-2 border rounded-md bg-light-base border-primary-accent/30 text-dark-base focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-primary-accent"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
