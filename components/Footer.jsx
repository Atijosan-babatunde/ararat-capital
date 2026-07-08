export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">All rights reserved. Ararat Capital Holdings. © {year}</div>
    </footer>
  );
}
