import type { FC } from 'react';

import * as styles from '../styles/Button.module.scss';

const Button: FC = () => {
  return <button className={styles.button}>Boop</button>;
};

export default Button;
