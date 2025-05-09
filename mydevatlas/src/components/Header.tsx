// src/components/Header.tsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 shadow-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-sky-400 tracking-tight">
          MyDevAtlas
        </Link>
        <nav className="space-x-6 text-sm font-medium text-slate-200">
          <Link to="/" className="hover:text-sky-400 transition">
            Home
          </Link>
          <Link to="/map" className="hover:text-sky-400 transition">
            Map
          </Link>
          <Link to="/about" className="hover:text-sky-400 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
