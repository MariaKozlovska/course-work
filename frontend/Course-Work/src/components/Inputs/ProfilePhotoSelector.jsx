import React, { useRef } from 'react'
import { FaCamera } from 'react-icons/fa6'

const ProfilePhotoSelector = ({ image, setImage }) => {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <div 
          onClick={handleClick}
          className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer overflow-hidden border-2 border-slate-300 hover:border-primary transition-colors"
        >
          {image ? (
            <img src={image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <FaCamera size={32} className="text-slate-400" />
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 cursor-pointer" onClick={handleClick}>
          <FaCamera size={14} />
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotoSelector