import type { FC } from 'react';

import { motion as m } from 'framer-motion';

import * as styles from '../styles/Card.module.scss';

export type CardProps = {
  title?: string | JSX.Element;
  children?: string | JSX.Element | JSX.Element[];
};

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <m.article
      className={styles.card}
      whileHover={{
        y: '100px',
      }}
      whileTap={{
        opacity: 0,
      }}
    >
      <h1>{title ?? 'Card title'}</h1>
      <section>{children}</section>
    </m.article>
  );
};

export default Card;
