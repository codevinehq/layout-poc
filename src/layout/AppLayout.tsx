import React, { ReactNode } from "react";
import styles from "./AppLayout.module.css";

type Props = {
  children: ReactNode;
};

const Nav: React.FC<Props> = ({ children }) => (
  <div className={styles.nav}>{children}</div>
);

const Content: React.FC<Props> = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

const Footer: React.FC<Props> = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);

type AppLayoutComponent = React.FC<Props> & {
  Nav: typeof Nav;
  Content: typeof Content;
  Footer: typeof Footer;
};

const AppLayout: AppLayoutComponent = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

AppLayout.Nav = Nav;
AppLayout.Content = Content;
AppLayout.Footer = Footer;

export { AppLayout };
