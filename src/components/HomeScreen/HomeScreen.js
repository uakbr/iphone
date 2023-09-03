
import React, { useState } from 'react';
import './HomeScreen.css';

function HomeScreen() {
    const [openApp, setOpenApp] = useState('');

    return (
        <div className="home-screen">
            {openApp ? (
                <div className="open-app">{openApp}</div>
            ) : (
                <>
                    <div className="app-icon" onClick={() => setOpenApp('App 1')}>App 1</div>
                    <div className="app-icon" onClick={() => setOpenApp('App 2')}>App 2</div>
                    <div className="app-icon" onClick={() => setOpenApp('App 3')}>App 3</div>
                    <div className="app-icon" onClick={() => setOpenApp('App 4')}>App 4</div>
                    <div className="dock">
                        <div className="app-icon" onClick={() => setOpenApp('Dock App 1')}>Dock App 1</div>
                        <div className="app-icon" onClick={() => setOpenApp('Dock App 2')}>Dock App 2</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default HomeScreen;
