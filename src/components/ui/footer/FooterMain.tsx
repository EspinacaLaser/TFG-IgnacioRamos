import FooterLogo from './FooterLogo';
import FooterMapa from './FooterMapa';
import FooterContacto from './FooterContacto';

const FooterMain = () => (
  <div className="bg-gradient-to-r from-[#6d166a] via-[#7e2b7a] to-[#cae303] text-white py-8 px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <FooterContacto />
    </div>
    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
      <FooterMapa />
    </div>
    <div className="w-full md:w-1/3 flex justify-end">
      <FooterLogo />
    </div>
  </div>
);

export default FooterMain;