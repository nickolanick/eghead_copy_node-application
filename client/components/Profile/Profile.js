import bem from "../../helpers/bem";
import {decode_token, get_token} from "../../helpers/cookies";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {getUser} from "../../helpers/actions/auth";

const b = bem("profile");
const inp = bem("input-block");
export default class Profile extends Component {
    constructor(app) {
        super({
            store
        });
        this.container = document.createElement("div");
        this.container.className = `${b()}`;
        app.appendChild(this.container);
        this.tabId = 1;
        this.render();
        console.log(decode_token(), "decode_token");
        // loggedUser
        getUser(store, decode_token()["id"])
    }

    handleTabClick(e, id) {
        let old = this.tabId;
        this.tabId = id;
        this.render();
        this.container.getElementsByClassName(b("choice-panel-item"))[old].className = b("choice-panel-item");
        this.container.getElementsByClassName(b("choice-panel-item"))[id].className += " " + b("choice-panel-item--active");
    }

    initListeners() {
        [...this.container.getElementsByClassName(b("choice-panel-item"))].map((item, id) => item.addEventListener("click", (e) => this.handleTabClick(e, id)));

    }

    getCurrentTab() {
        let user_data = store.state.loggedUser.data;
        let edit_course = `
        <div class="${b("tab")}">
                     <div class="${b("tab-header")}">
                         <span>
                         Add Course
                         </span>
                    </div>
                   
                    <div class="${b("tab-fields")}">
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Course name</label>
                                <div class="${inp("input-wrapper")}">
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                </div>
                            </div>
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Course Technology</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                                
                            </div>
                            <div class="${inp()}" >
                                <label  class="${inp("label")}">Course Description</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                                
                            </div>
                    </div>
                    <div class="${b("tab-footer")}">
                        <button class="${b("tab-footer-button")}">
                            Send Course 
                        </button>
                    </div>
                </div>
        `;
        let edit_lesson = `
        <div class="${b("tab")}">
                     <div class="${b("tab-header")}">
                         <span>
                         Add Lesson
                         </span>
                    </div>
                   
                    <div class="${b("tab-fields")}">
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Lesson name</label>
                                <div class="${inp("input-wrapper")}">
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                </div>
                            </div>
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Lesson Technology</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                                
                            </div>
                            <div class="${inp()}" >
                                <label  class="${inp("label")}">Lesson Description</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                            </div>
                            <div class="${inp()}" >
                                <label  class="${inp("label")}">Course For Which Lesson</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                            </div>
                            
                    </div>
                    <div class="${b("tab-footer")}">
                        <button class="${b("tab-footer-button")}">
                            Send Lesson 
                        </button>
                    </div>
                </div>
        `;
        let edit_password = `
        <div class="${b("tab")}">
                     <div class="${b("tab-header")}">
                         <span>
                         Edit Password
                         </span>
                    </div>
                   
                    <div class="${b("tab-fields")}">
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Password</label>
                                <div class="${inp("input-wrapper")}">
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                </div>
                            </div>
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Password Confirmation</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                                
                            </div>
                            <div class="${inp()}" >
                                <label  class="${inp("label")}">Current Password</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="">
                                
                                </div>
                                
                            </div>
                    </div>
                    <div class="${b("tab-footer")}">
                        <button class="${b("tab-footer-button")}">
                            Send Course 
                        </button>
                        <button class="${b("tab-footer-button")}">
                            Delete Account
                        </button>
                    </div>
                </div>
        `;
        let edit_profile = `
        <div class="${b("tab")}">
                     <div class="${b("tab-header")}">
                         <span>
                         Edit Profile
                         </span>
                    </div>
                    <div class="${b("tab-icon-modification")}">
                        <img src="/images/headhock.png" class="${b("tab-avatar")}" alt="avatar">
                        <div class="${b("tab-load-file-wrapper")}">
                               <button>
                               Choose File
                                </button>
                                <span>We support Gravatar too</span>
                        </div>
                    </div>
                    <div class="${b("tab-fields")}">
                            <div class="${inp()}">
                                <label  class="${inp("label")}">First Name</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="${user_data.name}">
                                
                                </div>
                                
                            </div>
                            <div class="${inp()}">
                                <label  class="${inp("label")}">Last Name</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="${user_data.name}">
                                
                                </div>
                                
                            </div>
                            <div class="${inp()}" >
                                <label  class="${inp("label")}">Email</label>
                                <div class="${inp("input-wrapper")}">
                                
                                     <input  class="${inp("input")}" type="text" placeholder="${user_data.email}">
                                
                                </div>
                                
                            </div>
                    </div>
                    <div class="${b("tab-footer")}">
                        <button class="${b("tab-footer-button")}">
                            Save Changes 
                        </button>
                        <button class="${b("tab-footer-button")}">
                            Delete Account
                        </button>
                    </div>
                </div>
        `;

        if (this.tabId === 0) {
            return "dashboard";
        } else if (this.tabId === 1) {
            return edit_profile
        } else if (this.tabId === 2) {
            return edit_password
        } else if (this.tabId === 3) {
            return edit_course;
        } else if (this.tabId === 4) {
            return edit_lesson;
        } else {
            return "other"
        }
    }


    render() {
        this.container.innerHTML = ``;
        if (store.state.loggedUser.fetched) {
            let user_data = store.state.loggedUser.data;
            this.container.innerHTML += `
            <div class="${b("wrapper")}">
            <div class="${b("greetings")}">
                  <h3 class="${b("greetings-content")}">Hi, <b>${user_data.name}</b>! Here is your account information.</h3>
            </div>
            <div class="${b("content")}">
                <aside class="${b("choice-panel")}">
                    <div class="${b("choice-panel-wrapper")}"> 
                        <div class="${b("choice-panel-item")}">
                               <span class="${b("choice-panel-item-content")}">
                               Dashboard
                                </span>
                        </div>
                        <div class="${b("choice-panel-item")}">
                           <span class="${b("choice-panel-item-content")}">
                           Edit Profile
                           </span>
                    </div>
                        <div class="${b("choice-panel-item")}">
                               <span class="${b("choice-panel-item-content")}">
                               Edit Profile
                               </span>
                        </div>
                        <div class="${b("choice-panel-item")}">
                               Add Course
                        </div>
                        <div class="${b("choice-panel-item")}">
                               Add Lesson
                        </div>
                    </div>
                </aside>
                
                ${this.getCurrentTab()}
           
            </div>        
        </div>
    `;
            this.container.getElementsByClassName(b("choice-panel-item"))[this.tabId].className += " " + b("choice-panel-item--active");
            this.initListeners();
        }


    }
}
