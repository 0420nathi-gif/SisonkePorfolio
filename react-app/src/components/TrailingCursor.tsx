import { useEffect, useRef } from 'react';

function TrailingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    const cursor = cursorRef.current;

    if (!finePointer.matches || !cursor) {
      return;
    }

    function moveCursor(event: MouseEvent) {
      cursor?.style.setProperty('--cursor-x', `${event.clientX}px`);
      cursor?.style.setProperty('--cursor-y', `${event.clientY}px`);
      cursor?.classList.add('is-visible');
    }

    function hideCursor() {
      cursor?.classList.remove('is-visible');
    }

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <div className="trailing-cursor" aria-hidden="true" ref={cursorRef}>
      <span className="cursor-tail-dot cursor-tail-one" />
      <span className="cursor-tail-dot cursor-tail-two" />
      <span className="cursor-tail-dot cursor-tail-three" />
      <span className="cursor-tail-dot cursor-tail-four" />
      <span className="cursor-head" />
    </div>
  );
}

export default TrailingCursor;
