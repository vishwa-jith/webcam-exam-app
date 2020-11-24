import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "redux";
import { configureReducer } from "./redux/config.reducer";
function App() {
  const store = configureReducer();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
