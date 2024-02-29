import React from "react";

function Home() {
    return (
        <div id="home">
            <div
                className="home-container"
                data-aos="fade-down"
                data-aos-duration="2000"
            >
                <h1 className="home-item tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                    Thread
                </h1>
                <h1 className="home-item tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                    the
                </h1>
                <h1 className="home-item text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                    Market
                </h1>
            </div>
        </div>
    );
}

export default Home;
