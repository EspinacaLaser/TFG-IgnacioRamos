/**
 * Footer principal de la aplicación.
 * Compuesto por FooterMain (logo, mapa, contacto/redes) y FooterBottom (enlaces legales y copyright).
 */
import FooterMain from './FooterMain';
import FooterBottom from './FooterBottom';

const Footer = () => (
  <footer>
    <FooterMain />
    <FooterBottom />
  </footer>
);

export default Footer;