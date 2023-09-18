const cursorMove = () => {
  const cursor = document.querySelector('.cursor') as HTMLElement;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    if (cursor) {
      cursor.style.left = `${e.offsetX}px`;
      cursor.style.top = `${e.offsetY}px`;
    }
  });
};

export default cursorMove;
