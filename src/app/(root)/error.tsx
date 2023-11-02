"use client";

import { ErrorModal } from "@/components/modals/error-modal";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorModal description={error.message} retry={() => reset()} />
    </>
  );
}
