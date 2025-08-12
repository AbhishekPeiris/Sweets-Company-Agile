export default function Select({ label, children, ...props }) {
  return (
    <label className="grid gap-1">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <select className="w-full px-3 py-2 border rounded" {...props}>
        {children}
      </select>
    </label>
  );
}
