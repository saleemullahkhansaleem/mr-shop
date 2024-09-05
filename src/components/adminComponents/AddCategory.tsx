"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { categorySchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";

export default function AddCategory() {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
      isSubCategory: false,
      parentCategory: "",
    },
  });

  const isSubCategory = form.watch("isSubCategory");

  const handleSubmit = (values: z.infer<typeof categorySchema>) => {
    console.log("Values: ", values);
  };
  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter category name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="isSubCategory"
          render={({ field }) => {
            return (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    onCheckedChange={field.onChange}
                    checked={field.value}
                  />
                </FormControl>
                <FormLabel className="mt-0">Is this a sub-category?</FormLabel>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {isSubCategory && <FormField
          control={form.control}
          name="parentCategory"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Parent Category</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select parent category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />}
        <div className="text-end">
          <Button type="submit">Save Category</Button>
        </div>
      </form>
    </Form>
  );
}
