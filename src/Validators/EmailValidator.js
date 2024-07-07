
const invalidEmails = [
    'admin@gmail.com', 'test@gmail.com'
]

export  const EmailValidator = {
    required: 'Email je obavezan',
    pattern: {
        value: /^[A-Z0-9._%+-]+@gmail.com$/i,
        message: "Pogresna email addresa"
    },
    minLength: {
      value:10,
      message: "Email mora biti minimum 10 znakova"
    },
    validate: {
        invalidEmailCheck: value => !invalidEmails.includes(value) || 'Ovaj email nije dozvoljen'
    }

}