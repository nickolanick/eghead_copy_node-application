import StatsAndRemainders from "../components/StatsAndRemainders";
import NavBar from "../components/NavBar/";
import Publishments from "../components/Publishments/";
import CartListCombination from "../components/cart_lists_combination/";
import Footer from "../components/footer/";

export const home_route = (app) => {

    new NavBar(app);
    new StatsAndRemainders(app);
    new Publishments(app);
    // const view = [
    //     // {"endpoint": "/api/get_random_course", "component": StatsAndRemainders},
    //     {"endpoint": "/api/list_courses", "component": Publishments},
    //     {"endpoint": "/api/list_lessons", "component": CartListCombination},
    //     {"endpoint": "src/components/stats_and_remainders/data.json", "component": Footer}
    // ];
    // view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

