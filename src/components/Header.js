import React from 'react'
// import PropTypes from 'prop-types';
import Button from './Button';

function Header({title= "Task Tracker as default",toggleShow,isTaskBarShowed} ) {
    return (
       <header className="header">
           <h1>{title}</h1>
           <Button color={isTaskBarShowed ? "steelblue" : "purple"} 
           text = {isTaskBarShowed ? "Hide Create Task Bar":"Show Create a Task Bar"} 
           toggleShow={toggleShow}
           />
       </header>
    )
}
// Header.defaultprops = {
//     title: 'Task Tracker as default'
// }

// Header.propTypes = {
//     title:PropTypes.string.isRequired
// }
export default Header
