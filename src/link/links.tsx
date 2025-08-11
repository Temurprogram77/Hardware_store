import { Link as RouterLink } from "react-router-dom";

export const Link = RouterLink;

export const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <RouterLink to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </RouterLink>
  );
};