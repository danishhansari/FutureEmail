import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GanttChart, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { logout } from "@/lib/api";

export const Hamburger: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <GanttChart className='text-background' />
      </PopoverTrigger>
      <PopoverContent className='w-40 bg-foreground border text-background mr-4'>
        <div className='grid gap-2'>
          <Button variant={"ghost"}>
            <Pen size={16} className='mr-2' />
            Write
          </Button>
          <Link to='/auth'>
            <Button variant={"ghost"}>Get started</Button>
          </Link>
          <Button onClick={() => logout()}>Logout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
