const FooterMapa = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.578628729898!2d-4.027345324545687!3d39.86127508925991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0ba895800ff1%3A0x8c82adb45fc2878c!2sHotel%20Real%20de%20Toledo!5e0!3m2!1ses!2ses!4v1748075339680!5m2!1ses!2ses"
    width={400}
    height={300}
    style={{ border: 0, borderRadius: 8 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Ubicación Hotel"
  />
);

export default FooterMapa;