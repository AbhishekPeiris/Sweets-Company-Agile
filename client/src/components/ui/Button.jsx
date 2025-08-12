export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-dark-base text-white hover:bg-secondary-accent transition-colors duration-200 font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
