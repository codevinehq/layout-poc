import React, { ReactNode } from "react";
import styles from "./WalletLayout.module.css";

import { AppLayout } from "./AppLayout";
import { GlobalNav } from "../GlobalNav";

type Props = {
  children: ReactNode;
};

const Nav: React.FC<Props> = ({ children }) => (
  <div className={styles.nav}>{children}</div>
);

const Sidebar: React.FC<Props> = ({ children }) => (
  <div className={styles.sidebar}>{children}</div>
);

const Content: React.FC<Props> = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

type WalletLayoutComponent = React.FC<Props> & {
  Nav: typeof Nav;
  Sidebar: typeof Sidebar;
  Content: typeof Content;
};

const WalletLayout: WalletLayoutComponent = ({ children }) => {
  return (
    <AppLayout>
      <AppLayout.Nav>
        <GlobalNav />
      </AppLayout.Nav>
      <AppLayout.Content>
        <div className={styles.wrapper}>{children}</div>
      </AppLayout.Content>
      <AppLayout.Footer>WalletFooter</AppLayout.Footer>
    </AppLayout>
  );
};

WalletLayout.Nav = Nav;
WalletLayout.Sidebar = Sidebar;
WalletLayout.Content = Content;

export { WalletLayout };
