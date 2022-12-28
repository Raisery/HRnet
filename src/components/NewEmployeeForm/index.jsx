import Dropdown from '../Dropdown'
import './index.css'
import { DEPARTMENTS, STATES } from '../../utils/constant'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux'
import rowFactory from '../../utils/Factory/rowFactory'
import * as employeeAction from '../../utils/slices/employee'

/**
 * Component for display NewEmployeeForm
 *
 * @returns A employee form
 */
export default function NewEmployeeForm({ page }) {
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        const fields = document.querySelectorAll('input')
        //verification des champs
        const row = rowFactory(fields)

        dispatch(employeeAction.add(row))
        //ouvrir la modal de confirmation
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-fields">
                    <div className="fullname">
                        <p>Fullname :</p>
                        <div className="fullname-wrapper">
                            <div className="input-wrapper">
                                <label htmlFor="first-name">First Name</label>
                                <input
                                    className="standard-input"
                                    type="text"
                                    id="first-name"
                                    required={true}
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    className="standard-input"
                                    type="text"
                                    id="last-name"
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="date-of-birth">Date of Birth :</label>
                        <input
                            className="standard-input"
                            type="date"
                            name="date-of-birth"
                            id="date-of-birth"
                            required={true}
                        />
                    </div>
                </div>

                <div className="form-fields">
                    <div className="input-wrapper">
                        <label htmlFor="street">Street :</label>
                        <input
                            className="standard-input"
                            id="street"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City :</label>
                        <input
                            className="standard-input"
                            id="city"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="state">State :</label>
                        <Dropdown
                            className="dropdown-input"
                            inputId="state"
                            data={STATES}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="zip-code">Zip Code :</label>
                        <input
                            className="standard-input"
                            id="zip-code"
                            type="number"
                            required={true}
                        />
                    </div>
                </div>
                <div className="form-fields">
                    <div className="input-wrapper">
                        <label htmlFor="start-date">Start Date :</label>
                        <input
                            className="standard-input"
                            type="date"
                            name="start-date"
                            id="start-date"
                            required={true}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="department">Department :</label>
                        <Dropdown
                            className="dropdown-input"
                            inputId="department"
                            data={DEPARTMENTS}
                        />
                    </div>
                </div>

                <button>Save</button>
            </form>
        </div>
    )
}
