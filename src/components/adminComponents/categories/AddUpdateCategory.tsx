"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddUpdateCategoryForm from "./AddUpdateCategoryForm";
import { useState } from "react";
import { z } from "zod";
import { categorySchema } from "@/schema";
import { Edit, Plus } from "lucide-react";

export default function AddUpdateCategory({
  categoryData,
}: {
  categoryData?: z.infer<typeof categorySchema>;
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const toggleDialog = () => setOpenDialog(false);
  return (
    <Dialog onOpenChange={setOpenDialog} open={openDialog}>
      <DialogTrigger asChild>
        {categoryData ? (
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <Button
            className="fixed bottom-4 right-4 md:right-8"
            size="icon"
            variant="outline"
          >
            <Plus />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md overflow-auto max-h-screen">
        <DialogHeader>
          <DialogTitle>
            {categoryData ? "Update Category" : "Add New Category"}
          </DialogTitle>
          <DialogDescription>
            Make changes to Update category.
          </DialogDescription>
        </DialogHeader>
        <AddUpdateCategoryForm
          toggleDialog={toggleDialog}
          {...(categoryData && { categoryData })}
        />
      </DialogContent>
    </Dialog>
  );
}
