import React from 'react';
import './navigate.scss';

export default function Navigate() {
  const handleClick = () => {
    const main = document.querySelector('main');
    if (main) {
      main?.scrollBy({ top: main.scrollHeight, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="scroll__bottom" onClick={handleClick}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
