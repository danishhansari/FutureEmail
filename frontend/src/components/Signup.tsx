import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { RegisterType } from "@danishhansari/futureemail-common";

const Signup = () => {
  // const submitUser = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = new FormData(signupForm);
  //   const formData: RegisterType;

  //   for (let [key, value] of form.entries()) {
  //     formData[key as keyof RegisterType] =
  //       value as (typeof formData)[keyof RegisterType];
  //   }
  //   console.log(formData);
  // };

  return (
    <div className='grid place-items-center bg-foreground text-background px-4 mt-4 md:mt-8'>
      <div className='max-w-md w-full'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Create an account
        </h3>
        <p className='text-sm text-muted-foreground md:text-left'>
          Enter your email below to create your account.
        </p>

        <form id='signupForm'>
          <div className='grid w-full items-center gap-1.5 mt-4'>
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              id='name'
              name='name'
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
              placeholder='Email'
              className='text-background bg-foreground border-slate-800 focus:bg-foreground'
            />
          </div>
          <div className='grid w-full items-center gap-1.5 mt-4'>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
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
              placeholder='Confirm Password'
              className='text-background bg-foreground border-slate-800 focus:bg-foreground'
            />
          </div>
          <Button
            onClick={() => console.log("Hello")}
            className='block w-full mt-4 bg-slate-800 text-gray-300'
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
