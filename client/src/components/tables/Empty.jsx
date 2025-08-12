export default function Empty({ title = "No data", subtitle }) {
  return (
    <div className="p-6 text-center bg-white border rounded">
      <div className="font-medium">{title}</div>
      {subtitle && <div className="mt-1 text-sm text-gray-600">{subtitle}</div>}
    </div>
  );
}
