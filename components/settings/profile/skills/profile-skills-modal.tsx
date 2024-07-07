"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfileSkillsModalForm from "./profile-skills-modal-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function ProfileSkillsModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className='bg-primary text-white rounded-lg text-card-foreground shadow-sm px-2 origin-center py-2'>
          <Plus className='h-4 w-4' />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Add Skills</DialogTitle>
          <DialogDescription>
            <ProfileSkillsModalForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
