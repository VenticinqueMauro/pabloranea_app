'use client';

import { useSyncExternalStore } from 'react';

const localToday = () => new Date().toLocaleDateString('en-CA');
const noopSubscribe = () => () => {};

// Visitor's local date (YYYY-MM-DD). The server render and hydration use
// `buildDate` (when the page was prerendered) so the HTML always matches.
export function useToday(buildDate: string): string {
    return useSyncExternalStore(noopSubscribe, localToday, () => buildDate);
}
