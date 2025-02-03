import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out successfully",
    });
    navigate("/auth/sign-in");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-sidebar transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex h-14 items-center border-b px-4">
            <Link to="/" className="font-semibold">
              Admin Panel
            </Link>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent"
            >
              Profile
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${sidebarOpen ? "pl-64" : "pl-0"}`}>
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center border-b bg-background px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="ml-auto flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile/edit">Edit Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-3.5rem)] p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;