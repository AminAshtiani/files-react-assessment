import { Paper, Stack, Tabs } from "@mantine/core";
import { useEffect, useState, type FC } from "react";
import { FolderNavigation } from "./FolderNavigation";
import type { FolderItem, FolderItemOptions } from "~/types";

type FolderProps = {
  data: FolderItem[];
  navTitle: string;
  gridView: FC<{ items: FolderItem[]; options: FolderItemOptions[] }>;
  tableView: FC<{ items: FolderItem[]; options: FolderItemOptions[] }>;
  options: FolderItemOptions[];
};

export const Folder = (props: FolderProps) => {
  const [data, setData] = useState<FolderItem[]>([]);
  const [activeTab, setActiveTab] = useState("grid");

  useEffect(() => {
    setData(props.data);
  }, [props]);

  let ViewComponent: FC<{ items: FolderItem[]; options: FolderItemOptions[] }>;
  if (activeTab === "grid") {
    ViewComponent = props.gridView;
  } else {
    ViewComponent = props.tableView;
  }

  return (
    <Paper p="md" style={{ margin: 20 }}>
      <FolderNavigation title={props.navTitle} />

      <Tabs value={activeTab} onChange={(val) => setActiveTab(val as any)} style={{ marginTop: 20, marginBottom: 20 }}>
        <Tabs.List>
          <Tabs.Tab value="grid">Grid View</Tabs.Tab>
          <Tabs.Tab value="table">Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Stack>
        <ViewComponent items={data} options={props.options} />
      </Stack>
    </Paper>
  );
};
