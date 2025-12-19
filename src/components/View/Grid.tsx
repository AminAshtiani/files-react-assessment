import { Card, Text, SimpleGrid, Group, Badge } from "@mantine/core";
import { FolderActions } from "../Folder/FolderActions";
import type { FolderItem, FolderItemOptions } from "~/types";
import { dayjs } from "~/utils/date";

type GridViewProps = {
  items: FolderItem[];
  options: FolderItemOptions[];
};

export const GridView = (props: GridViewProps) => {
  const { items, options } = props;
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing="lg"
      verticalSpacing="lg"
    >
      {items?.map((item) => (
        <Card
          key={item.id}
          shadow="sm"
          radius="md"
          padding="lg"
          withBorder
          style={{ overflow: "visible" }}
        >
          <Group justify="space-between" mb="xs">
            <Group gap="xs">
              <Text fw={600}>{item.name}</Text>

              <Badge
                color={item.type === "folder" ? "blue" : "gray"}
                variant="light"
                radius="sm"
              >
                {item.type}
              </Badge>
            </Group>

            <FolderActions item={item} options={options} />
          </Group>

          <Text size="sm" c="dimmed">
            Created: {dayjs(item.createdAt).format("YYYY/MM/DD HH:mm")} at{" "}
          </Text>
          <Text size="sm" c="dimmed">
            Updated: {dayjs(item.updatedAt).format("YYYY/MM/DD HH:mm")}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};
