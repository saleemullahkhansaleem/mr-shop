import { Fragment } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Plus } from "lucide-react";
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
    slug: string;
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
    <main className="relative container grid gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <SearchCategories searchParams={searchParams} />
        <AddUpdateCategory />
      </div>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCategories.map((category: Category) => (
            <Card key={category._id}>
              <CardHeader>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded min-w-12 h-12 bg-muted flex items-center justify-center">
                      <IconLucide iconName={category.iconName} />
                    </div>
                    <CardTitle className="text-lg font-medium tracking-normal">
                      {category.name}
                      <p className="text-xs text-muted-foreground">
                        /{category.slug}
                      </p>
                    </CardTitle>
                  </div>
                  <CatAction
                    categoryData={{
                      _id: category._id,
                      name: category.name,
                      slug: category.slug,
                      iconName: category.iconName,
                      description: category.description,
                      isSubCategory: false,
                    }}
                  />
                </div>

                <CardDescription>
                  {category.description} <br />{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.subCategories?.map((subcategory: Category) => (
                    <Fragment key={subcategory._id}>
                      <Separator className="w-11/12 mx-auto" />
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded w-8 h-8 bg-muted flex items-center justify-center">
                            <IconLucide
                              iconName={subcategory.iconName}
                              className="w-4"
                            />
                          </div>
                          <div>
                            <p>{subcategory.name}</p>
                            <p className="text-[10px] text-muted-foreground">
                              /{subcategory.slug}
                            </p>
                          </div>
                        </div>
                        <CatAction
                          categoryData={{
                            _id: subcategory._id,
                            name: subcategory.name,
                            slug: subcategory.slug,
                            iconName: subcategory.iconName,
                            description: subcategory.description,
                            isSubCategory: true,
                            parentCategory: category._id.toString(),
                          }}
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
