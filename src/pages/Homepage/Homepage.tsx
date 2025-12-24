import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import { Folder } from "~/components";
import { GridView, TableView } from "~/components/View";
import { useApi } from "~/hooks/useApi";
import type { FolderItem } from "~/types";

export const Homepage = () => {
  const { data, error, loading } = useApi<FolderItem[]>({ 
    url: "/items.json",
    refGuard: true
  });
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <Folder
      navTitle="Homepage"
      data={data || []}
      gridView={GridView}
      tableView={TableView}
      options={[
        {
          label: "Mark as Favorite",
          onClick() {
            modals.openConfirmModal({
              title: "Mark as Favorite",
              children: (<Text>Are you sure you want to mark this item as favorite?</Text>),
              labels: {
                confirm: "Mark as Favorite",
                cancel: "Cancel",
              },
              onConfirm: () => {
                console.log("Marked as Favorite");
              },
              onCancel: () => {
                console.log("Cancelled");
              },
            });
          },
        },
        {
          label: "Share",
          onClick() {
            modals.openConfirmModal({
              title: "Share",
              children: (<Text>Are you sure you want to share this item?</Text>),
              labels: {
                confirm: "Share",
                cancel: "Cancel",
              },
              onConfirm: () => {
                console.log("Shared");
              },
              onCancel: () => {
                console.log("Cancelled");
              },
            });
          },
        },
        {
          label: "Delete",
          onClick() {
            modals.openConfirmModal({
              title: "Delete",
              children: (<Text>Are you sure you want to delete this item?</Text>),
              labels: {
                confirm: "Delete",
                cancel: "Cancel",
              },
              confirmProps: {
                color: "red",
              },
              onConfirm: () => {
                console.log("Deleted");
              },
              onCancel: () => {
                console.log("Cancelled");
              },
            });
          },
        },
      ]}
    />
  );
};
