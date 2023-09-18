const addHoverElement = (event: { clientX?: any; clientY?: any; target?: any }) => {
  const { target } = event;
  if (target instanceof HTMLElement) {
    if (target.tagName === 'SPAN') {
      target.classList.add('span__active');
    }
  }
};

export default addHoverElement;
