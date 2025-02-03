import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { toast } = useToast();
  const navigate = useNavigate();
  // Dummy user data
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
    location: "New York, USA"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy update logic
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully"
    });
    navigate("/profile");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Edit Profile</h1>
          <p className="text-sm text-muted-foreground">Update your profile information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4">
            <Button type="submit" className="flex-1">Save Changes</Button>
            <Button type="button" variant="outline" className="flex-1" onClick={() => navigate("/profile")}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}