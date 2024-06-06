import React from "react";
import vikingAvatar from "../assets/Viking.png";
import SwordmanSUpAvatar from '../assets/SwordmanSUp.png';
import WitchAvatar from '../assets/Witch.png';
import SwordWomanAvatar from '../assets/SwordWoman.png';
import ArcherAvatar from '../assets/Archer.png';
import SwordmanSDownAvatar from '../assets/SwordmanSDown.png';
import Cookies from "js-cookie";



function CharacterTopLeft() {
    let picture;
    const userToken = Cookies.get("user_token");
    const nameToken = Cookies.get("name_token")
console.log(userToken);
    switch (userToken) {

        case "viking1":
            picture = vikingAvatar;
            break;
        case "swordmanUp":
            picture = SwordmanSUpAvatar;
            break;
        case "witch":
            picture = WitchAvatar;
            break;
        case "SwordWoman":
            picture = SwordWomanAvatar;
            break;
        case "Archer":
            picture = ArcherAvatar;
            break;
        case "swordmanDown":
            picture = SwordmanSDownAvatar;
            break;
        default:

            break;


    }

    return (
        <div className="profile-container">
            <p>{nameToken}</p>
            <img src={picture} alt="avatar"/>
        </div>
    );
}

export default CharacterTopLeft;
