import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
    return(
      <>
      <Link to="/user-profile"className="flex items-center bg-white font-bold hover:text-orange-500">
        User Profile
      </Link>
      <Button className="flex items-center font-bold px-3 hover:bg-gray-500">
        Log Out
      </Button>
      </>  
    )
}
export default MobileNavLinks;