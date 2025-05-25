import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
import React, { useState } from "react";

interface ScrollToTopNavLinkProps extends NavLinkProps {
  to: string;
  activeClassName?: string;
}

const ScrollToTopNavLink: React.FC<ScrollToTopNavLinkProps> = ({
  to,
  children,
  ...rest
}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  const handleClick = (_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Solo hace scroll si la ruta es diferente
    if (location.pathname !== to && !isScrolling) {
      setIsScrolling(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default ScrollToTopNavLink;