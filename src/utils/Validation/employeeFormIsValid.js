export default function employeeFormIsValid(fields) {
    const textFields = ['first-name', 'last-name', 'city']

    const textRegex = new RegExp('^[a-zA-Z-]+$')

    const error = []
    for(var item of fields) {
        if(textFields.includes(item.id)) {
            if(!textRegex.test(item.value)) error.push(item.id)
        }
    }

    return error
}