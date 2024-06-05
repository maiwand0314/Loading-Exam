import React, { useEffect, useState } from "react";
import GetReadyToVote from "../Pages/GetReadyToVote";



const UsernameAndAvatar = ({currentPage, setCurrentPage}) => {
    const [chosenAvatarId, setChosenAvatarId] = useState(null);
    const [randomUsername, setRandomUsername] = useState(null);

    
    /* avatar-data, kan og burde sikkert gjøres på en annen måte */
    const avatars = [
        { id: 'viking1', src: "client/assets/Viking.png", alt: "avatar of viking" },
        { id: 'swordmanUp', src: "../../public/SwordmanSUp.png", alt: "avatar of swordman with big sword up" },
        { id: 'witch', src: "public/Witch.png", alt: "avatar of a witch" },
        { id: 'SwordWoman', src: "public/SwordWoman.png", alt: "avatar of pink sword avatar" },
        { id: 'Archer', src: "public/Archer.png", alt: "avatar of archer" },
        { id: 'swordmanDown', src: "public/SwordmanSDown.png", alt: "avatar of swordman with big sword down" },
    ];

    const gameRoomId = "4400AB"

    useEffect(() => {
        /* Fikk AI til å lage en liste med random navn */
        fetch("/usernames.json")
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.generatedUsernames.length);
                setRandomUsername(data.generatedUsernames[randomIndex]);
            })
            .catch(error => {
                console.error("Error fetching usernames:", error);
                // setter brukernavn til "Burning Archer" hvis error
                setRandomUsername("Burning Archer");
            });
    }, []);
    

    const handleAvatarClick = (avatarId) => {
        setChosenAvatarId(avatarId);
    };

    function handleContinueClick() {
        if (chosenAvatarId != null) {

            setCurrentPage('waitingPage');
           
        } else {
            console.log("Please chose an avatar first.")
        }
    }


    return (
        <div>
                    {currentPage === 'avatarPage' && (

        <section className="name-and-avatar-container">
            
            <div className="info-box">
                <p>Waiting for all players!</p>
                <p>GameRoom: {gameRoomId}</p>
            </div>
            <div className="name-container">
                <h3>Your autogenerated name:</h3>
                <p>'{randomUsername}'</p>
                <h1>LUL</h1>
            </div>
            
            <div>
            <h3>Choose your avatar:</h3>
            <div className="avatars-container">
                {avatars.map(avatar => (
                    <img
                        key={avatar.id}
                        src={avatar.src}
                        alt={avatar.alt}
                        id={avatar.id}
                        onClick={() => handleAvatarClick(avatar.id)}
                        style={{ 
                            transform: chosenAvatarId === avatar.id ? "scale(1.5)" : "scale(1)",
                            zIndex: chosenAvatarId === avatar.id ? "1" : "0",
                        }}
                    />
                ))}
            </div></div>
            <button className="continue-button" onClick={handleContinueClick}>CONTINUE</button>
          
        </section>
        )}
        </div>
    );
};

export default UsernameAndAvatar;