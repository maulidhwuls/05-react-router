import Link from "next/link";

export default function Home() {
    return (
          <div>
            <h1>Welcome to Home</h1>
            <Link href='/profile'>Profile <br /></Link>
            <Link href='/about'>About <br /></Link>
            <Link href='/products'>Products <br /></Link>
            <Link href='/blogs'>Blogs <br /></Link>
          </div>
    );
  }