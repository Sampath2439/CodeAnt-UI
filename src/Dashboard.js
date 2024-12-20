// App.jsx
import React, { useState } from 'react';
import { 
  Search, 
  RefreshCw, 
  Plus, 
  Home, 
  Shield, 
  FileCode, 
  HelpCircle, 
  Settings, 
  Phone, 
  LogOut, 
  X, 
  Menu,
  ChevronDown,
  File
} from 'lucide-react';

// Repository data type
const repositories = [
  {
    name: 'design-system',
    language: 'React',
    size: '7320 KB',
    visibility: 'Public',
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: '5871 KB',
    visibility: 'Private',
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    language: 'Python',
    size: '4521 KB',
    visibility: 'Private',
    updatedAt: '5 days ago'
  },
  {
    name: 'mobile-app',
    language: 'Swift',
    size: '3096 KB',
    visibility: 'Public',
    updatedAt: '3 days ago'
  },
  {
    name: 'e-commerce-platform',
    language: 'Java',
    size: '6210 KB',
    visibility: 'Private',
    updatedAt: '6 days ago'
  },
  {
    name: 'blog-website',
    language: 'HTML/CSS',
    size: '1876 KB',
    visibility: 'Public',
    updatedAt: '4 days ago'
  },
  {
    name: 'social-network',
    language: 'PHP',
    size: '5432 KB',
    visibility: 'Private',
    updatedAt: '7 days ago'
  }
];

// Navigation items
const navigationItems = [
  { icon: Home, label: 'Repositories', active: true },
  { icon: FileCode, label: 'AI Code Review' },
  { icon: Shield, label: 'Cloud Security' },
  { icon: HelpCircle, label: 'How to Use' },
  { icon: Settings, label: 'Settings' }
];

const bottomNavItems = [
  { icon: Phone, label: 'Support' },
  { icon: LogOut, label: 'Logout' }
];

// Repository Card Component
const RepositoryCard = ({ repo }) => (
  <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
    <div className="space-y-1">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${
          repo.visibility === 'Public' 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-gray-100 text-gray-700'
        }`}>
          {repo.visibility}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          {repo.language}
        </div>
        <div className="flex items-center gap-1">
          <File className="w-4 h-4" />
          {repo.size}
        </div>
        <span>Updated {repo.updatedAt}</span>
      </div>
    </div>
  </div>
);

// Navigation Item Component
const NavItem = ({ icon: Icon, label, active }) => {
  const baseClasses = "flex items-center gap-3 p-3 rounded-lg transition-colors";
  const activeClasses = active 
    ? "text-white bg-blue-600" 
    : "text-gray-700 hover:bg-gray-100";
  
  return (
    <a href="#" className={`${baseClasses} ${activeClasses}`}>
      <Icon className="w-5 h-5" />
      {label}
    </a>
  );
};

// Mobile Navigation Component
const MobileNav = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 bg-white z-50 ${isOpen ? 'block' : 'hidden'}`}>
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img src="/images/Subtract.svg" alt="CodeAnt AI" className="rounded-lg" />
          </div>
          <span className="text-xl font-semibold">CodeAnt AI</span>
        </div>
        <button onClick={onClose} className="p-2">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <button className="w-full p-3 text-left border rounded-lg flex items-center justify-between">
            <span>UtkarshDhairyaPanwar</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>

      <div className="p-4 border-t bg-white">
        <div className="space-y-2">
          {bottomNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden flex justify-between items-center p-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img src="/images/Subtract.svg" alt="logo" className="rounded-lg" />
          </div>
          <span className="text-xl font-semibold">CodeAnt AI</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 w-64 bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img src="/images/Subtract.svg" alt="CodeAnt AI" className="rounded-lg" />
            </div>
            <span className="text-lg font-semibold">CodeAnt AI</span>
          </div>
        </div>

        <div className="p-2 m-2">
          <button className="w-full p-2 text-left border rounded-lg flex items-center justify-between">
            <span>UtkarshDhairyaPanwar</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-2 space-y-1">
          {navigationItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-2 border-t">
          {bottomNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
              <p className="text-sm text-gray-600">33 total repositories</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                <RefreshCw className="w-4 h-4" />
                Refresh All
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add Repository
              </button>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Repositories"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-4">
            {repositories
              .filter(repo => 
                repo.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;