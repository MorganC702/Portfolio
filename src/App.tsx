import './App.css'
import {BrowserRouter} from "react-router-dom";
import WebRoutes from "./routes/PublicRoutes.tsx";

function App() {

  return (
      <>
          <BrowserRouter>
            <WebRoutes />
          </BrowserRouter>


      </>
  )
}

export default App
