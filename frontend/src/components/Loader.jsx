import React from "react";
function Loader() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
                <div className="m-2 h-10 w-10 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.40s]"></div>
                <div className="m-2 h-10 w-10 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.30s]"></div>
                <div className="m-2 h-10 w-10 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.20s]"></div>
                <div className="m-2 h-10 w-10 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.10s]"></div>
                <div className="m-2 h-10 w-10 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.9s]"></div>
                <div className="m-2 h-10 w-10 animate-bounce rounded-full bg-gray-700 [animation-delay:-0.8s]"></div>
            </div>
        </div>
    );
}

export default Loader;
