import StatsAndRemainders from "../components/StatsAndRemainders";
import NavBar from "../components/NavBar/";
import Publishments from "../components/Publishments/";
import CourseListsCart from "../components/CourseLitCart/";
import CartListCombination from "../components/ListOfCarts/";
import Login from "../auth/login/";
import Footer from "../components/Footer/"
export const login_route = (app) => {
    const view = [
        // {"endpoint": "src/components/stats_and_remainders/data.json", "component": NavBar},
        // {"endpoint": "src/components/stats_and_remainders/data.json", "component": Login},
        // {"endpoint": "src/components/stats_and_remainders/data.json", "component": Footer}
    ];
    view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

