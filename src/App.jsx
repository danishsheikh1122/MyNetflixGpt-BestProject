import React from 'react'
import "./App.css"
import Body from "../src/components/body/Body.jsx"

// to get access to redux store in our app we import starts

import { Provider } from "react-redux";

// and importing global appStore to to pass it in provider's comp attribute attribute
// it is just like passing props
import appStore from "./utils/appStore.jsx";  

// ends

function App() {
  return (
    <div >
      <Provider store={appStore}>

      <Body></Body>
      </Provider>
    </div>

  )
}

export default App
