import bem from "../../helpers/bem";

const b = bem("nav-bar");
const Footer = () => {

    const footer = document.createElement("footer");
    footer.className = `${b()}`;

    footer.innerHTML = `
    <footer class="footer">
        <div class="footer-block">
            <span class="footer-block__logo">
                <img src="/images/logo.svg" alt="">
            </span>
            <div class="footer-block__content">
                <div class="footer-block__content-list">
                    <div class="footer-block__content-list-block">
                        <h2 class="footer-block__content-list-header">content</h2>
                        <ul class="footer-block__content-list-ulist">
                            <li>Browse</li>
                            <li>Courses</li>
                            <li>Lessons</li>
                            <li>Podcasts</li>
                        </ul>
                    </div>
                    <div class="footer-block__content-list-block">
                        <h2 class="footer-block__content-list-header">about</h2>
                        <ul class="footer-block__content-list-ulist">
                            <li>Pricing</li>
                            <li>Instructors</li>
                            <li>Stories</li>
                            <li>Team</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-block__content-search">
                </div>
            </div>
            <div class="footer-block__terms">
                <ul class="footer-block__terms-list">
                    <li><a href="#">Terms & Conditions</a></li>
                    <li>© egghead.io</li>
                </ul>
            </div>
        </div>
    </footer>
`;
    return footer;
};
export default Footer;