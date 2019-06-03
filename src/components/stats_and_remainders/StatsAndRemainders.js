import course_big_block from "../course_big_block";
import bem from "../../helpers/bem";

const b = bem("stats_and_remainders");

const StatsAndRemainders = data => {

    console.log(data,"STATTs")
    const stats_and_remainders = document.createElement("section");
    stats_and_remainders.innerHTML = `
        <div class="${b("wrapper")} flex-join website-layout-width website-layout-position">
            <div class="course-big-block">
                <span class="${b("header")} ">CONTINUE WATCHING</span>
            </div>
            <div class="stats-block">
                <span class="${b("header")} ">STATS</span>
                
                <div class="stats-block-wrapper">

                    <div class="flex-join">
                        <div class="stats-block__single-stat stats-block__space">

                            <span class="stats-block__count">0</span>

                            <span class="stats-block__block-header">Lessong completed</span>

                        </div>
                        <div class="stats-block__single-stat">

                            <span class="stats-block__count">0</span>

                            <span class="stats-block__block-header">Courses completed</h4>

                        </div>

                    </div>

                    <button class="stats-block__rect-stat">
                        <h4>
                            VIEW FULL HISTORY
                        </h4>
                        <span>back</span>
                    </button>

                </div>

            </div>
        </div>
`;

    stats_and_remainders.className = "stats_and_remainders";
    const tmp = stats_and_remainders.getElementsByClassName("course-big-block")[0];
    // console.log(tmp);
    const new_elem = course_big_block(data);
    tmp.appendChild(new_elem);


    return stats_and_remainders;
}
export default StatsAndRemainders;