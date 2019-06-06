import NavBar from "../components/NavBar/";
import Login from "../auth/Login/";

export const login_route = (app) => {
    new NavBar(app);
    new Login(app);
};

