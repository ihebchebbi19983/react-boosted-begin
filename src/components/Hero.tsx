import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-primary">
          Welcome to Your Modern React App
        </h1>
        <p className="text-xl text-secondary text-center mb-8 max-w-2xl mx-auto">
          Build beautiful, responsive web applications with React and Tailwind CSS.
          Start your journey today.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={() => console.log("Get Started clicked")}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};