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
            alert(`${item.name} removed from Favorites`);
          },
        },
        {
          label: "Open item location",
          onClick() {
            alert("Opened");
          },
        },
        {
          label: "Share",
          onClick() {
            alert("Shared");
          },
        },
        {
          label: "Delete",
          onClick(item: unknown) {
            alert("Deleted");
          },
        },
      ]}
    />
  );
};
