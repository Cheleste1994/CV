import React, { useMemo } from 'react';
import { addHoverElement, removeHoverElement } from '../../../common/hoverElement';
import randomIntFromInterval from '../../../common/random-number.helper';
import './quote.scss';

const quotes = [
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde' },
  { text: ' In order to be irreplaceable, one must always be different', author: 'Coco Chanel' },
  { text: 'Java is to JavaScript what car is to Carpet.', author: 'Chris Heilmann' },
  { text: 'Knowledge is power.', author: 'Francis Bacon' },
  { text: 'Ruby is rubbish! PHP is phpantastic!', author: 'Nikita Popov' },
  { text: ' Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
];

const Quote = () => {
  const randomQuote = useMemo(() => quotes[randomIntFromInterval(0, 7)], []);

  const textSplitSpan = (text: string) =>
    text
      .split('')
      .map((char) => <span key={randomIntFromInterval(0, new Date().getTime())}>{char}</span>);

  return (
    <blockquote
      className="Quote"
      onMouseMove={(e) => addHoverElement(e)}
      onMouseLeave={() => removeHoverElement()}
    >
      <div className="cursor" />
      {textSplitSpan(`"${randomQuote.text}" - `)} {textSplitSpan(randomQuote.author)}
      <div className="glitch">
        {textSplitSpan(`"${randomQuote.text}" - `)} {textSplitSpan(randomQuote.author)}
      </div>
    </blockquote>
  );
};

export default Quote;
