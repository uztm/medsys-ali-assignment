import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { User2 } from "lucide-react";
import { TableInside } from "./tableInside";

export default function PatientsDoctor({ index }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          key={index}
          className="bg-card p-6 rounded-md shadow  cursor-pointer text-foreground transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-background flex-shrink-0 rounded-full border flex items-center justify-center">
              <User2 />
            </div>
            <h1>Temirov Bekzodbek</h1>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle>Patient</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-background rounded-full border flex items-center justify-center">
            <User2 />
          </div>
          <h1>Temirov Bekzodbek</h1>
        </div>

        <TableInside />
      </DialogContent>
    </Dialog>
  );
}
