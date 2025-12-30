import React from 'react';

interface SocialButtonProps {
  social: string;
  theme: string;
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ social, theme, children }) => {
  return (
    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold">
      {children}
    </button>
  );
};

export const SocialLoginButtons = () => {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" theme="brand">
                Sign in with Google
            </SocialButton>
        </div>
    );
};