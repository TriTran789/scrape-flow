"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
}

const DeleteWorkflowDialog = ({ open, setOpen, workflowName }: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          If you delete this workflow, you will not be able to recover it.
          <div className="flex flex-col py-4 gap-2">
            <p>
              If you are sure, enter <b>{workflowName}</b> to confirm:
            </p>
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkflowDialog;
