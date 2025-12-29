import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-semibold text-green-600">
          KayCribs
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/browse">Browse Properties</Link>
          <Link href="/legal-services">Legal Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-3">
          <Link
            href="/auth/buyer/login"
            className="px-4 py-2 border rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/auth/buyer/register"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
