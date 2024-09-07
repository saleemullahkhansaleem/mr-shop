"use client";

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
} from "../../ui/form";
import { categorySchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../ui/button";
import { api } from "@/helper/http";
import { useRouter } from "next/navigation";
import { useToast } from "../../ui/use-toast";
import { useEffect, useState } from "react";
import { Spinner } from "../../component";

export default function AddUpdateCategoryForm({
  categoryData,
  toggleDialog,
}: {
  categoryData?: z.infer<typeof categorySchema>;
  toggleDialog: () => void;
}) {
  const { toast } = useToast();
  type Category = {
    _id: string;
    name: string;
    id: string;
  };

  const [parentCat, setParentCat] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: categoryData?.name || "",
      iconName: categoryData?.iconName || "",
      description: categoryData?.description || "",
      isSubCategory: categoryData?.isSubCategory || false,
      parentCategory: categoryData?.parentCategory || "",
    },
  });
  const isSubCategory = form.watch("isSubCategory");

  useEffect(() => {
    fetchParentCat();
  }, []);

  const fetchParentCat = async () => {
    try {
      let response = await api.get("/api/category/parent");
      if (response.success) {
        setParentCat(response?.data);
      } else {
        console.log("Failed to get parent categories");
      }
    } catch (error) {
      console.log("Error in getting parent categories: ", error);
    }
  };

  const handleSubmit = async (values: z.infer<typeof categorySchema>) => {
    const { isSubCategory, parentCategory, ...rest } = values;
    const data = isSubCategory ? values : { ...rest, isSubCategory: false };
    if (categoryData) {
      setLoading(true);
      try {
        let response = await api.put(
          `/api/category/${categoryData?._id}`,
          data
        );
        if (response.success) {
          router.replace("/admin/categories/");
          toast({
            description: "Category updated successfully",
          });
          toggleDialog();
        } else {
          toast({
            title: "Error",
            description: "Failed to update category",
            variant: "destructive",
          });
          console.log("Failed to update category");
        }
        setLoading(false);
      } catch (error) {
        console.log("Error in updating categories: ", error);
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        let response = await api.post("/api/category", data);
        if (response.success) {
          router.replace("/admin/categories/");
          toast({
            description: "Category created successfully",
          });
          toggleDialog();
        } else {
          toast({
            title: "Error",
            description: "Category creation failed",
            variant: "destructive",
          });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast({
          title: "Error!",
          description: "Some thing went wrong",
          variant: "destructive",
        });
      }
    }
  };
  return loading ? (
    <div className="flex justify-center w-full">
      <Spinner />
    </div>
  ) : (
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
          name="iconName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Icon Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter lucide icon name"
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
        {isSubCategory && (
          <FormField
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
                      {parentCat.length === 0 ? (
                        <></>
                      ) : (
                        parentCat?.map((cat, i) => (
                          <SelectItem key={i} value={cat._id}>
                            {cat.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}
        <div className="text-end">
          <Button type="submit">Save Category</Button>
        </div>
      </form>
    </Form>
  );
}
