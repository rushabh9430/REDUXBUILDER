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
import Patten from "./Pages/Patten";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from "./Pages/Registration";

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
              <Layout>
                <Team />
              </Layout>
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
