import { Button } from "@/components/ui/button";
import {
  GithubLogo,
  LinkedinLogo,
  FilePdf,
  Book,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center"
      style={{
        backgroundImage: "url(/overlay.png), url(/howth.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-white">Yannick Gloster</h1>

        <div className="grid grid-cols-2 gap-4">
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <a
              href="/yannickgloster_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilePdf className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>

          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <Link href="/thoughts">
              <Book className="mr-2 h-5 w-5" />
              Thoughts
            </Link>
          </Button>

          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <a
              href="https://www.linkedin.com/in/yannickgloster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <a
              href="https://github.com/yannickgloster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
