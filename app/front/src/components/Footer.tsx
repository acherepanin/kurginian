import { useContent } from "../hooks/useContent";

export function Footer() {
  const { c } = useContent();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{c.doctor.name}</span>
          <span className="footer-role">
            {c.doctor.role} · {c.doctor.location}
          </span>
        </div>
        <p className="footer-disclaimer">{c.footer.disclaimer}</p>
        <p className="footer-rights">
          © {year} {c.doctor.name}. {c.footer.rights}
        </p>
      </div>
    </footer>
  );
}
