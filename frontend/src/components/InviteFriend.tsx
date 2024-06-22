import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send, Twitter, Github, Linkedin } from "lucide-react";

export const InviteFriend = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Send className='inline-block mr-2' size={18} /> Invite Friend
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-foreground text-background'>
        <DialogHeader>
          <DialogTitle>Invite a Friend</DialogTitle>
          <DialogDescription>
            Let your people know about the awesomeness of writing letters to the
            future!
          </DialogDescription>
        </DialogHeader>
        <div className='flex gap-4 text-gray-500'>
          <Github className='hover:text-gray-400' />
          <Twitter className='hover:text-gray-400' />
          <Linkedin className='hover:text-gray-400' />
        </div>
      </DialogContent>
    </Dialog>
  );
};
