import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#">/hy!</a>
            <select name="cars" id="cars">
                <option value="Indonesia">/id</option>
                <option value="English">/en</option>
            </select>
        </div>
    )
}

export default Navbar