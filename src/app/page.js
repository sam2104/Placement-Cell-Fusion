// import Image from "next/image";
// import styles from "./page.module.css";

// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className="layout">
//         <Sidebar />
//         <div className="main-content">
//           <Header />
//         </div>
//       </div>
//     </main>
//   );
// }

import React from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 , marginTop: '2rem'}}>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;
