import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tagline?: string;
  image: string;
  codeUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  tagline = "Deployed",
  image,
  codeUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-transparent border-zinc-800 text-white rounded-2xl shadow-md shadow-[#3d3d3d2a] overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="px-4 md:p-4">
        <div className="relative aspect-video border-0 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 duration-300 ease-in-out"
            // sizes="(max-width: 576px) 100vw"
          />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4 py-3">

        <div>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <span className="text-sm text-zinc-400">{tagline}</span>
        </div>
        <div className="flex gap-2">
          {codeUrl && (
            <Button
              asChild
              variant="outline"
              size="icon"
              className="p-6 bg-zinc-800 border-zinc-700 hover:bg-zinc-600 text-zinc-300"
            >
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Code2 className="h-6 w-6" />
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              asChild
              size="icon"
              className="p-6 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="text-xl" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
