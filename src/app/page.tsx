import Image from "next/image";
import icon from "./icon-128.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogo, XLogo, BlueSkyLogo, RedditLogo, DiscordLogo } from "@/components/ui/link-logo";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section: vertically centered */}
      <div className="flex scale-120  flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="flex items-center justify-center mb-10 text-6xl font-semibold space-x-2">
          <Image src={icon} alt="Sol" width={64} height={64} />
          <h1>Sol</h1>
        </div>

        <p className="text-5xl font-semibold">
          <span className="rainbow-fade-in ch">Chat with your tabs.</span>
        </p>

        <Button asChild variant="outline" className="mt-10 scale-130">
          <Link href="https://github.com/solbrowse/extension">Download</Link>
        </Button>

      { /* fill with #2e2e2e */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <Link href="https://github.com/solbrowse">
            <GitHubLogo />
          </Link>
          <Link href="https://x.com/solbrowse">
            <XLogo />
          </Link>
          <Link href="https://bsky.app/profile/solbrowse.bsky.social">
            <BlueSkyLogo />
          </Link>
          <Link href="hhttps://www.reddit.com/r/solbrowse/">
            <RedditLogo />
          </Link>
          <Link href="https://discord.com/invite/4qQzJCbagq">
            <DiscordLogo />
          </Link>
          

        </div>
      </div>

      {/* Video Section: scrolls below ok */}
      <div className="w-full  scale-130 max-w-4xl mb-40 px-4 rounded-xl overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-md shadow-xl"
        >

          <source src="/showcase-fixed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
