"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { actionAddCompany } from "@/actions/recruiters/companies";
import { postJobFormSchema } from "@/lib/validators/job";
import { actionAddJob } from "@/actions/recruiters/job";
import { User } from "@prisma/client";
import { UserWithCompany } from "@/types";

type PostJobFormValues = z.infer<typeof postJobFormSchema>;

export default function PostJobForm({
  loggedInUser,
}: {
  loggedInUser: UserWithCompany;
}) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<PostJobFormValues>({
    resolver: zodResolver(postJobFormSchema),
    defaultValues: {
      title: "Software Developer",
      company: loggedInUser.company ? loggedInUser.company.name : "",
      recruiter: "Jow Blow",
      job_type: "FULL_TIME",
      job_location_type: "REMOTE",
      salary_range: "70000-80000",
      salary_type: "ANNUALLY",
      location: "Bengaluru, India",
      description: [
        {
          value:
            "Collaborate with fellow developers to translate product concepts into tangible releases.",
        },
      ],
      skills: [{ value: "TypeScript" }],
    },
    mode: "onChange",
  });

  const { fields: descriptionFields, append: descriptionAppend } =
    useFieldArray({
      name: "description",
      control: form.control,
    });

  const { fields: skillsFields, append: skillsAppend } = useFieldArray({
    name: "skills",
    control: form.control,
  });

  async function onSubmit(values: PostJobFormValues) {
    try {
      startTransition(() => {
        actionAddJob(values).then((data) => {
          if (!data) throw new Error();
          form.reset();
          toast({
            title: "Job added successfully.",
          });
        });
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 md:space-y-6'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job title</FormLabel>
              <FormControl>
                <Input placeholder='Software Developer' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder='Microsoft' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='recruiter'
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recruiter</FormLabel>
              <FormControl>
                <Input placeholder='Joe Blow' {...field} />
              </FormControl>
              <FormDescription className='text-destructive font-semibold'>
                Recruiter information will be automatically fetched!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='job_type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select job type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='CONTRACT'>Contract</SelectItem>
                  <SelectItem value='PART_TIME'>Part-time</SelectItem>
                  <SelectItem value='FULL_TIME'>Full-time</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='job_location_type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job location type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select job location type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='REMOTE'>Remote</SelectItem>
                  <SelectItem value='ONSITE'>On-site</SelectItem>
                  <SelectItem value='HYBRID'>Hybrid</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='salary_range'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary range (USD$)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select salary range' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='1'>60000-70000</SelectItem>
                  <SelectItem value='2'>70000-80000</SelectItem>
                  <SelectItem value='3'>Above 80000</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='salary_type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='HOURLY'>Hourly</SelectItem>
                  <SelectItem value='ANNUALLY'>Annually</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='location'
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder='Paris, France' {...field} />
              </FormControl>
              <FormDescription className='text-destructive font-semibold'>
                Location will be fetched from the company information.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {descriptionFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`description.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Description
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add points one by one.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => descriptionAppend({ value: "" })}
          >
            Add more
          </Button>
        </div>

        <div>
          {skillsFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`skills.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Skills
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add skills one by one.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} className='w-fit inline' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => skillsAppend({ value: "" })}
          >
            Add more
          </Button>
        </div>

        <Button type='submit' disabled={isPending}>
          Post job
        </Button>
      </form>
    </Form>
  );
}
