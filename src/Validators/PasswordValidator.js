

const invalidPasswords = [

    'admin', '123456'
]

export const PasswordValidator = {
    required: true,
    validate: {
        trimCheck: value => value.trim() !== '' || 'Lozinka ne moze biti prazan prostor',
        invalidPasswordCheck: value => !invalidPasswords.includes(value) || 'Ovaj email nije dozvoljen',
        capitalLetterCheck:value => /[A-Z]/.test(value) || 'Lozinka mora sadrzati bar jedno veliko slovo',
        signLetterCheck: value => /[!@#$%]/.test(value) || 'Lozinka mora sadrzati bar jedan znak',
    },
    minLength: {
        value: 5,
        message: "Lozinka mora biti minimum 5 znakova"
    },
    maxLength: {
        value: 16,
        message: "Lozinka mora biti najvise 16 znakova"
    }
}