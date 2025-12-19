import { Folder } from "~/components";
import { GridView, TableView } from "~/components/Folder/View/";
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
            alert("Marked as Favorite");
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
          onClick() {
            alert("Deleted");
          },
        },
      ]}
    />
  );
};
