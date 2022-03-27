import React, {useState} from 'react';
import AgentDetails from './AgentDetails';
import AgentItem from './AgentItem';

export default function Agents(props) {

    const getNetworkAgents = (selectedNetwork, agents) => {
        if (selectedNetwork) {
            return agents.filter(agent => agent.data.network === selectedNetwork);
        }
        return agents;
    }

    return (
        <div className="w-4/5 bg-zinc-50 flex flex-wrap">
            {getNetworkAgents(props.selectedNetwork, props.agents).map(agent => (
                <AgentItem key={agent.id} data={agent.data} agentId={agent.id}/>
            ))}
        </div>
    );
}
