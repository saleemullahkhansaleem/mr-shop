"use client";

import { Fragment, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, EllipsisVertical, SearchIcon, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AddCategory } from "@/components/adminComponents";
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
import { IconLucide, Spinner } from "@/components/component";
import { IconName } from "@/components/component/IconLucide";
import { getRequest } from "@/helper/http";

export default function CategoriesPage() {
  interface Category {
    _id: number;
    name: string;
    iconName: IconName;
    description: string;
    subCategories?: Category[];
  }
  const [openDialog, setOpenDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const toggleDialog = () => setOpenDialog(false);
  const categories1 = [
    {
      id: 1,
      title: "Electronics",
      iconName: "Cable",
      description:
        "Discover the latest in technology, from laptops to smartphones and beyond.",
      subcategories: [
        {
          id: 1,
          title: "Laptops",
          iconName: "Home",
          description:
            "Find the perfect laptop for work, play, or everything in between.",
        },
        {
          id: 2,
          title: "Smartphones",
          iconName: "Home",
          description:
            "Stay connected with the latest and greatest in mobile technology.",
        },
        {
          id: 3,
          title: "Tablets",
          iconName: "Home",
          description:
            "Enjoy the convenience of a tablet for browsing, streaming, and more.",
        },
        {
          id: 4,
          title: "Televisions",
          iconName: "Home",
          description:
            "Upgrade your home entertainment with a stunning new TV.",
        },
        {
          id: 5,
          title: "Cameras",
          iconName: "Home",
          description:
            "Capture life's moments with the best in camera technology.",
        },
      ],
    },
    {
      id: 2,
      title: "Clothing",
      iconName: "Shirt",
      description:
        "Elevate your style with our curated collection of fashion essentials.",
      subcategories: [
        {
          id: 1,
          title: "Women",
          iconName: "Home",
          description:
            "Discover the latest trends and must-have pieces for the modern woman.",
        },
        {
          id: 2,
          title: "Men",
          iconName: "Home",
          description:
            "Upgrade your wardrobe with stylish and comfortable options for men.",
        },
        {
          id: 3,
          title: "Kids",
          iconName: "Home",
          description:
            "Find the perfect clothing for your little ones, from casual to formal.",
        },
        {
          id: 4,
          title: "Accessories",
          iconName: "Home",
          description:
            "Complete your look with our selection of fashionable accessories.",
        },
      ],
    },
    {
      id: 3,
      title: "Home & Garden",
      iconName: "Home",
      description:
        "Transform your living space with our curated collection of home and garden essentials.",
      subcategories: [
        {
          id: 1,
          title: "Furniture",
          iconName: "Home",
          description:
            "Elevate your space with our selection of stylish and comfortable furniture.",
        },
        {
          id: 2,
          title: "Decor",
          iconName: "Home",
          description:
            "Add a personal touch to your home with our range of decorative accents.",
        },
        {
          id: 3,
          title: "Kitchen",
          iconName: "Home",
          description:
            "Equip your kitchen with the tools and appliances you need to create culinary masterpieces.",
        },
        {
          id: 4,
          title: "Outdoor",
          iconName: "Home",
          description:
            "Enjoy the great outdoors with our selection of patio furniture and gardening supplies.",
        },
      ],
    },
    {
      id: 4,
      title: "Sports & Fitness",
      iconName: "Dumbbell",
      description:
        "Elevate your active lifestyle with our selection of sports and fitness equipment.",
      subcategories: [
        {
          id: 1,
          title: "Fitness Equipment",
          iconName: "Home",
          description:
            "Find the perfect equipment to help you reach your fitness goals.",
        },
        {
          id: 2,
          title: "Apparel",
          iconName: "Home",
          description:
            "Stay comfortable and stylish during your workouts with our athletic wear.",
        },
        {
          id: 3,
          title: "Accessories",
          iconName: "Home",
          description:
            "Enhance your sports and fitness experience with our selection of accessories.",
        },
        {
          id: 4,
          title: "Outdoor Gear",
          iconName: "Home",
          description:
            "Explore the great outdoors with our range of outdoor equipment and gear.",
        },
      ],
    },
    {
      id: 5,
      title: "Beauty & Personal Care",
      iconName: "Palette",
      description:
        "Pamper yourself with our curated collection of beauty and personal care products.",
      subcategories: [
        {
          id: 1,
          title: "Makeup",
          iconName: "Home",
          description:
            "Discover the latest makeup trends and must-have products.",
        },
        {
          id: 2,
          title: "Skincare",
          iconName: "Home",
          description:
            "Achieve a healthy, glowing complexion with our selection of skincare items.",
        },
        {
          id: 3,
          title: "Hair Care",
          iconName: "Home",
          description:
            "Find the perfect hair care products to keep your locks looking their best.",
        },
        {
          id: 4,
          title: "Fragrance",
          iconName: "Home",
          description:
            "Elevate your mood and enhance your personal style with our range of fragrances.",
        },
      ],
    },
    {
      id: 6,
      title: "Toys & Games",
      iconName: "Gamepad2",
      description:
        "Discover a world of fun and entertainment with our selection of toys and games.",
      subcategories: [
        {
          id: 1,
          title: "Action Figures",
          iconName: "Home",
          description:
            "Bring your favorite characters to life with our collection of action figures.",
        },
        {
          id: 2,
          title: "Board Games",
          iconName: "Home",
          description:
            "Enjoy quality time with family and friends with our selection of classic and modern board games.",
        },
        {
          id: 3,
          title: "Puzzles",
          iconName: "Home",
          description:
            "Challenge your mind and unleash your creativity with our range of puzzles.",
        },
        {
          id: 4,
          title: "Video Games",
          iconName: "Home",
          description:
            "Immerse yourself in the latest video game releases and consoles.",
        },
      ],
    },
  ];
  const filteredCategories = categories.filter((category: Category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchCat();
  }, []);

  const fetchCat = async () => {
    setLoading(true);
    try {
      let response = await getRequest("/api/category");
      if (response.success) {
        setCategories(response.data);
      } else {
        console.log("Failed to get parent categories");
      }
      setLoading(false);
    } catch (error) {
      console.log("Error in getting parent categories: ", error);
      setLoading(false);
    }
  };

  return (
    <main className="container grid gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg bg-background pl-10"
          />
        </div>
        <Dialog onOpenChange={setOpenDialog} open={openDialog}>
          <DialogTrigger asChild>
            <Button> Add New Category</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md overflow-auto max-h-screen">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Fill out the form to create a new category.
              </DialogDescription>
            </DialogHeader>
            <AddCategory toggleDialog={toggleDialog} fetch={fetchCat} />
          </DialogContent>
        </Dialog>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
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
                      name: category.name,
                      iconName: category.iconName,
                      description: category.description,
                      isSubCategory: false,
                    }}
                    toggleDialog={toggleDialog}
                    fetch={fetchCat}
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
                            name: subcategory.name,
                            iconName: "subcategory.icon",
                            description: subcategory.description,
                            isSubCategory: true,
                            parentCategory: category.name,
                          }}
                          toggleDialog={toggleDialog}
                          fetch={fetchCat}
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
      )}
    </main>
  );
}

function CatAction({
  categoryData,
  toggleDialog,
  fetch,
}: {
  categoryData?: z.infer<typeof categorySchema>;
  toggleDialog: () => void;
  fetch: () => void;
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Fill out the form to create a new category.
                </DialogDescription>
              </DialogHeader>
              <AddCategory
                categoryData={categoryData}
                toggleDialog={toggleDialog}
                fetch={fetch}
              />
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Dialog>
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
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Type <span className="font-bold">"Category name"</span>{" "}
                    below to confirm
                  </Label>
                  <Input id="name" placeholder="Enter category name" required />
                </div>
                <div className="text-end">
                  <Button type="submit" size="sm" variant="destructive">
                    Confirm
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
