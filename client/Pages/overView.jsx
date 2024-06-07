import React, {useEffect, useState} from 'react';
import '../Css/overView.css';
import ResultPageOverView from "../PageTest/overview/Result";
import EndingPageMaiwandOverview from "../PageTest/overview/Ending";

import WaitingPage from "../PageTest/overview/Default.jsx";

import GetReadyToVote from "../PageTest/GetReadyToVote2";

import WaitingPageAfterQuestion2 from "../PageTest/WaitingPageAfterQuestion2";

import GetReadyToVoteSecond2 from "../PageTest/GetReadyToVoteSecond2";
import WaitingPageAfterBrownQuestion from "../PageTest/WaitingPageAfterBrownQuestion";

import Blank from "../PageTest/overview/Blank";
import QuestionOverView from "../PageTest/overview/Question";
import QuestionOverView2 from "../PageTest/overview/Question2";
import ResultPageOverViewBrown from "../PageTest/overview/Result2";


function OverView() {


    const [currentPage, setCurrentPageOverView] = useState("waitingPage");
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
                setCurrentPageOverView("waitingPage");
                break;


            case "getReadyToVotePage":
                setCurrentPageOverView("getReadyToVotePage");
                break;

            case "questionPage":
                setCurrentPageOverView("questionPage");
                break;


            case "intermissionScreen":
                setCurrentPageOverView("intermissionScreen");
                break;



            case "resultPage":
                setCurrentPageOverView("resultPage");
                break;


            case "waitingPageAfterQuestion":
                setCurrentPageOverView("waitingPageAfterQuestion");
                break;

            case "getReadyToVoteSecond2":
                setCurrentPageOverView("getReadyToVoteSecond2");
                break;

            case "questionPageBrownVersion":
                setCurrentPageOverView("questionPageBrownVersion");
                break;


            case "waitingPageAfterBrownQuestion":
                setCurrentPageOverView("waitingPageAfterBrownQuestion")
                break;


            case "resultPageBrownVersion":
                setCurrentPageOverView("resultPageBrownVersion")
                break;


            case "EndingPageMaiwand":
                setCurrentPageOverView("EndingPageMaiwand")
                break;
            default:
                console.error("Unknown option received");
        }
    };

    // Render component based on currentPage
    switch (currentPage) {
        case "waitingPage":
            return<WaitingPage currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "intermissionScreen":
            return <Blank currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "getReadyToVotePage":
            return <GetReadyToVote currentPage={currentPage} setCurrentPage={setCurrentPageOverView} />;
        case "questionPage":
            return <QuestionOverView currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "resultPage":
            return <ResultPageOverView currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "waitingPageAfterQuestion":
            return <WaitingPageAfterQuestion2 currentPage={currentPage} setCurrentPage={setCurrentPageOverView} />;
        case "questionPageBrownVersion":
            return<QuestionOverView2 currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        case "getReadyToVoteSecond2":
            return<GetReadyToVoteSecond2 currentPage={currentPage} setCurrentPage={setCurrentPageOverView}/>;
        case "WaitingPageAfterQuestion3":
            return<WaitingPageAfterQuestion2 currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        case "waitingPageAfterBrownQuestion":
            return<WaitingPageAfterBrownQuestion currentPage={currentPage} setCurrentPage={setCurrentPageOverView}/>;
        case "resultPageBrownVersion":
            return<ResultPageOverViewBrown currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        case "EndingPageMaiwand":
            return<EndingPageMaiwandOverview currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        default:
            return <div>Error: Unknown page</div>;
    }

















    return (
        <div className="overview-container">
            <div className="top-left">
                <span>Game Pin: 123456</span>
            </div>

            <EndingPageMaiwandOverview/>
        </div>
    );
}

export default OverView;
