'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler ,useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Variant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER'){
      axios.post('../../server/api/register', data)
    }

    if (variant == 'LOGIN'){
      // Login logic here
    }
  }

  return (
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      {variant === 'REGISTER' && (
        <Input id="name" label="Name" placeholder="name" register={register} disabled={isLoading} />
      )}
      <Input id="email" label="Email Address" type="email" placeholder="name@email.com" register={register} disabled={isLoading} />
      <Input id="password" label="Password" type="password" placeholder="password" register={register} disabled={isLoading} />

      {/* TODO: show link to take user to password reset page if 3 incorrect attempts*/}
      <div className="form-control hidden">
          <label className="label">
              <a href="#" className="label-text-alt link link-hover text-[#E0E0E0]" >
                  Forgot password?
              </a>
          </label>
      </div>
      
      <div className="form-control mt-6">
        <Button type="submit" variant="btn-square" disabled={isLoading}>
          {variant === 'LOGIN' ? 'Sign in': 'Register'}
        </Button>
      </div>

      {/* TODO: Better formatting here */}
      <div className="flex flex-row gap-2">
        {variant === 'LOGIN' ? 'New to Pen Pals?' : 'Already have an account?'}
        <div onClick={toggleVariant} className="link link-hover text-[#E0E0E0]">{variant === 'LOGIN' ? 'Create an account' : 'Login'}</div>
      </div>
    </form>
  )
}
