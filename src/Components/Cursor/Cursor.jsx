import React, { useEffect } from 'react';
import './Cursor.css'; // 👈 Style yahan likhenge

const Cursor = () => {

    useEffect(() => {
        const crsr = document.getElementById('cursor');
        const blur = document.getElementById('blurcursor');

        const handleMouseMove = (e) => {
            crsr.style.left = e.clientX + 'px';
            crsr.style.top = e.clientY + 'px';
            blur.style.left = e.clientX - 80 + 'px';
            blur.style.top = e.clientY - 90 + 'px';
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div id="cursor"></div>
            <div id="blurcursor"></div>
        </>
    );
};

export default Cursor;
