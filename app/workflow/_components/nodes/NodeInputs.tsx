import React from "react";

const NodeInputs = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
};

export const NodeInput = ({ input }: { input: any }) => {
  return (
    <div className="flex justify-start relative p-3 bg-secondary w-full">
      <pre>{JSON.stringify(input, null, 4)}</pre>
    </div>
  );
};

export default NodeInputs;
