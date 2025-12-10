import React from 'react';

const LoadingSkeleton = ({ type = 'card' }) => {
    if (type === 'card') {
        return (
            <div className="card overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300 dark:bg-gray-700" />
                <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                    <div className="space-y-2">
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded" />
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
                    </div>
                    <div className="flex gap-2">
                        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1" />
                        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-20" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-pulse">
            <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-lg" />
        </div>
    );
};

export default LoadingSkeleton;
