import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EmailProp {
  email: string;
  setEmail: (email: string) => void;
}

export const TextareaWithLabel: React.FC<EmailProp> = ({ email, setEmail }) => {
  return (
    <div className='grid w-full gap-1.5 mt-6 md:mt-12 mx-auto'>
      <Label htmlFor='message' className='text-muted-foreground mb-2'>
        Your Future Message
      </Label>
      <Textarea
        placeholder='Type your message here.'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='resize-none bg-transparent border focus:outline-1 text-background h-[40vh]'
        id='message'
      />
    </div>
  );
};
