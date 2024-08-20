import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        let targetTime = new Date();

        targetTime.setHours(12, 30, 0, 0); // Set target time to 12:30 PM today

        if (now > targetTime) {
            targetTime.setDate(targetTime.getDate() + 1); // If it's past 12:30 PM, set the target to 12:30 PM tomorrow
        }

        const difference = targetTime - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    }

    return (
        <div className="bg-gray-800 text-white p-4 text-center rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Countdown to 12:30 PM</h2>
            <p className="text-lg">
                {`${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}
            </p>
        </div>
    );
}

function Page1() {
    const navigate = useNavigate();

    const handleJoinClick = (e) => {
        e.preventDefault();
        navigate('/page2'); // Navigate to page2 when the button is clicked
    };

    return (
        <div className="bg-gray-800 text-white py-16 flex flex-col items-center">
            <Countdown /> {/* Add the Countdown component here */}

            <section className="text-center mb-12">
                <p className="text-4xl font-bold mb-6">Join IEDC NOW!!</p>
                <div className="flex justify-center">
                    <form className="flex flex-col items-center" onSubmit={handleJoinClick}>
                        <input
                            className="p-3 border border-white rounded mb-4 text-black w-80"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                        />
                        <button type="submit" className="text-white border border-white py-2 px-6 rounded hover:bg-white hover:text-gray-800 transition duration-300">
                            JOIN
                        </button>
                    </form>
                </div>
            </section>

            <div className="w-full max-w-5xl flex flex-wrap justify-around mb-12">
            
        {/* Social Media Links Box */}
<div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md mb-8 mx-4">
    <h2 className="text-2xl mb-4 font-semibold text-white">Follow Us</h2>
    <div className="flex justify-center space-x-4">
        <a 
            href="https://www.instagram.com/iicrset/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="text-3xl text-white hover:text-gray-300 transition duration-300"
        >
            <i className="fab fa-instagram" />
        </a>
        <a 
            href="https://www.linkedin.com/company/iic-rset/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="text-3xl text-white hover:text-gray-300 transition duration-300"
        >
            <i className="fab fa-linkedin" />
        </a>
    </div>
</div>

                {/* Contacts Box */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md mb-8 mx-4">
                    <h2 className="text-2xl mb-4 font-semibold">Contacts</h2>
                    <div className="text-left">
                        <p className="text-lg mb-2">Email: <a href="mailto:iic_rset@rajagiritech.edu.in" className="hover:text-gray-400 transition duration-300">iic_rset@rajagiritech.edu.in</a></p>
                        <p className="text-lg font-semibold mb-4">Contacts of Faculty Incharges:</p>
                        <div className="mb-4">
                            <p className="mb-2">Name: Nitheesh Kurian</p>
                            <p>Email: <a href="mailto:nitheeshk@rajagiritech.edu.in" className="hover:text-gray-400 transition duration-300">nitheeshk@rajagiritech.edu.in</a></p>
                            <p>Phone: <a href="tel:+919497413879" className="hover:text-gray-400 transition duration-300">+91 9497413879</a></p>
                        </div>
                        <div>
                            <p className="mb-2">Name: Anu Maria Joykutty</p>
                            <p>Email: <a href="mailto:anumj@rajagiritech.edu.in" className="hover:text-gray-400 transition duration-300">anumj@rajagiritech.edu.in</a></p>
                            <p>Phone: <a href="tel:+919746283111" className="hover:text-gray-400 transition duration-300">+91 9746283111</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-center mt-8">
                <Link to="/" className="text-2xl font-bold text-white hover:text-gray-400 transition duration-300">
                    IEDC
                </Link>
            </section>
        </div>
    );
}

export default Page1;
