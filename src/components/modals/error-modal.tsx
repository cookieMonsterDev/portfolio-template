"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AlertModalProps {
  description?: string;
  retry: () => void;
}

export const ErrorModal = ({ retry, description }: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const closeTab = () => {
    window.close();
  };

  return (
    <Dialog open={true} onOpenChange={closeTab}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Error:</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="pt-6 space-x-2 flex items-center justify-center w-full">
          <Button onClick={() => retry()}>Retry</Button>
          <Button variant="destructive" onClick={closeTab}>
            Close tab
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
