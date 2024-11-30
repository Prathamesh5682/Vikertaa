import React from 'react';
import bappaImage from '../images/bappa.png';

const Aboutus = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4">

            {/* Title Section */}
            <div className="text-center mt-12">
                <h1 className="text-3xl md:text-4xl font-bold">
                    <span className="text-orange-400">Vikreta</span> an online auction marketplace
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    Vikreta is an online auction marketplace where sellers and customers can perform
                    buying and selling their products at prices set by the sellers. The platform introduces
                    new technology allowing multiple buyers to bid on the same product.
                </p>
            </div>

            {/* Our Project Images */}
            <div className="flex flex-wrap justify-center gap-4 p-4 mt-5">
                <img
                    src={bappaImage}
                    alt="Photo 1"
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-md"
                />
                <img
                    src={bappaImage}
                    alt="Photo 2"
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-md"
                />
                <img
                    src={bappaImage}
                    alt="Photo 3"
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-md"
                />
            </div>

            {/* Project Description */}
            <div className="flex justify-center items-center p-4 mt-10">
                <p className="text-center text-xl sm:text-2xl md:w-3/4">
                    Vikreta brings an innovative auction platform where customers and sellers can interact and
                    set their own prices for products. The platform leverages new technology to enhance user
                    experience, providing a seamless bidding process.
                </p>
            </div>

            {/* Founding Story Section */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center mt-20 mb-10 p-4">
                <div className="mt-10 w-full md:w-1/2 text-center md:text-left md:ml-8">
                    <h1 className="text-red-400 lg:ml-28 sm:ml-0 md:ml-0 text-2xl">OUR FOUNDING STORY</h1>
                    <p className="text-xl lg:ml-28 sm:ml-0 md:ml-0 mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt aliquid
                        veritatis in nulla voluptatibus ducimus harum distinctio impedit maiores, a quas modi,
                        quos eligendi aperiam ipsam alias obcaecati eos?
                    </p>
                </div>
                <div className="mt-4 md:mt-0 w-full md:w-1/2 flex justify-center p-4">
                    <img
                        src={bappaImage}
                        alt="Founding Story Image"
                        className="w-full sm:w-96 h-80 object-cover rounded-md"
                    />
                </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="flex flex-col md:flex-row w-full md:w-[80%] justify-center items-center mt-28 mb-10 p-4">
                {/* Vision Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <p className="text-xl text-justify">
                        <h1 className="text-red-400 text-2xl">OUR VISION</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt aliquid
                        veritatis in nulla voluptatibus ducimus harum distinctio impedit maiores, a quas modi,
                        quos eligendi aperiam ipsam alias obcaecati eos?
                    </p>
                </div>

                {/* Mission Section */}
                <div className="w-full md:w-1/2">
                    <p className="text-xl text-justify ml-0 md:ml-10">
                        <h1 className="text-red-400 text-2xl">OUR MISSION</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt aliquid
                        veritatis in nulla voluptatibus ducimus harum distinctio impedit maiores, a quas modi,
                        quos eligendi aperiam ipsam alias obcaecati eos?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
