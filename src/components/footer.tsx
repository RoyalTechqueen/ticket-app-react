export default function Footer() {
  return (
    <footer className="bg-blue-600 text-gray-300 text-center py-6 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-400">TicketApp</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built  by Asma’a Khadijah Ishowo
        </p>
      </div>
    </footer>
  );
}
