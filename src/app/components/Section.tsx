import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Section: FC<PropsWithChildren<Props>> = (props) => {
  const { className = "", children } = props;

  return (
    <section className={`w-screen min-h-screen px-3 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
