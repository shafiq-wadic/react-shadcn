import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export default function Profile() {
  const { toast } = useToast();
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
    location: "New York, USA"
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
          <p className="text-sm text-muted-foreground">Your profile information</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-medium">Name</h2>
            <p>{user.name}</p>
          </div>
          <div className="space-y-2">
            <h2 className="font-medium">Email</h2>
            <p>{user.email}</p>
          </div>
          <div className="space-y-2">
            <h2 className="font-medium">Bio</h2>
            <p>{user.bio}</p>
          </div>
          <div className="space-y-2">
            <h2 className="font-medium">Location</h2>
            <p>{user.location}</p>
          </div>
          <Button asChild className="w-full">
            <Link to="/profile/edit">Edit Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}