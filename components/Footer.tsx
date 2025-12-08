const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-accent">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} No Fake SD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
