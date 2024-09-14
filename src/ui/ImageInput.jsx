import { useEffect, useRef, useState } from 'react';

function ImageInput({ setImageFile, imageFile, user }) {
  const uploadFile = useRef();
  const [image, setImage] = useState();

  const handleUploadImageClick = () => {
    uploadFile.current.click();
  };

  const handleUploadImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      const imageURL = {
        url: URL.createObjectURL(file), // Create a URL for preview
        file,
      };

      setImage(imageURL);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        onClick={handleUploadImageClick}
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-[1rem] border-[3px] border-dashed border-border-light px-4 py-5 transition-all hover:bg-bg-light sm:w-[60%]"
      >
        <div className="size-[7rem] rounded-full border-[4px] border-border-light">
          <img
            src={image?.url || user.photoURL || '/img/uploadImgIconCircle.svg'}
            alt="uploadImgIcon"
            className="size-full rounded-full object-cover"
          />
        </div>
        <span className="font-semibold">
          Select image or <span className="font-bold text-primary">browse</span>
          .
        </span>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center">
        <span className="text- font-semibold">
          {!image ? '0' : '1'} file uploaded.
        </span>

        <input
          ref={uploadFile}
          onChange={handleUploadImageChange}
          multiple
          type="file"
          hidden
          accept="image/*"
        />
      </div>
    </div>
  );
}

export default ImageInput;
