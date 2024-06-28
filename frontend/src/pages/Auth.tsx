import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export const Auth = () => {
  return (
    <div className='h-[75vh] flex items-center justify-center px-4 bg-foreground'>
      <Tabs
        defaultValue='login'
        className='w-[400px] bg-foreground fixed top-36 md:top-52'
      >
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='signup'>Signup</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <Signin />
        </TabsContent>
        <TabsContent value='signup'>
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
};
