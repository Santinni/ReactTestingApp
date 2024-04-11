import "./App.css";
import "./styles/sb-admin-2.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { ModalContextProvider } from "./components/Modal/ModalContext";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App" id="wrapper">
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <RouterProvider router={router} />
        </ModalContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
