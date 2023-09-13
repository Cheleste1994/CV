import React from 'react';
import './projects.scss';

export default function Projects() {
  return (
    <div className="projects">
      <iframe
        src="https://cheleste1994.github.io/project/rs-css/"
        title="External Website"
        className="rs-css"
        key="rs-css"
      />
      <iframe
        src="https://cheleste1994.github.io/project/shelter/pages/main/"
        title="External Website"
        className="shelter"
        key="shelter"
      />
      <iframe
        src="https://cheleste1994.github.io/project/minesweeper/"
        title="External Website"
        className="minesweeper"
        key="minesweeper"
      />
      <iframe
        src="https://cheleste1994.github.io/virtual-keyboard/"
        title="External Website"
        className="virtual-keyboard"
        key="virtual-keyboard"
      />
      <iframe
        src="https://cheleste1994.github.io/project/momentum/"
        title="External Website"
        className="momentum"
        key="momentum"
      />
      <iframe
        src="https://cheleste1994.github.io/cssBayan/cssBayan/"
        title="External Website"
        className="cssBayan"
        key="cssBayan"
      />
      <iframe
        src="https://cheleste1994.github.io/project/async-race/"
        title="External Website"
        className="async-race"
        key="async-race"
      />
      <iframe
        src="https://cheleste1994.github.io/project/migration-newip-to-ts/"
        title="External Website"
        className="migration-newip-to-ts"
        key="migration-newip-to-ts"
      />
    </div>
  );
}
