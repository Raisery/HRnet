import Header from '../../components/Header'
import { PAGES } from '../../utils/constant'
/**
 * Component for display Employee page
 *
 * @returns The Employee page
 */
export default function Employee() {
    return (
        <div className="employee">
            <Header page={PAGES[1]} />
        </div>
    )
}
