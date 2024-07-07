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
import { addExpFormSchema } from "@/lib/validators/experience";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type AddExperienceFormValues = z.infer<typeof addExpFormSchema>;

const defaultValues: Partial<AddExperienceFormValues> = {
  position: "",
  employment_type: "",
  company: "",
  start_month: "",
  start_year: "",
  end_month: "",
  end_year: "",
  location: "",
  location_type: "",
  description: "",
  skills: [],
};

export default function ProfileExperienceModalForm() {
  const [isStillWorking, setStillWorking] = useState<boolean>(true);

  const form = useForm<AddExperienceFormValues>({
    resolver: zodResolver(addExpFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: AddExperienceFormValues) {
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
    setStillWorking((prev) => !prev);
  };

  return (
    <Form {...form}>
      <ScrollArea className='h-[80vh]'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mt-5'>
          {/* position */}
          <FormField
            control={form.control}
            name='position'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder='Ex. Retail Sales Manager' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company name */}
          <FormField
            control={form.control}
            name='company'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
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
                    <SelectItem value='microsoft'>Microsoft</SelectItem>
                    <SelectItem value='google'>Google</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* emp type and location type */}
          <div className='grid grid-cols-2 gap-3'>
            <FormField
              control={form.control}
              name='employment_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employment type</FormLabel>
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
                      <SelectItem value='full_time'>Full-time</SelectItem>
                      <SelectItem value='part_time'>Part-time</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='location_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Type</FormLabel>
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
                      <SelectItem value='remote'>Remote</SelectItem>
                      <SelectItem value='onsite'>On-site</SelectItem>
                      <SelectItem value='hybrid'>Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                    disabled={isStillWorking}
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
                    disabled={isStillWorking}
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
              checked={isStillWorking}
            />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none
            peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              I still work here
            </label>
          </div>

          <Button type='submit'>
            <Plus className='h-4 w-4' />
            Add experience
          </Button>
        </form>
      </ScrollArea>
    </Form>
  );
}
