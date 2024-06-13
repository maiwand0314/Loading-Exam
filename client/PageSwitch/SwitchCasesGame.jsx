import React, { useState, useEffect } from 'react';
import WaitingPage from "../Pages/WaitingPage";
import GetReadyToVote from "../Pages/GetReadyToVote";
import IntermissionPage from "../Pages/IntermissionPage";
import Questions from "../Pages/Questions";
import ResultPage from "../Pages/ResultPage";
import WaitingPageAfterQuestion from "../Pages/WaitingPageAfterQuestion";
import EndingPageNew from "../Pages/EndingPage";



function UserPage() {


    const [currentPage, setCurrentPage] = useState("");


    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('172.26.114.17/');
        setSocket(newSocket);

        // Clean up function to close WebSocket connection when component unmounts

    }, []);

    useEffect(() => {
        // Event listener for messages received from WebSocket
        if (socket) {
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                const { option } = data;
                handleOptionSelection(option);
            };
        }
    }, [socket]);



    useEffect(() => {
        async function fetchAnswers() {
            const response = await fetch("/api/scene");
            const data = await response.json();
        setCurrentPage(data);
        }

        fetchAnswers();
    }, []);

    const handleOptionSelection = (option) => {
        // Update currentPage based on the option received
        switch (option) {
            case "Waiting Page":
                setCurrentPage("Waiting Page");
                break;
            case "Intermission Screen":
                setCurrentPage("Intermission Screen");
                break;
            case "Get Ready To Vote Page":
                setCurrentPage("Get Ready To Vote Page");
                break;
            case "Question Page":
                setCurrentPage("Question Page");
                break;

            case "Waiting Page After Question":
                setCurrentPage("Waiting Page After Question");
                break;

            case "Result Page":
                setCurrentPage("Result Page");
                break;

            case "Ending Page":
                setCurrentPage("Ending Page")
                break;
            default:

        }
    };

    // Render component based on currentPage
    switch (currentPage) {
        case "Waiting Page":
            return<WaitingPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "Intermission Screen":
            return <IntermissionPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "Get Ready To Vote Page":
            return <GetReadyToVote currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "Question Page":
            return <Questions currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "Waiting Page After Question":
            return <WaitingPageAfterQuestion currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "Result Page":
            return <ResultPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "Ending Page":
            return<EndingPageNew currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        default:
            return <div></div>;
    }
}

export default UserPage;
