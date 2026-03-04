import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [chatHistory, setChatHistory] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 30 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setInput("");
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        const currentPrompt = prompt !== undefined ? prompt : input;

        if (!currentPrompt) {
            setLoading(false);
            return;
        }

        setRecentPrompt(currentPrompt);

        // If it's already in history, just load it from history
        if (chatHistory[currentPrompt]) {
            let historicalResponseResponseArray = chatHistory[currentPrompt].split(" ");
            for (let i = 0; i < historicalResponseResponseArray.length; i++) {
                const nextWord = historicalResponseResponseArray[i];
                delayPara(i, nextWord + " ");
            }
            setLoading(false);
            setInput("");
            return;
        }

        // New prompt case
        if (!prevPrompts.includes(currentPrompt)) {
            setPrevPrompts(prev => [...prev, currentPrompt]);
        }

        try {
            const response = await runChat(currentPrompt);

            let responseArray = response.split("**");
            let newResponse = "";
            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
            let newResponse2 = newResponse.split("*").join("</br>");

            setChatHistory(prev => ({
                ...prev,
                [currentPrompt]: newResponse2
            }));

            let newResponseArray = newResponse2.split(" ");
            for (let i = 0; i < newResponseArray.length; i++) {
                const nextWord = newResponseArray[i];
                delayPara(i, nextWord + " ");
            }
        } catch (error) {
            console.error("Error fetching Gemini response:", error);
            setResultData("⚠️ Sorry, the AI request failed. Please check the console or your API key.");
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        chatHistory,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
