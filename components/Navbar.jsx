import Link from  "next/link"

export default function Navbar(){
    return(
<nav className="flex justify-between my-10 bg-blue-800 items-center px-6 py-4 rounded-md">
    <Link className="text-yellow-400 text-3xl" href={"/"}>Toplify</Link>
    <Link  className="bg-white p-2 rounded-full" href={"/addtopic"}> Add Topic</Link>
</nav>
    );
}