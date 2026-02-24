import { useState } from 'react';
import { Button } from '../ui/button';
import { useAuth } from '../../../contexts/AuthContext';
import { LogIn, Loader2 } from 'lucide-react';

interface SignInButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export function SignInButton({ variant = 'default', size = 'default', className = '' }: SignInButtonProps) {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Sign-in error:', error);
      
      // User-friendly error messages
      if (error.code === 'auth/popup-blocked') {
        setError('Please allow popups to sign in');
      } else if (error.code === 'auth/popup-closed-by-user') {
        setError('Sign-in cancelled');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Network error, please try again');
      } else {
        setError('Authentication failed, please try again');
      }
      
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleSignIn}
        disabled={isLoading}
        variant={variant}
        size={size}
        className={className}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            <LogIn className="w-4 h-4 mr-2" />
            Sign in with Google
          </>
        )}
      </Button>
      
      {error && (
        <div className="absolute top-full mt-2 right-0 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg z-50">
          {error}
        </div>
      )}
    </div>
  );
}
