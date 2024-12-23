import { SignupForm } from "@/components/SignupForm";
import { Benefits } from "@/components/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Welcome to Cloud4DB
            </h1>
            <p className="text-secondary-light text-lg md:text-xl">
              Your all-in-one project management solution
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-secondary">
                  Create your account
                </h2>
                <SignupForm />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-secondary">
                  Why choose Cloud4DB?
                </h2>
                <Benefits />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;