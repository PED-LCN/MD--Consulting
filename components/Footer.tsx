
import React from 'react';
import { USAFlagIcon, BrazilFlagIcon } from './icons/Flags';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <span className="text-xl font-bold text-blue-900">SpeakUp</span>
          <div className="flex items-center space-x-1">
            <USAFlagIcon className="h-5 w-5" />
            <BrazilFlagIcon className="h-5 w-5" />
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} SpeakUp. All rights reserved.</p>
        <p className="text-sm">Bridging Cultures Through Conversation.</p>
      </div>
    </footer>
  );
};

export default Footer;
