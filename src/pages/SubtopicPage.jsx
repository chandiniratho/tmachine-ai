import React, { useState, useEffect } from "react";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import flyingRobo from "../assets/flyingrobo.png";
import "./SubtopicPage.css";



const Popup = ({ word, definition, onClose, onLanguageChange }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        onLanguageChange(language); // Notify parent to change the highlighted text color
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="popup-header">
                    <span>Highlighted Word</span>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                {/* Popup Body */}
                <div className="popup-body">
                    {/* Word Input */}
                    <input type="text" className="word-input" value={word} readOnly />

                    {/* Options Row */}
                    <div className="options">
                        <span className="circle">4</span>
                        <div className="language-options">
                            <label>
                                <input
                                    type="radio"
                                    name="language"
                                    checked={selectedLanguage === "English"}
                                    onChange={() => handleLanguageChange("English")}
                                /> English
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="language"
                                    checked={selectedLanguage === "Tamil"}
                                    onChange={() => handleLanguageChange("Tamil")}
                                /> Tamil
                            </label>
                        </div>
                    </div>

                    {/* Definition Box */}
                    <textarea className="definition-box" value={definition} readOnly />
                </div>
            </div>
        </div>
    );
};
const Modal = ({ content, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✖</button>
                <p>{content}</p>
            </div>
        </div>
    );
};

