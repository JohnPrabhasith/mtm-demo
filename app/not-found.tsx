import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="yellow-stitch inline-block text-left text-4xl font-extrabold tracking-tight">
        That look isn&apos;t on the floor.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page may have moved. Head back to the men&apos;s or kids&apos; edit.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button variant="highlight" render={<Link href="/" />} nativeButton={false}>
          Home
        </Button>
        <Button variant="outline" render={<Link href="/men" />} nativeButton={false}>
          Shop men
        </Button>
      </div>
    </div>
  );
}
