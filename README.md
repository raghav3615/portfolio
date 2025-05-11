# Mini Portfolio

This is a personal portfolio website designed with a focus on minimalism, elegance, and a pleasing user experience. It showcases projects, skills, experience, and education in a clean and accessible format.

## Features

*   **Minimalist Design:** Clean and uncluttered interface to keep the focus on the content.
*   **Elegant UI:** Aesthetically pleasing design with attention to typography and spacing.
*   **Dark & Light Themes:** Seamlessly switch between dark and light modes for optimal viewing comfort, powered by `next-themes`.
*   **Responsive:** Adapts to different screen sizes for a great experience on desktop, tablet, and mobile.
*   **Built with Modern Technologies:**
    *   [Next.js](https://nextjs.org/) for a fast and optimized React framework.
    *   [React](https://react.dev/) for building the user interface.
    *   [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
    *   [TypeScript](https://www.typescriptlang.org/) for type safety.
*   **Sections:**
    *   About Me
    *   Experience
    *   Featured Projects (with links to GitHub)
    *   Education
    *   Skills
    *   Contact/Social Links (GitHub, LinkedIn, Twitter, Email)
*   **Easy Navigation:** A persistent bottom navigation bar provides quick access to social links and theme toggling.

## Getting Started

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd mini-cv 
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   │   ├── page.tsx    # Main page component
│   │   └── ...
│   ├── components/     # Reusable UI components (if any)
│   └── lib/            # Utility functions or libraries (if any)
├── tailwind.config.js  # Tailwind CSS configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## Key Files

*   [`src/app/page.tsx`](src/app/page.tsx): The main page component containing the portfolio content.
*   [`tailwind.config.js`](tailwind.config.js): Configuration for Tailwind CSS.
*   [`package.json`](package.json): Lists project dependencies and scripts.

This portfolio is built using Next.js and React, styled with Tailwind CSS. The main content is located in [`src/app/page.tsx`](src/app/page.tsx).