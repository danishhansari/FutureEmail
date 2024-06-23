import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Signin = () => {
  return (
    <div className='grid place-items-center bg-foreground text-background h-[75vh]'>
      <div className='max-w-md w-full'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Login to you Account
        </h3>
        <p className='text-sm text-muted-foreground text-center md:text-left'>
          Enter your credentials.
        </p>

        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            placeholder='Email'
            className='text-background bg-foreground border-slate-800'
          />
        </div>
        <div className='grid w-full items-center gap-1.5 mt-4'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            placeholder='Password'
            className='text-background bg-foreground border-slate-800'
          />
        </div>
        <Button className='block w-full mt-4 bg-slate-800 text-gray-300'>
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Signin;
