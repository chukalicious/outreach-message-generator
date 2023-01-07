import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Navbar />{" "}
    </div>
  );
}

export default App;
