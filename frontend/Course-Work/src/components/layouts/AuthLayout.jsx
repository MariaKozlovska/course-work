import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right Side - Placeholder (без зображення) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center">
        <div className="text-white text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Task Management System</h2>
          <p className="text-lg">Manage your tasks efficiently</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;