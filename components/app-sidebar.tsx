import * as React from "react"
import { Home, Trophy, Users, Settings, BookOpen, Target, LogOut, Zap, GraduationCap } from "lucide-react"
import Image from 'next/image'
import { PiArticleMediumFill } from "react-icons/pi";
import { IoCodeSlashSharp, IoCreate } from "react-icons/io5";
import { FaLaptopCode, FaTwitter, FaLinkedin, FaGithub, FaMedium, FaYoutube } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      items: [
        {
          title: "Test Templates",
          url: "/home",
          icon: Home,
          isActive: true,
        },
        {
          title: "Challenges",
          url: "/challenges",
          icon: IoCodeSlashSharp,
        },
        {
          title: "Discuss",
          url: "/discuss",
          icon: PiArticleMediumFill,
        },
        {
          title: "Create Interview",
          url: "/create-interview",
          icon: FaLaptopCode,
        },
        {
          title: "Mentorship",
          url: "/mentorship",
          icon: GraduationCap,
        },
        {
          title: "Logout",
          url: "/logout",
          icon: RiLogoutCircleRLine,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="bg-black border-r border-[#191919] w-60" style={{ width: '240px', minWidth: '240px' }}>
      <SidebarHeader className="bg-black">
        <div className="flex items-center justify-center px-4 py-2">
          <Image
            src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo2.png"
            alt="MockRound.AI Logo"
            width={120}
            height={40}
            style={{ width: 'auto', height: 'auto' }}
            className="object-contain"
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-black">
        {data.navMain.map((section, index) => (
          <SidebarGroup key={index} className="bg-black">
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3 mt-8">
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={item.isActive} 
                        className="text-white hover:bg-gray-800 text-lg py-3"
                        onClick={item.title === "Logout" ? () => {
                          localStorage.clear();
                          sessionStorage.clear();
                          document.cookie.split(";").forEach(function(c) { 
                            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
                          });
                          alert('Successfully logged out!');
                          window.location.href = '/login';
                        } : undefined}
                      >
                      <a href={item.url} className="flex items-center gap-3">
                        <item.icon className="w-6 h-6" />
                        <span className="text-lg">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        
        <div className="p-2 mt-auto">
          <div className="w-full h-40 rounded-xl overflow-hidden mb-3">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/F3g2kD-yxOg?si=97ek8i18kXzaWL8T&autoplay=1&mute=1&loop=1&playlist=F3g2kD-yxOg&controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
          
          <div className="text-center mb-2">
            <span className="text-gray-400 text-sm">Socials</span>
            <hr className="border-gray-600 mt-1" />
          </div>
          <div className="flex justify-center gap-3">
            <a href="https://x.com/Vsion09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shivam-kumar-321810324/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/shivamshrma09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://medium.com/@vsion09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaMedium className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@shivamsharmadev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
