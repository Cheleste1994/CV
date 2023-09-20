import { store } from '../store';
import { incrementCount } from '../store/slices/projects.slice';

export interface ScrollEvent extends Event {
  target: Element | null;
}

const handleScroll = (event: ScrollEvent) => {
  if (event.target) {
    const { scrollTop, offsetHeight, scrollHeight } = event.target as HTMLElement;
    if (scrollTop + offsetHeight === scrollHeight) {
      store.dispatch(incrementCount(1));
    }
  }
};

export default handleScroll;
