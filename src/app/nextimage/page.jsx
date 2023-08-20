import Image from "next/image";
// import vercelLogo from "../vercel.svg";
// import vercelLogo from "../../../public/vercel.svg"
import vercelLogo from "@/app/vercel.svg"

const NextImage = () => {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <Image src={vercelLogo} alt="vercel logo" width={600} height={120}/>
    </div>
  );
};

export default NextImage;
