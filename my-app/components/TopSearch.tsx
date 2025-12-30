'use client';

import AnimatedSearch from './AnimatedSearch';

export default function TopSearch() {
    return (
        <div className="flex justify-center py-8">
            <div className="w-full max-w-md">
                <AnimatedSearch placeholder="Search News & Articles..." />
            </div>
        </div>
    );
}