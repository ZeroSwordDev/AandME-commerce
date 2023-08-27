import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
/*   Cog6ToothIcon, */
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SideBarDashboard() {
  return (
    <Card className="flex  w-full h-full bg-gray-100 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="black">
          Sidebar
        </Typography>
      </div>
      <List>
        <Link href={"/dashboard/home"}>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link href={'/dashboard/productsdash'}>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Products
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Edit
        </ListItem>

        <ListItem onClick={() => signOut({callbackUrl:'/login'})}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
