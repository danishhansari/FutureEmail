import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup, userQueryOptions } from "@/lib/api";
import { RegisterType } from "@danishhansari/futureemail-common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "@tanstack/react-router";

const Signup: React.FC = () => {
  const initialState: RegisterType = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [register, setRegister] = useState<RegisterType>(initialState);

  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: () => signup(register),
    onSuccess: async () => {
      await queryClient.refetchQueries(userQueryOptions);
      setRegister(initialState);
      toast({
        title: "Register in successfully",
      });
      navigate({ to: "/", replace: true });
    },
    onError: (response) =>
      toast({
        title: response.message,
      }),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegister((prev) => ({ ...prev, [name]: value }));
    console.log(register);
  };

  return (
    <div className='grid place-items-center bg-foreground text-background px-4 mt-4 md:mt-8'>
      <div className='max-w-md w-full'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Create an account
        </h3>
        <p className='text-sm text-muted-foreground md:text-left'>
          Enter your email below to create your account.
        </p>

        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            value={register.name}
            onChange={handleChange}
            placeholder='Name'
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            value={register.email}
            onChange={handleChange}
            placeholder='Email'
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            value={register.password}
            onChange={handleChange}
            name='password'
            placeholder='Password'
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='confirm-password'>Confirm Password</Label>
          <Input
            type='password'
            id='confirm-password'
            name='confirmPassword'
            value={register.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Password'
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <Button
          onClick={() => mutation.mutate()}
          className='block w-full mt-4 bg-slate-800 text-gray-300'
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Signup;
