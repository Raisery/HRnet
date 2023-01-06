import ReactDatePicker from 'react-datepicker'
import React from 'react'
import './index.css'
import 'react-datepicker/dist/react-datepicker.css'

/**
 * Component for displaying a scrolling menu
 *
 * @returns A scrolling menu
 */
export default function DatePicker({ className, onChangeHandler, value }) {
    const years = []
    for (var y = 1920; y < new Date().getFullYear() + 1; y++) {
        years.push(y)
    }
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const CustomInputDate = React.forwardRef(({ value, onClick }, ref) => (
        <button
            type="button"
            className={className + ' custom-button'}
            onClick={onClick}
            ref={ref}
        >
            {value}
        </button>
    ))

    return (
        <ReactDatePicker
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        type="button"
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                    >
                        {'<'}
                    </button>
                    <select
                        value={date.getFullYear()}
                        onChange={({ target: { value } }) => changeYear(value)}
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[date.getMonth()]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                    >
                        {'>'}
                    </button>
                </div>
            )}
            selected={value}
            onChange={(date) => onChangeHandler(date)}
            customInput={<CustomInputDate />}
        />
    )
}
