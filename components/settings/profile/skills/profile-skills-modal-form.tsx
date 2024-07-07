"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { addSkillsFormSchema } from "@/lib/validators/skills";
import { Plus } from "lucide-react";

type AddSkillsFormValues = z.infer<typeof addSkillsFormSchema>;

const defaultValues: Partial<AddSkillsFormValues> = {
  skill: "",
};

export default function ProfileSkillsModalForm() {
  const form = useForm<AddSkillsFormValues>({
    resolver: zodResolver(addSkillsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: AddSkillsFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mt-5'>
        {/* institute name */}
        <FormField
          control={form.control}
          name='skill'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skill</FormLabel>
              <FormControl>
                <Input placeholder='Ex. Project Management' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>
          <Plus className='h-4 w-4' />
          Add Skill
        </Button>
      </form>
    </Form>
  );
}
