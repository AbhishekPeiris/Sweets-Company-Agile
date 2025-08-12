export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-3 py-2 rounded bg-gray-800 text-white hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
