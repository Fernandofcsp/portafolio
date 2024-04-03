import { NavLink, NavLinkProps } from "react-router-dom";

interface ScrollToTopNavLinkProps extends NavLinkProps {
  to: string;
}

const ScrollToTopNavLink: React.FC<ScrollToTopNavLinkProps> = ({
  to,
  children,
  ...rest
}) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTouchStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default ScrollToTopNavLink;
