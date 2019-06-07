import bem from "../../helpers/bem";
import { get_token } from "../../helpers/cookies";

const b = bem("nav-bar");
export default class NavBar {
  constructor(app) {
    this.container = document.createElement("nav");
    this.container.className = `${b()}`;
    app.appendChild(this.container);
    this.render();
  }

  static getProfile() {
    const logged = get_token();
    return logged
      ? `<button class="${b("feadback-button")}">Feedback</button>
            <a class="${b("profile")}" href="/profile" >
            <span>Mykhailo</span>
            <img class="${b(
              "profile-avatar"
            )}" src="/images/headhock.png" alt="avatar">
            </a>`
      : `<a  class="${b("login-link")}" href="/login">login</a>`;
  }

  render() {
    this.container.innerHTML = ``;
    this.container.innerHTML += `
        <div class="${b(
          "wrapper"
        )} website-layout-width website-layout-position">
               <div class="${b("padding-wrapper")}">
                <div class="${b("headers")}">
                <a href="/"><img src="/images/logo.svg" class="${b(
                  "headers-logo"
                )}" alt="Egghead logo"></a>
        
                <div class="${b("headers-content")}">
                    <img src="/images/play_button.svg" alt="">
                    <a class="${b(
                      "headers-content-link"
                    )}" href="#">Learn to Code</a>
                </div>
            </div>
            <div class="${b("navigation")}">
                <form class="${b("form")}" action="">
                    <input class="${b(
                      "input"
                    )}" placeholder="Search ..." type="text">
                    <button class="${b(
                      "form-button"
                    )}" type="submit"><img src="images/search_icon.svg" alt=""></button>
                </form>
                ${NavBar.getProfile()}

            </div>
        </div>
    </div>
    `;
  }
}
