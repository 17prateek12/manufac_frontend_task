import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import DataFetching from "./components/DataFetching";

export default function App() {
  return <MantineProvider theme={theme}>
    <DataFetching />
  </MantineProvider>;
}
