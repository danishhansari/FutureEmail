import { useState } from "react";
import { Duration } from "./Duration";
import { TextareaWithLabel } from "./TextareaWithLabel";

export const Hero: React.FC = () => {
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  const [email, setEmail] = useState("Dear FutureMe,\n \n");
  const [date, setDate] = useState<Date>(tomorrowDate);
  const [selectDuration, setSelectDuration] = useState<string>("1");

  return (
    <div className='bg-foreground w-full pt-12 md:pt-20'>
      <div className=' max-w-4xl mx-auto px-4 border-b pb-4 border-slate-700'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center'>
          Write a Letter to your Future Self
        </h1>
        <p className='text-md text-muted-foreground text-center px-4 mt-2'>
          <span className='text-background font-medium'>Write. </span>
          Pick a receiving date.
          <span className='text-background font-medium'> Send. </span>
          Verify Thats It
        </p>
        <TextareaWithLabel email={email} setEmail={setEmail} />
        <Duration
          date={date}
          setDate={setDate}
          selectDuration={selectDuration}
          setSelectDuration={setSelectDuration}
        />
      </div>
    </div>
  );
};
