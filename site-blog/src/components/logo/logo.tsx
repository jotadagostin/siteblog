import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" title="initial page">
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
    </Link>
  );
};
