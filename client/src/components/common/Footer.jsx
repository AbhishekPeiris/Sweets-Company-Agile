export default function Footer() {
  return (
    <footer className="border-t bg-light-base border-primary-accent/30">
      <div className="max-w-6xl p-4 mx-auto text-sm text-dark-base/70">
        © {new Date().getFullYear()} Sweets Company. All rights reserved.
      </div>
    </footer>
  );
}
