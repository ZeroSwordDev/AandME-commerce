import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

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
      <List className="flex  justify-between h-full">
        <div className="">
          
        <Link href={"/dashboard/home"}>
          <ListItem>
            Dashboard
          </ListItem>
        </Link>
        <Link href={'/dashboard/productsdash'}>
          <ListItem>
            Products
          </ListItem>
        </Link>
        <ListItem>
          Ventas
        </ListItem>
        <ListItem>
          Inventario
        </ListItem>
        <ListItem>
          Options
        </ListItem>
        <ListItem>
          Edit
        </ListItem>

        </div>
        <ListItem onClick={() => signOut({callbackUrl:'/login'})}>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
