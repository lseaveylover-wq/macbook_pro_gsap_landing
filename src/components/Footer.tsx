import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          get help choosing the perfect MacBook for you.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>
      <hr />
      <div className="links">
        <p>
          Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights
          reserved.
        </p>
        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}> {label} </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
