import Copyright from './Copyright';

const FooterBottom = () => (
  <div className="bg-[#222] text-white/80 py-3 px-4 text-center border-t border-yellow-300">
    <nav className="mb-1">
      <a href="/cookies" className="underline hover:text-yellow-300 mx-2">Cookies</a>
      <a href="/privacidad" className="underline hover:text-yellow-300 mx-2">Política de Privacidad</a>
      <a href="/atencion-cliente" className="underline hover:text-yellow-300 mx-2">Atención al Cliente</a>
    </nav>
    <Copyright />
  </div>
);

export default FooterBottom;