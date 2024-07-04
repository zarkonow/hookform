import {useForm} from "react-hook-form";


export const LoginForm = props => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const formSubmitted = (formData) => console.log(formData);


    return <>
        <form onSubmit={handleSubmit(formSubmitted)}>

            <input type='text' placeholder='Unesite vase ime'/>

            {errors.password && <p>Lozinka je Obavezna</p>}
            <input {...register('password', {
                required: true,
                validate: {
                    trimCheck: value => value.trim() !== '' || 'Lozinka ne moze biti prazan prostor'
                }

            })} type='password' placeholder='Unesite Lozinku'/>
            <button>Login</button>
        </form>

    </>
}
