import React from 'react';
import styles from './Footer.module.css';
import Copyright from './Copyright';
import SocialLinks from './SocialMedia';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Hotel Gestión - Todos los derechos reservados</p>
        <nav>
          <a href="/aviso-legal">Aviso Legal</a> |{' '}
          <a href="/privacidad">Política de Privacidad</a>
        </nav>
      </div>
      <Copyright />
      <SocialLinks />
    </footer>
  );
};

export default Footer;
