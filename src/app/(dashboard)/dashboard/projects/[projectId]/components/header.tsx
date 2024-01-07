"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useToast } from "@/components/ui/use-toast";
import { useAlert } from "@/hooks/use-alert";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";

type HeaderProps = {
  projectId: string;
};

const Header: React.FC<HeaderProps> = ({ projectId }) => {
  const { onOpen } = useAlert();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/projects/${projectId}`);
      router.refresh();
      router.push("/dashboard/projects");
    } catch (error: any) {
      toast({
        title: "Project is not deleted!",
        description: "Something went wrong during deleting project.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <Heading title="Project" description="Manage your project data here!" />
      <Button
        disabled={loading}
        variant="destructive"
        size="icon"
        onClick={() =>
          onOpen({
            title: "The action can not be undone!",
            description: "Are you sure that want to delete project?",
            action: onDelete,
          })
        }
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default memo(Header);
