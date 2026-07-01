import { useContent } from "../hooks/useContent";

export function Footer() {
  const { c } = useContent();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-inner">
          <span className="footer-meta">{c.doctor.role}</span>
          <span className="footer-rights">
            © {year} · {c.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
