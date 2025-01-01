import React from 'react';
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
                <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    <Link to='/signup'>
                    Get Started
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
