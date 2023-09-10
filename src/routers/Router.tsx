import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Search from "../pages/Search/Search";
import Details from "../pages/Details/Details";
import Player from "../pages/Player/Player";
import Search2 from "../pages/Search/Search2";
import Search3 from "../pages/Search/Search3";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/search" element={<Search/>}></Route>
                    <Route path="/search2" element={<Search2/>}></Route>
                    <Route path="/search3" element={<Search3/>}></Route>
                    <Route path="/details" element={<Details/>}></Route>
                    <Route path="/player" element={<Player/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router