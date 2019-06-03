import CourseCart from "../course_cart/";
import {lessons_for_course} from "../../actions/api";

const course_big_block = (data) => {

    const course_big_block = document.createElement("div");
    course_big_block.className = "course-big-block__wrapper flex-join";

    course_big_block.innerHTML = `

                    ${CourseCart(data).outerHTML}

                    <div class="course-content-regular">
                        <ul class="course-content-regular__list">
                        </ul>
                    </div>


    `;

    const root_ul = course_big_block.getElementsByTagName("ul")[0];
    const add_content = (root_ul) => (data) => data.map(item => {
        const li = document.createElement("li");
        li.className = "course-content-regular__list-item";
        li.innerHTML = `${item.name}`;
        root_ul.appendChild(li)
    });
    lessons_for_course(data._id, add_content(root_ul), () => console.log("err"));
    return course_big_block
};
export default course_big_block;