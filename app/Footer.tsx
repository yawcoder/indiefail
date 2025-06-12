import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-10">
      <hr className="border-t border-gray-300 w-full mb-4" />
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-4">
          <Link href="/about" className="text-sm text-blue-600 hover:underline">About</Link>
          <a
            href="mailto:isaac16anim@gmail.com"
            className="text-sm text-blue-600 hover:underline"
          >
            Contact
          </a>
          <a
            href="https://x.com/isaac16anim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Twitter
          </a>
        </div>
        <span className="text-sm text-gray-500">Built by <a href="https://isaacanim.com">Isaac Boamah Anim</a></span>
      </div>
    </footer>
  );
}