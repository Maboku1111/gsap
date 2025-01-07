/* eslint-disable prettier/prettier */
import { Link } from "@nextui-org/react";
import FloatAnimation from "./components/floatAnimation";

export default function App() {
  return (
    <div className="flex gap-4 items-center justify-center h-screen">
      <FloatAnimation/>
      <Link color="foreground" href="#">
        Home
      </Link>
      <Link color="primary" href="#">
        About Me
      </Link>
      <Link color="secondary" href="#">
        Services
      </Link>
      <Link color="success" href="#">
        Rates
      </Link>
      <Link color="warning" href="#">
        Referrals
      </Link>
      <Link color="danger" href="#">
        Contact Me
      </Link>
    </div>
  );
}
