import { Outlet, Link, useLocation } from "react-router-dom";

import { Button, Paper, Stack } from "@mantine/core";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Paper
      withBorder
      style={{
        width: 200,
        height: "100vh",
        background: "#f9f9f9",
        padding: 20,
      }}
    >
      <Stack>
        <Button
          component={Link}
          to="/"
          variant={location.pathname === "/" ? "filled" : "default"}
        >
          Homepage
        </Button>

        <Button
          component={Link}
          to="/favorites"
          variant={location.pathname === "/favorites" ? "filled" : "default"}
        >
          Favorites
        </Button>
      </Stack>
    </Paper>
  );
};

export const DefaultLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          padding: 30,
          flex: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
