import React, {useEffect, useState} from 'react';
import '../Css/overView.css';
import ResultPageOverView from "../PagesOverview/ResultOverview";
import EndingPageMaiwandOverview from "../PagesOverview/Ending";

import WaitingPage from "../PagesOverview/Default.jsx";

import GetReadyToVote from "../Pages/GetReadyToVote";

import WaitingPageAfterQuestion from "../Pages/WaitingPageAfterQuestion";

import GetReadyToVoteSecond2 from "../PagesBrown/GetReadyToVoteSecond";
import WaitingPageAfterBrownQuestion from "../PagesBrown/WaitingPageAfterBrownQuestion";

import QuestionOverView from "../PagesOverview/QuestionOverview";
import QuestionOverView2 from "../PagesOverview/Question2";
import ResultPageOverViewBrown from "../PagesOverview/Result2";
import IntermissionPage from "../Pages/IntermissionPage";
import GRTVOverview from "../PagesOverview/GRTVOverview";
import AQOverview from "../PagesOverview/AQOverview";
import WaitingForPlayers from "../PagesOverview/Default.jsx";


function OverView() {


    const [currentPage, setCurrentPageOverView] = useState("waitingPage");
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
            setCurrentPageOverView(data);
        }

        fetchAnswers();
    }, []);

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
                break;
        }
    };

    // Render component based on currentPage
    switch (currentPage) {
        case "waitingPage":
            return<WaitingForPlayers currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "intermissionScreen":
            return <IntermissionPage currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "getReadyToVotePage":
            return <GRTVOverview currentPage={currentPage} setCurrentPage={setCurrentPageOverView} />;
        case "questionPage":
            return <QuestionOverView currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "resultPage":
            return <ResultPageOverView currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "waitingPageAfterQuestion":
            return <AQOverview currentPage={currentPage} setCurrentPage={setCurrentPageOverView} />;
        case "questionPageBrownVersion":
            return<QuestionOverView2 currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        case "getReadyToVoteSecond2":
            return<GetReadyToVoteSecond2 currentPage={currentPage} setCurrentPage={setCurrentPageOverView}/>;
        case "WaitingPageAfterQuestion3":
            return<WaitingPageAfterQuestion currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        case "waitingPageAfterBrownQuestion":
            return<WaitingPageAfterBrownQuestion currentPage={currentPage} setCurrentPage={setCurrentPageOverView}/>;
        case "resultPageBrownVersion":
            return<ResultPageOverViewBrown currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        case "EndingPageMaiwand":
            return<EndingPageMaiwandOverview currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        default:
            return <div>Error: Unknown page</div>;
    }



}

export default OverView;
