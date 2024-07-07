"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
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
import { toast } from "@/components/ui/use-toast";
import { addEducationFormSchema } from "@/lib/validators/education";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type AddEducationFormValues = z.infer<typeof addEducationFormSchema>;

const defaultValues: Partial<AddEducationFormValues> = {
  institute: "",
  course_type: "",
  gpa: 0,
  start_month: "",
  start_year: "",
  end_month: "",
  end_year: "",
  location: "",
  skills: [],
};

export default function ProfileEducationModalForm() {
  const [isStillStudying, setStillStudying] = useState<boolean>(true);

  const form = useForm<AddEducationFormValues>({
    resolver: zodResolver(addEducationFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: AddEducationFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleCheck = () => {
    setStillStudying((prev) => !prev);
  };

  return (
    <Form {...form}>
      <ScrollArea className='h-[77vh]'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mt-5'>
          {/* institute name */}
          <FormField
            control={form.control}
            name='institute'
            render={({ field }) => (
              <FormItem>
                <FormLabel>School/College/University/Other Insitute</FormLabel>
                <FormControl>
                  <Input placeholder='Ex. Harvard Business School' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Course Type */}
          <FormField
            control={form.control}
            name='course_type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a course type' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='diploma'>Diploma</SelectItem>
                    <SelectItem value='bachelors'>Bachelor's Degree</SelectItem>
                    <SelectItem value='masters'>Master's Degree</SelectItem>
                    <SelectItem value='certificate'>Certificate</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* emp type and location type */}
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder='Ex. Boston, U.S.A' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* start month and year */}
          <div className='grid grid-cols-2 gap-3'>
            <FormField
              control={form.control}
              name='start_month'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start month</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder='Please select'
                          className='tracking-normal'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='jan'>January</SelectItem>
                      <SelectItem value='feb'>February</SelectItem>
                      <SelectItem value='mar'>March</SelectItem>
                      <SelectItem value='apr'>April</SelectItem>
                      <SelectItem value='may'>May</SelectItem>
                      <SelectItem value='jun'>June</SelectItem>
                      <SelectItem value='jul'>July</SelectItem>
                      <SelectItem value='aug'>August</SelectItem>
                      <SelectItem value='sept'>September</SelectItem>
                      <SelectItem value='oct'>October</SelectItem>
                      <SelectItem value='nov'>November</SelectItem>
                      <SelectItem value='dec'>December</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='start_year'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start year</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a account type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='2024'>2024</SelectItem>
                      <SelectItem value='2023'>2023</SelectItem>
                      <SelectItem value='2022'>2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* end month and year */}
          <div className='grid grid-cols-2 gap-3'>
            <FormField
              control={form.control}
              name='end_month'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End month</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isStillStudying}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder='Please select'
                          className='tracking-normal'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='jan'>January</SelectItem>
                      <SelectItem value='feb'>February</SelectItem>
                      <SelectItem value='mar'>March</SelectItem>
                      <SelectItem value='apr'>April</SelectItem>
                      <SelectItem value='may'>May</SelectItem>
                      <SelectItem value='jun'>June</SelectItem>
                      <SelectItem value='jul'>July</SelectItem>
                      <SelectItem value='aug'>August</SelectItem>
                      <SelectItem value='sept'>September</SelectItem>
                      <SelectItem value='oct'>October</SelectItem>
                      <SelectItem value='nov'>November</SelectItem>
                      <SelectItem value='dec'>December</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='end_year'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End year</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isStillStudying}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a account type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='2024'>2024</SelectItem>
                      <SelectItem value='2023'>2023</SelectItem>
                      <SelectItem value='2022'>2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex items-center space-x-2'>
            <Checkbox
              id='terms'
              onCheckedChange={handleCheck}
              checked={isStillStudying}
            />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none
            peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              I still study here
            </label>
          </div>

          <Button type='submit'>
            <Plus className='h-4 w-4' />
            Add Education
          </Button>
        </form>
      </ScrollArea>
    </Form>
  );
}
