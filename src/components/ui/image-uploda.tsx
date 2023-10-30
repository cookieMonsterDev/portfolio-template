"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "./input";
import { uploadImage } from "@/lib/firebase";
import { toast } from "react-hot-toast";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: () => void;
  value: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file: File | null = e.target.files ? e.target.files[0] : null;

      if (!file) return;

      const url = await uploadImage(file.name, file);

      if (!url) return;

      console.log(url);

      onChange(url);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex flex-col">
      {value && (
        <div className="relative w-40 h-40 mb-2">
          <Image
            src={value}
            alt={"preview_image"}
            width={100}
            height={100}
            className="object-cover w-40 h-40"
          />
          <Button
            variant="destructive"
            size="icon"
            disabled={disabled}
            onClick={onRemove}
            className="absolute top-2 right-2"
          >
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      )}
      <div className="flex gap-2">
        <Input
          type="file"
          accept="image/*"
          onChange={onUpload}
          className="cursor-pointer"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
