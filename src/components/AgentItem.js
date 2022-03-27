import React from 'react';

export default function AgentItem(props) {

    const connectGui = (data) => {
        localStorage.removeItem('device');
        localStorage.setItem('device', JSON.stringify(data));
        window.location.href = '/gui';
    }

    const connectTerminal = (data) => {
        localStorage.removeItem('device');
        localStorage.setItem('device', JSON.stringify(data));
        window.location.href = '/terminal';
    }

    return (
        <div className="max-w-sm rounded w-1/3 overflow-hidden shadow-lg h-80 m-3 hover:scale-105 transition ease-in-out">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.data.name}</div>
                
                <div className="text-gray-700 text-base">
                    <span className="font-bold mr-1">IP:</span>
                    {props.data.ip}
                </div>
                <div className="text-gray-700 text-base">
                    <span className="font-bold mr-1">Port:</span> 
                    {props.data.port}
                </div>
                <div className="text-gray-700 text-base">
                    <span className="font-bold mr-1">MAC:</span> 
                    {props.data.mac}
                </div>
                <div className="text-gray-700 text-base">
                    <span className="font-bold mr-1">Last access:</span> 
                    {props.data.lastAccess}
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer" onClick={() => connectGui(props.data)}>Connect with GUI</button>
                <div className="underline underline-offset-1 text-sm cursor-pointer" onClick={() => connectTerminal(props.data)}>Connect with terminal</div>
            </div>
            <div className="px-6 pt-4 pb-2">
            </div>
        </div>
    );
}