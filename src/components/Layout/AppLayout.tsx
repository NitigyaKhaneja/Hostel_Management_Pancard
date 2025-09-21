import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User, LogOut } from "lucide-react";

interface AppLayoutProps {
  children: ReactNode;
  userRole?: "student" | "admin";
  userName?: string;
}

const AppLayout = ({ children, userRole = "student", userName = "Student" }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-vit-blue to-vit-orange" />
            <div>
              <h1 className="text-xl font-bold text-foreground">VIT Hostel</h1>
              <p className="text-sm text-muted-foreground">Management System</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3 border-l border-border pl-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{userName}</p>
                <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;