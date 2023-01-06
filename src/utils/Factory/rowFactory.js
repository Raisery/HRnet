export default function rowFactory(data) {
    const formatedData = []
    for(var item of data) {
        formatedData.push({id: item.id, value: item.value})
    }
    const options = { month: 'numeric', day: 'numeric' ,year: 'numeric'};
    const row = {
        firstName: formatedData.find(item => item.id === 'first-name').value,
        lastName: formatedData.find(item => item.id === 'last-name').value,
        startDate: formatedData.find(item => item.id === 'start-date').value.toLocaleDateString('en-US', options),
        department: formatedData.find(item => item.id === 'department').value,
        dateOfBirth: formatedData.find(item => item.id === 'date-of-birth').value.toLocaleDateString('en-US', options),
        street: formatedData.find(item => item.id === 'street').value,
        city: formatedData.find(item => item.id === 'city').value,
        state: formatedData.find(item => item.id === 'state').value,
        zipCode: formatedData.find(item => item.id === 'zip-code').value
    }

    return row
}