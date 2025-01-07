/* eslint-disable prettier/prettier */
import { Link } from "@nextui-org/react";

import FloatAnimation from "./components/FloatAnimation";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function App() {
  return (
    <>
      <div>
        <ThemeSwitcher />
      </div>
      <div className="flex gap-4 items-center justify-center h-screen">
        <FloatAnimation />
        <Link className="float" color="foreground" href="#">
          Home
        </Link>
        <Link className="float" color="primary" href="#">
          About Me
        </Link>
        <Link className="float" color="secondary" href="#">
          Services
        </Link>
        <Link className="float" color="success" href="#">
          Rates
        </Link>
        <Link className="float" color="warning" href="#">
          Referrals
        </Link>
        <Link className="float" color="danger" href="#">
          Contact Me
        </Link>
      </div>
    </>
  );
}
