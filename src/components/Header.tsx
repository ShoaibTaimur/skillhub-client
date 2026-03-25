import React, { use } from "react";
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

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = use(AuthContext);

  const handleLogout = () => {
    logoutUser();
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
              <NavigationMenuLink onClick={()=>navigate("/home")} className="text-gray-600 text-[14px]">
                Home
              </NavigationMenuLink>
              <NavigationMenuLink onClick={()=>navigate("/skills")} className="text-gray-600 text-[14px]">
                Browse Skills
              </NavigationMenuLink>
              <NavigationMenuLink onClick={()=>navigate("/dashboard")} className="text-gray-600 text-[14px]">
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-3">
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
        <Button
          onClick={() => navigate("/signup")}
          className="px-2 py-2 sm:px-4  sm:py-5"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Header;
