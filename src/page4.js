import React from "react";

function Page4() {
    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Events</h1>
            <p className="text-lg font-bold text-white mb-8">OUR RECENT EVENTS</p>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg w-full max-w-sm">
                    <img src="/images/img1.jpg" alt="Event 1" className="w-full h-auto rounded-lg mb-4" />
                    <h2 className="text-xl font-semibold text-white mb-2">Event 1</h2>
                    <p className="text-lg text-white">Description of Event 1.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg w-full max-w-sm">
                    <img src="/images/img2.jpg" alt="Event 2" className="w-full h-auto rounded-lg mb-4" />
                    <h2 className="text-xl font-semibold text-white mb-2">Event 2</h2>
                    <p className="text-lg text-white">Description of Event 2.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg w-full max-w-sm">
                    <img src="/images/img3.jpg" alt="Event 3" className="w-full h-auto rounded-lg mb-4" />
                    <h2 className="text-xl font-semibold text-white mb-2">Event 3</h2>
                    <p className="text-lg text-white">Description of Event 3.</p>
                </div>
            </div>
        </div>
    );
}

export default Page4;

