import React from 'react';

import './Footer.css';

export function Footer() {
    return (
        <>
            <div className="py-2 text-center footer-style">©Ahmed Manzim Ridwan &nbsp; {new Date().getFullYear()}</div>
        </>
    )
}