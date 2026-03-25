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
    const [messages, setMessages] = useState([]);
    const [isNewChat, setIsNewChat] = useState(true);

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setInput("");
        setMessages([]);
        setIsNewChat(true);
        setResultData("");
    };

    const processResponse = (response, prompt) => {
        // Format response (bolding, line breaks)
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let formattedResponse = newResponse.split("*").join("</br>");

        // Cache the formatted response
        setChatHistory(prev => ({ ...prev, [prompt]: formattedResponse }));

        // Show result data instantly
        setResultData(formattedResponse);

        // Update messages list immediately
        setMessages(prev => [...prev, { role: "model", content: formattedResponse }]);
        setLoading(false);
    };

    const onSent = async (prompt) => {
        const currentPrompt = prompt !== undefined ? prompt : input;

        if (!currentPrompt) {
            return;
        }

        // Snap initial setup
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(currentPrompt);
        setInput("");

        // Update messages with user prompt
        const newUserMessage = { role: "user", content: currentPrompt };
        setMessages(prev => [...prev, newUserMessage]);

        // If it's a new chat session, add it to the sidebar history
        if (isNewChat) {
            if (!prevPrompts.includes(currentPrompt)) {
                setPrevPrompts(prev => [currentPrompt, ...prev]);
            }
            setIsNewChat(false);
        }

        // Check cache first for absolute instant repeat responses
        if (chatHistory[currentPrompt]) {
            processResponse(chatHistory[currentPrompt], currentPrompt);
            return;
        }

        try {
            const response = await runChat(currentPrompt);
            processResponse(response, currentPrompt);
        } catch (error) {
            console.error("Error fetching Gemini response:", error);
            setResultData("⚠️ Sorry, the AI request failed. Please check the console or your API key.");
            setLoading(false);
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
        messages,
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
