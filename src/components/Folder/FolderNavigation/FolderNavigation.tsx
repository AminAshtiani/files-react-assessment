import { Breadcrumbs, Anchor } from "@mantine/core";
import styles from "./FolderNavigation.module.scss";

type FolderNavigationProps = {
  title: string;
};

export const FolderNavigation = (props: FolderNavigationProps) => {
  return (
    <Breadcrumbs>
      <Anchor underline="never" size="xl" className={styles.nav}>
        {props.title}
      </Anchor>
    </Breadcrumbs>
  );
};
