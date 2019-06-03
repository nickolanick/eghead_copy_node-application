import CourseCart from "../../components/course_cart";
import {login, registrate} from "../../actions/auth";


const registration_success = (root, result) => {
    const success = document.createElement("div");
    success.innerHTML = `
    SUCCESS !!!)!)!)
    `;
    history.pushState({
        id: 'homepage'
    }, 'Home | My App', "/");
    location.reload();
    root.appendChild(success);
};
const registration_fail = (root, result) => {

};
const handle_login = (e, root) => {
    console.log("HANDELING")
    e.preventDefault();
    console.log(e);
    let inputs = Array.prototype.slice.call(root.getElementsByTagName("input"));
    let data_collect = {};
    let data = {};
    inputs.map(input => console.log(data_collect[input.name] = input.value));
    data['email'] = data_collect['email'];
    data['password'] = data_collect['password'];
    console.log(data, "Logger")
    login(data, (result) => registration_success(root, result), registration_fail);
};

const login_component = (data) => {


    const registration_root = document.createElement("div");

    registration_root.innerHTML = `
<section class="log-in">
    <div>
        <h1 class="log-in__title">Sign in to your account</h1>
    </div>
    <div class="log-in__grey-box">
        <form class="log-in__form">
            <div class="log-in__input-block">
                <label class="log-in__email-label">Email
                    <input name="email" class="log-in__email-text">
                </label>
            </div>
            <div class="log-in__input-block">
                <label class="log-in__email-label">Password
                    <input name= "password" class="log-in__email-text">
                </label>
            </div>
            <div class="log-in__input-block">
                <label class="log-in__remember-label">
                    <input name ="checkbox" type="checkbox">
                    Remember me
                </label>
            </div>
            <div class="log-in__input-block log-in__buttons">
                <button  name="submit" type="submit"  class="button log-in__btn-log-in">Sign In</button>
                <a href="#" class="log-in__btn-log-in-github">
                    Sign in with Github
                </a>
            </div>
            <br>
               <div class="log-in__input-block log-in__input-block-info">
                Need to create an
                account? <a href="/registration">Sign up</a>
            </div>
            <div class="log-in__input-block log-in__input-block-info">
                Forgot your
                password? <a href="#">Recover it</a>
            </div>
            <div class="log-in__input-block log-in__input-block-info">
                <a href="#">Enterprise Sign In</a>
            </div>
        </form>
    </div>
</section>
</form>
    `;

    registration_root.getElementsByClassName("button")[0].addEventListener("click", (e) => handle_login(e, registration_root));

    return registration_root

};
export default login_component;
