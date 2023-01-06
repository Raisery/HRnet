import Dropdown from '../Dropdown'
import './index.css'
import { DEPARTMENTS, STATES } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import rowFactory from '../../utils/Factory/rowFactory'
import * as employeeAction from '../../utils/slices/employee'
import employeeFormIsValid from '../../utils/Validation/employeeFormIsValid'
import { useState } from 'react'
import React from 'react'
import DatePicker from '../DatePicker'

/**
 * Component for display NewEmployeeForm
 *
 * @returns A employee form
 */
export default function NewEmployeeForm({ onSubmit }) {
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(STATES[0])
    const [zipCode, setZipCode] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [department, setDepartment] = useState(DEPARTMENTS[0])

    function handleSubmit(event) {
        event.preventDefault()
        const values = [
            { id: 'first-name', value: firstName },
            { id: 'last-name', value: lastName },
            { id: 'date-of-birth', value: birthDate },
            { id: 'street', value: street },
            { id: 'city', value: city },
            { id: 'state', value: state },
            { id: 'zip-code', value: zipCode },
            { id: 'start-date', value: startDate },
            { id: 'department', value: department },
        ]
        const testResult = employeeFormIsValid(values)
        if (testResult.length !== 0) return setErrors(testResult)
        const row = rowFactory(values)

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
                                    defaultValue={firstName}
                                    onChange={(event) =>
                                        setFirstName(event.target.value)
                                    }
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
                                    defaultValue={lastName}
                                    onChange={(event) =>
                                        setLastName(event.target.value)
                                    }
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
                        <div className="custom-datepicker-wrapper">
                            <DatePicker
                                className="standard-input"
                                value={birthDate}
                                onChangeHandler={setBirthDate}
                            />
                        </div>
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
                            defaultValue={street}
                            onChange={(event) => setStreet(event.target.value)}
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
                                defaultValue={city}
                                onChange={(event) =>
                                    setCity(event.target.value)
                                }
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
                            onChange={(event) => setState(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="zip-code">Zip Code :</label>
                        <input
                            className="standard-input"
                            id="zip-code"
                            type="number"
                            required={true}
                            defaultValue={zipCode}
                            onChange={(event) => setZipCode(event.target.value)}
                        />
                    </div>
                </div>
                <div className="form-fields">
                    <div className="input-wrapper">
                        <label htmlFor="start-date">Start Date :</label>
                        <div className="custom-datepicker-wrapper">
                            <DatePicker
                                className="standard-input"
                                value={startDate}
                                onChangeHandler={setStartDate}
                            />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="department">Department :</label>
                        <Dropdown
                            className="dropdown-input"
                            inputId="department"
                            data={DEPARTMENTS}
                            defaultValue={department}
                            onChange={setDepartment}
                        />
                    </div>
                </div>

                <button className="submit_button">Save</button>
            </form>
        </div>
    )
}
