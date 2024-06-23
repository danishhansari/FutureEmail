import { Github, Twitter, Linkedin } from "lucide-react";
import { InviteFriend } from "./InviteFriend";
import { Link } from "@tanstack/react-router";
export const Footer: React.FC = () => {
  return (
    <div className='bg-foreground py-4'>
      <div className='max-w-4xl px-4 mx-auto'>
        <Link to='/'>
          <img src='./logo-white.png' className='w-36 my-2' alt='' />
        </Link>
        <div className='flex text-background justify-between items-center my-4'>
          <div className='flex gap-4 text-gray-500 my-2'>
            <a href='https://github.com/danishhansari'>
              <Github className='hover:text-gray-400' />
            </a>
            <a href='https://twitter.com/danish__an'>
              <Twitter className='hover:text-gray-400' />
            </a>
            <a href='https://linkedin.com/in/danishhansari'>
              <Linkedin className='hover:text-gray-400' />
            </a>
          </div>
          <InviteFriend />
        </div>
        <div className='text-gray-500 mt-2'>
          All rights are reserved &copy;{new Date().getFullYear()} Ansari Danish
        </div>
      </div>
    </div>
  );
};
