"use client";
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

  return (
    <>
        {publicId && 
            <CldImage
                src={publicId}
                width={300}
                height={300}
                alt='Uploaded image'
            />

        }
        <CldUploadWidget 
            uploadPreset='anbe2odw'
            options={{
                sources: ['local'],
                maxFiles: 5,
                multiple: true,
                styles: {}
            }}
            onSuccess={(result) => {
                if (result.event !== 'success') {
                    return;
                } 

                const info = result.info as CloudinaryResult;
                setPublicId(info.public_id);
            }
        }
        >
        {({ open }) => 
            <button 
            onClick={() => open()} 
            className='btn btn-primary'
            >Upload</button>}
        </CldUploadWidget>
    </>
  )
}

export default UploadPage