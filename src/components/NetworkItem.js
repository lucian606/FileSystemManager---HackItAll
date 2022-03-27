import React from 'react';

export default function NetworkItem(props) {

    const getHashtags = (value) => {
        if (!value) return [];
        const tags = value.split(',');
        return tags;
    }

    const selectNetwork = () => {
        props.selectNetwork(props.data.name);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-80 m-6 hover:scale-105 transition ease-in-out">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.data.name}</div>
                <div className="text-gray-700 text-base mb-2">
                    <span className="font-bold mr-1">Description:</span>
                    {props.data.description}
                </div>
                <div className="text-gray-700 text-base">
                    <span className="font-bold mr-1">Network address:</span>
                    {props.data.ip}
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                { getHashtags(props.data.hashtags).map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag}
                    </span>
                ))}
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => selectNetwork()}>See devices</button>
            </div>
        </div>
    );
}