"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
/*   Button, */
} from "@material-tailwind/react";
import  Button  from 'library-aandm/src/index'
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";
export default function page() {

  const [credetials, setCredetials] = useState({
    Email: "",
  });

  const { Email } = credetials;
  const changeCredentials = (e) => {
    setCredetials({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   await signIn("credentials", { Email, callbackUrl: '/dashboard/home' })
  };

 /*  useEffect(() => {console.log(hola)}, []); */
  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              name="Email"
              size="lg"
              onChange={changeCredentials}
            />
            <Input
              label="Password"
              name="password"
              size="lg"
              onChange={changeCredentials}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
