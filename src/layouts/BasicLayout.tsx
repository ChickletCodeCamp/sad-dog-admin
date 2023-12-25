import React, { ReactNode } from "react";
import { HeaderComponent } from "../components/layout";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ zIndex: 1000 }}>
      <HeaderComponent />
      {children}
    </div>
  );
};

export { Layout };
