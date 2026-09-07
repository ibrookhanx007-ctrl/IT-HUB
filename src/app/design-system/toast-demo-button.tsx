"use client";
// Needs an onClick handler to fire the sonner toast() call.

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

function ToastDemoButton() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast.success("Message sent", {
          description: "We'll get back to you within one business day.",
        })
      }
    >
      Trigger toast
    </Button>
  );
}

export { ToastDemoButton };
