import {
  FC,
  ForwardRefRenderFunction,
  PropsWithChildren,
  Ref,
  forwardRef,
} from "react";

interface Props {
  className?: string;
  id?: string;
}

const Section: ForwardRefRenderFunction<
  HTMLElement,
  PropsWithChildren<Props>
> = (props, ref) => {
  const { className = "", children, id } = props;

  return (
    <section
      id={id}
      className={`w-full min-h-screen scroll-mt-60 ${className}`}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default forwardRef(Section);
