"use client";

import { createContext, useContext, useState } from "react";

interface FilterContextType {
  isFilterOpen: boolean;
  toggleFilterOpen: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext needs to be used in scope of FilterContextProvider"
    );
  }
  return context;
};

export function FilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterOpen = () => setIsFilterOpen((prevState) => !prevState);

  return (
    <FilterContext.Provider value={{ isFilterOpen, toggleFilterOpen }}>
      {children}
    </FilterContext.Provider>
  );
}
