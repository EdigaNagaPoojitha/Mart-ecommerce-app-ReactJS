import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import {BrowserRouter} from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContextApi from './Components/ContextApi.jsx'
import {Provider} from "react-redux"
import {Store } from "./Components/Store.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={Store}>
    <BrowserRouter>
  <ContextApi>

    <App />


</ContextApi>
</BrowserRouter>
   
</Provider>
  </StrictMode>,
)
