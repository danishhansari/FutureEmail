import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5 px-8 md:px-4 max-w-4xl mt-6 md:mt-12 mx-auto">
      <Label htmlFor="message" className="text-muted-foreground mb-2">
        Your Future Message
      </Label>
      <Textarea
        placeholder="Type your message here."
        value={"Dear FutureMe,"}
        className="resize-none bg-transparent border focus:outline-1 text-background h-[40vh]"
        id="message"
      />
    </div>
  );
}
