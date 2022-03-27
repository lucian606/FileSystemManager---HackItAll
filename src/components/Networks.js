import React from 'react';
import NetworkItem from './NetworkItem';

export default function Networks(props) {

    return (
        <div className="w-4/5 bg-zinc-50 flex flex-wrap">
            {props.networks.map(network => (
                <NetworkItem key={network.id} data={network.data} />
            ))}
        </div>
    );
}