import { useContext } from "react";
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
  const loginUser=info?.loginUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    loginUser?.(email, password)
      .then((result) => {
        Swal.fire({
          title: "Done!",
          text: "Login Successful!",
          icon: "success",
        });
        navigate("/home");
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
