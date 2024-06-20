const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-foreground w-full pt-16 md:pt-28">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center">
        Write a Letter to your Future Self
      </h1>
      <p className="text-md text-muted-foreground text-center px-4 mt-2">
        <span className="text-background">Write. </span>
        Pick a receiving date.
        <span className="text-background"> Send. </span>
        Verify Thats It
      </p>
    </div>
  );
};

export default Hero;
