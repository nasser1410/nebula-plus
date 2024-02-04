import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/dojo-logo.png";

const NavBar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Nebula-plus logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Nebula-Plus</h1>
      <Link href="/">Dashboard</Link>
      <Link href="tickets">Tickets</Link>
    </nav>
  );
};

export default NavBar;
