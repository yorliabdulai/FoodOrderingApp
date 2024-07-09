import { Link } from "react-router-dom";

const MobileNavLinks = () => {
    return(
      <>
      <Link to="/user-profile"className="flex items-center bg-white font-bold hover:text-orange-500">
        User Profile
      </Link>
      </>  
    )
}
export default MobileNavLinks;