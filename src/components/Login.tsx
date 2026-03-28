import React, { useContext } from "react";
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

const Login = () => {
  const navigate = useNavigate();
  const info = useContext(AuthContext);
  const loginUser = info?.loginUser;
  const signInUser = info?.signInUser;
  const handleEmail = () => {
    signInUser?.()
      .then((result) => {
        Swal.fire({
          title: "Done!",
          text: "Logged in successfully!",
          icon: "success",
        });
        const displayName = result.user.displayName;
        const email = result.user.email;
        const creationTime = result.user.metadata.creationTime;
        const lastSignInTime = result.user.metadata.lastSignInTime;
        const userInfo = {
          displayName,
          email,
          creationTime,
          lastSignInTime,
        };
        fetch("https://skillhub-server-bice.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Failed!",
          text: "Account already exists!",
          icon: "error",
        });
      });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailValue = formData.get("email");
    const passwordValue = formData.get("password");
    const email = typeof emailValue === "string" ? emailValue : "";
    const password = typeof passwordValue === "string" ? passwordValue : "";

    loginUser?.(email, password)
      .then((result) => {
        Swal.fire({
          title: "Done!",
          text: "Login Successful!",
          icon: "success",
        });
        const displayName = result.user.displayName;
        const email = result.user.email;
        const creationTime = result.user.metadata.creationTime;
        const lastSignInTime = result.user.metadata.lastSignInTime;
        const userInfo = {
          displayName,
          email,
          creationTime,
          lastSignInTime,
        };
        fetch("https://skillhub-server-bice.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        navigate("/");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          Swal.fire({
            title: "Failed!",
            text: "Invalid credential!",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center px-10">
      <Card className="w-full max-w-md">
        <CardHeader className="border-b-2 pb-5">
          <CardTitle className="text-3xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your SkillHub account
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  required
                />
              </div>
              <Button variant="login" type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
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
