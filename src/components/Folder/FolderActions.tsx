import { ActionIcon, Paper, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import type { FolderItem, FolderItemOptions } from "~/types";

type FolderActionsProps = {
  item: FolderItem;
  options: FolderItemOptions[];
};

export const FolderActions = (props: FolderActionsProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      if (ref.current && !(ref.current as HTMLElement).contains(e.target as Node)) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <ActionIcon
        variant="transparent"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IconDots size={24} />
      </ActionIcon>

      {open ? (
        <Paper
          withBorder
          shadow="md"
          p="xs"
          style={{
            position: "absolute",
            right: 0,
            minWidth: 180,
            top: "100%",
            zIndex: 999999,
            background: "white",
          }}
        >
          {props.options.map((option, index) => {
            return (
              <Text
                key={index}
                size="sm"
                style={{
                  cursor: "pointer",
                  padding: 4,
                }}
                onClick={() => {
                  option.onClick(props.item);
                  setOpen(false);
                }}
              >
                {option.label}
              </Text>
            );
          })}
        </Paper>
      ) : null}
    </div>
  );
};
