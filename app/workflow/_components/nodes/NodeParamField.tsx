"use client";
import React from "react";
import { TaskParam, TaskParamType } from "@/types/task";
import StringParam from "./param/StringParam";

const NodeParamField = ({ param }: { param: TaskParam }) => {
  switch (param.type) {
    case TaskParamType.STRING:
      return <StringParam />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implememted</p>
        </div>
      );
  }
};

export default NodeParamField;
