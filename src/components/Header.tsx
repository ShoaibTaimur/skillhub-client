import React from "react";
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

const Header = () => {
  const navigate=useNavigate();

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl inter gradient-text font-bold">
              SkillHub
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="text-gray-600 text-[14px]">
                Home
              </NavigationMenuLink>
              <NavigationMenuLink className="text-gray-600 text-[14px]">
                Browse Skills
              </NavigationMenuLink>
              <NavigationMenuLink className="text-gray-600 text-[14px]">
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-3">
        <Button onClick={()=>navigate("/login")} className="px-2 py-2 sm:px-4  sm:py-5" variant="login">
          Login
        </Button>
        <Button onClick={()=>navigate("/signup")} className="px-2 py-2 sm:px-4  sm:py-5">Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
