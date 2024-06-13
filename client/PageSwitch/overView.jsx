import React, {useEffect, useState} from 'react';
import '../Css/overView.css';
import ResultPageOverView from "../PagesOverview/ResultOverview";
import EndingPageMaiwandOverview from "../PagesOverview/Ending";
import QuestionOverView from "../PagesOverview/QuestionOverview";
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

            case "Intermission Screen":
                setCurrentPageOverView("Intermission Screen");
                break;

            case "Waiting Page":
                setCurrentPageOverView("Waiting Page");
                break;


            case "Get Ready To Vote Page":
                setCurrentPageOverView("Get Ready To Vote Page");
                break;

            case "Question Page":
                setCurrentPageOverView("Question Page");
                break;




            case "Waiting Page After Question":
                setCurrentPageOverView("Waiting Page After Question");
                break;

            case "Result Page":
                setCurrentPageOverView("Result Page");
                break;




            case "Ending Page":
                setCurrentPageOverView("Ending Page")
                break;
            default:
                break;
        }
    };

    // Render component based on currentPage
    switch (currentPage) {
        case "Waiting Page":
            return<WaitingForPlayers currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "Intermission Screen":
            return <IntermissionPage currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "Get Ready To Vote Page":
            return <GRTVOverview currentPage={currentPage} setCurrentPage={setCurrentPageOverView} />;
        case "Question Page":
            return <QuestionOverView currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "Waiting Page After Question":
            return <AQOverview currentPage={currentPage} setCurrentPage={setCurrentPageOverView} />;
            case "Result Page":
            return <ResultPageOverView currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView} />;
        case "Ending Page":
            return<EndingPageMaiwandOverview currentPage={currentPage} setCurrentPageOverView={setCurrentPageOverView}/>;
        default:
            return <div>Error: Unknown page</div>;
    }



}

export default OverView;
