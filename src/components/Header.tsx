import { useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { AuthContext } from "@/Context/AuthContext";
import Swal from "sweetalert2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const navigate = useNavigate();
  const info = useContext(AuthContext);
  const user = info?.user;
  const logoutUser = info?.logoutUser;
  const imgURLValue = user?.photoURL;
  const imgURL = typeof imgURLValue === "string" ? imgURLValue : "";

  const handleLogout = () => {
    logoutUser?.();
    Swal.fire({
      title: "Done!",
      text: "Logged out Successful!",
      icon: "success",
    });
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl inter gradient-text font-bold">
              SkillHub
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                onClick={() => navigate("/home")}
                className="text-gray-600 text-[14px]"
              >
                Home
              </NavigationMenuLink>
              <NavigationMenuLink
                onClick={() => navigate("/skills")}
                className="text-gray-600 text-[14px]"
              >
                Browse Skills
              </NavigationMenuLink>
              <NavigationMenuLink
                onClick={() => navigate("/dashboard")}
                className="text-gray-600 text-[14px]"
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        {user ? (
          <Button
            onClick={() => handleLogout()}
            className="px-2 py-2 sm:px-4  sm:py-5"
            variant="destructive"
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/")}
            className="px-2 py-2 sm:px-4  sm:py-5"
            variant="login"
          >
            Login
          </Button>
        )}
        {user ? (
          <Avatar size="lg">
            <AvatarImage src={imgURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Button
            onClick={() => navigate("/signup")}
            className="px-2 py-2 sm:px-4  sm:py-5"
          >
            Sign up
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
