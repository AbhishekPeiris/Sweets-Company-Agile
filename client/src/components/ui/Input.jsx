export default function Input({ label, ...props }) {
  return (
    <label className="grid gap-1">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <input
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        {...props}
      />
    </label>
  );
}
