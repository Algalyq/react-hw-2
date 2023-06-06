import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";

function checkWinner(grid) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (grid[a].text && grid[a].text === grid[b].text && grid[a].text === grid[c].text) {
      return grid[a].text;
    }
  }

  return null;
}

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [winner, setWinner] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(false); // new state variable for theme

  function handlePlay(elementID) {
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid); 
    const winner = checkWinner(newGrid);
    if (winner) {
      setWinner(winner);
    }
  }
  function restart(){
    setGrid([
      { id: 1, text: "" },
      { id: 2, text: "" },
      { id: 3, text: "" },
      { id: 4, text: "" },
      { id: 5, text: "" },
      { id: 6, text: "" },
      { id: 7, text: "" },
      { id: 8, text: "" },
      { id: 9, text: "" },
    ]);
    setUser(true)
    setWinner(null)
    setShowModal(false)
  }
  function closeModal() {
    setWinner(null);
  }


  function toggleTheme() {
    setIsDarkMode(!isDarkMode); 
  }
  return (
    <MainLayout isDarkMode = {isDarkMode}>
 
    <Grid grid={grid} handlePlay={handlePlay} />
    {winner && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className={isDarkMode ? "bg-black p-8 rounded shadow-md" : "bg-white p-8 rounded shadow-md"} >
        <h2 className={isDarkMode ? "dark text-white" : "dark text-black"}>Winner: {winner}</h2>
            <button
              className={isDarkMode ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"}
              onClick={restart}>
              Restart
            </button>
        </div>
      </div>
    )}
       <button onClick={toggleTheme} className={isDarkMode ? "bg-gray-200 text-black px-4 py-2 rounded mt-4" : "bg-black-200 dark text-white px-4 py-2 rounded mt-4"}>
        {isDarkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
  </MainLayout>
  );
}

export default App;

