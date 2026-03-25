import { useContext } from "react";
import type React from "react";

import {
  Card,
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
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const info = useContext(AuthContext);
  const createUser = info?.createUser;
  const signInUser = info?.signInUser;
  const navigate = useNavigate();

  const handleEmail = () => {
    signInUser?.()
      .then(() => {
        Swal.fire({
          title: "Done!",
          text: "Account is created!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed!",
          text: "Account already exists!",
          icon: "error",
        });
        console.log(error.code);
      });
  };
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nameValue = formData.get("name");
    const emailValue = formData.get("email");
    const passwordValue = formData.get("password");
    const email = typeof emailValue === "string" ? emailValue : "";
    const password = typeof passwordValue === "string" ? passwordValue : "";
    const name = typeof nameValue === "string" ? nameValue : "";

    createUser?.(email, password)
      .then(async (result) => {
        Swal.fire({
          title: "Done!",
          text: "Account is created!",
          icon: "success",
        });
        await updateProfile(result.user, {
          displayName: name,
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.code == "auth/weak-password") {
          Swal.fire({
            title: "Failed!",
            text: "Account password needs to be more then 6 characters!",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Account already exists!",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="border-b-2 pb-5">
          <CardTitle className="text-3xl text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join SkillHub and start your journey
          </CardDescription>
          <Button onClick={() => handleEmail()} className="w-full py-5 mt-3">
            Login with Google
          </Button>
          <CardDescription className="text-center mt-3">Or</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
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
              <Button variant="login" type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <p>
            Already have an account?
            <Button
              onClick={() => navigate("/")}
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
