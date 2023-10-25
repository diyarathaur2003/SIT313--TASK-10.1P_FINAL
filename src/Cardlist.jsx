import Card from "./Card"
import './Card.css'
import { faker } from "@faker-js/faker"
import stafflist from './stafflist.js'
import Buttoninput from './Buttoninput';
function cardcomponent(staff, i) {
    return (<Card
        key={staff.key}
        image={staff.image}
        name={staff.name}
        position={staff.position}
        author={staff.author}
        ratings={staff.ratings}
    />


    )
}
function Cardlist() {
    return (
        <div className="upper">
            <div className="row">
                {stafflist.slice(0, 3).map(cardcomponent)}
            </div>
            <div>
                <Buttoninput
                    text=" See All Job Prospects"

                />
                <h1> Featured Tutorials</h1>
            </div>
            <div class="row">
                {stafflist.slice(3, 6).map(cardcomponent)}
            </div>
        </div>
    )

}
export default Cardlist

