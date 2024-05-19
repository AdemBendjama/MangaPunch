import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-5xl font-bold text-foreground mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        The page you&apos;re looking for could not be found.
      </p>
      <Link href="/">
        <Button className="text-base">return to homepage</Button>
      </Link>
    </div>
  );
}
