import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { Schedule } from "./types";

const ScheduleTableContext = createContext<{ schedules: Schedule[] }>({ schedules: [] });

export const useScheduleTableContext = () => {
  const context = useContext(ScheduleTableContext);
  if (context === undefined) {
    throw new Error("useSchedule must be used within a ScheduleTableProvider");
  }
  return context;
};

export const ScheduleTableProvider = ({
  schedules,
  children,
}: PropsWithChildren<{ schedules: Schedule[] }>) => {
  const contextValue = useMemo(() => ({ schedules }), [schedules]);

  return (
    <ScheduleTableContext.Provider value={contextValue}>{children}</ScheduleTableContext.Provider>
  );
};
