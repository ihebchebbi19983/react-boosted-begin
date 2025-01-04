import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Modern Stack",
    description: "Built with React, TypeScript, and Tailwind CSS",
  },
  {
    title: "Responsive Design",
    description: "Looks great on all devices, from mobile to desktop",
  },
  {
    title: "Performance",
    description: "Optimized for speed and efficiency",
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};