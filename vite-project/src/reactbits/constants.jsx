// Import project images
import accessoriesImg from '../assets/projects/accessories.jpg';
import authSystemImg from '../assets/projects/auth-system.jpg';
import blazorAppImg from '../assets/projects/blazor-app.jpg';
import gameEngineImg from '../assets/projects/game-engine.jpg';
import wordpressThemeImg from '../assets/projects/wordpress-theme.jpg';
import elearningImg from '../assets/projects/elearning.jpg';

// Import logos
import csharpLogo from '../assets/logos/csharp.svg';
import dotnetLogo from '../assets/logos/dotnet.svg';
import efcoreLogo from '../assets/logos/efcore.png';
import tailwindLogo from '../assets/logos/tailwindcss.svg';
import auth0Logo from '../assets/logos/auth0.svg';
import reactLogo from '../assets/logos/react.svg';
import sqliteLogo from '../assets/logos/sqlite.svg';
import blazorLogo from '../assets/logos/blazor.svg';
import dotnetcoreLogo from '../assets/logos/dotnetcore.svg';
import gitLogo from '../assets/logos/git.svg';
import microsoftLogo from '../assets/logos/microsoft.svg';
import wordpressLogo from '../assets/logos/wordpress.svg';
import html5Logo from '../assets/logos/html5.svg';
import css3Logo from '../assets/logos/css3.svg';
import vitejsLogo from '../assets/logos/vitejs.svg';
import azureLogo from '../assets/logos/azure.svg';
import stripeLogo from '../assets/logos/stripe.svg';

export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: accessoriesImg,
    tags: [
      {
        id: 1,
        name: "C#",
        path: csharpLogo,
      },
      {
        id: 2,
        name: ".Net",
        path: dotnetLogo,
      },
      {
        id: 3,
        name: "Ef Core",
        path: efcoreLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindLogo,
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: authSystemImg,
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: auth0Logo,
      },
      {
        id: 2,
        name: "React",
        path: reactLogo,
      },
      {
        id: 3,
        name: "SQLite",
        path: sqliteLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindLogo,
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: blazorAppImg,
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: blazorLogo,
      },
      {
        id: 2,
        name: ".NET Core",
        path: dotnetcoreLogo,
      },
      {
        id: 3,
        name: "SQLite",
        path: sqliteLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindLogo,
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: gameEngineImg,
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/src/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: csharpLogo,
      },
      {
        id: 3,
        name: "Git",
        path: gitLogo,
      },
      {
        id: 4,
        name: "Microsoft",
        path: microsoftLogo,
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: wordpressThemeImg,
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: wordpressLogo,
      },
      {
        id: 2,
        name: "HTML5",
        path: html5Logo,
      },
      {
        id: 3,
        name: "CSS3",
        path: css3Logo,
      },
      {
        id: 4,
        name: "Vite.js",
        path: vitejsLogo,
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: elearningImg,
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: blazorLogo,
      },
      {
        id: 2,
        name: "Azure",
        path: azureLogo,
      },
      {
        id: 3,
        name: "Stripe",
        path: stripeLogo,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: tailwindLogo,
      },
    ],
  },
];