import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";

const b = bem("course_cart");

class CourseCart extends Component {
  constructor(app, course_id, display_list = false) {
    let container = document.createElement("div");
    super({
      store,
      element: container
    });
    this.course_id = course_id;
    this.display_list = display_list;
    this.container = container;
    app.appendChild(this.container);
    this.render();
  }

  render() {
    let users = store.state.allUsers;
    let courses = store.state.allCourses;
    if (courses.fetched && users.fetched) {
      let data = store.state.allCourses.data.filter(
        course => course["_id"] === this.course_id
      )[0];
      let course_author = users.data.filter(
        user => user["_id"] === data.author
      )[0];
      this.container.className =
        b() + (this.display_list ? ` ${b(["space_between_inline"])}` : "");
      this.container.style.width = this.display_list ? "25%" : "100%";
      this.container.innerHTML = `
            <div class="${b("shadow")}">
                       <div class="${b("wrapper")}">
                            <div class="${b("image-wrapper")}">
                                <img class="${b(
                                  "image"
                                )}" src="/images/react-big-img.png" alt="">
                            </div>
                            <div class="dotted-header">
                                <span>COURSE </span><span class="dotted-header__dot">•</span><span>${
                                  data.courseTech
                                }</span>
                            </div>
                            <div class="${b("header-wrapper")}">
                                <h3 class="${b("header")}">${
        data.courseName
      }</h3>
                            </div>
                        </div>
                        <div>
                            <div class="mini-profile">
                                <div class="mini-profile__content-wrapper">
                                    <img class="icon icon--small" src="/images/ari-avatar.jpg" alt="">
                                    <div class="mini-profile__content">
                                        <h3 class="mini-profile__content-header">${
                                          course_author.name
                                        }</h3>
                                        <span class="mini-profile__content-sub_header">${
                                          data.lessons.length
                                        } lessons . 41m</span>
                                    </div>
                            </div>
                        <div>
                <img src="/images/profileMiniFolder.svg" alt="profileMiniFolder">
                </div>
            </div>
            </div>
        </div>
                `;
    }
  }
}

export default CourseCart;
