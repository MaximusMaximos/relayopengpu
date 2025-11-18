"use client";

import { useEffect, useState } from "react";

export default function SafeInput(props: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid SSR mismatch

  return <input {...props} />;
}
