import React, {useState, useEffect} from 'react';
import NetworkItem from './NetworkItem';
import { database } from "../firebase";

export default function Dashboard() {

    const [option, setOption] = useState('');
    const [networks, setNetworks] = useState([]);
    const [agents, setAgents] = useState([]);

    const demoNetwork = {
        
    }

    // fetching networks...
    useEffect(() => {
        let networksArr = [];
        const networksRef = database.ref('networks');
        const fetchNetworks = async () => {
            await networksRef.on('value', snapshot => {
                snapshot.forEach(network => {
                    networksArr.push({ id: network.key, data: network.val() });
                });
                setNetworks(networksArr);
            });
        }
        fetchNetworks();
    }, []);

    // fetching agents...
    useEffect(() => {
        let agentsArr = [];
        const agentsRef = database.ref('agents');
        const fetchAgents = async () => {
            await agentsRef.on('value', snapshot => {
                snapshot.forEach(agent => {
                    agentsArr.push({ id: agent.key, data: agent.val() });
                });
                setAgents(agentsArr);
            });
        }
        fetchAgents();
    }, []);

    const handleNetwork = (e) => {
        console.log('Network chosen');
    }

    return (
        <div className="w-full flex h-screen">
            <div className="w-1/4 bg-zinc-100 p-2">
                <div className="mt-6 text-lg font-medium">SegFault IoT Manager</div>
                <div className='cursor-pointer' onClick={() => setOption('n')}>Networks</div>
                <div className='cursor-pointer' onClick={() => setOption('d')}>Devices</div>
                <div className='cursor-pointer' onClick={() => setOption('r')}>Reports</div>
            </div>
            <div className="w-3/4 bg-zinc-50 flex flex-wrap">
                <NetworkItem name="Home network"/>
                <NetworkItem name="Office network"/>
                <NetworkItem name="School network"/>
            </div>
        </div>
    );
}