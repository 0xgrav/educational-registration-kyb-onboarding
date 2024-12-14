import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function Card({ title, icon: Icon, children }: CardProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-sm">
          <Icon className="w-7 h-7 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border-2 border-indigo-50">
        {children}
      </div>
    </div>
  );
}