interface option {
    id: number,
    label: string,
    input: string,
    inputName: string
}
export const optionIterators: option[] = [
    {
        id: 1,
        label: 'Password Length',
        input: 'number',
        inputName: 'passlength'
    },
    {
        id: 2,
        label: 'Include uppercase letters',
        input: 'checkbox',
        inputName: 'passupper'
    },
    {
        id: 3,
        label: 'Include lowercase letters',
        input: 'checkbox',
        inputName: 'passlower'
    },
    {
        id: 4,
        label: 'Include numbers',
        input: 'checkbox',
        inputName: 'passnum'
    },
    {
        id: 5,
        label: 'Include symbols',
        input: 'checkbox',
        inputName: 'passym'
    }
]
