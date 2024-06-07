import React, { useState, useEffect } from 'react';
import WaitingPage from "../PageTest/WaitingPage2";
import GetReadyToVote from "../PageTest/GetReadyToVote2";
import IntermissionPage from "../PageTest/IntermissionPage2";
import Questions from "../PageTest/Questions2";
import ResultPage from "../PageTest/ResultPage3";
import WaitingPageAfterQuestion2 from "./WaitingPageAfterQuestion2";
import GetReadyToVoteSecond2 from "./GetReadyToVoteSecond2";
import QuestionsBrownVersion from "./QuestionsBrownVersion";
import WaitingPageAfterBrownQuestion from './WaitingPageAfterBrownQuestion';
import ResultPageBrownVersion from './ResultPageBrownVersion';
import EndingPageMaiwand from '../Pages/EndingPageMaiwand';

import "../Css/UsernameAndAvatar.css";
import "../Css/FrontPage.css";
import "../Css/IntermissionPage.css";
import "../Css/WaitingPage.css";
import "../Css/GetReadyToVote.css";
import "../Css/ResultPage3.css";
import "../Css/ResultPageBrownVersion.css"
import "../Css/WaitingPageAfterQuestion.css";
import "../Css/QuestionsBrownVersion.css"
import "../Css/WaitingPageAfterBrownQuestion.css"
import "../Css/EndingPageMaiwand.css"
import "../Css/Question2.css"
import "../Css/GetReadyToVoteSecond.css"

import CharacterTopLeft from "../Components/CharacterTopLeft";

function UserPage() {
    const [currentPage, setCurrentPage] = useState("waitingPage");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);

        // Clean up function to close WebSocket connection when component unmounts
        return () => {
            newSocket.close();
        };
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

    const handleOptionSelection = (option) => {
        // Update currentPage based on the option received
        switch (option) {
            case "waitingPage":
                setCurrentPage("waitingPage");
                break;
            case "intermissionScreen":
                setCurrentPage("intermissionScreen");
                break;
            case "getReadyToVotePage":
                setCurrentPage("getReadyToVotePage");
                break;
            case "questionPage":
                setCurrentPage("questionPage");
                break;
            case "resultPage":
                setCurrentPage("resultPage");
                break;
            case "waitingPageAfterQuestion":
                setCurrentPage("waitingPageAfterQuestion");
                break;
            case "questionPageBrownVersion":
                setCurrentPage("questionPageBrownVersion");
                break;
            case "getReadyToVoteSecond2":
                setCurrentPage("getReadyToVoteSecond2");
                break;
            case "WaitingPageAfterQuestion3":
                setCurrentPage("WaitingPageAfterQuestion3")
                break;
            case "waitingPageAfterBrownQuestion":
                setCurrentPage("waitingPageAfterBrownQuestion")
                break;
            case "resultPageBrownVersion":
                setCurrentPage("resultPageBrownVersion")
                break;
            case "EndingPageMaiwand":
                setCurrentPage("EndingPageMaiwand")
                break;
            default:
                console.error("Unknown option received");
        }
    };

    // Render component based on currentPage
    switch (currentPage) {
        case "waitingPage":
            return<>
            <CharacterTopLeft></CharacterTopLeft>
            <WaitingPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>;
        case "intermissionScreen":
            return <IntermissionPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "getReadyToVotePage":
            return <GetReadyToVote currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "questionPage":
            return <Questions currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "resultPage":
            return <>
                <CharacterTopLeft></CharacterTopLeft>
            <ResultPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </>;
        case "waitingPageAfterQuestion":
            return <WaitingPageAfterQuestion2 currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "questionPageBrownVersion":
            return<QuestionsBrownVersion currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        case "getReadyToVoteSecond2":
            return<GetReadyToVoteSecond2 currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        case "WaitingPageAfterQuestion3":
            return<WaitingPageAfterQuestion3 currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        case "waitingPageAfterBrownQuestion":
            return<WaitingPageAfterBrownQuestion currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        case "resultPageBrownVersion":
            return<ResultPageBrownVersion currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        case "EndingPageMaiwand":
            return<EndingPageMaiwand currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        default:
            return <div>Error: Unknown page</div>;
    }
}

export default UserPage;
