export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10 py-6 px-4 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} ASBO. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-blue-600">
        <a href="mailto:info@asbo.com" className="hover:underline">
          info@asbo.com
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
