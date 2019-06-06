import "./css/main.scss"
import {home_url, login_url, registration_url} from "./routes/routePaths";
import {home_route} from "./routes/home";
import {f_0_f_route} from "./routes/404";
import {registration_route} from "./routes/registration";
import {login_route} from "./routes/login";
import {get_token} from "./helpers/cookies";

let app = document.getElementById("root");
const path_current = window.location.pathname;
const private_route = (component, app) => get_token() ? component(app) : login_route(app);
const redirect_route = (component, app) => get_token() ? home_route(app) : component(app);
switch (path_current) {
    case home_url:
        private_route(home_route, app);
        break;
    case login_url:
        redirect_route(login_route, app);
        break;
    case registration_url:
        redirect_route(registration_route, app);
        break;
    default:
        f_0_f_route(app)

}
