import Dropdown from '../Dropdown'
import './index.css'
import { DEPARTMENTS, STATES } from '../../utils/constant'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux'
import rowFactory from '../../utils/Factory/rowFactory'
import * as employeeAction from '../../utils/slices/employee'
import employeeFormIsValid from '../../utils/Validation/employeeFormIsValid'
import { useState } from 'react'

/**
 * Component for display NewEmployeeForm
 *
 * @returns A employee form
 */
export default function NewEmployeeForm({ onSubmit }) {
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        const fields = document.querySelectorAll('input')
        const testResult = employeeFormIsValid(fields)
        if (testResult.length !== 0) return setErrors(testResult)
        const row = rowFactory(fields)

        document.querySelector('.form').reset()
        dispatch(employeeAction.add(row))
        onSubmit(event)
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
                                <p
                                    className={
                                        errors.includes('first-name')
                                            ? 'field-error'
                                            : 'invisible'
                                    }
                                >
                                    First name can only includes letters and -
                                    character
                                </p>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    className="standard-input"
                                    type="text"
                                    id="last-name"
                                    required={true}
                                />
                                <p
                                    className={
                                        errors.includes('last-name')
                                            ? 'field-error'
                                            : 'invisible'
                                    }
                                >
                                    Last name can only includes letters and -
                                    character
                                </p>
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
                        <div className="error-wrapper">
                            <input
                                className="standard-input"
                                id="city"
                                type="text"
                                required={true}
                            />
                            <p
                                className={
                                    errors.includes('city')
                                        ? 'field-error'
                                        : 'invisible'
                                }
                            >
                                City can only includes letters and - character
                            </p>
                        </div>
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
