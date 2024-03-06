import React from "react";
import Divider from "@/components/divider";
import { SlArrowDown } from "react-icons/sl";
import ProgressBar from "@/components/progress-bar";
import { Overpass, Radio_Canada, Yaldevi } from '@next/font/google';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

/* Fonts */
const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400', '800'],
})

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const yaldevi = Yaldevi({
  subsets: ['latin'],
  weight: ['400', '700'],
})

/* Colors for texts */
const grayText: string = '#6A6A6A';
const orangeText: string = '#FF9100';
const redText: string = '#FE7752';
const grayBackground: string = '#ECECEC';
const darkGrayText: string = '#9F9F9F';
const blueButtonBackground: string = '#6DA1D8';


export default function Homepage() {
  return (
    <div>

       {/* Header */}
      <section className={overpass.className}>
        <header className="flex absolute justify-evenly items-center py-16 w-full"> 
            <h1 className="flex absolute bottom-0 left-0 px-12 text-8xl overpass-text font-bold">
              <p style={{ color: orangeText }}>Jie Ling's</p>
              <p style={{ color: redText }} className="px-4">Mods</p>
            </h1>
          <p className="absolute bottom-0 right-0 px-12 text-4xl" style={{color: grayText}}>Matriculation Year AY22/23</p>
        </header>
      </section>

      <div className="py-32">
        <Divider />
      </div>

      {/* Main */}
      <section className={`flex flex-col absolute px-10 ${radioCanada.className}`}>

        {/* This Semester */}
        <div className="flex flex-row">
          <p className="relative -top-24 text-5xl font-extrabold">
            This Semester
          </p>
          
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex px-28 text-2xl -translate-y-[6rem] translate-x-12 rounded-3xl h-12 ${yaldevi.className}`} style={{ background: `${grayBackground}`, color: darkGrayText}}>
                <div className="flex self-center -translate-x-20 ">
                  Current Sem
                  <SlArrowDown className="self-center translate-x-40"/>
                </div>
              </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-xl">Current Semester</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xl">Year 1 Sem 1</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 1 Sem 2</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 2 Sem 1</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 2 Sem 2</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 3 Sem 1</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 3 Sem 2</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 4 Sem 1</DropdownMenuItem>
              <DropdownMenuItem className="text-xl">Year 4 Sem 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Drawer>
            <DrawerTrigger className={`text-2xl -translate-y-[6rem] px-28 mx-10 translate-x-12 rounded-3xl h-12 font-thin ${yaldevi.className}`} style= {{ background: `${blueButtonBackground}`, color: "#FFFFFF"}}>
              + Insert New Mod
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <p className="underline">Add New Module</p>
                  <p>Year</p>
                  <p>Semester</p>
                  <p>Module Code</p>
                  <p>MCs</p>
                  <p>Type</p>
                </DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

        </div>
        
        <section className="py-80">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>YEAR 1</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>YEAR 2</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>YEAR 3</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>YEAR 4</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </section>

      </section>

      {/* Requirements */}
      <section className="flex flex-col absolute justify-start right-10 rounded-3xl h-[100rem] w-[50rem] -translate-y-24" style={{ background: `${grayBackground}`}}>
        <div className={radioCanada.className}>
          <h2 className="text-5xl py-8 px-10 font-extrabold">Requirements</h2>

          <ul>
            <li className="text-light font-light px-10 text-2xl">
              <p className="text-3xl">Progress</p>

              <div className="py-4 -translate-x-0">
                <ProgressBar widthDarkGreen={55} widthLightGreen={75} />
                <p className="text-right py-16 text-xl">88 / 160 MCs Completed</p>
              </div>

            </li>

            {/* Breakdown of the entire progress */}
            <li className="text-light font-light px-10 text-2xl">
              <p className="underline">Breakdown</p>

              <ul className="flex flex-col space-y-20">

                <li className="-translate-x-0 py-6">
                  Common Curriculum (GE)
                  <ProgressBar widthDarkGreen={80} widthLightGreen={90} />
                  <p className="relative translate-y-16 text-right text-xl">32 / 40 MCs Completed</p>
                </li>
                <li className="-translate-x-0 py-6">
                  Programme Requirements
                  <ProgressBar widthDarkGreen={55} widthLightGreen={60} />
                  <p className="relative translate-y-16 text-right text-xl">44 / 80 MCs Completed</p>
                </li>
                <li className="-translate-x-0 py-6">
                  Unrestricted Electives
                  <ProgressBar widthDarkGreen={10} widthLightGreen={30} />
                  <p className="relative translate-y-16 text-right text-xl">4 / 40 MCs Completed</p>
                </li>

              </ul>
            </li>
          </ul>
        
        </div>
      </section>


    </div>
  )
  ;
}