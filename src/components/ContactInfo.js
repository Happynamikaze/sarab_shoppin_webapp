import React from 'react';

const ContactInfo = () => {
  const openEmailApp = (e) => {
    e.preventDefault();
 
    window.location.href = 'mailto:sarabjeetcing@gmail.com';
  };

  return (
    <div className="mt-0 text-center">
      <p className="text-sm text-white italic">
        Crafted with ❤️ by <span className="font-semibold">Sarabjeet Singh</span><br />
        fueled by passion, built with love.
      </p>
      <a
        href="mailto:sarabjeetcing@gmail.com"
        onClick={openEmailApp}
        className="hover:text-blue-700 text-green-500 mt-1 inline-block italic"
      >
        sarabjeet@gmail.com
      </a>
    </div>
  );
};

export default ContactInfo;
