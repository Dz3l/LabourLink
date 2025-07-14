import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IdCard } from "lucide-react";

interface NationalIdLoginProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: (nationalId: string) => void;
}

const NationalIdLogin = ({ open, onOpenChange, onLogin }: NationalIdLoginProps) => {
  const [nationalId, setNationalId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow numbers
    if (value.length <= 8) {
      setNationalId(value);
    }
  };

  const handleLogin = async () => {
    if (nationalId.length === 8) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        onLogin(nationalId);
        setIsLoading(false);
        onOpenChange(false);
        setNationalId("");
      }, 1500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <IdCard className="h-5 w-5" />
            National ID Login
          </DialogTitle>
          <DialogDescription>
            Enter your 8-digit National ID to access your worker profile and find jobs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nationalId">National ID Number</Label>
            <Input
              id="nationalId"
              placeholder="12345678"
              value={nationalId}
              onChange={handleInputChange}
              maxLength={8}
              className="text-center text-lg tracking-widest"
            />
            <p className="text-sm text-muted-foreground">
              {nationalId.length}/8 digits entered
            </p>
          </div>
          
          <Button 
            onClick={handleLogin} 
            disabled={nationalId.length !== 8 || isLoading}
            className="w-full"
          >
            {isLoading ? "Verifying..." : "Login"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NationalIdLogin;