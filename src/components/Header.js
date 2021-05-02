// Use to set validation for properties
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add Task'} 
                onClick={onAdd}/>
        </header>
    )
}

// Setting up default properties for a component if they are not passed in the function
Header.defaultProps = {
    title: 'Task Tracker',
}

// Setting types for properties to validate their type and options
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
    