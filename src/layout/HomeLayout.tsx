import React, { ReactNode } from "react";
import styles from "./HomeLayout.module.css";
import { AppLayout } from "./AppLayout";
import { GlobalNav } from "../GlobalNav";

type Props = {
  children: ReactNode;
};

const SidebarStart: React.FC<Props> = ({ children }) => (
  <div className={styles["sidebar-start"]}>{children}</div>
);

const SidebarEnd: React.FC<Props> = ({ children }) => (
  <div className={styles["sidebar-end"]}>{children}</div>
);

const Content: React.FC<Props> = ({ children }) => (
  <div className={styles["content"]}>{children}</div>
);

type HomeLayoutComponent = React.FC<Props> & {
  SidebarStart: typeof SidebarStart;
  SidebarEnd: typeof SidebarEnd;
  Content: typeof Content;
};

const HomeLayout: HomeLayoutComponent = ({ children }) => {
  return (
    <AppLayout>
      <AppLayout.Nav>
        <GlobalNav />
      </AppLayout.Nav>
      <AppLayout.Content>
        <div className={styles.wrapper}>{children}</div>
      </AppLayout.Content>
      <AppLayout.Footer>HomeFooter</AppLayout.Footer>
    </AppLayout>
  );
};

HomeLayout.SidebarStart = SidebarStart;
HomeLayout.SidebarEnd = SidebarEnd;
HomeLayout.Content = Content;

export { HomeLayout };
