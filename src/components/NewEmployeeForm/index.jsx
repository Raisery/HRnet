import './index.css'

/**
 * Component for display NewEmployeeForm
 *
 * @returns A employee form
 */
export default function NewEmployeeForm({ page }) {
    function handleSubmit(event) {}

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-fields">
                    <div className="fullname">
                        <p>Fullname :</p>
                        <div className="fullname-wrapper">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div className="fullname-wrapper">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" />
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="date-of-birth">Date of Birth :</label>
                        <input id="date-of-birth" type="text" />
                    </div>
                </div>

                <div className="form-fields">
                    <div className="input-wrapper">
                        <label htmlFor="street">Street :</label>
                        <input id="street" type="text" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City :</label>
                        <input id="city" type="text" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="state">State :</label>
                        <select name="state" id="state"></select>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="zip-code">Zip Code :</label>
                        <input id="zip-code" type="number" />
                    </div>
                </div>
                <div className="form-fields">
                    <div className="input-wrapper">
                        <label htmlFor="start-date">Start Date :</label>
                        <input id="start-date" type="text" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="department">Department :</label>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                </div>

                <button>Save</button>
            </form>
        </div>
    )
}
