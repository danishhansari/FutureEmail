import { Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Hamburger } from "./Hamburger";
import { Link } from "@tanstack/react-router";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className='bg-foreground flex w-full justify-between py-4 px-4 lg:px-20'>
        <div className='flex items-center gap-4 justify-between w-full md:justify-start'>
          <Link to='/'>
            <img className='w-36' src='./logo-white.png' alt='Logo' />
          </Link>
          <button className='font-medium text-md gap-2 items-center text-background hidden lg:flex'>
            <Pen size={16} strokeWidth={1} />
            Write
          </button>
        </div>

        <div className='md:hidden'>
          <Hamburger />
        </div>

        <div className='gap-2 hidden md:flex'>
          <Link to='/signin'>
            <Button variant={"secondary"}>Sign in</Button>
          </Link>
          <Link to='/signup'>
            <Button
              variant={"outline"}
              className='bg-foreground text-background'
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
