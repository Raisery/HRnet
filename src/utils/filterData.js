export default function filterData(search, data) {
    const target = search.toLowerCase()
    const filteredData = []
    for(var employee of data) {
        var found = false
        if(employee.firstName.toLowerCase().includes(target)) found = true
        if(employee.lastName.toLowerCase().includes(target)) found = true
        if(employee.startDate.toLowerCase().includes(target)) found = true
        if(employee.department.toLowerCase().includes(target)) found = true
        if(employee.dateOfBirth.toLowerCase().includes(target)) found = true
        if(employee.street.toLowerCase().includes(target)) found = true
        if(employee.city.toLowerCase().includes(target)) found = true
        if(employee.state.toLowerCase().includes(target)) found = true
        if(employee.zipCode.toLowerCase().includes(target)) found = true
        
        if(found) {
            filteredData.push(employee)
        }
    }
    return filteredData
}