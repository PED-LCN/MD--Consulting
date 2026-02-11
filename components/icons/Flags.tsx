
import React from 'react';

export const USAFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <path fill="#fff" d="M0 0h900v600H0z"/>
    <path fill="#b22234" d="M0 0h900v323.076H0zM0 369.23h900v46.154H0zM0 461.538h900v46.154H0zM0 553.846h900v46.154H0z"/>
    <path fill="#3c3b6e" d="M0 0h400v323.076H0z"/>
  </svg>
);

export const BrazilFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 630" {...props}>
    <rect width="900" height="630" fill="#009c3b"/>
    <path d="M450 63l380 252-380 252L70 315z" fill="#ffdf00"/>
    <circle cx="450" cy="315" r="110" fill="#002776"/>
  </svg>
);
