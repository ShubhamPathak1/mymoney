import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./Layout/RootLayout";
import AddTransaction from "./pages/AddTransaction";
import Charts from "./pages/Charts";
import History from "./pages/History";
import Calendar from "./pages/Calendar";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/addtransaction" element={<AddTransaction />} />
        <Route path="/history" element={<History />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
