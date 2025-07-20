"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export function MovingBorderDemo({text}) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-6">
          {text}
        </h6>
      </Button>
    </div>
  );
}
