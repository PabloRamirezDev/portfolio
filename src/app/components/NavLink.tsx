import Link from "next/link";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

interface Props {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavLink: FC<PropsWithChildren<Props>> = (props) => {
  const { href, children, onClick } = props;
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="duration-300 p-5 rounded-full hover:bg-brand-white/10"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
