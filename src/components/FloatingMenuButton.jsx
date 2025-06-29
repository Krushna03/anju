import React from "react";
import { Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu"


const FloatingMenuButton = () => {
  return (
    <div className="fixed top-8 right-4 md:right-12 z-50">
      <button className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-gray-300 hover:bg-white transition">
        <span className="text-sm font-semibold text-gray-800">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2"> 
              <Plus className="w-5 h-5 text-gray-800" /> 
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end" className="mt-2" sideOffset={12}>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Services</DropdownMenuItem>
              <DropdownMenuItem>Videos</DropdownMenuItem>
              <DropdownMenuItem>Testimonial</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </button>
    </div>
  );
};

export default FloatingMenuButton;
