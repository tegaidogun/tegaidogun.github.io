"use client"

import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaUnity,
  FaRust,
  FaJs,
  FaDocker,
  FaJava,
  FaMarkdown,
  FaLinux,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiSocketdotio,
  SiD3Dotjs,
  SiPrisma,
  SiMysql,
  SiTailwindcss,
  SiStripe,
  SiCplusplus,
  SiC,
  SiOpengl,
  SiJupyter,
  SiSpringboot,
  SiCloudflare,
  SiR,
  SiDotnet,
  SiShadcnui,
  SiDjango,
  SiRedis,
  SiVercel,
  SiFlask,
  SiSqlite,
  SiSupabase,
  SiFirebase,
} from "react-icons/si"
import { VscTerminalCmd } from "react-icons/vsc"
import { Component, Github, GitBranch } from "lucide-react"
import { DiGnu } from "react-icons/di";

export const getTechIcon = (tech: string, size = 24) => {
  const techLower = tech.toLowerCase()

  switch (techLower) {
    case "java":
      return <FaJava size={size} color="#f89820" />
    case "spring boot":
      return <SiSpringboot size={size} color="#6DB33F" />
    case "cloudflare":
      return <SiCloudflare size={size} color="#F38020" />
    case "shell":
      return <VscTerminalCmd size={size} />
    case "c#":
      return <SiDotnet size={size} color="#512BD4" />
    case "markdown":
      return <FaMarkdown size={size} />
    case "react":
      return <FaReact size={size} color="#61DAFB" />
    case "next.js":
    case "nextjs":
      return <SiNextdotjs size={size} />
    case "node.js":
    case "nodejs":
      return <FaNodeJs size={size} color="#339933" />
    case "typescript":
      return <SiTypescript size={size} color="#3178C6" />
    case "mongodb":
      return <SiMongodb size={size} color="#47A248" />
    case "postgresql":
      return <SiPostgresql size={size} color="#4169E1" />
    case "express":
    case "express.js":
      return <SiExpress size={size} />
    case "socket.io":
      return <SiSocketdotio size={size} />
    case "d3.js":
      return <SiD3Dotjs size={size} color="#F9A03C" />
    case "prisma":
      return <SiPrisma size={size} />
    case "mysql":
    case "sql":
      return <SiMysql size={size} color="#4479A1" />
    case "tailwind css":
    case "tailwindcss":
      return <SiTailwindcss size={size} color="#06B6D4" />
    case "stripe":
      return <SiStripe size={size} color="#635BFF" />
    case "unity":
      return <FaUnity size={size} />
    case "c++":
    case "cplusplus":
      return <SiCplusplus size={size} color="#00599C" />
    case "c":
      return <SiC size={size} color="#A8B9CC" />
    case "opengl":
      return <SiOpengl size={size} />
    case "python":
      return <FaPython size={size} color="#3776AB" />
    case "rust":
      return <FaRust size={size} />
    case "javascript":
    case "js":
      return <FaJs size={size} color="#F7DF1E" />
    case "css":
      return <FaCss3Alt size={size} color="#1572B6" />
    case "html":
    case "html5":
      return <FaHtml5 size={size} color="#E34F26" />
    case "jupyter":
      return <SiJupyter size={size} color="#F37626" />
    case "github":
      return <Github size={size} />
    case "git":
      return <GitBranch size={size} />
    case "docker":
      return <FaDocker size={size} color="#2496ED" />
    case "linux":
    case "linux administration":
      return <FaLinux size={size} />
    case "r":
      return <SiR size={size} color="#276DC3" />
    case ".net":
      return <SiDotnet size={size} color="#512BD4" />
    case "makefile":
      return <DiGnu size={size} />
    case "shadcn/ui":
      return <SiShadcnui size={size} />
    case "django":
      return <SiDjango size={size} color="#092E20" />
    case "redis":
      return <SiRedis size={size} color="#DC382D" />
    case "vercel":
      return <SiVercel size={size} />
    case "flask":
      return <SiFlask size={size} color="#000" />
    case "sqlite":
      return <SiSqlite size={size} color="#003B57" />
    case "supabase":
      return <SiSupabase size={size} color="#3ECF8E" />
    case "firebase":
      return <SiFirebase size={size} color="#FFCA28" />
    default:
      return <Component size={size} />
  }
} 