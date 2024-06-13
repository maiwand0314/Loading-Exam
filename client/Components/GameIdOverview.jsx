import React, { useEffect, useState } from "react";
import "../Css/GameIdOverview.css"

function GameIdOverview() {
    const [gameId, setGameId] = useState(null);

    useEffect(() => {
        async function fetchGameId() {
            try {
                const response = await fetch("/api/game-id");
                const data = await response.json();
                if (data.length > 0) {
                    setGameId(data[0].game_id);  // Extracting game_id from the response
                }
            } catch (error) {
                console.error("Failed to fetch game ID:", error);
            }
        }

        fetchGameId();
    }, []);

    return (
        <div className="game-id-container">
            <h1 className="game-id-text-container">
                {gameId ? (
                    <p className="game-id-text">GAME ID: {gameId}</p>
                ) : (
                    <p className="game-id-text">Loading...</p>
                )}
            </h1>
        </div>
    );
}

export default GameIdOverview;
