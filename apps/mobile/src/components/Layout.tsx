import type { FC } from 'react';

type LayoutProps = {
  children?: string | JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <main
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    {children}
  </main>
);

export default Layout;
