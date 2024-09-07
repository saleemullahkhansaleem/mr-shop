"use client";

import { Spinner } from "@/components/component";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/helper/http";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/userSlice";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const data = values;
      let response = await api.post("/api/login", data);
      if (response.success) {
        setCookie("role", JSON.stringify(response.data.role), {
          maxAge: 60 * 60 * 24 * 7,
        });
        dispatch(
          setUser({
            id: response.data.id,
            email: response.data.email,
            name: response.data.name,
            phone: response.data.phone,
            role: response.data.role,
            isLoggedIn: true,
          })
        );
        if (response.data.role === "admin") {
          router.replace("/admin");
        } else {
          router.replace("/");
        }
        toast({
          description: "Logged in successfully",
        });
      } else {
        toast({
          title: "Login failed",
          description: response.message,
          variant: "destructive",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error!",
        description: "Some thing went wrong",
        variant: "destructive",
      });
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="m@example.com"
                        type="email"
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
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="#"
                        className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                        prefetch={false}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    {/* <FormLabel>Password</FormLabel> */}
                    <FormControl>
                      <Input placeholder="******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {error && <p className="text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              Login
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm text-muted-foreground">
          Do not have an account?{" "}
          <Link href="/register" className="underline" prefetch={false}>
            Register now
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
