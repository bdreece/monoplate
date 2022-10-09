import type { FC } from 'react';

import styles from '../styles/Layout.module.scss';

type LayoutProps = {
  children?: string | JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);

export default Layout;
