import React, { useState, useEffect } from 'react';
import WaitingPage from "../Pages/WaitingPage";
import GetReadyToVote from "../Pages/GetReadyToVote";
import IntermissionPage from "../Pages/IntermissionPage";
import Questions from "../Pages/Questions";
import ResultPage from "../Pages/ResultPage";
import WaitingPageAfterQuestion from "../Pages/WaitingPageAfterQuestion";
import GetReadyToVoteSecond2 from "../PagesBrown/GetReadyToVoteSecond";
import QuestionsBrownVersion from "../PagesBrown/QuestionsBrownVersion";
import WaitingPageAfterBrownQuestion from '../PagesBrown/WaitingPageAfterBrownQuestion';
import ResultPageBrownVersion from '../PagesBrown/ResultPageBrownVersion';
import EndingPage from '../Pages/EndingPage';


function UserPage() {


    const [currentPage, setCurrentPage] = useState("");


    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket server when component mounts
        const newSocket = new WebSocket('ws://localhost:3000');
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

            case "waitingPageAfterQuestion":
                setCurrentPage("waitingPageAfterQuestion");
                break;
            case "resultPage":
                setCurrentPage("resultPage");
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

        }
    };

    // Render component based on currentPage
    switch (currentPage) {
        case "waitingPage":
            return<WaitingPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "intermissionScreen":
            return <IntermissionPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "getReadyToVotePage":
            return <GetReadyToVote currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "questionPage":
            return <Questions currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "resultPage":
            return <ResultPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        case "waitingPageAfterQuestion":
            return <WaitingPageAfterQuestion currentPage={currentPage} setCurrentPage={setCurrentPage} />;
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
            return<EndingPage currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
        default:
            return <div></div>;
    }
}

export default UserPage;
