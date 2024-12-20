import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('saas');
  const navigate = useNavigate(); // Initialize navigate

  const handleGitHubSignIn = () => {
    // Perform authentication logic here
    // If authentication is successful, navigate to the dashboard
    navigate('/dashboard'); // Replace '/dashboard' with your actual dashboard route
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Section with Stats */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white relative">
        <div className="relative">
          {/* Main Card */}
          <div
            className="bg-white shadow-lg rounded-lg px-6 py-4 mb-4"
            style={{ borderRadius: '16px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/Subtract.svg" alt="CodeAnt Icon" className="w-6 h-6" />
              <h2 className="text-lg font-semibold text-gray-800">AI to Detect & Autofix Bad Code</h2>
            </div>
            <div className="w-full relative border-dark-color-shade-3 border-t-[1px] border-solid box-border h-px top-[-10px]" />
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-600">Language Support</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600">Developers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">100K+</p>
                <p className="text-sm text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>

          {/* Secondary Card */}
          <div
            className="bg-white shadow-lg rounded-lg px-8 py-4 absolute bottom-[-55px] right-0"
            style={{
              transform: 'translate(20%, 0%)',
              borderRadius: '16px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="items-center justify-stretch grid grid-cols-2 gap-6">
              <div>
                <p className="text-xl font-bold text-gray-900">500K+</p>
                <p className="text-sm text-gray-600">Issues Fixed</p>
              </div>
              <div className="text-right">
                <p className="text-blue-500 text-sm font-medium">↑ 14%</p>
                <p className="text-xs text-gray-600">This week</p>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/Subtract.png" alt="Left Bottom Logo" className="absolute bottom-0 left-0 w-48 opacity-75" />
      </div>

      {/* Right Section with Login */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-2">
              <img src="/images/Subtract.png" alt="CodeAnt AI Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">CodeAnt AI</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('saas')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'saas' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab('self-hosted')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                activeTab === 'self-hosted' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'
              }`}
            >
              Self Hosted
            </button>
          </div>

          {/* Login Options */}
          {activeTab === 'saas' && (
            <div className="space-y-3">
              <button
                onClick={handleGitHubSignIn} // Attach the navigation handler
                className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-colors"
              >
                <img src="/images/GitHub Icon.png" alt="GitHub Icon" className="w-5 h-5" />
                Sign in with GitHub
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-colors">
                <img
                  src="/images/Bitbucket Icon.png"
                  alt="Bitbucket Icon"
                  className="w-5 h-5"
                />
                Sign in with Bitbucket
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-colors">
                <img
                  src="/images/Azure DevOps Icon.png"
                  alt="Azure DevOps Icon"
                  className="w-5 h-5"
                />
                Sign in with Azure DevOps
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-colors">
                <img
                  src="/images/GitLab Icon.png"
                  alt="GitLab Icon"
                  className="w-5 h-5"
                />
                Sign in with GitLab
              </button>
            </div>
            
          )}
          {activeTab === 'self-hosted' && (
            <div className="space-y-3">
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-colors">
                <img
                  src="/images/GitLab Icon.png"
                  alt="GitLab Icon"
                  className="w-5 h-5"
                />
                Sign in with GitLab
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-colors">
                <img
                  src="/images/SSO Icon.svg"
                  alt="GitLab Icon"
                  className="w-5 h-5"
                />
                Sign in with SSO
              </button>
            </div>
            
          )}

          {/* Privacy Policy */}
          <div className="text-center mt-6 text-sm text-gray-600">
            By signing up you agree to the{' '}
            <a href="#" className="text-gray-900 font-medium">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
