import { useState } from "react";
import Home from "./layouts/Home";
import NavBar from "./components/NavBar";
import Feature from "./layouts/Feature";
import Collection from "./layouts/Collection";
import Footer from "./layouts/Footer";

function App() {
    return (
        <>
            <NavBar isLink={false}></NavBar>
            <Home></Home>
            <Feature></Feature>
            <Collection></Collection>
            <Footer></Footer>
        </>
    );
}

export default App;
