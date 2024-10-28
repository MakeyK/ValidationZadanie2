import { BrowserRouter } from "react-router-dom"; 
import AppRouter from "./components/AppRouter";  
import MainPage from "./pages/main";

function App() { 
  return ( 
    <BrowserRouter> 

      <AppRouter/> 
      <MainPage/>
    </BrowserRouter> 
  ); 
} 

export default App;