import CourseCart from "../CourseCart/";
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
        return `<li class="course-content-regular__list-item"><div class="course-content-regular__list-item-title">${item}</div><div class="course-content-regular__list-item-time">04:24</div></li>`
    };

    render() {

        this.container.className = "course-big-block__wrapper flex-join";
        this.container.innerHTML = ``;
        new CourseCart(this.container, this.data['_id']);
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