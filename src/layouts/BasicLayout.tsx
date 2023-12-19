import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  // middle ware add here, like redux, router, etc.
  return <div>{children}</div>;
};

export { Layout };
