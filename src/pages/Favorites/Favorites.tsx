import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import { Folder } from "~/components";
import { GridView, TableView } from "~/components/View";
import { useApi } from "~/hooks/useApi";
import type { FolderItem } from "~/types";

export const Favorites = () => {
  const { data, error, loading } = useApi<FolderItem[]>({ 
    url: "/favorites.json", 
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
      navTitle="Favorites"
      data={data || []}
      gridView={GridView}
      tableView={TableView}
      options={[
        {
          label: "Remove from Favorites",
          onClick(item: any) {
            modals.openConfirmModal({
              title: "Remove from Favorites",
              children: (<Text>Are you sure you want to remove this item from favorites?</Text>),
              labels: {
                confirm: "Remove from Favorites",
                cancel: "Cancel",
              },
              onConfirm: () => {
                console.log(item.name,"Removed from Favorites");
              },
              onCancel: () => {
                console.log("Cancelled");
              },
            });
          },
        },
        {
          label: "Open item location",
          onClick() {
            modals.openConfirmModal({
              title: "Open item location",
              children: (<Text>Are you sure you want to open this item location?</Text>),
              labels: {
                confirm: "Open item location",
                cancel: "Cancel",
              },
              onConfirm: () => {
                console.log("Opened item location");
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
          onClick(item: FolderItem) {
            modals.openConfirmModal({
              title: "Delete",
              children: (<Text>Are you sure you want to delete this item?</Text>),
              labels: {
                confirm: "Delete",
                cancel: "Cancel",
              },
              onConfirm: () => {
                console.log(item.name,"Deleted");
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
