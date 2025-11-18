import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

type RememberForgotProps = {
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
  forgotPassword: boolean;
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const RememberForgot: React.FC<RememberForgotProps> = ({
    remember,
    setRemember,
    setForgotPassword,
}) => {
    return (
        <div className="flex items-center justify-between gap-4 w-full mb-4">
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="remember-me"
                    checked={remember}
                    onCheckedChange={(checked) => setRemember(checked as boolean)}
                />
                <label htmlFor="remember-me" className="text-sm !input-label">
          Remember Me
                </label>
            </div>

            <button
                className="text-sm text-purple-500 font-medium"
                onClick={() => setForgotPassword(true)}
            >
        Forgot Password?
            </button>
        </div>
    );
};

export default RememberForgot;
