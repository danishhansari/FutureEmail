import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/api";
import { LoginType } from "@danishhansari/futureemail-common";
import { ChangeEvent, useState } from "react";

const Signin = () => {
  const [login, setLogin] = useState<LoginType>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className='grid place-items-center bg-foreground text-background px-4 mt-4 md:mt-8'>
      <div className='max-w-md w-full'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Login to you Account
        </h3>
        <p className='text-sm text-muted-foreground md:text-left'>
          Enter your credentials.
        </p>

        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            placeholder='Email'
            value={login.email}
            onChange={handleChange}
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            value={login.password}
            onChange={handleChange}
            placeholder='Password'
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <Button
          onClick={() => console.log("hello")}
          className='block w-full mt-4 bg-slate-800 text-gray-300'
        >
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Signin;
