export default function Empty({ title = "No data", subtitle }) {
  return (
    <div className="p-6 text-center border rounded-lg bg-light-base border-primary-accent/20">
      <div className="font-medium text-dark-base">{title}</div>
      {subtitle && <div className="mt-1 text-sm text-dark-base/70">{subtitle}</div>}
    </div>
  );
}
