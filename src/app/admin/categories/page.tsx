"use client";

import { Fragment, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Cable,
  Dumbbell,
  Edit,
  EllipsisVertical,
  Gamepad2,
  Home,
  Palette,
  Plus,
  SearchIcon,
  Shirt,
  SquarePlus,
  Trash,
} from "lucide-react";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { categorySchema } from "@/schema";

export default function CategoriesPage() {
  const [search, setSearch] = useState("");
  const categories = [
    {
      id: 1,
      title: "Electronics",
      icon: Cable,
      description:
        "Discover the latest in technology, from laptops to smartphones and beyond.",
      subcategories: [
        {
          id: 1,
          title: "Laptops",
          icon: Home,
          description:
            "Find the perfect laptop for work, play, or everything in between.",
        },
        {
          id: 2,
          title: "Smartphones",
          icon: Home,
          description:
            "Stay connected with the latest and greatest in mobile technology.",
        },
        {
          id: 3,
          title: "Tablets",
          icon: Home,
          description:
            "Enjoy the convenience of a tablet for browsing, streaming, and more.",
        },
        {
          id: 4,
          title: "Televisions",
          icon: Home,
          description:
            "Upgrade your home entertainment with a stunning new TV.",
        },
        {
          id: 5,
          title: "Cameras",
          icon: Home,
          description:
            "Capture life's moments with the best in camera technology.",
        },
      ],
    },
    {
      id: 2,
      title: "Clothing",
      icon: Shirt,
      description:
        "Elevate your style with our curated collection of fashion essentials.",
      subcategories: [
        {
          id: 1,
          title: "Women",
          icon: Home,
          description:
            "Discover the latest trends and must-have pieces for the modern woman.",
        },
        {
          id: 2,
          title: "Men",
          icon: Home,
          description:
            "Upgrade your wardrobe with stylish and comfortable options for men.",
        },
        {
          id: 3,
          title: "Kids",
          icon: Home,
          description:
            "Find the perfect clothing for your little ones, from casual to formal.",
        },
        {
          id: 4,
          title: "Accessories",
          icon: Home,
          description:
            "Complete your look with our selection of fashionable accessories.",
        },
      ],
    },
    {
      id: 3,
      title: "Home & Garden",
      icon: Home,
      description:
        "Transform your living space with our curated collection of home and garden essentials.",
      subcategories: [
        {
          id: 1,
          title: "Furniture",
          icon: Home,
          description:
            "Elevate your space with our selection of stylish and comfortable furniture.",
        },
        {
          id: 2,
          title: "Decor",
          icon: Home,
          description:
            "Add a personal touch to your home with our range of decorative accents.",
        },
        {
          id: 3,
          title: "Kitchen",
          icon: Home,
          description:
            "Equip your kitchen with the tools and appliances you need to create culinary masterpieces.",
        },
        {
          id: 4,
          title: "Outdoor",
          icon: Home,
          description:
            "Enjoy the great outdoors with our selection of patio furniture and gardening supplies.",
        },
      ],
    },
    {
      id: 4,
      title: "Sports & Fitness",
      icon: Dumbbell,
      description:
        "Elevate your active lifestyle with our selection of sports and fitness equipment.",
      subcategories: [
        {
          id: 1,
          title: "Fitness Equipment",
          icon: Home,
          description:
            "Find the perfect equipment to help you reach your fitness goals.",
        },
        {
          id: 2,
          title: "Apparel",
          icon: Home,
          description:
            "Stay comfortable and stylish during your workouts with our athletic wear.",
        },
        {
          id: 3,
          title: "Accessories",
          icon: Home,
          description:
            "Enhance your sports and fitness experience with our selection of accessories.",
        },
        {
          id: 4,
          title: "Outdoor Gear",
          icon: Home,
          description:
            "Explore the great outdoors with our range of outdoor equipment and gear.",
        },
      ],
    },
    {
      id: 5,
      title: "Beauty & Personal Care",
      icon: Palette,
      description:
        "Pamper yourself with our curated collection of beauty and personal care products.",
      subcategories: [
        {
          id: 1,
          title: "Makeup",
          icon: Home,
          description:
            "Discover the latest makeup trends and must-have products.",
        },
        {
          id: 2,
          title: "Skincare",
          icon: Home,
          description:
            "Achieve a healthy, glowing complexion with our selection of skincare items.",
        },
        {
          id: 3,
          title: "Hair Care",
          icon: Home,
          description:
            "Find the perfect hair care products to keep your locks looking their best.",
        },
        {
          id: 4,
          title: "Fragrance",
          icon: Home,
          description:
            "Elevate your mood and enhance your personal style with our range of fragrances.",
        },
      ],
    },
    {
      id: 6,
      title: "Toys & Games",
      icon: Gamepad2,
      description:
        "Discover a world of fun and entertainment with our selection of toys and games.",
      subcategories: [
        {
          id: 1,
          title: "Action Figures",
          icon: Home,
          description:
            "Bring your favorite characters to life with our collection of action figures.",
        },
        {
          id: 2,
          title: "Board Games",
          icon: Home,
          description:
            "Enjoy quality time with family and friends with our selection of classic and modern board games.",
        },
        {
          id: 3,
          title: "Puzzles",
          icon: Home,
          description:
            "Challenge your mind and unleash your creativity with our range of puzzles.",
        },
        {
          id: 4,
          title: "Video Games",
          icon: Home,
          description:
            "Immerse yourself in the latest video game releases and consoles.",
        },
      ],
    },
  ];
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );
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
        <Dialog>
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
            <AddCategory />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full min-w-12 h-12 bg-muted flex items-center justify-center">
                    <category.icon className="w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {category.title}
                  </CardTitle>
                </div>
                <CatAction
                  categoryData={{
                    name: category.title,
                    description: category.description,
                    isSubCategory: false,
                  }}
                />
              </div>

              <CardDescription className="">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.subcategories.map((subcategory) => (
                  <Fragment key={subcategory.id}>
                    <Separator className="w-11/12 mx-auto" />
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full w-8 h-8 bg-muted flex items-center justify-center">
                          <subcategory.icon className="w-4" />
                        </div>
                        <p>{subcategory.title}</p>
                      </div>
                      <CatAction
                        categoryData={{
                          name: subcategory.title,
                          description: subcategory.description,
                          isSubCategory: true,
                          parentCategory: category.title,
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
              <AddCategory categoryData={categoryData} />
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
