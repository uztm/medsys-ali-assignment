"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ClipboardPlus,
  ShieldPlus,
  SquareUserRound,
  Stethoscope,
} from "lucide-react";
import clsx from "clsx";

// Lazy imports
import dynamic from "next/dynamic";

const DoctorAuth = dynamic(() => import("@/components/auth/doctor"));
const NurseAuth = dynamic(() => import("@/components/auth/nurse"));
const UserAuth = dynamic(() => import("@/components/auth/user"));

const roles = [
  { key: "doctor", icon: <Stethoscope className="w-12 h-12" /> },
  { key: "nurse", icon: <ClipboardPlus className="w-12 h-12" /> },
  { key: "user", icon: <SquareUserRound className="w-12 h-12" /> },
];

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showComponent, setShowComponent] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleRoleSelect = (role: string) => {
    setSelected(role);
    const newUrl = `${pathname}?auth=${role}`;
    router.replace(newUrl);
  };

  const handleContinue = () => {
    if (selected) {
      setShowComponent(true);
    }
  };

  const renderAuthComponent = () => {
    switch (selected) {
      case "doctor":
        return <DoctorAuth />;
      case "nurse":
        return <NurseAuth />;
      case "user":
        return <UserAuth />;
      default:
        return null;
    }
  };

  if (showComponent && selected) {
    return <div className="p-6">{renderAuthComponent()}</div>;
  }

  return (
    <div className="w-full h-[100vh] bg-background flex flex-col items-center justify-center">
      <div className="bg-card shadow border max-w-md p-6 rounded-md flex flex-col items-center justify-center transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <ShieldPlus />
          <h1 className="font-bold text-xl">Select your role</h1>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {roles.map((role) => (
            <div
              key={role.key}
              onClick={() => handleRoleSelect(role.key)}
              className={clsx(
                "w-24 h-24 cursor-pointer flex items-center justify-center rounded-md border shadow transition-all duration-300",
                selected === role.key
                  ? "bg-primary text-white scale-105"
                  : "bg-muted hover:bg-primary/10"
              )}
            >
              {role.icon}
            </div>
          ))}
        </div>

        {selected && (
          <Button onClick={handleContinue} className="mt-6 w-full cursor-pointer transition-all duration-300">
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
