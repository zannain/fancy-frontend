import { useState } from "react";
import FormField from "../Form/FormFIeld/FormField";

interface RegisterFormProps {
    onClick: (...args: any) => any,
    formData: {[key:string]: any},
    errors?: {[key:string]: any}
}
export default function RegisterForm({formData, onClick}: RegisterFormProps) {
    const [requirements, setRequirements] = useState({
        characters: false,
        upperCase: false,
        lowerCase: false,
        number: false,
        specialCharacter: false
    })
    const handleOnChange = (control: React.ChangeEvent<HTMLInputElement>, field: string) => {
        onClick(control, field)
        const value = control.target.value;
        if (field === 'password') {
            const updatedRequirements = requirements
            updatedRequirements['characters'] = ((value.length > 8 && value.length <= 64)) ? true : false;
            updatedRequirements['upperCase'] = /[A-Z]/.test(value) ? true : false;
            updatedRequirements['lowerCase'] = /[a-z]/.test(value) ? true: false;
            updatedRequirements['number'] = /[0-9]/.test(value)? true: false;
            updatedRequirements['specialCharacter'] = /[!@#$%^&*]/.test(value) ? true : false
            setRequirements(updatedRequirements)
        }
    }
    return (
        <>
            <FormField htmlFor="firstName" type="text" label="First Name" value={formData.firstName} onChange={e => handleOnChange(e, 'firstName')} />
            <FormField htmlFor="lastName" type="text" label="Last Name" value={formData.lastName} onChange={e => handleOnChange(e, 'lastName')} />
            <FormField htmlFor="email" placeholder="john@example.com" label="Email" value={formData.email} onChange={e => handleOnChange(e, 'email')} />
            <FormField htmlFor="password" placeholder="********" type="password" label="Password" value={formData.password} onChange={e => handleOnChange(e, 'password')} />
            <ul className="text-xs text-gray-500 my-3 flex flex-col gap-1">
                <li className={requirements['characters'] ? 'valid': ''}>8 - 64 characters</li>
                <li className={requirements['upperCase'] ? 'valid': ''}>One uppercase letter</li>
                <li className={requirements['lowerCase'] ? 'valid': ''}>One lowercase letter</li>
                <li className={requirements['number'] ? 'valid': ''}>One number</li>
                <li className={requirements['specialCharacter'] ? 'valid': ''}>One special character (e.g., ! @ # $ % ^ & *)</li>
            </ul>
        </>
    )
}