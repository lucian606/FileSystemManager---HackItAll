import React from 'react';
import AgentDetails from './AgentDetails';

export default function Agents(props) {

    return (
        <div className="w-4/5 bg-zinc-50 flex flex-wrap">
            {props.agents.map(agent => (
                <AgentDetails key={agent.id} data={agent.data} />
            ))}
        </div>
    );
}