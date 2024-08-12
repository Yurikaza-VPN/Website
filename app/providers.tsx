"use client";

import { SaasProvider } from "@saas-ui/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SaasProvider>{children}</SaasProvider>;
};
