import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
