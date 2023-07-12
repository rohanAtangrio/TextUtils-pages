import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses = () => {
  //   // document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-sucess");
  // };

  // const toggleMode = (cls) => {
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      <Router>
        {/* Props with parameters */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* Props with default parameters */}
        {/* <Navbar />  */}

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try Textutils - Word counter, Character counter"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>

          {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        /> */}
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
