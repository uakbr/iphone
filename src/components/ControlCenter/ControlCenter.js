
import React from 'react';
import './ControlCenter.css';

function ControlCenter() {
    return (
        <div className="control-center">
            <div className="setting">Wi-Fi</div>
            <div className="setting">Bluetooth</div>
            <div className="setting">Airplane Mode</div>
            <div className="setting">Do Not Disturb</div>
        </div>
    );
}

export default ControlCenter;
