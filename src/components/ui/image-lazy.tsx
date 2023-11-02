"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface ImageLazyProps extends ImageProps {
  wrapperClassName?: string;
}

export const ImageLazy: React.FC<ImageLazyProps> = ({
  wrapperClassName,
  className,
  ...rest
}) => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <div className={cn("w-full h-full rounded-lg relative", wrapperClassName)}>
      <Image
        {...rest}
        className={cn("w-full h-full object-cover rounded-lg", className)}
        onLoad={() => setLoaded(true)}
      />
      {!isLoaded && (
        <Skeleton
          className={cn(
            "absolute top-0 left-0 w-full h-full rounded-lg",
            wrapperClassName
          )}
        />
      )}
    </div>
  );
};
