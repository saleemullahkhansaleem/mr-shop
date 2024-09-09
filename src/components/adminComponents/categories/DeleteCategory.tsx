"use client";

import { Spinner, SpinnerMini } from "@/components/component";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { api } from "@/helper/http";
import { categorySchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function DeleteCategory({
  categoryData,
}: {
  categoryData?: z.infer<typeof categorySchema>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const deleteSchema = z
    .object({
      name: z.string().min(1, { message: "Category name is required." }),
    })
    .refine(
      (data) => {
        return data.name === categoryData?.name;
      },
      {
        message: "Category name do not match",
        path: ["name"],
      }
    );

  const form = useForm<z.infer<typeof deleteSchema>>({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof deleteSchema>) => {
    setLoading(true);
    try {
      let response = await api.delete(`/api/category/${categoryData?._id}`);
      if (response.success) {
        router.refresh();
        toast({
          description: "Category deleted successfully",
        });
        setOpenDialog(false);
      } else {
        toast({
          title: "Error",
          description: "Failed to delete categories",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while deleting category",
        variant: "destructive",
      });
      console.error("Error deleting category: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={setOpenDialog} open={openDialog}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
          className="w-full justify-start"
        >
          <Trash className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Delete Category</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Type{" "}
                      <span className="font-bold text-foreground italic">
                        {categoryData?.name}
                      </span>{" "}
                      below to confirm
                    </FormLabel>
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
            <div className="text-end">
              <Button
                disabled={loading}
                type="submit"
                size="sm"
                variant="destructive"
                className="space-x-2"
              >
                {loading ? (
                  <>
                    <SpinnerMini /> <span>Deleting...</span>
                  </>
                ) : (
                  "Delete"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
