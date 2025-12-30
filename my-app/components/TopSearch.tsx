'use client';

import AnimatedSearch from './AnimatedSearch';

export default function TopSearch() {
    return (
        <div className="flex justify-center py-8">
            <div className="w-full max-w-md">
                <div className="rounded-lg shadow-md overflow-hidden" style={{
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
                }}>
                    <div className="p-6 bg-white">
                        <AnimatedSearch placeholder="Search News & Articles..." />
                    </div>
                </div>
            </div>
        </div>
    );
}