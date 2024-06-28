import { Toaster } from "@/components/ui/toaster";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Auth = () => {
  return (
    <>
      <Toaster />
      <div className='h-[75vh] flex items-center justify-center px-4 bg-foreground'>
        <Tabs defaultValue='login' className='w-[400px] bg-foreground'>
          <TabsList className='grid max-w-[400px] w-full grid-cols-2'>
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
    </>
  );
};