const SubtopicPage = () => {
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const [activeChapter, setActiveChapter] = useState(chapterId || "1");
    const [openDropdown, setOpenDropdown] = useState("");
    const [popupData, setPopupData] = useState(null);
    const location = useLocation();
    const [mergedContent, setMergedContent] = useState("");
    const [showMergedContent, setShowMergedContent] = useState(false);
    const [mergedSteps, setMergedSteps] = useState([]);
    const mergeStep = location.state?.mergeStep || 0;
    const [selectedContent, setSelectedContent] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
   // Show additional content only if navigated from TrueFalsePage
   const additionalContents = [
    <>
        Foundation <span className="highlight" onClick={() => handleWordClick("Libraries")}>Libraries</span>: 
        There are the core libraries that form the base for all data science 
        <span className="highlight" onClick={() => handleWordClick("workflows")}> workflows</span>. 
        Start here to build a strong foundation.
    </>,
    <>
        Data Manipulation: Learn how to clean, transform, and analyze data using powerful Python 
        <span className="highlight" onClick={() => handleWordClick("Libraries")}> libraries</span>.
    </>,
    <>
        Machine Learning Basics: Get started with fundamental ML concepts and build simple models.
    </>
];


const defaultText = "Python Tutorial - Python is one of the most popular programming languages today, known for its simplicity, extensive features, and library support.";

const [subtopicText, setSubtopicText] = useState(defaultText);


useEffect(() => {
    console.log("📌 Received mergeStep in SubtopicPage:", mergeStep);

    let newMergedSteps = [];

    if (mergeStep === 1) newMergedSteps = [<>{defaultText}</>];
    if (mergeStep === 2) newMergedSteps = [<>{defaultText}</>, additionalContents[0]];
    if (mergeStep === 3) newMergedSteps = [<>{defaultText} {additionalContents[0]}</>, additionalContents[1]];
    if (mergeStep === 4) newMergedSteps = [<>{defaultText} {additionalContents[0]} {additionalContents[1]}</>, additionalContents[2]];
    if (mergeStep >= 5) newMergedSteps = [<>{defaultText} {additionalContents[0]} {additionalContents[1]} {additionalContents[2]}</>];

    setMergedSteps(newMergedSteps);
}, [mergeStep]);





    const data = [
        {
            id: "1", name: "Evaluate Mathematical Expressions",
            topics: [
                { id: "1.1", name: "Merge Two Lists", subtopics: ["Using Loops", "Using Recursion"] },
                { id: "1.2", name: "Basic Arithmetic", subtopics: ["Addition", "Subtraction"] }
            ]
        },
        {
            id: "2", name: "Data Structures in Python",
            topics: [
                { id: "2.1", name: "Lists and Tuples", subtopics: ["Working with Lists", "Tuple Operations"] },
                { id: "2.2", name: "Dictionaries", subtopics: ["Key-Value Pairs", "Dictionary Methods"] }
            ]
        },
        {
            id: "3", name: "Control Flow in Python",
            topics: [
                { id: "3.1", name: "Conditional Statements", subtopics: ["If-Else", "Switch Case"] },
                { id: "3.2", name: "Loops", subtopics: ["For Loop", "While Loop"] }
            ]
        },
        {
            id: "4", name: "Functions and Modules",
            topics: [
                { id: "4.1", name: "Defining Functions", subtopics: ["Parameters", "Return Values"] },
                { id: "4.2", name: "Using Modules", subtopics: ["Importing", "Custom Modules"] }
            ]
        },
        {
            id: "5", name: "Object-Oriented Programming",
            topics: [
                { id: "5.1", name: "Classes and Objects", subtopics: ["Creating Classes", "Instantiating Objects"] },
                { id: "5.2", name: "Inheritance", subtopics: ["Single Inheritance", "Multiple Inheritance"] }
            ]
        }
    ];

    const wordDefinitions = {
        syntax: "The system of rules for the structure of a sentence in a language.",
        Libraries: "A collection of precompiled routines that a program can use.",
        workflows: "A collection of precompiled routines that a program can use."
    };

    const handleWordClick = (word) => {
        setPopupData({ word, definition: wordDefinitions[word] });
    };

    const closePopup = () => {
        setPopupData(null);
    };

    const chapter = data.find(chap => chap.id === activeChapter) || data[0];
    const topic = chapter.topics[0];
    const subtopic = topic.subtopics[0];

    return (
        <div className="subtopic-page">
            <div className="header-section">
                <div className="python-course-badge">Python Course</div>
                <nav className="breadcrumb">
                    
                    <div className="breadcrumb-item dropdown-container"
                        onMouseEnter={() => setOpenDropdown("chapter")}
                        onMouseLeave={() => setOpenDropdown("")}
                    >
                        📘 Chapter - {chapter.id}: {chapter.name} 
                        {openDropdown === "chapter" && (
                            <div className="dropdown-menu">
                                {data.map(chap => (
                                    <div key={chap.id} className="dropdown-item">
                                        <div onClick={() => {
                                            navigate(`/chapter/${chap.id}`);
                                            setActiveChapter(chap.id);
                                        }}>
                                            Chapter - {chap.id}: {chap.name} 
                                        </div>
                                        <div className="nested-dropdown">
                                            {chap.topics.map(top => (
                                                <div key={top.id} className="nested-dropdown-item"
                                                    onClick={() => navigate(`/topic/${top.id}`)}
                                                >
                                                    📖 {top.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> 
                    ➝

                    <div className="breadcrumb-item dropdown-container"
                        onMouseEnter={() => setOpenDropdown("topic")}
                        onMouseLeave={() => setOpenDropdown("")}
                    >
                        📖 Topic - {topic.id}: {topic.name}
                        {openDropdown === "topic" && (
                            <div className="dropdown-menu">
                                {chapter.topics.map(top => (
                                    <div key={top.id} className="dropdown-item"
                                        onClick={() => navigate(`/topic/${top.id}`)}
                                    >
                                        {top.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    ➝

                    <div className="breadcrumb-item dropdown-container"
                        onMouseEnter={() => setOpenDropdown("subtopic")}
                        onMouseLeave={() => setOpenDropdown("")}
                    >
                        📄 Subtopic - {subtopic}
                        {openDropdown === "subtopic" && (
                            <div className="dropdown-menu">
                                {topic.subtopics.map((sub, index) => (
                                    <div key={index} className="dropdown-item"
                                        onClick={() => navigate(`/subtopic/${sub}`)}
                                    >
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            <div className="main-content">
                <aside className="sidebar">
                    <div className="sidebar-header">Chapter No</div>
                    <ul className="chapter-list">
                        {data.map(chap => (
                            <li key={chap.id} className={`chapter-item ${chap.id === activeChapter ? "active" : ""}`}
                                onClick={() => navigate(`/chapter/${chap.id}`)}>
                                <div className="chapter-box">
                                    <span className="chapter-icon">📖</span>
                                    <span className="chapter-number">{chap.id}</span>
                                    {chap.id === activeChapter ? <span className="arrow">›</span> : <span className="dropdown">▼</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="content">
                

<div className="subtopic-content" onClick={() => setSelectedContent(mergedSteps[0])}>
    <img src={flyingRobo} alt="Robot" className="flying-robo" />
    <p>
        {/* Show merged content if available, else show default */}
        {mergedSteps.length > 0 ? mergedSteps[0] : 
            "Python Tutorial - Python is one of the most popular programming languages today, known for its simplicity, extensive features, and library support."
        }
    </p>

    {/* Show highlighted words only if NOT merged content */}
    {mergedSteps.length === 0 && (
        <>
            <span className="highlight" onClick={() => handleWordClick("syntax")}> syntax</span> makes it beginner-friendly, while its powerful 
            <span className="highlight" onClick={() => handleWordClick("Libraries")}> Libraries</span>.
        </>
    )}
</div>

{/* Render additional merged content separately */}
{mergedSteps.slice(1).map((content, index) => (
    <div key={index} className="additional-content-box" onClick={() => setSelectedContent(content)}>
        <img src={flyingRobo} alt="Robot" className="flying-robo" />
        <p>{content}</p>
    </div>
))}

{/* Show Modal when content is clicked */}
{selectedContent && <Modal content={selectedContent} onClose={() => setSelectedContent(null)} />}


          <div className="bottom-controls">
                    <button className="next-btn" onClick={() => navigate("/true-false", { state: { mergeStep } })}>Next</button>

                  
                    </div>
                </main>
            </div>

            {popupData && <Popup word={popupData.word} definition={popupData.definition} onClose={closePopup} />}
        </div>
    );
};

export default SubtopicPage;
