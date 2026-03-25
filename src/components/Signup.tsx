import React, { use } from "react";
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
import { AuthContext } from "@/Context/AuthContext";

const Signup = () => {
  const {createUser} = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventdefault();
    const form=e.target;
    const name=form.name.value;

  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="border-b-2 pb-5">
          <CardTitle className="text-3xl text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join SkillHub and start your journey
          </CardDescription>
          <Button className="w-full py-5 mt-3">Login with Google</Button>
          <CardDescription className="text-center mt-3">Or</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
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
                  name="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onSubmit={() => handleSubmit()}
            variant="login"
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
          <p>
            Already have an account?
            <Button
              onClick={() => navigate("/login")}
              className="gradient-text"
              variant="link"
            >
              Login
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
