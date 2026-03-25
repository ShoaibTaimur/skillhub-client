import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="border-b-2 pb-5">
          <CardTitle className="text-3xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your SkillHub account
          </CardDescription>
          <Button className="w-full py-5 mt-3">Login with Google</Button>
          <CardDescription className="text-center mt-3">Or</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="login" type="submit" className="w-full">
            Login
          </Button>
          <p>
            Don't have an account?
            <Button
              onClick={() => navigate("/signup")}
              className="gradient-text"
              variant="link"
            >
              Sign up
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
