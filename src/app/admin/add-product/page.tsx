import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddProduct() {
  return (
    <main className="p-4 md:p-6">
      <Card className="mx-auto max-w-[50rem]">
        <CardHeader className="">
          <CardTitle className="">Add New Product</CardTitle>
        </CardHeader>
        <CardContent className="">
          <form className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                className="w-full"
                placeholder="Enter product title"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Select name="category">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category1">Category 1</SelectItem>
                  <SelectItem value="category2">Category 2</SelectItem>
                  <SelectItem value="category3">Category 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                className="w-full"
                placeholder="Enter product price"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="discountPercentage">Discount Percentage</Label>
              <Input
                id="discountPercentage"
                type="number"
                className="w-full"
                placeholder="Enter discount percentage"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                type="text"
                className="w-full"
                placeholder="Enter product tags (comma-separated)"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                type="number"
                className="w-full"
                placeholder="Enter product stock"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="images">Images</Label>
              <Input id="images" type="file" multiple />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <Input id="thumbnail" type="file" />
            </div>
            <div className="grid gap-3 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter product description"
                className="min-h-32"
              />
            </div>
            <div className="md:col-span-2 text-right">
              <Button type="submit" className="w-full md:w-max mr-0">
                Save Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
