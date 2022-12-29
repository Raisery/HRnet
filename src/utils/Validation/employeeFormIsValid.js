export default function employeeFormIsValid(fields) {
    const textFields = ['first-name', 'last-name', 'city']
    const formatedData = []
    for(var field of fields) {
        formatedData.push({id: field.id, value: field.value})
    }

    const textRegex = new RegExp('^[a-zA-Z-]+$')

    const error = []
    for(var item of formatedData) {
        if(textFields.includes(item.id)) {
            if(!textRegex.test(item.value)) error.push(item.id)
        }
    }

    return error
}