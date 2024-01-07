"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { Image as ImageType } from "@prisma/client";
import { AspectRatio } from "../ui/aspect-ratio";
import { Input } from "../ui/input";
import Image from "next/image";
import fileStore from "@/lib/firebase-store";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { dateTimeFormatter } from "@/lib/utils";

type ImageFormProps = {
  initialImage: ImageType | null;
  projectId: string;
};

const formSchema = z.object({
  projectId: z.string(),
  url: z.string(),
});

export const ImageForm: React.FC<ImageFormProps> = ({
  projectId,
  initialImage,
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectId,
      url: initialImage?.url || "",
    },
  });

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file: File | null = e.target.files ? e.target.files[0] : null;
      if (!file) return;

      const { fileURL, fileName } = await fileStore.uploadFile(file);

      await axios.post("/api/image/", {
        name: fileName,
        url: fileURL,
        projectId,
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({ title: "Something went wrong!", variant: "destructive" });
    }
  };

  const onDelete = async () => {
    try {
      await fileStore.deleteFile(initialImage?.name!);
      await axios.delete(`/api/image/${initialImage?.id}`);
      router.refresh();
      toast({
        title: "Image successfully deleted.",
        description: dateTimeFormatter.format(new Date()),
      });
    } catch (error) {
      toast({
        title: "Image is not deleted!",
        description: "Something went wrong during deleting image.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Preview Image
        </label>
        <AspectRatio
          ratio={16 / 9}
          className="border border-input rounded-md relative"
        >
          <Input
            type="file"
            className="border-none w-full h-full cursor-pointer"
            onChange={onUpload}
          />
          {initialImage && (
            <>
              <Image
                src={initialImage.url}
                alt="preview-image"
                className="rounded-md object-cover absolute inset-0 z-10 w-full h-full"
                width={1920}
                height={1080}
              />
              <Button
                type="button"
                size="icon"
                variant="destructive"
                className="absolute top-2 right-2 z-30"
                onClick={onDelete}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </>
          )}
        </AspectRatio>
      </div>
    </div>
  );
};
