import SocialLinks from './SocialLinks';

const FooterContacto = () => (
  <div>
    <p className="font-semibold mb-2">Teléfono: <a href="tel:+34123456789" className="underline hover:text-yellow-300">+34 123 456 789</a></p>
    <SocialLinks />
  </div>
);

export default FooterContacto;