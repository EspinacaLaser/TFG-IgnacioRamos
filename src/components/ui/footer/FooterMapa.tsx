const FooterMapa = () => (
  <iframe
    title="Ubicación Hotel"
    src="https://www.google.com/maps/embed?pb=!1m18!..." // Pon aquí tu enlace real de Google Maps
    width="220"
    height="120"
    style={{ border: 0, borderRadius: 8 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

export default FooterMapa;