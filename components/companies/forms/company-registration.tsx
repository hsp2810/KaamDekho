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
import { addCompanyFormSchema } from "@/lib/validators/company";
import { useTransition } from "react";
import { actionAddCompany } from "@/actions/recruiters/companies";

type AddCompanyFormValues = z.infer<typeof addCompanyFormSchema>;

const defaultValues: Partial<AddCompanyFormValues> = {
  name: "Microsoft",
  about: "",
  country: "",
  industry: "",
  website_url: "",
};

export default function CompanyRegistration() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<AddCompanyFormValues>({
    resolver: zodResolver(addCompanyFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(values: AddCompanyFormValues) {
    try {
      startTransition(() => {
        actionAddCompany(values).then((data) => {
          if (!data) throw new Error();
          form.reset();
          toast({
            title: "Company added successfully. Start postings jobs now...",
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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your company name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='about'
          render={({ field }) => (
            <FormItem>
              <FormLabel>About the company</FormLabel>
              <FormControl>
                <Textarea placeholder='Write about the company' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='country'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Country where the company is located/originated
              </FormLabel>
              <FormControl>
                <Input placeholder='Enter the country' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='industry'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Select the industry in which the company works. If the company
                dosen't work in any of the below industries, choose "Other"
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select industry' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='it' className=''>
                    Information Technology
                  </SelectItem>
                  <SelectItem value='healthcare' className=''>
                    Healthcare
                  </SelectItem>
                  <SelectItem value='construction' className=''>
                    Constuction
                  </SelectItem>
                  <SelectItem value='other' className=''>
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='website_url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your company URL</FormLabel>
              <FormControl>
                <Input placeholder='Enter your website URL' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isPending}>
          Add company
        </Button>
      </form>
    </Form>
  );
}
