

export const PasswordValidator = {
    required: true,
    validate: {
        trimCheck: value => value.trim() !== '' || 'Lozinka ne moze biti prazan prostor'
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