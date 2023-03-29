import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Counter from "./Pages/Counter";
import { Context } from "./ContextAPI/Them.contextAPI";
import { useState } from "react";
import ShowTeam from "./Pages/ShowTeam";
import EditTeam from "./Pages/EditTeam";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./Pages/Registration";
import PrivateRoute from "./Pages/PrivateRoute";
import Login from "./Pages/Login";

function App() {
  const [theme, setThem] = useState("dark");

  const onChangeSwitcher = () => {
    setThem(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Context.Provider value={theme}>
        <div className="form-check form-switch">
          <input
            className="form-check-input postion_css"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={onChangeSwitcher}
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
                <Login />
            }
          />
          <Route
            path="/registration"
            element={
                <Registration />
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <PrivateRoute>
                <Layout>
                  <Team />
                </Layout>
             </PrivateRoute>    
            }
          />
          <Route
            path="/counter"
            element={
              <Layout>
                <Counter />
              </Layout>
            }
          />
          <Route
            path="/showteam"
            element={
              <Layout>
                <ShowTeam />
              </Layout>
            }
          />
          <Route
            path="/EditTeam/:id"
            element={
              <Layout>
                <EditTeam />
              </Layout>
            }
          />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
