import Image from "next/image";

export default function NavIcon({ src, alt }: any) {
  return (
    <div className="grid place-items-center min-w-16 min-h-12">
      <Image src={src} width={24} height={24} alt={alt}></Image>
    </div>
  );
}
