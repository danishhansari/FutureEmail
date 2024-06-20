import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GanttChart, Pen } from "lucide-react";
import { Button } from "./ui/button";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <GanttChart className="text-background" />
      </PopoverTrigger>
      <PopoverContent className="w-40 bg-foreground border text-background mr-4">
        <div className="grid gap-2">
          <Button variant={"ghost"}>
            <Pen size={16} className="mr-2" />
            Write
          </Button>
          <Button variant={"ghost"}>Signup</Button>
          <Button variant={"ghost"}>Signin</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
