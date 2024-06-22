import { Github, Twitter, Linkedin } from "lucide-react";
import { InviteFriend } from "./InviteFriend";
export const Footer: React.FC = () => {
  return (
    <div className='bg-foreground py-4'>
      <div className='max-w-4xl px-4 mx-auto'>
        <img src='./logo-white.png' className='w-36 my-2' alt='' />
        <div className='flex text-background justify-between items-center my-4'>
          <div className='flex gap-4 text-gray-500'>
            <Github className='hover:text-gray-400' />
            <Twitter className='hover:text-gray-400' />
            <Linkedin className='hover:text-gray-400' />
          </div>
          <InviteFriend />
        </div>
        <div className='text-gray-500'>
          All rights are reserved &copy;{new Date().getFullYear()} Ansari Danish
        </div>
      </div>
    </div>
  );
};
