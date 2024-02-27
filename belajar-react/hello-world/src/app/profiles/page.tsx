import Image from "next/image";
import userImage from './rawphoto.jpeg'

const user = {
    name: 'Alya Marliza Koesnanto',
    nim: 2141720004,
    imageSize: 312,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>{user.nim}</h2>
        <Image
          className="avatar"
          src={userImage}
          alt={'Foto ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }