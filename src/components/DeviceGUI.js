import React from 'react';
import { useState } from 'react';
import {
    postBlockchainCreateWallet,
    postBlockchainMine,
    postBlockchainGet,
    postBlockchainGetDeviceName,
    postBlockchainPutDeviceData,
    getLs,
    postMkdir,
    getPwd,
    postCd,
    getCat,
    postTouch,
    getFind,
    getPs,
    postUpload,
    postDownload,
    postBlockchainApi,
    postMonkeyApi,
} from './apicaller';
import { coconut } from './coconut';

export default function DeviceGUI() {

    const [lastCommand, setLastCommand] = useState();
    const [output, setOutput] = useState();
    const [argument, setArgument] = useState('');

    const executeCommand = (command) => {
        //postBlockchainGet(null, success, failure);
        if (command === 'blockchain') {
            postBlockchainGet(null, success, failure);
        } else if (command === 'monkey') {
            const args = argument.split(" ");
            postMonkeyApi({ newPath: args[0], fileName: args[1]}, success, failure);
        } else if (command.startsWith('ls')) {
            getLs(argument ? { path: argument } : null, success, failure);
        } else if (command.startsWith('mkdir')) {
            let mkdirParams = argument.split(' ');
            postMkdir({path: mkdirParams[0]}, success, failure);
        } else if (command.startsWith('pwd')) {
            getPwd(success, failure);
        } else if (command.startsWith('cd')) {
            let cdParams = argument.split(' ');
            postCd({path: cdParams[0]}, success, failure);
        } else if (command.startsWith('cat')) {
            let catParams = argument.split(' ');
            getCat({path: catParams[0]}, success, failure);
        } else if (command.startsWith('touch')) {
            let touchParams = argument.split(' ');
            postTouch({path: touchParams[0], content: touchParams[1]}, success, failure);
        } else if (command.startsWith('find')) {
            let findParams = argument.split(' ');
            getFind({name: findParams[0], path: findParams[2]}, success, failure);
        } else if (command.startsWith('ps')) {
            getPs(argument ? {sortBy: argument} : null, success, failure);
        } else if (command.startsWith('upload')) {
            postUpload({ name: "coconut.txt", content: coconut}, success, failure);
        } else if (command.startsWith('download')) {
            postDownload({ path: argument}, success, failure);
        } else if (command.startsWith("post-blockchain")) {
            const args = argument.split(" ");
            postBlockchainApi({ Path: args[0], FileName: args[1]}, success, failure);
        }
    }

    const success = (response) => {
        console.log(response.data.data);
        setOutput(JSON.stringify(response.data.data, undefined, 2));
    }

    const failure = (error) => {
        console.log(error);
    }

    const handleChange = (value) => {
        setArgument(value);
    }

    return (
        <div className='h-full overflow-y-hidden'>
            <div className='m-4 flex flex-wrap'>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('ls')}>List files</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('find')}>Search file</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('touch')}>Create file</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('mkdir')}>Create folder</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('cat')}>View file</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('cd')}>Navigate</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('pwd')}>Current dir.</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('upload')}>Upload</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('download')}><svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download</span></button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('ps')}>Processes</button>
            </div>
            <div className='m-4 flex flex-wrap'>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('blockchain')}>View blockchain</button>
                <button type="button" className="hover:scale-105 transition ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => executeCommand('post-blockchain')}>Backup to blockchain</button>
            </div>
            <div className="flex items-center m-4">
                <label className="text-sm mr-4 font-bold text-gray-900 block">Command input: </label>
                <input type="text" className="text-sm w-96 p-2 border border-gray-300 rounded mt-1" onChange={(event) => handleChange(event.target.value)}/>
            </div>

            <div className="rounded overflow-hidden shadow-lg w-full h-screen m-4">
                <div className="px-6 py-4">
                    <div className="flex items-center font-bold text-xl mb-2">
                        <span className="mr-2">Connected to agent</span>
                        <div className='text-lime-500'>
                            <svg class="w-6 h-6 dark:text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>

    
                    <p class="text-gray-700 text-base">
                        <span class="font-bold mr-1">Command output:</span>
                    </p>
                    <pre className='break-words'>{output}</pre>
                </div>
            </div>
        </div>
    );
}