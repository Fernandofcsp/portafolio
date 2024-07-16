import { NavLink, NavLinkProps } from "react-router-dom";
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

  const handleClick = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 500); // Asegura que el estado se restablezca después de 500ms
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
