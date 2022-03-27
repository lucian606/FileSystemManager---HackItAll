import React, {useState, useEffect} from 'react';
import Networks from './Networks';
import Agents from './Agents';
import Reports from './Reports';
import { database } from "../firebase";

export default function Dashboard() {

    const [option, setOption] = useState('n');
    const [networks, setNetworks] = useState([]);
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [agents, setAgents] = useState([]);

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

    const handleSelectNetwork = (value) => {
        console.log(value);
        setSelectedNetwork(value);
    }

    useEffect(() => {
        if (selectedNetwork) {
            setOption('a');
        }
    }, [selectedNetwork]);

    const getDashboardScreen = () => {
        console.log('dasd')
        switch (option) {
            case 'n':
                return (<Networks networks={networks} agents={agents} selectNetwork={handleSelectNetwork}/>);
            case 'a':
                return (<Agents agents={agents} selectedNetwork={selectedNetwork}/>);
            case 'r':
                return (<Reports/>);
            default:
                return (<Networks networks={networks} agents={agents} selectNetwork={handleSelectNetwork}/>);
        }
    }

    return (
        <div className="w-full flex h-screen">
            <div className="w-1/5 bg-zinc-100 p-2">
                <div className="mt-6 text-xl font-medium mb-4">SegFault IoT Manager</div>
                <div className='cursor-pointer text-lg mb-1 hover:bg-gray-200' onClick={() => setOption('n')}>Networks</div>
                <div className='cursor-pointer text-lg mb-1 hover:bg-gray-200' onClick={() => setOption('a')}>Agents</div>
                <div className='cursor-pointer text-lg mb-1 hover:bg-gray-200' onClick={() => setOption('r')}>Reports</div>
                <div className='cursor-pointer text-lg mb-1 hover:bg-gray-200' onClick={() => setOption('r')}>Log out</div>
            </div>
            {getDashboardScreen()}
        </div>
    );
}