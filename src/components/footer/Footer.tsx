import "./Footer.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      Made with ❤️, just like grandmothers make food 🥗 for their grandchildren.
      <strong> Adriano Interaminense © {currentYear}</strong>
    </div>
  );
}
