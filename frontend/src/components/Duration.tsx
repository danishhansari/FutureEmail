import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface DurationProp {
  date: Date;
  setDate: (date: Date) => void;
  selectDuration: string;
  setSelectDuration: (selectDuration: string) => void;
}

export const Duration: React.FC<DurationProp> = ({
  date,
  setDate,
  selectDuration,
  setSelectDuration,
}) => {
  const handleDurationChange = (value: string) => {
    setSelectDuration(value);
    const days = parseInt(value);
    const futureDate = addDays(new Date(), days);
    setDate(futureDate);
  };

  return (
    <>
      <div className='py-4'>
        <h1 className='text-background text-lg font-semibold my-2'>
          Deliver in
        </h1>
        <RadioGroup
          className='text-background flex gap-2 items-center flex-wrap my-2'
          value={selectDuration}
          onValueChange={handleDurationChange}
        >
          <div className='flex items-center space-x-2 text-background'>
            <RadioGroupItem value='1' id='r0' className='text-background' />
            <Label htmlFor='r1'>Tomorrow</Label>
          </div>
          <div className='flex items-center space-x-2 text-background'>
            <RadioGroupItem value='7' id='r1' className='text-background' />
            <Label htmlFor='r1'>7 Days</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='21' id='r2' className='text-background' />
            <Label htmlFor='r2'>21 Days</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='30' id='r3' className='text-background' />
            <Label htmlFor='r3'>1 Month</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='90' id='r4' className='text-background' />
            <Label htmlFor='r4'>3 Months</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='180' id='r5' className='text-background' />
            <Label htmlFor='r5'>6 Months</Label>
          </div>
        </RadioGroup>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              className='bg-foreground text-background'
              mode='single'
              selected={date}
              // @ts-ignore
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
