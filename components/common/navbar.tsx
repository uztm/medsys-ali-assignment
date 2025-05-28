"use client";
import { Bell, LogOut, SquareActivity } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import NotificationsDialog from "./notifications";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 h-[100px] bg-card shadow border flex items-center justify-between ">
      <div className="mx-auto px-4 container flex items-center">
        <div className="flex items-center gap-2">
          <SquareActivity />
          <span className=" font-bold text-xl">MEDtech</span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <NotificationsDialog />

          <Button size={"icon"} className=" cursor-pointer">
            <LogOut />
          </Button>
        </div>
      </div>
    </div>
  );
}
