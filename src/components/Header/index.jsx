import './index.css'
import { Link } from 'react-router-dom'
import { PAGES } from '../../utils/constant'

/**
 * Component for display Header
 *
 * @returns The Header
 */
export default function Header({ page }) {
    var link = <div></div>
    var title = <p>Prop error</p>

    if (page === PAGES[0]) {
        link = (
            <Link className="nav__link" to={'/Employee'}>
                View current employees
            </Link>
        )
        title = <p className="nav__title">Create Employee</p>
    }
    if (page === PAGES[1]) {
        link = (
            <Link className="nav__link" to={'/Home'}>
                Create Employee
            </Link>
        )
        title = <p className="nav__title">View current employees</p>
    }

    return (
        <nav className="nav">
            <p className="nav__logo">HRnet</p>
            {title}
            {link}
        </nav>
    )
}
