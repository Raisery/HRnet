import './index.css'
import Header from '../../components/Header'
import NewEmployeeForm from '../../components/NewEmployeeForm'
import { PAGES } from '../../utils/constant'

/**
 * Component for display home page
 *
 * @returns The home page
 */
export default function Home() {
    return (
        <div>
            <Header page={PAGES[0]} />
            <div className="home">
                <NewEmployeeForm />
            </div>
        </div>
    )
}
