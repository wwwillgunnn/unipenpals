import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string
    required?: boolean;
    disabled?: boolean;
    placeholder?: string
    register: UseFormRegister<FieldValues>,
    // errors: FieldErrors,
}

export default function Input({ label, id, type, required, disabled, placeholder, register }: InputProps ) {
    return (
        <div className="form-control">
            <label className="label" htmlFor={id}>{label}</label>
            <input id={id} 
                   type={type} 
                   autoComplete={id} 
                   disabled={disabled}
                   placeholder={placeholder} 
            //    ? maybe dont need this/modify this
                   { ... register(id, { required })} 
                   className={clsx("input input-bordered")} required/>
        </div>
    );
}

