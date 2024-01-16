'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Image, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
import {FacebookIcon, SunIcon} from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const menuItems = [
        "People",
        "Research",
        "Publication",
        "Course",
        "Resources",
        "Lab Seminar",
    ];
  
    return (
      <Navbar
        className="bg-white dark:bg-gray-900"
        onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand
            className="hidden sm:flex">
                <p className="text-black dark:text-white font-bold">VBLab</p>
            </NavbarBrand>
          
        </NavbarContent>
        <NavbarContent
            className="flex sm:hidden"
            justify="center">
            <NavbarBrand>
                <p className="font-bold text-inherit">VBLab</p>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
        menuItems.map((item, index) => (
        <NavbarItem key={index}>
            <Link color="foreground" href={`/${item.toLowerCase()}`}>
                {item}
            </Link>
        </NavbarItem>
        )) 
        }
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem> */}
          <NavbarItem>
          <Link href="#">
            <FacebookIcon/>
          </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }