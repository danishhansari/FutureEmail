import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GanttChart, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { logout, userQueryOptions } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { Skeleton } from "./ui/skeleton";

export const Hamburger: React.FC = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { data, isLoading } = useQuery(userQueryOptions);
  const mutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-current-user"] });
    },
    onError: () => {
      toast({
        title: "Error while logging out",
      });
    },
  });
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

          {isLoading && <Skeleton className='h-10 w-20' />}

          {data && <Button onClick={() => mutation.mutate()}>Logout</Button>}
        </div>
      </PopoverContent>
    </Popover>
  );
};
