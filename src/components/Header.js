import React from 'react';

const Header = (props) => {
    return (
        <div>
            <header>
                <div className="wrapper bg-dark text-center text-white pt-3 pb-3 align-content-center text-uppercase">
                 <i className="fa fa-home "/><br></br>
                    <a className="App-logo">{props.title}</a>
                </div>
            </header>

        </div>
    );
};

export default Header;



