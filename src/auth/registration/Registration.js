import CourseCart from "../../components/course_cart";
import {registrate} from "../../actions/auth";


const registration_success = (root, result) => {
    const success = document.createElement("div");
    success.innerHTML = `
    SUCCESS !!!)!)!)
    `;
    root.appendChild(success);
};
const registration_fail = (root, result) => {

};
const handle_registration = (e, root) => {
    e.preventDefault();
    console.log(e);
    let inputs = Array.prototype.slice.call(root.getElementsByTagName("input"));
    let data_collect = {}
    let data = {}
    inputs.map(input => console.log(data_collect[input.name] = input.value));
    data['email'] = data_collect['email'];
    data['password'] = data_collect['password'];
    data['name'] = data_collect['name'];
    console.log(data);
    registrate(data, (result) => registration_success(root, result), registration_fail);
};

const create_input_label = (label) => {
    // const input = document.createElement("input");
    // const label = document.createElement("label");
};
const registration = (data) => {


    const registration_root = document.createElement("div");

    const button = document.createElement("button");
    button.addEventListener("click", () => handle_registration(registration_root));
    // button.innerHTML = "register"
    // registration_root.className = 'registration';
    registration_root.innerHTML = `
  <section class="log-in">
    <div>
        <h1 class="log-in__title">
            Create your egghead account.
        </h1>
    </div>
    <div class="log-in__grey-box">
        <form class="log-in__form">
            <div class="log-in__input-block log-in__buttons">
                <a href="#" class="log-in__btn-log-in-github">
                    Sign up with Github
                </a>
            </div>
            <div class="log-in__input-block">
                <em>or</em>
            </div>
            <div class="log-in__input-block">
                <label class="log-in__email-label">First Name
                    <input name="name" class="log-in__email-text">
                </label>
            </div>
            <div class="log-in__input-block">
                <label class="log-in__email-label">Email
                    <input name="email" class="log-in__email-text">
                </label>
            </div>
            <div class="log-in__input-block">
                <label class="log-in__email-label">Password
                    <input name="password" type="password" class="log-in__email-text">
                </label>
            </div>
            <div class="log-in__input-block log-in__buttons">
                <button  class="log-in__btn-log-in button">Create account</button>
            </div>
            <br>
            <div class="log-in__input-block log-in__input-block-info">
                Have an account <a href="#">Sign in</a>
            </div>
            <div class="log-in__input-block log-in__input-block-info">
                Forgot your
                password? <a href="#">Recover it</a>
            </div>
        </form>
    </div>
</section>
    `;

    registration_root.getElementsByClassName("button")[0].addEventListener("click", (e) => handle_registration(e, registration_root));
    // console.log(registration_root.innerHTML);
    // registration_root.replaceChild(button, registration_root.getElementById("tmp"))

    // button.addEventListener("click", (e) => handle_registration(e, registration_root));

    return registration_root

};
export default registration;
