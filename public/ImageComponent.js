import Image from 'next/image';

export const ImageComponent = () => {

  return (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="Your Name"
    />
  )
}