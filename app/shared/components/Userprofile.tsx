import { Button } from "@/components/ui/button"
import { FaUserCircle } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-black border-none text-white hover:bg-gray-800"><FaUserCircle className="text-xl" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black border-gray-600" align="start">
        <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-white hover:bg-gray-800">
            Analysis
            <DropdownMenuShortcut><IoSend className="text-sm" /></DropdownMenuShortcut>
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-white hover:bg-gray-800">Past Results</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-black border-gray-600">
                <DropdownMenuItem className="text-white hover:bg-gray-800">Google - Frontend Interview 25 Aug 2025 <IoSend className="text-sm ml-2" /></DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800">Microsoft - Backend Interview 20 Aug 2025 <IoSend className="text-sm ml-2" /></DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800">Amazon - Full Stack Interview 18 Aug 2025 <IoSend className="text-sm ml-2" /></DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800">Meta - React Interview 15 Aug 2025 <IoSend className="text-sm ml-2" /></DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800">Netflix - UI/UX Interview 12 Aug 2025 <IoSend className="text-sm ml-2" /></DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800">Apple - iOS Interview 10 Aug 2025 <IoSend className="text-sm ml-2" /></DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem className="text-white hover:bg-gray-800">
            Settings
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem className="text-white hover:bg-gray-800">Support</DropdownMenuItem>
        <DropdownMenuItem className="bg-gray-900 text-white hover:bg-gray-700">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
