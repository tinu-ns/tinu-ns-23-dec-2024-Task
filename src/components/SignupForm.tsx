import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    toast.success("Account created successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md animate-fadeIn">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Create password"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Confirm password"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover transition-colors duration-300"
      >
        Create Account
      </Button>
    </form>
  );
};