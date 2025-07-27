'use client';

import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { CodeComparison } from "@/components/magicui/code-comparison";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

export default function MagicUIPage() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen pt-56">
      <div className="flex flex-col items-center justify-center w-full relative gap-8">
        {/* Terminal */}
        <Terminal>
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
    
          <AnimatedSpan delay={1500} className="text-green-500">
            <span>✔ Preflight checks.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ Verifying framework. Found Next.js.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={2500} className="text-green-500">
            <span>✔ Validating Tailwind CSS.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ Validating import alias.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={3500} className="text-green-500">
            <span>✔ Writing components.json.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4000} className="text-green-500">
            <span>✔ Checking registry.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4500} className="text-green-500">
            <span>✔ Updating tailwind.config.ts</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={5000} className="text-green-500">
            <span>✔ Updating app/globals.css</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={5500} className="text-green-500">
            <span>✔ Installing dependencies.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>
    
          <TypingAnimation delay={6500} className="text-muted-foreground">
            Success! Project initialization completed.
          </TypingAnimation>
    
          <TypingAnimation delay={7000} className="text-muted-foreground">
            You may now add components.
          </TypingAnimation>
        </Terminal>

        {/* Hero Video Dialog */}
        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>

        {/* Animated List */}
        <div
          className="relative flex h-[500px] w-full flex-col overflow-hidden p-2"
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
    
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>

        {/* File Tree */}
        <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          <Tree
            className="overflow-hidden rounded-md bg-background p-2"
            initialSelectedId="7"
            initialExpandedItems={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
            ]}
            elements={ELEMENTS}
          >
            <Folder element="src" value="1">
              <Folder value="2" element="app">
                <File value="3">
                  <p>layout.tsx</p>
                </File>
                <File value="4">
                  <p>page.tsx</p>
                </File>
              </Folder>
              <Folder value="5" element="components">
                <Folder value="6" element="ui">
                  <File value="7">
                    <p>button.tsx</p>
                  </File>
                </Folder>
                <File value="8">
                  <p>header.tsx</p>
                </File>
                <File value="9">
                  <p>footer.tsx</p>
                </File>
              </Folder>
              <Folder value="10" element="lib">
                <File value="11">
                  <p>utils.ts</p>
                </File>
              </Folder>
            </Folder>
          </Tree>
        </div>

        {/* Code Comparison */}
        <CodeComparison
          beforeCode={beforeCode}
          afterCode={afterCode}
          language="typescript"
          filename="middleware.ts"
          lightTheme="github-light"
          darkTheme="github-dark"
          highlightColor="rgba(101, 117, 133, 0.16)"
        />

        {/* Script Copy Button */}
        <ScriptCopyBtn
          showMultiplePackageOptions={true}
          codeLanguage="shell"
          lightTheme="nord"
          darkTheme="vitesse-dark"
          commandMap={customCommandMap}
        />

        {/* Magic Card */}
        <Card className="p-0 max-w-sm w-full shadow-none border-none">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0"
          >
            <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
              <Button className="w-full">Sign In</Button>
            </CardFooter>
          </MagicCard>
        </Card>

        {/* Rainbow Button */}
        <RainbowButton>Get Unlimited Access</RainbowButton>

        {/* Shimmer Button */}
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Shimmer Button
          </span>
        </ShimmerButton>

        {/* Animated Subscribe Button */}
        <AnimatedSubscribeButton className="w-36">
          <span className="group inline-flex items-center">
            Follow
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            Subscribed
          </span>
        </AnimatedSubscribeButton>
      </div>
    </div>
  );
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
 
let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
 
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];
 
notifications = Array.from({ length: 10 }, () => notifications).flat();
 
const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

const beforeCode = `import { NextRequest } from 'next/server';
 
export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token'); 
 
  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);
 
    if(!user) {
      return NextResponse.redirect('/login');
    }
  }
 
  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);
 
    if(!user) {
      return NextResponse.redirect('/login');
    }
 
    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug); // [!code highlight]
 
    if(!team) { // [!code highlight]
      return NextResponse.redirect('/'); // [!code highlight]
    } // [!code highlight]
  } // [!code highlight]
 
  return NextResponse.next(); // [!code highlight]
}
 
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'], // [!code highlight]
};`;
 
const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
import { team } from '@/app/(team)/team/_middleware';
 
const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};
 
export const middleware = createMiddleware(middlewares); // [!code focus]
 
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`;

const customCommandMap = {
  npm: "npm run shadcn add button",
  yarn: "yarn shadcn add button",
  pnpm: "pnpm dlx shadcn@latest add button",
  bun: "bun x shadcn@latest add button",
};