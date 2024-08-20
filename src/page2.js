import React from "react";
import { useNavigate } from "react-router-dom";

function Page2() {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/page3'); // Navigate to page3 when the button is clicked
    };

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center p-8">
            <div className="bg-gray-700 p-8 rounded shadow-lg text-white max-w-3xl">
                <h1 className="text-3xl font-bold mb-6">A Brief Description</h1>
                <p className="text-lg font-light mb-6">
                    Established in 2018 by the Ministry of Education through the MOE’s Innovation Cell, in collaboration with AICTE, the Institution’s Innovation Council (IIC) aims to foster a culture of innovation and a robust startup ecosystem within higher education institutions. 
                    IIC RSET is dedicated to advancing these objectives by creating a vibrant environment that encourages innovation and entrepreneurial activities. Through initiatives such as workshops, acceleration programs, and collaborative projects, IIC RSET supports students and faculty in transforming groundbreaking ideas into impactful solutions, aligning with the broader mission of nurturing innovation and entrepreneurship within educational institutions.
                </p>
                <button
                    onClick={handleNextClick}
                    className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Page2;

