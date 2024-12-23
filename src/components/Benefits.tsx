import { CheckCircle } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    "Advanced Project Tracking",
    "Real-time Collaboration",
    "Custom Workflows",
    "Detailed Analytics",
  ];

  return (
    <div className="mt-8 space-y-4 animate-fadeIn">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 text-secondary-light"
        >
          <CheckCircle className="w-5 h-5 text-primary" />
          <span>{benefit}</span>
        </div>
      ))}
    </div>
  );
};