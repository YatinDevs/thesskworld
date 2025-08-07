import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import SSKSolitaireGuestForm from "./pages/SSKSolitaireGuestForm";
import WalkingVisitorForm from "./pages/WalkingVisitorForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SSKSolitaireGuestForm />} />
        <Route path="/visitor" element={<WalkingVisitorForm />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
