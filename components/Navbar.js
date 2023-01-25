import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-5 mb-8 bg-zinc-800 text-gray-100">
      <div className="flex justify-center items-center">
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokéNext"
        />
        <h1 className="text-3xl ml-2 font-bold">Pokédex</h1>
      </div>
      <ul className="flex">
        <li className="text-xl mr-6 font-semibold p-1 border-b-2 border-transparent transition delay-150 hover:border-gray-100">
            <Link href="/">Home</Link>
        </li>
        <li className="text-xl mr-14 font-semibold p-1 border-b-2 border-transparent transition delay-150 hover:border-gray-100">
            <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
