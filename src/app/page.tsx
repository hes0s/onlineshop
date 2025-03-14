// app/page.tsx
import About from "./pages/About";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <nav className="navbar">
        <ul className="flex space-x-4">
          <li className="navbar-item">
            <Link href="/home" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to Next.js!</h1>
      <About />
    </>
  );
}

