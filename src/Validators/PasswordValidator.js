

export const PasswordValidator = {
    required: true,
    validate: {
        trimCheck: value => value.trim() !== '' || 'Lozinka ne moze biti prazan prostor'
    }
}