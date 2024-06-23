import FormField from "../Form/FormFIeld/FormField";
interface LoginFormProps {
    onClick: (...args: any) => any,
    formData: {[key:string]: any}
}
export default function LoginForm({formData, onClick}: LoginFormProps) {
    return (<>
             <FormField htmlFor="email" placeholder="john@example.com" label="Email" value={formData.email} onChange={e => onClick(e, 'email')} />
             <FormField htmlFor="password" placeholder="********" type="password" label="Password" value={formData.password} onChange={e => onClick(e, 'password')} />
    </>)
}