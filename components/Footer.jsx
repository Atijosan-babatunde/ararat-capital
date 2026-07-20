import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-contact">
          <div className="footer-contact-item">
            <div className="label">
              <Phone size={14} /> Telephone
            </div>
            <a href="tel:+44 3330501811">+44 3330501811</a>
          </div>
          <div className="footer-contact-item">
            <div className="label">
              <Mail size={14} /> E-mail
            </div>
            <a href="mailto:lara@araratholdings.com">lara@araratholdings.com</a>
          </div>
          <div className="footer-contact-item">
            <div className="label">
              <MapPin size={14} /> Location
            </div>
            <span>[United Kingdom]</span>
          </div>
        </div>
        <div className="footer-bottom">All rights reserved. Ararat Capital Holdings. © {year}</div>
      </div>
    </footer>
  );
}
