import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
    getDefault,
    getLs,
    postMkdir,
    getPwd,
    getCat,
    postCd,
    postTouch,
    getFind,
    getPs,
} from './apicaller';

export default function DeviceTerminal(props) {

    const userPrefix = "stefan@Stefans-MacBook-Pro:~?";
    const [history, setHistory] = useState([]);
    const terminalBody = useRef(null);

    useEffect(() => {
        //handleGetLs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGetPwd = () => {
        getPwd(succesful, failed);
    }

    const handleGetLs = () => {
        getLs(succesful, failed);
    }

    const handlePostCd = (cdParams) => {
        console.log(cdParams);
        postCd(cdParams, succesful, failed);
    }

    const handleGetCat = (catParams) => {
        console.log(catParams);
        getCat(catParams, succesful, failed);
    }

    const handlePostMkdir = (mkdirParams) => {
        console.log(mkdirParams);
        postMkdir(mkdirParams, succesful, failed);
    }

    const succesful = (response) => {
        // if (Array.isArray(response.data)) {
        //     console.log('List');
        //     //setHistory([...history, response.data.join('\n')]);
        // }
        // else {
        //     setHistory([...history, response.data]);
        // }
        response.data.data.sort().forEach(e => concatToTerminal(e));
    }

    const succesfulFind = (response) => {
        response.data.data.sort().forEach(e => concatToTerminal(e));
    }

    const failed = (error) => {
        console.log(error);
    }

    const concatToTerminal = (value) => {
        setHistory(history => [...history, value]);
    }

    const clearTerminal = () => {
        setHistory([]);
    }

    const submitCode = (value) => {
        concatToTerminal(userPrefix + ' ' + value);
        if (value === 'clear') {
            clearTerminal();
        }
        else if (value === 'ls') {
            handleGetLs();
        }
        else if (value === 'pwd') {
            handleGetPwd();
        }
        else if (value.startsWith('cd')) {
            let cdParams = value.split(' ');
            handlePostCd({path: cdParams[1]});
        } 
        else if (value.startsWith('cat')) {
            let catParams = value.split(' ');
            handleGetCat({path: catParams[1]});
        }
        else if (value.startsWith('touch')) {
            let touchParams = value.split(' ');
            postTouch({path: touchParams[1]}, succesful, failed);
        }
        else if (value.startsWith('find')) {
            let findParams = value.split(' ');
            console.log(findParams);
            getFind({name: findParams[1]}, succesfulFind, failed);
        }
        else if (value.startsWith('mkdir')) {
            let mkdirParams = value.split(' ');
            handlePostMkdir({path: mkdirParams[1]});
        }
    }

    return (
        <div className="bg-background rounded-lg text-lg h-96 px-4 pt-4 pb-16 m-6 overflow-y-auto bg-black text-green-500" ref={terminalBody}>
            { history.map((x) => (
                <div>
                    <span>{x}</span>
                </div>
            ))}
            <div className="flex">
                {userPrefix}
                <input
                    type="text"
                    className="flex-1 block w-full bg-background text-foreground ml-2 bg-black outline-none"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            submitCode(e.target.value);
                            e.target.value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
}