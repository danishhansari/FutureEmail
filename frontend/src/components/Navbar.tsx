import { Pen } from "lucide-react";
import { Button } from "./ui/button";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-foreground flex w-full justify-between py-4 px-4">
        <div className="flex items-center gap-4 justify-between w-full md:justify-start">
          <img className="w-36" src="./logo-white.png" alt="Logo" />
          <button className="font-medium text-md flex gap-2 items-center text-background">
            <Pen size={16} strokeWidth={1} />
            Write
          </button>
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

export default Navbar;
