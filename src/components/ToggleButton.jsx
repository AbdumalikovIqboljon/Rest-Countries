import { useState } from "react"


export default function Toggle() {
    const [mode, setMode] = useState(true);
    

    const toggleDarkMode = () => {
        if(mode) {
            document.documentElement.classList.add('dark')
            setMode(current => current = !current)
        }
        if(!mode) {
            document.documentElement.classList.remove('dark');
            setMode(current => current = !current)
        }
    }
    

  return (
    <>
      <button className="bg-green-500 dark:text-white" onClick={() => toggleDarkMode()}>dark Mode</button>
    </>
  )
}
// import React from "react";
// import MoonIcon from "../assets/svgs/MoonIcon";
// import { useState } from "react";

// export default function ToggleButton() {
//   const [darkMode, setDarkMode] = useState(false);

//   const handleTheme = () => {
//     document.body.classList.toggle("dark");
//     setDarkMode(!darkMode);
//     console.log('clicked')
//   };

//   return (
//     <>
//       <button
//         className="flex items-center p-2 cursor-pointer border rounded-md"
//         onClick={handleTheme}
//       >
//         <MoonIcon />
//         <span className="font-semibold text-red-500 ml-2">Dark Mode</span>
//       </button>
//     </>
//   );
// }
