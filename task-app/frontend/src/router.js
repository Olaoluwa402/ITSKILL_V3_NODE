import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import MultiDataForm from "./components/Form/MultiDataForm";
import Tasks from "./screens/Tasks";
import Task from "./screens/Task";
import Layout from "./components/Layout/Layout/Layout";
import ReactWhatsapp from "react-whatsapp";
import Settings from "./screens/Settings";
import Analytics from "./screens/Analytics";
import Default from "./screens/Default";
import Messages from "./screens/Messages";
import DashboardLayout from "./components/DashboardLayout/Layout/Layout.jsx";

const Router = () => {
  return (
    <div>
      <ReactWhatsapp number="2347060507450" message="Hello World!!!" />
      <Routes>
        {/* dashboard route */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Default />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="/not-found" element={<NotFound />} />

        <Route
          path="/tasks"
          element={
            <Layout>
              <Tasks />
            </Layout>
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <Layout>
              <Task />
            </Layout>
          }
        />
        {/* <Route path="/tasks/:id/edit" element={<NotFound />} /> */}

        {/* <Route path="/posts" element={<NotFound />} />
        <Route path="/posts/:id" element={<NotFound />} />
        <Route path="/posts/:id/edit" element={<NotFound />} />
        <Route path="/posts/:id/comments" element={<NotFound />} />
        <Route path="/posts/:id/comments/:commetId/edit" element={<NotFound />} /> */}

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
};

export default Router;
