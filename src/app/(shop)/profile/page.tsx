import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CreditCardIcon,
  TrashIcon,
  PencilIcon,
  SettingsIcon,
  ChevronRightIcon,
} from "lucide-react";
import { AddressIcon, OrdersIcon } from "@/components/icons";
import { ProfileHeader } from "@/components/component";

export default function Profile() {
  return (
    <main className="container min-h-dvh">
      <Tabs defaultValue="orders">
        <div className="flex flex-col items-center">
          <ProfileHeader />
          <TabsList className="mx-auto">
            <TabsTrigger value="orders" className="gap-2">
              <OrdersIcon className="w-4 h-4" />{" "}
              <span className="hidden sm:block">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="gap-2">
              <AddressIcon className="w-4 h-4" />{" "}
              <span className="hidden sm:block">Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="gap-2">
              <CreditCardIcon className="w-4 h-4" />{" "}
              <span className="hidden sm:block">Payment Methods</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <SettingsIcon className="w-4 h-4" />{" "}
              <span className="hidden sm:block">Settings</span>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="orders" className="pb-4">
          <div className="grid gap-6">
            <Card className="overflow-x-auto">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>#12345</TableCell>
                      <TableCell>June 23, 2023</TableCell>
                      <TableCell>2 items</TableCell>
                      <TableCell>$99.00</TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon">
                          <ChevronRightIcon className="h-4 w-4" />
                          <span className="sr-only">View Order</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>#12346</TableCell>
                      <TableCell>May 15, 2023</TableCell>
                      <TableCell>1 item</TableCell>
                      <TableCell>$49.00</TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon">
                          <ChevronRightIcon className="h-4 w-4" />
                          <span className="sr-only">View Order</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>#12347</TableCell>
                      <TableCell>April 2, 2023</TableCell>
                      <TableCell>3 items</TableCell>
                      <TableCell>$149.00</TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon">
                          <ChevronRightIcon className="h-4 w-4" />
                          <span className="sr-only">View Order</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="addresses" className="pb-4">
          <div className="grid gap-6">
            <Card className="overflow-x-auto">
              <CardHeader>
                <CardTitle className="mb-2">Shipping Addresses</CardTitle>
                <Button size="sm" className="sm:ml-auto">
                  Add Address
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Address</TableHead>
                      <TableHead>Default</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>John Doe</div>
                        <div>123 Main St.</div>
                        <div>Anytown, CA 12345</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon">
                          <PencilIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>Jane Smith</div>
                        <div>456 Oak Rd.</div>
                        <div>Somewhere, NY 54321</div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Set as Default
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon">
                          <PencilIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="payment" className="pb-4">
          <div className="grid gap-6">
            <Card className="overflow-x-auto">
              <CardHeader>
                <CardTitle className="mb-2">Payment Methods</CardTitle>
                <Button size="sm" className="sm:ml-auto">
                  Add Payment
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Card</TableHead>
                      <TableHead>Expires</TableHead>
                      <TableHead>Default</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCardIcon className="h-5 w-5" />
                          <div>Visa **** 4532</div>
                        </div>
                      </TableCell>
                      <TableCell>06/25</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Default</Badge>
                      </TableCell>
                      <TableCell className="flex justify-center gap-2">
                        <Button variant="outline" size="icon">
                          <PencilIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCardIcon className="h-5 w-5" />
                          <div>Mastercard **** 2468</div>
                        </div>
                      </TableCell>
                      <TableCell>09/27</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Set as Default
                        </Button>
                      </TableCell>
                      <TableCell className="flex justify-center gap-2">
                        <Button variant="outline" size="icon">
                          <PencilIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="settings" className="pb-4">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="grid md:col-span-3 gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="I'm a software engineer."
                    />
                  </div>
                  <Button className="ml-auto md:col-span-3">
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
