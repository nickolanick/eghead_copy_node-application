import CourseListsCart from "../CourseLitCart";
import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {getAllCourses, getAllLessons} from "../../helpers/actions/api";
import {CheckAction} from "../../helpers/CheckAction";

const b = bem("cart_list_combination");

class ListOfCarts extends Component {

    constructor(app) {
        let container = document.createElement("div");
        super({
            store,
            element: container
        });
        this.container = container;
        app.appendChild(this.container);
        this.render();
        ListOfCarts.dispatchAll()
    }

    static dispatchAll() {
        CheckAction(store.state.allCourses, getAllCourses, store);
        CheckAction(store.state.allLessons, getAllLessons, store);
    }

    init() {
        this.container.innerHTML = `
        <div class="${b('wrapper')} website-layout-width">
            <div class="${b('padding')}">
        
            </div>
        </div>`;
    }

    render() {
        this.container.className = b();
        this.init();
        let body = this.container.getElementsByClassName(b('padding'))[0];
        store.state.allLessons.data.map(item => body.appendChild(CourseListsCart(item)))
    }
};

export default ListOfCarts