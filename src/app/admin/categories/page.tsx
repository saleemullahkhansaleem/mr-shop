import { Fragment } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AddUpdateCategory,
  DeleteCategory,
  SearchCategories,
} from "@/components/adminComponents";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { categorySchema } from "@/schema";
import { IconLucide } from "@/components/component";
import { IconName } from "@/components/component/IconLucide";
import { api } from "@/helper/http";

async function fetchCategories() {
  try {
    const response = await api.get("/api/category");
    if (response?.success) {
      return response.data;
    } else {
      console.log("Failed to get categories");
      return [];
    }
  } catch (error) {
    console.log("Error in getting categories: ", error);
    return [];
  }
}

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const search = searchParams.search || "";

  interface Category {
    _id: number;
    name: string;
    iconName: IconName;
    description: string;
    subCategories?: Category[];
  }

  const categories = await fetchCategories();

  const filteredCategories = categories?.filter(
    (category: Category) =>
      category.name.toLowerCase().includes(search.toLowerCase()) ||
      category.subCategories?.some((subCat: Category) =>
        subCat.name.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <main className="container grid gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <SearchCategories searchParams={searchParams} />
        <AddUpdateCategory
        // fetch={fetchCategories}
        />
      </div>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category: Category) => (
            <Card key={category._id}>
              <CardHeader>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full min-w-12 h-12 bg-muted flex items-center justify-center">
                      <IconLucide iconName={category.iconName} />
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {category.name}
                    </CardTitle>
                  </div>
                  <CatAction
                    categoryData={{
                      _id: category._id,
                      name: category.name,
                      iconName: category.iconName,
                      description: category.description,
                      isSubCategory: false,
                    }}
                    // fetch={fetchCategories}
                  />
                </div>

                <CardDescription className="">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.subCategories?.map((subcategory: Category) => (
                    <Fragment key={subcategory._id}>
                      <Separator className="w-11/12 mx-auto" />
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full w-8 h-8 bg-muted flex items-center justify-center">
                            <IconLucide
                              iconName={subcategory.iconName}
                              className="w-4"
                            />
                          </div>
                          <p>{subcategory.name}</p>
                        </div>
                        <CatAction
                          categoryData={{
                            _id: subcategory._id,
                            name: subcategory.name,
                            iconName: subcategory.iconName,
                            description: subcategory.description,
                            isSubCategory: true,
                            parentCategory: category._id.toString(),
                          }}
                          // fetch={fetchCategories}
                        />
                      </li>
                      <div className="mt-4 text-xs text-muted-foreground">
                        <div className="mb-2">
                          <p>{subcategory.description}</p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      }
    </main>
  );
}

function CatAction({
  categoryData,
}: {
  categoryData?: z.infer<typeof categorySchema>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        <DropdownMenuItem asChild>
          <AddUpdateCategory categoryData={categoryData} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteCategory categoryData={categoryData} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
