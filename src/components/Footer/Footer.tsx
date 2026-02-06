const Footer = () => {
  return (
    <>
      <footer className="bg-sky-950 text-sky-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm">
          <p>&copy;{new Date().getFullYear()} ShortiFy</p>

          <p> Built with ❤️ using Next.js</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
