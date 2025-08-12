export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl p-4 mx-auto text-sm text-gray-600">
        © {new Date().getFullYear()} Sweets Company. All rights reserved.
      </div>
    </footer>
  );
}
