import React from "react";

interface ShowProps {
  when: boolean;
  fallback?: React.ReactNode | null;
  children: React.ReactNode;
}

function Show({ when, fallback, children }: ShowProps) {
  if (!when && !fallback) return null;

  if (!when && fallback) return fallback;

  return children;
}

export default Show;
