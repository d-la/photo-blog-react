import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            Christopher Dinh
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#FFF',
    textAlign: 'left',
    padding: '15px'
}

export default Header;