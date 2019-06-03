import NavBar from "../components/nav_bar/";
import {fetch_and_add} from "../helpers/fetch_and_add";
import Registration from "../auth/registration/Registration";
import Footer from "../components/footer/"
export const registration_route = (app) => {
    const view = [
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": NavBar},
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": Registration},
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": Footer}
    ];
    view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

