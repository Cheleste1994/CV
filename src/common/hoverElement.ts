export const addHoverElement = (event: { clientX?: any; clientY?: any; target?: any }) => {
  const { target } = event;
  if (target instanceof HTMLElement) {
    if (target.tagName === 'SPAN') {
      target.classList.add('span__active');
    }
  }
};

export const removeHoverElement = () => {
  const spanActive = document.querySelectorAll('.span__active');
  spanActive?.forEach((el) => el.classList.remove('span__active'));
};
