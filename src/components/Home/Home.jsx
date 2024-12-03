
import Header from "../Header/Header";


import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the home component</h2>
            <Outlet /> 
        </div>
    );
};

export default Home;
