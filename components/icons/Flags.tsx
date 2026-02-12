
import React from 'react';

export const USAFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1900 1000"
    {...props}
  >
    {/* Fundo branco */}
    <rect width="1900" height="1000" fill="#ffffff" />

    {/* Listras vermelhas */}
    {[...Array(13)].map((_, i) =>
      i % 2 === 0 ? (
        <rect
          key={i}
          y={(1000 / 13) * i}
          width="1900"
          height={1000 / 13}
          fill="#B22234"
        />
      ) : null
    )}

    {/* Cantão azul */}
    <rect width="760" height={(1000 / 13) * 7} fill="#3C3B6E" />

    {/* Estrelas */}
    {[...Array(9)].map((_, row) =>
      [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={
            row % 2 === 0
              ? 60 + col * 120
              : 120 + col * 120
          }
          cy={40 + row * 70}
          r="15"
          fill="#ffffff"
        />
      ))
    )}
  </svg>
);

export const BrazilFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 630" {...props}>
    <rect width="900" height="630" fill="#009c3b"/>
    <path d="M450 63l380 252-380 252L70 315z" fill="#ffdf00"/>
    <circle cx="450" cy="315" r="110" fill="#002776"/>
  </svg>
);
