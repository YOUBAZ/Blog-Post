import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Projects from "./Pages/Projects";
import Header from "./components/Header.jsx";
import FooterCom from "./components/Footer.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
