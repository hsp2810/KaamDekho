"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import ProfileEducationModalForm from "./profile-education-modal-form";

export default function ProfileEducationModal() {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  return (
    <Dialog>
      <DialogTrigger>
        <div className='cursor-pointer -mb-3 w-fit m-auto bg-primary text-white flex items-center rounded-lg text-card-foreground shadow-sm px-8 py-2 '>
          <Plus className='h-4 w-4 mr-1' />
          Add Education
        </div>
      </DialogTrigger>
      <DialogContent ref={dialogRef}>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Add Education</DialogTitle>
          <DialogDescription>
            <ProfileEducationModalForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
