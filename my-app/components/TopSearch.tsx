'use client';

import AnimatedSearch from './AnimatedSearch';

interface TopSearchProps {
    onSearch?: (query: string) => void;
}

export default function TopSearch({ onSearch }: TopSearchProps) {
    return (
        <div className="flex justify-center py-8">
            <AnimatedSearch placeholder="Search News & Articles..." onSearch={onSearch} />
        </div>
    );
}