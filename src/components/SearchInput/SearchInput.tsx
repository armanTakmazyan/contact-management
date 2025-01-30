import type { FC } from 'react';
import clsx from 'clsx';
import { Search as SearchIcon } from '@icons/Search';
import type { SearchInputProps } from './types';

export const SearchInput: FC<SearchInputProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('relative w-full max-w-xs', className)}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
        <SearchIcon className="w-5 h-5" />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-4 text-sm border rounded-full bg-gray-800 text-white placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-blue-600 disabled:bg-gray-900 disabled:border-gray-800 disabled:text-gray-500"
        {...props}
      />
    </div>
  );
};
