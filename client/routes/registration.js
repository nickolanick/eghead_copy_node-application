import NavBar from "../components/NavBar/";
import Registration from "../auth/Registration/Registration";
import Footer from "../components/Footer/"
import Login from "../auth/Login";
export const registration_route = (app) => {
    new NavBar(app);
    new Registration(app);
};

