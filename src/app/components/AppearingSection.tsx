"use client";

import {
  ComponentProps,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import Section from "./Section";
import useScrollShow from "../hooks/useScrollShow";

interface Props extends ComponentProps<typeof Section> {}

const AppearingSection: FC<PropsWithChildren<Props>> = (props) => {
  const { children, className, ...rest } = props;

  const [ref, visibleRatio] = useScrollShow();

  return (
    <Section
      className={`${className} relative duration-300 ${
        visibleRatio > 0.4 ? "scale-y-100 opacity-90" : "scale-y-50 opacity-0"
      }`}
      {...rest}
      ref={ref}
    >
      {children}
    </Section>
  );
};

export default AppearingSection;
