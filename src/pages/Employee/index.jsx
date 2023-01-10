import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import { selectEmployee } from '../../utils/selector'
import Header from '../../components/Header'
import { PAGES } from '../../utils/constant'
import './index.css'
import { useState } from 'react'
import searchIcon from '../../assets/icons/search_icon.svg'
import filterData from '../../utils/filterData'

const columns = [
    {
        name: 'First Name',
        selector: (row) => row.firstName,
        sortable: true,
        maxWidth: '200px',
    },
    {
        name: 'Last Name',
        selector: (row) => row.lastName,
        sortable: true,
        maxWidth: '200px',
    },
    {
        name: 'Start Date',
        selector: (row) => row.startDate,
        sortable: true,
        width: '110px',
    },
    {
        name: 'Department',
        selector: (row) => row.department,
        sortable: true,
        maxWidth: '200px',
    },
    {
        name: 'Date of Birth',
        selector: (row) => row.dateOfBirth,
        sortable: true,
        width: '130px',
    },
    {
        name: 'Street',
        selector: (row) => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: (row) => row.city,
        sortable: true,
    },
    {
        name: 'State',
        selector: (row) => row.state,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: (row) => row.zipCode,
        sortable: true,
        maxWidth: '150px',
    },
]

/**
 * Component for display Employee page
 *
 * @returns The Employee page
 */
export default function Employee() {
    const [search, setSearch] = useState('')
    const employee = useSelector(selectEmployee)

    const data = filterData(search, employee.data)

    return (
        <div className="employee">
            <Header page={PAGES[1]} />
            <div className="search-bar">
                <img
                    className="search-bar__icon"
                    src={searchIcon}
                    alt="Search"
                />
                <input
                    className="search-bar__input"
                    type="text"
                    id="search"
                    placeholder="Search"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>
            <DataTable columns={columns} data={data} pagination />
        </div>
    )
}
