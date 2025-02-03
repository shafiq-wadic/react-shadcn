import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to Our App</h1>
          <p className="text-muted-foreground">Get started by signing in or creating an account</p>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link to="/auth/sign-in">Sign In</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/auth/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}