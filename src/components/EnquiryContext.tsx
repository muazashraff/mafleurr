"use client";

import { createContext, useContext, useState, useMemo } from "react";

type EnquiryContextValue = {
  bouquetName: string | null;
  setBouquetName: (name: string | null) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [bouquetName, setBouquetName] = useState<string | null>(null);
  const value = useMemo(() => ({ bouquetName, setBouquetName }), [bouquetName]);

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return ctx;
}
