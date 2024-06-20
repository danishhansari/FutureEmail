import { Pen } from "lucide-react";
import { Button } from "./ui/button";
import { PopoverDemo } from "./Hamburger";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-foreground flex w-full justify-between py-4 px-4 lg:px-20">
        <div className="flex items-center gap-4 justify-between w-full md:justify-start">
          <img className="w-36" src="./logo-white.png" alt="Logo" />
          <button className="font-medium text-md gap-2 items-center text-background hidden lg:flex">
            <Pen size={16} strokeWidth={1} />
            Write
          </button>
        </div>

        <div className="md:hidden">
          <PopoverDemo />
        </div>

        <div className="gap-2 hidden md:flex">
          <Button variant={"secondary"}>Sign in</Button>
          <Button variant={"outline"} className="bg-foreground text-background">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};
