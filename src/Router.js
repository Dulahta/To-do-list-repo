import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Lists from "./components/Lists/Lists";
import ListTasks from "./components/Tasks/Tasks";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lists",
    element: <Lists />,
  },

  {
    path: "/lists/:id/tasks",
    element: <ListTasks />,
  },
]);

export default Router;
