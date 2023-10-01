"use client";

import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import useScrollShow from "../hooks/useScrollShow";

interface Props {
  timeToHint?: number;
  activeClass?: string;
  inactiveClass?: string;
  showOnScroll?: boolean;
}

const TimedHint: FC<PropsWithChildren<Props>> = (props) => {
  const {
    timeToHint = 5000,
    children,
    activeClass = "scale-100",
    inactiveClass = "scale-0",
    showOnScroll = false,
  } = props;

  const [ref, visibleRatio] = useScrollShow<HTMLDivElement>();
  const [visible, setVisible] = useState(false);

  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visible || visibleRatio < 0.8 || timer.current) return;
    timer.current = setTimeout(() => {
      setVisible(true);
    }, timeToHint);
  }, [visibleRatio, timeToHint, visible]);

  useEffect(() => {
    if (visibleRatio < 0.5 && timer.current && !visible) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, [visibleRatio, visible]);

  useEffect(() => {
    if (showOnScroll) {
      const handler = () => {
        setVisible(true);
        document.removeEventListener("scroll", handler);
      };
      
      document.addEventListener("scroll", handler);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`duration-300 ${visible ? activeClass : inactiveClass}`}
    >
      {children}
    </div>
  );
};

export default TimedHint;
