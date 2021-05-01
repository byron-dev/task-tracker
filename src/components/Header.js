// Use to set validation for properties
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

// Setting up default properties for a component
Header.defaultProps = {
    title: 'Task Tracker',
}

// Setting types for properties to validate they are correct
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
    