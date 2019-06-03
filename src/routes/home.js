import StatsAndRemainders from "../components/stats_and_remainders";
import NavBar from "../components/nav_bar/";
import {fetch_and_add} from "../helpers/fetch_and_add";
import Publishments from "../components/publishments/";
import CourseListsCart from "../components/course_list_cart/";
import CartListCombination from "../components/cart_lists_combination/";
import Footer from "../components/footer/";

export const home_route = (app) => {

    const view = [


        {"endpoint": "src/components/stats_and_remainders/data.json", "component": NavBar},
        {"endpoint": "/api/get_random_course", "component": StatsAndRemainders},
        {"endpoint": "/api/list_courses", "component": Publishments},
        {"endpoint": "/api/list_lessons", "component": CartListCombination},
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": Footer}
    ];
    view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

