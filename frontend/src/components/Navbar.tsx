import { Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Hamburger } from "./Hamburger";
import { Link, useNavigate } from "@tanstack/react-router";
import { logout, userQueryOptions } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { Skeleton } from "./ui/skeleton";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: async () => {
      await queryClient.invalidateQueries(userQueryOptions);
      navigate({ to: "/auth", replace: true });
    },
    onError: () => {
      toast({
        title: "Error while logging out",
      });
    },
  });

  const { data, isLoading } = useQuery(userQueryOptions);
  console.log(data);

  return (
    <>
      <div className='bg-foreground flex w-full justify-between py-4 px-4 lg:px-20'>
        <div className='flex items-center gap-4 justify-between w-full md:justify-start'>
          <Link to='/'>
            <img className='w-36' src='./logo-white.png' alt='Logo' />
          </Link>
        </div>

        <div className='md:hidden'>
          <Hamburger />
        </div>

        <div className='hidden md:flex gap-2'>
          {!data && !isLoading && (
            <Link to='/auth'>
              <Button
                variant='outline'
                className='bg-foreground text-background'
              >
                Get started
              </Button>
            </Link>
          )}

          {data && (
            <Button className='font-medium text-md gap-2 items-center text-background hidden lg:flex'>
              <Pen size={18} strokeWidth={1} />
              Write
            </Button>
          )}
          {isLoading && <Skeleton className='h-10 w-20 bg-slate-600' />}

          {data && <Button onClick={() => mutation.mutate()}>Logout</Button>}
        </div>
      </div>
    </>
  );
};
