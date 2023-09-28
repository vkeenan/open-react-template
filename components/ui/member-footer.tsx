export function MemberFooter() {
  return (
    <footer className="bg-cocoa_brown-800">
      <div className="max-w-screen-xl px-4 pt-8 pb-8 mx-auto sm:px-6 lg:px-8">
        <p className="text-xs leading-relaxed text-center text-gray-300">
          © {new Date().getFullYear()} by Vernon Keenan, all rights reserved.
        </p>
      </div>
    </footer>
  );
}
