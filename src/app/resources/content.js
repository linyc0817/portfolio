import { InlineCode } from "@/once-ui/components";
import { getImagePath } from "@/app/utils/getImagePath";

const person = {
  firstName: "Yen-Chun",
  lastName: "Lin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Engineer",
  avatar: getImagePath('/images/avatar.jpg'),
  location: "Asia/Taipei", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/linyc0817",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/linyc-tw/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:f0922571727@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend engineer with human-centered mindset</>,
  subline: (
    <>
      I'm Yen-Chun, a CS Master student graduated from <InlineCode>NYCU</InlineCode>. Also a frontend engineer who 
      <br /> bridges design and technology to craft intuitive, performant, and user-focused web experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yen-Chun is a frontend engineer with a background in Human-Computer Interaction. With a passion for
        turning user needs into elegant and intuitive web designs. His experiences span web development, 
        user interviews, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TSMC",
        timeframe: "July 2022 - Sept 2022",
        role: "IT Intern",
        achievements: [
          <>
            Refactored internal React website improving maintainability and reducing UI defects during updates.
          </>,
          <>
            Leveraged Mock Service Worker (MSW) to simulate API endpoints for frontend testing. 
          </>,
          <>
            Applied RxJS Observables to manage asynchronous data streams and event handling. 
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "NYCU DAC",
        timeframe: "2019 – 2024 ",
        role: "Frontend Engineer",
        achievements: [
          <>
            Built and maintained the Department of Applied Chemistry website (dac.nycu.edu.tw), 
            serving 3~4K monthly visitors and ~20GB monthly traffic (SimilarWeb & AWS CloudFront analytics).
          </>,
          <>
            Created custom WordPress Gutenberg blocks, enabling non-technical staff to manage content efficiently.
          </>,
          <>
            Delivered responsive, accessible UI with Vue and Tailwind CSS, ensuring seamless display across devices.
          </>,
        ],
        images: [
          {
            src: getImagePath("/images/projects/project-02/cover-01.png"),
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "National Yang Ming Chiao Tung University",
        description: <>Master, Institute of Multimedia Engineering.</>,
      },
      {
        name: "National Chiao Tung University",
        description: <>Bachelor, Studied Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Vue.js / React.js",
        description: <>Building RWD websites with Vue.js / React.js and Tailwind CSS.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: getImagePath("/images/projects/project-02/cover-01.png"),
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: getImagePath("/images/projects/project-03/cover-01.png"),
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: getImagePath("/images/projects/project-03/cover-02.png"),
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: getImagePath("/images/projects/project-03/cover-03.jpeg"),
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: <>Able to prototype in Figma to speed up the development process.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: getImagePath("/images/projects/project-03/figma.png"),
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: getImagePath("/images/gallery/img-01.jpg"),
      alt: "image",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/img-02.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-03.jpg"),
      alt: "image",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/img-04.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-05.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-06.jpg"),
      alt: "image",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/img-07.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-08.jpg"),
      alt: "image",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/img-09.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-10.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-11.jpg"),
      alt: "image",
      orientation: "vertical",
    },
    {
      src: getImagePath("/images/gallery/img-12.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-13.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: getImagePath("/images/gallery/img-14.jpg"),
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
