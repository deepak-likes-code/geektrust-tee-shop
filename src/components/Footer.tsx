// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white mt-12">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-semibold">E-Store</div>
        <div>
          <p>&copy; {new Date().getFullYear()} E-Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
