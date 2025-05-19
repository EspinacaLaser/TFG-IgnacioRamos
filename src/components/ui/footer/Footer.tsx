import Copyright from './Copyright';
import SocialLinks from './SocialMedia';

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#6d166a] via-[#7e2b7a] to-[#cae303] text-white py-6 px-4 text-center border-t-2 border-yellow-300">
    <div className="mb-2">
      <p className="font-semibold">Hotel Gestión - Todos los derechos reservados</p>
      <nav className="mt-1">
        <a href="/aviso-legal" className="underline hover:text-yellow-300 mx-2">Aviso Legal</a>
        <a href="/privacidad" className="underline hover:text-yellow-300 mx-2">Política de Privacidad</a>
      </nav>
    </div>
    <SocialLinks />
    <div className="mt-2">
      <Copyright />
    </div>
  </footer>
);

export default Footer;