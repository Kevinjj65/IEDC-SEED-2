import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Page3() {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/page4'); // Navigate to page4 when the button is clicked
    };

    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
            <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg mb-4 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold mb-2">Vision</h2>
                <p className="text-lg font-light">
                    To be a pioneering force in shaping a dynamic culture of innovation and entrepreneurship, where creativity thrives, and groundbreaking solutions emerge to address global challenges.
                </p>
            </div>
            <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg mb-4 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold mb-2">Mission</h2>
                <p className="text-lg font-light">
                    To empower students and faculty by fostering an environment that nurtures entrepreneurial spirit and innovative thinking. We are committed to providing the resources, mentorship, and opportunities needed to transform novel ideas into successful ventures and drive meaningful impact.
                </p>
            </div>
            <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-semibold mb-2">Objectives</h2>
                <p className="text-lg font-light">
                    Foster Idea Generation<br />
                    Enhance Skill Development<br />
                    Support Incubation and Funding<br />
                    Foster Collaboration and Networking<br />
                    Integrate Innovation<br />
                    Create a sustained generation of Entrepreneurs
                </p>
            </div>
            <button 
                onClick={handleNextClick} 
                className="mt-8 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Next
            </button>
        </div>
    );
}

export default Page3;

  