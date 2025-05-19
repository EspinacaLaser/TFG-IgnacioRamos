import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div style={{ marginTop: '0.5rem' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: 'white' }}>
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: 'white' }}>
        Twitter
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
        Instagram
      </a>
    </div>
  );
};

export default SocialLinks;
// This component can be used in the Footer component to display social media links
// and can be styled as needed. You can replace the href attributes with actual links to your social media profiles.