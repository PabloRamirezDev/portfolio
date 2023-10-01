import { useCallback, useEffect, useRef, useState } from "react";

const useScrollShow = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const [visibleRatio, setVisibleRatio] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const windowHeight = window.innerHeight;
    const { top, height, bottom } = ref.current.getBoundingClientRect();

    const topIsShown = top < windowHeight && top > 0;
    const bottomIsShown = bottom < windowHeight && bottom > 0;

    if (topIsShown && bottomIsShown) return setVisibleRatio(1);
    if (!topIsShown && !bottomIsShown) return setVisibleRatio(0);
    if (!bottomIsShown) return setVisibleRatio((windowHeight - top) / height);
    if (!topIsShown) return setVisibleRatio(bottom / height);
  }, [ref]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(handleScroll, [handleScroll]);

  return [ref, visibleRatio] as const;
};

export default useScrollShow;
