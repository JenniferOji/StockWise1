import React from 'react';

// Simple layout for the former tabs route. We no longer render a bottom Tabs
// navigator so the Home/Explore tabs won't show. This renders child routes
// directly with no header or tab bar.
export default function TabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
