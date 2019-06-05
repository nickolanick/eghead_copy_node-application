import CourseCart from "../course_cart/";
import {lessons_for_course} from "../../actions/api";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";

class CourseBigBlock extends Component {
    constructor(app, data) {
        let container = document.createElement("div");
        super({
            store,
            element: container
        });
        this.container = container;
        app.appendChild(this.container);
        this.data = data;
        this.render();
    }

    static add_content(item) {
        return `<li class="course-content-regular__list-item">${item}</li>`
    };

    render() {

        this.container.className = "course-big-block__wrapper flex-join";
        this.container.innerHTML = ``;
        this.container.appendChild(CourseCart(this.data));
        this.container.innerHTML += `
    <div class="course-content-regular">
                        <ul class="course-content-regular__list">
                            ${store.state.allLessons.data.filter(item => this.data.lessons.indexOf(item['_id'])).map(item => CourseBigBlock.add_content(item.name)).join("")}
                        </ul>
                    </div>

    `;
    }
}
;
export default CourseBigBlock;