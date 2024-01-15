"use client";
import ThemeSwitcher from "./components/ThemeSwitcher";
import {
  Tabs,
  Tab,
  Image,
  Card,
  CardFooter,
  Button,
  CardHeader,
} from "@nextui-org/react";
import { Icons } from "./components/Icons";

export default function Home() {
  return (
    <main className="w-full min-h-screen dark:bg-gray-900 bg-gray-300">
      <div className="flex justify-between items-start p-2">
        <div className="">
          {/* <Tabs aria-label="Options" color="primary" variant="bordered">
            <Tab
              key="research"
              title={
                <div className="flex items-center space-x-2">
                  <Icons />
                  <span>RESEARCH</span>
                </div>
              }
            />
            <Tab
              key="publication"
              title={
                <div className="flex items-center space-x-2">
                  <Icons />
                  <span>PUBLICATION</span>
                </div>
              }
            />
            <Tab
              key="course"
              title={
                <div className="flex items-center space-x-2">
                  <Icons />
                  <span>COURSE</span>
                </div>
              }
            />
            <Tab
              key="resources"
              title={
                <div className="flex items-center space-x-2">
                  <Icons />
                  <span>RESOURCES</span>
                </div>
              }
            />
          </Tabs> */}
        </div>
        <div className="">
          
        </div>
      </div>
      <div className="w-full grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 p-4">
        <div className=" row-span-3 col-span-2">
          <Card isFooterBlurred radius="lg" className="border-none w-full">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className=" ">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
