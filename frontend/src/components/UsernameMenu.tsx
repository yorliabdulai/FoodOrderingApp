import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";

const UsernameMenu = () => {
    const {user} = useAuth0();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.email}
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
};
export default UsernameMenu;