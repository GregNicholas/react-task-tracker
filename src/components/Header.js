// rafce - extension shortcut for a component
// impt - extension to import prop types
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import Button from './Button'

const Header = ({ title, toggleAddTask, showAdd }) => {
    const location = useLocation();

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={toggleAddTask} />}
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
