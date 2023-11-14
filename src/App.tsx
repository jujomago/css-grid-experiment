import { useCallback, useState } from "react";

import "./App.css";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

const getRandomNumber = async (): Promise<number> => {
  const number = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((res) => res.text());
  return +number;
};

export const App = () => {
  console.log("rendering App");
  const user = {
    name: "josue",
    age: 32,
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleShowSidebar = useCallback(() => {
    setIsSideBarOpen((prevIsSideBarOpen) => !prevIsSideBarOpen);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <button
          onClick={() => {
            setUserData({ ...userData, name: "John" });
          }}
        >
          change user data
        </button>
        <Navbar onHandleClick={handleShowSidebar} user={userData} />
      </div>

      <Sidebar open={isSideBarOpen} />
      <main>
          <img src="https://4.bp.blogspot.com/-WguOyo3P51I/W95Zk6R4fBI/AAAAAAAADgY/qZBnitfn1jMPtD-GLNc9jFr2ZyzUalQdwCK4BGAYYCw/s640/Avengers_4_Textles2_BY_AndrewV_M%25C2%25A92019.png" />
          <img  className="featured3" src="/imgs/1.jpg" />
          <img src="/imgs/2.jpg" />
          <img src="/imgs/3.jpg" />
          <img src="/imgs/4.jpg" />
          <img className="featured" src="/imgs/5.jpg" />
          <img src="/imgs/6.jpg" />
          <img src="/imgs/7.jpg" />          
      </main>
    </div>
  );
};
