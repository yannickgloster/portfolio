import { Button } from "@/components/ui/button";
import { House } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center"
      style={{
        backgroundImage: "url(/overlay.png), url(/howth.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center space-y-6">
        <p className="text-8xl font-bold text-white tracking-tight">404</p>
        <p className="text-xl text-white/80">
          This page doesn&apos;t exist.
        </p>
        <div>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <Link href="/">
              <House className="mr-2 h-5 w-5" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
