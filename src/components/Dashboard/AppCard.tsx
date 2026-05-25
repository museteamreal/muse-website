import React from 'react';

interface AppCardProps {
  iconBgColor: string;
  icon: React.ReactNode;
  iconLabel: string;
  title: string;
  description: string;
  editedAt: string;
}

export default function AppCard({ iconBgColor, icon, iconLabel, title, description, editedAt }: AppCardProps) {
  return (
    <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors cursor-pointer w-[300px] shrink-0">
      <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white shrink-0 ${iconBgColor}`}>
        {icon}
        <span className="text-[10px] font-medium leading-tight text-center px-1 mt-1">{iconLabel}</span>
      </div>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <h3 className="text-[15px] font-semibold text-gray-900 truncate">{title}</h3>
        <p className="text-[13px] text-gray-500 leading-tight mt-0.5 line-clamp-2">
          {description}
        </p>
        <span className="text-[11px] text-gray-400 mt-2">
          Edited {editedAt}
        </span>
      </div>
    </div>
  );
}
