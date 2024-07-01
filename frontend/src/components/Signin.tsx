import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signin, userQueryOptions } from "@/lib/api";
import { LoginType } from "@danishhansari/futureemail-common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "@tanstack/react-router";

const Signin = () => {
  const initialState: LoginType = { email: "", password: "" };
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [login, setLogin] = useState<LoginType>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: () => signin(login),
    onSuccess: async () => {
      await queryClient.refetchQueries(userQueryOptions);
      setLogin(initialState);
      toast({
        title: "Logged in successfully",
      });
      navigate({ to: "/", replace: true });
    },
    onError: (response) =>
      toast({
        title: response.message,
      }),
  });

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
            name='email'
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
            name='password'
            value={login.password}
            onChange={handleChange}
            placeholder='Password'
            className='text-background bg-foreground border-slate-800 focus:bg-foreground'
          />
        </div>
        <Button
          onClick={() => mutation.mutate()}
          className='block w-full mt-4 bg-slate-800 text-gray-300'
        >
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Signin;
