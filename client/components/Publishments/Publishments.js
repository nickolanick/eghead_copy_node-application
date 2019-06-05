import CourseCart from "../course_cart/";
import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {getAllCourses, getAllLessons} from "../../helpers/actions/api";
import {CheckAction} from "../../helpers/CheckAction";

const b = bem("publications");

class Publishments extends Component {
    constructor(app) {
        let container = document.createElement("section");
        super({
            store,
            element: container
        });
        this.container = container;
        this.container.className = b();
        app.appendChild(this.container);
        Publishments.dispatchAll();
    }

    static dispatchAll() {
        CheckAction(store.state.allCourses, getAllCourses, store);
        CheckAction(store.state.allLessons, getAllLessons, store);
    }


    render() {
        this.container.className = `${b()}`;
        this.container.innerHTML = `
        <div class="${b("wrapper")} website-layout-width website-layout-position">
            <div class="publications__header">
                <div class="publications__header-label">
                    <h2>
                        What's New
                    </h2>
                    <h4>
                        Latest Published Courses & Lessons
                    </h4>
                </div>

                <button class="publications__button">
                    <span>Browse All </span>
                   <img src="/images/rightArrow.svg"  alt="">
                </button>
            </div>
        </div>
        <div class="${b("list")} website-layout-width website-layout-position">
        </div>
`;
        let allCourses = store.state.allCourses;
        let elem = this.container.getElementsByClassName(b("list"))[0];
        if (allCourses.fetched) {
            allCourses.data.map(item => elem.appendChild(CourseCart(item, true)))
        }
        // data.fetched ? data.data.map(item => elem.appendChild(CourseCart(item, true))) : null;


    }
}

export default Publishments