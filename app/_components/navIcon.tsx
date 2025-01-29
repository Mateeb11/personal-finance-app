import Image from "next/image";

export default function NavIcon({ src, alt }: any) {
  return (
    <>
      <Image src={src} width={24} height={24} alt={alt}></Image>
    </>
  );
}
