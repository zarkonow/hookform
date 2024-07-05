import {useForm} from "react-hook-form";
import {EmailValidator} from "../Validators/EmailValidator";
import {PasswordValidator} from "../Validators/PasswordValidator";


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


            {errors.email && <p>{ errors.email.message }</p>}
            <input {...register("email", EmailValidator)} type='text' placeholder='Unesite vase email'/>




            {errors.password && <p>{errors.password.message}</p>}
            <input {...register('password', PasswordValidator)} type='password' placeholder='Unesite Lozinku'/>
            <button>Login</button>
        </form>

    </>
}
