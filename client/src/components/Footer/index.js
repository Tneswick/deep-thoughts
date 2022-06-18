import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by <a href="https://www.github.com/Tneswick">Tneswick</a>
      </div>
    </footer>
  );
};

export default Footer;
