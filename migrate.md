# Developer Migration Document: POP Studying Platform

This document contains all source code and configuration required to create an exact replica of the platform.
**Note:** All actual study content (markdown/html files) and images have been intentionally excluded as per requirements.

## Architecture Overview
- **Frontend:** React 18, React Router, Tailwind CSS, Framer Motion.
- **Authentication:** Clerk.
- **Database:** Supabase (currently minimal, explicitly storing `users` based on `SyncUserToSupabase.js`).
- **Key Features:** Flashcards, Learning Paths, Topic Quizzes, Physics Rush, Math Dashboard, etc.

## Required Environment Variables (`.env`)
To replicate this project, you will need to set up the following environment variables (infer from `.env.example` if available, otherwise see below):
```
REACT_APP_CLERK_PUBLISHABLE_KEY=
REACT_APP_SUPABASE_URL=
REACT_APP_SUPABASE_ANON_KEY=
```

## Setup Instructions
1. Initialize a new React project or clone this structure.
2. Create `package.json` and run `npm install`.
3. Recreate the file structure in `src/` and paste the code from below.
4. Setup a Supabase project and create a `users` table (columns inferred from `SyncUserToSupabase.js` snippet).
5. Setup a Clerk project and add the publishable key.
6. Run `npm start`.

---

### File: `./B17`

```text

```

### File: `./B16`

```text

```

### File: `./tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      poppins: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7B2FF2',
        },
        accent: '#F357A8',
        dark: {
          DEFAULT: '#0F0F1E',
          surface: '#1A1A2E',
          tertiary: '#252538',
        },
        coral: '#FF6B6B',
        teal: '#4ECDC4',
        sky: '#45B7D1',
        sage: '#96CEB4',
        gold: '#FFD93D',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #0F0F1E 0%, #1A1A2E 100%)',
      },
    },
  },
  plugins: [],
}
```

### File: `./netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "build"
```

### File: `./CONTEXT.md`

```markdown
# POP Studying – Project Context

## Project Overview

**Project Name:** POP Studying

**Purpose:** An all-in-one educational platform for secondary students at ANS, a bilingual Thai-UK curriculum school in Bangkok, Thailand, to prepare for IGCSE and A-level exams.

**Target Audience:** Year 9–13 students (~100 active users), primarily studying mathematics and science.

**Description:** POP Studying provides structured "Classes" (course-like modules), subject-specific resources (e.g., equation sheets for math, periodic table for chemistry), mini mock exams using past papers, and detailed feedback with grades based on the latest exam boundaries. The platform is student-led and funded, prioritizing cost-effectiveness and community collaboration.

## Design System

### Color Palette

#### Primary Colors
- **Primary:** `#4a148c` (Deep Purple)
- **Primary Light:** `#7b1fa2` (Lighter Purple)
- **Accent:** `#e1bee7` (Light Purple)

#### Background & Surface
- **Background Dark:** `#121212` (Almost Black)
- **Surface:** `#1e1e1e` (Dark Gray)
- **Background Light:** `#ffffff` (White - for light mode if needed)

#### Text
- **Text Light:** `#f5f5f5` (Off White)
- **Text Dark:** `#212121` (Near Black)
- **Text Muted:** `rgba(255, 255, 255, 0.6)` (60% White)

#### Status Colors
- **Success:** `#4caf50` (Green)
- **Warning:** `#ff9800` (Amber)
- **Error:** `#cf6679` (Light Red)
- **Info:** `#2196f3` (Blue)

### Typography
- **Primary Font:** 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- **Base Font Size:** 16px
- **Line Height:** 1.6
- **Font Weights:** 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Spacing
- **Base Unit:** 1rem (16px)
- **Spacing Scale:** 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem

### Border Radius
- **Small:** 4px
- **Medium:** 8px
- **Large:** 16px
- **Pill:** 9999px

### Shadows
- **Default:** `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Elevated:** `0 8px 16px rgba(0, 0, 0, 0.15)`
- **Floating:** `0 12px 24px rgba(0, 0, 0, 0.2)`

### Breakpoints
- **Mobile:** 0px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px and up

### Animation
- **Duration:** 200ms (fast), 300ms (normal), 500ms (slow)
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)

---

## Business Plan Summary

### Executive Summary

POP Studying is a student-developed platform designed to enhance exam preparation for ANS students through interactive classes, tailored resources, and mock exams. Built with a tight budget, it aims to break even while serving ~100 active users, focusing on math and science for IGCSE and A-levels.

### Aims

- Achieve financial sustainability by covering operational costs.
- Deliver a structured, student-centric learning experience via the "Classes" feature.

### Objectives

- Provide subject-specific classes organized by topics and sub-topics.
- Supply tailored resources (e.g., equation sheets, periodic tables) for study and revision.
- Offer mini mock exams with past papers, graded using current boundaries.
- Deliver detailed feedback on answers and improvement strategies.
- Ensure accessibility and usability for ~100 students.

### Target Market

ANS secondary students (Year 9–13), focusing on math and science, seeking exam-focused resources and collaborative tools.

---

## Product Details

- **Classes:** Course-like modules per subject (e.g., Math, Chemistry), split into topics (e.g., Algebra) and sub-topics (e.g., Quadratic Equations).
- **Difficulty Levels:** Three-tiered difficulty system to organize content and provide clear learning progression:
  - **Foundation Level:** Fundamental concepts and basic skills (e.g., in Mathematics: Grade 1-3 content covering numbers, basic operations, shapes, and introduction to fractions).
  - **Intermediate Level:** More complex applications building on foundations (e.g., in Mathematics: Grade 4-6 content covering decimals, percentages, basic algebra, and data handling).
  - **Advanced Level:** Complex concepts for exam preparation (e.g., in Mathematics: Grade 7-9 content covering trigonometry, iteration, probability, and other IGCSE/A-Level topics).
- **Resources:** Subject-specific materials (e.g., math equation sheets, chemistry periodic table), accessible during study and exams.
- **Mini Mock Exams:** Topic-based assessments from past papers, timed to simulate exams.
- **Grading & Feedback:** Grades based on latest IGCSE/A-level boundaries, with text or video explanations and improvement tips.
- **Collaboration:** User-generated notes via rich text editor, fostering peer sharing.
- **Progress Tracking:** Monitor topic completion and exam performance across difficulty levels.

---

## Financial Plan

- **Development Costs:** $10–515 one-time (domain: $10–15, initial storage: ~$10, optional mentor: $0–500).
- **Maintenance Costs:** $15–22/month (hosting: $11, storage: $3–10, domain: ~$1).
- **Revenue Strategy:** Donations ($1–2/month from 10–20 users), optional freemium features (e.g., analytics for $1–2/month).
- **Assumptions:** ~100 GB storage (1 GB/user), 100–200 GB bandwidth/month, database <500 MB for ~100 users.

---

## Tech Stack

The tech stack is designed for cost-effectiveness, scalability, and ease of use for student developers, supporting ~100 active users.

### Frontend

- **Framework:** React.js
    - **Purpose:** Builds dynamic, responsive UI for class navigation, resource access, mock exams, and feedback display.
    - **Why Chosen:** Open-source, beginner-friendly, and widely supported. Enables reusable components for features like topic explorers.
    - **Tools:** Vite or Create React App for setup, React Router for navigation.
    - **Cost:** $0 (open-source).
    - **Implementation:** Use functional components and hooks for state management (e.g., `useState`, `useEffect`). Integrate with Clerk for auth UI and Supabase for data fetching.

### Backend

- **Database:** Supabase (PostgreSQL)
    - **Purpose:** Stores class structures, user progress, mock exam results, and metadata (e.g., resource URLs).
    - **Why Chosen:** Free tier (500 MB, 100,000 MAUs) supports ~100 users. Open-source PostgreSQL is robust and scales well. Simplifies backend with client libraries.
    - **Cost:** $0 (free tier, sufficient for ~5,000 rows of user/class data). Scales to $7/month for 1 GB if needed.
    - **Implementation:** Tables for users (linked to Clerk IDs), classes, topics, resources, exams, and feedback. Use Supabase JS client for CRUD operations.

### User Authentication

- **Service:** Clerk
    - **Purpose:** Manages secure user logins, sign-ups, and session handling with pre-built UI components.
    - **Why Chosen:** Polished auth UI saves frontend effort. Free tier (10,000 MAUs) covers user base. Integrates with Supabase via user ID mapping.
    - **Cost:** $0 (free tier). Pro tier ($25/month) unlikely needed.
    - **Implementation:** Use Clerk’s React SDK for login/signup flows. Store Clerk `user_id` in Supabase users table for data linking (e.g., class enrollment).

### Storage

- **Service:** Bunny.net
    - **Purpose:** Hosts PDFs (e.g., equation sheets, past papers), images, and limited videos (e.g., feedback snippets).
    - **Why Chosen:** Simple API, predictable pricing ($0.01/GB storage, $0.01/GB bandwidth), and CDN for fast delivery. Preferred over AWS S3 for ease and cost clarity.
    - **Cost:** ~$3–10/month for 100 GB storage + 100–200 GB bandwidth. ~$1 minimum charge.
    - **Implementation:** Create storage zones for resources, integrate with Node.js for uploads, and store URLs in Supabase. Use YouTube for video embeds to minimize bandwidth costs.
- **Video Hosting:** YouTube
    - **Purpose:** Embeds feedback videos and explanations to offload bandwidth.
    - **Cost:** $0 (free embeds).

### Collaboration

- **Tool:** Tiptap
    - **Purpose:** Enables rich text editing for user-generated notes within classes.
    - **Why Chosen:** Free core library supports formatted notes (text, images). React-compatible and lightweight.
    - **Cost:** $0 (open-source, no pro extensions needed).
    - **Implementation:** Integrate Tiptap editor in React for note creation/sharing. Store note content in Supabase for persistence.

### Hosting

- **Platform:** Cloudways with DigitalOcean
    - **Purpose:** Deploys React frontend, Node.js APIs (if needed), and Supabase PostgreSQL instance.
    - **Why Chosen:** Managed hosting ($11/month, 1 GB RAM, 25 GB storage, 1 TB bandwidth) simplifies setup for students. Supports full stack and scales for ~100 users.
    - **Cost:** $11/month (base plan). Bunny.net CDN reduces server load.
    - **Implementation:** Deploy React build via Cloudways’ Node.js app, configure SSL, and link domain. Host Supabase locally or use their cloud free tier.

---

## React Component Structure

```plaintext
src/
├── components/
│   ├── Auth/                    # Clerk auth components
│   │   ├── Login.js             # Login UI with Clerk
│   │   ├── Signup.js            # Signup UI with Clerk
│   ├── Class/                   # Class-related components
│   │   ├── ClassList.js         # Displays available classes
│   │   ├── ClassDetail.js       # Shows topics/sub-topics in a class
│   │   ├── TopicView.js         # Topic resources (e.g., equation sheets)
│   ├── Exam/                    # Mock exam components
│   │   ├── MockExam.js          # Timed exam interface with past papers
│   │   ├── FeedbackView.js      # Grades and feedback display
│   ├── Notes/                   # Collaboration components
│   │   ├── NoteEditor.js        # Tiptap editor for user notes
│   │   ├── NoteList.js          # Shared notes for a topic
│   ├── Layout/                  # Reusable UI components
│   │   ├── Navbar.js            # Navigation with Clerk user status
│   │   ├── Footer.js            # Basic footer
│   ├── Resource/                # Resource display
│   │   ├── ResourceViewer.js    # Renders PDFs/images from Bunny.net
├── pages/
│   ├── Home.js                  # Landing page with CTA
│   ├── Dashboard.js             # User dashboard for classes
│   ├── ClassPage.js             # Specific class view
│   ├── ExamPage.js              # Mock exam interface
├── hooks/
│   ├── useAuth.js               # Clerk auth state management
│   ├── useSupabase.js           # Supabase data fetching (classes, resources)
├── utils/
│   ├── api.js                   # Supabase/Bunny.net API calls
│   ├── constants.js             # Config (e.g., Bunny.net URLs)
├── App.js                       # Main app with React Router
├── index.js                     # Entry point
├── styles/
│   ├── globals.css              # Global styles (e.g., #79437D palette)
```

This structure organizes the platform into clear, functional areas for authentication, class and exam management, collaboration, and resource delivery, supporting modular and scalable development.

---

## Additional Notes

- **Integration:**
    - Clerk user IDs map to Supabase users table for class access and progress tracking.
    - Bunny.net URLs stored in Supabase resources table for quick retrieval in classes.
    - Tiptap notes saved as JSON in Supabase for collaborative editing.
- **Development:**
    - Student-led with free tools (VS Code, GitHub). Use tutorials (e.g., freeCodeCamp) for React/Supabase/Clerk.
    - Estimated 3–6 months part-time (2–5 students, 10 hours/week). Optional mentor ($200–500) if needed.
- **Maintenance:**
    - Monitor Bunny.net bandwidth and Supabase storage to stay in free/low-cost tiers.
    - Students handle updates (5–10 hours/week), curating feedback and resources.
- **Scalability:**
    - Stack supports growth beyond 100 users by upgrading Cloudways plan ($24/month for 2 GB RAM) or Supabase tier ($7–25/month).
    - Optimize assets (e.g., compress PDFs) to manage costs.

---

## Context for Development

This context file aligns with POP Studying’s goal of delivering a cost-effective, student-driven platform. Developers should:

- Prioritize free-tier tools (Supabase, Clerk, Tiptap, YouTube) to minimize costs.
- Use React for modular UI (e.g., class explorer, exam interface).
- Leverage Supabase for data management and Clerk for seamless auth.
- Store resources in Bunny.net, embedding YouTube videos where possible.
- Deploy on Cloudways for simplicity, ensuring fast load times for students.

For further details, refer to the business plan objectives and cost estimates. Contact the student team for specific feature priorities or UI preferences (e.g., color palette `#79437D`, `#EEBAD2`, `#D0A4CB` for landing page).

---

## Jamboard-Style Collaborative Whiteboard (Tiptap Integration)

### 1. Feature Overview

A Jamboard replica should allow users to:
- Draw freehand (pen tool)
- Add sticky notes/text
- Move, resize, and delete elements
- Collaborate in real-time (if desired)
- Save/load boards (e.g., to Supabase)

---

### 2. Tiptap as the Foundation

- Tiptap is a flexible editor framework that can be extended for whiteboard features.
- Use Tiptap’s custom node extensions to represent shapes, drawings, and notes.
- Integrate a drawing library (e.g., [Fabric.js](http://fabricjs.com/) or [Rough.js](https://roughjs.com/)) for freehand drawing.
- Store the board’s state as JSON (Tiptap’s format) in Supabase for persistence and collaboration.

---

### 3. Implementation Steps

**a. Set Up a New Page/Component**
- Create a new page or component, e.g., `Jamboard.tsx`.

**b. Install Dependencies**
```bash
npm install @tiptap/react @tiptap/core fabric
# For real-time: npm install yjs @tiptap/extension-collaboration
```

**c. Create a Custom Tiptap Extension for Drawing**
- Define a Tiptap node that renders a `<canvas>` (or SVG) and lets users draw on it.
- Store drawing data in the node’s attributes.

**d. Add Sticky Notes/Text**
- Use Tiptap’s built-in text nodes or create a custom node for sticky notes.

**e. Save/Load Boards**
- Use Supabase to store/retrieve the board’s JSON.

---

### 4. Example File Structure

```
src/
  components/
    Jamboard.tsx
    JamboardDrawingExtension.ts
    JamboardStickyNoteExtension.ts

---

## Automated Learning Page System

This document outlines how to create new learning pages for different subjects automatically.

### 1. Directory Structure

All learning content is stored as Markdown files (`.md`) inside the `/public/content/` directory. Each subject must have its own sub-folder.

- **Correct Structure:** `/public/content/<subject_name>/<topic_name>.md`
- **Example:** `/public/content/physics/Physics_RUSH.md`

### 2. URL Scheme

The application uses dynamic routing to display the content. The URL directly maps to the file path.

- **URL Format:** `http://localhost:3000/learn/<subject_name>/<topic_name>`
- **Example URL:** `http://localhost:3000/learn/physics/Physics_RUSH`

This will automatically load and render the content from `/public/content/physics/Physics_RUSH.md`.

### 3. Creating a New Learning Page

To add a new page (e.g., "Algebra" for the "Math" subject):

1.  Create the subject directory if it doesn't exist: `public/content/math/`
2.  Add your new markdown file: `public/content/math/Algebra.md`
3.  Navigate to `http://localhost:3000/learn/math/Algebra` in your browser. No code changes are needed.

### 4. Markdown Features

The system automatically generates a sidebar navigator based on your headings.

- `## Heading 2` creates a main section.
- `### Heading 3` creates a sub-section nested under the previous main section.

---

## UI/UX Brainstorming

### Integrating Classes and Difficulty Levels

This outlines how to incorporate the platform's core learning structure (Classes with Foundation, Intermediate, and Advanced levels) into the user interface.

#### 1. On the Learning Dashboard

**Concept:** "Class Progress Cards"

-   **Layout:** A grid of cards, where each card represents a `Class` (e.g., Math, Chemistry).
-   **Card Elements:**
    -   **Header:** Class name and a relevant icon.
    -   **Overall Progress:** A prominent circular or linear progress bar showing total completion for the class.
    -   **Difficulty Breakdown:** A visual representation of progress for each of the three levels (Foundation, Intermediate, Advanced). This can be a single segmented bar or three separate mini-bars.
    -   **Call to Action:** A "Continue Learning" button to navigate to the detailed class page.
-   **Goal:** Provide a motivating, at-a-glance overview of a student's progress across all subjects.

#### 2. On the Learning Page (Class-Specific)

**Concept:** "Tabbed Topic Explorer"

-   **Layout:** A dedicated page for a single subject, with a large header and progress indicators.
-   **Navigation:** A primary tab component with three options: **Foundation**, **Intermediate**, and **Advanced**.
-   **Content Structure:**
    -   Within each tab, list the relevant `Topics` for that difficulty level using an accordion-style layout.
    -   Expanding a topic accordion reveals its `Sub-topics`, each with a clear status indicator (e.g., completed, not started, in progress).
-   **Goal:** Reduce cognitive load by allowing students to focus on one difficulty level at a time, providing a clear, organized, and actionable path through the curriculum.

---

## Potential Future Updates

### Upstash Integration

Integrating Upstash can enhance the platform's performance, enable real-time features, and improve reliability without compromising the budget, thanks to its generous free tiers.

#### 1. Upstash Redis: For Caching and Speed

Redis is an in-memory database, making it incredibly fast. It's perfect for reducing load on the main Supabase database and speeding up response times.

**Use Cases:**
- **Cache Frequently Accessed Data:** Cache "Classes" structure, resource URLs, and learning page content to speed up page loads and reduce Supabase queries.
- **Real-time Leaderboards for Mock Exams:** Use Redis's `Sorted Sets` to create highly engaging, real-time leaderboards for mock exams with minimal computational cost.
- **Rate Limiting:** Protect the platform from abuse by tracking user request rates.

#### 2. Upstash QStash: For Asynchronous Tasks

QStash is a serverless task queue, perfect for offloading tasks that don't need to happen immediately, ensuring the user isn't left waiting.

**Use Cases:**
- **Processing Mock Exam Submissions:** Offload grading and feedback generation to a background task. The user gets an instant response, and the process becomes more reliable with automatic retries.
- **Sending Notifications:** Schedule and send notifications (e.g., for new shared notes) without blocking the main application.

#### 3. Upstash Kafka: For Event-Driven Architecture

Kafka is a powerful tool for streaming events, ideal for decoupling different parts of the application and enabling advanced real-time features.

**Use Case:**
- **Powering the Collaborative Whiteboard:** Use Kafka as the backbone for real-time collaboration on the Jamboard-style whiteboard. Each user action (drawing, adding notes) is published as an event, and all collaborators receive it instantly.

**Recommended Path:**
1.  **Start with Upstash Redis for Caching:** Provides an immediate performance boost with simple implementation.
2.  **Implement Upstash QStash for Mock Exams:** Improves user experience and reliability for a core feature.
3.  **Consider Kafka for Advanced Features:** A powerful option for future real-time collaborative tools.
```

### File: `./.gitignore`

```text
# dependencies
node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
.clinerules/byterover-rules.md
.kilocode/rules/byterover-rules.md
.roo/rules/byterover-rules.md
.windsurf/rules/byterover-rules.md
.cursor/rules/byterover-rules.mdc
.kiro/steering/byterover-rules.md
.qoder/rules/byterover-rules.md
.augment/rules/byterover-rules.md
```

### File: `./package.json`

```json
{
  "name": "pop-studying",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@clerk/clerk-react": "^4.32.5",
    "@fontsource/inter": "^5.2.6",
    "@fontsource/poppins": "^5.2.6",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@supabase/supabase-js": "^2.49.4",
    "axios": "^1.9.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.7.4",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.501.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-markdown": "^10.1.0",
    "react-router-dom": "^6.20.0",
    "react-scripts": "5.0.1",
    "react-syntax-highlighter": "^15.6.1",
    "react-use-measure": "^2.1.7",
    "rehype-raw": "^7.0.0",
    "remark-gfm": "^4.0.1",
    "tailwind-merge": "^3.3.0"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "CI='' react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/node": "^16.18.36",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.13",
    "autoprefixer": "^10.4.15",
    "babel-loader": "^10.0.0",
    "buffer": "^6.0.3",
    "html-webpack-plugin": "^5.6.3",
    "react-app-rewired": "^2.2.1",
    "tailwindcss": "^3.3.3",
    "typescript": "^4.9.5",
    "webpack": "^5.99.6",
    "webpack-cli": "^6.0.1"
  },
  "overrides": {
    "nth-check": "2.1.1",
    "postcss": "8.4.31",
    "prismjs": "1.30.0",
    "webpack-dev-server": "4.15.1"
  }
}
```

### File: `./config-overrides.js`

```javascript
const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "buffer": require.resolve("buffer/")
  };
  
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ];
  
  return config;
};
```

### File: `./windsurf_deployment.yaml`

```yaml
# Windsurf Deploys Configuration (Beta)
# This is an auto-generated file used to store your app deployment configuration. Do not modify.
# The ID of the project (different from project name) on the provider's system. This is populated as a way to update existing deployments.
project_id: dfe3c659-02e9-4384-9a63-ce8d1bcf7ff6
# The framework of the web application (examples: nextjs, react, vue, etc.)
framework: create-react-app
```

### File: `./tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

### File: `./.eslintignore`

```text
# Ignore all CSS files
*.css
# Ignore all SVG files
*.svg
# Ignore all markdown files
*.md
# Ignore node_modules
node_modules/
# Ignore build files
build/
# Ignore coverage directory
coverage/
```

### File: `./.env.example`

```example
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
REACT_APP_SUPABASE_URL=your_supabase_url_here
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### File: `./postcss.config.js`

```javascript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
```

### File: `./scripts/test-tables.js`

```javascript
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  'https://rymshwxzhdosudhpkrbz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bXNod3h6aGRvc3VkaHBrcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNzY3NjQsImV4cCI6MjA2MDY1Mjc2NH0.dwC91dPDez8758WzQE5AvITamLE6NSccdJdDz5F7hCw'
);

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test connection by querying a table that should exist
    const { data, error } = await supabase
      .from('subjects')
      .select('*');
    
    if (error) throw error;
    
    console.log('Successfully connected to Supabase!');
    console.log('\nSubjects in your database:');
    data.forEach(subject => {
      console.log(`- ${subject.name} (${subject.id})`);
    });
    
    if (data.length === 0) {
      console.log('No subjects found in the database.');
    }
    
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
  }
}

testConnection();
```

### File: `./scripts/setup-database.js`

```javascript
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Initialize Supabase client
const supabaseUrl = 'https://rymshwxzhdosudhpkrbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bXNod3h6aGRvc3VkaHBrcmJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTA3Njc2NCwiZXhwIjoyMDYwNjUyNzY0fQ.8q7k8r8o8o8o8o8o8o8o8o8o8o8o8o8o8o8o8o8';

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: 'public',
  },
});

async function setupDatabase() {
  try {
    // Read the SQL file
    const sql = fs.readFileSync(path.join(__dirname, 'setup-supabase.sql'), 'utf8');
    
    // Split the SQL into individual statements
    const statements = sql
      .split(';')
      .map(statement => statement.trim())
      .filter(statement => statement.length > 0);

    // Execute each statement
    for (const statement of statements) {
      const { error } = await supabase.rpc('exec', { query: statement });
      if (error) {
        console.error('Error executing statement:', error);
      } else {
        console.log('Executed statement successfully');
      }
    }

    console.log('Database setup completed successfully!');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

setupDatabase();
```

### File: `./scripts/setup-supabase.sql`

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create subjects table
CREATE TABLE IF NOT EXISTS subjects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create topics table
CREATE TABLE IF NOT EXISTS topics (
  id TEXT PRIMARY KEY,
  subject_id TEXT REFERENCES subjects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create content_sections table
CREATE TABLE IF NOT EXISTS content_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  topic_id TEXT REFERENCES topics(id) ON DELETE CASCADE,
  section_id TEXT NOT NULL,
  subheading TEXT NOT NULL,
  content JSONB NOT NULL,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(topic_id, section_id)
);

-- Insert Physics RUSH subject
INSERT INTO subjects (id, name, description)
VALUES (
  'physics-rush',
  'Physics RUSH',
  'Comprehensive overview of physics concepts from the "ALL OF PHYSICS explained in 14 Minutes" video by Wacky Science.'
)
ON CONFLICT (id) DO NOTHING;

-- Insert Electromagnetism topic
INSERT INTO topics (id, subject_id, title, description, order_index)
VALUES (
  'electromagnetism',
  'physics-rush',
  'Electromagnetism',
  'Study of the electromagnetic force, including electric and magnetic fields.',
  1
)
ON CONFLICT (id) DO NOTHING;
```

### File: `./scripts/test-supabase.js`

```javascript
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  'https://rymshwxzhdosudhpkrbz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bXNod3h6aGRvc3VkaHBrcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNzY3NjQsImV4cCI6MjA2MDY1Mjc2NH0.dwC91dPDez8758WzQE5AvITamLE6NSccdJdDz5F7hCw'
);

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test connection by listing all tables
    const { data, error } = await supabase
      .from('pg_tables')
      .select('*')
      .eq('schemaname', 'public');
    
    if (error) throw error;
    
    console.log('Successfully connected to Supabase!');
    console.log('\nTables in your database:');
    data.forEach(table => {
      console.log(`- ${table.tablename}`);
    });
    
    if (data.length === 0) {
      console.log('No tables found in the public schema.');
    }
    
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
  }
}

testConnection();
```

### File: `./Dashboard Page/tailwind.config.js`

```javascript
module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {"name":"Dark","fontFamily":{"sans":["Oswald","ui-sans-serif","system-ui","sans-serif","\"Apple Color Emoji\"","\"Segoe UI Emoji\"","\"Segoe UI Symbol\"","\"Noto Color Emoji\""]},"extend":{"fontFamily":{"title":["Open Sans","ui-sans-serif","system-ui","sans-serif","\"Apple Color Emoji\"","\"Segoe UI Emoji\"","\"Segoe UI Symbol\"","\"Noto Color Emoji\""],"body":["Oswald","ui-sans-serif","system-ui","sans-serif","\"Apple Color Emoji\"","\"Segoe UI Emoji\"","\"Segoe UI Symbol\"","\"Noto Color Emoji\""]},"colors":{"neutral":{"50":"#1D232A","100":"#1C2229","200":"#1B2127","300":"#1A2026","400":"#1A1F25","500":"#191E24","600":"#0C0E11","700":"#090B0D","800":"#060708","900":"#030304","DEFAULT":"#1D232A"},"primary":{"50":"#F1F2FF","100":"#EAECFF","200":"#D4D7FF","300":"#747FFF","400":"#6872E6","500":"#5D66CC","600":"#575FBF","700":"#464C99","800":"#343973","900":"#292C59","DEFAULT":"#747FFF"}}},"fontSize":{"xs":["13.5px",{"lineHeight":"21.6px"}],"sm":["15.75px",{"lineHeight":"23.625px"}],"base":["18px",{"lineHeight":"28.8px"}],"lg":["20.25px",{"lineHeight":"30.375px"}],"xl":["22.5px",{"lineHeight":"31.499999999999996px"}],"2xl":["27px",{"lineHeight":"35.1px"}],"3xl":["33.75px",{"lineHeight":"40.5px"}],"4xl":["40.5px",{"lineHeight":"46.574999999999996px"}],"5xl":["54px",{"lineHeight":"59.400000000000006px"}],"6xl":["67.5px",{"lineHeight":"74.25px"}],"7xl":["81px",{"lineHeight":"85.05px"}],"8xl":["108px",{"lineHeight":"113.4px"}],"9xl":["144px",{"lineHeight":"151.20000000000002px"}]},"borderRadius":{"none":"0px","sm":"2px","DEFAULT":"4px","md":"6px","lg":"8px","xl":"12px","2xl":"16px","3xl":"24px","full":"9999px"},"spacing":{"0":"0px","1":"4px","2":"8px","3":"12px","4":"16px","5":"20px","6":"24px","7":"28px","8":"32px","9":"36px","10":"40px","11":"44px","12":"48px","14":"56px","16":"64px","20":"80px","24":"96px","28":"112px","32":"128px","36":"144px","40":"160px","44":"176px","48":"192px","52":"208px","56":"224px","60":"240px","64":"256px","72":"288px","80":"320px","96":"384px","px":"1px","0.5":"2px","1.5":"6px","2.5":"10px","3.5":"14px"}},
        plugins: [],
        important: '#webcrumbs'
    }
```

### File: `./Dashboard Page/Component.js`

```javascript
import React from "react";


export const Component = () => {
  return (
<div id="webcrumbs"> 
        	<div className="w-[1440px] p-6 bg-gray-900 text-white min-h-screen">
	  <div className="flex gap-6">
	    <aside className="w-80 bg-gray-800 rounded-lg p-6 h-fit">
	      <div className="mb-6">
	        <h2 className="text-xl font-bold mb-4 text-purple-400">Grade 7</h2>
	        <div className="space-y-3">
	          <details className="group">
	            <summary className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
	              <div className="flex items-center gap-3">
	                <span className="material-symbols-outlined text-blue-400">calculate</span>
	                <span className="font-medium">Mathematics</span>
	              </div>
	              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
	            </summary>
	            <div className="mt-2 ml-6 space-y-2">
	              <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
	                <span className="text-sm">Algebra Basics</span>
	                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
	                  <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
	                </div>
	              </div>
	              <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
	                <span className="text-sm">Geometry</span>
	                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
	                  <div className="bg-green-500 h-1.5 rounded-full w-1/2"></div>
	                </div>
	              </div>
	              <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
	                <span className="text-sm">Fractions</span>
	                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
	                  <div className="bg-yellow-500 h-1.5 rounded-full w-1/4"></div>
	                </div>
	              </div>
	            </div>
	          </details>
	          
	          <details className="group">
	            <summary className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
	              <div className="flex items-center gap-3">
	                <span className="material-symbols-outlined text-green-400">science</span>
	                <span className="font-medium">Science</span>
	              </div>
	              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
	            </summary>
	            <div className="mt-2 ml-6 space-y-2">
	              <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
	                <span className="text-sm">Physics</span>
	                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
	                  <div className="bg-green-500 h-1.5 rounded-full w-2/3"></div>
	                </div>
	              </div>
	              <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
	                <span className="text-sm">Chemistry</span>
	                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
	                  <div className="bg-yellow-500 h-1.5 rounded-full w-1/3"></div>
	                </div>
	              </div>
	              <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
	                <span className="text-sm">Biology</span>
	                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
	                  <div className="bg-red-500 h-1.5 rounded-full w-1/6"></div>
	                </div>
	              </div>
	            </div>
	          </details>
	        </div>
	      </div>
	      
	      <div className="mt-8">
	        <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Stats</h3>
	        <div className="space-y-4">
	          <div className="bg-gray-700 p-4 rounded-lg">
	            <div className="flex items-center justify-between mb-2">
	              <span className="text-sm text-gray-300">Weekly Streak</span>
	              <span className="material-symbols-outlined text-orange-400">local_fire_department</span>
	            </div>
	            <div className="text-2xl font-bold text-orange-400">12 days</div>
	          </div>
	          
	          <div className="bg-gray-700 p-4 rounded-lg">
	            <div className="flex items-center justify-between mb-2">
	              <span className="text-sm text-gray-300">Lessons Completed</span>
	              <span className="material-symbols-outlined text-green-400">check_circle</span>
	            </div>
	            <div className="text-2xl font-bold text-green-400">24/32</div>
	          </div>
	        </div>
	      </div>
	    </aside>
	    
	    <main className="flex-1">
	      <div className="mb-6">
	        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
	          <span>Grade 7</span>
	          <span className="material-symbols-outlined text-xs">chevron_right</span>
	          <span>Mathematics</span>
	          <span className="material-symbols-outlined text-xs">chevron_right</span>
	          <span className="text-white">Algebra Basics</span>
	        </nav>
	        
	        <div className="flex items-center justify-between">
	          <h1 className="text-3xl font-bold">Algebra Basics</h1>
	          <div className="flex items-center gap-4">
	            <div className="relative w-16 h-16">
	              <svg className="w-16 h-16 transform -rotate-90">
	                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-gray-700"/>
	                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="175.9" strokeDashoffset="44" className="text-purple-500"/>
	              </svg>
	              <div className="absolute inset-0 flex items-center justify-center">
	                <span className="text-sm font-bold">75%</span>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div className="mb-8">
	        <div className="bg-gray-800 rounded-lg p-6">
	          <h2 className="text-xl font-semibold mb-4">Progress Dashboard</h2>
	          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
	            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
	              <div className="flex items-center justify-between mb-2">
	                <span className="text-sm text-gray-300">Variables</span>
	                <span className="material-symbols-outlined text-green-400">check_circle</span>
	              </div>
	              <div className="relative w-12 h-12 mx-auto">
	                <svg className="w-12 h-12 transform -rotate-90">
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="0" className="text-green-500"/>
	                </svg>
	                <div className="absolute inset-0 flex items-center justify-center">
	                  <span className="text-xs font-bold">100%</span>
	                </div>
	              </div>
	            </div>
	            
	            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
	              <div className="flex items-center justify-between mb-2">
	                <span className="text-sm text-gray-300">Equations</span>
	                <span className="material-symbols-outlined text-yellow-400">schedule</span>
	              </div>
	              <div className="relative w-12 h-12 mx-auto">
	                <svg className="w-12 h-12 transform -rotate-90">
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="62.8" className="text-yellow-500"/>
	                </svg>
	                <div className="absolute inset-0 flex items-center justify-center">
	                  <span className="text-xs font-bold">50%</span>
	                </div>
	              </div>
	            </div>
	            
	            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
	              <div className="flex items-center justify-between mb-2">
	                <span className="text-sm text-gray-300">Functions</span>
	                <span className="material-symbols-outlined text-red-400">radio_button_unchecked</span>
	              </div>
	              <div className="relative w-12 h-12 mx-auto">
	                <svg className="w-12 h-12 transform -rotate-90">
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="125.6" className="text-red-500"/>
	                </svg>
	                <div className="absolute inset-0 flex items-center justify-center">
	                  <span className="text-xs font-bold">0%</span>
	                </div>
	              </div>
	            </div>
	            
	            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
	              <div className="flex items-center justify-between mb-2">
	                <span className="text-sm text-gray-300">Graphing</span>
	                <span className="material-symbols-outlined text-red-400">radio_button_unchecked</span>
	              </div>
	              <div className="relative w-12 h-12 mx-auto">
	                <svg className="w-12 h-12 transform -rotate-90">
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
	                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="125.6" className="text-red-500"/>
	                </svg>
	                <div className="absolute inset-0 flex items-center justify-center">
	                  <span className="text-xs font-bold">0%</span>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
	        <div className="lg:col-span-2">
	          <div className="bg-gray-800 rounded-lg p-6">
	            <h2 className="text-xl font-semibold mb-4">Lessons</h2>
	            <div className="space-y-4">
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-green-500">
	                <div className="flex items-center justify-between">
	                  <div className="flex items-center gap-4">
	                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
	                      <span className="material-symbols-outlined text-white">check</span>
	                    </div>
	                    <div>
	                      <h3 className="font-medium">Introduction to Variables</h3>
	                      <p className="text-sm text-gray-400">Learn the basics of algebraic variables</p>
	                      <div className="flex items-center gap-4 mt-2">
	                        <span className="text-xs bg-blue-600 px-2 py-1 rounded">Video</span>
	                        <span className="text-xs text-gray-400">15 min</span>
	                        <span className="text-xs text-gray-400">Easy</span>
	                      </div>
	                    </div>
	                  </div>
	                  <span className="material-symbols-outlined text-gray-400">arrow_forward_ios</span>
	                </div>
	              </div>
	              
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-green-500">
	                <div className="flex items-center justify-between">
	                  <div className="flex items-center gap-4">
	                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
	                      <span className="material-symbols-outlined text-white">check</span>
	                    </div>
	                    <div>
	                      <h3 className="font-medium">Basic Operations with Variables</h3>
	                      <p className="text-sm text-gray-400">Addition and subtraction with variables</p>
	                      <div className="flex items-center gap-4 mt-2">
	                        <span className="text-xs bg-purple-600 px-2 py-1 rounded">Practice</span>
	                        <span className="text-xs text-gray-400">20 min</span>
	                        <span className="text-xs text-gray-400">Easy</span>
	                      </div>
	                    </div>
	                  </div>
	                  <span className="material-symbols-outlined text-gray-400">arrow_forward_ios</span>
	                </div>
	              </div>
	              
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-yellow-500">
	                <div className="flex items-center justify-between">
	                  <div className="flex items-center gap-4">
	                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
	                      <span className="material-symbols-outlined text-white">play_arrow</span>
	                    </div>
	                    <div>
	                      <h3 className="font-medium">Solving Simple Equations</h3>
	                      <p className="text-sm text-gray-400">One-step and two-step equations</p>
	                      <div className="flex items-center gap-4 mt-2">
	                        <span className="text-xs bg-blue-600 px-2 py-1 rounded">Video</span>
	                        <span className="text-xs text-gray-400">25 min</span>
	                        <span className="text-xs text-gray-400">Medium</span>
	                      </div>
	                    </div>
	                  </div>
	                  <span className="material-symbols-outlined text-gray-400">arrow_forward_ios</span>
	                </div>
	              </div>
	              
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-gray-500">
	                <div className="flex items-center justify-between">
	                  <div className="flex items-center gap-4">
	                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
	                      <span className="material-symbols-outlined text-white">lock</span>
	                    </div>
	                    <div>
	                      <h3 className="font-medium text-gray-400">Multi-step Equations</h3>
	                      <p className="text-sm text-gray-500">Complete previous lessons to unlock</p>
	                      <div className="flex items-center gap-4 mt-2">
	                        <span className="text-xs bg-green-600 px-2 py-1 rounded">Quiz</span>
	                        <span className="text-xs text-gray-500">30 min</span>
	                        <span className="text-xs text-gray-500">Hard</span>
	                      </div>
	                    </div>
	                  </div>
	                  <span className="material-symbols-outlined text-gray-400">arrow_forward_ios</span>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div>
	          <div className="bg-gray-800 rounded-lg p-6">
	            <div className="flex border-b border-gray-700 mb-4">
	              <button className="px-4 py-2 text-purple-400 border-b-2 border-purple-400 font-medium">Resources</button>
	              <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Practice</button>
	              <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Guides</button>
	            </div>
	            
	            <div className="space-y-4">
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
	                <div className="flex items-center gap-3">
	                  <span className="material-symbols-outlined text-blue-400">video_library</span>
	                  <div>
	                    <h4 className="font-medium">Video Tutorial</h4>
	                    <p className="text-sm text-gray-400">Variables Explained</p>
	                  </div>
	                </div>
	              </div>
	              
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
	                <div className="flex items-center gap-3">
	                  <span className="material-symbols-outlined text-green-400">quiz</span>
	                  <div>
	                    <h4 className="font-medium">Practice Quiz</h4>
	                    <p className="text-sm text-gray-400">10 Questions</p>
	                  </div>
	                </div>
	              </div>
	              
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
	                <div className="flex items-center gap-3">
	                  <span className="material-symbols-outlined text-purple-400">description</span>
	                  <div>
	                    <h4 className="font-medium">Study Guide</h4>
	                    <p className="text-sm text-gray-400">Algebra Formulas</p>
	                  </div>
	                </div>
	              </div>
	              
	              <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
	                <div className="flex items-center gap-3">
	                  <span className="material-symbols-outlined text-orange-400">calculate</span>
	                  <div>
	                    <h4 className="font-medium">Calculator</h4>
	                    <p className="text-sm text-gray-400">Algebra Helper</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            
	            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
	              <h3 className="font-semibold mb-2">Achievement Unlocked!</h3>
	              <p className="text-sm text-purple-100">Complete 5 more lessons to earn the "Algebra Master" badge</p>
	              <div className="w-full bg-purple-800 rounded-full h-2 mt-3">
	                <div className="bg-purple-300 h-2 rounded-full w-3/5"></div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </main>
	  </div>
	  {/* Next: "Add notification system for assignments and deadlines" */}
	</div> 
        </div>
  )
}

```

### File: `./Dashboard Page/style.css`

```css

@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### File: `./src/index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import '@fontsource/inter';

const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || "pk_test_c3VidGxlLWJvYS0yOS5jbGVyay5hY2NvdW50cy5kZXYk"; // Use environment variable with fallback
console.log('Clerk Key Used:', clerkFrontendApi);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
```

### File: `./src/types.ts`

```typescript
export interface Class {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  totalLessons: number;
  completedLessons: number;
}

export interface ClassGridProps {
  classes: Class[];
  searchQuery: string;
}
```

### File: `./src/supabaseClient.js`

```javascript
import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://rymshwxzhdosudhpkrbz.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bXNod3h6aGRvc3VkaHBrcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNzY3NjQsImV4cCI6MjA2MDY1Mjc2NH0.dwC91dPDez8758WzQE5AvITamLE6NSccdJdDz5F7hCw';

const isPlaceholder = (value) =>
  !value ||
  value.trim() === '' ||
  value.includes('your_supabase_url_here') ||
  value.includes('your_supabase_anon_key_here');

const supabaseUrl = isPlaceholder(process.env.REACT_APP_SUPABASE_URL)
  ? DEFAULT_SUPABASE_URL
  : process.env.REACT_APP_SUPABASE_URL;

const supabaseAnonKey = isPlaceholder(process.env.REACT_APP_SUPABASE_ANON_KEY)
  ? DEFAULT_SUPABASE_ANON_KEY
  : process.env.REACT_APP_SUPABASE_ANON_KEY;

if (
  supabaseUrl === DEFAULT_SUPABASE_URL ||
  supabaseAnonKey === DEFAULT_SUPABASE_ANON_KEY
) {
  console.warn(
    '[supabaseClient] Using fallback Supabase credentials. Update your .env file with real values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### File: `./src/AGENTS.md`

```markdown
---
trigger: always_on
alwaysApply: true
---
# 🧭 Design Instructions: How to Avoid the "AI-Generated" Look

## 🎯 Purpose
This document defines how to design landing pages that feel *intentional and human*, not automatically generated.  
The goal is to keep things visually balanced, slightly imperfect, and emotionally engaging.

---

## 1. Layout & Composition

### ✅ Do
- Use **asymmetry** or **staggered sections** — avoid stacking every element in the exact same pattern.
- Introduce **visual rhythm**: alternate background tones or section padding.
- Keep consistent alignment within sections, but vary composition between them.
- Use **intentional whitespace**, not equal gaps everywhere.
- Break the grid slightly (e.g., offset one card or move a button closer to its title).

### 🚫 Avoid
- Perfectly symmetrical, robotically even layouts.
- Copy-pasted sections that look cloned.
- Repeating identical card widths or paddings across the page.

---

## 2. Typography

### ✅ Do
- Mix font weights and letter spacing for contrast.
- Use a **distinct heading font** (e.g., “Clash Display”) and a clean body font (e.g., “Inter Tight” or “Satoshi”).
- Limit heading sizes to 2–3 scales that feel natural across breakpoints.
- Add subtle hierarchy: larger headings, medium subheadings, regular body.

### 🚫 Avoid
- Using only one weight across the site.
- Default AI font combos like *Poppins + Inter + Manrope*.
- Oversized hero text with no supporting visual balance.

---

## 3. Color & Tone

### ✅ Do
- Use your pastel blue (`#DFF2FC`) as background.
- Anchor the palette with one neutral tonensure **contrast ratio ≥ 4.5:1** for readability.
- Add soft gradients or shadows *only* to draw attention.

### 🚫 Avoid
- Overusing gradients everywhere.
- Making all accents glow — too “AI-template” looking.
- Random neon or overly saturated palettes.

---

## 4. Buttons & Interactions

### ✅ Do
- Use one **primary button** style and one **secondary** variation.
- Add small hover states (lift, glow, subtle color shift).
- Give CTAs descriptive labels:
  - ✅ “Start studying free”
  - ✅ “See subjects”
  - 🚫 “Get started”

### 🚫 Avoid
- Identical buttons repeated without purpose.
- Generic labels with no emotional tone.
- Harsh box-shadows or unrealistic glowing edges.

---

## 5. Cards & Components

### ✅ Do
- Vary card heights slightly to avoid robotic symmetry.
- Round corners thoughtfully:  
  - Hero cards → 16px  
  - Small feature cards → 8–10px  
- Add soft shadows or pastel borders for depth.
- Use real data snippets or quotes to feel authentic.

### 🚫 Avoid
- Evenly spaced identical cards throughout.
- Blank filler text (“Lorem ipsum” or AI-generated buzzwords).
- Flat, repetitive color fills.

---

## 6. Visuals & Imagery

### ✅ Do
- Mix **illustrations** with at least one real photo or student-related visual.
- Choose consistent illustration style — flat, pastel, or semi-3D.
- Add **tiny hand-drawn elements** or accent doodles to make it more human.

### 🚫 Avoid
- Generic 3D blobs or default AI icons.
- Oversaturated mockups that don’t match your color scheme.
- Random vector packs with inconsistent line weights.

---

## 7. Motion & Animation

### ✅ Do
- Animate with intent:  
  - Fade or slide in from different directions per section.  
  - Keep motion speed subtle (300–500ms).
- Add delay or easing so it feels natural.

### 🚫 Avoid
- Every section using the same fade-in.
- Synchronous animation timing — feels robotic.
- Flashy or overly fast transitions.

---

## 8. Content & Microcopy

### ✅ Do
- Write text that sounds conversational.
- Use friendly CTAs and supportive microcopy with necessarily
- Make sure each paragraph communicates something real (avoid filler).

### 🚫 Avoid
- Generic “Empower your future,” “Your journey starts here” phrasing.
- AI-generated clichés like “Unlock your potential.”
- Buzzword stacking or motivational fluff.

---

## 9. Texture & Imperfection

### ✅ Do
- Add slight variation or imperfection:
  - Off-center accent shapes.
  - Layered background elements.
  - Organic, human-made touches.

### 🚫 Avoid
- Perfectly centered decorative shapes.
- Mechanically balanced spacing everywhere.
- Flat, lifeless surfaces with no character.

---

## 10. Final Polish Checklist

Before exporting, check:
- [ ] Text contrast passes accessibility.
- [ ] No repeated section structure appears twice in a row.
- [ ] Typography hierarchy feels natural.
- [ ] Hover effects vary slightly across CTAs.
- [ ] Buttons and icons reflect the same design language.
- [ ] There’s at least one visual cue (photo, doodle, quote) that feels *real*.

---

**Author’s note:**  
Designs that feel “human” tell a small story through imperfection, hierarchy, and intent.  
Keep everything functional, but let *personality* sneak through.

```

### File: `./src/setupTests.js`

```javascript
import '@testing-library/jest-dom';
```

### File: `./src/App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { SignedIn } from '@clerk/clerk-react';
import ErrorBoundary from './components/ErrorBoundary';
import SyncUserToSupabase from './components/SyncUserToSupabase';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AccountCreated from './pages/AccountCreated';
import Navbar from './components/Layout/Navbar';
import SimpleNavbar from './components/SimpleNavbar/SimpleNavbar';


import Flashcards from './pages/Flashcards';
import StudyFlashcard from './pages/StudyFlashcard';
import Jamboard from './pages/Jamboard';
import LearningRoutes from './routes/LearningRoutes';
import LearningPage from './pages/LearningPage/LearningPage';
import MathDashboard from './pages/MathDashboard';
import Dashboard from './dashboard/Dashboard';

import ClassDetailPage from './pages/ClassDetailPage';
import NotFoundPage from './components/ui/404-page-not-found';
import './styles/globals.css';
import './styles/global-background.css'; // Import the global background gradient
import './styles/Home.css';
import './styles/Auth.css';

function AppRoutes() {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/landing', '/study', '/sign-in', '/sign-up', '/math-dashboard', '/dashboard', '/class'];
  const isFlashcardsPage = location.pathname === '/flashcards';
  // Check if the current path starts with '/learn/' for any learning page
  const isLearningPage = location.pathname.startsWith('/learn/');
  return (
    <>
      {/* Sync Clerk user to Supabase after sign-in */}
      <SignedIn>
        <SyncUserToSupabase />
      </SignedIn>
      {isFlashcardsPage && <SimpleNavbar />}
      {!hideNavbarRoutes.includes(location.pathname) && !isLearningPage && !isFlashcardsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/demo" element={<Home />} />

        {/* Dynamic Learning Page for any subject and topic */}
        <Route path="/learn/:subject/:topicId" element={<LearningPage />} />

        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/study" element={<StudyFlashcard />} />
        <Route path="/jamboard" element={<Jamboard />} />

        {/* Mathematics Dashboard */}
        <Route path="/math-dashboard" element={<MathDashboard />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Classes Page */}
        <Route path="/class/:id" element={<ClassDetailPage />} />

        {/* Preview Pages */}
        {/* Learning Path Routes */}
        <Route path="/learn/*" element={<LearningRoutes />} />

        {/* 404 Route */}
        <Route path="/404" element={<NotFoundPage />} />

        {/* Fallback route - redirect to 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
}

function AppWithBackground() {
  return <AppRoutes />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppWithBackground />
      </Router>
    </ErrorBoundary>
  );
}
```

### File: `./src/types/index.ts`

```typescript
export type Class = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  totalLessons: number;
  completedLessons: number;
};
```

### File: `./src/utils/markdownUtils.js`

```javascript
import matter from 'gray-matter';

/**
 * Parses markdown content with frontmatter
 * @param {string} markdown - The markdown content to parse
 * @returns {Object} An object containing the frontmatter and content
 */
export function parseMarkdown(markdown) {
  try {
    const { data: frontmatter, content } = matter(markdown);
    return { frontmatter, content };
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return { frontmatter: {}, content: markdown };
  }
}

/**
 * Extracts headings from markdown content to create a table of contents
 * @param {string} content - The markdown content
 * @returns {Array} Array of headings with their level and id
 */
export function extractHeadings(content) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Splits content into sections based on headings
 * @param {string} content - The markdown content
 * @returns {Array} Array of sections with heading and content
 */
export function splitIntoSections(content) {
  const sections = [];
  const lines = content.split('\n');
  let currentSection = { heading: 'Introduction', content: [], id: 'introduction' };
  
  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      // Save the previous section
      if (currentSection.content.length > 0) {
        sections.push({
          ...currentSection,
          content: currentSection.content.join('\n').trim()
        });
      }
      
      // Start a new section
      const level = headingMatch[1].length;
      const heading = headingMatch[2].trim();
      const id = heading
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      
      currentSection = { 
        level, 
        heading, 
        content: [],
        id 
      };
    } else {
      currentSection.content.push(line);
    }
  }
  
  // Add the last section
  if (currentSection.content.length > 0) {
    sections.push({
      ...currentSection,
      content: currentSection.content.join('\n').trim()
    });
  }
  
  return sections;
}
```

### File: `./src/utils/supabase.js`

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rymshwxzhdosudhpkrbz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bXNod3h6aGRvc3VkaHBrcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNzY3NjQsImV4cCI6MjA2MDY1Mjc2NH0.dwC91dPDez8758WzQE5AvITamLE6NSccdJdDz5F7hCw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### File: `./src/dashboard/Dashboard.css`

```css
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align to the top */
  min-height: 100vh;
  padding-top: 2rem; /* Add some padding from the top */
  gap: 1.5rem; /* Add space between nav and search */
  box-sizing: border-box;
}

.search-input-container {
  position: relative;
  width: 400px;
  /* margin is no longer needed */
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9CA3AF;
}

.search-input {
  width: 100%;
  background: #14141F;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: white;
  font-size: 0.9rem;
}

.search-input::placeholder {
  color: #9CA3AF;
}

.search-input:focus {
  outline: none;
  border-color: #7B2FF2;
  box-shadow: 0 0 0 2px rgba(123, 47, 242, 0.3);
}
```

### File: `./src/dashboard/Dashboard.js`

```javascript
import React from 'react';
import { Search } from 'lucide-react';
import Navigation from '../components/Navigation/Navigation';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navigation />
            <div className="search-input-container">
        <Search className="search-icon" size={20} />
        <input type="text" className="search-input" placeholder="Search flashcard sets..." />
      </div>
    </div>
  );
};

export default Dashboard;
```

### File: `./src/styles/ChemKeyboard.css`

```css
.chem-keyboard-root {
  background: linear-gradient(90deg, #7B2FF2 0%, #F357A8 100%);
  border-radius: 1rem;
  padding: 1rem 1.2rem 0.7rem 1.2rem;
  margin: 0.5rem 0 1.2rem 0;
  box-shadow: 0 2px 16px #7B2FF233, 0 1px 6px #1a8fff22;
  max-width: 100%;
  overflow-x: auto;
}
.chem-keyboard-group {
  margin-bottom: 0.7rem;
}
.chem-keyboard-group-label {
  color: #fff;
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.chem-keyboard-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: 0.4rem;
}
.chem-keyboard-btn {
  background: #221c36;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0.38rem 0.7rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.13s;
  box-shadow: 0 1px 4px #7B2FF288;
  flex: 0 0 auto;
}
.chem-keyboard-btn:hover, .chem-keyboard-btn:focus {
  background: #7B2FF2;
  color: #fff;
  transform: translateY(-2px) scale(1.08);
}

@media (max-width: 1024px) {
  .chem-keyboard-root {
    padding: 0.6rem 0.4rem 0.5rem 0.4rem;
    border-radius: 0.7rem;
    margin: 0.4rem 0 0.8rem 0;
    box-shadow: 0 1px 8px #7B2FF233, 0 1px 3px #1a8fff22;
    width: 100vw;
    max-width: 100vw;
    min-width: 0;
    overflow-x: auto;
  }
  .chem-keyboard-group-label {
    font-size: 0.97rem;
    margin-bottom: 0.19rem;
  }
  .chem-keyboard-row {
    gap: 0.34rem;
    margin-bottom: 0.23rem;
    flex-wrap: wrap;
  }
  .chem-keyboard-btn {
    font-size: 1.03rem;
    padding: 0.32rem 0.48rem;
    border-radius: 0.36rem;
    margin-bottom: 0.13rem;
  }
}
@media (max-width: 700px) {
  .chem-keyboard-root {
    position: relative;
    padding-top: 2.1rem;
    padding-bottom: 0.3rem;
    border-radius: 0.43rem;
    margin: 0.17rem 0 0.25rem 0;
    width: 99vw;
    max-width: 99vw;
    min-width: 0;
    box-shadow: 0 1px 4px #7B2FF233, 0 1px 2px #1a8fff22;
    font-size: 0.97rem;
  }
  .chem-keyboard-done-btn-top {
    position: absolute;
    top: 0.35rem;
    right: 0.5rem;
    min-width: 2.1rem;
    max-width: 3.2rem;
    padding: 0.13rem 0.32rem;
    font-size: 1.05rem;
    border-radius: 0.7rem;
    background: #fff;
    color: #7B2FF2;
    font-weight: 700;
    box-shadow: 0 1px 4px #7B2FF288;
    z-index: 10;
    transition: background 0.18s, color 0.18s, transform 0.13s;
    letter-spacing: 0.01em;
    touch-action: manipulation;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.1;
    border: 1.5px solid #e0d4f7;
    outline: none;
  }
  .chem-keyboard-done-btn-top:active {
    background: #f3eaff;
    color: #4d1c8b;
    transform: scale(0.97);
  }
  .chem-keyboard-group-label {
    font-size: 0.91rem;
    margin-bottom: 0.07rem;
    margin-top: 0.09rem;
    letter-spacing: 0.01em;
  }
  .chem-keyboard-row {
    gap: 0.09rem;
    margin-bottom: 0.08rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .chem-keyboard-btn {
    font-size: 0.92rem;
    padding: 0.19rem 0.28rem;
    border-radius: 0.17rem;
    margin-bottom: 0.02rem;
    min-width: 1.45rem;
    min-height: 1.45rem;
    line-height: 1.1;
    box-shadow: 0 1px 4px #7B2FF288;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: manipulation;
  }
  .chem-keyboard-done-btn {
    width: 90vw;
    max-width: 420px;
    margin: 0.25rem auto 0.1rem auto;
    display: block;
    background: #fff;
    color: #7B2FF2;
    font-weight: 700;
    font-size: 1.18rem;
    border: none;
    border-radius: 0.4rem;
    padding: 0.7rem 0;
    box-shadow: 0 1px 4px #7B2FF288;
    letter-spacing: 0.01em;
    transition: background 0.18s, color 0.18s, transform 0.13s;
    touch-action: manipulation;
  }
  .chem-keyboard-done-btn:active {
    background: #f3eaff;
    color: #4d1c8b;
    transform: scale(0.97);
  }
}
@media (max-width: 480px) {
  .chem-keyboard-done-btn-top {
    min-width: 1.6rem;
    max-width: 2.2rem;
    padding: 0.10rem 0.18rem;
    font-size: 0.92rem;
    border-radius: 0.55rem;
  }
  .chem-keyboard-root {
    font-size: 0.91rem;
  }
  .chem-keyboard-group-label {
    font-size: 0.86rem;
  }
  .chem-keyboard-btn {
    font-size: 0.86rem;
    min-width: 1.25rem;
    min-height: 1.25rem;
    padding: 0.11rem 0.17rem;
    border-radius: 0.13rem;
  }
}
```

### File: `./src/styles/LandingPage.css`

```css
/* ============================================
   POP STUDYING - LANDING PAGE STYLES
   Bold, High-Impact Design
   ============================================ */

/* Base Styles */
.landing-page {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0f0f23 100%);
    color: #f5f5f5;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* Scroll Progress Bar */
.scroll-progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #7b1fa2, #e1bee7, #7b1fa2);
    z-index: 9999;
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px rgba(123, 31, 162, 0.5);
}

/* Persistent CTA Bar */
.persistent-cta {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(123, 31, 162, 0.7);
    }

    50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 15px rgba(123, 31, 162, 0);
    }
}

/* CTA Button Styles */
.cta-button {
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button.primary {
    background: linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(123, 31, 162, 0.4);
}

.cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(123, 31, 162, 0.6);
}

.cta-button.secondary {
    background: transparent;
    color: #e1bee7;
    border: 2px solid #7b1fa2;
}

.cta-button.secondary:hover {
    background: rgba(123, 31, 162, 0.1);
    transform: translateY(-2px);
}

.cta-button.large {
    padding: 20px 40px;
    font-size: 18px;
}

.cta-button.extra-large {
    padding: 24px 48px;
    font-size: 20px;
}

/* Hero Section */
.hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px 5% 80px;
    min-height: 100vh;
    position: relative;
    background: radial-gradient(ellipse at top right, rgba(123, 31, 162, 0.15) 0%, transparent 50%);
}

.hero-content {
    flex: 1;
    max-width: 600px;
    z-index: 1;
}

.hero-badge {
    display: inline-block;
    padding: 8px 16px;
    background: rgba(123, 31, 162, 0.2);
    border: 1px solid #7b1fa2;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 24px;
    color: #e1bee7;
}

.hero-title {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 24px;
    color: #ffffff;
}

.gradient-text {
    background: linear-gradient(135deg, #e1bee7 0%, #7b1fa2 50%, #4a148c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 32px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
}

.hero-stats {
    display: flex;
    gap: 48px;
}

.stat-item {
    text-align: center;
}

.stat-value {
    font-size: 36px;
    font-weight: 700;
    color: #e1bee7;
    margin-bottom: 8px;
}

.stat-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Hero Visual */
.hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.exam-preview {
    background: rgba(30, 30, 46, 0.8);
    border: 1px solid rgba(123, 31, 162, 0.3);
    border-radius: 16px;
    padding: 32px;
    max-width: 450px;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.exam-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(123, 31, 162, 0.2);
}

.exam-timer {
    font-size: 24px;
    font-weight: 700;
    color: #e1bee7;
}

.exam-progress {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

.exam-question {
    margin-bottom: 24px;
}

.exam-question p {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
}

.exam-feedback {
    background: rgba(76, 175, 80, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.3);
    border-radius: 8px;
    padding: 16px;
}

.feedback-correct {
    color: #4caf50;
    font-weight: 500;
}

/* Feature Sections */
.feature-section {
    padding: 100px 5%;
    display: flex;
    align-items: center;
    gap: 80px;
    position: relative;
}

.feature-section.primary {
    background: linear-gradient(135deg, rgba(123, 31, 162, 0.1) 0%, transparent 100%);
}

.feature-section.secondary {
    background: linear-gradient(135deg, transparent 0%, rgba(123, 31, 162, 0.05) 100%);
}

.feature-section.tertiary {
    background: linear-gradient(135deg, rgba(123, 31, 162, 0.08) 0%, transparent 100%);
}

.feature-section.quaternary {
    background: linear-gradient(135deg, transparent 0%, rgba(123, 31, 162, 0.08) 100%);
}

.feature-section.quinary {
    background: linear-gradient(135deg, rgba(123, 31, 162, 0.1) 0%, transparent 100%);
}

.feature-content {
    flex: 1;
}

.feature-badge {
    display: inline-block;
    padding: 6px 12px;
    background: linear-gradient(135deg, #7b1fa2, #4a148c);
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
    color: #ffffff;
}

.feature-title {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #ffffff;
}

.highlight {
    color: #e1bee7;
}

.feature-description {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin-bottom: 32px;
}

.feature-list li {
    padding: 12px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-list li:last-child {
    border-bottom: none;
}

.feature-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Grading Demo */
.grading-demo {
    background: rgba(30, 30, 46, 0.8);
    border: 1px solid rgba(123, 31, 162, 0.3);
    border-radius: 16px;
    padding: 32px;
    max-width: 400px;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.grade-display {
    text-align: center;
    margin-bottom: 32px;
}

.grade-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7b1fa2, #4a148c);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(123, 31, 162, 0.4);
}

.grade-letter {
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
}

.grade-percent {
    font-size: 24px;
    font-weight: 600;
    color: #e1bee7;
}

.grade-breakdown {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.breakdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
}

.breakdown-label {
    flex: 1;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
}

.breakdown-bar {
    flex: 2;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #7b1fa2, #e1bee7);
    border-radius: 4px;
    transition: width 1s ease-out;
}

.breakdown-score {
    font-size: 14px;
    font-weight: 600;
    color: #e1bee7;
    min-width: 40px;
    text-align: right;
}

/* Difficulty Levels */
.difficulty-levels {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-top: 32px;
}

.difficulty-card {
    background: rgba(30, 30, 46, 0.6);
    border: 1px solid rgba(123, 31, 162, 0.2);
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s ease;
}

.difficulty-card:hover {
    transform: translateY(-8px);
    border-color: #7b1fa2;
    box-shadow: 0 10px 30px rgba(123, 31, 162, 0.3);
}

.difficulty-card.foundation {
    border-left: 4px solid #4caf50;
}

.difficulty-card.intermediate {
    border-left: 4px solid #ff9800;
}

.difficulty-card.advanced {
    border-left: 4px solid #7b1fa2;
}

.difficulty-icon {
    font-size: 32px;
    margin-bottom: 16px;
}

.difficulty-card h3 {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 12px;
}

.difficulty-card p {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 16px;
}

.difficulty-progress {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.progress-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #7b1fa2, #e1bee7);
    border-radius: 3px;
    transition: width 1s ease-out;
}

.difficulty-progress span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
}

/* Demo Section */
.demo-section {
    padding: 100px 5%;
    text-align: center;
    background: linear-gradient(135deg, rgba(123, 31, 162, 0.15) 0%, transparent 100%);
}

.demo-header {
    margin-bottom: 48px;
}

.demo-title {
    font-size: 42px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
}

.demo-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
}

.demo-tabs {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;
}

.demo-tab {
    padding: 12px 24px;
    background: rgba(30, 30, 46, 0.6);
    border: 1px solid rgba(123, 31, 162, 0.3);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.demo-tab:hover {
    background: rgba(123, 31, 162, 0.2);
    border-color: #7b1fa2;
}

.demo-tab.active {
    background: linear-gradient(135deg, #7b1fa2, #4a148c);
    border-color: #7b1fa2;
    color: #ffffff;
}

.demo-content {
    background: rgba(30, 30, 46, 0.8);
    border: 1px solid rgba(123, 31, 162, 0.3);
    border-radius: 16px;
    padding: 48px;
    margin-bottom: 32px;
    backdrop-filter: blur(10px);
    min-height: 400px;
}

/* Exam Demo */
.exam-demo {
    max-width: 600px;
    margin: 0 auto;
}

.demo-question h4 {
    font-size: 18px;
    color: #e1bee7;
    margin-bottom: 16px;
}

.demo-question>p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 24px;
}

.demo-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 24px;
}

.demo-option {
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(123, 31, 162, 0.2);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.demo-option:hover {
    background: rgba(123, 31, 162, 0.1);
    border-color: #7b1fa2;
}

.demo-option.correct {
    background: rgba(76, 175, 80, 0.2);
    border-color: #4caf50;
    color: #4caf50;
}

.demo-feedback {
    background: rgba(76, 175, 80, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.3);
    border-radius: 8px;
    padding: 16px;
    text-align: left;
}

.demo-feedback strong {
    color: #4caf50;
}

/* Resources Demo */
.resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
}

.resource-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(123, 31, 162, 0.2);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
}

.resource-card:hover {
    transform: translateY(-4px);
    border-color: #7b1fa2;
    box-shadow: 0 10px 30px rgba(123, 31, 162, 0.2);
}

.resource-icon {
    font-size: 48px;
    margin-bottom: 16px;
}

.resource-card h4 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
}

.resource-card p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 16px;
}

.resource-btn {
    padding: 8px 16px;
    background: linear-gradient(135deg, #7b1fa2, #4a148c);
    border: none;
    border-radius: 6px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.resource-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(123, 31, 162, 0.4);
}

/* Progress Demo */
.progress-overview {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 300px;
    gap: 48px;
}

.progress-chart {
    display: flex;
    align-items: flex-end;
    gap: 32px;
}

.chart-bar {
    width: 80px;
    background: linear-gradient(180deg, #7b1fa2, #4a148c);
    border-radius: 8px 8px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 8px;
    transition: height 1s ease-out;
    position: relative;
}

.chart-bar::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, rgba(123, 31, 162, 0.3), transparent);
    border-radius: 8px 8px 0 0;
}

.chart-label {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
    position: relative;
    z-index: 1;
}

.chart-value {
    font-size: 18px;
    font-weight: 700;
    color: #e1bee7;
    position: relative;
    z-index: 1;
}

/* Resource Showcase */
.resource-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 32px;
}

.resource-item {
    background: rgba(30, 30, 46, 0.6);
    border: 1px solid rgba(123, 31, 162, 0.2);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
}

.resource-item:hover {
    transform: translateY(-4px);
    border-color: #7b1fa2;
    box-shadow: 0 10px 30px rgba(123, 31, 162, 0.2);
}

.resource-emoji {
    font-size: 48px;
    margin-bottom: 16px;
}

.resource-item h4 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
}

.resource-item p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

/* Feedback Demo */
.feedback-demo {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
}

.feedback-item {
    display: flex;
    gap: 16px;
    background: rgba(30, 30, 46, 0.6);
    border: 1px solid rgba(123, 31, 162, 0.2);
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s ease;
}

.feedback-item:hover {
    border-color: #7b1fa2;
}

.feedback-item.correct {
    border-left: 4px solid #4caf50;
}

.feedback-item.incorrect {
    border-left: 4px solid #cf6679;
}

.feedback-icon {
    font-size: 24px;
    font-weight: 700;
    min-width: 32px;
}

.feedback-item.correct .feedback-icon {
    color: #4caf50;
}

.feedback-item.incorrect .feedback-icon {
    color: #cf6679;
}

.feedback-content h4 {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
}

.feedback-content p {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 12px;
}

.feedback-action {
    padding: 8px 16px;
    background: linear-gradient(135deg, #7b1fa2, #4a148c);
    border: none;
    border-radius: 6px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.feedback-action:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(123, 31, 162, 0.4);
}

/* Notes Preview */
.notes-preview {
    margin-top: 32px;
}

.note-card {
    background: rgba(30, 30, 46, 0.8);
    border: 1px solid rgba(123, 31, 162, 0.3);
    border-radius: 12px;
    padding: 32px;
    max-width: 600px;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.note-card h4 {
    font-size: 20px;
    font-weight: 600;
    color: #e1bee7;
    margin-bottom: 16px;
}

.note-card p {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 12px;
}

.note-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.note-card li {
    padding: 8px 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    padding-left: 24px;
    position: relative;
}

.note-card li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #7b1fa2;
}

/* Final CTA Section */
.final-cta {
    padding: 120px 5%;
    text-align: center;
    background: linear-gradient(135deg, rgba(123, 31, 162, 0.2) 0%, rgba(74, 20, 140, 0.2) 100%);
    position: relative;
}

.cta-content {
    max-width: 800px;
    margin: 0 auto;
}

.cta-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
    color: #ffffff;
}

.cta-subtitle {
    font-size: 20px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 48px;
}

.cta-actions {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 32px;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
}

.cta-features span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
}

/* Footer */
.landing-footer {
    background: rgba(10, 10, 26, 0.8);
    border-top: 1px solid rgba(123, 31, 162, 0.2);
    padding: 48px 5% 24px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 48px;
    margin-bottom: 32px;
}

.footer-section h4 {
    font-size: 16px;
    font-weight: 600;
    color: #e1bee7;
    margin-bottom: 16px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section li {
    padding: 8px 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: color 0.3s ease;
}

.footer-section li:hover {
    color: #e1bee7;
}

.footer-bottom {
    text-align: center;
    padding-top: 24px;
    border-top: 1px solid rgba(123, 31, 162, 0.2);
}

.footer-bottom p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-section {
        flex-direction: column;
        text-align: center;
        padding: 80px 5% 60px;
    }

    .hero-content {
        max-width: 100%;
        margin-bottom: 48px;
    }

    .hero-actions {
        justify-content: center;
    }

    .hero-stats {
        justify-content: center;
    }

    .feature-section {
        flex-direction: column;
        gap: 48px;
    }

    .feature-content,
    .feature-visual {
        flex: 1;
        width: 100%;
    }

    .demo-options {
        grid-template-columns: 1fr;
    }

    .cta-actions {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 36px;
    }

    .hero-subtitle {
        font-size: 16px;
    }

    .feature-title {
        font-size: 32px;
    }

    .demo-title {
        font-size: 32px;
    }

    .cta-title {
        font-size: 36px;
    }

    .difficulty-levels {
        grid-template-columns: 1fr;
    }

    .resource-showcase {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    .persistent-cta {
        bottom: 20px;
        right: 20px;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 28px;
    }

    .feature-title {
        font-size: 24px;
    }

    .demo-title {
        font-size: 24px;
    }

    .cta-title {
        font-size: 28px;
    }

    .stat-value {
        font-size: 28px;
    }

    .grade-circle {
        width: 120px;
        height: 120px;
    }

    .grade-letter {
        font-size: 36px;
    }

    .grade-percent {
        font-size: 20px;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feature-section,
.demo-section,
.final-cta {
    animation: fadeInUp 0.8s ease-out;
}

/* Scrollbar Styling */
.landing-page::-webkit-scrollbar {
    width: 10px;
}

.landing-page::-webkit-scrollbar-track {
    background: rgba(10, 10, 26, 0.5);
}

.landing-page::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #7b1fa2, #4a148c);
    border-radius: 5px;
}

.landing-page::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #9c27b0, #7b1fa2);
}
```

### File: `./src/styles/Classes.css`

```css
/* Classes Page Styles */
.classes-container-v2 {
  min-height: 100vh;
  background: #10111A; /* Exact background color from Figma */
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.classes-main {
  padding-top: 70px;
}

.classes-content {
  max-width: 1200px; /* Widen container to ensure 3-column grid */
  margin: 0 auto;
  padding: 0 24px; /* Exact padding from Figma */
}

.page-header {
  margin-bottom: 40px; /* Exact spacing from Figma */
  padding-top: 32px; /* Add top padding as per Figma */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px; /* Exact spacing from Figma */
  gap: 24px; /* Exact gap from Figma */
}

.title-section {
  flex: 1;
}

.page-title {
  font-size: 32px; /* Exact size from Figma */
  font-weight: 600; /* Semi-bold as per Figma */
  margin: 0 0 8px 0; /* Exact margin from Figma */
  color: #FFFFFF;
  line-height: 1.2;
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
}

.page-subtitle {
  font-size: 16px; /* Exact size from Figma */
  color: #A0A0A0; /* Exact color from Figma */
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
}

.search-section {
  flex-shrink: 0;
}

.search-input-wrapper {
  position: relative;
  width: 280px; /* Exact width from Figma */
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #A0A0A0; /* Exact color from Figma */
  z-index: 1;
  font-size: 20px; /* Exact size from Figma */
}

.search-input {
  width: 100%;
  height: 48px; /* Exact height from Figma */
  padding: 12px 16px 12px 48px; /* Exact padding from Figma */
  border-radius: 24px; /* Exact border radius from Figma */
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 30, 46, 0.8); /* Exact background from Figma */
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 14px; /* Exact font size from Figma */
  font-weight: 400;
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  background: rgba(30, 30, 46, 0.9); /* Slightly darker on focus */
  border-color: rgba(106, 48, 245, 0.5);
  box-shadow: 0 0 0 3px rgba(106, 48, 245, 0.1);
}

.search-input::placeholder {
  color: #A0A0A0; /* Exact placeholder color from Figma */
  font-weight: 400;
}

/* Filter buttons section */
.filter-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
}

.filter-btn.active {
  background: rgba(106, 48, 245, 0.2);
  border-color: rgba(106, 48, 245, 0.5);
  color: #fff;
}

.classes-section {
  margin-top: 8px; /* Adjusted spacing with filter buttons */
}

.classes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default to 3 cards per row */
  gap: 24px; /* Exact gap from Figma */
  padding: 0;
}

.class-card {
  position: relative;
  border-radius: 36px; /* Exact border radius from Figma */
  background-color: #1E1E2E; /* Exact background color from Figma */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Exact border from Figma */
  background-clip: padding-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25); /* Exact shadow from Figma */
  z-index: 1;
  overflow: hidden; /* Ensure content doesn't overflow rounded corners */
}

.class-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  transition: background 0.3s ease;
}

.class-card:hover {
  transform: translateY(-4px); /* Subtle lift on hover */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35); /* Enhanced shadow on hover */
}

.class-card:hover::before {
  background: linear-gradient(135deg, rgba(146, 107, 255, 0.8), rgba(106, 48, 245, 0.8)); /* Exact gradient from Figma */
}

.class-card-content {
  padding: 24px; /* Exact padding from Figma */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.class-header {
  display: flex;
  align-items: center;
  gap: 16px; /* Exact gap from Figma */
  margin-bottom: 32px; /* Exact spacing from Figma */
}

.class-icon-wrapper {
  position: relative; /* For pseudo-element positioning */
  overflow: hidden; /* Keep gradient within the border radius */
  z-index: 0; /* Create a stacking context */
}

.class-icon-wrapper::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1; /* Position behind the icon */
  margin: -2px; /* Creates the border thickness */
  border-radius: inherit; /* Match the parent's border-radius */
  background: linear-gradient(135deg, #7B2FF2, #1A8FFF); /* Gradient from Figma */
}

.class-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px; /* Exact size from Figma */
  height: 64px; /* Exact size from Figma */
  border-radius: 24px; /* Exact border radius from Figma */
  background: rgba(30, 30, 46, 0.8); /* Exact background from Figma */
  backdrop-filter: blur(10px);
  /* Positioning context is now in the rule above */
}

.class-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px; /* Exact icon size from Figma */
  color: inherit; /* Inherit color from parent */
}

.class-name {
  font-size: 20px; /* Exact font size from Figma */
  font-weight: 600; /* Semi-bold as per Figma */
  margin: 0;
  color: #ffffff;
  line-height: 1.4; /* Exact line height from Figma */
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
}

/* Progress Section */
.progress-section {
  display: flex;
  justify-content: center;
  margin: 24px 0; /* Exact spacing from Figma */
}

.progress-circle-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px; /* Exact size from Figma */
  height: 120px; /* Exact size from Figma */
}

.progress-ring {
  transform: rotate(-90deg);
  width: 120px; /* Exact size from Figma */
  height: 120px; /* Exact size from Figma */
}

.progress-ring-bg {
  stroke: rgba(255, 255, 255, 0.1); /* Exact color from Figma */
  stroke-width: 8px; /* Exact stroke width from Figma */
  transition: stroke-dasharray 0.3s ease;
}

.progress-ring-progress {
  stroke-width: 8px; /* Exact stroke width from Figma */
  transition: stroke-dasharray 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: progressAnimation 1.2s ease-out;
}

@keyframes progressAnimation {
  0% {
    stroke-dasharray: 0 283;
  }
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.progress-percentage {
  font-size: 32px; /* Exact font size from Figma */
  font-weight: 600; /* Semi-bold as per Figma */
  color: #FFFFFF;
  line-height: 1.2; /* Exact line height from Figma */
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
}

/* Class Info */
.class-info {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Exact gap from Figma */
  margin: 32px 0; /* Exact margin from Figma */
  padding: 16px; /* Exact padding from Figma */
  background: rgba(30, 30, 46, 0.8); /* Exact background from Figma */
  border-radius: 24px; /* Exact border radius from Figma */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Exact border from Figma */
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  font-size: 14px; /* Exact size from Figma */
  color: #A0AEC0; /* Exact color from Figma */
  font-weight: 400;
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
}

.info-value {
  font-size: 14px; /* Exact size from Figma */
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
}

/* Continue Learning Button */
.continue-learning-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px; /* Exact padding from Figma */
  border-radius: 24px; /* Exact border radius from Figma */
  text-decoration: none;
  color: #ffffff;
  font-size: 16px; /* Exact font size from Figma */
  font-weight: 500; /* Medium weight as per Figma */
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: auto;
  border: none;
  cursor: pointer;
  width: 100%; /* Full width as per Figma */
  max-width: 300px; /* Limit width as per Figma */
}

.continue-learning-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
  box-shadow: 0 8px 16px rgba(106, 48, 245, 0.3); /* Enhanced shadow on hover */
}

.continue-learning-btn:active {
  transform: translateY(0);
}

/* Science Group */
.science-group-container {
  background: rgba(30, 30, 46, 0.3); /* Subtle background to group items */
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 36px; /* Match card border radius */
  padding: 32px;
  margin-bottom: 40px; /* Space between the group and other cards */
}

.science-group-title {
  font-size: 24px; /* Slightly smaller than page title */
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 24px 0; /* Space below the title */
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Inter', sans-serif;
}

.other-classes-grid {
  margin-top: 24px; /* Space above the other classes if the science group is present */
}

/* No Results */
.no-results {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px; /* Taller for better visual balance */
}

.no-results-content {
  text-align: center;
  padding: 32px; /* Exact padding from Figma */
  background: rgba(30, 30, 46, 0.8); /* Exact background from Figma */
  border-radius: 36px; /* Exact border radius from Figma */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Exact border from Figma */
  max-width: 500px; /* Limit width for better readability */
}

.no-results-text {
  font-size: 16px; /* Exact font size from Figma */
  color: #A0AEC0; /* Exact color from Figma */
  margin: 0 0 24px 0; /* Exact margin from Figma */
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
  line-height: 1.5; /* Exact line height from Figma */
}

.clear-search-btn {
  padding: 12px 24px; /* Exact padding from Figma */
  background: linear-gradient(135deg, #6A30F5, #926BFF); /* Exact gradient from Figma */
  color: #ffffff;
  border: none;
  border-radius: 24px; /* Exact border radius from Figma */
  font-size: 16px; /* Exact font size from Figma */
  font-weight: 500; /* Medium weight as per Figma */
  font-family: 'Inter', sans-serif; /* Use Inter as per Figma */
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(106, 48, 245, 0.4); /* Enhanced shadow on hover */
}



@media (max-width: 992px) {
  .classes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .classes-content {
    padding: 16px; /* Exact padding from Figma */
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px; /* Exact gap from Figma */
  }
  
  .search-input-wrapper {
    width: 100%;
    max-width: 100%;
  }
  
  .page-title {
    font-size: 28px; /* Slightly smaller on mobile */
  }
  
  .classes-grid {
    grid-template-columns: 1fr;
    gap: 16px; /* Reduced gap on mobile */
  }
  
  .class-card-content {
    padding: 16px; /* Reduced padding on mobile */
  }
  
  .class-header {
    margin-bottom: 24px; /* Reduced spacing on mobile */
  }
  
  .class-icon-wrapper {
    width: 56px; /* Slightly smaller on mobile */
    height: 56px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px; /* Even smaller on very small screens */
  }
  
  .header-text h1 {
    font-size: 2rem;
  }
}
```

### File: `./src/styles/Home.css`

```css
/* Home page specific styles - Override globals */

/* Homepage-specific CSS variables that override globals.css */
.home-page-wrapper {
  --primary: #7B2FF2 !important;
  /* Violet - Override global */
  --secondary: #F357A8 !important;
  /* Pink - Override global */
  --accent: #00C6FB !important;
  /* Cyan - Override global */
  --brand-purple: #79437D !important;
  /* Original POP purple for accents */
  --background-dark: #0B0B14 !important;
  --surface: #181828 !important;
  --text-light: #fff !important;
  --text-muted: #D1D5DB !important;
  --secondary: #F357A8 !important;
  /* Pink */
  --accent: #00C6FB !important;
  /* Cyan - Override global */
  --brand-purple: #79437D !important;
  --background-dark: #0B0B14 !important;
  --surface: #181828 !important;
  --text-light: #fff !important;
  --text-muted: #D1D5DB !important;
}

/* Force Inter across the entire landing page */
.home-page-wrapper,
.home-page-wrapper * {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

/* Force Inter font for hero heading */
#hero-heading {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}



/* === HERO SECTION STYLES === */
.home-page-wrapper .hero-section {
  position: relative !important;
  padding: 4rem 0 6rem !important;
  overflow: hidden !important;
}

.home-page-wrapper .hero-bg-blob {
  position: absolute !important;
  top: -300px !important;
  right: -300px !important;
  width: 800px !important;
  height: 800px !important;
  background: radial-gradient(circle, rgba(123, 47, 242, 0.3) 0%, rgba(0, 198, 251, 0.1) 50%, rgba(11, 11, 20, 0) 70%) !important;
  border-radius: 50% !important;
  filter: blur(80px) !important;
  z-index: -1 !important;
}

.home-page-wrapper .modern-hero {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 4rem !important;
}

.home-page-wrapper .hero-text {
  flex: 1 !important;
}

.home-page-wrapper .hero-text h1 {
  font-size: 3.5rem !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
  margin-bottom: 1.5rem !important;
  color: #FFFFFF !important;
}

/* "POP Studying" Gradient Text in Hero */
.home-page-wrapper .brand-gradient {
  background: linear-gradient(90deg, #3066F6 0%, #F357A8 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-weight: 800 !important;
  display: inline !important;
}

.home-page-wrapper .hero-subheadline {
  font-size: 1.1rem !important;
  line-height: 1.6 !important;
  color: var(--text-muted) !important;
  margin-bottom: 2rem !important;
}

/* "Start Studying" CTA Button in Hero */
.home-page-wrapper .hero-cta {
  display: inline-block !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  padding: 0.8rem 2.2rem !important;
  border-radius: 30px !important;
  text-decoration: none !important;
  color: #FFFFFF !important;
  background: linear-gradient(90deg, #7B2FF2 0%, #A059F6 100%) !important;
  border: none !important;
  box-shadow: 0 0 25px rgba(123, 47, 242, 0.6), 0 0 50px rgba(123, 47, 242, 0.4) !important;
  transition: all 0.3s ease !important;
}

.home-page-wrapper .hero-cta:hover {
  transform: translateY(-2px) scale(1.03) !important;
  box-shadow: 0 0 30px rgba(123, 47, 242, 0.8), 0 0 60px rgba(123, 47, 242, 0.6) !important;
}

.home-page-wrapper .hero-image {
  flex: 1 !important;
}

/* Hero Image Glow Effect */
.home-page-wrapper .hero-image img {
  width: 100% !important;
  height: auto !important;
  border-radius: 20px !important;
  box-shadow: 0 0 40px rgba(0, 198, 251, 0.5), 0 0 80px rgba(0, 198, 251, 0.3) !important;
}

/* === FEATURES SECTION STYLES === */
.home-page-wrapper .features-section {
  padding: 6rem 0 !important;
  position: relative !important;
  background-color: rgba(24, 24, 40, 0.5) !important;
}

.home-page-wrapper .section-title {
  text-align: center !important;
  margin-bottom: 4rem !important;
}

.home-page-wrapper .glow-title {
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  color: var(--text-light) !important;
  position: relative !important;
  display: inline-block !important;
  margin-bottom: 1rem !important;
}

.home-page-wrapper .glow-title::after {
  content: '' !important;
  position: absolute !important;
  bottom: -10px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 80px !important;
  height: 3px !important;
  background: linear-gradient(90deg, var(--primary), var(--accent)) !important;
  border-radius: 3px !important;
}

.home-page-wrapper .features-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
  gap: 2rem !important;
  margin-bottom: 3rem !important;
}

.home-page-wrapper .feature-card {
  background: rgba(24, 24, 40, 0.7) !important;
  border-radius: 16px !important;
  padding: 2rem !important;
  transition: all 0.3s ease !important;
  border: 1px solid rgba(123, 47, 242, 0.1) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
}

.home-page-wrapper .feature-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 10px 30px rgba(123, 47, 242, 0.2) !important;
  border-color: rgba(123, 47, 242, 0.3) !important;
}

.home-page-wrapper .feature-icon {
  width: 60px !important;
  height: 60px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, rgba(123, 47, 242, 0.2), rgba(0, 198, 251, 0.2)) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-bottom: 1.5rem !important;
  font-size: 1.8rem !important;
  color: var(--accent) !important;
}

.home-page-wrapper .classes-icon,
.home-page-wrapper .exams-icon,
.home-page-wrapper .feedback-icon,
.home-page-wrapper .collaboration-icon {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.home-page-wrapper .feature-card h3 {
  font-size: 1.3rem !important;
  font-weight: 600 !important;
  margin-bottom: 1rem !important;
  color: var(--text-light) !important;
}

.home-page-wrapper .feature-card p {
  color: var(--text-muted) !important;
  line-height: 1.6 !important;
  font-size: 0.95rem !important;
}

.home-page-wrapper .features-cta {
  text-align: center !important;
  margin-top: 2rem !important;
}

.home-page-wrapper .features-cta .btn {
  display: inline-block !important;
  padding: 0.8rem 2rem !important;
  background: rgba(123, 47, 242, 0.1) !important;
  color: var(--text-light) !important;
  border: 1px solid rgba(123, 47, 242, 0.3) !important;
  border-radius: 30px !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
}

.home-page-wrapper .features-cta .btn:hover {
  background: rgba(123, 47, 242, 0.2) !important;
  border-color: rgba(123, 47, 242, 0.5) !important;
  transform: translateY(-2px) !important;
}

/* === ABOUT SECTION STYLES === */
.home-page-wrapper .about-section {
  padding: 6rem 0 !important;
  position: relative !important;
  overflow: hidden !important;
}

.home-page-wrapper .about-content {
  max-width: 800px !important;
  margin: 0 auto !important;
  text-align: center !important;
}

.home-page-wrapper .about-text {
  font-size: 1.1rem !important;
  line-height: 1.8 !important;
  color: var(--text-muted) !important;
  margin-bottom: 2.5rem !important;
}

.home-page-wrapper .about-cta {
  margin-top: 2rem !important;
}

.home-page-wrapper .about-cta .btn {
  display: inline-block !important;
  padding: 0.8rem 2.2rem !important;
  background: linear-gradient(90deg, var(--primary), var(--secondary)) !important;
  color: var(--text-light) !important;
  border-radius: 30px !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 0 20px rgba(243, 87, 168, 0.4), 0 0 40px rgba(243, 87, 168, 0.2) !important;
}

.home-page-wrapper .about-cta .btn:hover {
  transform: translateY(-2px) scale(1.03) !important;
  box-shadow: 0 0 25px rgba(243, 87, 168, 0.6), 0 0 50px rgba(243, 87, 168, 0.3) !important;
}

/* === FOOTER STYLES === */
.home-page-wrapper .footer {
  background-color: rgba(11, 11, 20, 0.9) !important;
  padding: 4rem 0 2rem !important;
  position: relative !important;
  border-top: 1px solid rgba(123, 47, 242, 0.1) !important;
}

.home-page-wrapper .footer-container {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  gap: 3rem !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 0 2rem !important;
}

.home-page-wrapper .footer-logo {
  display: flex !important;
  flex-direction: column !important;
}

.home-page-wrapper .footer-logo img {
  height: 40px !important;
  width: auto !important;
  margin-bottom: 1rem !important;
}

.home-page-wrapper .footer-description {
  color: var(--text-muted) !important;
  font-size: 0.9rem !important;
  line-height: 1.6 !important;
  margin-bottom: 1.5rem !important;
}

.home-page-wrapper .footer-links-column h4 {
  color: var(--text-light) !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  margin-bottom: 1.5rem !important;
  position: relative !important;
}

.home-page-wrapper .footer-links-column h4::after {
  content: '' !important;
  position: absolute !important;
  bottom: -8px !important;
  left: 0 !important;
  width: 30px !important;
  height: 2px !important;
  background: linear-gradient(90deg, var(--primary), var(--accent)) !important;
}

.home-page-wrapper .footer-links-column ul {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.home-page-wrapper .footer-links-column li {
  margin-bottom: 0.8rem !important;
}

.home-page-wrapper .footer-links-column a {
  color: var(--text-muted) !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  font-size: 0.95rem !important;
}

.home-page-wrapper .footer-links-column a:hover {
  color: var(--accent) !important;
  padding-left: 5px !important;
}

.home-page-wrapper .footer-copyright {
  text-align: center !important;
  padding-top: 2rem !important;
  margin-top: 3rem !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: var(--text-muted) !important;
  font-size: 0.9rem !important;
}

/* === RESPONSIVE STYLES === */
/* Tablet Styles */
@media (max-width: 1024px) {
  .home-page-wrapper .modern-hero {
    flex-direction: column !important;
    text-align: center !important;
    gap: 2.5rem !important;
  }

  .home-page-wrapper .hero-text h1 {
    font-size: 3rem !important;
  }

  .home-page-wrapper .hero-image {
    max-width: 80% !important;
    margin: 0 auto !important;
  }

  .home-page-wrapper .features-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .home-page-wrapper .footer-container {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .home-page-wrapper .navbar-center {
    display: none !important;
  }

  .home-page-wrapper .navbar-container {
    justify-content: space-between !important;
  }

  .home-page-wrapper .hero-text h1 {
    font-size: 2.5rem !important;
  }

  .home-page-wrapper .hero-subheadline {
    font-size: 1rem !important;
  }

  .home-page-wrapper .features-grid {
    grid-template-columns: 1fr !important;
  }

  .home-page-wrapper .section-title h2 {
    font-size: 2rem !important;
  }

  .home-page-wrapper .footer-container {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }

  .home-page-wrapper .about-text {
    font-size: 1rem !important;
  }
}

/* Small Mobile Styles */
@media (max-width: 480px) {
  .home-page-wrapper .hero-text h1 {
    font-size: 2rem !important;
  }

  .home-page-wrapper .container {
    padding: 0 1rem !important;
  }

  .home-page-wrapper .hero-section {
    padding: 2rem 0 4rem !important;
  }

  .home-page-wrapper .features-section,
  .home-page-wrapper .about-section {
    padding: 4rem 0 !important;
  }
}

:root {
  --primary: #7B2FF2;
  /* Violet */
  --secondary: #F357A8;
  /* Pink */
  --accent: #00C6FB;
  /* Cyan */
  --brand-purple: #79437D;
  /* Original POP purple for accents */
  --background-dark: #0B0B14;
  --surface: #181828;
  --text-light: #fff;
  --text-muted: #D1D5DB;
}

/* Homepage background */
.home-page-wrapper {
  min-height: 100vh;
  color: #fff !important;
  font-family: 'Inter', sans-serif !important;
  background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%) !important;
}

/* Override body styles when on homepage */
body:has(.home-page-wrapper) {
  background: transparent !important;
  color: #fff !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

/* Container for consistent spacing */
.home-page-wrapper .container {
  width: 100% !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 0 2rem !important;
}

body,
.home-page {
  background: var(--background-dark) !important;
  color: var(--text-light);
  font-family: 'Inter', sans-serif;
}

/* Homepage background */
.home-page-wrapper {
  min-height: 100vh;
  color: #fff !important;
  background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #2c3e50 100%) !important;
}



/* Hero Section Modern Redesign */
.home-page-wrapper .hero-section {
  position: relative;
  padding: 0;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  background: transparent !important;
  padding-top: 100px;
  margin-top: -60px;
}

.home-page-wrapper .hero-section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 80px;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(11, 11, 20, 0) 0%, var(--background-dark) 100%);
  z-index: 2;
}

.home-page-wrapper .hero-bg-blob {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 700px;
  background: radial-gradient(circle at 60% 40%, rgba(123, 47, 242, 0.13) 0%, rgba(0, 198, 251, 0.10) 55%, transparent 100%);
  filter: blur(60px);
  z-index: 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.home-page-wrapper .hero-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.home-page-wrapper .modern-hero {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 4rem;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.home-page-wrapper .hero-text {
  flex: 0 1 600px;
  max-width: 600px;
  text-align: left;
  margin: 0;
  padding-top: 40px;
}

.home-page-wrapper .hero-text h1 {
  font-size: 3.5rem !important;
  font-weight: 800;
  line-height: 1.2;
  color: #FFFFFF !important;
  margin-bottom: 1rem;
  text-align: left;
}

.home-page-wrapper .hero-text h1 .brand-gradient {
  background: linear-gradient(135deg, #7B2FF2 0%, #F357A8 50%, #00C6FB 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-weight: 800;
  display: inline;
}

.home-page-wrapper .hero-subheadline {
  font-size: 1.1rem !important;
  font-weight: 400;
  color: #D1D5DB !important;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  max-width: 500px;
  text-align: left;
}

.home-page-wrapper .hero-cta {
  display: inline-block;
  font-size: 1rem !important;
  font-weight: 600;
  padding: 0.85rem 2.2rem !important;
  border-radius: 25px !important;
  text-decoration: none;
  color: #FFFFFF !important;
  background: linear-gradient(135deg, #7B2FF2 0%, #00C6FB 100%) !important;
  border: none !important;
  transition: all 0.3s ease !important;
  text-align: center;
  box-shadow: 0 0 25px rgba(0, 198, 251, 0.6), 0 0 50px rgba(0, 198, 251, 0.4) !important;
  cursor: pointer;
}

.home-page-wrapper .hero-cta:hover {
  transform: translateY(-2px) scale(1.02) !important;
  box-shadow: 0 0 30px rgba(0, 198, 251, 0.8), 0 0 60px rgba(0, 198, 251, 0.5) !important;
}

.home-page-wrapper .hero-image {
  flex: 0 0 auto;
  max-width: 500px;
  width: 100%;
  margin: 0;
  padding-left: 2rem;
  padding-top: 40px;
}

.home-page-wrapper .hero-img-glow {
  border-radius: 1.5rem;
  box-shadow: 0 8px 48px 0 var(--accent), 0 2px 16px 0 var(--secondary);
  max-width: 100%;
  height: auto;
  background: rgba(0, 198, 251, 0.04);
}

.home-page-wrapper .hero-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 198, 251, 0.4), 0 0 80px rgba(0, 198, 251, 0.2) !important;
}

@media (max-width: 1024px) {
  .home-page-wrapper .modern-hero {
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }

  .home-page-wrapper .hero-text {
    text-align: center;
    max-width: 100%;
  }

  .home-page-wrapper .hero-subheadline {
    margin-left: auto;
    margin-right: auto;
  }

  .home-page-wrapper .hero-cta {
    margin: 0 auto;
  }

  .home-page-wrapper .hero-image {
    margin: 0 auto;
    justify-content: center;
  }

  .home-page-wrapper .hero-img-glow {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .home-page-wrapper .hero-text h1 {
    font-size: 2.5rem;
  }

  .home-page-wrapper .hero-subheadline {
    font-size: 1.1rem;
  }

  .home-page-wrapper .hero-cta {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

/* Stats Section with Asymmetrical Layout */
.home-page-wrapper .stat-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.home-page-wrapper .stat-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.home-page-wrapper .stat-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.home-page-wrapper .stat-left {
  flex: 1;
  max-width: 450px;
}

.home-page-wrapper .stat-headline {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.home-page-wrapper .stat-description p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1rem;
}

.home-page-wrapper .stat-attribution {
  font-size: 0.95rem !important;
  font-weight: 600;
  color: #8b5cf6 !important;
  font-style: italic;
}

.home-page-wrapper .stat-right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
}

.home-page-wrapper .stat-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
}

.home-page-wrapper .stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.3);
}

/* Staggered positioning for visual interest */
.home-page-wrapper .stat-1 {
  transform: translateY(-20px);
  grid-column: 1;
  grid-row: 1;
}

.home-page-wrapper .stat-2 {
  transform: translateY(10px);
  grid-column: 2;
  grid-row: 1;
}

.home-page-wrapper .stat-3 {
  transform: translateY(-5px);
  grid-column: 1 / span 2;
  grid-row: 2;
  max-width: 300px;
  margin: 0 auto;
}

.home-page-wrapper .stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #8b5cf6;
  display: block;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.home-page-wrapper .stat-label {
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Subjects Section */
.home-page-wrapper .subjects-section {
  background: linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.03) 100%);
  padding: 8rem 0;
  position: relative;
}

.home-page-wrapper .subjects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.home-page-wrapper .subject-card {
  background: rgba(24, 24, 40, 0.95);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.home-page-wrapper .subject-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.home-page-wrapper .subject-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
}

.home-page-wrapper .subject-card:hover::before {
  top: -25%;
  right: -25%;
}

.home-page-wrapper .subject-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.home-page-wrapper .subject-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(0, 198, 251, 0.2));
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.home-page-wrapper .subject-card h3 {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.home-page-wrapper .subject-levels {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.home-page-wrapper .level-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.home-page-wrapper .level-badge.foundation {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.home-page-wrapper .level-badge.intermediate {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.home-page-wrapper .level-badge.advanced {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.home-page-wrapper .subject-card p {
  color: #94a3b8;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Enhanced CTA Section */
.home-page-wrapper .cta-section {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 198, 251, 0.05) 100%);
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.home-page-wrapper .cta-section::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.home-page-wrapper .cta-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 198, 251, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.home-page-wrapper .cta-content {
  position: relative;
  z-index: 2;
}

.home-page-wrapper .cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #fff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-page-wrapper .cta-content p {
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 2rem;
}

.home-page-wrapper .cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.home-page-wrapper .hero-cta.primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%) !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  padding: 0.9rem 2.5rem !important;
  border-radius: 25px !important;
  text-decoration: none !important;
  border: 2px solid rgba(139, 92, 246, 0.5) !important;
  display: inline-block !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4) !important;
  position: relative !important;
  overflow: hidden !important;
}

.home-page-wrapper .hero-cta.primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.home-page-wrapper .hero-cta.primary:hover {
  transform: translateY(-2px) scale(1.03) !important;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6) !important;
  border-color: rgba(139, 92, 246, 0.7) !important;
}

.home-page-wrapper .hero-cta.primary:hover::before {
  left: 100%;
}

.home-page-wrapper .hero-cta.secondary {
  background: transparent !important;
  color: #8b5cf6 !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  padding: 0.9rem 2.5rem !important;
  border-radius: 25px !important;
  text-decoration: none !important;
  border: 2px solid rgba(139, 92, 246, 0.5) !important;
  display: inline-block !important;
  transition: all 0.3s ease !important;
}

.home-page-wrapper .hero-cta.secondary:hover {
  background: rgba(139, 92, 246, 0.1) !important;
  transform: translateY(-2px) !important;
  border-color: rgba(139, 92, 246, 0.7) !important;
}

/* Features section styles */
.home-page-wrapper .features-section {
  background: none !important;
  padding: 8rem 0 3rem 0;
  position: relative;
  z-index: 3;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: rgba(24, 24, 40, 0.95);
  border-radius: 1.5rem;
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  box-shadow: 0 5px 30px 0 rgba(123, 47, 242, 0.08), 0 2px 8px 0 rgba(0, 198, 251, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: box-shadow 0.25s, border-color 0.25s, transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 40px 0 var(--accent), 0 2px 16px 0 var(--primary);
  border-color: var(--primary);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-purple) 60%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(0, 198, 251, 0.4);
  box-shadow: 0 4px 20px 0 var(--secondary), 0 2px 8px 0 var(--primary);
  transition: box-shadow 0.2s;
}

.feature-card h3 {
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-muted);
}

.features-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
}

/* Testimonials section styles */
.testimonials-section {
  background-color: transparent !important;
  padding: 5rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background-color: transparent !important;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  font-size: 4rem;
  color: var(--accent);
  opacity: 0.3;
  position: absolute;
  top: -20px;
  left: -15px;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

/* About section styles */
.about-section {
  background-color: transparent !important;
  padding: 5rem 0;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-text {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

/* Contact section styles */
.contact-section {
  background-color: transparent !important;
  padding: 5rem 0;
  color: var(--text-light);
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-text {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  font-family: 'Inter', sans-serif;
}

.contact-form .home-page-wrapper .navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--bg-dark);
  padding: 2.5rem 0;
  color: var(--text-light);
}

.contact-form .btn {
  align-self: center;
  margin-top: 1rem;
  background-color: var(--bg-dark);
  padding: 1.75rem 0;
  color: var(--text-light);
}

/* Footer styles */
.footer {
  background: var(--background-dark);
  color: var(--text-light);
  padding: 3.5rem 0 1.5rem 0;
  border-top: 1.5px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 -8px 32px 0 rgba(123, 47, 242, 0.10);
  border-radius: 2rem 2rem 0 0;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.footer .container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 1.5rem;
}

.footer-links {
  display: flex;
  gap: 3.5rem;
}

.footer-links-column {
  min-width: 180px;
}

.footer-title {
  color: var(--primary);
  font-size: 1.13rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.footer-desc {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer-links-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links-column ul li {
  margin-bottom: 0.6rem;
}

.footer-links-column ul li a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.2s, text-shadow 0.2s;
  font-size: 1rem;
}

.footer-links-column ul li a:hover {
  color: var(--accent);
  text-shadow: 0 2px 8px var(--accent);
}

.footer-bottom {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.98rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  letter-spacing: 0.01em;
}

.footer-heart {
  color: #F357A8;
  font-size: 1.08em;
  vertical-align: middle;
}

@media (max-width: 900px) {

  .footer-content,
  .footer-links {
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
  }

  .footer-links-column {
    min-width: 120px;
    text-align: center;
  }
}

/* Responsive styles for Stats Section */
@media (max-width: 1024px) {
  .home-page-wrapper .stat-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  .home-page-wrapper .stat-left {
    max-width: 100%;
  }

  .home-page-wrapper .stat-right {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .home-page-wrapper .stat-1,
  .home-page-wrapper .stat-2,
  .home-page-wrapper .stat-3 {
    transform: translateY(0);
    grid-column: 1;
    grid-row: auto;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .home-page-wrapper .stat-headline {
    font-size: 2.2rem;
  }

  .home-page-wrapper .stat-description p {
    font-size: 1rem;
  }

  .home-page-wrapper .stat-number {
    font-size: 2.5rem;
  }

  .home-page-wrapper .subjects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .home-page-wrapper .subject-card {
    padding: 1.5rem;
  }

  .home-page-wrapper .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .home-page-wrapper .cta-content h2 {
    font-size: 2rem;
  }

  .home-page-wrapper .cta-content p {
    font-size: 1rem;
  }
}

/* Responsive styles */
@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-image {
    margin-top: 2rem;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-mobile-toggle {
    display: flex;
  }

  .hero-section {
    padding: 7rem 0 3rem;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .section-title h2 {
    font-size: 1.75rem;
  }
}

.glow-title {
  color: var(--accent);
  text-shadow:
    0 0 10px var(--accent),
    0 0 22px rgba(0, 198, 251, 0.75),
    0 0 2px #fff;
  font-weight: 700;
  letter-spacing: 0.01em;
}

@media (max-width: 600px) {
  .glow-title {
    font-size: 1.35rem;
    text-shadow: 0 0 7px var(--accent), 0 0 2px #fff;
  }
}

.daylight-switch {
  transition: background 0.2s, color 0.2s;
  border-radius: 20px;
  font-weight: 500;
}

.daylight-switch.daylight {
  background: #EEBAD2;
  color: #79437D;
}

.daylight-switch.night {
  background: #D0A4CB;
  color: #fff;
}
```

### File: `./src/styles/global-background.css`

```css
/* Don't apply global background to home page which has its own styling */
body:has(.home-page-wrapper) {
  background: linear-gradient(135deg, #3A3F61 0%, #274551 100%) !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  color: #f3f4f6 !important;
}
:root {
  --flashcard-bg-gradient: linear-gradient(135deg, #0A0A12 0%, #1A0F2D 60%, #140B23 100%);
}

/* Apply gradient to the entire app when flashcard-theme is present */
body #root .flashcard-theme,
html body .flashcard-theme,
.flashcard-theme {
  background: linear-gradient(135deg, #0A0A12 0%, #1A0F2D 60%, #140B23 100%) !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

/* Add a pseudo-element with higher z-index to ensure the gradient is visible */
.flashcard-theme::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #0A0A12 0%, #1A0F2D 60%, #140B23 100%);
  pointer-events: none;
}

/* Override any backgrounds in the app */
html, body, #root, .app-container, .page-container {
  background: transparent;
}

/* Make sure all containers within flashcard pages are transparent */
.flashcard-theme .flashcards-container,
.flashcard-theme .study-flashcard-container,
.flashcard-theme .app-container,
.flashcard-theme .page-container,
.flashcard-theme .content-container {
  background: transparent !important;
}

/* Force the gradient on the body when in flashcard routes */
body:has(.flashcard-theme) {
  background: linear-gradient(135deg, #0A0A12 0%, #1A0F2D 60%, #140B23 100%) !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  color: #fff;
}
```

### File: `./src/styles/Flashcards.css`

```css
/* General Container */
.flashcards-container, .study-flashcard-container {
  background: transparent; /* Make container transparent to show gradient */
  min-height: calc(100vh - 70px); /* Account for navbar height */
  padding: 2rem 4rem;
  font-family: 'Inter', sans-serif;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Toolbar */
.flashcards-header {
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 0;
}

.header-text {
  margin-bottom: 2rem;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto 2rem auto;
}

.search-input-container {
  position: relative;
  width: 400px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9CA3AF;
}

.search-input {
  width: 100%;
  background: #14141F; /* Darker input background from Figma */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: white;
  font-size: 0.9rem;
}

.search-input::placeholder {
  color: #9CA3AF;
}

.search-input:focus {
  outline: none;
  border-color: #7B2FF2;
  box-shadow: 0 0 0 2px rgba(123, 47, 242, 0.3);
}

.create-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid #7B2FF2;
  color: #7B2FF2;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.create-btn:hover {
  background-color: #7B2FF2;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(123, 47, 242, 0.3);
}



.section-header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
}

.section-title-main {
  font-size: 1.75rem;
  font-weight: 600;
  color: #FFFFFF;

}

.section-title-main.no-margin {
  margin: 0;
  padding: 0;
  border: none;
}

/* Cards Grid */

.empty-state-container {
  grid-column: 1 / -1; /* Span across all columns in the grid */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(255, 255, 255, 0.1);
}

.empty-state-illustration {
  width: 120px;
  height: auto;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.empty-state-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 0.5rem 0;
}

.empty-state-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.flashcard-set {
  background: linear-gradient(135deg, #24243e, #1e1e2e);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 320px; /* Ensure card has enough height */
  display: flex;
  flex-direction: column;
}

.flashcard-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allow content to fill available space */
  position: relative;
  padding: 0.5rem 0;
}

.flashcard-set::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(255, 215, 150, 0.05), transparent 70%);
  pointer-events: none;
  z-index: 0;
}



.flashcard-set:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  border-color: rgba(123, 47, 242, 0.8);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon.languages {
  background: rgba(123, 47, 242, 0.2);
}

.card-icon.science {
  background: rgba(0, 198, 251, 0.2);
}

.card-icon.history {
  background: rgba(255, 171, 64, 0.2);
}

.card-icon.math {
  background: rgba(52, 211, 153, 0.2);
}

.card-icon.psychology {
  background: rgba(248, 113, 113, 0.2);
}

.card-icon.programming {
  background: rgba(129, 140, 248, 0.2);
}

.category-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}

.card-header .card-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 48px;
  position: relative;
  top: 3px; /* Visual alignment nudge */
}

.card-header .card-actions > * {
  vertical-align: middle;
}

.card-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  line-height: 1;
}

.card-tag.languages {
  background: rgba(123, 47, 242, 0.2);
  color: #9D6FFF;
}

/* Study Progress Section */
.progress-section {
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.stat-icon {
  margin-bottom: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.stat-icon-img {
  width: 28px;
  height: 28px;
}

.stat-icon.streak { background-color: rgba(192, 132, 252, 0.1); }
.stat-icon.mastered { background-color: rgba(139, 92, 246, 0.1); }
.stat-icon.time { background-color: rgba(99, 102, 241, 0.1); }
.stat-icon.score { background-color: rgba(79, 70, 229, 0.1); }

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.2;
}

.stat-label {
  font-size: 1rem;
  color: #A7A2C1;
  margin-top: 0.25rem;
}

.card-tag.science {
  background: rgba(0, 198, 251, 0.2);
  color: #33D6FF;
}

/* Override for sticky header */
.page-header {
  position: static !important;
}

.card-tag.history {
  background: rgba(255, 171, 64, 0.2);
  color: #FFBE7D;
}

.card-tag.math {
  background: rgba(52, 211, 153, 0.2);
  color: #6EE7B7;
}

.card-tag.psychology {
  background: rgba(248, 113, 113, 0.2);
  color: #FCA5A5;
}

.card-tag.programming {
  background: rgba(129, 140, 248, 0.2);
  color: #A5B4FC;
}

.card-menu {
  color: #9CA3AF;
  cursor: pointer;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.5rem 0 0.75rem;
  color: #fff;
  line-height: 1.4;
  padding-right: 2rem;
  letter-spacing: 0.01em;
}

.card-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  font-weight: 400;
  letter-spacing: 0.01em;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: #9CA3AF;
}

.card-progress {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
}

.progress-fill.high {
  background: #34D399;
}

.progress-fill.medium {
  background: #FBBF24;
}

.progress-fill.low {
  background: #F87171;
}

.progress-percent {
  font-size: 0.75rem;
  font-weight: 600;
}

.progress-percent.high {
  color: #34D399;
}

.progress-percent.medium {
  color: #FBBF24;
}

.progress-percent.low {
  color: #F87171;
}

.card-actions.bottom-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1.5rem;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  gap: 1rem;
}

.study-now-container {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 30;
}

.study-btn {
  background: linear-gradient(90deg, #9333EA, #4F46E5);
  color: white;
}
```

### File: `./src/styles/ClassPage.css`

```css
/* Main Container */
.class-page-container {
  background-color: #0B0B14;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Content Wrapper */
.class-page-content {
  padding: 32px 16px;
  max-width: 1132px;
  margin: 0 auto;
}

/* Header Section */
.class-page-header {
  margin-bottom: 24px;
}

.header-text h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
  color: #FFFFFF;
}

.header-text p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #A0AEC0;
  max-width: 672px;
}

/* Filters Section */
.filters-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
}

.filter-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-btn {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  padding: 8px 4px;
  margin: 0 16px;
  color: #A0AEC0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
}

.filter-btn:hover {
  color: #FFFFFF;
}

.filter-btn.active {
  color: #FFFFFF;
  font-weight: 600;
}

.filter-btn.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #7B2FF2 0%, #1A8FFF 100%);
}

.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sort-dropdown label {
  font-size: 14px;
  font-weight: 500;
  color: #A0AEC0;
  white-space: nowrap;
}

.sort-dropdown select {
  background-color: #1E1E2E;
  border: 1px solid #3A3A4A;
  border-radius: 24px;
  padding: 8px 12px;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23A0AEC0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px; /* Make space for the arrow */
}

.sort-dropdown select:hover {
  background-color: #2A2A3A;
  border-color: #4A4A5A;
}

.sort-dropdown select:focus {
  outline: none;
  border-color: #7B2FF2;
}

/* Classes Grid */
.section-container {
  margin-bottom: 40px;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  color: #E2E8F0;
  margin-top: 32px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 24px;
  margin-top: 16px;
}

@media (max-width: 1200px) {
  .classes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .classes-grid {
    grid-template-columns: 1fr;
  }
}

/* Class Card */
.class-card {
  background-color: #1E1E2E;
  border: 1px solid #3A3A4A;
  border-radius: 36px;
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 340px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.class-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.class-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.class-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.class-card-header h3 {
  flex-grow: 1;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  color: #E2E8F0;
}

.class-icon-wrapper {
  width: 48px;
  height: 48px;
  background: linear-gradient(90deg, #7B2FF2 0%, #1A8FFF 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.class-icon-wrapper i {
  font-size: 24px;
  color: #FFFFFF;
}

/* Circular Progress */
.circular-progress {
  position: relative;
  width: 64px;
  height: 64px;
}

.circular-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #FFFFFF;
}

/* Progress Levels */
.level-details {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Spacing between rows */
  margin-bottom: 16px;
}

.level-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #E2E8F0;
}

.level-row span:first-child {
  color: #E2E8F0;
}

.level-row span:last-child {
  font-weight: 500;
}















/* Class Stats */
.class-stats {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  color: #A0AEC0;
  margin-top: 8px;
}

/* Next Topic */


/* Class Actions */






/* Add Class Card */
.add-class-card {
  background-color: #1E1E2E;
  border: 2px dashed #3A3A4A;
  border-radius: 36px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 400px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.add-class-card:hover {
  transform: translateY(-4px);
  border-color: #4A4A5A;
}

.add-icon-wrapper {
  width: 64px;
  height: 64px;
  background: linear-gradient(90deg, #7B2FF2 0%, #1A8FFF 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.add-icon-wrapper i {
  font-size: 30px;
  color: #FFFFFF;
}

.add-class-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 8px 0;
}

.add-class-card p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #A0AEC0;
  margin: 0 0 24px 0;
  max-width: 299px;
}

.browse-btn {
  background: linear-gradient(90deg, #7B2FF2 0%, #1A8FFF 100%);
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.browse-btn:hover {
  opacity: 0.9;
}

/* Info Footer */
.info-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.info-footer i {
  font-size: 24px;
  color: #A0AEC0;
}

.info-footer span {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #A0AEC0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .class-page-content {
    padding: 24px 16px;
  }

  .header-text h1 {
    font-size: 36px;
  }

  .header-text p {
    font-size: 16px;
  }

  .filters-section {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-buttons {
    justify-content: center;
  }

  .sort-dropdown {
    justify-content: center;
  }

  .classes-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .class-card,
  .add-class-card {
    max-width: 100%;
  }
}

/* Material Icons Font */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* Poppins Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Inter Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
```

### File: `./src/styles/StudyFlashcardRedesign.css`

```css
/* StudyFlashcardRedesign.css - Polished Dark Theme */

:root {
    --bg-dark-1: #3a3f61;
    --bg-dark-2: #274551;
    --text-main: #f9fafb;
    --text-muted: #9ca3af;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.1);
    --success: #10b981;
    --error: #ef4444;
    --warning: #f59e0b;
    --info: #3b82f6;
    --glass-heavy: rgba(30, 41, 59, 0.7);
    --glass-light: rgba(255, 255, 255, 0.08);
    --shadow-glow: 0 0 20px rgba(78, 168, 255, 0.15);
}

body:has(.study-flashcard-redesign) {
    background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%),
        linear-gradient(135deg, #3A3F61 0%, #274551 100%) !important;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--text-main);
}

.study-flashcard-redesign {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    font-family: 'Inter', system-ui, sans-serif;
}

/* Header */
.study-header {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
    align-self: flex-start;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid transparent;
}

.back-button:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateX(-2px);
}

.study-title h1 {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.02em;
}

.study-title p {
    color: var(--text-muted);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 400;
}

/* Progress Bar */
.study-progress-indicator {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 0.75rem 1.5rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.progress-text {
    font-family: 'Inter', monospace;
    font-size: 0.9rem;
    color: var(--text-muted);
    min-width: 60px;
}

.progress-text .current {
    color: #fff;
    font-weight: 700;
    font-size: 1.1rem;
}

.progress-bar-container {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 999px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ea8ff, #3dd9b6);
    border-radius: 999px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 12px rgba(61, 217, 182, 0.4);
}

/* Main Content */
.study-content {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}

/* Stats */
.flashcard-stats {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    width: 100%;
    justify-content: center;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--glass-light);
    padding: 1rem 2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    flex: 1;
    max-width: 180px;
    transition: transform 0.2s;
}

.stat:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
}

.stat-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
}

.stat-label {
    font-size: 0.75rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
}

.stat.correct .stat-value {
    color: var(--success);
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

.stat.incorrect .stat-value {
    color: var(--error);
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
}

/* Flashcard */
.flashcard {
    width: 100%;
    max-width: 650px;
    height: 400px;
    perspective: 1500px;
    cursor: pointer;
}

.flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
}

.flashcard.flipped .flashcard-inner {
    transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: var(--glass-heavy);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.flashcard-front {
    background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
}

.flashcard-back {
    transform: rotateY(180deg);
    background: linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95));
    border-color: rgba(78, 168, 255, 0.2);
    box-shadow: 0 0 30px rgba(78, 168, 255, 0.1);
}

.card-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.card-content p {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.difficulty-indicator .difficulty {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    font-weight: 600;
    backdrop-filter: blur(4px);
}

.difficulty.easy {
    color: #6ee7b7;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.2);
}

.difficulty.medium {
    color: #fcd34d;
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.2);
}

.difficulty.hard {
    color: #fca5a5;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.flip-hint {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--text-muted);
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.flashcard:hover .flip-hint {
    opacity: 1;
    color: #fff;
}

/* Actions */
.flashcard-actions {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
}

.action-btn {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(30, 41, 59, 0.6);
    color: var(--text-muted);
    backdrop-filter: blur(10px);
}

.action-btn:hover {
    transform: translateY(-6px) scale(1.05);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.3);
}

.action-btn.incorrect:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.4);
    color: #fca5a5;
    box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
}

.action-btn.correct:hover {
    background: rgba(16, 185, 129, 0.2);
    border-color: rgba(16, 185, 129, 0.4);
    color: #6ee7b7;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

.action-btn.help:hover {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.4);
    color: #93c5fd;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.action-btn svg {
    transition: transform 0.3s;
}

.action-btn:hover svg {
    transform: scale(1.1);
}
```

### File: `./src/styles/Jamboard.css`

```css
/* Canva-inspired Jamboard Dashboard Styles */

.jamboard-root.canva-style-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  padding: 3rem 1rem 2rem 1rem;
  background: transparent;
}

.jamboard-header-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 1100px;
  justify-content: flex-start;
}

.jamboard-title {
  color: var(--primary, #a259fa);
  font-size: 2.3rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0;
}

.jamboard-board-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
}

.jamboard-board-card {
  background: #fff;
  border-radius: 1.3rem;
  box-shadow: 0 2px 18px 0 #0001, 0 1.5px 6px 0 #0002;
  padding: 1.5rem 1.3rem 1.2rem 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  transition: box-shadow 0.18s, transform 0.18s;
  cursor: pointer;
  min-height: 140px;
  border: 1.5px solid #f0f0f0;
}
.jamboard-board-card:hover {
  box-shadow: 0 8px 32px 0 #7b2ff233, 0 2px 12px 0 #0002;
  transform: translateY(-4px) scale(1.025);
}

.jamboard-new-board-card {
  background: linear-gradient(135deg, #a259fa 0%, #7b2ff2 100%);
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-height: 140px;
  border: none;
  box-shadow: 0 4px 24px 0 #a259fa33, 0 2px 12px 0 #0001;
  transition: box-shadow 0.18s, transform 0.18s;
}
.jamboard-new-board-card:hover {
  box-shadow: 0 12px 36px 0 #7b2ff244, 0 2px 12px 0 #0002;
  transform: translateY(-6px) scale(1.04);
}

.jamboard-new-board-plus {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.jamboard-new-board-label {
  font-size: 1.08rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.jamboard-canva-card {
  background: #fff;
  color: #222;
  border: 1.5px solid #f0f0f0;
  position: relative;
  min-height: 140px;
  transition: box-shadow 0.18s, transform 0.18s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.jamboard-board-title-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.2rem;
  justify-content: space-between;
}

.jamboard-board-title {
  color: #a259fa;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.jamboard-board-date {
  color: #888;
  font-size: 0.97rem;
  margin-bottom: 0.4rem;
}

.jamboard-board-actions {
  display: flex;
  gap: 0.7rem;
  margin-top: 0.4rem;
}

.jamboard-open-btn {
  background: var(--primary, #a259fa);
  color: #fff;
  border: none;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.43rem 1.1rem;
  cursor: pointer;
  transition: background 0.18s;
}
.jamboard-open-btn:hover, .jamboard-open-btn:focus {
  background: #7b2ff2;
}

.jamboard-delete-btn {
  background: none;
  border: none;
  color: #e57373;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: color 0.16s;
  opacity: 0.6;
}
.jamboard-canva-card:hover .jamboard-delete-btn,
.jamboard-canva-card:focus-within .jamboard-delete-btn {
  opacity: 1;
}
.jamboard-delete-btn:hover, .jamboard-delete-btn:focus {
  color: #ff1744;
}

/* Modal and input styles */
.canva-modal {
  border-radius: 1.1rem;
  background: #fff;
  padding: 2rem 2.2rem 1.5rem 2.2rem;
  box-shadow: 0 8px 32px 0 #7b2ff222, 0 2px 12px 0 #0002;
  min-width: 320px;
  max-width: 98vw;
}
.canva-input {
  border: 1.5px solid #e0e0e0;
  border-radius: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  width: 100%;
  outline: none;
  transition: border 0.18s;
}
.canva-input:focus {
  border: 1.5px solid #a259fa;
}

.canva-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1.1rem;
}
.canva-create-btn {
  background: var(--primary, #a259fa);
  color: #fff;
  border: none;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: background 0.18s;
}
.canva-create-btn:hover, .canva-create-btn:focus {
  background: #7b2ff2;
}
.canva-cancel-btn {
  background: none;
  color: #888;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.7rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: color 0.18s;
}
.canva-cancel-btn:hover, .canva-cancel-btn:focus {
  color: #a259fa;
}

@media (max-width: 900px) {
  .jamboard-board-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.2rem;
  }
}
@media (max-width: 600px) {
  .jamboard-root.canva-style-root {
    padding: 1.1rem 0.2rem 2rem 0.2rem;
  }
  .jamboard-title {
    font-size: 1.3rem;
  }
  .jamboard-board-grid {
    max-width: 98vw;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
  }
  .jamboard-board-card {
    padding: 1rem 0.7rem;
  }
  .canva-modal {
    padding: 1.2rem 0.7rem 1.1rem 0.7rem;
  }
}

/* Hide delete button by default on desktop, show on hover/focus; always show on mobile */
@media (hover: none) and (pointer: coarse) {
  .jamboard-delete-btn {
    opacity: 1 !important;
  }
}

/* --- Visual Background --- */
.canva-style-root {
  background: linear-gradient(135deg, #f5f3fe 0%, #e3e0ff 100%);
  min-height: 100vh;
  position: relative;
}
.canva-style-root::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  background: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" xmlns="http://www.w3.org/2000/svg"><ellipse fill="%23a259fa22" cx="70%25" cy="-5%25" rx="60%25" ry="30%25"/><ellipse fill="%237b2ff222" cx="10%25" cy="110%25" rx="50%25" ry="30%25"/></svg>') no-repeat center center;
  opacity: 0.6;
  pointer-events: none;
}

/* --- Card Preview/Icon --- */
.jamboard-board-preview {
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #f8f7ff 60%, #e6e4fa 100%);
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  color: #a259fa;
  opacity: 0.25;
  transition: opacity 0.18s;
}
.jamboard-canva-card:hover .jamboard-board-preview {
  opacity: 0.4;
}

/* --- Card Details --- */
.jamboard-board-title {
  color: #7b2ff2;
  font-size: 1.19rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.01em;
}
.jamboard-board-date {
  color: #8a8ab2;
  font-size: 0.93rem;
  margin-bottom: 0.2rem;
}
.jamboard-badge {
  background: #e3e0ff;
  color: #7b2ff2;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0.7rem;
  padding: 0.2rem 0.7rem;
  margin-left: 0.7rem;
  margin-bottom: 0.2rem;
  display: inline-block;
}

/* --- New Board Card --- */
.jamboard-new-board-card {
  background: linear-gradient(135deg, #a259fa 0%, #7b2ff2 100%);
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-height: 140px;
  border: none;
  box-shadow: 0 4px 24px 0 #a259fa33, 0 2px 12px 0 #0001;
  transition: box-shadow 0.18s, transform 0.18s;
  position: relative;
  overflow: hidden;
}
.jamboard-new-board-plus {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  transition: transform 0.18s;
}
.jamboard-new-board-card:hover .jamboard-new-board-plus {
  transform: scale(1.18) rotate(15deg);
}
.jamboard-new-board-card::after {
  content: '\1F58C';
  font-size: 2.7rem;
  position: absolute;
  right: 1.1rem; bottom: 0.7rem;
  opacity: 0.10;
  pointer-events: none;
}

/* --- Modal Overlay --- */
.modal-overlay {
  backdrop-filter: blur(4px);
  background: rgba(80,70,110,0.07);
}

/* --- Empty State Illustration --- */
.jamboard-empty-illustration {
  width: 110px; height: 110px;
  margin: 2.5rem auto 0 auto;
  display: block;
  opacity: 0.13;
}
.empty-state {
  text-align: center;
  color: #7b2ff2;
  font-size: 1.15rem;
  margin-top: 1.5rem;
  font-weight: 500;
}

/* --- Responsive Tweaks --- */
@media (max-width: 900px) {
  .jamboard-board-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.1rem;
  }
}
@media (max-width: 600px) {
  .jamboard-root.canva-style-root {
    padding: 1.1rem 0.2rem 2rem 0.2rem;
  }
  .jamboard-title {
    font-size: 1.3rem;
  }
  .jamboard-board-grid {
    max-width: 98vw;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
  }
  .jamboard-board-card {
    padding: 1rem 0.7rem;
  }
  .canva-modal {
    padding: 1.2rem 0.7rem 1.1rem 0.7rem;
  }
  .jamboard-empty-illustration {
    width: 70px; height: 70px;
    margin-top: 1.2rem;
  }
}
```

### File: `./src/styles/Auth.css`

```css
.auth-page-center {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-dark);
  position: relative;
  overflow: hidden;
}

.auth-page-center::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(circle at 70% 30%, rgba(123,47,242,0.12) 0%, rgba(0,198,251,0.10) 50%, transparent 90%);
  filter: blur(2px);
  pointer-events: none;
}

.auth-page-center > * {
  position: relative;
  z-index: 1;
}
```

### File: `./src/styles/Home-original.css`

```css
/* Homepage-specific styles - Optimized */
:root {
  --primary-color: #7B2FF2;
  --accent-color: #00C6FB;
  --bg-dark: #0a0a0f;
  --bg-medium: #1a1a2e;
  --text-light: #ffffff;
  --text-muted: #e2e8f0;
}

/* === BASE STYLES === */
.home-page-wrapper {
  background: var(--bg-dark);
  color: var(--text-light);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

body:has(.home-page-wrapper) {
  background: var(--bg-dark) !important;
  color: var(--text-light) !important;
}

.home-page {
  background: var(--bg-dark);
  color: var(--text-light);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.home-page-wrapper.loaded .home-page {
  opacity: 1;
  transform: translateY(0);
}

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* === NAVBAR STYLES === */
.home-page-wrapper .navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.home-page-wrapper .navbar.scrolled {
  padding: 0.75rem 0;
  background: rgba(11, 11, 20, 0.95);
  box-shadow: var(--shadow-lg);
}

.home-page-wrapper .navbar-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.home-page-wrapper .navbar-logo img {
  height: 60px;
  width: auto;
}

.home-page-wrapper .navbar-center {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.home-page-wrapper .navbar-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.home-page-wrapper .navbar-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.home-page-wrapper .navbar-tools {
  position: relative;
}

.home-page-wrapper .tools-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

.home-page-wrapper .dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.home-page-wrapper .dropdown-arrow.open {
  transform: rotate(180deg);
}

.home-page-wrapper .tools-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(20, 20, 30, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-width: 150px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.home-page-wrapper .dropdown-item {
  display: block;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: var(--transition);
}

.home-page-wrapper .dropdown-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.home-page-wrapper .sign-in-btn {
  background: linear-gradient(135deg, #7B2FF2 0%, #00C6FB 100%);
  color: #ffffff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(123, 47, 242, 0.3);
}

.home-page-wrapper .sign-in-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(123, 47, 242, 0.4);
}

/* === HERO SECTION === */
.home-page-wrapper .hero-section {
  position: relative;
  padding: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%);
  padding-top: 100px;
}

.home-page-wrapper .hero-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.home-page-wrapper .modern-hero {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 4rem;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.home-page-wrapper .hero-text {
  flex: 0 1 600px;
  max-width: 600px;
  text-align: left;
  margin: 0;
  padding-top: 40px;
}

.home-page-wrapper .hero-text h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: left;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.home-page-wrapper .hero-text h1 .brand-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  display: inline;
}

/* Additional hero text styles */
.home-page-wrapper .hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.brand-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-page-wrapper .hero-subheadline {
  font-size: 1.1rem;
  font-weight: 400;
  color: #e2e8f0;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  max-width: 500px;
  text-align: left;
}

.home-page-wrapper .hero-content.modern-hero {
  background: rgba(20, 20, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  max-width: 1200px;
}

.home-page-wrapper .hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #7B2FF2 0%, #00C6FB 100%);
  color: #ffffff;
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(123, 47, 242, 0.4);
  transition: all 0.3s ease;
  border: none;
}

.home-page-wrapper .hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 45px rgba(123, 47, 242, 0.5);
}

.home-page-wrapper .hero-image {
  flex: 0 0 auto;
  max-width: 500px;
  width: 100%;
  margin: 0;
  padding-left: 2rem;
  padding-top: 40px;
  position: relative;
  z-index: 2;
}

.home-page-wrapper .hero-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1.5rem;
  filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45));
}

.home-page-wrapper .hero-bg-blob {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(123, 47, 242, 0.35), transparent 55%),
              radial-gradient(circle at 80% 0%, rgba(0, 198, 251, 0.3), transparent 45%),
              radial-gradient(circle at 50% 100%, rgba(243, 87, 168, 0.25), transparent 60%);
  pointer-events: none;
  opacity: 0.7;
  z-index: 1;
  filter: blur(8px);
}

/* === SECTION STYLES === */
.home-page-wrapper .features-section,
.home-page-wrapper .about-section {
  padding: 6rem 0;
  background: #0a0a0f;
  position: relative;
}

.home-page-wrapper .about-section {
  background: #0f0f1e;
}

.home-page-wrapper .section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.home-page-wrapper .section-title h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.home-page-wrapper .section-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: var(--container-sm);
  margin: 0 auto;
  line-height: 1.6;
}

.home-page-wrapper .features-section,
.home-page-wrapper .about-section {
  position: relative;
  z-index: 2;
}

/* === GRID LAYOUTS === */
.home-page-wrapper .grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.home-page-wrapper .grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.home-page-wrapper .features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: var(--space-xl);
}

.home-page-wrapper .features-cta {
  margin-top: var(--space-xl);
  text-align: center;
}

/* === CARD STYLES === */
.home-page-wrapper .card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--border-light);
  transition: var(--transition);
}

.home-page-wrapper .card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-medium);
}

.home-page-wrapper .card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.8rem;
  color: var(--text-primary);
}

.home-page-wrapper .card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.home-page-wrapper .card-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

.home-page-wrapper .feature-card {
  background: rgba(30, 30, 40, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.home-page-wrapper .feature-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-medium);
  box-shadow: var(--shadow-lg);
}

.home-page-wrapper .feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(123, 47, 242, 0.2), rgba(0, 198, 251, 0.2));
  color: #00C6FB;
  margin: 0 auto 1.5rem;
  display: grid;
  place-items: center;
  font-size: 1.75rem;
  box-shadow: 0 5px 15px rgba(123, 47, 242, 0.2);
}

.home-page-wrapper .feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.home-page-wrapper .feature-card p {
  color: #e2e8f0;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* === STATS SECTION === */
.home-page-wrapper .stat-card {
  text-align: center;
  padding: 2rem;
}

.home-page-wrapper .stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.home-page-wrapper .stat-label {
  font-size: 1.1rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* === TESTIMONIALS === */
.home-page-wrapper .testimonial-card {
  display: flex;
  flex-direction: column;
}

.home-page-wrapper .testimonial-rating {
  display: flex;
  margin-bottom: 1rem;
}

.home-page-wrapper .testimonial-text {
  font-style: italic;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.home-page-wrapper .testimonial-author {
  display: flex;
  align-items: center;
}

.home-page-wrapper .testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-weight: bold;
  margin-right: 1rem;
}

.home-page-wrapper .about-section {
  padding: var(--space-3xl) 0;
}

.home-page-wrapper .about-content {
  background: rgba(20, 20, 30, 0.8);
  border-radius: 2rem;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 0 auto;
}

.home-page-wrapper .about-text {
  color: #e2e8f0;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: center;
}

.home-page-wrapper .about-cta {
  text-align: center;
}

.home-page-wrapper .home-page footer {
  margin-top: var(--space-3xl);
}

/* === CTA SECTION === */
.home-page-wrapper .cta-section {
  background: var(--gradient-primary);
  text-align: center;
}

.home-page-wrapper .cta-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: var(--space-lg);
}

.home-page-wrapper .cta-text {
  font-size: 1.3rem;
  margin-bottom: var(--space-2xl);
}

/* === BUTTONS === */
.home-page-wrapper .btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: none;
}

.home-page-wrapper .btn-primary {
  background: linear-gradient(135deg, #7B2FF2 0%, #00C6FB 100%);
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(123, 47, 242, 0.3);
}

.home-page-wrapper .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.home-page-wrapper .btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-medium);
}

.home-page-wrapper .btn-secondary:hover {
  background: var(--bg-secondary);
  border-color: var(--border-strong);
}

/* === ANIMATIONS === */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes floatCard1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(10px, -10px) rotate(2deg); }
}

@keyframes floatCard2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-10px, 10px) rotate(-2deg); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }

.animate-float-1 {
  animation: floatCard1 6s ease-in-out infinite;
}

.animate-float-2 {
  animation: floatCard2 6s ease-in-out infinite 1s;
}

/* Additional section title styles */
.glow-title {
  color: #00C6FB;
  text-shadow:
    0 0 10px rgba(0, 198, 251, 0.8),
    0 0 20px rgba(0, 198, 251, 0.6),
    0 0 2px #ffffff;
  font-weight: 700;
  letter-spacing: 0.01em;
  font-size: 2.5rem;
}

/* === RESPONSIVE STYLES === */
@media (max-width: 1024px) {
  .home-page-wrapper .modern-hero {
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }
  
  .home-page-wrapper .hero-text {
    text-align: center;
    max-width: 100%;
  }
  
  .home-page-wrapper .hero-image {
    margin: 0 auto;
  }
  
  .home-page-wrapper .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .home-page-wrapper .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .home-page-wrapper .hero-subheadline {
    font-size: 1rem;
  }
  
  .home-page-wrapper .grid-4,
  .home-page-wrapper .grid-3 {
    grid-template-columns: 1fr;
  }
  
  .home-page-wrapper .section-title h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .home-page-wrapper .hero-text h1 {
    font-size: 2rem;
  }
  
  .home-page-wrapper .container {
    padding: 0 var(--space-md);
  }
  
  .home-page-wrapper .hero-section {
    padding: 2rem 0 4rem;
  }
  
  .home-page-wrapper .section {
    padding: 4rem 0;
  }
}
```

### File: `./src/styles/JamboardRedesign.css`

```css
/* JamboardRedesign.css - Dark Theme aligned with ClassesRedesign */

:root {
    --bg-dark-1: #3a3f61;
    --bg-dark-2: #274551;
    --purple-radial: #7c5cff;
    --blue: #4ea8ff;
    --blue-soft: rgba(78, 168, 255, 0.16);
    --teal: #3dd9b6;
    --text-main: #f9fafb;
    --text-muted: #9ca3af;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.1);
    --input-bg: rgba(15, 23, 42, 0.5);
    --shadow-soft: 0 24px 60px rgba(0, 0, 0, 0.55);
    --radius-lg: 24px;
    --radius-xl: 32px;
    --max-width: 1280px;
}

body:has(.jamboard-redesign-page) {
    background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%),
        linear-gradient(135deg, #3A3F61 0%, #274551 100%) !important;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--text-main);
}

.jamboard-redesign-page {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: var(--text-main);
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.jamboard-header-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
    width: 100%;
    max-width: var(--max-width);
    justify-content: flex-start;
}

.jamboard-title {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
    margin: 0;
}

.jamboard-title span {
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--text-muted);
    margin-left: 1rem;
}

.jamboard-board-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: var(--max-width);
}

/* Card Styles */
.jamboard-board-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    min-height: 180px;
    backdrop-filter: blur(10px);
}

.jamboard-board-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* New Board Card */
.jamboard-new-board-card {
    background: rgba(78, 168, 255, 0.05);
    border: 1px dashed rgba(78, 168, 255, 0.3);
    align-items: center;
    justify-content: center;
    color: #bfdbfe;
}

.jamboard-new-board-card:hover {
    background: rgba(78, 168, 255, 0.1);
    border-color: rgba(78, 168, 255, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.jamboard-new-board-plus {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    color: var(--blue);
}

.jamboard-new-board-label {
    font-size: 1.1rem;
    font-weight: 600;
}

/* Board Card Content */
.jamboard-board-preview {
    width: 100%;
    height: 80px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.jamboard-board-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
}

.jamboard-board-title {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.jamboard-badge {
    background: rgba(16, 185, 129, 0.15);
    color: #6ee7b7;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.jamboard-board-date {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.jamboard-board-actions {
    margin-top: auto;
    display: flex;
    gap: 0.5rem;
}

.jamboard-open-btn {
    flex: 1;
    background: linear-gradient(135deg, rgba(78, 168, 255, 0.1), rgba(78, 168, 255, 0.05));
    border: 1px solid rgba(78, 168, 255, 0.2);
    color: #bfdbfe;
    border-radius: 10px;
    padding: 0.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.jamboard-open-btn:hover {
    background: linear-gradient(135deg, #4ea8ff 0%, #3b82f6 100%);
    color: #fff;
    border-color: transparent;
}

.jamboard-delete-btn {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.2);
    color: #fca5a5;
    width: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    opacity: 0.7;
}

.jamboard-delete-btn:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #f87171;
    opacity: 1;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.canva-modal {
    background: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.canva-modal h2 {
    color: #fff;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.canva-input {
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 0.8rem 1rem;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    outline: none;
}

.canva-input:focus {
    border-color: var(--blue);
    background: rgba(0, 0, 0, 0.3);
}

.canva-modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.canva-cancel-btn {
    background: transparent;
    color: var(--text-muted);
    border: none;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    font-weight: 500;
}

.canva-cancel-btn:hover {
    color: #fff;
}

.canva-create-btn {
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.6rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.canva-create-btn:hover {
    background: #3b82f6;
    transform: translateY(-2px);
}

/* Empty State */
.empty-state {
    color: var(--text-muted);
    font-size: 1.1rem;
    margin-top: 1rem;
}

.empty-state b {
    color: #fff;
}
```

### File: `./src/styles/ClassesPage.css`

```css
/* ClassesPage.css - styled to match the POP Studying palette and modern landing page inspiration */

.classes-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3rem 1.5rem;
  font-family: 'Inter', sans-serif;
}

.classes-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.classes-header h2 {
  font-size: 2.6rem;
  font-weight: 700;
  color: transparent;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; /* For Safari */
  filter: drop-shadow(0 0 24px #1a8fffcc) drop-shadow(0 0 16px #7B2FF2cc);
  text-align: center;
}
.classes-header p {
  font-size: 1.15rem;
  color: #fff;
  text-align: center;
}

.class-banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.2rem;
}
.class-banner-img {
  max-width: 100%;
  height: auto;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px 0 rgba(123,67,125,0.10), 0 2px 8px 0 rgba(0,198,251,0.06);
  background: transparent;
}

.classes-filters-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

.classes-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 2.2rem;
}
.search-bar, .filter-select {
  padding: 0.7rem 1.6rem;
  border-radius: 2.2rem;
  border: none;
  background: #181828;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  box-shadow: 0 2px 14px 0 #7B2FF233, 0 1px 6px 0 #1a8fff22;
  outline: none;
  transition: box-shadow 0.18s, border 0.18s, background 0.18s;
  text-align: center;
  min-width: 180px;
}
.search-bar:focus, .filter-select:focus {
  box-shadow: 0 2px 18px 0 #7B2FF288, 0 1px 8px 0 #1a8fff44;
  background: #232342;
}
.search-bar:hover, .filter-select:hover {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  box-shadow: 0 2px 24px 0 #7B2FF299, 0 1px 10px 0 #1a8fff66;
  cursor: pointer;
}

.subject-tags {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.8rem;
  overflow-x: auto;
  padding: 0.5rem 0 0.5rem 0;
  margin-bottom: 0.5rem;
  scrollbar-width: none;
  justify-content: center;
}
.subject-tags::-webkit-scrollbar { display: none; }
.subject-tag {
  background: #181828;
  color: #fff;
  border: none;
  border-radius: 2.2rem;
  padding: 0.38rem 1.5rem;
  font-size: 1.04rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  box-shadow: 0 1px 8px 0 #7B2FF233;
  outline: none;
  white-space: nowrap;
}
.subject-tag.selected {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  box-shadow: 0 2px 14px 0 #7B2FF266, 0 1px 6px 0 #1a8fff44;
}
.subject-tag:active {
  transform: scale(0.96);
}
.subject-tag:hover:not(.selected) {
  background: linear-gradient(90deg, #7B2FF2 0%, #1a8fff 100%);
  color: #fff;
  box-shadow: 0 2px 18px 0 #1a8fff66, 0 1px 8px 0 #7B2FF288;
}
.subject-tag.selected:hover {
  filter: brightness(1.08) saturate(1.2);
}

.level-switch {
  display: flex;
  background: #181828;
  border-radius: 2.5rem;
  padding: 0.22rem 0.22rem;
  gap: 0.2rem;
  box-shadow: 0 2px 14px 0 #7B2FF233, 0 1px 6px 0 #1a8fff22;
}
.level-pill {
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  border-radius: 2rem;
  padding: 0.5rem 1.7rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  outline: none;
  font-weight: 500;
}
.level-pill.selected {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  box-shadow: 0 2px 14px 0 #7B2FF299, 0 1px 8px 0 #1a8fff77;
}
.level-pill:hover {
  background: linear-gradient(90deg, #7B2FF2 0%, #1a8fff 100%);
  color: #fff;
  box-shadow: 0 2px 18px 0 #1a8fff66, 0 1px 8px 0 #7B2FF288;
}

.level-tubelight-switch {
  display: flex;
  background: #181828;
  border-radius: 2.5rem;
  padding: 0.22rem 0.22rem;
  gap: 0.2rem;
  box-shadow: 0 2px 14px 0 #7B2FF233, 0 1px 6px 0 #1a8fff22;
  position: relative;
  justify-content: center;
}

.level-tubelight-pill {
  position: relative;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  border-radius: 2rem;
  padding: 0.5rem 1.7rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  outline: none;
  font-weight: 500;
  z-index: 1;
  overflow: visible;
}

.level-tubelight-pill.selected {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  box-shadow: 0 2px 14px 0 #7B2FF299, 0 1px 8px 0 #1a8fff77;
}

.level-tubelight-pill:hover {
  background: linear-gradient(90deg, #7B2FF2 0%, #1a8fff 100%);
  color: #fff;
  box-shadow: 0 2px 18px 0 #1a8fff66, 0 1px 8px 0 #7B2FF288;
}

.tubelight {
  position: absolute;
  left: 50%;
  bottom: -0.4rem;
  transform: translateX(-50%);
  width: 2.2rem;
  height: 0.32rem;
  border-radius: 1rem;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  box-shadow: 0 0 18px 6px #1a8fff66, 0 0 12px 4px #7B2FF299;
  animation: tubelight-glow 1.4s infinite alternate;
  z-index: 2;
}

@keyframes tubelight-glow {
  from {
    filter: blur(2px) brightness(1.1) opacity(0.8);
  }
  to {
    filter: blur(4px) brightness(1.6) opacity(1);
  }
}

.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  padding: 0 0.5rem;
}
.class-card {
  background: #1E1E2E;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #2A2A3A;
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;
}

.class-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.class-thumbnail {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  overflow: hidden;
  background: #2A2A3A;
}

.class-thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.class-card-content {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
}

.class-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.class-card-header h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  max-height: 2.6em;
}

.class-level {
  background: #2A2A3A;
  color: #D1D5DB;
  padding: 0.2rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.class-description {
  color: #A0AEC0;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 2.8em;
}

.class-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #2A2A3A;
  font-size: 0.8rem;
}

.class-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #A0AEC0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-item:not(:last-child)::after {
  content: '•';
  margin-left: 0.25rem;
  color: #4A5568;
}

.class-thumbnail {
  position: relative;
  width: 100%;
  padding-bottom: 60%; /* Slightly taller than 16:9 */
  background: #2A2A3A;
  overflow: hidden;
}

.class-thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.class-card:hover .class-thumbnail img {
  transform: scale(1.05);
}

.student-count {
  color: #718096;
  font-size: 0.85rem;
  font-weight: 500;
}

.student-count.new-status { /* For the 'New' text */
  color: #E5E7EB; /* Brighter color like in the image */
  font-weight: 600;
}

.view-class-btn {
  background: linear-gradient(135deg, #7B2FF2 0%, #5E17EB 100%);
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-class-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(123, 47, 242, 0.3);
}

.class-card.featured {
  border: 1px solid #7B2FF2;
  box-shadow: 0 4px 20px rgba(123, 47, 242, 0.2);
  position: relative;
  overflow: hidden;
}

.class-card.featured .class-thumbnail::after {
  content: 'FEATURED';
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #7B2FF2;
  color: white;
  padding: 0.15rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.65rem;
  font-weight: 600;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1;
}

.class-card.featured .class-description {
  background-color: rgba(0, 0, 0, 0.2); /* Darker inset background for description */
  padding: 0.75rem 1rem; /* Padding for the inset box */
  border-radius: 0.5rem; /* Rounded corners for the inset box */
  margin-top: 0.5rem; /* Space between title/level and description box */
  margin-bottom: 1rem; /* Ensure space before the footer elements */
  color: #A0AEC0; /* Retain original description text color */
  font-size: 0.95rem; /* Retain original description font-size */
  line-height: 1.6; /* Retain original description line-height */
  /* flex: 1; should be inherited from .class-description if it was there */
}

.class-card.featured::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 60px 60px 0;
  border-color: transparent #7B2FF2 transparent transparent;
  z-index: 1;
}

.class-card.featured .featured-badge {
  position: absolute;
  top: 10px;
  right: -25px;
  background: #7B2FF2;
  color: white;
  padding: 4px 30px;
  transform: rotate(45deg);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  width: 100px;
  text-align: center;
}

.class-card.featured:hover {
  box-shadow: 0 10px 25px rgba(123, 47, 242, 0.2);
  border-color: #8E44FF;
}

.class-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-color: #3A3A4A;
}
.class-card-header {
  display: flex;
  gap: 0.7rem;
  margin-bottom: 0.7rem;
}
.class-subject {
  background: #181828;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 7px;
  padding: 0.15rem 0.7rem;
}
.class-title {
  font-size: 1.28rem;
  font-weight: 600;
  margin: 0.7rem 0 0.45rem 0;
  color: #79437D;
}
.class-desc {
  color: #7a7a8c;
  font-size: 1.03rem;
}
.empty-state {
  grid-column: 1/-1;
  text-align: center;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  margin-top: 2.5rem;
}

.class-overview-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3rem 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #fff;
}

.class-overview-split-layout {
  display: flex;
  gap: 2.5rem;
  max-width: 1200px;
  width: 100vw;
  margin: 0 auto;
  padding: 0.2rem 0 1.2rem 0;
  align-items: flex-start;
  justify-content: flex-start;
}

.class-overview-main {
  flex: 3 1 0;
  min-width: 0;
  max-width: 900px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.class-overview-header {
  text-align: center;
  margin-bottom: 0.7rem;
  margin-top: 0;
}
.class-title-gradient {
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(90deg, #7B2FF2 0%, #00C6FB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  filter: drop-shadow(0 0 18px #7B2FF277) drop-shadow(0 0 8px #00C6FB55);
  margin-bottom: 0.4rem;
}

.class-desc {
  color: #fff;
  font-size: 1.15rem;
  margin-bottom: 1.2rem;
}

.class-overview-stats {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 1.2rem;
align-items: center;
background: #181828;
border-radius: 1.2rem;
padding: 1.1rem 2.1rem;
box-shadow: 0 2px 14px 0 #7B2FF233;
  background: #181828;
  border-radius: 1.2rem;
  padding: 1.1rem 2.1rem;
  box-shadow: 0 2px 14px 0 #7B2FF233;
}
.class-stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #7B2FF2;
  margin-bottom: 0.1rem;
}
.class-stat-label {
  font-size: 1.07rem;
  color: #fff;
  font-weight: 500;
}

.class-overview-section {
  margin-bottom: 2.5rem;
}
.class-overview-section > h2 {
  font-size: 1.35rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 1.1rem;
  text-align: center;
}
.class-activity-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #181828;
  border-radius: 1.1rem;
  padding: 1.1rem 1.5rem;
  margin-bottom: 1.1rem;
}
.class-activity-item-clean {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #23233a;
  font-size: 1.05rem;
}
.class-activity-item-clean:last-child {
  border-bottom: none;
}
.activity-action-clean {
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.activity-time-clean {
  color: #fff;
  font-size: 0.99rem;
  font-weight: 400;
  white-space: nowrap;
  margin-left: 0.7rem;
}

.class-topics-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.class-topic-card {
  background: #181828;
  border-radius: 1.1rem;
  padding: 1.1rem 1.3rem;
  box-shadow: 0 2px 12px 0 #7B2FF233;
}
.class-topic-title {
  font-size: 1.13rem;
  font-weight: 600;
  color: #7B2FF2;
  margin-bottom: 0.3rem;
}
.class-topic-desc {
  color: #fff;
  font-size: 1rem;
}
.class-resources-list {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.class-resource-card {
  background: #181828;
  border-radius: 1.1rem;
  padding: 1.1rem 1.3rem;
  min-width: 200px;
  box-shadow: 0 2px 12px 0 #7B2FF233;
}
.class-resource-title {
  font-size: 1.13rem;
  font-weight: 600;
  color: #7B2FF2;
  margin-bottom: 0.3rem;
}
.class-resource-desc {
  color: #fff;
  font-size: 1rem;
}
.class-exams-list {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.class-exam-card {
  background: #181828;
  border-radius: 1.1rem;
  padding: 1.1rem 1.3rem;
  min-width: 220px;
  box-shadow: 0 2px 12px 0 #7B2FF233;
}
.class-exam-title {
  font-size: 1.13rem;
  font-weight: 600;
  color: #7B2FF2;
  margin-bottom: 0.3rem;
}
.class-exam-desc {
  color: #fff;
  font-size: 1rem;
}
.class-discussion-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #181828;
  border-radius: 1.1rem;
  padding: 1.1rem 1.5rem;
}
.class-discussion-msg {
  color: #fff;
  font-size: 1.05rem;
  border-left: 3px solid #7B2FF2;
  padding-left: 1rem;
}

.class-overview-split-layout {
  display: flex;
  gap: 2.5rem;
  max-width: 1200px;
  width: 100vw;
  margin: 0 auto;
  padding: 0.2rem 0 1.2rem 0;
  align-items: flex-start;
  justify-content: flex-start;
}

.class-overview-main {
  flex: 3 1 0;
  min-width: 0;
  max-width: 900px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.class-overview-header,
.class-overview-section {
  width: 100%;
  text-align: center;
}

.class-overview-side {
  flex: 0 0 340px;
  min-width: 300px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #181828;
  border-radius: 1.5rem;
  box-shadow: 0 2px 14px 0 #7B2FF233;
  padding: 2rem 1.2rem 2rem 1.2rem;
  height: fit-content;
  margin-top: 1.5rem;
  margin-left: 3vw;
  margin-right: 0;
  position: sticky;
  top: 2.5rem;
  left: 0;
}

.start-class-btn {
  background: linear-gradient(90deg, #7B2FF2 0%, #00C6FB 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 0;
  margin-bottom: 1.1rem;
  box-shadow: 0 0 18px #7B2FF277, 0 0 8px #00C6FB55;
  cursor: pointer;
  transition: filter 0.18s, box-shadow 0.18s;
}
.start-class-btn:hover {
  filter: brightness(1.18) drop-shadow(0 0 8px #00C6FB77);
}

.start-quiz-btn {
  background: #22223a;
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 0;
  margin-bottom: 1.6rem;
  box-shadow: 0 2px 8px 0 #7B2FF222;
  cursor: pointer;
  transition: background 0.18s, box-shadow 0.18s;
}
.start-quiz-btn:hover {
  background: #2d2d4d;
  box-shadow: 0 0 8px #7B2FF299;
}

.progress-section {
  margin-bottom: 1.5rem;
}
.progress-label {
  font-size: 1.06rem;
  color: #fff;
  margin-bottom: 0.35rem;
  font-weight: 500;
}
.progress-bar-bg {
  width: 100%;
  height: 1.1rem;
  background: #23233a;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.25rem;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #7B2FF2 0%, #00C6FB 100%);
  border-radius: 1rem 0 0 1rem;
  transition: width 0.5s cubic-bezier(.4,1.4,.5,1);
}
.progress-percent {
  font-size: 1.02rem;
  color: #fff;
  font-weight: 600;
  text-align: right;
  margin-bottom: 0.5rem;
}

.back-to-classes-btn {
  background: none;
  border: none;
  color: #00C6FB;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.5rem;
  margin-left: 0.2rem;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  transition: background 0.18s, color 0.18s;
  display: inline-block;
}
.back-to-classes-btn:hover {
  background: #23233a;
  color: #7B2FF2;
}

@media (max-width: 1200px) {
  .class-overview-split-layout {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 0 2rem 0;
    width: 100vw;
  }
  .class-overview-side {
    max-width: 100vw;
    margin-left: 0;
    position: static;
    top: unset;
    left: unset;
  }
}

@media (max-width: 1000px) {
  .class-overview-split-layout {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 0 2rem 0;
    width: 100vw;
  }
  .class-overview-main {
    max-width: 100vw;
    margin-left: 0;
  }
  .class-overview-side {
    max-width: 100vw;
    margin-right: 0;
    position: static;
    top: unset;
  }
}

@media (max-width: 700px) {
  .classes-header h2 {
    font-size: 2rem;
  }
  .classes-grid {
    gap: 1.1rem;
  }
  .class-card {
    padding: 1.1rem 0.7rem 1rem 0.7rem;
  }
}

@media (max-width: 800px) {
  .class-overview-stats {
    gap: 1.2rem;
  }
  .class-topics-list, .class-resources-list, .class-exams-list {
    grid-template-columns: 1fr;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .classes-page {
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
  }
  .classes-header h2 {
    font-size: 2.1rem;
  }
  .class-banner-img {
    max-width: 98vw;
  }
  .classes-filters {
    gap: 0.7rem;
  }
}

@media (max-width: 700px) {
  .classes-page {
    padding: 0.7rem 0.2rem 1rem 0.2rem;
  }
  .classes-header h2 {
    font-size: 1.5rem;
  }
  .class-banner-img {
    border-radius: 0.5rem;
  }
  .classes-filters {
    flex-direction: column;
    gap: 0.4rem;
  }
  .class-card {
    padding: 1.1rem 0.7rem 1rem 0.7rem;
    max-width: 97vw;
  }
}

@media (max-width: 480px) {
  .classes-header h2 {
    font-size: 1.1rem;
  }
  .classes-page {
    padding: 0.2rem 0.1rem 0.5rem 0.1rem;
  }
  .class-card {
    padding: 0.7rem 0.2rem 0.7rem 0.2rem;
    font-size: 0.97rem;
  }
}
```

### File: `./src/styles/modal.css`

```css
/* Create Set/* === Modal Base Styles === */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(17, 24, 39, 0.8); /* #111827 with opacity */
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-content {
  background-color: #111827; /* Figma: fill_Z569SD */
  border: 1px solid #374151; /* Figma: stroke_QUB1QS */
  border-radius: 36px; /* Figma: borderRadius */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25), /* Simplified from Figma */
    inset 0 1px 2px 0 rgba(255, 255, 255, 0.05); /* Figma: effect_K3YTBR */
  width: 100%;
  max-width: 600px; /* Figma: 600px width */
  margin: 1rem;
  padding: 24px 32px; /* Figma: padding */
  animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #F9FAFB; /* Default text color */
}

/* === Modal Header === */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px; /* Figma: spacing */
}

.modal-header h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px; /* Figma: style_8S7I4A */
  color: #F9FAFB; /* Figma: fill_1IM7FR */
  margin: 0;
}

.close-button {
  background-color: #374151; /* Figma: fill_JQPY9Y */
  border: none;
  border-radius: 9999px; /* Figma: borderRadius */
  color: #9CA3AF;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.close-button:hover {
  background-color: #4B5563;
  color: #F9FAFB;
}

/* === Modal Body === */
.modal-body {
  margin-bottom: 32px; /* Figma: spacing */
}

.modal-body form {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Figma: spacing */
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px; /* Figma: spacing */
}

.form-group label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px; /* Figma: style_093I0X */
  color: #9CA3AF; /* Figma: fill_R0YAZA */
}

.form-group input[type="text"],
.form-group textarea {
  background-color: #1F2937; /* Figma: fill_14560S */
  border: 1px solid #374151; /* Figma: stroke_75204 */
  border-radius: 12px; /* Figma: borderRadius */
  padding: 12px 16px; /* Figma: padding */
  color: #F9FAFB;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input[type="text"]::placeholder,
.form-group textarea::placeholder {
  color: #4B5563; /* Figma: placeholder color */
}

.form-group input[type="text"]:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3B82F6; /* Blue-500 */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* === Modal Footer === */
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px; /* Figma: spacing */
}

.btn-secondary,
.btn-primary {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 12px; /* Figma: borderRadius */
  padding: 12px 24px; /* Figma: padding */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-secondary {
  background-color: #374151; /* Figma: fill_M50H1D */
  color: #F9FAFB; /* Figma: fill_1IM7FR */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Figma: effect_001 */
}

.btn-secondary:hover {
  background-color: #4B5563;
}

.btn-primary {
  color: #FFFFFF; /* Figma: fill_FFFFFF */
  background-image: linear-gradient(to right, #9333EA, #2563EB); /* Figma: fill_OWHGBG */
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1); /* Figma: effect_AB55XF */
}

.btn-primary:hover {
  filter: brightness(1.1);
  box-shadow: 
    0 10px 20px -5px rgba(147, 51, 234, 0.3),
    0 4px 8px -4px rgba(37, 99, 235, 0.3);
}

.btn-secondary:active,
.btn-primary:active {
  transform: scale(0.98);
}

/* === Animations === */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

### File: `./src/styles/Home-old.css`

```css
:root {
  /* Background Colors */
  --bg-page: #0F1B2E;
  --bg-section: #151929;
  --bg-card: #192642;
  --bg-highlight: #1E2A48;
  --bg-lighter: #2A3654;
  
  /* Text Colors */
  --text-primary: #E2E8F0;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --text-inverse: #0F172A;
  
  /* Accent Colors */
  --accent-primary: #8B5CF6;
  --accent-secondary: #14B8A6;
  --accent-support: #F97316;
  --accent-highlight: #38BDF8;
  --accent-pink: #EC4899;
  
  /* Border & Shadow */
  --border-soft: rgba(255, 255, 255, 0.1);
  --border-medium: rgba(255, 255, 255, 0.15);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 20px rgba(139, 92, 246, 0.3);
  
  /* Spacing & Sizing */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --nav-height: 70px;
  --content-max-width: 1200px;
}

.home-page-wrapper {
  background: var(--bg-page);
  color: var(--text-primary);
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  min-height: 100vh;
}

.home-page {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  padding-top: var(--nav-height);
}

.home-page-wrapper.loaded .home-page {
  opacity: 1;
  transform: translateY(0);
}

.container {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 80;
  background: rgba(15, 27, 46, 0.9);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border-soft);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  gap: 1rem;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-logo img {
  height: 48px;
  width: auto;
  transition: transform 0.2s ease;
}

.navbar-logo img:hover {
  transform: scale(1.05);
}

.navbar-center {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-link,
.tools-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.navbar-link:hover,
.tools-link:hover {
  color: var(--text-primary);
  background: rgba(139, 92, 246, 0.15);
}

.navbar-tools {
  position: relative;
}

.tools-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font: inherit;
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.tools-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  padding: 0.5rem;
  min-width: 180px;
  z-index: 10;
}

.dropdown-item {
  display: block;
  padding: 0.65rem 0.95rem;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(139, 92, 246, 0.2);
  color: var(--text-primary);
}

.sign-in-btn {
  text-decoration: none;
  border: 1px solid var(--accent-primary);
  color: var(--text-primary);
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  transition: all 0.2s ease;
}

.sign-in-btn:hover {
  background: var(--accent-primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-glow);
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-soft);
  background: transparent;
  cursor: pointer;
}

.navbar-toggle-bar {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Hero Section */
.hero-section {
  padding: 8rem 0 6rem;
  background: var(--bg-page);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin: 1rem 0;
  font-weight: 700;
  color: var(--text-primary);
}

.gradient-text {
  color: transparent;
  background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  background-clip: text;
}

.eyebrow {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--accent-secondary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.eyebrow::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--accent-secondary);
  border-radius: 50%;
}

.hero-copy p {
  color: var(--text-secondary);
  max-width: 580px;
  margin: 1.5rem 0;
  font-size: 1.1rem;
  line-height: 1.7;
}

.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2rem 0;
}

.hero-pills span {
  background: rgba(139, 92, 246, 0.15);
  color: var(--text-primary);
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(139, 92, 246, 0.3);
  font-size: 0.85rem;
  backdrop-filter: blur(10px);
}

.hero-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2.5rem 0 1.5rem;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 2px solid transparent;
  font-size: 1rem;
}

.hero-cta.primary {
  background: var(--accent-primary);
  color: var(--text-inverse);
  box-shadow: var(--shadow-glow);
}

.hero-cta.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.4);
}

.hero-cta.ghost {
  border-color: var(--accent-primary);
  color: var(--text-primary);
  background: rgba(139, 92, 246, 0.1);
}

.hero-cta.ghost:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: translateY(-1px);
}

.hero-trust {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 1.5rem;
}

.hero-trust svg {
  color: var(--accent-primary);
}

.hero-visual {
  position: relative;
  display: grid;
  gap: 2rem;
}

.hero-panel {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-medium);
}

.panel-card {
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  background: var(--bg-highlight);
  margin-bottom: 1.5rem;
}

.panel-card:last-child {
  margin-bottom: 0;
}

.panel-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.panel-card p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.progress-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  margin: 1rem 0;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
}

.panel-card.mocks ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.panel-card.mocks li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--border-soft);
}

.panel-card.mocks li:last-child {
  border-bottom: none;
}

.panel-card.mocks a {
  font-weight: 600;
  color: var(--accent-secondary);
  text-decoration: none;
}

.floating-card {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05));
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  box-shadow: var(--shadow-lg);
  margin-top: 1.5rem;
}

.floating-card span {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-support);
  font-weight: 700;
}

.floating-card strong {
  display: block;
  font-size: 1.05rem;
  margin: 0.4rem 0;
  color: var(--text-primary);
}

.floating-card p {
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

.floating-card button {
  border: none;
  background: var(--accent-support);
  color: var(--text-inverse);
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.floating-card button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Stats Section */
.stats-section {
  padding: 5rem 0;
  background: var(--bg-section);
  border-bottom: 1px solid var(--border-soft);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.stats-grid article {
  padding: 2rem 1.5rem;
  border-radius: var(--radius-md);
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
}

.stats-grid article:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: rgba(139, 92, 246, 0.3);
}

.stats-grid .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent-primary);
}

.stats-grid .value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.stats-grid .label {
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* Section Headers */
.section-heading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: var(--content-max-width);
  padding: 0 1.5rem;
}

.section-heading h2 {
  margin: 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.lede {
  color: var(--text-secondary);
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.text-link {
  align-self: flex-end;
  text-decoration: none;
  font-weight: 600;
  color: var(--accent-primary);
  transition: all 0.2s ease;
}

.text-link:hover {
  color: var(--accent-secondary);
  transform: translateY(-1px);
}

/* Subjects Section */
.subjects-section {
  padding: 5rem 0;
  background: var(--bg-page);
}

.subjects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.subject-card {
  border-radius: var(--radius-lg);
  padding: 2rem;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-highlight));
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 320px;
}

.subject-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
}

.subject-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.subject-card .badge {
  display: inline-flex;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-sm);
  background: rgba(139, 92, 246, 0.15);
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  align-self: flex-start;
}

.subject-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
  color: var(--text-primary);
  font-weight: 700;
}

.subject-card p {
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.subject-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  color: var(--text-secondary);
  display: grid;
  gap: 0.5rem;
}

.subject-card ul li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.subject-card ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-secondary);
  font-weight: 600;
}

.subject-card a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  background: rgba(139, 92, 246, 0.1);
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.subject-card a:hover {
  background: var(--accent-primary);
  color: var(--text-inverse);
  transform: translateY(-2px);
}

.subject-card.math::before {
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-highlight));
}

.subject-card.physics::before {
  background: linear-gradient(90deg, var(--accent-secondary), var(--accent-highlight));
}

.subject-card.chemistry::before {
  background: linear-gradient(90deg, var(--accent-support), var(--accent-primary));
}

.subject-card.biology::before {
  background: linear-gradient(90deg, var(--accent-secondary), var(--accent-support));
}

/* Remove duplicate styles that conflict with our new design */

/* Navbar toggle already defined above */

/* Hero section already defined above */

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  align-items: center;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  line-height: 1.05;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-body);
}

.gradient-text {
  color: transparent;
  background: linear-gradient(120deg, var(--brand-primary), #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero-copy p {
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 1.5rem;
  max-width: 560px;
}

.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.hero-pills span {
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(181, 155, 255, 0.12);
  border: 1px solid rgba(181, 155, 255, 0.25);
  font-size: 0.85rem;
  color: var(--text-body);
}

.hero-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 2.2rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.hero-cta.primary {
  background: linear-gradient(120deg, var(--brand-secondary), var(--brand-primary));
  color: #0b0f1c;
  box-shadow: 0 20px 35px rgba(124, 58, 237, 0.35);
}

.hero-cta.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 45px rgba(124, 58, 237, 0.55);
}

.hero-cta.ghost {
  border-color: rgba(181, 155, 255, 0.4);
  color: var(--text-body);
}

.hero-cta.ghost:hover {
  background: rgba(181, 155, 255, 0.1);
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-weight: 500;
}

.hero-visual {
  background: var(--bg-panel);
  border-radius: var(--radius-xl);
  padding: 2rem;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-card);
  position: relative;
}

.panel-card {
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.25rem;
  margin-bottom: 1rem;
}

.panel-card h3 {
  margin: 0 0 0.4rem;
  font-size: 0.95rem;
  color: var(--text-body);
}

.panel-card p,
.panel-card small,
.panel-card li span {
  color: var(--text-muted);
}

.progress-bar {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  margin: 0.8rem 0;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(120deg, var(--brand-accent), var(--brand-primary));
}

.panel-card.mocks ul {
  list-style: none;
  padding: 0;
  margin: 0 0 0.8rem;
}

.panel-card.mocks li {
  display: flex;
  justify-content: space-between;
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.panel-card.mocks a {
  font-weight: 600;
  color: var(--brand-accent);
  text-decoration: none;
}

.floating-card {
  position: absolute;
  right: -1rem;
  bottom: 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 1rem 1.25rem;
  backdrop-filter: blur(12px);
}

.floating-card strong {
  display: block;
  font-size: 1rem;
  margin: 0.35rem 0;
}

.floating-card button {
  border: none;
  background: linear-gradient(120deg, #fb7185, #fcd34d);
  color: #0b0f1c;
  font-weight: 600;
  border-radius: 999px;
  padding: 0.35rem 1rem;
  cursor: pointer;
}

.hero-visual picture img {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 1.25rem;
}

.exam-badges {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.exam-badges span {
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  font-weight: 600;
}

/* Section spacing & dividers */
.stats-section,
.subjects-section,
.features-section,
.pillars-section,
.highlight-section,
.process-section,
.stories-section,
.cta-section {
  padding: 5rem 0;
  margin-top: 4rem;
  border-top: 1px solid var(--border-soft);
}

/* Stats */
.stats-section {
  background: var(--bg-panel);
}

.stats-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  text-align: center;
}

.stats-grid article {
  flex: 1 1 220px;
  max-width: 320px;
  border-radius: var(--radius-md);
  padding: 1.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: var(--shadow-soft);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  margin: 0 auto 1rem;
  display: grid;
  place-items: center;
  color: var(--brand-primary);
  background: rgba(181, 155, 255, 0.15);
}

.stats-grid span {
  display: block;
  font-size: 2rem;
  font-weight: 700;
}

.stats-grid p {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
}

/* Section headings */
.section-heading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.section-heading h2,
.pillars-intro h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin: 0;
}

.section-heading .lede,
.pillars-intro p {
  color: var(--text-muted);
  max-width: 600px;
}

.text-link {
  align-self: flex-end;
  color: var(--brand-accent);
  text-decoration: none;
  font-weight: 600;
}

/* Subject cards */
.subjects-section {
  background: var(--bg-panel-soft);
}

.subjects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.subject-card {
  background: var(--bg-panel);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
}

.subject-card .badge {
  align-self: flex-start;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--brand-primary);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
}

.subject-card h3 {
  margin: 0;
}

.subject-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.4rem;
  color: var(--text-muted);
}

.subject-card ul li {
  position: relative;
  padding-left: 1.25rem;
}

.subject-card ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--brand-primary);
}

.subject-card a {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.6rem 1.1rem;
  border-radius: var(--radius-sm);
  background: rgba(181, 155, 255, 0.12);
  color: var(--text-body);
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, background 0.2s ease;
}

.subject-card a:hover {
  background: rgba(181, 155, 255, 0.2);
  transform: translateY(-2px);
}

/* Features & pillars */
.pillars-intro {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3rem;
}

.pillars-grid,
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.pillars-grid article,
.features-grid article {
  background: var(--bg-panel);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-soft);
}

.pillars-grid .icon,
.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(181, 155, 255, 0.12);
  color: var(--brand-primary);
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
}

.pillars-grid p,
.features-grid p {
  color: var(--text-muted);
  margin: 0.75rem 0 0;
}

/* Highlight section */
.highlight-section {
  background: var(--bg-panel-soft);
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  align-items: center;
}

.highlight-list {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.highlight-list div {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: var(--text-body);
}

.highlight-card {
  background: linear-gradient(135deg, #111f3d, #1f1140);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-card);
}

.highlight-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  gap: 1rem;
}

.highlight-card li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.6rem;
}

.highlight-card li:last-child {
  border-bottom: none;
}

.highlight-card a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

/* Process */
.process-section {
  background: var(--bg-panel);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.process-grid article {
  background: var(--bg-accent);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.6rem;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.step-count {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(181, 155, 255, 0.2);
  color: var(--brand-primary);
  display: grid;
  place-items: center;
  font-weight: 700;
}

/* Testimonials */
.stories-section {
  background: var(--bg-panel-soft);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stories-grid article {
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.75rem;
  box-shadow: var(--shadow-soft);
  color: var(--text-body);
}

.story-meta span {
  color: var(--text-muted);
}

/* CTA */
.cta-section {
  background: radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.35), transparent 45%),
              var(--bg-panel);
}

.cta-card {
  background: linear-gradient(135deg, #1a1246, #411f6d 60%, #6425a1);
  border-radius: var(--radius-xl);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: var(--shadow-card);
}

.cta-card h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(2rem, 4vw, 2.6rem);
}

.cta-card p {
  max-width: 520px;
  color: rgba(255, 255, 255, 0.85);
}

.cta-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.cta-card .hero-cta.primary {
  background: #fff;
  color: #20104a;
}

.cta-card .hero-cta.ghost {
  border-color: rgba(255, 255, 255, 0.5);
  color: #fff;
}

/* Enhanced Responsive Design */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-visual {
    order: 1;
  }
  
  .hero-copy {
    order: 2;
  }
  
  .hero-cta-row {
    justify-content: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .navbar-container {
    padding: 0 1.5rem;
  }
  
  .hero-section {
    padding: 6rem 0 4rem;
  }
  
  .hero-copy h1 {
    font-size: clamp(2rem, 6vw, 2.8rem);
  }
  
  .hero-cta-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .hero-cta {
    width: 100%;
  }
  
  .subjects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-heading {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-center {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 1rem;
    right: 1rem;
    flex-direction: column;
    background: var(--bg-card);
    border-radius: var(--radius-md);
    padding: 1rem;
    border: 1px solid var(--border-medium);
    box-shadow: var(--shadow-xl);
    display: none;
  }

  .navbar-center.open {
    display: flex;
  }

  .navbar-center .navbar-link,
  .navbar-center .tools-link {
    width: 100%;
    justify-content: flex-start;
    padding: 0.75rem 1rem;
  }
  
  .hero-panel {
    padding: 1.5rem;
  }

  .floating-card {
    position: static;
    width: 100%;
    margin-top: 1.5rem;
  }
  
  .subject-card {
    padding: 1.5rem;
    min-height: 280px;
  }
  
  .stats-grid article {
    padding: 1.5rem;
    min-height: 140px;
  }
  
  .container {
    padding: 0 1rem;
  }

  .hero-visual {
    padding: 1.5rem;
  }

  .subjects-grid,
  .pillars-grid,
  .features-grid,
  .process-grid,
  .stories-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 2rem;
  }
}
```

### File: `./src/styles/MathDashboard.css`

```css
/* MathDashboard.css - styled to match the POP Studying palette and design system */

.math-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-light);
}

/* Dashboard Header */
.math-dashboard-header {
  text-align: center;
  margin: 1rem auto 5rem;
  max-width: 800px;
}

.math-dashboard-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: transparent;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.math-dashboard-header p {
  font-size: 2.5rem;
  font-weight: 600;
  color: #7B2FF2;
  margin: 0.5rem auto;
  line-height: 1.3;
}

.math-dashboard-header .subtitle {
  font-size: 1.25rem;
  color: #fff;
  margin: 1.5rem auto 1rem;
  font-weight: 500;
}

.math-dashboard-header .description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 auto 2rem;
  font-weight: normal;
}

.start-studying-btn {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(123, 47, 242, 0.3);
}

.start-studying-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(123, 47, 242, 0.4);
}

/* Progress Wheel and Stats */
.math-dashboard-progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0 auto 4rem;
  flex-wrap: wrap;
  max-width: 900px;
  background: rgba(24, 24, 40, 0.5);
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.progress-wheel-container {
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
}

.progress-wheel {
  position: relative;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 20px rgba(123, 47, 242, 0.3));
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(24, 24, 40, 0.9);
  border-radius: 50%;
  width: 75%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.progress-percentage {
  display: block;
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.3rem;
}

.progress-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.progress-stats {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.stat-box {
  background: rgba(24, 24, 40, 0.8);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  min-width: 140px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25);
  background: rgba(24, 24, 40, 0.9);
}

.stat-box h3 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.4rem 0;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.stat-box p {
  margin: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

/* Tabs Navigation */
.math-dashboard-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 auto 3rem;
  padding: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  max-width: 900px;
  background: rgba(24, 24, 40, 0.5);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.math-dashboard-tabs::-webkit-scrollbar {
  display: none;
}

.tab-button {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: 0.75rem;
  letter-spacing: 0.2px;
}

.tab-button:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(123, 47, 242, 0.1);
}

.tab-button.active {
  color: #ffffff;
  background: rgba(123, 47, 242, 0.2);
  font-weight: 600;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  border-radius: 3px;
  opacity: 0.8;
}

/* Content Sections */
.math-dashboard-content {
  min-height: 500px;
}

/* Overview Tab */
.overview-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.overview-card {
  background: #181828;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.overview-card h2 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #fff;
}

.overview-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.quick-actions {
  margin-top: 1.5rem;
}

.quick-actions h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.action-button {
  background: #232342;
  border: none;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s, transform 0.2s;
  flex: 1;
  min-width: 150px;
}

.action-button:hover {
  background: #2c2c54;
  transform: translateY(-2px);
}

.action-icon {
  font-size: 1.2rem;
}

.recent-activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  background: #232342;
  border-radius: 0.8rem;
}

.activity-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.activity-icon.completed {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
}

.activity-icon.exam {
  background: linear-gradient(135deg, #ff9800, #f57c00);
}

.activity-details h4 {
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
}

.activity-details p {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.7;
}

/* Topics Tab */
.topics-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.topics-filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.level-tubelight-switch {
  display: flex;
  background: #181828;
  border-radius: 2.5rem;
  padding: 0.22rem 0.22rem;
  gap: 0.2rem;
  box-shadow: 0 2px 14px 0 rgba(123, 47, 242, 0.2), 0 1px 6px 0 rgba(26, 143, 255, 0.13);
  position: relative;
}

.level-tubelight-pill {
  position: relative;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  border-radius: 2rem;
  padding: 0.5rem 1.7rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  outline: none;
  font-weight: 500;
  z-index: 1;
  overflow: visible; /* Allow button to be seen */

}

.level-tubelight-pill.selected {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  box-shadow: 0 2px 14px 0 rgba(123, 47, 242, 0.6), 0 1px 8px 0 rgba(26, 143, 255, 0.47);
}

.tubelight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  border-radius: 2rem;
  z-index: -1;
  filter: blur(8px);
  opacity: 0.6;
}

.search-bar {
  padding: 0.7rem 1.6rem;
  border-radius: 2.2rem;
  border: none;
  background: #181828;
  color: #fff;
  font-size: 1.08rem;
  font-family: inherit;
  box-shadow: 0 2px 14px 0 rgba(123, 47, 242, 0.2), 0 1px 6px 0 rgba(26, 143, 255, 0.13);
  outline: none;
  transition: box-shadow 0.18s, border 0.18s, background 0.18s;
  text-align: center;
  min-width: 180px;
}

.search-bar:focus {
  box-shadow: 0 2px 18px 0 rgba(123, 47, 242, 0.53), 0 1px 8px 0 rgba(26, 143, 255, 0.27);
  background: #232342;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.topic-card {
  background: #181828;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: visible; /* Allow button to be seen */
  display: flex;
  flex-direction: column;
  min-height: 340px; /* Ensure card has enough height for button */
}

.topic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.topic-card.completed {
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.topic-header {
  margin-bottom: 1.5rem;
}

.topic-header h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.topic-grade {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: #232342;
  border-radius: 1rem;
  font-size: 0.85rem;
}

.topic-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.start-topic-btn {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s, filter 0.2s;
}

.start-topic-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.completed-badge {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
}

/* Resources Tab */
.resources-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.resources-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.resources-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  background: #181828;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.resource-icon {
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resource-details {
  flex: 1;
}

.resource-details h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.2rem;
}

.resource-type {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: #232342;
  border-radius: 0.6rem;
  font-size: 0.8rem;
}

.download-btn {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s, filter 0.2s;
}

.download-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

/* Mock Exams Tab */
.mock-exams-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mock-exams-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.mock-exams-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.mock-exams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.mock-exam-card {
  background: #181828;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.mock-exam-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.mock-exam-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
}

.exam-details {
  margin-bottom: 1.5rem;
}

.exam-detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.detail-label {
  color: rgba(255, 255, 255, 0.7);
}

.difficulty-easy {
  color: #4caf50;
}

.difficulty-medium {
  color: #ff9800;
}

.difficulty-hard {
  color: #f44336;
}

.start-exam-btn {
  width: 100%;
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
  border: none;
  padding: 0.8rem 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s, filter 0.2s;
}

.start-exam-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

/* Study Guide Tab */
.study-guide-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.study-guide-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.study-guide-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.study-path {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.study-path:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2rem;
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;
}

.path-step {
  display: flex;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #232342;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.path-step.completed .step-number {
  background: #4caf50;
  color: #fff;
}

.path-step.active .step-number {
  background: linear-gradient(90deg, #1a8fff 0%, #7B2FF2 100%);
  color: #fff;
}

.step-content {
  flex: 1;
  background: #181828;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.path-step.completed .step-content {
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.path-step.active .step-content {
  border: 1px solid rgba(123, 47, 242, 0.3);
}

.step-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.step-content p {
  margin: 0 0 1rem 0;
  color: rgba(255, 255, 255, 0.8);
}

.step-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.step-topic {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: #232342;
  border-radius: 1rem;
  font-size: 0.85rem;
}

.step-status {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.85rem;
}

.path-step.completed .step-status {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.path-step.active .step-status {
  background: rgba(123, 47, 242, 0.2);
  color: #7B2FF2;
}

.path-step:not(.completed):not(.active) .step-status {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .math-dashboard-progress-container {
    flex-direction: column;
    align-items: center;
  }
  
  .progress-stats {
    justify-content: center;
  }
  
  .math-dashboard-tabs {
    justify-content: flex-start;
    padding-bottom: 0.8rem;
  }
  
  .tab-button {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
  
  .overview-content,
  .topics-grid,
  .resources-grid,
  .mock-exams-grid {
    grid-template-columns: 1fr;
  }
  
  .study-path:before {
    left: 1.5rem;
  }
  
  .step-number {
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
  }
  
  .step-status {
    position: static;
    display: inline-block;
    margin-top: 1rem;
  }
}
```

### File: `./src/styles/ClassesRedesign.css`

```css
/* ClassesRedesign.css - Aligned with Home.js style */

:root {
    --bg-dark-1: #3a3f61;
    --bg-dark-2: #274551;
    --purple-radial: #7c5cff;
    --blue: #4ea8ff;
    --blue-soft: rgba(78, 168, 255, 0.16);
    --teal: #3dd9b6;
    --text-main: #f9fafb;
    --text-muted: #9ca3af;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.1);
    --input-bg: rgba(15, 23, 42, 0.5);
    --shadow-soft: 0 24px 60px rgba(0, 0, 0, 0.55);
    --radius-lg: 24px;
    --radius-xl: 32px;
    --max-width: 1280px;
}

body:has(.classes-redesign-page) {
    background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%),
        linear-gradient(135deg, #3A3F61 0%, #274551 100%) !important;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--text-main);
}

.classes-redesign-page {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: var(--text-main);
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

.classes-container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
}

/* --- HERO SECTION --- */
.classes-hero {
    padding: 8rem 0 4rem;
    position: relative;
}

.hero-layout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
    max-width: 1000px;
    margin: 0 auto;
}

@media (min-width: 1024px) {
    .hero-layout {
        flex-direction: row;
        align-items: center;
    }
}

.hero-content {
    flex: 1;
    max-width: 650px;
}

.hero-widgets {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
    width: 100%;
}

.hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    background: rgba(78, 168, 255, 0.1);
    border: 1px solid rgba(78, 168, 255, 0.2);
    backdrop-filter: blur(4px);
    margin-bottom: 1.5rem;
}

.hero-pill-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--blue);
}

.hero-pill-text {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #bfdbfe;
    text-transform: uppercase;
}

.hero-title {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #fff;
    letter-spacing: -0.02em;
}

.hero-title span {
    background: linear-gradient(135deg, #7c5cff 0%, #4ea8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-muted);
    max-width: 540px;
    margin-bottom: 2.5rem;
    line-height: 1.6;
}

/* --- MAIN LAYOUT (Single Column) --- */
.classes-layout-single {
    padding-bottom: 8rem;
    max-width: 1000px;
    margin: 0 auto;
}

.main-content-full {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

/* Search & Filter Bar */
/* --- UNIFIED GLASS TOOLBAR --- */
.search-toolbar {
    display: flex;
    align-items: center;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 0.5rem;
    margin-bottom: 3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.search-toolbar:focus-within {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.search-group {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    gap: 0.75rem;
}

.search-icon-toolbar {
    color: var(--text-muted);
    transition: color 0.2s;
}

.search-toolbar:focus-within .search-icon-toolbar {
    color: #fff;
}

.search-input-toolbar {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    padding: 0.75rem 0;
}

.search-input-toolbar::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

.toolbar-divider {
    width: 1px;
    height: 24px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 1rem;
}

.filter-group {
    display: flex;
    gap: 0.5rem;
    padding-right: 0.5rem;
}

.toolbar-filter-btn {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-muted);
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
}

.toolbar-filter-btn:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
}

.toolbar-filter-btn.active {
    background: rgba(78, 168, 255, 0.15);
    color: #bfdbfe;
    border-color: rgba(78, 168, 255, 0.2);
}

/* Responsive Toolbar */
@media (max-width: 768px) {
    .search-toolbar {
        flex-direction: column;
        align-items: stretch;
        padding: 1rem;
        gap: 1rem;
    }

    .toolbar-divider {
        width: 100%;
        height: 1px;
        margin: 0;
    }

    .filter-group {
        justify-content: flex-start;
        padding-right: 0;
        overflow-x: auto;
        padding-bottom: 0.25rem;
        /* Scrollbar space */
    }
}

/* Section Styles */
.class-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
}

.section-badge {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
}

.class-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

/* Class Card Redesign */
.class-card-new {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    overflow: hidden;
}

.class-card-new:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.subject-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-pill {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    background: rgba(16, 185, 129, 0.15);
    color: #6ee7b7;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.25rem;
}

.card-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.card-btn {
    margin-top: 1rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(78, 168, 255, 0.1), rgba(78, 168, 255, 0.05));
    border: 1px solid rgba(78, 168, 255, 0.2);
    color: #bfdbfe;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.class-card-new:hover .card-btn {
    background: linear-gradient(135deg, #4ea8ff 0%, #3b82f6 100%);
    color: #fff;
    border-color: transparent;
    transform: translateY(2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* --- RIGHT COLUMN (Sidebar) --- */
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.sidebar-widget {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
}

.widget-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.widget-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.widget-action {
    font-size: 0.8rem;
    color: var(--blue);
    cursor: pointer;
    transition: color 0.2s;
}

.widget-action:hover {
    color: #fff;
}

.clinic-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.clinic-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.clinic-time {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
    min-width: 40px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.clinic-info h4 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 0.2rem;
}

.clinic-info p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

/* Tip Card */
.tip-card {
    background: linear-gradient(135deg, rgba(124, 92, 255, 0.1) 0%, rgba(78, 168, 255, 0.05) 100%);
    border: 1px solid rgba(124, 92, 255, 0.2);
}

.tip-content {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #e0e7ff;
    font-style: italic;
    margin-bottom: 1rem;
}

.tip-author {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: right;
}

/* Goal Card */
.goal-card {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
    border-color: rgba(16, 185, 129, 0.2);
}

.goal-content {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 1rem;
}

.goal-checkbox {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 6px;
    border: 2px solid rgba(16, 185, 129, 0.5);
    background: transparent;
    cursor: pointer;
    appearance: none;
    position: relative;
    transition: all 0.2s;
}

.goal-checkbox:checked {
    background: #10b981;
    border-color: #10b981;
}

.goal-checkbox:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
}

.goal-text {
    font-size: 0.95rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 0.2rem;
}

.goal-subtext {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

/* Responsive adjustments for search and filter */
@media (max-width: 768px) {
    .filter-bar {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }

    .search-input-wrap {
        width: 100%;
        min-width: unset;
        max-width: unset;
    }

    .filter-pills-container {
        justify-content: center;
    }
}
```

### File: `./src/styles/FlashcardSet.css`

```css
/* Flashcard Set Page Styles - Polished Redesign */

:root {
  --bg-dark-1: #3a3f61;
  --bg-dark-2: #274551;
  --text-main: #f9fafb;
  --text-muted: #9ca3af;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-border: rgba(255, 255, 255, 0.1);
  --success: #10b981;
  --error: #ef4444;
  --warning: #f59e0b;
  --info: #3b82f6;
  --glass-heavy: rgba(30, 41, 59, 0.7);
  --glass-light: rgba(255, 255, 255, 0.08);
  --shadow-glow: 0 0 20px rgba(78, 168, 255, 0.15);
  --primary-gradient: linear-gradient(135deg, #4fd1c7 0%, #38b2ac 100%);
}

body:has(.flashcard-set-landing),
body:has(.flashcard-set-study),
body:has(.flashcard-set-complete),
body:has(.flashcard-set-not-found) {
  background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%),
    linear-gradient(135deg, #3A3F61 0%, #274551 100%) !important;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--text-main);
}

.flashcard-set-landing,
.flashcard-set-study,
.flashcard-set-complete,
.flashcard-set-not-found {
  min-height: 100vh;
  font-family: 'Inter', system-ui, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Landing Page Styles */
.flashcard-set-landing .container {
  padding-top: 6rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: all 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
}

.back-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-2px);
}

.set-header {
  text-align: center;
  margin-bottom: 4rem;
}

.flashcard-set-landing .set-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.set-description {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.set-info {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e1;
  background: var(--glass-light);
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
  font-weight: 500;
}

.info-item.category {
  background: rgba(79, 209, 199, 0.15);
  color: #4fd1c7;
  border-color: rgba(79, 209, 199, 0.3);
}

.study-modes {
  text-align: center;
}

.study-modes h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 2.5rem;
}

.mode-cards {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.mode-card {
  background: var(--glass-heavy);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem 2rem;
  width: 320px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.mode-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.mode-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
  opacity: 0;
  transition: opacity 0.3s;
}

.mode-card:hover::before {
  opacity: 1;
}

.mode-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(79, 209, 199, 0.1);
  margin-bottom: 1.5rem;
  color: #4fd1c7;
  transition: all 0.3s;
}

.mode-card:hover .mode-icon {
  background: var(--primary-gradient);
  color: white;
  transform: scale(1.1);
}

.mode-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.mode-card p {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Study Session Styles */
.study-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-top: 6rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
}

.back-button:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-2px);
}

.study-title h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
}

.study-title p {
  color: var(--text-muted);
  font-size: 1rem;
}

.study-progress-indicator {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.progress-text {
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Inter', monospace;
}

.progress-text .current {
  color: #4fd1c7;
}

.progress-bar-container {
  width: 220px;
  height: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.progress-bar-fill {
  height: 100%;
  background: var(--primary-gradient);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 12px rgba(79, 209, 199, 0.4);
}

.study-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.flashcard-stats {
  display: flex;
  gap: 1.5rem;
  background: var(--glass-light);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1rem 2rem;
  min-width: 400px;
  justify-content: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  flex: 1;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.stat.correct .stat-value {
  color: var(--success);
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

.stat.incorrect .stat-value {
  color: var(--error);
  text-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
}

/* Flashcard Styles */
.flashcard {
  position: relative;
  width: 100%;
  max-width: 650px;
  height: 400px;
  perspective: 1500px;
  cursor: pointer;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
}

.flashcard.flipped .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 32px;
  background: var(--glass-heavy);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.flashcard-front {
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
}

.flashcard-back {
  transform: rotateY(180deg);
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95));
  border-color: rgba(79, 209, 199, 0.2);
  box-shadow: 0 0 30px rgba(79, 209, 199, 0.1);
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
}

.card-content p {
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.difficulty-indicator {
  display: flex;
  align-items: center;
}

.difficulty {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  backdrop-filter: blur(4px);
}

.difficulty.easy {
  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.difficulty.medium {
  color: #fcd34d;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.difficulty.hard {
  color: #fca5a5;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.flip-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.flashcard:hover .flip-hint {
  opacity: 1;
  color: #fff;
}

.flashcard-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: var(--text-muted);
}

.action-btn:hover {
  transform: translateY(-6px) scale(1.05);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

.action-btn.help:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #93c5fd;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.action-btn.correct:hover {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.4);
  color: #6ee7b7;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

.action-btn.incorrect:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
  color: #fca5a5;
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
}

/* Completion Page Styles */
.flashcard-set-complete .container {
  padding-top: 8rem;
  text-align: center;
}

.flashcard-set-complete h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 3rem;
}

.results {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.result-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--glass-heavy);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  min-width: 180px;
  transition: transform 0.3s;
}

.result-card:hover {
  transform: translateY(-5px);
}

.result-card.correct {
  color: #48bb78;
  border-color: rgba(72, 187, 120, 0.3);
}

.result-card.incorrect {
  color: #f56565;
  border-color: rgba(245, 101, 101, 0.3);
}

.result-card.total {
  color: #4fd1c7;
  border-color: rgba(79, 209, 199, 0.3);
}

.result-content h2 {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
}

.result-content p {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  font-weight: 600;
}

.completion-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary-gradient);
  color: white;
  box-shadow: 0 4px 12px rgba(79, 209, 199, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(79, 209, 199, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Not Found Page Styles */
.flashcard-set-not-found .container {
  padding-top: 8rem;
  text-align: center;
}

.flashcard-set-not-found h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.flashcard-set-not-found p {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

/* Timer Styles */
.timer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.timer-text {
  font-size: 1rem;
  font-weight: 600;
  color: #4fd1c7;
  background: rgba(79, 209, 199, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(79, 209, 199, 0.2);
  box-shadow: 0 0 10px rgba(79, 209, 199, 0.1);
}

/* Test Mode Styles */
.test-mode .flashcard {
  cursor: default;
}

.test-mode .flashcard-front,
.test-mode .flashcard-back {
  cursor: pointer;
}

.answer-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.1rem;
  backdrop-filter: blur(10px);
  margin: 0 1rem;
  transition: all 0.2s;
  min-width: 300px;
}

.answer-input:focus {
  outline: none;
  border-color: #4fd1c7;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(79, 209, 199, 0.2);
}

.answer-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.action-btn.submit {
  background: var(--primary-gradient);
  color: white;
  font-weight: 600;
  padding: 0;
  width: 80px;
  border: none;
}

.action-btn.submit:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(79, 209, 199, 0.3);
}

/* Test Results Styles */
.test-summary {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.score-card {
  text-align: center;
  padding: 3rem;
  background: var(--glass-heavy);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  min-width: 250px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.score-card h2 {
  font-size: 4.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.score-card p {
  color: var(--text-muted);
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.score-detail {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 500;
}

.test-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.test-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--glass-light);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  min-width: 200px;
}

.test-stat .stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.test-stat .stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.results-review {
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.result-item {
  padding: 2rem;
  background: var(--glass-light);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.2s;
  text-align: left;
}

.result-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.result-item.correct {
  border-left: 6px solid #48bb78;
}

.result-item.incorrect {
  border-left: 6px solid #f56565;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.result-number {
  font-weight: 700;
  color: #4fd1c7;
  background: rgba(79, 209, 199, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.9rem;
}

.result-status {
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.result-status.correct {
  background: rgba(72, 187, 120, 0.2);
  color: #48bb78;
}

.result-status.incorrect {
  background: rgba(245, 101, 101, 0.2);
  color: #f56565;
}

.result-question,
.result-answer,
.result-correct {
  margin-bottom: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1.05rem;
}

.result-question strong,
.result-answer strong,
.result-correct strong {
  color: #fff;
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
  opacity: 0.7;
}

.result-correct {
  color: #48bb78;
  background: rgba(72, 187, 120, 0.1);
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .study-header {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding-top: 5rem;
  }

  .study-progress-indicator {
    align-items: center;
    width: 100%;
  }

  .set-info {
    flex-direction: column;
    align-items: center;
  }

  .mode-cards {
    flex-direction: column;
    align-items: center;
  }

  .flashcard {
    width: 100%;
    max-width: 400px;
    height: 300px;
  }

  .card-content p {
    font-size: 1.75rem;
  }

  .flashcard-stats {
    gap: 1rem;
    padding: 1rem;
    min-width: auto;
    width: 100%;
  }

  .flashcard-actions {
    gap: 1rem;
  }

  .action-btn {
    width: 60px;
    height: 60px;
  }

  .results {
    flex-direction: column;
    align-items: center;
  }

  .set-title {
    font-size: 2.5rem;
  }
}
```

### File: `./src/styles/utilities.css`

```css
/* Utility classes for common patterns */

/* Loading states */
.loading-skeleton {
  @apply bg-gray-700 rounded animate-pulse;
}

.loading-dots::after {
  content: '...';
  animation: loading-dots 1.5s infinite;
}

@keyframes loading-dots {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}

/* Focus styles */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900;
}

/* Button animations */
.btn-lift {
  @apply transform transition-all duration-200 hover:-translate-y-0.5;
}

/* Card hover effects */
.card-hover {
  @apply transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl;
}

/* Smooth scrolling */
.smooth-scroll {
  scroll-behavior: smooth;
}

/* Glass morphism effect */
.glass {
  background: rgba(31, 41, 55, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Text gradient */
.text-gradient {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
}

/* Responsive containers */
.container-responsive {
  @apply w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Animation utilities */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile-first responsive utilities */
@media (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
}

@media (min-width: 769px) {
  .hide-desktop {
    display: none;
  }
}

/* Accessibility utilities */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Color utilities */
.text-primary {
  color: var(--primary);
}

.text-secondary {
  color: var(--secondary);
}

.bg-primary {
  background-color: var(--primary);
}

.bg-secondary {
  background-color: var(--secondary);
}
```

### File: `./src/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import custom utilities */
@import './utilities.css';

:root {
  /* Brand Colors - Standardized */
  --primary: #7B2FF2;    /* Primary violet - matches brand */
  --primary-light: #A78BFA;
  --secondary: #F357A8;  /* Secondary pink */
  --accent: #00C6FB;     /* Accent cyan */
  
  /* Extended Color Palette */
  --coral: #FF6B6B;      /* Energetic red */
  --teal: #4ECDC4;       /* Trustworthy teal */
  --sky: #45B7D1;        /* Professional blue */
  --sage: #96CEB4;       /* Success green */
  --gold: #FFD93D;       /* Achievement gold */
  --purple-light: #A78BFA; /* Light purple */
  
  /* Dark Theme Colors */
  --bg-primary: #0F0F1E;      /* Main background */
  --bg-secondary: #1A1A2E;    /* Card backgrounds */
  --bg-tertiary: #252538;     /* Hover states */
  --dark: #151730;
  --dark-surface: #1E1E2D;
  --card-bg: #1B1A2E;
  --text-primary: #FFFFFF;    /* Main text */
  --text-secondary: #E2E8F0;  /* Secondary text */
  --text-tertiary: #94A3B8;   /* Muted text */
  --text-dark: #8E8EA0;
  --text-light: #FFFFFF;
  --border-color: #2D2A3A;
  
  /* Professional Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  --gradient-secondary: linear-gradient(135deg, var(--coral) 0%, var(--teal) 100%);
  --gradient-subtle: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  --primary-gradient: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
  --create-set-gradient: linear-gradient(90deg, #EC4899 0%, #D946EF 100%);
  --bg-gradient: linear-gradient(135deg, var(--dark) 0%, #23174B 100%);
  --btn-gradient: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
  
  /* Border System */
  --border-light: rgba(255, 255, 255, 0.06);
  --border-medium: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.15);
  
  /* Transitions */
  --transition: all 0.3s ease;
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shadow System */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
  
  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  
  /* Container Width */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  
  /* Category colors */
  --languages-color: #4E81FF;
  --science-color: #22C55E;
  --history-color: #F97316;
  --math-color: #F59E0B;
  --psychology-color: #14B8A6;
  --programming-color: #8B5CF6;
}

/* Base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  /* Removed background-color to allow global gradient to show */
  color: var(--text-light);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 0.5em;
}

/* Animation */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Utility classes */
.text-gradient {
  background: linear-gradient(to right, white, var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.btn-outline {
  border: 1px solid rgba(74, 20, 140, 0.3);
  color: var(--accent);
  background-color: transparent;
}

.btn-outline:hover {
  background-color: rgba(74, 20, 140, 0.1);
  border-color: rgba(74, 20, 140, 0.5);
  transform: translateY(-2px);
}

/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Flex utilities */
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

/* Spacing */
.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

/* Text utilities */
.text-center {
  text-align: center;
}

.text-lg {
  font-size: 1.125rem;
}

.text-gray-400 {
  color: #9ca3af;
}

/* Responsive utilities */
@media (min-width: 640px) {
  .sm\:flex-row {
    flex-direction: row;
  }
}

/* Animation utilities */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.hover\:-translate-y-0\.5:hover {
  --tw-translate-y: -0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out forwards;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--accent);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  display: inline-block;
  background-color: var(--primary);
  color: var(--text-light);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  text-align: center;
}

.btn:hover {
  background-color: var(--secondary);
  color: var(--primary);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background-color: var(--primary);
  color: var(--text-light);
}

/* Message styles for forms */
.error-message {
  color: #e53e3e;
  background-color: rgba(229, 62, 62, 0.1);
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  border-left: 3px solid #e53e3e;
}

.success-message {
  color: #38a169;
  background-color: rgba(56, 161, 105, 0.1);
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  border-left: 3px solid #38a169;
}

section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title h2 {
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--accent);
}

.navbar {
  width: 100%;
  background: var(--background-light, #fff);
  box-shadow: 0 2px 12px 0 #0001;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem; /* Reduced padding */
  max-width: 1200px;
  margin: 0 auto;
  height: 60px; /* Fixed height for consistency */
}

.navbar-logo {
  display: flex;
  align-items: center;
}

/* Logo link styles */
.logo-link {
  display: flex !important;
  align-items: center !important;
  text-decoration: none !important;
  height: 100%;
}

/* More specific logo styles */
.navbar .navbar-container .navbar-logo {
  display: flex !important;
  align-items: center !important;
  height: 60px !important; /* Match navbar height */
  padding: 0 !important;
  margin: 0 !important;
  overflow: visible !important;
}

.navbar .navbar-container .navbar-logo .logo-image {
  height: 80px !important; /* Larger than container */
  width: auto !important;
  max-width: none !important;
  object-fit: contain !important;
  margin: 0 !important;
  position: relative;
  top: -5px; /* Adjusted vertical position */
}

.navbar .navbar-container .navbar-logo .pop-logo {
  height: 40px !important;
  width: auto !important;
  display: block !important;
  margin: 0 !important;
  position: relative;
}

/* Reset any conflicting styles */
.navbar-logo h1 {
  margin: 0 !important;
  font-size: 1.8rem !important;
}

.navbar-mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  gap: 5px;
}

.navbar-mobile-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
  transition: 0.18s;
}

.navbar-center-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
}

.navbar-center-links-mobile {
  flex-direction: column !important;
  position: absolute !important;
  top: 4.5rem;
  left: 0;
  right: 0;
  background: var(--surface, #181828);
  z-index: 2000;
  border-radius: 1rem;
  padding: 1.2rem 0;
  box-shadow: 0 8px 32px 0 #0003;
  gap: 1.2rem !important;
}

.navbar-link {
  color: var(--primary);
  font-size: 1.08rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.18s;
  padding: 0.3rem 0.8rem;
  border-radius: 0.6rem;
}

.navbar-link:hover, .navbar-link.active {
  background: rgba(121, 67, 125, 0.1);
  color: var(--primary);
}

.navbar-auth {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.sign-in-btn {
  background: linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.sign-in-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.6);
}

/* Responsive styles */
@media (max-width: 1024px) {
  .container {
    max-width: 98vw;
    padding: 0 0.5rem;
  }
  .navbar-container {
    padding: 0.7rem 0.5rem;
  }
  .navbar-logo h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 700px) {
  .container {
    max-width: 100vw;
    padding: 0 0.2rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 1.1rem;
  }
  p, a, .btn {
    font-size: 0.98rem;
  }
  .navbar-mobile-toggle {
    display: flex;
  }
  .navbar-center-links {
    display: none !important;
  }
  .navbar-center-links.navbar-center-links-mobile {
    display: flex !important;
    gap: 1.2rem;
  }
  .navbar-logo h1 {
    font-size: 1.1rem;
  }
  .navbar-auth {
    gap: 0.7rem;
  }
  .navbar-tools-menu {
    position: static !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    min-width: unset !important;
    width: 100% !important;
    border-radius: 0 0 1rem 1rem !important;
    box-shadow: none !important;
    background: var(--surface, #181828) !important;
    padding: 0.6rem 0 !important;
    z-index: 2001;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: stretch;
  }
  .navbar-tools-item {
    width: 100%;
    text-align: center;
    font-size: 1.05rem;
    padding: 1rem 0;
    border-radius: 0.7rem;
    background: none;
    color: var(--primary, #7B2FF2);
    border: none;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
}

@media (max-width: 480px) {
  .container {
    max-width: 100vw;
    padding: 0 0.1rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
  }
  .navbar-container {
    padding: 0.5rem 0.1rem;
  }
  .navbar-logo h1 {
    font-size: 0.97rem;
  }
  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.97rem;
  }
  .navbar-tools-menu {
    padding: 0.4rem 0 !important;
  }
  .navbar-tools-item {
    font-size: 0.99rem;
    padding: 0.8rem 0;
  }
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 2rem;
  }
  
  section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .section-title h2 {
    font-size: 1.75rem;
  }
  
  section {
    padding: 2rem 0;
  }
  
  .btn {
    padding: 0.6rem 1.2rem;
  }
}
```

### File: `./src/styles/HomeLight.css`

```css
/* Light Theme Landing Page Styles */

/* Base Styles */
.light-home-wrapper {
  background: #ffffff;
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

.light-home {
  width: 100%;
  min-height: 100vh;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Navigation */
.light-navbar {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.navbar-logo img {
  height: 40px;
  width: auto;
}

.navbar-center {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-link {
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #8b5cf6;
}

.sign-in-btn {
  background: #8b5cf6;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.sign-in-btn:hover {
  background: #7c3aed;
  transform: translateY(-1px);
}

/* Hero Section */
.light-hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  padding: 6rem 0;
  text-align: center;
}

.light-hero-section .hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.light-hero-section h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.light-hero-section p {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.hero-cta.primary {
  background: #8b5cf6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #8b5cf6;
}

.hero-cta.primary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.hero-cta.secondary {
  background: transparent;
  color: #8b5cf6;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #8b5cf6;
}

.hero-cta.secondary:hover {
  background: #8b5cf6;
  color: white;
  transform: translateY(-2px);
}

/* Stats Section - Light Blue Background */
.light-stats-section {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  padding: 5rem 0;
}

.stats-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.stats-left {
  flex: 1;
  max-width: 500px;
}

.stats-left h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.5rem;
}

.stats-left p {
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 1rem;
  line-height: 1.7;
}

.attribution {
  font-weight: 600;
  color: #8b5cf6 !important;
  font-style: italic;
}

.stats-right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.stat-card .number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
}

.stat-card .label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Features Section */
.light-features-section {
  background: #ffffff;
  padding: 5rem 0;
}

.light-features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #8b5cf6;
}

.feature h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.feature p {
  color: #64748b;
  line-height: 1.6;
}

/* CTA Section */
.light-cta-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  padding: 5rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cta-button.primary {
  background: #8b5cf6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #8b5cf6;
}

.cta-button.primary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.cta-button.secondary {
  background: transparent;
  color: #8b5cf6;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #8b5cf6;
}

.cta-button.secondary:hover {
  background: #8b5cf6;
  color: white;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .stats-content {
    flex-direction: column;
    text-align: center;
  }
  
  .stats-left {
    max-width: 100%;
  }
  
  .stats-right {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .light-hero-section h1 {
    font-size: 2.2rem;
  }
  
  .light-stats-section h2,
  .light-features-section h2,
  .light-cta-section h2 {
    font-size: 2rem;
  }
  
  .hero-buttons,
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navbar-center {
    display: none;
  }
}
```

### File: `./src/styles/FlashcardsRedesign.css`

```css
/* FlashcardsRedesign.css - Human/Organic Design */

.flashcards-redesign-page {
    min-height: 100vh;
    color: #f8fafc;
    font-family: 'Inter', sans-serif;
    padding-bottom: 6rem;
    background: radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%);
    background-attachment: fixed;
    background-size: cover;
}

/* Container */
.flashcards-container {
    max-width: 1100px;
    /* Slightly tighter for better reading */
    margin: 0 auto;
    padding: 8rem 1.5rem 0;
}

/* Asymmetrical Hero */
.flashcards-hero {
    padding: 2rem 0 5rem;
}

.hero-layout-asym {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
}

@media (min-width: 900px) {
    .hero-layout-asym {
        grid-template-columns: 1.1fr 0.9fr;
        gap: 6rem;
    }
}

.hero-content-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
}

.hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    backdrop-filter: blur(4px);
}

.hero-pill-dot {
    width: 6px;
    height: 6px;
    background-color: #2dd4bf;
    /* teal-400 */
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(45, 212, 191, 0.6);
}

.hero-pill-text {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #ccfbf1;
    /* teal-100 */
}

.hero-title {
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 700;
    color: #f8fafc;
    letter-spacing: -0.03em;
}

@media (min-width: 768px) {
    .hero-title {
        font-size: 4rem;
    }
}

.text-highlight {
    background: linear-gradient(120deg, #818cf8, #2dd4bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    /* Human touch */
    padding-right: 0.2em;
}

.hero-subtitle {
    font-size: 1.15rem;
    line-height: 1.6;
    color: #cbd5e1;
    /* slate-300 */
    max-width: 32rem;
    font-weight: 400;
}

.hero-stats-row {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.stat-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    font-size: 0.9rem;
    color: #e2e8f0;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Right Side Visual - Floating Card */
.hero-visual-right {
    position: relative;
    display: flex;
    justify-content: center;
    perspective: 1000px;
}

.featured-deck-card {
    background: rgba(30, 41, 59, 0.6);
    /* slate-800/60 */
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2rem;
    width: 100%;
    max-width: 380px;
    transform: rotateY(-5deg) rotateX(2deg);
    transition: transform 0.4s ease;
    box-shadow:
        0 20px 40px -10px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    position: relative;
    overflow: hidden;
}

.featured-deck-card:hover {
    transform: rotateY(0) rotateX(0) translateY(-5px);
}

.featured-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #94a3b8;
    margin-bottom: 0.75rem;
}

.featured-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.featured-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #cbd5e1;
    margin-bottom: 2rem;
}

.featured-dot {
    color: #475569;
}

.featured-progress {
    margin-bottom: 2rem;
}

.progress-bar-bg {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
}

.progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    border-radius: 3px;
}

.featured-play-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    background: white;
    border-radius: 50%;
    color: #0f172a;
    font-size: 1.2rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
}

.featured-play-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.deco-circle {
    position: absolute;
    top: -20%;
    right: -20%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.15), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

/* Floating Toolbar */
.search-toolbar-floating {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 0.75rem;
    backdrop-filter: blur(10px);
}

@media (min-width: 768px) {
    .search-toolbar-floating {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 9999px;
        padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
}

.search-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
}

.search-icon-toolbar {
    color: #94a3b8;
}

.search-input-toolbar {
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    width: 100%;
    outline: none;
}

.search-input-toolbar::placeholder {
    color: #64748b;
}

.filter-pills {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0;
}

.filter-pill {
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #94a3b8;
    background: transparent;
    border: 1px solid transparent;
    transition: all 0.2s;
    white-space: nowrap;
    cursor: pointer;
}

.filter-pill:hover {
    color: white;
    background: rgba(255, 255, 255, 0.05);
}

.filter-pill.active {
    color: #0f172a;
    background: #f1f5f9;
    font-weight: 600;
}

/* Content Split Layout */
.content-split-layout {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}

/* Section Headers */
.section-header-simple {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.section-title-human {
    font-size: 1.5rem;
    font-weight: 600;
    color: #f8fafc;
    letter-spacing: -0.02em;
}

.create-btn-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #2dd4bf;
    background: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
    font-size: 0.95rem;
    transition: color 0.2s;
}

.create-btn-text:hover {
    color: #5eead4;
}

/* Recent Cards Grid (2 columns) */
.cards-grid-recent {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .cards-grid-recent {
        grid-template-columns: 1fr 1fr;
    }
}

.set-card-recent {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 1.5rem;
    display: flex;
    gap: 1.5rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.set-card-recent:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.15);
}

.card-icon-bg {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f8fafc;
    flex-shrink: 0;
}

.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}

.card-desc {
    font-size: 0.9rem;
    color: #94a3b8;
    line-height: 1.5;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.last-studied {
    font-size: 0.8rem;
    color: #64748b;
}

.mini-progress {
    width: 60px;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
}

.mini-fill {
    height: 100%;
    background: #2dd4bf;
    border-radius: 2px;
}

/* Masonry / Staggered Grid */
.cards-masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.set-card-masonry {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    min-height: 220px;
}

.set-card-masonry:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
}

.masonry-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.category-tag {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.75rem;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
    font-weight: 500;
}

.more-btn {
    color: #64748b;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    transition: color 0.2s;
}

.more-btn:hover {
    color: white;
}

.masonry-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 0.5rem;
    line-height: 1.4;
}

.masonry-desc {
    font-size: 0.85rem;
    color: #94a3b8;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex: 1;
}

.masonry-meta {
    display: flex;
    gap: 0.75rem;
}

.meta-pill {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: #64748b;
}

.hover-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    opacity: 0;
    transition: opacity 0.3s;
}

.set-card-masonry:hover .hover-glow {
    opacity: 1;
}

/* Create Card Minimal */
.create-card-minimal {
    border: 2px dashed rgba(255, 255, 255, 0.1);
    background: transparent;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.create-card-minimal:hover {
    border-color: rgba(45, 212, 191, 0.3);
    background: rgba(45, 212, 191, 0.02);
}

.create-icon-circle {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    margin-bottom: 1rem;
    transition: all 0.3s;
}

.create-card-minimal:hover .create-icon-circle {
    background: rgba(45, 212, 191, 0.1);
    color: #2dd4bf;
    transform: scale(1.1);
}

.create-text {
    font-size: 0.95rem;
    font-weight: 500;
    color: #94a3b8;
}

/* Empty State */
.empty-state-human {
    text-align: center;
    padding: 6rem 2rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.empty-visual {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.empty-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}

.empty-desc {
    color: #94a3b8;
    margin-bottom: 2rem;
}

.btn-primary-soft {
    background: #f1f5f9;
    color: #0f172a;
    padding: 0.75rem 2rem;
    border-radius: 99px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary-soft:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}
```

### File: `./src/components/AddTopicForm.js`

```javascript
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '@clerk/clerk-react';

const AddTopicForm = ({ classId, onTopicAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { getToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken({ template: 'supabase' });
    const { data, error } = await supabase
      .from('topics')
      .insert([
        { name, description, class_id: classId }
      ])
      .setAuth(token);
    if (error) {
      setErrorMessage('Error adding topic: ' + error.message);
      setTimeout(() => setErrorMessage(''), 5000); // Clear after 5 seconds
    } else {
      setName('');
      setDescription('');
      setSuccessMessage('Topic added successfully!');
      setTimeout(() => setSuccessMessage(''), 5000); // Clear after 5 seconds
      if (onTopicAdded) onTopicAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Topic</h3>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Topic Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Topic</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default AddTopicForm;
```

### File: `./src/components/AddResourceForm.js`

```javascript
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '@clerk/clerk-react';

const AddResourceForm = ({ topicId, onResourceAdded }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const { getToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken({ template: 'supabase' });
    const { data, error } = await supabase
      .from('resources')
      .insert([
        { title, url, type, topic_id: topicId }
      ])
      .setAuth(token);
    if (error) {
      setMessage('Error: ' + error.message);
    } else {
      setMessage('Resource added successfully!');
      setTitle('');
      setUrl('');
      setType('');
      if (onResourceAdded) onResourceAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Resource</h3>
      <input
        type="text"
        placeholder="Resource Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Resource URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type (e.g., video, pdf)"
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <button type="submit">Add Resource</button>
      <p>{message}</p>
    </form>
  );
};

export default AddResourceForm;
```

### File: `./src/components/FeedbackList.js`

```javascript
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth, useUser } from '@clerk/clerk-react';

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
  const { getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const fetchFeedback = async () => {
      if (!user) return;
      const token = await getToken({ template: 'supabase' });
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .eq('user_id', user.id)
        .setAuth(token);
      if (error) console.error(error);
      else setFeedback(data);
    };
    fetchFeedback();
  }, [user, getToken]);

  return (
    <div>
      <h4>Your Feedback</h4>
      <ul>
        {feedback.map(item => (
          <li key={item.id}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
```

### File: `./src/components/SkeletonLoader.js`

```javascript
import React from 'react';

const SkeletonLoader = ({ 
  width = '100%', 
  height = '20px', 
  className = '',
  variant = 'text' 
}) => {
  const baseClasses = 'loading-skeleton';
  
  if (variant === 'card') {
    return (
      <div className={`bg-gray-800 rounded-xl p-8 border border-gray-700 ${className}`}>
        <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-6"></div>
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    );
  }
  
  if (variant === 'circle') {
    return (
      <div 
        className={`${baseClasses} rounded-full ${className}`}
        style={{ width, height }}
      ></div>
    );
  }
  
  return (
    <div 
      className={`${baseClasses} rounded ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default SkeletonLoader;
```

### File: `./src/components/SimpleNavbar.css`

```css
.navbar-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #10111A; 
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
}

.logo-simple {
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  gap: 0.5rem;
}

.logo-simple i {
  font-size: 2rem;
}

.nav-links-simple {
  display: flex;
  gap: 2.5rem;
}

.nav-links-simple a {
  color: #C2C2C2;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links-simple a:hover {
  color: #ffffff;
}

.sign-in-simple {
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.sign-in-simple:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.6);
}
```

### File: `./src/components/MarkdownRenderer.js`

```javascript
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Loader, List, ExternalLink } from 'lucide-react';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ content = '', markdownPath = '', fallbackPath = '', sectionId = '', className = '' }) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [showToc, setShowToc] = useState(true);
  const contentRef = useRef(null);

  // Extract table of contents from markdown
  const extractTableOfContents = (text) => {
    const headings = [];
    const regex = /^(#{2,3})\s+(.+)$/gm;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const level = match[1].length - 1; // h2 = 1, h3 = 2
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      headings.push({ level, title, id });
    }

    return headings;
  };

  // Scroll to section when clicking on TOC item
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Extract section content from markdown text based on section ID
  const extractSectionContent = (text, sectionId) => {
    if (!sectionId) return text;

    // Format the section ID for regex matching
    const formattedSectionId = sectionId
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Look for heading that matches the section ID (either as formatted title or original ID)
    const headingRegexTitle = new RegExp(`^#+\\s+(${formattedSectionId})\\s*$`, 'mi');
    const headingRegexId = new RegExp(`^#+\\s+(${sectionId.replace(/-/g, '[\\s-]')})\\s*$`, 'mi');

    let match = text.match(headingRegexTitle) || text.match(headingRegexId);

    if (match) {
      // Find the index of the matched heading
      const headingIndex = text.indexOf(match[0]);

      // Extract from this heading to the next heading of the same level or end of file
      // Count the number of # in the heading to determine its level
      const headingLevel = (match[0].match(/^#+/) || [''])[0].length;
      const nextHeadingRegex = new RegExp(`^#{1,${headingLevel}}\\s+`, 'gm');
      nextHeadingRegex.lastIndex = headingIndex + match[0].length;

      const nextMatch = nextHeadingRegex.exec(text);

      if (nextMatch) {
        return text.substring(headingIndex, nextMatch.index);
      } else {
        return text.substring(headingIndex);
      }
    }

    return `Section '${sectionId}' not found in the markdown content.`;
  };

  // Fetch markdown content from primary or fallback path
  useEffect(() => {
    const fetchMarkdown = async (path) => {
      setLoading(true);
      try {
        const response = await fetch(path);

        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.statusText}`);
        }

        let text = await response.text();
        setTableOfContents(extractTableOfContents(text));

        // If sectionId is provided, extract only that section
        if (sectionId) {
          text = extractSectionContent(text, sectionId);
        }

        setMarkdownContent(text);
        setError(null);
        return true;
      } catch (err) {
        console.error(`Error loading markdown from ${path}:`, err);
        return false;
      } finally {
        setLoading(false);
      }
    };

    const loadContent = async () => {
      if (content) {
        // If direct content is provided, use it
        setMarkdownContent(content);
        setTableOfContents(extractTableOfContents(content));
      } else if (markdownPath) {
        // Try to load from primary path first
        const primarySuccess = await fetchMarkdown(markdownPath);

        // If primary fails and fallback is provided, try fallback
        if (!primarySuccess && fallbackPath) {
          const fallbackSuccess = await fetchMarkdown(fallbackPath);

          // If both fail, show error
          if (!fallbackSuccess) {
            setError(`Failed to load content from both ${markdownPath} and ${fallbackPath}`);
          }
        }
      } else {
        setMarkdownContent('');
        setError('No content or path provided');
      }
    };

    loadContent();
  }, [markdownPath, fallbackPath, sectionId, content]);

  if (loading) {
    return (
      <div className="loading-container">
        <Loader className="loading-icon" />
        <p className="loading-text">Loading content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3 className="error-title">Error Loading Content</h3>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className={`markdown-renderer ${className}`} ref={contentRef}>
      {tableOfContents.length > 0 && (
        <div className="toc-container">
          <div className="toc-header" onClick={() => setShowToc(!showToc)}>
            <List className="toc-icon" />
            <h3 className="toc-title">Table of Contents</h3>
          </div>
          {showToc && (
            <ul className="toc-list">
              {tableOfContents.map((item, index) => (
                <li
                  key={index}
                  className={`toc-item level-${item.level}`}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="toc-link"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props}>
                  {children}
                </code>
              );
            },
            h1: ({ node, children, ...props }) => {
              const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return (
                <h1 id={id} {...props}>
                  {children}
                </h1>
              );
            },
            h2: ({ node, children, ...props }) => {
              const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return (
                <h2 id={id} {...props}>
                  {children}
                </h2>
              );
            },
            h3: ({ node, children, ...props }) => {
              const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return (
                <h3 id={id} {...props}>
                  {children}
                </h3>
              );
            },
            h4: ({ node, children, ...props }) => {
              const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return (
                <h4 id={id} {...props}>
                  {children}
                </h4>
              );
            },
            p: ({ node, ...props }) => <p {...props} />,
            ul: ({ node, ...props }) => <ul {...props} />,
            ol: ({ node, ...props }) => <ol {...props} />,
            li: ({ node, ...props }) => <li {...props} />,
            a: ({ node, ...props }) => {
              const isExternal = props.href?.startsWith('http');
              return (
                <a
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  {...props}
                >
                  {props.children}
                  {isExternal && <ExternalLink className="inline ml-1" size={12} />}
                </a>
              );
            },
            blockquote: ({ node, ...props }) => (
              <blockquote {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="table-container">
                <table {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => <thead {...props} />,
            th: ({ node, ...props }) => <th {...props} />,
            td: ({ node, ...props }) => <td {...props} />,
            img: ({ node, src, ...props }) => (
              <img
                loading="lazy"
                src={src}
                alt={props.alt || ""}
                {...props}
              />
            ),
            hr: ({ node, ...props }) => <hr {...props} />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
```

### File: `./src/components/ScrollToTop.js`

```javascript
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 z-40"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
```

### File: `./src/components/TopicList.js`

```javascript
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '@clerk/clerk-react';

const TopicList = ({ classId }) => {
  const [topics, setTopics] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchTopics = async () => {
      const token = await getToken({ template: 'supabase' });
      const { data, error } = await supabase
        .from('topics')
        .select('*')
        .eq('class_id', classId)
        .setAuth(token);
      if (error) console.error(error);
      else setTopics(data);
    };
    fetchTopics();
  }, [classId, getToken]);

  return (
    <div>
      <h3>Topics</h3>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
```

### File: `./src/components/ErrorBoundary.js`

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console (in production, you'd log to a service)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center p-8">
            <div className="mb-4">
              <span className="text-6xl">😵</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-400 mb-6">
              We're sorry, but something unexpected happened. 
              Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-gray-400 hover:text-white">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-gray-300 overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### File: `./src/components/PageLoader.js`

```javascript
import React from 'react';

const PageLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
        <p className="text-gray-300 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default PageLoader;
```

### File: `./src/components/AddExamForm.js`

```javascript
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '@clerk/clerk-react';

const AddExamForm = ({ classId, onExamAdded }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { getToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken({ template: 'supabase' });
    const { data, error } = await supabase
      .from('exams')
      .insert([
        { name, date, class_id: classId }
      ])
      .setAuth(token);
    if (error) {
      setErrorMessage('Error adding exam: ' + error.message);
      setTimeout(() => setErrorMessage(''), 5000); // Clear after 5 seconds
    } else {
      setName('');
      setDate('');
      setSuccessMessage('Exam added successfully!');
      setTimeout(() => setSuccessMessage(''), 5000); // Clear after 5 seconds
      if (onExamAdded) onExamAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Exam</h3>
      <input
        type="text"
        placeholder="Exam Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Exam</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default AddExamForm;
```

### File: `./src/components/DaylightSwitch.js`

```javascript
import React from 'react';

export default function DaylightSwitch({ isDay, onToggle }) {
  return (
    <button
      aria-label={isDay ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`daylight-switch${isDay ? ' daylight' : ' night'}`}
      onClick={onToggle}
      style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.3rem 0.7rem',
        fontFamily: "'Poppins', 'Inter', sans-serif",
        fontWeight: 500,
      }}
    >
      <span style={{fontSize: '1.4em', lineHeight: 1}}>{isDay ? '☀️' : '🌙'}</span>
      <span style={{fontSize: '1em'}}>{isDay ? 'Day' : 'Night'}</span>
    </button>
  );
}
```

### File: `./src/components/ChemKeyboard.jsx`

```jsx
import React from "react";
import "../styles/ChemKeyboard.css";

// A basic ChemKey-inspired layout: symbols, subscript, superscript, arrows, charges, etc.
const GROUPS = [
  {
    label: "Common",
    keys: ["H", "C", "N", "O", "S", "P", "Cl", "Na", "K", "Ca", "Fe", "Cu", "Zn", "Ag", "Au", "Pb", "Hg"]
  },
  {
    label: "Numbers",
    keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  },
  {
    label: "Sub/Superscript",
    keys: ["₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₀", "⁺", "⁻", "⁰", "¹", "²", "³"]
  },
  {
    label: "Arrows",
    keys: ["→", "⇌", "⇄", "←"]
  },
  {
    label: "Other",
    keys: ["Δ", "·", "→", "⇌", "aq", "s", "l", "g", "()"]
  }
];

const ChemKeyboard = ({ onInsert }) => {
  return (
    <div className="chem-keyboard-root">
      {GROUPS.map(group => (
        <div key={group.label} className="chem-keyboard-group">
          <div className="chem-keyboard-group-label">{group.label}</div>
          <div className="chem-keyboard-row">
            {group.keys.map(key => (
              <button
                key={key}
                className="chem-keyboard-btn"
                type="button"
                onClick={() => onInsert(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChemKeyboard;
```

### File: `./src/components/AddFeedbackForm.js`

```javascript
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth, useUser } from '@clerk/clerk-react';

const AddFeedbackForm = ({ onFeedbackAdded }) => {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { getToken } = useAuth();
  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    const token = await getToken({ template: 'supabase' });
    const { data, error } = await supabase
      .from('feedback')
      .insert([
        { message, user_id: user.id }
      ])
      .setAuth(token);
    if (error) {
      setErrorMessage('Error submitting feedback: ' + error.message);
      setTimeout(() => setErrorMessage(''), 5000); // Clear after 5 seconds
    } else {
      setMessage('');
      setSuccessMessage('Thank you for your feedback!');
      setTimeout(() => setSuccessMessage(''), 5000); // Clear after 5 seconds
      if (onFeedbackAdded) onFeedbackAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Feedback</h3>
      <textarea
        placeholder="Your feedback"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit">Submit Feedback</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default AddFeedbackForm;
```

### File: `./src/components/ExamList.js`

```javascript
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '@clerk/clerk-react';

const ExamList = ({ classId }) => {
  const [exams, setExams] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchExams = async () => {
      const token = await getToken({ template: 'supabase' });
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('class_id', classId)
        .setAuth(token);
      if (error) console.error(error);
      else setExams(data);
    };
    fetchExams();
  }, [classId, getToken]);

  return (
    <div>
      <h4>Exams</h4>
      <ul>
        {exams.map(exam => (
          <li key={exam.id}>{exam.name} - {exam.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;
```

### File: `./src/components/SyncUserToSupabase.js`

```javascript
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function SyncUserToSupabase() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      supabase.from('users').upsert([
        {
          id: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress || '',
        }
      ]);
    }
  }, [user]);

  return null;
}
```

### File: `./src/components/Snackbar.tsx`

```tsx
import React, { useEffect } from 'react';

interface SnackbarProps {
  message: string;
  open: boolean;
  onClose: () => void;
  duration?: number;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, open, onClose, duration = 2500 }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  return (
    <div
      className={`snackbar-root${open ? ' snackbar-show' : ''}`}
      role="status"
      aria-live="polite"
      tabIndex={0}
    >
      {message}
    </div>
  );
};

export default Snackbar;
```

### File: `./src/components/SimpleNavbar.js`

```javascript
import React from 'react';
import './SimpleNavbar.css';
import 'remixicon/fonts/remixicon.css';

const SimpleNavbar = () => {
  return (
    <nav className="navbar-simple">
      <a href="#" className="logo-simple">
        <i className="ri-atom-line"></i>
        POP
      </a>
      <div className="nav-links-simple">
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Classes</a>
        <a href="#">Learning Path</a>
        <a href="#">Tools</a>
      </div>
      <a href="#" className="sign-in-simple">Sign In</a>
    </nav>
  );
};

export default SimpleNavbar;
```

### File: `./src/components/MarkdownRenderer.css`

```css
/* MarkdownRenderer Styles */
.markdown-renderer {
  color: var(--text-dark);
  font-size: 1rem;
  line-height: 1.7;
}

/* Loading and Error States */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

.loading-icon {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: var(--primary-light);
  font-size: 1rem;
}

.error-container {
  padding: 1.5rem;
  background-color: #fee2e2;
  border: 1px solid #fca5a5;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.error-title {
  color: #dc2626;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.error-message {
  color: #b91c1c;
}

/* Table of Contents */
.toc-container {
  background-color: rgba(74, 20, 140, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(74, 20, 140, 0.1);
  margin-bottom: 2rem;
  overflow: hidden;
}

.toc-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  background-color: rgba(74, 20, 140, 0.08);
  transition: var(--transition);
}

.toc-header:hover {
  background-color: rgba(74, 20, 140, 0.12);
}

.toc-icon {
  color: var(--primary);
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.toc-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0;
}

.toc-list {
  list-style: none;
  padding: 0.75rem 1rem;
  margin: 0;
}

.toc-item {
  margin-bottom: 0.5rem;
}

.toc-item.level-1 {
  font-weight: 500;
}

.toc-item.level-2 {
  padding-left: 1.5rem;
  font-size: 0.95rem;
}

.toc-link {
  display: block;
  padding: 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  border: none;
  background: none;
  text-align: left;
  width: 100%;
  border-radius: 0.25rem;
  transition: var(--transition);
  cursor: pointer;
}

.toc-link:hover {
  background-color: rgba(74, 20, 140, 0.08);
  color: var(--primary);
}

/* Markdown Content */
.markdown-content h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  color: var(--primary);
}

.markdown-content h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(74, 20, 140, 0.2);
  color: var(--primary);
}

.markdown-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  color: var(--primary-light);
}

.markdown-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.25rem 0 0.75rem;
  color: var(--primary-light);
}

.markdown-content p {
  margin: 1rem 0;
  color: var(--text-dark);
}

.markdown-content a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: var(--transition);
}

.markdown-content a:hover {
  color: var(--primary-light);
}

.markdown-content ul,
.markdown-content ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: var(--text-dark);
}

.markdown-content ul {
  list-style-type: disc;
}

.markdown-content ol {
  list-style-type: decimal;
}

.markdown-content li {
  margin-bottom: 0.5rem;
}

.markdown-content blockquote {
  margin: 1.5rem 0;
  padding: 0.75rem 1.25rem;
  border-left: 4px solid var(--primary-light);
  background-color: rgba(74, 20, 140, 0.05);
  color: var(--text-dark);
  font-style: italic;
}

.markdown-content code {
  font-family: monospace;
  background-color: rgba(74, 20, 140, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
  color: var(--primary);
}

.markdown-content pre {
  margin: 1.5rem 0;
  padding: 0;
  background-color: #2d2d2d;
  border-radius: 5px;
  overflow-x: auto;
}

.markdown-content pre code {
  background-color: transparent;
  padding: 0;
  color: #f8f8f2;
  display: block;
  padding: 1rem;
}

.markdown-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.5rem auto;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Tables */
.table-container {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
}

.markdown-content th,
.markdown-content td {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(74, 20, 140, 0.2);
  text-align: left;
}

.markdown-content th {
  background-color: rgba(74, 20, 140, 0.1);
  font-weight: 600;
  color: var(--primary);
}

.markdown-content tr:nth-child(even) {
  background-color: rgba(74, 20, 140, 0.02);
}

/* Horizontal Rule */
.markdown-content hr {
  margin: 2rem 0;
  border: 0;
  height: 1px;
  background-color: rgba(74, 20, 140, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .markdown-content h1 {
    font-size: 1.75rem;
  }
  
  .markdown-content h2 {
    font-size: 1.5rem;
  }
  
  .markdown-content h3 {
    font-size: 1.25rem;
  }
  
  .markdown-content h4 {
    font-size: 1.1rem;
  }
  
  .toc-container {
    margin-bottom: 1.5rem;
  }
  
  .toc-item.level-2 {
    padding-left: 1rem;
  }
}
```

### File: `./src/components/ResourceList.js`

```javascript
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '@clerk/clerk-react';

const ResourceList = ({ topicId }) => {
  const [resources, setResources] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchResources = async () => {
      const token = await getToken({ template: 'supabase' });
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('topic_id', topicId)
        .setAuth(token);
      if (error) console.error(error);
      else setResources(data);
    };
    fetchResources();
  }, [topicId, getToken]);

  return (
    <div>
      <h4>Resources</h4>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
```

### File: `./src/components/ui/progress.tsx`

```tsx
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
```

### File: `./src/components/ui/404-demo.tsx`

```tsx
import NotFoundPage from "./404-page-not-found"

export function PageNotFoundDemo() {
  return (
    <div className="w-full">
      <NotFoundPage />
    </div>
  )
}
```

### File: `./src/components/ui/404-page-not-found.tsx`

```tsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      } 
    }
  };
  
  // Styles
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: 'var(--dark)',
      color: 'white',
      fontFamily: 'Poppins, sans-serif',
      overflow: 'hidden',
      position: 'relative' as const
    },
    background: {
      position: 'absolute' as const,
      inset: 0,
      overflow: 'hidden' as const,
      opacity: 0.2,
      pointerEvents: 'none' as const
    },
    gradientTop: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '50%',
      background: 'linear-gradient(to bottom, var(--primary), transparent)'
    },
    gradientBottom: {
      position: 'absolute' as const,
      bottom: 0,
      right: 0,
      width: '50%',
      height: '50%',
      background: 'linear-gradient(to top, var(--primary-light), transparent)',
      borderRadius: '50%',
      transform: 'translate(50%, 50%)'
    },
    main: {
      position: 'relative' as const,
      zIndex: 10,
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '4rem 1rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      textAlign: 'center' as const,
      maxWidth: '42rem',
      margin: '0 auto',
      width: '100%'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '6rem',
      height: '6rem',
      borderRadius: '1rem',
      backgroundColor: 'var(--dark-surface)',
      border: '1px solid rgba(74, 20, 140, 0.2)',
      margin: '0 auto 2rem'
    },
    badgeText: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, var(--accent), var(--primary-light))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, white, var(--accent))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    description: {
      fontSize: '1.125rem',
      color: '#9ca3af',
      marginBottom: '2rem',
      maxWidth: '28rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.6
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '2rem'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: 500,
      cursor: 'pointer',
      textDecoration: 'none',
      border: 'none',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    primaryButton: {
      backgroundColor: 'var(--primary)',
      color: 'white'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      border: '1px solid rgba(74, 20, 140, 0.3)',
      color: 'var(--accent)'
    },
    decorativeElement: {
      position: 'absolute',
      bottom: '-5rem',
      right: '-5rem',
      width: '16rem',
      height: '16rem',
      borderRadius: '50%',
      backgroundColor: 'rgba(74, 20, 140, 0.1)',
      filter: 'blur(48px)'
    }
  };
  
  return (
    <div style={styles.page}>
      {/* Background gradient elements */}
      <div style={styles.background}>
        <div style={styles.gradientTop}></div>
        <div style={styles.gradientBottom}></div>
      </div>

      <main style={styles.main}>
        <motion.div 
          style={styles.content}
          initial="hidden"
          animate="show"
          variants={container}
        >
          {/* 404 Badge */}
          <motion.div 
            style={styles.badge}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20
              }
            }}
          >
            <span style={styles.badgeText}>
              404
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            style={styles.heading}
            variants={item}
          >
            Page Not Found
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            style={styles.description}
            variants={item}
          >
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </motion.p>
          
          {/* Action buttons */}
          <motion.div 
            style={styles.buttonGroup}
            variants={item}
          >
            <button
              onClick={() => navigate(-1)}
              style={{
                ...styles.button,
                ...styles.primaryButton,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              style={{
                ...styles.button,
                ...styles.outlineButton,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Home size={16} />
              Return Home
            </button>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            style={{
              position: 'absolute',
              bottom: '-5rem',
              right: '-5rem',
              width: '16rem',
              height: '16rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(74, 20, 140, 0.1)',
              filter: 'blur(48px)'
            } as React.CSSProperties}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 1,
                ease: "easeOut"
              }
            }}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default NotFoundPage;
```

### File: `./src/components/ui/button.tsx`

```tsx
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### File: `./src/components/ui/input.tsx`

```tsx
import * as React from "react"

import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

### File: `./src/components/Home/TestimonialCard.js`

```javascript
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 shadow-lg flex flex-col testimonial-card">
      <div className="flex text-yellow-400 mb-4 testimonial-rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5" />
        ))}
      </div>
      <p className="text-gray-300 text-lg italic mb-6 testimonial-text">"{testimonial.text}"</p>
      <div className="flex items-center testimonial-author">
        <div className="testimonial-avatar" style={{ background: '#7B2FF2' }}>
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-bold text-white">{testimonial.name}</div>
          <div className="text-gray-400 text-sm">{testimonial.subject}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
```

### File: `./src/components/Home/AboutSection.js`

```javascript
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">About POP Studying</h2>
          <p className="text-lg text-gray-400">Empowering students to achieve academic excellence</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                POP Studying was founded with a simple mission: to provide Bangkok students with 
                the highest quality tutoring support for IGCSE and A-Level examinations. We believe 
                that every student deserves access to excellent education that helps them reach 
                their full potential.
              </p>
              <p className="text-gray-300">
                Our peer-to-peer learning approach connects students with top-performing tutors 
                who have recently excelled in the same examinations, providing relevant insights 
                and proven strategies for success.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span className="text-gray-300">Excellence in education through proven methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span className="text-gray-300">Personalized learning paths for every student</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span className="text-gray-300">Community-driven approach to learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span className="text-gray-300">Results-focused teaching strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
```

### File: `./src/components/Home/FeatureCard.js`

```javascript
import React, { useState } from 'react';

const FeatureCard = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 shadow-lg text-center group cursor-pointer transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      tabIndex="0"
      aria-label={`Feature: ${feature.title}`}
    >
      <div 
        className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl text-white transition-all duration-300 ${isHovered ? 'scale-110 shadow-lg' : ''}`}
        style={{ 
          background: feature.color,
          boxShadow: isHovered ? `0 0 20px ${feature.color}40` : 'none'
        }}
      >
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-200">{feature.title}</h3>
      <p className={`text-gray-300 transition-all duration-300 ${isHovered ? 'text-gray-200' : ''}`}>{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
```

### File: `./src/components/Home/StatCard.js`

```javascript
import React, { useState } from 'react';
import AnimatedNumber from './AnimatedNumber';

const StatCard = ({ stat }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Extract number and suffix from the stat
  const match = stat.number.match(/(\d+)(.*)/);
  const number = match ? match[1] : '0';
  const suffix = match ? match[2] : '';
  
  return (
    <div 
      className="card bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg stat-card cursor-pointer transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      tabIndex="0"
      aria-label={`Stat: ${stat.label} - ${stat.number}`}
    >
      <div 
        className={`text-5xl font-extrabold mb-2 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
        style={{ 
          color: stat.color,
          textShadow: isHovered ? `0 0 20px ${stat.color}40` : 'none'
        }}
      >
        <AnimatedNumber value={number} suffix={suffix} />
      </div>
      <div className="text-lg text-gray-300 uppercase tracking-wider stat-label">{stat.label}</div>
    </div>
  );
};

export default StatCard;
```

### File: `./src/components/Home/ContactSection.js`

```javascript
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-400">Have questions? We're here to help</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Email</h4>
                <p className="text-gray-300">hello@popstudying.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Phone</h4>
                <p className="text-gray-300">+66 2 123 4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Location</h4>
                <p className="text-gray-300">Bangkok, Thailand</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
```

### File: `./src/components/Home/LazyImage.js`

```javascript
import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  
  // Low-quality placeholder as data URL
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23181828' width='600' height='400'/%3E%3Ctext fill='%237B2FF2' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EPOP Studying Platform%3C/text%3E%3C/svg%3E";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-800 rounded-lg animate-pulse"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default LazyImage;
```

### File: `./src/components/Home/SectionHeader.js`

```javascript
import React from 'react';

const SectionHeader = ({ title, subtitle, badge, id }) => {
  return (
    <div className="text-center mb-12">
      {badge && (
        <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-md">
          <span className="mr-2">{badge.icon}</span> {badge.text}
        </div>
      )}
      <h2 id={id} className="text-4xl font-extrabold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
```

### File: `./src/components/Home/FeatureCard.module.css`

```css
.featureCard {
  @apply bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 shadow-lg text-center group;
}

.icon {
  @apply w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform duration-300;
}

.title {
  @apply text-xl font-bold mb-3 text-white;
}

.description {
  @apply text-gray-300;
}
```

### File: `./src/components/Home/Card.js`

```javascript
import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`card bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
```

### File: `./src/components/Home/AnimatedNumber.js`

```javascript
import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const nodeRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const endValue = parseInt(value);
          const duration = 2000;
          const startTime = Date.now();
          
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const currentValue = Math.floor(progress * endValue);
            setDisplayValue(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={nodeRef}>
      {displayValue}{suffix}
    </span>
  );
};

export default AnimatedNumber;
```

### File: `./src/components/LearningPath/TopicView.js`

```javascript
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTopicById } from '../../data/mathCurriculum';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import './TopicView.css';

const TopicView = () => {
  const { classId, grade, topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const navigate = useNavigate();

  // Get the class name based on classId (you can fetch this from your data)
  const getClassName = (id) => {
    const classes = {
      '1': 'Mathematics',
      '2': 'Physics',
      '3': 'Chemistry',
      '4': 'Biology'
    };
    return classes[id] || `Class ${id}`;
  };

  // Load topic data
  useEffect(() => {
    const topicData = getTopicById(parseInt(grade), topicId);
    if (topicData) {
      setTopic(topicData);
      if (topicData.subtopics && topicData.subtopics.length > 0) {
        setActiveSubtopic(topicData.subtopics[0].id);
      }
    } else {
      // Redirect if topic not found
      navigate(`/class/${classId}`);
    }
  }, [classId, grade, topicId, navigate]);

  // Load user progress
  useEffect(() => {
    const savedProgress = localStorage.getItem('mathLearningProgress') || '{}';
    setUserProgress(JSON.parse(savedProgress));
  }, []);

  const handleSubtopicClick = (subtopicId) => {
    setActiveSubtopic(subtopicId);
    // Smooth scroll to content
    document.getElementById('subtopic-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!topic) return <div className="loading">Loading topic...</div>;

  const progressKey = `class-${classId}-grade-${grade}-${topicId}`;
  const isCompleted = userProgress[progressKey];

  const handleBack = () => {
    navigate(`/class/${classId}`);
  };

  const currentSubtopic = topic.subtopics?.find(st => st.id === activeSubtopic);

  return (
    <div className="topic-view">
      <button onClick={handleBack} className="back-button">
        <ArrowLeft /> Back to {getClassName(classId)}
      </button>

      <div className="topic-header">
        <div className="topic-meta">
          <span className="grade-badge">Grade {grade}</span>
          {isCompleted && (
            <span className="completed-badge">
              <CheckCircle /> Completed
            </span>
          )}
        </div>
        <h1>{topic.title}</h1>
        <p className="topic-description">{topic.description}</p>
      </div>

      <div className="topic-content-container">
        {topic.subtopics && topic.subtopics.length > 0 && (
          <div className="subtopics-sidebar">
            <h3>Subtopics</h3>
            <div className="subtopics-list">
              {topic.subtopics.map((subtopic) => (
                <button
                  key={subtopic.id}
                  className={`subtopic-item ${activeSubtopic === subtopic.id ? 'active' : ''}`}
                  onClick={() => handleSubtopicClick(subtopic.id)}
                >
                  {subtopic.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="topic-main-content">
          {currentSubtopic ? (
            <div id="subtopic-content" className="subtopic-content">
              <h2>{currentSubtopic.title}</h2>
              {/* Content will be loaded here */}
              <div className="content-placeholder">
                <p>Content for {currentSubtopic.title} will be displayed here.</p>
                <p>This will include explanations, examples, and practice problems.</p>
              </div>
            </div>
          ) : (
            <div className="no-subtopics">
              <p>This topic doesn't have any subtopics yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicView;
```

### File: `./src/components/LearningPath/LearningPath.js`

```javascript
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTopicsByGrade, getLevels, getGradeRange } from '../../data/mathCurriculum';
import { useProgressTracking } from '../../hooks/useProgressTracking';
import './LearningPath.css';

const LearningPath = () => {
  const [currentLevel, setCurrentLevel] = useState('foundation');
  const navigate = useNavigate();
  const { classId } = useParams();
  const { getGradeProgress, isTopicCompleted } = useProgressTracking();
  
  const levels = getLevels();
  const { start, end } = getGradeRange(currentLevel);
  const grades = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const handleTopicClick = (grade, topicId) => {
    navigate(`/class/${classId}/grade/${grade}/topic/${topicId}`);
  };

  // Get the first incomplete topic for the current level
  const getFirstIncompleteTopic = (grade) => {
    const topics = getTopicsByGrade(grade);
    if (!topics) return null;
    
    return topics.find(topic => !isTopicCompleted(grade, topic.id)) || topics[0];
  };

  // Handle continue learning button click
  const handleContinueLearning = (grade) => {
    const topic = getFirstIncompleteTopic(grade);
    if (topic) {
      navigate(`/class/${classId}/grade/${grade}/topic/${topic.id}`);
    }
  };

  return (
    <div className="learning-path-container">
      <div className="learning-path-header">
        <h1>Mathematics Learning Path</h1>
        <p className="path-description">
          Follow this structured path to master mathematics from the basics to advanced topics.
          Progress through each level at your own pace.
        </p>
      </div>

      <div className="level-tabs">
        {Object.entries(levels).map(([key, { name, color }]) => (
          <button
            key={key}
            className={`level-tab ${currentLevel === key ? 'active' : ''}`}
            onClick={() => setCurrentLevel(key)}
            style={currentLevel === key ? {
              color: color,
              borderBottomColor: color
            } : {}}
          >
            <span className="level-icon" style={{ background: color }}></span>
            {name}
          </button>
        ))}
      </div>

      <div className="grades-container">
        <h2>{levels[currentLevel].name} Level</h2>
        <p className="level-description">
          {levels[currentLevel].description}
        </p>
        
        <div className="grades-grid">
          {grades.map((grade) => {
            const topics = getTopicsByGrade(grade);
            if (!topics || topics.length === 0) return null;
            
            const progress = getGradeProgress(grade, topics.length);
            const isInProgress = progress > 0 && progress < 100;
            const isCompleted = progress === 100;
            
            return (
              <div key={grade} className="grade-card">
                <div className="grade-header">
                  <div className="grade-title-row">
                    <h3>Grade {grade}</h3>
                    {(isInProgress || isCompleted) && (
                      <button 
                        className={`continue-button ${isCompleted ? 'completed' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContinueLearning(grade);
                        }}
                      >
                        {isCompleted ? 'Review' : 'Continue'}
                      </button>
                    )}
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${progress}%`,
                        background: progress === 100 ? '#4CAF50' : ''
                      }}
                    />
                  </div>
                  <div className="progress-info">
                    <span>{progress}% Complete</span>
                    <span>{topics.filter(t => isTopicCompleted(grade, t.id)).length}/{topics.length} topics</span>
                  </div>
                </div>
                
                <div className="topics-list">
                  {topics.map((topic) => {
                    const isCompleted = isTopicCompleted(grade, topic.id);
                    return (
                      <div 
                        key={topic.id}
                        className={`topic-item ${isCompleted ? 'completed' : ''}`}
                        onClick={() => handleTopicClick(grade, topic.id)}
                      >
                        <div className="topic-icon">
                          {isCompleted ? '✓' : (topic.icon || '📚')}
                        </div>
                        <div className="topic-info">
                          <h4>{topic.title}</h4>
                          <p>{topic.description}</p>
                          {topic.subtopics && topic.subtopics.length > 0 && (
                            <div className="subtopics">
                              {topic.subtopics.slice(0, 3).map((subtopic, i) => (
                                <span key={i} className="subtopic-tag">
                                  {subtopic.title}
                                </span>
                              ))}
                              {topic.subtopics.length > 3 && (
                                <span className="subtopic-tag">+{topic.subtopics.length - 3} more</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="topic-arrow">
                          {isCompleted ? '✓' : '→'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
```

### File: `./src/components/LearningPath/TopicView.css`

```css
.topic-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  color: var(--text-light);
}

.topic-header {
  margin-bottom: 2rem;
  position: relative;
}

.back-button {
  background: none;
  border: none;
  color: var(--accent);
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.5rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.back-button:hover {
  opacity: 0.8;
}

.grade-label {
  display: inline-block;
  background: rgba(123, 47, 242, 0.2);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.topic-header h1 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: var(--text-light);
}

.topic-description {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.topic-actions {
  margin-top: 1.5rem;
}

.complete-button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.complete-button:hover {
  background: #6a1ad2;
  transform: translateY(-2px);
}

.complete-button.completed {
  background: #4CAF50;
}

.complete-button.completed:hover {
  background: #3d8b40;
}

/* Topic Content Layout */
.topic-content-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

/* Subtopic Sidebar */
.subtopics-sidebar {
  width: 280px;
  flex-shrink: 0;
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  height: fit-content;
  border: 1px solid var(--border-color);
}

.subtopics-sidebar h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-light);
}

.subtopics-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.subtopic-item {
  background: none;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  text-align: left;
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.95rem;
}

.subtopic-item:hover {
  border-color: var(--primary);
  color: var(--text-light);
}

.subtopic-item.active {
  background: rgba(123, 47, 242, 0.1);
  border-color: var(--primary);
  color: var(--text-light);
  font-weight: 500;
}

/* Main Content */
.topic-main-content {
  flex: 1;
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 2rem;
  border: 1px solid var(--border-color);
}

.subtopic-content h2 {
  margin-top: 0;
  color: var(--text-light);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
}

.content-placeholder {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: var(--text-muted);
  border: 1px dashed var(--border-color);
}

.content-placeholder p {
  margin: 0 0 1rem 0;
}

.no-subtopics {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
}

/* Responsive Design */
@media (max-width: 992px) {
  .topic-content-container {
    flex-direction: column;
  }
  
  .subtopics-sidebar {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .topic-view {
    padding: 1rem;
  }
  
  .topic-header h1 {
    font-size: 1.75rem;
  }
  
  .topic-main-content,
  .subtopics-sidebar {
    padding: 1.25rem;
  }
}
```

### File: `./src/components/LearningPath/LearningPath.css`

```css
:root {
  /* Base Colors */
  --primary: #7B2FF2;
  --primary-light: #9a5cf5;
  --primary-dark: #5a1cc9;
  --secondary: #F357A8;
  --accent: #00C6FB;
  --background-dark: #0B0B14;
  --surface: #181828;
  --surface-light: #252538;
  --surface-lighter: #2f2f4a;
  --text-light: #fff;
  --text-muted: #D1D5DB;
  --text-more-muted: #8a8a9c;
  --border-color: rgba(255, 255, 255, 0.1);
  --border-color-light: rgba(255, 255, 255, 0.05);
  --border-radius: 12px;
  --border-radius-sm: 8px;
  --transition: all 0.3s ease;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.15);
  
  /* Level Colors */
  --foundation: #7B2FF2;
  --intermediate: #00C6FB;
  --advanced: #F357A8;
  --success: #4CAF50;
  --warning: #FFC107;
  --danger: #F44336;
}

.learning-path-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  color: var(--text-light);
}

.learning-path-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.learning-path-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.path-description {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Level Tabs */
.level-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  padding: 0.5rem;
  background: var(--surface-light);
  border-radius: 12px;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.level-tab {
  background: none;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: var(--transition);
  position: relative;
  border: 1px solid transparent;
}

.level-tab:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-light);
}

.level-tab.active {
  background: var(--surface);
  color: var(--text-light);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  border-color: var(--border-color);
}

.level-tab .level-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: block;
  transition: var(--transition);
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-right: 8px;
}

.level-tab.active .level-icon {
  transform: scale(1.1);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

.level-tab:hover .level-icon {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.level-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

/* Grades Grid */
.grades-container {
  margin-top: 1.5rem;
}

.grades-container h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.level-description {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.grades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.grade-card {
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 1.75rem;
  transition: var(--transition);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.grade-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  opacity: 0.8;
  transition: var(--transition);
}

.grade-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-color-light);
}

.grade-card:hover::before {
  opacity: 1;
  height: 5px;
}

.grade-card.completed::before {
  background: var(--success);
}

.grade-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-color);
}

.grade-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.grade-header h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.continue-button {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 2px 8px rgba(123, 47, 242, 0.2);
}

.continue-button:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(123, 47, 242, 0.3);
}

.continue-button.completed {
  background: var(--success);
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
}

.continue-button.completed:hover {
  background: #3d8b40;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.progress-bar {
  height: 6px;
  background: var(--surface-light);
  border-radius: 3px;
  margin-bottom: 0.6rem;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 3px;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shimmer 2s infinite linear;
  transform: translateX(-100%);
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.progress-info span:first-child {
  font-weight: 500;
  color: var(--text-light);
}

.progress-info span:last-child {
  opacity: 0.8;
}

/* Topics List */
.topics-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.topic-item {
  background: var(--surface-light);
  border-radius: var(--border-radius-sm);
  padding: 1.1rem 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.topic-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary);
  opacity: 0;
  transition: var(--transition);
}

.topic-item:hover {
  background: var(--surface-lighter);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: var(--border-color-light);
}

.topic-item:hover::before {
  opacity: 1;
}

.topic-item.completed {
  background: rgba(76, 175, 80, 0.05);
  border-left-color: var(--success);
}

.topic-item.completed .topic-icon {
  background: rgba(76, 175, 80, 0.1);
  color: var(--success);
}

.topic-item.completed .topic-arrow {
  color: var(--success);
}

.topic-icon {
  background: rgba(123, 47, 242, 0.1);
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
  font-size: 1.2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.topic-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
  z-index: -1;
  opacity: 0.5;
  transition: var(--transition);
}

.topic-item:hover .topic-icon {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(123, 47, 242, 0.15);
}

.topic-item:hover .topic-icon::before {
  opacity: 0.8;
}

.topic-info {
  flex: 1;
  min-width: 0; /* Prevent flex item from overflowing */
}

.topic-info h4 {
  margin: 0 0 0.4rem 0;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-light);
  transition: var(--transition);
}

.topic-item:hover .topic-info h4 {
  color: var(--primary);
}

.topic-info p {
  margin: 0 0 0.7rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subtopics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

.subtopic-tag {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  color: var(--text-more-muted);
  border: 1px solid var(--border-color);
  transition: var(--transition);
  line-height: 1.2;
}

.topic-item:hover .subtopic-tag {
  background: rgba(123, 47, 242, 0.1);
  border-color: rgba(123, 47, 242, 0.2);
  color: var(--text-muted);
}

.subtopic-tag::before {
  content: '•';
  color: var(--primary);
  margin-right: 0.3rem;
  font-size: 1.2em;
  line-height: 1;
}

/* For the "+X more" tag */
.subtopic-tag:last-child::before {
  content: '+';
  font-weight: bold;
}

.topic-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--text-muted);
  opacity: 0;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  flex-shrink: 0;
  margin-left: 0.5rem;
  font-size: 0.9em;
}

.topic-item:hover .topic-arrow {
  opacity: 1;
  transform: translateX(0) scale(1.1);
  background: var(--primary);
  color: white;
  box-shadow: 0 2px 8px rgba(123, 47, 242, 0.3);
}

.topic-item.completed .topic-arrow {
  opacity: 1;
  background: var(--success);
  color: white;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .grades-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .learning-path-container {
    padding: 1rem;
  }
  
  .learning-path-header h1 {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }
  
  .path-description {
    font-size: 1rem;
  }
  
  .level-tabs {
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .level-tab {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .level-icon {
    width: 20px;
    height: 20px;
    font-size: 0.8em;
  }
  
  .grades-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .grade-card {
    padding: 1.25rem;
  }
  
  .grade-header h3 {
    font-size: 1.25rem;
  }
  
  .continue-button {
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
  }
  
  .topic-item {
    padding: 1rem;
  }
  
  .topic-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .topic-info h4 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  
  .topic-info p {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  
  .subtopic-tag {
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
  }
  
  .topic-arrow {
    width: 22px;
    height: 22px;
    font-size: 0.8em;
  }
}

/* Small mobile devices */
@media (max-width: 400px) {
  .learning-path-header h1 {
    font-size: 1.75rem;
  }
  
  .path-description {
    font-size: 0.95rem;
  }
  
  .level-tab {
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
  }
  
  .topic-item {
    padding: 0.9rem;
    gap: 0.75rem;
  }
  
  .topic-icon {
    width: 32px;
    height: 32px;
  }
  
  .topic-info h4 {
    font-size: 0.95rem;
  }
  
  .topic-info p {
    font-size: 0.8rem;
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }
  
  .subtopics {
    display: none; /* Hide subtopics on very small screens */
  }
}
```

### File: `./src/components/PageTitle/PageTitle.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

/*
  PageTitle.css - Redesigned with a "glass card" aesthetic 
  inspired by the MathDashboard to match the website's core style.
*/

.page-title-container {
  /* Positioning context for the glass effect */
  position: relative;
  margin: 2rem;
  padding: 2.5rem 3rem;
  text-align: left;
  overflow: hidden;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* Isolate the glass effect into a pseudo-element to prevent rendering conflicts */
.page-title-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 24, 40, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: -1;
}

.page-title-heading {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  padding: 0;

  /* A vibrant, solid color for guaranteed visibility */
  color: #8A42FF;
  text-shadow: 0 0 15px rgba(26, 143, 255, 0.2);
}

/* Remove the old underline style */
.page-title-heading::after {
  display: none;
}

.page-title-subheading {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 0;
  line-height: 1.6;
  max-width: 600px;
}
```

### File: `./src/components/PageTitle/PageTitle.js`

```javascript
import React from 'react';
import './PageTitle.css';

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="page-title-container">
      <h1 className="page-title-heading">{title}</h1>
      <p className="page-title-subheading">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
```

### File: `./src/components/Layout/FloatingNavbar.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingNavbar = () => {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-6">
            <div className="max-w-5xl mx-auto bg-[#1F2B3A]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/20">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://POPStudying.b-cdn.net/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2010_27_38%20PM%20Background%20Removed.png"
                        alt="POP Studying Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <span className="text-lg font-semibold text-slate-100 tracking-tight">POP Studying</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link to="/classes" className="hover:text-white transition-colors">Classes</Link>
                    <Link to="/flashcards" className="hover:text-white transition-colors">Flashcards</Link>
                    <Link to="/jamboard" className="hover:text-white transition-colors">Jamboard</Link>
                    <Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link to="/sign-in" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Sign in
                    </Link>
                    <Link
                        to="/sign-up"
                        className="px-5 py-2 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-white transition-colors shadow-lg shadow-white/5"
                    >
                        Join cohort
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default FloatingNavbar;
```

### File: `./src/components/Layout/Navbar.js`

```javascript
import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import PopLogo from '../../assets/images/pop-logo.svg';

const Navbar = () => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Close dropdown on touch outside (for iPad/tablet)
  useEffect(() => {
    const handleTouch = (e) => {
      if (toolsOpen && !e.target.closest('.navbar-tools-dropdown')) {
        setToolsOpen(false);
      }
    };
    document.addEventListener('touchstart', handleTouch);
    return () => document.removeEventListener('touchstart', handleTouch);
  }, [toolsOpen]);

  // Dropdown menu redesign state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  // Touchscreen detection
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const onTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', onTouch, { once: true });
    return () => window.removeEventListener('touchstart', onTouch);
  }, []);

  // Dropdown open/close handlers with hover intent for desktop
  let hoverTimeout = null;
  const openDropdown = () => {
    if (!isTouch) {
      clearTimeout(hoverTimeout);
      setDropdownOpen(true);
    }
  };
  const closeDropdown = () => {
    if (!isTouch) {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => setDropdownOpen(false), 180); // Delay to allow moving mouse into menu
    }
  };
  const cancelCloseDropdown = () => {
    if (!isTouch) {
      clearTimeout(hoverTimeout);
    }
  };
  const toggleDropdown = () => setDropdownOpen(v => !v);

  // Close dropdown on outside click/tap
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img 
              src={PopLogo} 
              alt="POP Studying Logo" 
              className="pop-logo"
            />
          </Link>
        </div>
        <div className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setMobileOpen(!mobileOpen); }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`navbar-center-links${mobileOpen ? ' navbar-center-links-mobile' : ''}`}
          style={{
            display: mobileOpen || window.innerWidth > 700 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '2.5rem',
            margin: '0 auto',
            flex: 1,
            justifyContent: 'center',
            flexDirection: mobileOpen ? 'column' : 'row',
            position: mobileOpen ? 'absolute' : 'static',
            top: mobileOpen ? '4.5rem' : 'auto',
            left: 0,
            right: 0,
            background: mobileOpen ? 'var(--surface, #181828)' : 'none',
            zIndex: mobileOpen ? 2000 : 'auto',
            borderRadius: mobileOpen ? '1rem' : 0,
            padding: mobileOpen ? '1.2rem 0' : 0,
            boxShadow: mobileOpen ? '0 8px 32px 0 #0003' : 'none',
          }}
        >
          <Link to="#features" className="navbar-link" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link to="#about" className="navbar-link" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/classes" className="navbar-link" onClick={() => setMobileOpen(false)}>Classes</Link>
          <div
            className="navbar-link navbar-tools-dropdown"
            style={{ position: 'relative' }}
            ref={dropdownRef}
          >
            <button
              className="navbar-tools-btn"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={e => {
                if (isTouch) {
                  toggleDropdown();
                }
              }}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: 0,
              }}
              type="button"
            >
              Tools
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 2 }}>
                <path d="M1 1.5L6 6L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="navbar-tools-menu"
                style={{
                  position: 'absolute',
                  top: '2.2rem',
                  left: 0,
                  background: 'var(--surface, #181828)',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 18px 0 #0002',
                  minWidth: '180px',
                  zIndex: 1001,
                  padding: '0.5rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                }}
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className="navbar-tools-item"
                  style={{
                    color: 'var(--primary, #7B2FF2)',
                    padding: '0.7rem 1.4rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderRadius: '0.7rem',
                    transition: 'background 0.18s',
                    fontSize: '1rem',
                    display: 'block',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setDropdownOpen(false); setMobileOpen(false); navigate('/flashcards');
                  }}
                  type="button"
                >
                  Flashcards
                </button>
                <button
                  className="navbar-tools-item"
                  style={{
                    color: 'var(--primary, #7B2FF2)',
                    padding: '0.7rem 1.4rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderRadius: '0.7rem',
                    transition: 'background 0.18s',
                    fontSize: '1rem',
                    display: 'block',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setDropdownOpen(false); setMobileOpen(false); navigate('/jamboard');
                  }}
                  type="button"
                >
                  Jamboard
                </button>
                {/* Add more tool links here */}
              </div>
            )}
          </div>
        </div>
        <div className="navbar-auth" style={{ marginLeft: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <SignedOut>
            <Link to="/sign-in" className="sign-in-btn" onClick={() => setMobileOpen(false)}>Sign In</Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

### File: `./src/components/Layout/NavbarDropdown.js`

```javascript
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavbarDropdown = ({ toolsDropdownOpen, toggleToolsDropdown, closeMobileMenu = null, isMobile = false }) => {
  const dropdownRef = useRef(null);

  const handleClick = () => {
    toggleToolsDropdown();
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  // Handle keyboard navigation and clicking outside
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && toolsDropdownOpen) {
        toggleToolsDropdown();
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && toolsDropdownOpen) {
        toggleToolsDropdown();
      }
    };

    if (toolsDropdownOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toolsDropdownOpen, toggleToolsDropdown]);

  const dropdownContent = (
    <div className={`${isMobile ? 'pl-4 space-y-2' : 'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20'}`}>
      <Link
        to="/flashcards"
        className={`${isMobile ? 'block text-gray-400 hover:text-white' : 'block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        onClick={closeMobileMenu}
      >
        Flashcards
      </Link>
      <Link
        to="/jamboard"
        className={`${isMobile ? 'block text-gray-400 hover:text-white' : 'block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        onClick={closeMobileMenu}
      >
        Jamboard
      </Link>
      <Link
        to="/math-dashboard"
        className={`${isMobile ? 'block text-gray-400 hover:text-white' : 'block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        onClick={closeMobileMenu}
      >
        Math Dashboard
      </Link>
    </div>
  );

  if (isMobile) {
    return (
      <div ref={dropdownRef}>
        <button
          className="w-full text-left text-gray-300 hover:text-white transition-colors duration-200 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
          onClick={handleClick}
          aria-label="Toggle tools menu"
          aria-expanded={toolsDropdownOpen}
        >
          Tools
          <ChevronDown className={`ml-2 text-xs transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {toolsDropdownOpen && dropdownContent}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
        onClick={toggleToolsDropdown}
        aria-label="Toggle tools menu"
        aria-expanded={toolsDropdownOpen}
      >
        Tools <ChevronDown className={`ml-1 text-xs transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      {toolsDropdownOpen && dropdownContent}
    </div>
  );
};

export default NavbarDropdown;
```

### File: `./src/components/Layout/ModernNavbar.js`

```javascript
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';

const ModernNavbar = () => {
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleToolsDropdown = () => {
    setToolsDropdownOpen(!toolsDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="https://POPStudying.b-cdn.net/BC336123-1465-4352-A169-E81E49CD6AD3-removebg-preview.png" 
              alt="POP Studying Logo" 
              className="h-10" // Tailwind class for height
              onError={(e) => {
                console.error('Logo image failed to load');
                // Fallback to a text logo if image fails
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#7B2FF2' }}>
              POP Studying
            </div>
          </Link>
        </div>
        
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#overview" className="text-gray-300 hover:text-white transition-colors duration-200">Overview</a>
          <a href="#offerings" className="text-gray-300 hover:text-white transition-colors duration-200">Offerings</a>
          <a href="#results" className="text-gray-300 hover:text-white transition-colors duration-200">Results</a>
          <a href="#about-pop-studying" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          <Link to="/class" className="text-gray-300 hover:text-white transition-colors duration-200">Classes</Link>
          <NavbarDropdown 
            toolsDropdownOpen={toolsDropdownOpen}
            toggleToolsDropdown={toggleToolsDropdown}
          />
        </div>
        
        {/* Right - Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/sign-in" className="text-gray-300 hover:text-white transition-colors duration-200">Sign in</Link>
          <Link to="/sign-up" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200">Get Started</Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 px-4 py-6 space-y-4" role="navigation" aria-label="Mobile navigation">
          <a href="#overview" className="block text-gray-300 hover:text-white transition-colors duration-200" onClick={closeMobileMenu}>
            Overview
          </a>
          <a href="#offerings" className="block text-gray-300 hover:text-white transition-colors duration-200" onClick={closeMobileMenu}>
            Offerings
          </a>
          <a href="#results" className="block text-gray-300 hover:text-white transition-colors duration-200" onClick={closeMobileMenu}>
            Results
          </a>
          <a href="#about-pop-studying" className="block text-gray-300 hover:text-white transition-colors duration-200" onClick={closeMobileMenu}>
            About
          </a>
          <Link to="/class" className="block text-gray-300 hover:text-white transition-colors duration-200" onClick={closeMobileMenu}>
            Classes
          </Link>
          <div className="border-t border-gray-800 pt-4 space-y-3">
            <NavbarDropdown 
              toolsDropdownOpen={toolsDropdownOpen}
              toggleToolsDropdown={toggleToolsDropdown}
              closeMobileMenu={closeMobileMenu}
              isMobile={true}
            />
            <div className="flex flex-col gap-3">
              <Link to="/sign-in" className="text-gray-300 hover:text-white transition-colors duration-200" onClick={closeMobileMenu}>
                Sign in
              </Link>
              <Link to="/sign-up" className="bg-purple-600 text-white px-4 py-2 rounded-md text-center hover:bg-purple-700 transition-colors duration-200" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;
```

### File: `./src/components/Layout/Footer.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B14] pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-[0.45em] uppercase text-teal-200/70">POP</span>
              <span className="text-xl font-semibold text-slate-100">Studying</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The student-led revision hub for ANS. Built by alumni, funded by community, free for everyone.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zm-4.43 2.163c-.826.04-1.273.198-1.574.315-.41.16-.705.35-.988.633-.283.283-.473.578-.633.988-.117.301-.275.748-.315 1.574-.04.86-.046 1.12-.046 3.586 0 2.463.005 2.725.046 3.586.04.826.198 1.273.315 1.574.16.41.35.705.633.988.283.283.578.473.988.633.301.117.748.275 1.574.315.86.04 1.12.046 3.586.046 2.463 0 2.725-.005 3.586-.046.826-.04 1.273-.198 1.574-.315.41-.16.705-.35.988-.633.283-.283.473-.578.633-.988.117-.301.275-.748.315-1.574.04-.86.046-1.12.046-3.586 0-2.463-.005-2.725-.046-3.586-.04-.826-.198-1.273-.315-1.574-.16-.41-.35-.705-.633-.988-.283-.283-.578-.473-.988-.633-.301-.117-.748-.275-1.574-.315-.86-.04-1.12-.046-3.586-.046-2.463 0-2.725.005-3.586.046zM12.333 6.667a5.333 5.333 0 110 10.666 5.333 5.333 0 010-10.666zm0 1.6a3.733 3.733 0 100 7.466 3.733 3.733 0 000-7.466zm5.333-3.2a1.067 1.067 0 110 2.134 1.067 1.067 0 010-2.134z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/resources/notes" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Study Notes</Link></li>
              <li><Link to="/resources/mocks" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Mock Papers</Link></li>
              <li><Link to="/resources/classes" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Live Classes</Link></li>
              <li><Link to="/resources/clinics" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Clinics</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Human Note */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 text-teal-500/20 transform -rotate-12">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H14.017V11C14.017 9.89543 14.9125 9 16.017 9V9C17.1216 9 18.017 9.89543 18.017 11V21H14.017ZM10.017 3C10.017 1.89543 10.9125 1 12.017 1H14.017V4H12.017V6H14.017V8H10.017V3ZM5.01703 3C5.01703 1.89543 5.91246 1 7.01703 1H9.01703V8H5.01703V3ZM1.01703 3C1.01703 1.89543 1.91246 1 3.01703 1H4.01703V8H1.01703V3Z" /></svg>
            </div>
            <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-teal-500/30 pl-4 py-1">
              "We built this because we remember how stressful mocks were. If we can save you even one late night of panic, it's worth it."
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-[#0B0B14]"></div>
                ))}
              </div>
              <span className="text-xs text-slate-500">The Alumni Team</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} POP Studying. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-slate-400">Systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### File: `./src/components/Navigation/Navigation.js`

```javascript
import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState('Study Sets');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="new-header-nav">
      <div className="nav-container">
        <button
          className={`nav-btn ${activeButton === 'Study Sets' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Study Sets')}
        >
          Study Sets
        </button>
        <button
          className={`nav-btn ${activeButton === 'Past Papers' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Past Papers')}
        >
          Past Papers
        </button>
        <button
          className={`nav-btn ${activeButton === 'Leaderboard' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Leaderboard')}
        >
          Leaderboard
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
```

### File: `./src/components/Navigation/Navigation.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.new-header-nav {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.nav-container {
  display: flex;
  background-color: #1E1B4B;
  border-radius: 16px;
  padding: 12px;
}

.nav-btn {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: transparent;
  color: #E9D5FF;
  font-weight: 400;
  margin: 0 4px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #A855F7 0%, #3B82F6 100%);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.nav-btn:hover::before {
  opacity: 1;
}

.nav-btn.active::before {
  opacity: 1;
}

.nav-btn.active {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
  font-weight: 500;
}
```

### File: `./src/components/PageHeader/PageHeader.js`

```javascript
import React from 'react';

const PageHeader = () => {
  const [activeButton, setActiveButton] = React.useState('Study Sets');

  const buttons = ['Study Sets', 'Create New', 'Progress', 'Settings'];

  return (
    <header className="flex items-center justify-between w-full mb-8 pb-6 border-b border-slate-700">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text mb-1">
          FlashMaster
        </h1>
        <p className="text-base text-slate-300">
          Master your knowledge with intelligent flashcards
        </p>
      </div>
      <nav className="flex items-center gap-4">
        {buttons.map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => setActiveButton(buttonName)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeButton === buttonName
                ? 'bg-gradient-to-r from-purple-500 to-blue-400 text-white'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {buttonName}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default PageHeader;
```

### File: `./src/components/FlashcardsMenu/FlashcardsMenu.css`

```css
.flashcards-menu {
  display: flex;
  justify-content: center;
  padding: 0 5%;
  background-color: #10111A;
  border-bottom: 1px solid #2a2c3a;
}

.menu-links {
  display: flex;
  gap: 2rem;
}

.menu-links a,
.menu-links button {
  padding: 1rem 0.5rem;
  color: #C2C2C2;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-links a:hover,
.menu-links button:hover {
  color: #ffffff;
}

.menu-links a.active,
.menu-links button.active {
  color: #ffffff;
  border-bottom-color: #8250FF;
}
```

### File: `./src/components/FlashcardsMenu/FlashcardsMenu.js`

```javascript
import React, { useState } from 'react';
import './FlashcardsMenu.css';

const FlashcardsMenu = () => {
  const [activeItem, setActiveItem] = useState('sets');

  const MENU_ITEMS = [
    { id: 'sets', label: 'Flashcard Sets' },
    { id: 'create', label: 'Create New' },
    { id: 'progress', label: 'Progress' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="flashcards-menu">
      <div className="menu-links">
        {MENU_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={activeItem === id ? 'active' : ''}
            aria-pressed={activeItem === id}
            onClick={() => setActiveItem(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlashcardsMenu;
```

### File: `./src/components/RoastPopup/RoastPopup.js`

```javascript
import React, { useEffect, useState } from 'react';
import './RoastPopup.css';
import { AlertTriangle } from 'lucide-react';

/**
 * RoastPopup component displays a Gen Z slang roast in a popup
 * @param {string} roast - The roast message to display
 * @param {boolean} isVisible - Whether the popup is visible
 * @param {function} onClose - Function to call when closing the popup
 */
const RoastPopup = ({ roast, isVisible, onClose }) => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (isVisible) {
      // Start with entrance animation
      setAnimation('entrance');

      // Set a timer to auto-close after 10 seconds
      const timer = setTimeout(() => {
        setAnimation('exit');

        // Wait for exit animation to complete before calling onClose
        setTimeout(() => {
          if (onClose) onClose();
        }, 500);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  // Format the roast message to ensure it displays properly
  const formatRoast = (roastText) => {
    // If the roast is very long, split it into multiple lines
    if (roastText.length > 30) {
      const words = roastText.split(' ');
      let result = [];
      let currentLine = '';

      words.forEach(word => {
        if ((currentLine + word).length > 25) {
          result.push(currentLine.trim());
          currentLine = word + ' ';
        } else {
          currentLine += word + ' ';
        }
      });

      if (currentLine) {
        result.push(currentLine.trim());
      }

      return result.join('\n');
    }

    return roastText;
  };

  // Choose an emoji based on the roast message
  const getEmoji = () => {
    if (roast.toLowerCase().includes('rizz')) {
      return '😬';
    } else if (roast.toLowerCase().includes('skill') || roast.toLowerCase().includes('issue')) {
      return '🤦‍♂️';
    } else if (roast.toLowerCase().includes('flop')) {
      return '💀';
    } else {
      return '😵';
    }
  };

  return (
    <div className={`roast-popup-overlay ${animation}`}>
      <div className={`roast-popup ${animation}`}>
        <div className="roast-header">
          <AlertTriangle className="roast-icon" />
          <span>Quiz Feedback</span>
        </div>

        <div className="roast-emoji">{getEmoji()}</div>

        <div className="roast-message">
          {formatRoast(roast)}
        </div>

        <div className="roast-subtext">Maybe study a bit more...</div>

        <button
          className="roast-close-button"
          onClick={() => {
            setAnimation('exit');
            setTimeout(() => {
              if (onClose) onClose();
            }, 500);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RoastPopup;
```

### File: `./src/components/RoastPopup/RoastPopup.css`

```css
/* RoastPopup.css */
.roast-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(5px);
}

.roast-popup-overlay.entrance {
  opacity: 1;
}

.roast-popup-overlay.exit {
  opacity: 0;
}

.roast-popup {
  background: linear-gradient(135deg, #1e1e2f, #2d2b42);
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(138, 43, 226, 0.3);
  text-align: center;
  position: relative;
  transform: scale(0.8) translateY(30px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.roast-popup.entrance {
  transform: scale(1) translateY(0);
  opacity: 1;
}

.roast-popup.exit {
  transform: scale(0.8) translateY(-30px);
  opacity: 0;
}

.roast-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.roast-close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: rotate(90deg);
}

.roast-emoji {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  animation: bounce 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: 0.2s;
  display: inline-block;
}

.roast-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(138, 43, 226, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 0;
  border-radius: 14px 14px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.roast-icon {
  color: #ffcc00;
}

.roast-message {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;
}

.roast-subtext {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.roast-close-button {
  background-color: rgba(138, 43, 226, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  color: white;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 15px;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.roast-close-button:hover {
  background-color: rgba(138, 43, 226, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.roast-close-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

@media (max-width: 640px) {
  .roast-popup {
    padding: 2.5rem 1.5rem 1.5rem;
  }
  
  .roast-emoji {
    font-size: 3.5rem;
    margin-top: 1rem;
  }
  
  .roast-message {
    font-size: 1.5rem;
  }
  
  .roast-header {
    padding: 10px 0;
    font-size: 0.8rem;
  }
}
```

### File: `./src/components/CreateSetModal/CreateSetModal.js`

```javascript
import React, { useState } from 'react';
import './CreateSetModal.css';
import { X, Plus, Image as ImageIcon, Languages, FlaskConical, History, Calculator, Brain, Code } from 'lucide-react';

const CreateSetModal = ({ isOpen, onClose }) => {
  const [flashcards, setFlashcards] = useState([{ term: '', definition: '' }]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleAddCard = () => {
    setFlashcards([...flashcards, { term: '', definition: '' }]);
  };

  const handleTermChange = (index, value) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].term = value;
    setFlashcards(updatedFlashcards);
  };

  const handleDefinitionChange = (index, value) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].definition = value;
    setFlashcards(updatedFlashcards);
  };

  const subjects = [
    { id: 'language', name: 'Language', icon: <Languages size={24} /> },
    { id: 'science', name: 'Science', icon: <FlaskConical size={24} /> },
    { id: 'history', name: 'History', icon: <History size={24} /> },
    { id: 'math', name: 'Mathematics', icon: <Calculator size={24} /> },
    { id: 'psychology', name: 'Psychology', icon: <Brain size={24} /> },
    { id: 'programming', name: 'Programming', icon: <Code size={24} /> },
  ];

  const handleCreateSet = () => {
    // Here you would handle the form submission
    // For now, just close the modal
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="create-set-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="create-set-header">
          <h2>Create a New Study Set</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <div className="create-set-content">
          {/* Title and Description */}
          <div className="create-set-section">
            <div className="form-group">
              <label htmlFor="setTitle">Title</label>
              <input
                type="text"
                id="setTitle"
                className="form-input"
                placeholder="e.g., Biology Chapter 5"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="setDescription">Description</label>
              <textarea
                id="setDescription"
                className="form-textarea"
                rows="3"
                placeholder="A brief description of your set"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Subject Selection */}
          <div className="create-set-section">
            <label className="section-label">Subject</label>
            <div className="subject-grid">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`subject-item ${selectedSubject === subject.id ? 'selected' : ''}`}
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  <div className="subject-icon">{subject.icon}</div>
                  <div className="subject-name">{subject.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Section */}
          <div className="create-set-section">
            <label className="section-label">Cards</label>

            {flashcards.map((card, index) => (
              <div className="flashcard-editor" key={index}>
                <div className="card-number">{index + 1}</div>
                <div className="card-inputs">
                  <div className="card-input-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Term"
                      value={card.term}
                      onChange={(e) => handleTermChange(index, e.target.value)}
                    />
                    <button className="image-button" type="button">
                      <ImageIcon size={20} />
                    </button>
                  </div>
                  <div className="card-input-group">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Definition"
                      value={card.definition}
                      onChange={(e) => handleDefinitionChange(index, e.target.value)}
                    />
                    <button className="image-button" type="button">
                      <ImageIcon size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              className="add-card-button"
              onClick={handleAddCard}
              type="button"
            >
              <Plus size={16} />
              <span>Add Card</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="create-set-footer">
          <button onClick={onClose} className="btn-cancel" type="button">Cancel</button>
          <button onClick={handleCreateSet} className="btn-create" type="button">Create Set</button>
        </div>
      </div>
    </div>
  );
};

export default CreateSetModal;
```

### File: `./src/components/CreateSetModal/CreateSetModal.css`

```css
/* CreateSetModal.css - Completely rebuilt to match Figma design */

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

/* Modal Container */
.create-set-modal {
  background: rgba(28, 25, 44, 0.5);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 36px;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  color: #F9FAFB;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Header */
.create-set-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.create-set-header h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(90deg, #9333EA 0%, #2563EB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.close-button {
  background: none;
  border: none;
  color: #9CA3AF;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Content */
.create-set-content {
  padding: 1.5rem 2rem;
  flex: 1;
  overflow-y: auto;
}

.create-set-section {
  margin-bottom: 2rem;
}

.section-label {
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: #E5E7EB;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #D1D5DB;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  background-color: rgba(17, 24, 39, 0.5);
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: #F9FAFB;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #8B5CF6;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #6B7280;
}

/* Subject Grid */
.subject-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.subject-item {
  background-color: rgba(17, 24, 39, 0.5);
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.subject-item:hover {
  background-color: rgba(30, 41, 59, 0.7);
  transform: translateY(-2px);
}

.subject-item.selected {
  border-color: #8B5CF6;
  background-color: rgba(139, 92, 246, 0.15);
}

.subject-icon {
  color: #A78BFA;
  margin-bottom: 0.5rem;
}

.subject-name {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Flashcard Editor */
.flashcard-editor {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.card-number {
  font-size: 1rem;
  font-weight: 600;
  color: #9CA3AF;
  padding-top: 0.75rem;
  min-width: 24px;
  text-align: center;
}

.card-inputs {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.image-button {
  background: none;
  border: none;
  color: #9CA3AF;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s;
}

.image-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #E5E7EB;
}

/* Add Card Button */
.add-card-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px dashed #6D28D9;
  border-radius: 12px;
  color: #A78BFA;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem 1rem;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  transition: background-color 0.2s;
}

.add-card-button:hover {
  background-color: rgba(109, 40, 217, 0.1);
}

/* Footer */
.create-set-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-cancel,
.btn-create {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.2s;
}

.btn-cancel {
  background-color: transparent;
  color: #D1D5DB;
}

.btn-cancel:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-create {
  background: linear-gradient(90deg, #9333EA 0%, #2563EB 100%);
  color: #F9FAFB;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.btn-create:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Scrollbar Styling */
.create-set-modal::-webkit-scrollbar {
  width: 8px;
}

.create-set-modal::-webkit-scrollbar-track {
  background: rgba(17, 24, 39, 0.3);
  border-radius: 4px;
}

.create-set-modal::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 4px;
}

.create-set-modal::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.7);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .create-set-modal {
    max-width: 95%;
    max-height: 95vh;
    border-radius: 24px;
  }
  
  .create-set-header h2 {
    font-size: 1.5rem;
  }
  
  .create-set-content,
  .create-set-header,
  .create-set-footer {
    padding: 1rem 1.5rem;
  }
  
  .subject-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .btn-cancel,
  .btn-create {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .subject-grid {
    grid-template-columns: 1fr;
  }
  
  .flashcard-editor {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .card-number {
    padding-top: 0;
    margin-bottom: 0.5rem;
    text-align: left;
  }
}
```

### File: `./src/components/SimpleNavbar/SimpleNavbar.css`

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #10111A; 
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #2a2c3a;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  gap: 0.5rem;
}

.logo svg {
  width: 28px;
  height: 28px;
  color: #6A30F5;
  margin-right: 0.25rem;
}

.logo img {
  height: 70px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-links a, .nav-links a:visited, .nav-links a:active, .nav-links a:link {
  color: #C2C2C2;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffffff;
}

.navbar .sign-in {
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%) !important;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.navbar .sign-in:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.6) !important;
}
```

### File: `./src/components/SimpleNavbar/SimpleNavbar.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './SimpleNavbar.css';

const SimpleNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="https://POPStudying.b-cdn.net/BC336123-1465-4352-A169-E81E49CD6AD3-removebg-preview.png" alt="POP Studying Logo" style={{height: '70px', width: 'auto'}} />
      </Link>
      <div className="nav-links">
        <a href="/#features">Features</a>
        <a href="/#about">About</a>
        <Link to="/class">Classes</Link>
        <Link to="/tools">Tools</Link>
      </div>
      <Link to="/sign-in" className="sign-in" style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%)', padding: '0.6rem 1.5rem' }}>Sign In</Link>
    </nav>
  );
};

export default SimpleNavbar;
```

### File: `./src/components/TopicQuiz/TopicQuiz.js`

```javascript
import React, { useState, useEffect } from 'react';
import { generateQuiz, shouldRegenerateQuiz } from '../../services/quizService';
import { generateRoast, getRandomRoast } from '../../services/roastService';
import { Check, X, RefreshCw } from 'lucide-react';
import RoastPopup from '../RoastPopup/RoastPopup';
import './TopicQuiz.css';

/**
 * TopicQuiz component displays a 10-question quiz for a topic
 * @param {string} topicContent - The content of the topic
 * @param {string} topicTitle - The title of the topic
 * @param {string} topicId - The unique identifier for the topic
 * @param {function} onQuizComplete - Callback function when quiz is completed
 */
const TopicQuiz = ({ topicContent, topicTitle, topicId, onQuizComplete }) => {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [currentScore, setCurrentScore] = useState(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
  const [showRoast, setShowRoast] = useState(false);
  const [roastMessage, setRoastMessage] = useState('');
  const [roastThreshold] = useState(3); // Show roast every 3 wrong answers
  const [wrongQuestions, setWrongQuestions] = useState([]);

  // Check if quiz was previously completed
  useEffect(() => {
    const quizCompleted = localStorage.getItem(`quiz_${topicId}_completed`) === 'true';

    // If quiz was previously completed, notify parent component
    if (quizCompleted && onQuizComplete) {
      onQuizComplete(true);
    }
  }, [topicId, onQuizComplete]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check local storage first
        const storedQuizString = localStorage.getItem(`quiz_${topicId}`);
        const storedQuiz = storedQuizString ? JSON.parse(storedQuizString) : null;

        if (storedQuiz && !shouldRegenerateQuiz(storedQuiz)) {
          setQuiz(storedQuiz);
          setLoading(false);
          return;
        }

        // Generate new quiz
        const newQuiz = await generateQuiz(topicContent, topicTitle);
        if (newQuiz) {
          localStorage.setItem(`quiz_${topicId}`, JSON.stringify(newQuiz));
          setQuiz(newQuiz);
        } else {
          throw new Error("Failed to generate quiz");
        }
      } catch (err) {
        console.error("Quiz error:", err);
        setError("Unable to load quiz. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [topicContent, topicTitle, topicId]);

  const handleAnswerSelect = async (questionIndex, answerIndex) => {
    // Only allow selecting an answer if the question hasn't been answered yet
    if (answeredQuestions[questionIndex]) return;

    const question = quiz.questions[questionIndex];
    const isCorrect = answerIndex === question.correctAnswer;

    // Update selected answers
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });

    // Mark question as answered
    setAnsweredQuestions({
      ...answeredQuestions,
      [questionIndex]: true
    });

    // Update score if answer is correct
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    } else {
      // Store the wrong question info
      const wrongQuestion = {
        questionText: question.text,
        correctAnswer: question.options[question.correctAnswer],
        selectedAnswer: question.options[answerIndex]
      };

      // Add to wrong questions array
      const updatedWrongQuestions = [...wrongQuestions, wrongQuestion];
      setWrongQuestions(updatedWrongQuestions);

      // Increment wrong answers count
      const newWrongCount = wrongAnswersCount + 1;
      setWrongAnswersCount(newWrongCount);

      // Check if we should show a roast
      if (newWrongCount % roastThreshold === 0) {
        try {
          // Get the most recent wrong question
          const recentWrongQuestion = updatedWrongQuestions[updatedWrongQuestions.length - 1];

          // Try to get a roast from the API related to the question
          const roast = await generateRoast(
            recentWrongQuestion.questionText,
            recentWrongQuestion.correctAnswer
          );
          setRoastMessage(roast);
        } catch (error) {
          // Fallback to a random roast if API fails
          console.error('Failed to generate roast:', error);
          setRoastMessage(getRandomRoast());
        }
        setShowRoast(true);
      }
    }
  };

  const handleSubmitQuiz = () => {
    // Use the current score that's been tracked throughout the quiz
    setScore(currentScore);
    setShowResults(true);

    // Save quiz completion status to localStorage
    localStorage.setItem(`quiz_${topicId}_completed`, 'true');

    // Notify parent component that quiz is complete
    if (onQuizComplete) {
      onQuizComplete(true, currentScore, quiz.questions.length);
    }
  };

  const resetQuiz = async () => {
    setLoading(true);
    setSelectedAnswers({});
    setAnsweredQuestions({});
    setCurrentQuestion(0);
    setShowResults(false);
    setCurrentScore(0);
    setWrongAnswersCount(0);
    setWrongQuestions([]);
    setShowRoast(false);

    try {
      // Generate a new quiz
      const newQuiz = await generateQuiz(topicContent, topicTitle);
      if (newQuiz) {
        localStorage.setItem(`quiz_${topicId}`, JSON.stringify(newQuiz));
        setQuiz(newQuiz);
      } else {
        throw new Error("Failed to generate new quiz");
      }
    } catch (err) {
      console.error("Quiz reset error:", err);
      setError("Unable to reset quiz. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="topic-quiz-container">
        <div className="topic-quiz loading">
          <div className="quiz-loading">
            <div className="loading-spinner"></div>
            <p>Generating your quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="topic-quiz-container">
        <div className="topic-quiz error">
          <div className="quiz-error">
            <X size={32} />
            <p>{error}</p>
            <button className="quiz-retry-btn" onClick={resetQuiz}>
              <RefreshCw size={16} /> Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="topic-quiz-container">
        <div className="topic-quiz error">
          <div className="quiz-error">
            <X size={32} />
            <p>No quiz questions available.</p>
            <button className="quiz-retry-btn" onClick={resetQuiz}>
              <RefreshCw size={16} /> Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="topic-quiz-container">
        <div className="topic-quiz results">
          <h2>Quiz Results</h2>
          <div className="quiz-score">
            You scored <span className="score-number">{score}</span> out of <span className="total-number">{quiz.questions.length}</span>
          </div>
          <div className="quiz-review">
            {quiz.questions.map((q, i) => (
              <div key={i} className={`quiz-review-item ${selectedAnswers[i] === q.correctAnswer ? 'correct' : 'incorrect'}`}>
                <p className="question">{i + 1}. {q.question}</p>
                <p className="answer">
                  Your answer: {q.options[selectedAnswers[i]]}
                  {selectedAnswers[i] !== q.correctAnswer && (
                    <span className="correct-answer"> (Correct: {q.options[q.correctAnswer]})</span>
                  )}
                </p>
                <p className="explanation">{q.explanation}</p>
              </div>
            ))}
          </div>
          <button className="quiz-reset-btn" onClick={resetQuiz}>
            <RefreshCw size={16} /> Try Again with New Questions
          </button>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <>
      {/* Roast Popup */}
      <RoastPopup
        roast={roastMessage}
        isVisible={showRoast}
        onClose={() => setShowRoast(false)}
      />

      {/* Canvas blocker to prevent oval overlay */}
      <div className="quiz-canvas-blocker"></div>
      <div className="topic-quiz-container" style={{
        background: '#0a0a1a',
        position: 'relative',
        zIndex: 100,
        isolation: 'isolate',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
        overflow: 'hidden'
      }}>
        <div className="topic-quiz" style={{
          background: '#14142A',
          backdropFilter: 'none',
          position: 'relative',
          zIndex: 10
        }}>
          <h2>Test Your Knowledge</h2>
          <div className="question-counter">Question {currentQuestion + 1} of {quiz.questions.length}</div>
          <div className="quiz-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="quiz-question">
            <p>{currentQuestion + 1}. {question.question}</p>
            <div className="quiz-options">
              {question.options.map((option, i) => {
                // Determine option class based on answer status
                let optionClass = '';

                if (answeredQuestions[currentQuestion]) {
                  // If question is answered, show correct/incorrect styling
                  if (i === question.correctAnswer) {
                    optionClass = 'correct'; // This is the correct answer
                  } else if (selectedAnswers[currentQuestion] === i) {
                    optionClass = 'incorrect'; // This was selected but is incorrect
                  }
                } else if (selectedAnswers[currentQuestion] === i) {
                  optionClass = 'selected'; // Selected but not yet evaluated
                }

                return (
                  <div
                    key={i}
                    className={`quiz-option ${optionClass}`}
                    onClick={() => handleAnswerSelect(currentQuestion, i)}
                  >
                    <div className="option-marker">{String.fromCharCode(65 + i)}</div>
                    <div className="option-text">{option}</div>
                    {answeredQuestions[currentQuestion] && i === question.correctAnswer && (
                      <div className="correct-indicator"><Check size={18} /></div>
                    )}
                  </div>
                );
              })}
            </div>

            {answeredQuestions[currentQuestion] && (
              <div className="answer-feedback">
                {selectedAnswers[currentQuestion] === question.correctAnswer ? (
                  <div className="correct-feedback">Correct! Good job!</div>
                ) : (
                  <div className="incorrect-feedback">Incorrect. The correct answer is {String.fromCharCode(65 + question.correctAnswer)}.</div>
                )}
              </div>
            )}
          </div>

          <div className="quiz-navigation">
            {currentQuestion > 0 && (
              <button
                className="quiz-nav-btn prev"
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </button>
            )}

            {currentQuestion < quiz.questions.length - 1 ? (
              <button
                className="quiz-nav-btn next"
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                disabled={!answeredQuestions[currentQuestion]}
              >
                Next
              </button>
            ) : (
              <button
                className="quiz-nav-btn submit"
                onClick={handleSubmitQuiz}
                disabled={Object.keys(answeredQuestions).length < quiz.questions.length}
              >
                Submit Quiz
              </button>
            )}
          </div>

          {/* Score display */}
          <div className="current-score">
            Current Score: {currentScore} / {Object.keys(answeredQuestions).length}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicQuiz;
```

### File: `./src/components/TopicQuiz/TopicQuiz.css`

```css
/* TopicQuiz Component Styles */
/* Canvas element to completely block all background effects */
.quiz-canvas-blocker {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  z-index: 50;
  pointer-events: none;
}

.topic-quiz-container {
  position: relative;
  margin: 3rem 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
  background-color: var(--background);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  isolation: isolate;
}

.topic-quiz-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(15, 15, 35, 0.8);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.topic-quiz {
  padding: 2rem;
  background-color: #14142A;
  border: 1px solid rgba(98, 0, 234, 0.2);
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
}

.topic-quiz h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
}

/* Quiz Progress Bar */
.quiz-progress {
  margin-bottom: 2rem;
}

.question-counter {
  text-align: center;
  margin: 0.5rem 0 1.5rem 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 2rem;
  position: relative;
  z-index: 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(98, 0, 234, 0.7), rgba(0, 229, 255, 0.7));
  border-radius: 3px;
  transition: width 0.3s ease;
}

/* Quiz Question */
.quiz-question {
  margin: 2rem 0;
  padding: 0 0.5rem;
  position: relative;
  z-index: 1;
}

.quiz-question p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #f0f0f0;
  padding: 1rem;
  border-left: 3px solid rgba(98, 0, 234, 0.5);
  animation: questionFadeIn 0.8s ease-out;
}

@keyframes questionFadeIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Quiz Options */
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.quiz-option {
  display: flex;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background-color: rgba(20, 20, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: visible;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  word-break: break-word;
  hyphens: auto;
}

.quiz-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 0 8px rgba(98, 0, 234, 0.2);
  border-color: rgba(98, 0, 234, 0.3);
  background-color: rgba(30, 30, 60, 0.8);
}

.quiz-option:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(98, 0, 234, 0.05), rgba(0, 229, 255, 0.05));
  pointer-events: none;
  opacity: 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% { opacity: 0; }
}

.quiz-option.selected {
  background: rgba(98, 0, 234, 0.3);
  border-color: rgba(98, 0, 234, 0.8);
  animation: selectPulse 1.5s infinite;
}

.quiz-option.correct {
  background: rgba(46, 213, 115, 0.15);
  border-color: rgba(46, 213, 115, 0.8);
  animation: none;
}

.quiz-option.incorrect {
  background: rgba(255, 71, 87, 0.15);
  border-color: rgba(255, 71, 87, 0.8);
  animation: none;
}

.correct-indicator {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(46, 213, 115, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.answer-feedback {
  margin: 1rem 0 2rem 0;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.correct-feedback {
  background: rgba(46, 213, 115, 0.1);
  border-left: 4px solid rgba(46, 213, 115, 0.8);
  color: rgba(46, 213, 115, 1);
  padding: 1rem;
}

.incorrect-feedback {
  background: rgba(255, 71, 87, 0.1);
  border-left: 4px solid rgba(255, 71, 87, 0.8);
  color: rgba(255, 71, 87, 1);
  padding: 1rem;
}

@keyframes selectPulse {
  0% { box-shadow: 0 0 0 0 rgba(98, 0, 234, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(98, 0, 234, 0); }
  100% { box-shadow: 0 0 0 0 rgba(98, 0, 234, 0); }
}

.option-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  min-width: 30px;
  background: rgba(98, 0, 234, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  margin-top: 0.2rem;
  font-weight: 600;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.quiz-option.selected .option-marker {
  background: rgba(98, 0, 234, 0.6);
}

.option-text {
  flex: 1;
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  padding-left: 0.5rem;
  line-height: 1.5;
  overflow: visible;
  white-space: normal;
}

/* Quiz Navigation */
.quiz-navigation {
  display: flex;
  justify-content: flex-end; /* Changed from space-between to flex-end */
  margin-top: 2rem;
  width: 100%; /* Ensure full width */
}

.current-score {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem;
  background: rgba(98, 0, 234, 0.1);
  border-radius: 8px;
}

.quiz-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #6200ea, #b388ff);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.quiz-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.1);
}

.quiz-button:active {
  transform: translateY(1px);
}

.quiz-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.quiz-button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% { transform: scale(0, 0); opacity: 0.5; }
  20% { transform: scale(25, 25); opacity: 0.5; }
  100% { opacity: 0; transform: scale(40, 40); }
}

/* Navigation buttons */
.quiz-nav-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #6200ea, #9d4edd);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.quiz-nav-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1);
}

.quiz-nav-btn:active:not(:disabled) {
  transform: translateY(1px);
}

.quiz-nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quiz-nav-btn.submit {
  background: linear-gradient(45deg, #0077b6, #00e5ff);
}

.quiz-nav-btn.submit:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Add ripple effect to all buttons */
.quiz-nav-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.quiz-nav-btn:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

/* Quiz Results */
.quiz-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
  background: linear-gradient(45deg, #6200ea, #00e5ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: titleGlow 3s infinite alternate;
}

@keyframes titleGlow {
  0% { text-shadow: 0 0 5px rgba(98, 0, 234, 0.3); }
  100% { text-shadow: 0 0 15px rgba(0, 229, 255, 0.5); }
}

.quiz-score {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(30, 30, 45, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(98, 0, 234, 0.2);
}

.score-number {
  color: rgba(0, 229, 255, 0.9);
  font-weight: 700;
  font-size: 2rem;
}

.total-number {
  font-weight: 600;
}

.quiz-review {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.quiz-review-item {
  padding: 1.25rem;
  background: rgba(30, 30, 45, 0.6);
  border-radius: 8px;
  border-left: 4px solid transparent;
}

.quiz-review-item.correct {
  border-left-color: rgba(0, 229, 255, 0.7);
}

.quiz-review-item.incorrect {
  border-left-color: rgba(255, 71, 87, 0.7);
}

.quiz-review-item .question {
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.quiz-review-item .answer {
  margin-bottom: 0.75rem;
}

.quiz-review-item .correct-answer {
  color: rgba(0, 229, 255, 0.9);
  font-weight: 500;
}

.quiz-review-item .explanation {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Reset Button */
.quiz-reset-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  background: rgba(98, 0, 234, 0.2);
  border: 1px solid rgba(98, 0, 234, 0.3);
  border-radius: 6px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quiz-reset-btn:hover {
  background: rgba(98, 0, 234, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Loading State */
.topic-quiz.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.quiz-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid rgba(98, 0, 234, 0.7);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Error State */
.topic-quiz.error {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.quiz-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  color: rgba(255, 71, 87, 0.9);
}

.quiz-retry-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(98, 0, 234, 0.2);
  border: 1px solid rgba(98, 0, 234, 0.3);
  border-radius: 6px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
}

.quiz-retry-btn:hover {
  background: rgba(98, 0, 234, 0.3);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .topic-quiz {
    padding: 1.5rem;
    margin: 2rem 0;
  }
  
  .topic-quiz h2 {
    font-size: 1.5rem;
  }
  
  .quiz-question p {
    font-size: 1rem;
  }
  
  .quiz-option {
    padding: 0.75rem;
  }
  
  .option-marker {
    width: 25px;
    height: 25px;
    min-width: 25px;
    margin-right: 0.75rem;
  }
}

@media (max-width: 480px) {
  .topic-quiz {
    padding: 1rem;
    margin: 1.5rem 0;
  }
  
  .quiz-navigation {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .quiz-nav-btn {
    width: 100%;
    text-align: center;
  }
  
  .quiz-score {
    font-size: 1.2rem;
    padding: 1rem;
  }
  
  .score-number {
    font-size: 1.6rem;
  }
}
```

### File: `./src/hooks/useProgressTracking.js`

```javascript
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'mathLearningProgress';

export const useProgressTracking = () => {
  const [progress, setProgress] = useState({});

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  }, []);

  // Save progress to localStorage when it changes
  const updateProgress = (key, value) => {
    try {
      const newProgress = {
        ...progress,
        [key]: value
      };
      setProgress(newProgress);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      return true;
    } catch (error) {
      console.error('Failed to save progress:', error);
      return false;
    }
  };

  // Calculate completion percentage for a grade
  const getGradeProgress = (grade, topicCount) => {
    if (!topicCount) return 0;
    const completedTopics = Object.keys(progress).filter(
      key => key.startsWith(`grade-${grade}-`) && progress[key]
    ).length;
    return Math.round((completedTopics / topicCount) * 100);
  };

  // Check if a specific topic is completed
  const isTopicCompleted = (grade, topicId) => {
    return !!progress[`grade-${grade}-${topicId}`];
  };

  return {
    progress,
    updateProgress,
    getGradeProgress,
    isTopicCompleted
  };
};
```

### File: `./src/hooks/useMarkdownContent.js`

```javascript
import { useState, useEffect, useMemo } from 'react';
import { parseMarkdown, splitIntoSections } from '../utils/markdownUtils';

/**
 * Custom hook to load and parse markdown content
 * @param {string} filePath - Path to the markdown file
 * @returns {Object} Object containing content, loading state, and error
 */
export function useMarkdownContent(filePath) {
  const [content, setContent] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract the clean file path (without hash) and the section ID from the hash
  const { cleanPath, sectionId } = useMemo(() => {
    if (!filePath) return { cleanPath: '', sectionId: null };
    
    const [path, hash] = filePath.split('#');
    return {
      cleanPath: path,
      sectionId: hash || null
    };
  }, [filePath]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!cleanPath) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        const response = await fetch(cleanPath);
        
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.statusText}`);
        }
        
        const markdown = await response.text();
        const { frontmatter, content: markdownContent } = parseMarkdown(markdown);
        let markdownSections = splitIntoSections(markdownContent);
        
        // If we have a sectionId, try to find and highlight that section
        if (sectionId) {
          markdownSections = markdownSections.map(section => ({
            ...section,
            isActive: section.id === sectionId || 
                     section.id.toLowerCase().replace(/\s+/g, '-') === sectionId
          }));
        }
        
        setContent({
          frontmatter,
          content: markdownContent
        });
        
        setSections(markdownSections);
        setError(null);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [cleanPath, sectionId]);

  return {
    content,
    sections,
    loading,
    error
  };
}
```

### File: `./src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### File: `./src/data/homepage-data.js`

```javascript
import {
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  Book,
  TrendingUp,
  Rocket,
  Users,
  Brain,
  Award,
  BarChart
} from 'lucide-react';

// Homepage data extracted from components
export const subjects = [
  {
    name: "Mathematics",
    color: "#FF6B6B",
    icon: <TrendingUp />,
    level: "All Levels"
  },
  {
    name: "Chemistry",
    color: "#4ECDC4",
    icon: <ClipboardCheck />,
    level: "IGCSE & A-Level"
  },
  {
    name: "Physics",
    color: "#45B7D1",
    icon: <Rocket />,
    level: "IGCSE & A-Level"
  },
  {
    name: "Biology",
    color: "#96CEB4",
    icon: <Lightbulb />,
    level: "IGCSE & A-Level"
  },
  {
    name: "English",
    color: "#FFEAA7",
    icon: <Book />,
    level: "All Levels"
  },
  {
    name: "Business",
    color: "#DDA0DD",
    icon: <BarChart />,
    level: "A-Level"
  }
];

export const features = [
  {
    icon: <GraduationCap />,
    title: "Expert-Led Classes",
    description: "Learn from top-performing students who've aced the same exams",
    color: "#FF6B6B",
    bgGradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0.05) 100%)"
  },
  {
    icon: <ClipboardCheck />,
    title: "Exam Practice",
    description: "Real past papers with Cambridge grading standards",
    color: "#4ECDC4",
    bgGradient: "linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0.05) 100%)"
  },
  {
    icon: <TrendingUp />,
    title: "Progress Tracking",
    description: "Detailed analytics to monitor your improvement",
    color: "#45B7D1",
    bgGradient: "linear-gradient(135deg, rgba(69, 183, 209, 0.1) 0%, rgba(69, 183, 209, 0.05) 100%)"
  },
  {
    icon: <Users />,
    title: "Study Groups",
    description: "Collaborative learning with motivated peers",
    color: "#96CEB4",
    bgGradient: "linear-gradient(135deg, rgba(150, 206, 180, 0.1) 0%, rgba(150, 206, 180, 0.05) 100%)"
  },
  {
    icon: <Brain />,
    title: "Smart Learning",
    description: "AI-powered study recommendations and schedules",
    color: "#DDA0DD",
    bgGradient: "linear-gradient(135deg, rgba(221, 160, 221, 0.1) 0%, rgba(221, 160, 221, 0.05) 100%)"
  },
  {
    icon: <Award />,
    title: "Achievement Badges",
    description: "Earn certificates and badges for your progress",
    color: "#FFEAA7",
    bgGradient: "linear-gradient(135deg, rgba(255, 234, 167, 0.1) 0%, rgba(255, 234, 167, 0.05) 100%)"
  }
];

export const stats = [
  { number: "500+", label: "Active Students", color: "#FF6B6B" },
  { number: "95%", label: "Grade Improvement", color: "#4ECDC4" },
  { number: "50+", label: "Expert Tutors", color: "#45B7D1" },
  { number: "4.9/5", label: "Student Rating", color: "#96CEB4" }
];

export const testimonials = [
  {
    name: "Sarah Kim",
    subject: "A-Level Mathematics",
    text: "POP Studying helped me jump from a C to an A*. The personalized approach made all the difference!",
    rating: 5,
    avatar: "SK"
  },
  {
    name: "James Park",
    subject: "IGCSE Chemistry",
    text: "The tutors are amazing! They break down complex concepts and provide exam-specific strategies.",
    rating: 5,
    avatar: "JP"
  },
  {
    name: "Maya Tan",
    subject: "A-Level Physics",
    text: "Best investment in my education. The progress tracking kept me motivated throughout.",
    rating: 5,
    avatar: "MT"
  }
];

export const heroBadges = [
  { icon: "🎓", text: "Trusted by 500+ Bangkok Students" },
  { icon: "⭐", text: "4.8/5 Student Rating" },
  { icon: "📈", text: "95% Grade Improvement" },
  { icon: "🏆", text: "Cambridge Certified" }
];
```

### File: `./src/data/mathCurriculum.js`

```javascript
export const mathCurriculum = {
  subjects: ['Math'],
  learningPath: {
    name: 'Math Learning Path',
    description: 'Master math from the basics to advanced topics',
    levels: [
      {
        id: 'foundation',
        name: 'Foundation',
        grades: [1, 2, 3],
        description: 'Master the basics of numbers and simple operations',
        icon: '1️⃣',
        color: '#7B2FF2'
      },
      {
        id: 'intermediate',
        name: 'Intermediate',
        grades: [4, 5, 6],
        description: 'Build on fundamentals with fractions, decimals, and basic algebra',
        icon: '2️⃣',
        color: '#00C6FB'
      },
      {
        id: 'advanced',
        name: 'Advanced',
        grades: [7, 8, 9],
        description: 'Tackle advanced topics including algebra, geometry, and trigonometry',
        icon: '3️⃣',
        color: '#F357A8'
      }
    ]
  },
  grades: [
    {
      id: 'foundation',
      name: 'Foundation',
      levels: [1, 2, 3],
      description: 'Master the basics of numbers and simple operations',
      icon: 'foundation',
      color: '#7B2FF2'
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      levels: [4, 5, 6],
      description: 'Build on fundamentals with fractions, decimals, and basic algebra',
      icon: 'intermediate',
      color: '#00C6FB'
    },
    {
      id: 'advanced',
      name: 'Advanced',
      levels: [7, 8, 9],
      description: 'Tackle advanced topics including algebra, geometry, and trigonometry',
      icon: 'advanced',
      color: '#F357A8'
    }
  ],
  topics: {
    // Grade 1
    1: [
      {
        id: 'numbers-1',
        title: 'Numbers to 100',
        description: 'Counting, reading, and writing numbers up to 100',
        icon: 'numbers',
        subtopics: [
          { id: 'counting-1', title: 'Counting to 20' },
          { id: 'place-value-1', title: 'Place Value (Tens and Ones)' },
          { id: 'comparing-1', title: 'Comparing Numbers' }
        ]
      },
      // Add more grade 1 topics...
    ],
    // Grade 2-6 would go here...
    
    // Grade 7 (from your existing content)
    7: [
      {
        id: 'bounds',
        title: 'Bounds',
        description: 'Understanding and calculating upper and lower bounds',
        icon: 'bounds',
        subtopics: [
          { id: 'bounds-basics', title: 'Understanding Bounds' },
          { id: 'bounds-calculations', title: 'Bounds in Calculations' },
          { id: 'bounds-word-problems', title: 'Word Problems with Bounds' }
        ]
      },
      {
        id: 'ratio-proportion',
        title: 'Ratio and Proportion',
        description: 'Working with ratios and proportional relationships',
        icon: 'ratio',
        subtopics: [
          { id: 'ratio-basics', title: 'Understanding Ratios' },
          { id: 'direct-proportion', title: 'Direct Proportion' },
          { id: 'inverse-proportion', title: 'Inverse Proportion' }
        ]
      },
      // Add more grade 7 topics...
    ]
  }
};

export const getTopicById = (grade, topicId) => {
  return mathCurriculum.topics[grade]?.find(topic => topic.id === topicId);
};

export const getTopicsByGrade = (grade) => {
  return mathCurriculum.topics[grade] || [];
};

export const getSubtopicById = (grade, topicId, subtopicId) => {
  const topic = getTopicById(grade, topicId);
  return topic?.subtopics?.find(subtopic => subtopic.id === subtopicId);
};

export const getGradeLevel = (grade) => {
  return mathCurriculum.learningPath.levels.find(level => 
    level.grades.includes(parseInt(grade))
  );
};

export const getLevels = () => {
  const levelMap = {};
  mathCurriculum.learningPath.levels.forEach(level => {
    levelMap[level.id] = {
      name: level.name,
      icon: level.icon,
      color: level.color,
      description: level.description
    };
  });
  return levelMap;
};

export const getGradeRange = (levelId) => {
  const level = mathCurriculum.learningPath.levels.find(l => l.id === levelId);
  if (!level) return { start: 1, end: 3 }; // Default to foundation if not found
  
  const grades = [...level.grades].sort((a, b) => a - b);
  return {
    start: grades[0],
    end: grades[grades.length - 1]
  };
};
```

### File: `./src/pages/Flashcards.js`

```javascript
import React from 'react';
import FlashcardsMenu from '../components/FlashcardsMenu/FlashcardsMenu';
import PageTitle from '../components/PageTitle/PageTitle';
import CreateSetModal from '../components/CreateSetModal/CreateSetModal';

import '../styles/Flashcards.css';

import { Search, MoreVertical, HelpCircle, Plus, Languages, FlaskConical, History, Calculator, Brain, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyStateIllustration from '../assets/illustrations/empty-flashcards-stack.svg';
import IconStreak from '../assets/flashcards/icon-streak-enhanced.svg';
import IconMastered from '../assets/flashcards/icon-mastered-enhanced.svg';
import IconTime from '../assets/flashcards/icon-time-enhanced.svg';
import IconScore from '../assets/flashcards/icon-score-enhanced.svg';

// Flashcard data
const flashcardSets = [
  {
    id: 1,
    title: "Spanish Vocabulary",
    description: "Essential words for everyday conversation",
    cardCount: 127,
    lastStudied: "Last studied 2h ago",
    progress: 85,
    category: "Languages",
    progressClass: "high",
    type: "pre-made"
  },
  {
    id: 2,
    title: "Biology Terms",
    description: "Cell biology and molecular processes",
    cardCount: 89,
    lastStudied: "Last studied 1d ago",
    progress: 72,
    category: "Science",
    progressClass: "medium",
    type: "pre-made"
  },
  {
    id: 3,
    title: "World War II",
    description: "Key events, dates, and figures",
    cardCount: 156,
    lastStudied: "Never studied",
    progress: 0,
    category: "History",
    progressClass: "low",
    type: "pre-made"
  },
  {
    id: 4,
    title: "Calculus Formulas",
    description: "Derivatives and integration rules",
    cardCount: 78,
    lastStudied: "Last studied 3h ago",
    progress: 91,
    category: "Math",
    progressClass: "high",
    type: "custom"
  },
  {
    id: 5,
    title: "Cognitive Psychology",
    description: "Memory, perception, and learning theories",
    cardCount: 94,
    lastStudied: "Last studied 5d ago",
    progress: 45,
    category: "Psychology",
    progressClass: "low",
    type: "custom"
  },
  {
    id: 6,
    title: "JavaScript Concepts",
    description: "ES6+ features and best practices",
    cardCount: 112,
    lastStudied: "Last studied 1h ago",
    progress: 88,
    category: "Programming",
    progressClass: "high",
    type: "custom"
  }
];

// Study progress data
const studyProgress = [
  { id: 1, value: '7', label: 'Day Streak' },
  { id: 2, value: '342', label: 'Cards Mastered' },
  { id: 3, value: '24h', label: 'Study Time' },
  { id: 4, value: '82%', label: 'Average Score' },
];

const Flashcards = () => {
  const [isCreateModalOpen, setCreateModalOpen] = React.useState(false);

  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
  };
  // Add flashcard-theme class to body when component mounts
  React.useEffect(() => {
    document.body.classList.add('flashcard-theme');

    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('flashcard-theme');
    };
  }, []);

  const preMadeSets = flashcardSets;
  const customSets = [];

  const statIcons = {
    streak: IconStreak,
    mastered: IconMastered,
    time: IconTime,
    score: IconScore
  };

  return (
    <div className="flashcards-container">
      <PageTitle title="FlashMaster" subtitle="Master your knowledge with intelligent flashcards" />
      <FlashcardsMenu />


      <div className="toolbar">
        <div className="search-input-container">
          <Search className="search-icon" size={20} />
          <input type="text" className="search-input" placeholder="Search flashcard sets..." />
        </div>

      </div>

      <h2 className="section-title-main">Featured Sets</h2>
      <div className="cards-grid">
        {preMadeSets.map((set, index) => (
          <div className="flashcard-set" key={index}>
            <div className="flashcard-content">
              <div className="card-header">
                <div className={`card-icon ${set.category.toLowerCase()}`}>
                  {set.category === "Languages" && <Languages className="category-icon" />}
                  {set.category === "Science" && <FlaskConical className="category-icon" />}
                  {set.category === "History" && <History className="category-icon" />}
                  {set.category === "Math" && <Calculator className="category-icon" />}
                  {set.category === "Psychology" && <Brain className="category-icon" />}
                  {set.category === "Programming" && <Code className="category-icon" />}
                </div>
                <div className="card-actions">
                  <div className={`card-tag ${set.category.toLowerCase()}`}>
                    {set.category}
                  </div>
                  <MoreVertical className="card-menu" size={20} />
                </div>
              </div>
              <h3 className="card-title">{set.title}</h3>
              <p className="card-description">{set.description}</p>
              <div className="card-meta">
                <div className="meta-item">
                  <span>{set.cardCount} cards</span>
                </div>
                <span>•</span>
                <div className="meta-item">
                  <span>{set.lastStudied}</span>
                </div>
              </div>

            </div>
            <div className="card-actions bottom-actions">
              <Link to="/study" className="study-btn">
                <span>Study Now</span>
              </Link>
              <div className="help-icon">
                <HelpCircle size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateSetModal isOpen={isCreateModalOpen} onClose={toggleCreateModal} />

      <div className="section-header-main">
        <h2 className="section-title-main no-margin">My Flashcards</h2>
        <button className="create-btn" onClick={toggleCreateModal}>
          <Plus size={18} />
          Create Set
        </button>
      </div>
      <div className="cards-grid">
        {customSets.length === 0 ? (
          <div className="empty-state-container">
            <img src={EmptyStateIllustration} alt="Create your first flashcard set" className="empty-state-illustration" />
            <h3 className="empty-state-title">Your custom sets will appear here</h3>
            <p className="empty-state-text">Get started by creating a new flashcard set.</p>
          </div>
        ) : (
          customSets.map((set, index) => (
            <div className="flashcard-set" key={index}>
              <div className="flashcard-content">
                <div className="card-header">
                  <div className={`card-icon ${set.category.toLowerCase()}`}>
                    {set.category === "Languages" && <Languages className="category-icon" />}
                    {set.category === "Science" && <FlaskConical className="category-icon" />}
                    {set.category === "History" && <History className="category-icon" />}
                    {set.category === "Math" && <Calculator className="category-icon" />}
                    {set.category === "Psychology" && <Brain className="category-icon" />}
                    {set.category === "Programming" && <Code className="category-icon" />}
                  </div>
                  <div className="card-actions">
                    <div className={`card-tag ${set.category.toLowerCase()}`}>
                      {set.category}
                    </div>
                    <MoreVertical className="card-menu" size={20} />
                  </div>
                </div>
                <h3 className="card-title">{set.title}</h3>
                <p className="card-description">{set.description}</p>
                <div className="card-meta">
                  <div className="meta-item">
                    <span>{set.cardCount} cards</span>
                  </div>
                  <span>•</span>
                  <div className="meta-item">
                    <span>{set.lastStudied}</span>
                  </div>
                </div>

              </div>
              <div className="card-actions bottom-actions">
                <Link to="/study" className="study-btn">
                  <span>Study Now</span>
                </Link>
                <div className="help-icon">
                  <HelpCircle size={16} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="progress-section">
        <div className="section-header">
          <h2 className="section-title">Study Progress</h2>

        </div>
        <div className="stats-grid">
          {studyProgress.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className={`stat-icon ${['streak', 'mastered', 'time', 'score'][index]}`}>
                <img
                  src={statIcons[['streak', 'mastered', 'time', 'score'][index]]}
                  alt={stat.label}
                  className="stat-icon-img"
                />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
```

### File: `./src/pages/ClassDetailPage.js`

```javascript
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Play,
    BookOpen,
    FileText,
    Atom,
    FlaskConical,
    Dna,
    Calculator,
    Briefcase,
    PenTool,
    Brain,
    CheckCircle,
    Clock,
    ChevronRight,
    Star,
    Zap
} from 'lucide-react';
import Footer from '../components/Layout/Footer';
import '../styles/ClassesRedesign.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// Mock Data (Expanded from Classes.js)
const classesData = {
    'igcse-physics': {
        name: 'Physics',
        subtitle: 'Co-ordinated Sciences',
        icon: <Atom size={64} />,
        color: 'from-blue-500 to-cyan-400',
        accentColor: 'text-cyan-400',
        description: 'Master forces, electricity, and energy. Tailored specifically for the ANS Co-ordinated scheme.',
        topics: [
            { id: 1, title: 'Motion, Forces and Energy', status: 'completed', duration: '2h 15m', type: 'core' },
            { id: 2, title: 'Thermal Physics', status: 'completed', duration: '1h 45m', type: 'core' },
            { id: 3, title: 'Waves', status: 'in-progress', duration: '2h 30m', type: 'lab' },
            { id: 4, title: 'Electricity and Magnetism', status: 'locked', duration: '3h 00m', type: 'core' },
            { id: 5, title: 'Nuclear Physics', status: 'locked', duration: '1h 30m', type: 'theory' },
            { id: 6, title: 'Space Physics', status: 'locked', duration: '1h 15m', type: 'theory' },
        ]
    },
    'igcse-chemistry': {
        name: 'Chemistry',
        subtitle: 'Co-ordinated Sciences',
        icon: <FlaskConical size={64} />,
        color: 'from-teal-500 to-emerald-400',
        accentColor: 'text-emerald-400',
        description: 'Dive into atomic structure, bonding, and reactions. Synced with ANS past paper style.',
        topics: [
            { id: 1, title: 'The Particulate Nature of Matter', status: 'completed', duration: '1h 00m', type: 'theory' },
            { id: 2, title: 'Experimental Techniques', status: 'completed', duration: '1h 30m', type: 'lab' },
            { id: 3, title: 'Atoms, Elements and Compounds', status: 'in-progress', duration: '2h 45m', type: 'core' },
            { id: 4, title: 'Stoichiometry', status: 'locked', duration: '3h 15m', type: 'math' },
            { id: 5, title: 'Electricity and Chemistry', status: 'locked', duration: '2h 00m', type: 'lab' },
        ]
    },
    'igcse-biology': {
        name: 'Biology',
        subtitle: 'Co-ordinated Sciences',
        icon: <Dna size={64} />,
        color: 'from-green-500 to-lime-400',
        accentColor: 'text-lime-400',
        description: 'Explore cells, organisation, and ecology using ANS-style diagrams and questions.',
        topics: [
            { id: 1, title: 'Characteristics of Living Organisms', status: 'completed', duration: '45m', type: 'theory' },
            { id: 2, title: 'Cells', status: 'in-progress', duration: '1h 30m', type: 'core' },
            { id: 3, title: 'Movement in and out of Cells', status: 'locked', duration: '1h 15m', type: 'lab' },
            { id: 4, title: 'Biological Molecules', status: 'locked', duration: '1h 45m', type: 'theory' },
        ]
    },
    'igcse-math': {
        name: 'Mathematics',
        subtitle: 'IGCSE Core/Extended',
        icon: <Calculator size={64} />,
        color: 'from-orange-500 to-amber-400',
        accentColor: 'text-amber-400',
        description: 'Topic-by-topic revision with equation sheets and past-paper style questions.',
        topics: [
            { id: 1, title: 'Number', status: 'completed', duration: '2h 00m', type: 'math' },
            { id: 2, title: 'Algebra and Graphs', status: 'in-progress', duration: '3h 30m', type: 'math' },
            { id: 3, title: 'Coordinate Geometry', status: 'locked', duration: '1h 45m', type: 'math' },
            { id: 4, title: 'Geometry', status: 'locked', duration: '2h 15m', type: 'math' },
            { id: 5, title: 'Mensuration', status: 'locked', duration: '1h 30m', type: 'math' },
            { id: 6, title: 'Trigonometry', status: 'locked', duration: '2h 00m', type: 'math' },
        ]
    },
    'igcse-business': {
        name: 'Business',
        subtitle: 'IGCSE',
        icon: <Briefcase size={64} />,
        color: 'from-indigo-500 to-purple-400',
        accentColor: 'text-purple-400',
        description: 'Case study-led classes aligned with ANS past paper questions and style.',
        topics: [
            { id: 1, title: 'Understanding Business Activity', status: 'completed', duration: '1h 30m', type: 'theory' },
            { id: 2, title: 'People in Business', status: 'in-progress', duration: '2h 00m', type: 'theory' },
            { id: 3, title: 'Marketing', status: 'locked', duration: '2h 30m', type: 'theory' },
        ]
    },
    'igcse-english': {
        name: 'English Language',
        subtitle: 'IGCSE',
        icon: <PenTool size={64} />,
        color: 'from-pink-500 to-rose-400',
        accentColor: 'text-rose-400',
        description: 'Reading, writing, and summary practice with ANS-style exam prompts.',
        topics: [
            { id: 1, title: 'Reading Strategies', status: 'completed', duration: '1h 45m', type: 'theory' },
            { id: 2, title: 'Directed Writing', status: 'in-progress', duration: '2h 15m', type: 'theory' },
            { id: 3, title: 'Composition', status: 'locked', duration: '2h 00m', type: 'theory' },
        ]
    },
    'act-science': {
        name: 'ACT Science',
        subtitle: 'Reasoning & Data',
        icon: <Brain size={64} />,
        color: 'from-red-500 to-orange-400',
        accentColor: 'text-orange-400',
        description: 'Data representation, research summaries, and conflicting viewpoints.',
        topics: [
            { id: 1, title: 'Data Representation', status: 'not-started', duration: '1h 30m', type: 'data' },
            { id: 2, title: 'Research Summaries', status: 'not-started', duration: '1h 45m', type: 'theory' },
            { id: 3, title: 'Conflicting Viewpoints', status: 'not-started', duration: '1h 15m', type: 'theory' },
        ]
    }
};

const ClassDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const classData = classesData[id];

    useEffect(() => {
        // Ensure body background matches Home page
        const gradient = 'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)';
        document.body.style.background = gradient;
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundSize = 'cover';

        return () => {
            document.body.style.background = '';
        };
    }, []);

    if (!classData) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Class not found</h2>
                    <Link to="/classes" className="text-blue-400 hover:underline">Back to Classes</Link>
                </div>
            </div>
        );
    }

    return (
        <div
            className="classes-redesign-page min-h-screen text-slate-100 font-sans pb-20 overflow-x-hidden"
            style={{
                background: 'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Floating Navigation Bar */}
            <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
                <div className="max-w-5xl mx-auto bg-[#1F2B3A]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/20 pointer-events-auto">

                    {/* Logo & Back Button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/classes')}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
                            title="Back to Classes"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="https://POPStudying.b-cdn.net/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2010_27_38%20PM%20Background%20Removed.png"
                                alt="POP Studying Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-lg font-semibold text-white tracking-tight">POP Studying</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
                        <Link to="/classes" className="text-white transition-colors">Classes</Link>
                        <Link to="/#focus" className="hover:text-white transition-colors">Focus</Link>
                        <Link to="/#library" className="hover:text-white transition-colors">Library</Link>
                        <Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link to="/sign-in" className="hidden sm:block text-sm font-medium text-white hover:text-white transition-colors">
                            Sign in
                        </Link>
                        <Link
                            to="/sign-up"
                            className="px-5 py-2 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-white transition-colors shadow-lg shadow-white/5"
                        >
                            Join cohort
                        </Link>
                    </div>
                </div>
            </header>

            {/* Asymmetrical Hero Section */}
            <header className="pt-32 pb-16 px-6 relative">
                {/* Decorative Background Elements */}
                <div className={`absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br ${classData.color} opacity-10 blur-[120px] rounded-full pointer-events-none -z-10`} />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content - Spans 7 cols */}
                    <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
                        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider uppercase text-slate-300 backdrop-blur-sm">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${classData.color}`}></span>
                            {classData.subtitle}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            {classData.name}
                            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${classData.color} opacity-90`}>
                                Masterclass
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                            {classData.description}
                        </p>


                    </div>

                    {/* Visual/Card - Spans 5 cols, Offset & Rotated */}
                    <div className="lg:col-span-5 relative lg:translate-y-8 lg:translate-x-4">
                        <div className={`relative z-10 bg-gradient-to-br ${classData.color} p-1 rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out`}>
                            <div className="bg-[#1F2B3A] rounded-[2.3rem] p-8 h-full flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
                                {/* Inner Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${classData.color} opacity-10`} />

                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${classData.color} flex items-center justify-center text-white shadow-lg mb-2`}>
                                    {classData.icon}
                                </div>

                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">72%</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Course Progress</div>
                                </div>

                                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                    <div className={`h-full w-[72%] bg-gradient-to-r ${classData.color}`} />
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements for "Human" feel */}
                        <div className="absolute -top-6 -right-6 bg-[#1F2B3A] border border-white/10 p-4 rounded-2xl shadow-xl -rotate-6 z-20 backdrop-blur-md">
                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                        </div>
                        <div className="absolute -bottom-8 -left-4 bg-[#1F2B3A] border border-white/10 px-5 py-3 rounded-full shadow-xl rotate-3 z-20 backdrop-blur-md flex items-center gap-2">
                            <Zap className={classData.accentColor} size={18} />
                            <span className="text-sm font-bold text-white">Keep going!</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content - Staggered Layout */}
            <main className="max-w-6xl mx-auto px-6 pb-24">

                {/* Section: Quick Actions (Broken Grid) */}
                <section className="mb-24">
                    <div className="flex items-end justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
                        <div className="h-px flex-1 bg-white/10 ml-6 mb-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
                        {/* Large Featured Card */}
                        <button className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-[2rem] bg-[#1F2B3A] border border-white/5 p-8 text-left hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className={`absolute inset-0 bg-gradient-to-br ${classData.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                                <BookOpen size={180} />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${classData.color} bg-opacity-20 flex items-center justify-center text-white`}>
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Continue Study Order</h3>
                                    <p className="text-slate-400 max-w-sm">Pick up exactly where you left off. Next up: <span className="text-white font-medium">Thermal Physics</span></p>
                                </div>
                            </div>
                        </button>

                        {/* Smaller Stacked Cards */}
                        <div className="grid grid-rows-2 gap-6 md:col-span-1 row-span-1 h-full">
                            <button className="group flex items-center gap-4 bg-[#1F2B3A] border border-white/5 rounded-[1.5rem] p-5 hover:bg-white/5 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Brain size={20} />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-white">Quick Quiz</h3>
                                    <p className="text-xs text-slate-400">5 min warmup</p>
                                </div>
                            </button>

                            <button className="group flex items-center gap-4 bg-[#1F2B3A] border border-white/5 rounded-[1.5rem] p-5 hover:bg-white/5 transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                                    <FileText size={20} />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-white">Mock Exam</h3>
                                    <p className="text-xs text-slate-400">Full paper practice</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section: Topics (Masonry/Staggered List) */}
                <section>
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">Study Path</h2>
                            <p className="text-slate-400 text-sm">Your personalized roadmap to an A*</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                            {classData.topics.length} Modules
                        </span>
                    </div>

                    <div className="relative space-y-4">
                        {/* Vertical Line Connector */}
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/50 via-slate-700 to-transparent"></div>

                        {classData.topics.map((topic, index) => (
                            <div
                                key={topic.id}
                                className={`relative pl-20 transition-all duration-500 ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-4'}`}
                            >
                                {/* Connector Dot */}
                                <div className={`absolute left-[29px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-[#1F2B3A] z-10 ${topic.status === 'completed' ? 'bg-emerald-500' :
                                    topic.status === 'in-progress' ? 'bg-blue-500' : 'bg-slate-700'
                                    }`} />

                                <div className={`group flex items-center justify-between p-5 rounded-2xl border transition-all hover:scale-[1.02] ${topic.status === 'locked'
                                    ? 'bg-black/20 border-white/5 opacity-60'
                                    : 'bg-[#1F2B3A] border-white/5 hover:border-white/20 hover:shadow-lg cursor-pointer'
                                    }`}>
                                    <div className="flex items-center gap-5">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Module {index + 1}</span>
                                            <h3 className={`text-lg font-bold ${topic.status === 'completed' ? 'text-emerald-400' : 'text-white'}`}>
                                                {topic.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-400">
                                            <Clock size={12} />
                                            {topic.duration}
                                        </div>

                                        {topic.status === 'completed' ? (
                                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                                <CheckCircle size={20} />
                                            </div>
                                        ) : topic.status === 'locked' ? (
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
                                                <div className="w-2 h-2 rounded-full bg-slate-600" />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:translate-x-1 transition-transform">
                                                <ChevronRight size={20} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default ClassDetailPage;
```

### File: `./src/pages/ClassDetailPage.tsx`

```tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ClassDetailPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Class Detail Page</h1>
            <p>Class ID: {id}</p>
        </div>
    );
};

export default ClassDetailPage;
```

### File: `./src/pages/Jamboard.tsx`

```tsx
import React, { useState } from 'react';
import '../styles/Jamboard.css'; // Use Jamboard-specific styles

interface JamboardItem {
  id: string;
  title: string;
  updatedAt: string;
  isNew?: boolean;
}

const mockBoards: JamboardItem[] = [
  { id: '1', title: 'Algebra Brainstorm', updatedAt: '2025-04-20', isNew: true },
  { id: '2', title: 'Biology Diagrams', updatedAt: '2025-04-18' },
  { id: '3', title: 'Physics Notes', updatedAt: '2025-04-15' },
];

const Jamboard: React.FC = () => {
  const [boards, setBoards] = useState<JamboardItem[]>(mockBoards);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newBoardTitle, setNewBoardTitle] = useState('');

  const handleCreateBoard = () => {
    if (!newBoardTitle.trim()) return;
    setBoards([
      { id: Date.now().toString(), title: newBoardTitle, updatedAt: new Date().toISOString().slice(0, 10), isNew: true },
      ...boards,
    ]);
    setNewBoardTitle('');
    setShowCreateModal(false);
  };

  const handleDeleteBoard = (id: string) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  // SVG for empty state
  const emptySVG = (
    <svg className="jamboard-empty-illustration" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="55" cy="55" rx="55" ry="55" fill="#a259fa"/>
      <rect x="25" y="40" width="60" height="30" rx="7" fill="#fff"/>
      <rect x="35" y="50" width="40" height="10" rx="3" fill="#e3e0ff"/>
      <rect x="45" y="54" width="20" height="3" rx="1.5" fill="#a259fa"/>
    </svg>
  );

  return (
    <div className="jamboard-root canva-style-root">
      <div className="jamboard-header-row">
        <h1 className="jamboard-title">Jamboard <span style={{fontWeight:400, fontSize:'1.1rem', color:'#8a8ab2'}}>Dashboard</span></h1>
      </div>
      <div className="jamboard-board-grid">
        {/* Canva-style "New Board" card */}
        <div className="jamboard-board-card jamboard-new-board-card" onClick={() => setShowCreateModal(true)} tabIndex={0} role="button" aria-label="Create new board">
          <div className="jamboard-new-board-plus">+</div>
          <div className="jamboard-new-board-label">New Board</div>
        </div>
        {boards.length === 0 ? (
          <div style={{gridColumn:'1/-1'}}>
            {emptySVG}
            <div className="empty-state">No boards yet. Click <b>New Board</b> to create your first Jamboard!</div>
          </div>
        ) : (
          boards.map(board => (
            <div key={board.id} className="jamboard-board-card jamboard-canva-card">
              <div className="jamboard-board-preview">📝</div>
              <div className="jamboard-board-title-row">
                <span className="jamboard-board-title">{board.title}</span>
                {board.isNew && <span className="jamboard-badge">Recently Updated</span>}
                <button
                  className="jamboard-delete-btn"
                  title="Delete"
                  onClick={() => handleDeleteBoard(board.id)}
                >
                  🗑️
                </button>
              </div>
              <div className="jamboard-board-date">Last updated: {board.updatedAt}</div>
              <div className="jamboard-board-actions">
                <button className="jamboard-open-btn" title="Open Board">Open</button>
              </div>
            </div>
          ))
        )}
      </div>
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal canva-modal">
            <h2>Create New Jamboard</h2>
            <input
              type="text"
              className="input canva-input"
              placeholder="Board title"
              value={newBoardTitle}
              onChange={e => setNewBoardTitle(e.target.value)}
              autoFocus
            />
            <div className="canva-modal-actions">
              <button className="secondary-btn canva-cancel-btn" onClick={() => setShowCreateModal(false)}>Cancel</button>
              <button className="primary-btn canva-create-btn" onClick={handleCreateBoard}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jamboard;
```

### File: `./src/pages/LandingPage.js`

```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [activeDemo, setActiveDemo] = useState('exam');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleStartNow = () => {
        navigate('/sign-up');
    };

    const handleTryDemo = () => {
        navigate('/math-dashboard');
    };

    return (
        <div className="landing-page">
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

            {/* Persistent CTA Bar */}
            <div className="persistent-cta">
                <button className="cta-button primary" onClick={handleStartNow}>
                    Start Free Trial
                </button>
            </div>

            {/* Hero Section - Feature First */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">IGCSE & A-LEVEL EXAM PREPARATION</div>
                    <h1 className="hero-title">
                        Master Your Exams with
                        <span className="gradient-text"> Real-Time Feedback</span>
                    </h1>
                    <p className="hero-subtitle">
                        Take mock exams graded against the latest boundaries. Get instant, detailed feedback on every answer. Track your progress across Foundation, Intermediate, and Advanced levels.
                    </p>
                    <div className="hero-actions">
                        <button className="cta-button large primary" onClick={handleStartNow}>
                            Start Learning Now
                        </button>
                        <button className="cta-button large secondary" onClick={handleTryDemo}>
                            Try Interactive Demo
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-value">3</div>
                            <div className="stat-label">Difficulty Levels</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">∞</div>
                            <div className="stat-label">Practice Questions</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">100%</div>
                            <div className="stat-label">Exam-Aligned</div>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="exam-preview">
                        <div className="exam-header">
                            <span className="exam-timer">45:00</span>
                            <span className="exam-progress">Question 3 of 10</span>
                        </div>
                        <div className="exam-question">
                            <p>Solve for x: 2x² + 5x - 3 = 0</p>
                        </div>
                        <div className="exam-feedback">
                            <div className="feedback-correct">✓ Correct! Using the quadratic formula...</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 1: Mock Exams with Real Grading */}
            <section className="feature-section primary">
                <div className="feature-content">
                    <div className="feature-badge">CORE FEATURE</div>
                    <h2 className="feature-title">
                        Mock Exams Graded Against
                        <span className="highlight"> Latest Boundaries</span>
                    </h2>
                    <p className="feature-description">
                        Practice with real past papers. Our system grades your answers using the most recent IGCSE and A-level grade boundaries, so you know exactly where you stand.
                    </p>
                    <ul className="feature-list">
                        <li>✓ Timed exams that simulate real test conditions</li>
                        <li>✓ Instant grading with detailed breakdown</li>
                        <li>✓ Question-by-question feedback</li>
                        <li>✓ Track improvement over time</li>
                    </ul>
                    <button className="cta-button" onClick={handleTryDemo}>
                        Try a Mock Exam →
                    </button>
                </div>
                <div className="feature-visual">
                    <div className="grading-demo">
                        <div className="grade-display">
                            <div className="grade-circle">
                                <span className="grade-letter">A*</span>
                                <span className="grade-percent">92%</span>
                            </div>
                        </div>
                        <div className="grade-breakdown">
                            <div className="breakdown-item">
                                <span className="breakdown-label">Algebra</span>
                                <div className="breakdown-bar"><div className="bar-fill" style={{ width: '95%' }}></div></div>
                                <span className="breakdown-score">95%</span>
                            </div>
                            <div className="breakdown-item">
                                <span className="breakdown-label">Geometry</span>
                                <div className="breakdown-bar"><div className="bar-fill" style={{ width: '88%' }}></div></div>
                                <span className="breakdown-score">88%</span>
                            </div>
                            <div className="breakdown-item">
                                <span className="breakdown-label">Statistics</span>
                                <div className="breakdown-bar"><div className="bar-fill" style={{ width: '91%' }}></div></div>
                                <span className="breakdown-score">91%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Three-Tier Difficulty System */}
            <section className="feature-section secondary">
                <div className="feature-content">
                    <div className="feature-badge">LEARNING PATH</div>
                    <h2 className="feature-title">
                        Progress Through
                        <span className="highlight"> Three Difficulty Levels</span>
                    </h2>
                    <p className="feature-description">
                        Start with fundamentals, build complexity, then master advanced concepts. Each level is designed to prepare you for the next challenge.
                    </p>
                    <div className="difficulty-levels">
                        <div className="difficulty-card foundation">
                            <div className="difficulty-icon">📚</div>
                            <h3>Foundation</h3>
                            <p>Master the basics. Numbers, operations, shapes, and introductory concepts.</p>
                            <div className="difficulty-progress">
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '75%' }}></div></div>
                                <span>75% Complete</span>
                            </div>
                        </div>
                        <div className="difficulty-card intermediate">
                            <div className="difficulty-icon">🎯</div>
                            <h3>Intermediate</h3>
                            <p>Apply your knowledge. Decimals, percentages, algebra, and data handling.</p>
                            <div className="difficulty-progress">
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '45%' }}></div></div>
                                <span>45% Complete</span>
                            </div>
                        </div>
                        <div className="difficulty-card advanced">
                            <div className="difficulty-icon">🚀</div>
                            <h3>Advanced</h3>
                            <p>Exam-ready content. Trigonometry, probability, iteration, and complex problems.</p>
                            <div className="difficulty-progress">
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '20%' }}></div></div>
                                <span>20% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Interactive Demo Section */}
            <section className="demo-section">
                <div className="demo-header">
                    <h2 className="demo-title">Experience It Now</h2>
                    <p className="demo-subtitle">Try our interactive features without signing up</p>
                </div>
                <div className="demo-tabs">
                    <button
                        className={`demo-tab ${activeDemo === 'exam' ? 'active' : ''}`}
                        onClick={() => setActiveDemo('exam')}
                    >
                        Mock Exam
                    </button>
                    <button
                        className={`demo-tab ${activeDemo === 'resources' ? 'active' : ''}`}
                        onClick={() => setActiveDemo('resources')}
                    >
                        Resources
                    </button>
                    <button
                        className={`demo-tab ${activeDemo === 'progress' ? 'active' : ''}`}
                        onClick={() => setActiveDemo('progress')}
                    >
                        Progress
                    </button>
                </div>
                <div className="demo-content">
                    {activeDemo === 'exam' && (
                        <div className="demo-panel exam-demo">
                            <div className="demo-question">
                                <h4>Sample Question</h4>
                                <p>Find the value of x when 3x + 7 = 22</p>
                                <div className="demo-options">
                                    <button className="demo-option">x = 3</button>
                                    <button className="demo-option">x = 5</button>
                                    <button className="demo-option correct">x = 5 ✓</button>
                                    <button className="demo-option">x = 7</button>
                                </div>
                                <div className="demo-feedback">
                                    <strong>Correct!</strong> Subtract 7 from both sides: 3x = 15, then divide by 3: x = 5
                                </div>
                            </div>
                        </div>
                    )}
                    {activeDemo === 'resources' && (
                        <div className="demo-panel resources-demo">
                            <div className="resource-grid">
                                <div className="resource-card">
                                    <div className="resource-icon">📐</div>
                                    <h4>Equation Sheet</h4>
                                    <p>All formulas you need for Math exams</p>
                                    <button className="resource-btn">View</button>
                                </div>
                                <div className="resource-card">
                                    <div className="resource-icon">⚗️</div>
                                    <h4>Periodic Table</h4>
                                    <p>Interactive chemistry reference</p>
                                    <button className="resource-btn">View</button>
                                </div>
                                <div className="resource-card">
                                    <div className="resource-icon">📊</div>
                                    <h4>Formula Book</h4>
                                    <p>Physics equations and constants</p>
                                    <button className="resource-btn">View</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeDemo === 'progress' && (
                        <div className="demo-panel progress-demo">
                            <div className="progress-overview">
                                <div className="progress-chart">
                                    <div className="chart-bar" style={{ height: '75%' }}>
                                        <span className="chart-label">Math</span>
                                        <span className="chart-value">75%</span>
                                    </div>
                                    <div className="chart-bar" style={{ height: '60%' }}>
                                        <span className="chart-label">Chem</span>
                                        <span className="chart-value">60%</span>
                                    </div>
                                    <div className="chart-bar" style={{ height: '85%' }}>
                                        <span className="chart-label">Phys</span>
                                        <span className="chart-value">85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className="cta-button large primary" onClick={handleStartNow}>
                    Start Your Free Trial
                </button>
            </section>

            {/* Feature 4: Subject-Specific Resources */}
            <section className="feature-section tertiary">
                <div className="feature-content">
                    <div className="feature-badge">INSTANT ACCESS</div>
                    <h2 className="feature-title">
                        Subject-Specific Resources
                        <span className="highlight"> At Your Fingertips</span>
                    </h2>
                    <p className="feature-description">
                        Access equation sheets, periodic tables, formula books, and reference materials exactly when you need them. During study sessions or exams.
                    </p>
                    <div className="resource-showcase">
                        <div className="resource-item">
                            <div className="resource-emoji">📐</div>
                            <h4>Math Equation Sheets</h4>
                            <p>Every formula from algebra to calculus</p>
                        </div>
                        <div className="resource-item">
                            <div className="resource-emoji">⚗️</div>
                            <h4>Chemistry Periodic Table</h4>
                            <p>Interactive element reference</p>
                        </div>
                        <div className="resource-item">
                            <div className="resource-emoji">⚡</div>
                            <h4>Physics Formula Book</h4>
                            <p>All equations and constants</p>
                        </div>
                        <div className="resource-item">
                            <div className="resource-emoji">🧬</div>
                            <h4>Biology Reference</h4>
                            <p>Key concepts and diagrams</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 5: Detailed Feedback System */}
            <section className="feature-section quaternary">
                <div className="feature-content">
                    <div className="feature-badge">INTELLIGENT FEEDBACK</div>
                    <h2 className="feature-title">
                        Get Detailed Feedback on
                        <span className="highlight"> Every Answer</span>
                    </h2>
                    <p className="feature-description">
                        Don't just see if you're right or wrong. Understand why, learn from mistakes, and get specific improvement strategies.
                    </p>
                    <div className="feedback-demo">
                        <div className="feedback-item correct">
                            <div className="feedback-icon">✓</div>
                            <div className="feedback-content">
                                <h4>Question 3: Correct</h4>
                                <p>Excellent work! You correctly applied the quadratic formula. Your method was efficient and accurate.</p>
                            </div>
                        </div>
                        <div className="feedback-item incorrect">
                            <div className="feedback-icon">✗</div>
                            <div class="feedback-content">
                                <h4>Question 7: Needs Improvement</h4>
                                <p>You made a calculation error in step 2. Review the order of operations and try similar problems in the Algebra section.</p>
                                <button className="feedback-action">Practice Similar Questions →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 6: Collaborative Notes */}
            <section className="feature-section quinary">
                <div className="feature-content">
                    <div className="feature-badge">COLLABORATION</div>
                    <h2 className="feature-title">
                        Create & Share
                        <span className="highlight"> Rich Notes</span>
                    </h2>
                    <p className="feature-description">
                        Use our rich text editor to create detailed notes. Add formatting, images, and diagrams. Share with classmates and build a knowledge base together.
                    </p>
                    <div className="notes-preview">
                        <div className="note-card">
                            <h4>📝 Quadratic Equations</h4>
                            <p>The quadratic formula: x = (-b ± √(b²-4ac)) / 2a</p>
                            <p><strong>Key points:</strong></p>
                            <ul>
                                <li>Identify a, b, and c</li>
                                <li>Calculate discriminant</li>
                                <li>Apply formula</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta">
                <div className="cta-content">
                    <h2 className="cta-title">
                        Ready to Transform Your
                        <span className="gradient-text"> Exam Preparation?</span>
                    </h2>
                    <p className="cta-subtitle">
                        Start practicing with real mock exams, get instant feedback, and track your progress across all difficulty levels.
                    </p>
                    <div className="cta-actions">
                        <button className="cta-button extra-large primary" onClick={handleStartNow}>
                            Start Free Trial Now
                        </button>
                        <button className="cta-button extra-large secondary" onClick={handleTryDemo}>
                            Explore Features
                        </button>
                    </div>
                    <div className="cta-features">
                        <span>✓ No credit card required</span>
                        <span>✓ Full access to all features</span>
                        <span>✓ Cancel anytime</span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Features</h4>
                        <ul>
                            <li>Mock Exams</li>
                            <li>Difficulty Levels</li>
                            <li>Resources</li>
                            <li>Progress Tracking</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Subjects</h4>
                        <ul>
                            <li>Mathematics</li>
                            <li>Chemistry</li>
                            <li>Physics</li>
                            <li>Biology</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 POP Studying. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
```

### File: `./src/pages/StudyFlashcard.js`

```javascript
import React, { useState } from "react";
import { ArrowLeft, RotateCw, Check, X, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Flashcards.css";

const mockFlashcards = [
  {
    id: 1,
    front: "Hola",
    back: "Hello",
    difficulty: "easy",
  },
  {
    id: 2,
    front: "Gracias",
    back: "Thank you",
    difficulty: "medium",
  },
  {
    id: 3,
    front: "Por favor",
    back: "Please",
    difficulty: "hard",
  },
  {
    id: 4,
    front: "Buenos días",
    back: "Good morning",
    difficulty: "easy",
  },
  {
    id: 5,
    front: "Buenas noches",
    back: "Good night",
    difficulty: "medium",
  },
];

const StudyFlashcard = () => {
  // Add flashcard-theme class to body when component mounts
  React.useEffect(() => {
    document.body.classList.add('flashcard-theme');

    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('flashcard-theme');
    };
  }, []);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState({
    correct: 0,
    incorrect: 0,
    remaining: mockFlashcards.length,
  });

  const currentCard = mockFlashcards[currentCardIndex];
  const progressPercentage = (currentCardIndex / mockFlashcards.length) * 100;

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNextCard = (isCorrect) => {
    if (isCorrect) {
      setProgress({
        ...progress,
        correct: progress.correct + 1,
        remaining: progress.remaining - 1,
      });
    } else {
      setProgress({
        ...progress,
        incorrect: progress.incorrect + 1,
        remaining: progress.remaining - 1,
      });
    }

    setFlipped(false);
    if (currentCardIndex < mockFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div className="study-flashcard-container">
      <div className="study-header">
        <Link to="/flashcards" className="back-button">
          <ArrowLeft size={24} />
          <span>Back to Sets</span>
        </Link>
        <div className="study-title">
          <h1>Spanish Vocabulary</h1>
          <p>Essential words for everyday conversation</p>
        </div>
        <div className="study-progress-indicator">
          <div className="progress-text">
            <span className="current">{currentCardIndex + 1}</span>/
            <span className="total">{mockFlashcards.length}</span>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="study-content">
        <div className="flashcard-stats">
          <div className="stat correct">
            <div className="stat-value">{progress.correct}</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat incorrect">
            <div className="stat-value">{progress.incorrect}</div>
            <div className="stat-label">Incorrect</div>
          </div>
          <div className="stat remaining">
            <div className="stat-value">{progress.remaining}</div>
            <div className="stat-label">Remaining</div>
          </div>
        </div>

        <div
          className={`flashcard ${flipped ? "flipped" : ""} ${currentCard.difficulty}`}
          onClick={handleFlip}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="card-content">
                <p>{currentCard.front}</p>
              </div>
              <div className="card-footer">
                <div className="difficulty-indicator">
                  <span className={`difficulty ${currentCard.difficulty}`}>
                    {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                  </span>
                </div>
                <div className="flip-hint">
                  <RotateCw size={16} />
                  <span>Click to flip</span>
                </div>
              </div>
            </div>
            <div className="flashcard-back">
              <div className="card-content">
                <p>{currentCard.back}</p>
              </div>
              <div className="card-footer">
                <div className="difficulty-indicator">
                  <span className={`difficulty ${currentCard.difficulty}`}>
                    {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                  </span>
                </div>
                <div className="flip-hint">
                  <RotateCw size={16} />
                  <span>Click to flip</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flashcard-actions">
          <button
            className="action-btn help"
            aria-label="Help"
          >
            <HelpCircle size={24} />
          </button>
          <button
            className="action-btn incorrect"
            onClick={() => handleNextCard(false)}
            aria-label="Mark as incorrect"
          >
            <X size={32} />
          </button>
          <button
            className="action-btn correct"
            onClick={() => handleNextCard(true)}
            aria-label="Mark as correct"
          >
            <Check size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyFlashcard;
```

### File: `./src/pages/MathDashboard.js`

```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MathDashboard.css';
import '../styles/Flashcards.css';

function MathDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const completedTopics = 3; // Mock data
  const totalTopics = 8; // Based on the Grade files

  // Mock data for topics based on the Grade7.md file
  const topics = [
    { id: 1, name: 'Bounds', grade: 'Grade 7', completed: true },
    { id: 2, name: 'Congruent Triangles', grade: 'Grade 7', completed: true },
    { id: 3, name: 'The Sine Rule', grade: 'Grade 7', completed: true },
    { id: 4, name: 'The Cosine Rule', grade: 'Grade 7', completed: false },
    { id: 5, name: '3D Pythagoras and Trigonometry', grade: 'Grade 7', completed: false },
    { id: 6, name: 'Finding the Area of Any Triangle', grade: 'Grade 7', completed: false },
    { id: 7, name: 'Iteration', grade: 'Grade 7', completed: false },
    { id: 8, name: 'Inverse and Composite Functions', grade: 'Grade 7', completed: false },
    { id: 9, name: 'Trigonometric and Exponential Graphs', grade: 'Grade 7', completed: false },
    { id: 10, name: 'Rearranging Harder Formulae', grade: 'Grade 7', completed: false },
    { id: 11, name: 'Conditional Probability', grade: 'Grade 7', completed: false },
    { id: 12, name: 'Histograms', grade: 'Grade 7', completed: false },
  ];

  // Mock data for resources
  const resources = [
    { id: 1, name: 'IGCSE Formula Sheet', type: 'PDF', url: '#' },
    { id: 2, name: 'A-Level Formula Sheet', type: 'PDF', url: '#' },
    { id: 3, name: 'Trigonometry Cheat Sheet', type: 'PDF', url: '#' },
    { id: 4, name: 'Statistics Reference Guide', type: 'PDF', url: '#' },
    { id: 5, name: 'Calculator Guide', type: 'PDF', url: '#' },
  ];

  // Mock data for mock exams
  const mockExams = [
    { id: 1, name: 'IGCSE Paper 1 (Non-Calculator)', duration: '1h 30m', questions: 25, difficulty: 'Medium' },
    { id: 2, name: 'IGCSE Paper 2 (Calculator)', duration: '2h', questions: 30, difficulty: 'Hard' },
    { id: 3, name: 'A-Level Pure Mathematics', duration: '2h', questions: 15, difficulty: 'Hard' },
    { id: 4, name: 'A-Level Statistics', duration: '1h 30m', questions: 12, difficulty: 'Medium' },
  ];

  // Calculate progress percentage
  const progressPercentage = Math.round((completedTopics / totalTopics) * 100);

  return (
    <div className="math-dashboard">
      <div className="math-dashboard-header">
        <h1>Master IGCSE & A-Levels</h1>
        <p>with POP Studying</p>
        <p className="subtitle">Bangkok's student-led platform for smarter, faster exam prep.</p>
        <p className="description">Interactive classes, tailored resources, and real mock exams—all in one place.</p>
        <button className="start-studying-btn" onClick={() => setActiveTab('topics')}>Start Studying</button>
      </div>

      <div className="math-dashboard-progress-container">
        <div className="progress-wheel-container">
          <div className="progress-wheel">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#181828" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#7B2FF2"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * progressPercentage / 100)}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="progress-text">
              <span className="progress-percentage">{progressPercentage}%</span>
              <span className="progress-label">Complete</span>
            </div>
          </div>
        </div>
        <div className="progress-stats">
          <div className="stat-box">
            <h3>{completedTopics}</h3>
            <p>Topics Completed</p>
          </div>
          <div className="stat-box">
            <h3>{totalTopics - completedTopics}</h3>
            <p>Topics Remaining</p>
          </div>
          <div className="stat-box">
            <h3>{totalTopics}</h3>
            <p>Total Topics</p>
          </div>
        </div>
      </div>

      <div className="math-dashboard-tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
          {activeTab === 'overview' && <span className="tab-indicator"></span>}
        </button>
        <button
          className={`tab-button ${activeTab === 'topics' ? 'active' : ''}`}
          onClick={() => setActiveTab('topics')}
        >
          Topics
          {activeTab === 'topics' && <span className="tab-indicator"></span>}
        </button>
        <button
          className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          Resources
          {activeTab === 'resources' && <span className="tab-indicator"></span>}
        </button>
        <button
          className={`tab-button ${activeTab === 'mockExams' ? 'active' : ''}`}
          onClick={() => setActiveTab('mockExams')}
        >
          Mock Exams
          {activeTab === 'mockExams' && <span className="tab-indicator"></span>}
        </button>
        <button
          className={`tab-button ${activeTab === 'studyGuide' ? 'active' : ''}`}
          onClick={() => setActiveTab('studyGuide')}
        >
          Study Guide
          {activeTab === 'studyGuide' && <span className="tab-indicator"></span>}
        </button>
      </div>

      <div className="math-dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="overview-card">
              <h2>Welcome to Mathematics</h2>
              <p>
                This dashboard provides you with all the resources you need to excel in your IGCSE and A-Level Mathematics exams.
                Navigate through topics, access resources, take mock exams, and follow our study guide to improve your understanding
                and performance.
              </p>
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="action-button" onClick={() => setActiveTab('topics')}>
                    <span className="action-icon">📚</span>
                    <span>Browse Topics</span>
                  </button>
                  <button className="action-button" onClick={() => setActiveTab('mockExams')}>
                    <span className="action-icon">📝</span>
                    <span>Take Mock Exam</span>
                  </button>
                  <button className="action-button" onClick={() => setActiveTab('resources')}>
                    <span className="action-icon">📋</span>
                    <span>View Resources</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <h2>Recent Activity</h2>
              <div className="recent-activity-list">
                <div className="activity-item">
                  <div className="activity-icon completed">✓</div>
                  <div className="activity-details">
                    <h4>Completed: The Sine Rule</h4>
                    <p>2 days ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon completed">✓</div>
                  <div className="activity-details">
                    <h4>Completed: Congruent Triangles</h4>
                    <p>3 days ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon exam">📝</div>
                  <div className="activity-details">
                    <h4>Mock Exam: IGCSE Paper 1</h4>
                    <p>Score: 78%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'topics' && (
          <div className="topics-content">
            <div className="topics-filters">
              <div className="level-tubelight-switch">
                <button className="level-tubelight-pill selected">
                  Grade 7
                  <span className="tubelight"></span>
                </button>
                <button className="level-tubelight-pill">
                  Grade 8
                </button>
              </div>
              <input
                type="text"
                placeholder="Search topics..."
                className="search-bar"
              />
            </div>
            <div className="topics-grid">
              {topics.map(topic => (
                <div key={topic.id} className={`topic-card`}>
                  <div className="topic-header">
                    <h3>{topic.name}</h3>
                    <span className="topic-grade">{topic.grade}</span>
                  </div>
                  <div className="topic-footer">
                    <Link to="/study" className="study-btn">
                      Study Now
                    </Link>
                    {topic.completed && <div className="completed-badge">✓</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="resources-content">
            <div className="resources-header">
              <h2>Mathematics Resources</h2>
              <p>Access formula sheets, reference guides, and other helpful materials</p>
            </div>
            <div className="resources-grid">
              {resources.map(resource => (
                <div key={resource.id} className="resource-card">
                  <div className="resource-icon">
                    {resource.type === 'PDF' ? '📄' : '📁'}
                  </div>
                  <div className="resource-details">
                    <h3>{resource.name}</h3>
                    <span className="resource-type">{resource.type}</span>
                  </div>
                  <button className="download-btn">Download</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mockExams' && (
          <div className="mock-exams-content">
            <div className="mock-exams-header">
              <h2>Mathematics Mock Exams</h2>
              <p>Test your knowledge with our practice exams based on past papers</p>
            </div>
            <div className="mock-exams-grid">
              {mockExams.map(exam => (
                <div key={exam.id} className="mock-exam-card">
                  <h3>{exam.name}</h3>
                  <div className="exam-details">
                    <div className="exam-detail">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{exam.duration}</span>
                    </div>
                    <div className="exam-detail">
                      <span className="detail-label">Questions:</span>
                      <span className="detail-value">{exam.questions}</span>
                    </div>
                    <div className="exam-detail">
                      <span className="detail-label">Difficulty:</span>
                      <span className={`detail-value difficulty-${exam.difficulty.toLowerCase()}`}>
                        {exam.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="start-exam-btn">Start Exam</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'studyGuide' && (
          <div className="study-guide-content">
            <div className="study-guide-header">
              <h2>Mathematics Study Guide</h2>
              <p>Follow this recommended study path to master Mathematics</p>
            </div>
            <div className="study-path">
              <div className="path-step completed">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Foundations</h3>
                  <p>Master the basics of algebra, geometry, and number theory</p>
                  <div className="step-topics">
                    <span className="step-topic">Bounds</span>
                    <span className="step-topic">Congruent Triangles</span>
                  </div>
                </div>
                <div className="step-status">Completed</div>
              </div>
              <div className="path-step active">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Trigonometry</h3>
                  <p>Learn advanced trigonometric concepts and applications</p>
                  <div className="step-topics">
                    <span className="step-topic">The Sine Rule</span>
                    <span className="step-topic">The Cosine Rule</span>
                    <span className="step-topic">3D Pythagoras and Trigonometry</span>
                  </div>
                </div>
                <div className="step-status">In Progress</div>
              </div>
              <div className="path-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Functions and Graphs</h3>
                  <p>Understand different types of functions and their graphs</p>
                  <div className="step-topics">
                    <span className="step-topic">Iteration</span>
                    <span className="step-topic">Inverse and Composite Functions</span>
                    <span className="step-topic">Trigonometric and Exponential Graphs</span>
                  </div>
                </div>
                <div className="step-status">Not Started</div>
              </div>
              <div className="path-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Advanced Topics</h3>
                  <p>Master complex mathematical concepts for top grades</p>
                  <div className="step-topics">
                    <span className="step-topic">Rearranging Harder Formulae</span>
                    <span className="step-topic">Conditional Probability</span>
                    <span className="step-topic">Histograms</span>
                  </div>
                </div>
                <div className="step-status">Not Started</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MathDashboard;
```

### File: `./src/pages/ClassPage.tsx`

```tsx
import React, { useState } from 'react';
import SimpleNavbar from '../components/SimpleNavbar/SimpleNavbar';
import '../styles/ClassPage.css';
import 'remixicon/fonts/remixicon.css';

interface ClassData {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  overallProgress: number;
  levels: {
    foundation: number;
    intermediate: number;
    advanced: number;
  };
  completedTopics: number;
  totalTopics: number;
  lastAccessed: string;
  nextTopic: string;
  section?: string;
}

const classesData: ClassData[] = [
  {
    id: '1',
    title: 'Mathematics',
    icon: 'calculate',
    iconColor: 'gradient',
    overallProgress: 75,
    levels: {
      foundation: 90,
      intermediate: 65,
      advanced: 40
    },
    completedTopics: 24,
    totalTopics: 32,
    lastAccessed: '2 days ago',
    nextTopic: 'Quadratic Equations',
    section: 'IGCSE'
  },
  {
    id: '2',
    title: 'Chemistry',
    icon: 'science',
    iconColor: 'gradient',
    overallProgress: 60,
    levels: {
      foundation: 85,
      intermediate: 50,
      advanced: 25
    },
    completedTopics: 18,
    totalTopics: 30,
    lastAccessed: '1 day ago',
    nextTopic: 'Organic Compounds',
    section: 'IGCSE Co-ordinated Sciences (Double Award) 0654'
  },
  {
    id: '3',
    title: 'Physics',
    icon: 'bolt',
    iconColor: 'gradient',
    overallProgress: 50,
    levels: {
      foundation: 75,
      intermediate: 35,
      advanced: 10
    },
    completedTopics: 15,
    totalTopics: 30,
    lastAccessed: '3 days ago',
    nextTopic: 'Electromagnetic Waves',
    section: 'IGCSE Co-ordinated Sciences (Double Award) 0654'
  },
  {
    id: '4',
    title: 'Biology',
    icon: 'biotech',
    iconColor: 'gradient',
    overallProgress: 40,
    levels: {
      foundation: 70,
      intermediate: 25,
      advanced: 5
    },
    completedTopics: 12,
    totalTopics: 30,
    lastAccessed: '5 days ago',
    nextTopic: 'Cell Division',
    section: 'IGCSE Co-ordinated Sciences (Double Award) 0654'
  },
  {
    id: '5',
    title: 'History',
    icon: 'history_edu',
    iconColor: 'gradient',
    overallProgress: 20,
    levels: {
      foundation: 45,
      intermediate: 10,
      advanced: 0
    },
    completedTopics: 6,
    totalTopics: 30,
    lastAccessed: '1 week ago',
    nextTopic: 'Ancient Civilizations',
    section: 'IGCSE'
  },
  {
    id: '6',
    title: 'Computer Science',
    icon: 'computer',
    iconColor: 'gradient',
    overallProgress: 0,
    levels: {
      foundation: 0,
      intermediate: 0,
      advanced: 0
    },
    completedTopics: 0,
    totalTopics: 30,
    lastAccessed: 'Never',
    nextTopic: 'Introduction to Algorithms',
    section: 'IGCSE'
  }
];

const ClassPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');



  const renderCircularProgress = (progress: number) => {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="circular-progress">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#2A2A3A"
            strokeWidth="4"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7B2FF2" />
              <stop offset="100%" stopColor="#1A8FFF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="circular-progress-text">{progress}%</div>
      </div>
    );
  };

  const groupedClasses = classesData.reduce((acc, classItem) => {
    const section = classItem.section || 'Other Subjects';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(classItem);
    return acc;
  }, {} as Record<string, ClassData[]>);

  const sectionNames = Object.keys(groupedClasses);
  if (sectionNames.includes('Other Subjects')) {
    sectionNames.splice(sectionNames.indexOf('Other Subjects'), 1);
    sectionNames.push('Other Subjects');
  }

  return (
    <div className="class-page-container">
      <SimpleNavbar />
      
      <div className="class-page-content">
        <header className="class-page-header">
          <div className="header-text">
            <h1>My Classes</h1>
            <p>Track your learning progress across all subjects. Continue where you left off or explore new topics.</p>
          </div>
        </header>

        <div className="filters-section">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Classes
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'recent' ? 'active' : ''}`}
              onClick={() => setActiveFilter('recent')}
            >
              Recently Accessed
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'progress' ? 'active' : ''}`}
              onClick={() => setActiveFilter('progress')}
            >
              By Progress
            </button>
          </div>

          <div className="sort-dropdown">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="progress">Progress</option>
              <option value="recent">Recently Accessed</option>
            </select>
          </div>
        </div>

        {sectionNames.map(section => (
          <div key={section} className="section-container">
            {section !== 'Other Subjects' && (
              <h2 className="section-title">{section}</h2>
            )}
            <div className="classes-grid">
              {groupedClasses[section].map((classItem) => (
                <div key={classItem.id} className="class-card">
                  <div className="class-card-header">
                    <div className="class-icon-wrapper">
                      <i className="material-icons">{classItem.icon}</i>
                    </div>
                    <h3>{classItem.title}</h3>
                    {renderCircularProgress(classItem.overallProgress)}
                  </div>

                  <div className="class-card-body">
                    <div className="level-details">
                      <div className="level-row">
                        <span>Foundation</span>
                        <span>{classItem.levels.foundation}%</span>
                      </div>
                      <div className="level-row">
                        <span>Intermediate</span>
                        <span>{classItem.levels.intermediate}%</span>
                      </div>
                      <div className="level-row">
                        <span>Advanced</span>
                        <span>{classItem.levels.advanced}%</span>
                      </div>
                    </div>
                    <div className="class-stats">
                      <span>{classItem.completedTopics}/{classItem.totalTopics} topics</span>
                      <span>Last: {classItem.lastAccessed}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="info-footer">
          <i className="material-icons">info</i>
          <span>Progress is synced across all your devices</span>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
```

### File: `./src/pages/Home.js`

```javascript
import React, { useState, useEffect } from 'react';
import Footer from '../components/Layout/Footer';
import { Link } from 'react-router-dom';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const Home = () => {
  const [resourceTab, setResourceTab] = useState('notes');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const readinessStats = [
    { subject: 'Math Paper 2', score: '92%', status: 'On track' },
    { subject: 'Physics HL', score: '88%', status: 'Reviewed' },
    { subject: 'Chemistry ATP', score: '86%', status: 'Needs recap' }
  ];
  const focusBlocks = [
    { title: 'Functions', detail: 'IB Math AA', time: '08:30' },
    { title: 'Energetics', detail: 'Chemistry HL', time: '11:00' },
    { title: 'Stoichiometry', detail: 'Chemistry SL', time: '14:30' }
  ];
  const clinics = [
    { title: 'IB Physics Clinic', detail: 'Wave superposition drills · 19:00' },
    { title: 'Essay review window', detail: 'Upload drafts by Friday' }
  ];
  const heroStats = [
    { label: 'Mock readiness avg.', value: '89%' },
    { label: 'Weekly clinics', value: '12' },
    { label: 'Active cohorts', value: '48' }
  ];
  const cadenceSteps = [
    {
      title: 'Sunday brief',
      description: 'You receive a 4-line overview: key topics, mock target, and one reflective question.',
      detail: 'Sent 18:00 local time',
      id: '01'
    },
    {
      title: 'Mid-week check',
      description: 'Mentor replies to your submission with annotated feedback and a 48-hour action note.',
      detail: 'Delivered in-app',
      id: '02'
    },
    {
      title: 'Studio hour',
      description: 'Join a low-light focus room with 12 peers, swap questions, then log next plans.',
      detail: 'Thursday 19:00',
      id: '03'
    }
  ];
  const resourcePanels = {
    notes: {
      eyebrow: 'Study notes',
      heading: 'Zero-fluff notes shaped by actual scorers.',
      intro: 'Expert-written notes with exam-focused content and visual aids.',
      accent: 'from-indigo-400 to-cyan-400',
      stats: [
        { label: 'Topic packs', value: '126' },
        { label: 'Avg. minutes saved', value: '18' },
        { label: 'Inline callouts', value: '312' }
      ],
      bullets: [
        'Margin cues show where method marks appear so you never overwrite the obvious.',
        'Color-coded diagrams you can paste into IA drafts without reformatting.',
        'Each pack ends with two “if you only have 5 minutes” prompts.'
      ],
      cards: [
        { title: 'Math AA HL · Functions', meta: '3-page digest · PDF', detail: 'Domains, compositions, and the exact sentence examiners want before graphing.' },
        { title: 'Chemistry ATP · Energetics', meta: 'Lab briefing · 2 min audio', detail: 'Reminds you to set calorimeter insulation before the calculation sprint.' },
        { title: 'English Lit · Paper 1', meta: 'Annotatable markup', detail: 'Thesis scaffolds + “line to quote” sticky tabs for quicker commentary.' }
      ],
      media: {
        src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80',
        caption: 'All note packs open in a distraction-free canvas for quick markup.'
      }
    },
    classes: {
      eyebrow: 'Live classes',
      heading: 'Expert-led sessions that actually help.',
      intro: 'Browse or explore all classes.',
      accent: 'from-teal-400 to-emerald-400',
      stats: [
        { label: 'Live sessions', value: '25+' },
        { label: 'Expert instructors', value: '8' },
        { label: 'Success rate', value: '94%' }
      ],
      bullets: [
        'Live Q&A sessions where you can ask questions directly to subject experts.',
        'Personalized feedback on practice problems with step-by-step explanations.',
        'Recorded sessions available for review with comprehensive study notes.',
        'Collaborative study rooms for peer-to-peer learning and discussion.'
      ],
      cards: [
        { title: 'Problem-solving workshop', meta: 'Mathematics · Weekly', detail: 'Master complex problem-solving techniques with guided practice.' },
        { title: 'Science lab review', meta: 'Physics/Chemistry · Bi-weekly', detail: 'Review key experiments and concepts with practical demonstrations.' },
        { title: 'Essay writing masterclass', meta: 'English/Literature · Monthly', detail: 'Learn effective essay structures and analysis techniques.' }
      ],
      media: {
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
        caption: 'Mentors review your camera feed, not a generic stage deck.'
      }
    },
    papers: {
      eyebrow: 'Mock papers',
      heading: 'Annotated scripts that show exactly where marks land.',
      intro: 'We pair every paper with the student’s planning notes plus examiner commentary so you can see both sides.',
      accent: 'from-amber-400 to-rose-400',
      stats: [
        { label: 'Marked scripts', value: '94' },
        { label: 'Exam boards', value: '6' },
        { label: 'Audio verdicts', value: '38' }
      ],
      bullets: [
        'Each script includes the raw timing grid, so you can copy pacing that worked.',
        'Audio verdicts explain why a level 6 became a 7 (or didn’t).',
        'Cross-reference mark schemes with our “what graders actually wrote” column.'
      ],
      cards: [
        { title: 'Math Paper 2 · 89%', meta: 'Cambridge · Annotated PDF', detail: 'Watch where method marks were rescued even after an algebra slip.' },
        { title: 'IB Physics HL · 7/7', meta: 'Audio + markup', detail: 'Examiner explains why the evaluation paragraph earned the final point.' },
        { title: 'English Paper 1 · 34/40', meta: 'Dual-column transcript', detail: 'Left column = student handwriting, right = grader reaction.' }
      ],
      media: {
        src: 'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?auto=format&fit=crop&w=900&q=80',
        caption: 'Mock packets download with editable comments so you can riff on them.'
      }
    }
  };
  const activeResourcePanel = resourcePanels[resourceTab];
  const syllabusBadges = ['IGCSE', 'IB', 'A-Level', 'Mock clinics'];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const previousBodyStyles = {
      backgroundImage: document.body.style.backgroundImage,
      backgroundColor: document.body.style.backgroundColor,
      backgroundAttachment: document.body.style.backgroundAttachment,
      backgroundRepeat: document.body.style.backgroundRepeat,
      backgroundSize: document.body.style.backgroundSize
    };
    const previousHtmlStyles = {
      backgroundImage: document.documentElement.style.backgroundImage,
      backgroundColor: document.documentElement.style.backgroundColor,
      backgroundAttachment: document.documentElement.style.backgroundAttachment,
      backgroundRepeat: document.documentElement.style.backgroundRepeat,
      backgroundSize: document.documentElement.style.backgroundSize
    };
    const gradient = 'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)';
    document.body.style.backgroundImage = gradient;
    document.body.style.backgroundColor = '#3A3F61';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    document.documentElement.style.backgroundImage = gradient;
    document.documentElement.style.backgroundColor = '#3A3F61';
    document.documentElement.style.backgroundAttachment = 'fixed';
    document.documentElement.style.backgroundRepeat = 'no-repeat';
    document.documentElement.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = previousBodyStyles.backgroundImage;
      document.body.style.backgroundColor = previousBodyStyles.backgroundColor;
      document.body.style.backgroundAttachment = previousBodyStyles.backgroundAttachment;
      document.body.style.backgroundRepeat = previousBodyStyles.backgroundRepeat;
      document.body.style.backgroundSize = previousBodyStyles.backgroundSize;
      document.documentElement.style.backgroundImage = previousHtmlStyles.backgroundImage;
      document.documentElement.style.backgroundColor = previousHtmlStyles.backgroundColor;
      document.documentElement.style.backgroundAttachment = previousHtmlStyles.backgroundAttachment;
      document.documentElement.style.backgroundRepeat = previousHtmlStyles.backgroundRepeat;
      document.documentElement.style.backgroundSize = previousHtmlStyles.backgroundSize;
    };
  }, []);

  // Add styles for infinite sliding animation
  const slidingStyles = `
    @keyframes slideLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .slider-container {
      overflow: hidden;
      position: relative;
    }
    
    .slider-track {
      display: flex;
      animation: slideLeft 20s linear infinite;
      will-change: transform;
    }
    
    .slider-track.paused {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{slidingStyles}</style>
      <div
        className="home-page-wrapper min-h-screen text-slate-100"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      >
        {/* Header / Navigation Bar - Floating Pill Shape */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-5xl">
          <div className="flex items-center justify-between gap-10 px-8 py-4 rounded-full bg-[#1a1f35]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-[0.3em] uppercase text-teal-200/80">POP</span>
              <span className="text-lg font-semibold text-slate-100">Studying</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
              <a href="#resources" className="tracking-wide hover:text-slate-100 transition-colors">Programs</a>
              <a href="#focus" className="tracking-wide hover:text-slate-100 transition-colors">Focus</a>
              <a href="#library" className="tracking-wide hover:text-slate-100 transition-colors">Library</a>
              <a href="#faq" className="tracking-wide hover:text-slate-100 transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3 text-sm">
              <Link to="/sign-in" className="text-slate-200/90 hover:text-white transition-colors px-3 py-1.5">Sign in</Link>
              <Link
                to="/sign-up"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25"
              >
                Join cohort
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-28 pb-24 px-6 lg:px-12" style={{ minHeight: '100vh' }}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="flex-1 space-y-8">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-teal-200"></span>
                  <span className="text-[13px] font-medium tracking-wide text-teal-200">Built for IB + A level mocks</span>
                </div>
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-[64px] font-semibold leading-tight text-slate-50 tracking-tight">
                    Calm, deliberate prep <br className="hidden md:block" /> for every revision block
                  </h1>
                  <p className="text-lg text-slate-200/80 leading-relaxed max-w-2xl">
                    Guided study cadences, annotated topic packs, and mock submissions in one trusted hub.
                    Keep momentum across busy terms without neon distractions.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {syllabusBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full border border-white/15 text-sm tracking-wide text-slate-200/90"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/sign-up"
                  className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-slate-50 text-base font-medium tracking-wide hover:border-white/30 transition"
                >
                  Start my plan
                </Link>
                <Link
                  to="/class/preview"
                  className="px-6 py-3 rounded-2xl border border-white/10 text-slate-200/80 text-base font-medium hover:text-white transition"
                >
                  Browse classes
                </Link>
                <p className="text-sm text-slate-300/80">
                  Built by alumni scoring 7s & 45
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 p-4 bg-white/5 text-slate-200/90">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                    <div className="text-2xl font-semibold text-slate-50 mt-2">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-5/12 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(8,12,24,0.35)]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-300/80">
                  <span>Weekly focus</span>
                  <span className="text-cyan-100/80">3 of 4 blocks set</span>
                </div>
                <div className="mt-5 space-y-4">
                  {focusBlocks.map((block) => (
                    <div key={block.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-medium text-slate-50">{block.title}</p>
                        <p className="text-sm text-slate-300/80">{block.detail}</p>
                      </div>
                      <span className="text-sm text-cyan-100/80">{block.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#1F2B3A]/70 p-6 shadow-[0_25px_60px_rgba(6,10,25,0.35)] space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300/80">Mock readiness</p>
                  <button className="text-sm text-teal-200/80 hover:text-teal-100 transition">
                    Continue practice →
                  </button>
                </div>
                <div className="space-y-5">
                  {readinessStats.map((stat) => {
                    const statusClass = stat.status === 'Needs recap' ? 'text-purple-200/80' : 'text-teal-200/80';
                    return (
                      <div key={stat.subject} className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium text-slate-50">{stat.subject}</p>
                          <p className={`text-sm ${statusClass}`}>{stat.status}</p>
                        </div>
                        <span className="text-lg font-semibold text-slate-100">{stat.score}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-6 border-t border-white/10 space-y-4">
                  {clinics.map((clinic) => (
                    <div key={clinic.title} className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{clinic.title}</span>
                      <span className="text-sm text-slate-200/85">{clinic.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Cadence Section */}
        <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ minHeight: '100vh' }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle at 70% 30%, #DFF2FC 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}></div>

          <div className="max-w-6xl mx-auto relative z-10 h-full flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col justify-center space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm max-w-fit">
                <span className="w-2 h-2 rounded-full bg-teal-200"></span>
                <span className="text-[13px] font-medium tracking-wide text-teal-200">How the cadence works</span>
              </div>
              <div className="space-y-4">
                <h2
                  className="text-5xl lg:text-6xl font-inter font-light text-white leading-[1.1]"
                >
                  Your week, finally<br />making sense.
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                  Three quiet touchpoints repeat every seven days. They are simple on purpose so you stay focused on
                  the work instead of another flashy dashboard.
                </p>
              </div>

              <div className="space-y-4">
                {cadenceSteps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 border border-white/10 rounded-2xl bg-white/5 p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-2xl font-light text-teal-200 min-w-[3rem]">{step.id}</div>
                    <div className="space-y-1">
                      <p className="text-lg text-slate-50">{step.title}</p>
                      <p className="text-sm text-slate-300">{step.description}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            <div className="w-full lg:w-5/12 flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span>Weekly focus digest</span>
                  <span className="text-teal-200/80">3 blocks queued</span>
                </div>
                <div className="mt-6 space-y-5">
                  {focusBlocks.map((block) => (
                    <div key={block.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-base text-slate-50 font-medium">{block.title}</p>
                        <p className="text-sm text-slate-300">{block.detail}</p>
                      </div>
                      <span className="text-sm text-slate-300/80">{block.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  “The cadence feels like a studio critique: calm, specific, and honest. By Week 6 the chaos was gone and
                  the plan felt human again.”
                </p>
                <p className="mt-4 text-slate-200 font-medium">— Elina, IB Literature · 44/45</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#1F2B3A]/80 p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Readiness pulse</p>
                  <span className="text-teal-200/80 text-xs uppercase tracking-[0.3em]">Updated Friday</span>
                </div>
                {readinessStats.map((stat) => (
                  <div key={stat.subject} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm text-slate-300">{stat.subject}</p>
                      <p className="text-2xl font-semibold text-slate-50">{stat.score}</p>
                    </div>
                    <span className="text-sm text-teal-200/80">{stat.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exam Pressure Section */}
        <section className="py-24 px-6 lg:px-8 relative" style={{ minHeight: '80vh' }}>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at 20% 20%, rgba(63,94,111,0.4), transparent 45%)'
            }}
          ></div>
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                <span className="text-[13px] font-medium tracking-wide text-blue-200 uppercase">Classes, Resources, and Mocks</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-50 tracking-tight">
                Built to match real exam pressure
              </h2>
              <p className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed">
                Learn with lesson-style classes, use quick-reference resources, then stress-test yourself with mini mocks based on the latest exam style and grade boundaries.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Feature Cards */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-slate-50 mb-3">Structured "Classes" for each topic</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed">
                    Each subject is split into bite-sized modules that feel like a clear class plan rather than random notes.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Topic checklists for ANS IGCSE and A-Level courses',
                      'Guided examples with step-by-step working',
                      'Mini quiz at the end of each module'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-200/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-slate-50 mb-3">Smart reference resources</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed">
                    Fast access to the tools you keep reaching for during revision.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Equation sheets for Maths and Physics',
                      'Periodic table and key ions for Chemistry',
                      'Command word lists and sample responses'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-200/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-slate-50 mb-3">Mini mock exams with instant insights</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed">
                    Sit short, exam-style papers and get feedback you can act on before the real thing.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Questions mapped to real past papers',
                      'Timing based on actual exam durations',
                      'Grades linked to the latest boundaries'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-200/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Example Mock Card */}
              <div className="lg:sticky lg:top-32">
                <div className="rounded-3xl bg-slate-950/80 p-8 text-slate-100 border border-white/15 shadow-[0_25px_60px_rgba(5,9,20,0.45)] backdrop-blur">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-1">Example: IGCSE Maths Mini Mock</h3>
                    <div className="flex items-center justify-between text-sm mt-6 mb-2 text-slate-300">
                      <span className="font-medium">Overall grade (latest boundaries)</span>
                      <span className="text-white font-bold">Grade A</span>
                    </div>
                    <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                      <span>Topic breakdown</span>
                      <span>Strong in algebra</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { label: 'Algebra & functions', val: '80%' },
                      { label: 'Shape & space', val: '72%' },
                      { label: 'Statistics & probability', val: '65%' }
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span>
                          {stat.label} — <span className="font-medium text-white">{stat.val}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-100 text-xs font-medium border border-white/15">
                      Re-test in 7 days
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-100 text-xs font-medium border border-white/15">
                      Recommended: algebra recap class
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-100 text-xs font-medium border border-white/15">
                      3 weak question types flagged
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Library Section - Improved Design */}
        <section className="py-24 px-6 lg:px-8 relative" style={{ minHeight: '100vh' }}>
          {/* New background pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, #9333EA 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
                filter: 'blur(80px)'
              }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Centered intro with improved contrast */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-300"></span>
                <span className="text-[13px] font-medium tracking-wide text-indigo-100">Resource Library</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-8">
                Everything you need,<br />
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">beautifully organized</span>
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-12">
                Navigate through study materials, live sessions, and practice papers with our intelligent resource finder
              </p>
            </div>

            {/* Modern Resource Selection Tabs */}
            <div className="mb-16">
              {/* Resource type selector with icons and descriptions */}
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch mb-12">
                {[
                  {
                    id: 'notes',
                    label: 'Study Notes',
                    icon: '📝',
                    description: 'Comprehensive revision materials from top students',
                    color: 'from-indigo-500 to-purple-400',
                    bgColor: 'bg-indigo-500/10',
                    borderColor: 'border-indigo-500/30'
                  },
                  {
                    id: 'classes',
                    label: 'Live Classes',
                    icon: '🎥',
                    description: 'Interactive sessions with expert instructors',
                    color: 'from-cyan-500 to-teal-400',
                    bgColor: 'bg-cyan-500/10',
                    borderColor: 'border-cyan-500/30'
                  },
                  {
                    id: 'papers',
                    label: 'Mock Papers',
                    icon: '📄',
                    description: 'Past papers with detailed solutions',
                    color: 'from-amber-500 to-orange-400',
                    bgColor: 'bg-amber-500/10',
                    borderColor: 'border-amber-500/30'
                  }
                ].map((option, index) => {
                  const isActive = resourceTab === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setResourceTab(option.id)}
                      className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer group max-w-sm ${isActive
                        ? `${option.bgColor} ${option.borderColor} shadow-lg scale-105 border-opacity-100`
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                    >
                      <div className="text-center lg:text-left">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} mb-4 group-hover:scale-110 transition-transform`}>
                          <span className="text-2xl">{option.icon}</span>
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                          }`}>
                          {option.label}
                        </h3>
                        <p className={`text-sm ${isActive ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'
                          }`}>
                          {option.description}
                        </p>
                        {isActive && (
                          <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
                            <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-r ${option.color}`}></span>
                            <span className="text-xs font-medium text-slate-200">Currently viewing</span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active category highlight */}
              <div className="text-center">
                <p className="text-slate-400">
                  Now browsing: <span className="font-semibold text-white">
                    {resourceTab === 'notes' ? 'Study Notes' :
                      resourceTab === 'classes' ? 'Live Classes' : 'Mock Papers'}
                  </span>
                </p>
              </div>
            </div>

            {/* Infinite sliding cards - improved layout */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light text-white">
                  {activeResourcePanel.heading}
                </h3>
                <p className="text-sm text-slate-300">
                  {activeResourcePanel.eyebrow}
                </p>
              </div>

              <div
                className="slider-container py-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className={`slider-track ${isPaused ? 'paused' : ''}`}>
                  {/* Create cards for the slider - we'll create 2 sets for seamless loop */}
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-6 px-3">
                      {Array(6).fill(0).map((_, i) => (
                        <div
                          key={`${setIndex}-${i}`}
                          className="flex-shrink-0 w-80 rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
                          style={{ minWidth: '320px' }}
                        >
                          <div className="flex items-center justify-between text-sm text-slate-300 mb-3">
                            <span>Resource #{i + 1}</span>
                            <span className="px-2 py-1 rounded-full bg-teal-500/30 text-teal-200 text-xs border border-teal-400/30">
                              {i % 3 === 0 ? 'Popular' : i % 3 === 1 ? 'New' : 'Updated'}
                            </span>
                          </div>
                          <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${i % 3 === 0 ? 'from-indigo-500/20 to-purple-400/20' : i % 3 === 1 ? 'from-cyan-500/20 to-teal-400/20' : 'from-amber-500/20 to-orange-400/20'} mb-4 flex items-center justify-center`}>
                            <span className="text-3xl">📚</span>
                          </div>
                          <h4 className="text-lg font-medium text-white mb-2">
                            {resourceTab === 'notes' ? `Chapter ${i + 1} Notes` :
                              resourceTab === 'classes' ? `Live Session ${i + 1}` :
                                `Past Paper ${2023 - i}`}
                          </h4>
                          <p className="text-sm text-slate-300">
                            {resourceTab === 'notes' ? 'Comprehensive study material with examples' :
                              resourceTab === 'classes' ? 'Interactive session with expert instructor' :
                                'Complete exam paper with solutions'}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats bar - improved contrast */}
            <div className="flex justify-center gap-8 mb-12">
              {activeResourcePanel.stats.map((stat, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 w-40">
                  <div className={`h-2 ${index === 0 ? 'bg-gradient-to-r from-cyan-500 to-teal-400' : index === 1 ? 'bg-gradient-to-r from-teal-400 to-emerald-400' : 'bg-gradient-to-r from-emerald-400 to-green-400'}`}></div>
                  <div className="p-6 text-center">
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action area - improved contrast */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-400/20 backdrop-blur-md border border-white/20">
                <div className="flex-1 text-left">
                  <p className="text-lg text-white mb-2">
                    {activeResourcePanel.intro}
                  </p>
                  <p className="text-sm text-slate-300">
                    Updated daily with new resources
                  </p>
                </div>
                <Link
                  to="/class"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore All Classes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community Voices - Redesigned Testimonials */}
        <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #DFF2FC 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #DFF2FC 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Subject Showcase Header */}
            <div className="mb-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-purple-300"></span>
                  <span className="text-[13px] font-medium tracking-wide text-purple-200">Subject library</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                  Expert resources<br />for every subject.
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Comprehensive study materials designed by top performers and subject specialists.
                </p>
              </div>
            </div>

            {/* Subject Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mathematics */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl text-white">x²</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mathematics</h3>
                <p className="text-slate-400 text-sm mb-4">
                  From algebra to calculus, master problem-solving techniques with step-by-step solutions.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>126+ resources</span>
                </div>
              </div>

              {/* Physics */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-400/20 flex items-center justify-center">
                    <span className="text-2xl text-white">⚛</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs">Lab Focused</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Physics</h3>
                <p className="text-slate-400 text-sm mb-4">
                  From mechanics to quantum, with practical experiments and detailed mark schemes.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>875+ resources</span>
                </div>
              </div>

              {/* Chemistry */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-400/20 flex items-center justify-center">
                    <span className="text-2xl text-white">⚗</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">Practical</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Chemistry</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Organic, inorganic, and physical chemistry with lab techniques and past papers.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>642+ resources</span>
                </div>
              </div>

              {/* Biology */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-400/20 flex items-center justify-center">
                    <span className="text-2xl text-white">🧬</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">Research</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Biology</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Cell biology to ecology, with IA guides and fieldwork techniques.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>892+ resources</span>
                </div>
              </div>

              {/* Computer Science */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-400/20 flex items-center justify-center">
                    <span className="text-2xl text-white">💻</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">Coding</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Computer Science</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Programming fundamentals, algorithms, and computational thinking.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>1.2K+ resources</span>
                </div>
              </div>

              {/* History */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-400/20 flex items-center justify-center">
                    <span className="text-2xl text-white">📜</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs">Essays</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">History</h3>
                <p className="text-slate-400 text-sm mb-4">
                  World events, source analysis, and essay structures for top grades.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>523+ resources</span>
                </div>
              </div>

              {/* English */}
              <div className="group bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500/20 to-red-400/20 flex items-center justify-center">
                    <span className="text-2xl text-white">✍</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs">Literature</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">English</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Language analysis, creative writing, and critical thinking skills.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>IB • A-Level • IGCSE</span>
                  <span>786+ resources</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <div className="w-full rounded-[2rem] bg-[#34495E] p-12 text-center border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Subtle decorative element */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                  <h3 className="text-3xl md:text-4xl font-normal text-white tracking-tight">
                    Can't find your subject?
                  </h3>
                  <p className="text-lg text-slate-200 max-w-xl mx-auto leading-relaxed font-light">
                    We're always expanding our library. Let us know what subjects you need most.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-block text-lg font-medium text-white hover:text-slate-200 transition-colors"
                  >
                    Request a Subject
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Redesigned */}
        <section id="faq" className="py-32 px-6 lg:px-8 relative" style={{ minHeight: '80vh' }}>
          {/* Background accent */}
          <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #DFF2FC 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}></div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column - Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-200"></span>
                <span className="text-[13px] font-medium tracking-wide text-teal-200 uppercase">Common questions</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-slate-50 tracking-tight leading-tight">
                Just the important stuff.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We know you're busy. Here's the straight talk on how POP works, what it costs (nothing), and why it's different.
              </p>

              {/* Human Element - Contact Card */}
              <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-colors">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    ?
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Still have questions?</h4>
                    <p className="text-sm text-slate-400 mb-4">Chat with our student mentors directly.</p>
                    <Link to="/contact" className="text-sm font-medium text-teal-200 hover:text-teal-100 transition-colors flex items-center gap-2">
                      Send us a message <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "Is this actually free? What's the catch?",
                  a: "No catch. We're a student-led non-profit funded by alumni donations. We believe high-quality revision materials shouldn't be paywalled."
                },
                {
                  q: "Do you cover my specific exam board?",
                  a: "Most likely. We focus heavily on IB, Cambridge (CIE), and Edexcel for both IGCSE and A-Levels. If you don't see your board, drop us a request."
                },
                {
                  q: "Who writes these notes?",
                  a: "Students who got the grades. Every resource is created by alumni who scored 7s (IB) or A*s, then verified by our subject leads."
                },
                {
                  q: "Can I contribute my own notes?",
                  a: "Absolutely. That's how we grow. If you have top-tier notes, you can submit them for review. If they pass our quality check, we'll publish them (with credit!)."
                },
                {
                  q: "I'm stuck on a specific problem. Can you help?",
                  a: "Yes! Join one of our weekly 'Studio Hours' or live clinics. It's a chill space to ask mentors specific questions and get unstuck."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-6 rounded-3xl border border-white/10 bg-[#1F2B3A]/40 hover:bg-[#1F2B3A]/60 transition-all duration-300 cursor-pointer ${openFAQ === i ? 'ring-1 ring-teal-500/30' : ''}`}
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className={`text-lg font-medium transition-colors ${openFAQ === i ? 'text-teal-200' : 'text-slate-100 group-hover:text-white'}`}>
                      {item.q}
                    </h3>
                    <span className={`mt-1 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFAQ === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </div>
                  <div className={`grid transition-all duration-300 ease-in-out ${openFAQ === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-slate-300 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Redesigned */}
        <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative">
            {/* Decorative background blob */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 rounded-[2.5rem] bg-[#1F2B3A] border border-white/10 p-8 md:p-16 overflow-hidden">
              {/* Inner content wrapper for asymmetry */}
              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12">

                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-200 tracking-wide uppercase">
                    <span>✨</span>
                    <span>Student-led & Non-profit</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
                    Made for ANS Students,<br />
                    <span className="text-slate-400">by ANS Students</span>
                  </h2>

                  <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                    Stop drowning in generic revision guides. Get the notes, mocks, and clinics built specifically for our curriculum.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                    <Link
                      to="/sign-up"
                      className="px-8 py-4 rounded-2xl bg-slate-50 text-slate-900 font-semibold text-lg hover:bg-teal-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    >
                      Join the cohort
                    </Link>
                    <Link
                      to="/resources"
                      className="px-6 py-4 rounded-2xl text-slate-300 font-medium hover:text-white transition-colors"
                    >
                      Preview resources
                    </Link>
                  </div>
                </div>

                {/* Visual Element - Abstract Stats/Community feel */}
                <div className="w-full lg:w-1/3">
                  <div className="relative aspect-square max-w-xs mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute inset-4 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center p-6">
                        <span className="block text-4xl font-bold text-white mb-1">100%</span>
                        <span className="text-sm text-slate-400 uppercase tracking-widest">Free forever</span>
                      </div>
                    </div>
                    {/* Floating badges */}
                    <div className="absolute -top-2 right-0 px-4 py-2 bg-[#303A52] border border-white/10 rounded-xl shadow-xl text-xs text-teal-200">
                      🌱 Community funded
                    </div>
                    <div className="absolute bottom-4 -left-4 px-4 py-2 bg-[#303A52] border border-white/10 rounded-xl shadow-xl text-xs text-indigo-200">
                      🎓 Alumni verified
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
```

### File: `./src/pages/FlashcardSet.js`

```javascript
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, RotateCw, Check, X, HelpCircle, Star, BookOpen, Users } from "lucide-react";
import FloatingNavbar from "../components/Layout/FloatingNavbar";
import "../styles/FlashcardSet.css";

// Mock data for different flashcard sets
const flashcardSetsData = {
  'igcse-physics': {
    id: 'igcse-physics',
    title: "Physics — Co-ordinated Sciences",
    description: "Forces, electricity, energy, and waves tailored to ANS Co-ordinated scheme",
    category: "Co-ordinated Sciences",
    difficulty: "Intermediate",
    cards: [
      { id: 1, front: "Newton's First Law", back: "An object remains at rest or in uniform motion unless acted upon by a force", difficulty: "easy" },
      { id: 2, front: "Ohm's Law", back: "V = IR (Voltage = Current × Resistance)", difficulty: "medium" },
      { id: 3, front: "Kinetic Energy Formula", back: "KE = 1/2 mv²", difficulty: "medium" },
      { id: 4, front: "Power Formula (Electricity)", back: "P = IV", difficulty: "medium" },
      { id: 5, front: "Refraction", back: "Bending of light as it passes from one medium to another", difficulty: "easy" },
      { id: 6, front: "Isotope", back: "Atoms of the same element with different numbers of neutrons", difficulty: "medium" },
      { id: 7, front: "Half-life", back: "Time taken for half the radioactive nuclei to decay", difficulty: "hard" },
      { id: 8, front: "Vector Quantity", back: "Quantity with both magnitude and direction (e.g., velocity)", difficulty: "medium" },
      { id: 9, front: "Scalar Quantity", back: "Quantity with only magnitude (e.g., speed)", difficulty: "easy" },
      { id: 10, front: "Fleming's Left Hand Rule", back: "Thumb=Motion, First Finger=Field, Second Finger=Current", difficulty: "hard" }
    ]
  },
  'igcse-chemistry': {
    id: 'igcse-chemistry',
    title: "Chemistry — Co-ordinated Sciences",
    description: "Atomic structure, bonding, and reactions, synced with ANS past paper style",
    category: "Co-ordinated Sciences",
    difficulty: "Intermediate",
    cards: [
      { id: 1, front: "Covalent Bond", back: "Sharing of electron pairs between atoms", difficulty: "medium" },
      { id: 2, front: "Ionic Bond", back: "Electrostatic attraction between oppositely charged ions", difficulty: "medium" },
      { id: 3, front: "pH Scale", back: "Measure of acidity or alkalinity (0-14)", difficulty: "easy" },
      { id: 4, front: "Exothermic Reaction", back: "Reaction that releases heat energy to surroundings", difficulty: "easy" },
      { id: 5, front: "Endothermic Reaction", back: "Reaction that absorbs heat energy from surroundings", difficulty: "easy" },
      { id: 6, front: "Mole", back: "Amount of substance containing 6.02 x 10²³ particles", difficulty: "hard" },
      { id: 7, front: "Catalyst", back: "Substance that speeds up reaction without being used up", difficulty: "medium" },
      { id: 8, front: "Oxidation", back: "Loss of electrons or gain of oxygen", difficulty: "medium" },
      { id: 9, front: "Reduction", back: "Gain of electrons or loss of oxygen", difficulty: "medium" },
      { id: 10, front: "Isomer", back: "Molecules with same molecular formula but different structure", difficulty: "hard" }
    ]
  },
  'igcse-biology': {
    id: 'igcse-biology',
    title: "Biology — Co-ordinated Sciences",
    description: "Cells, organisation, and ecology, using ANS-style diagrams and questions",
    category: "Co-ordinated Sciences",
    difficulty: "Intermediate",
    cards: [
      { id: 1, front: "Mitochondria", back: "Site of aerobic respiration", difficulty: "medium" },
      { id: 2, front: "Ribosome", back: "Site of protein synthesis", difficulty: "medium" },
      { id: 3, front: "Osmosis", back: "Movement of water from high to low water potential through semi-permeable membrane", difficulty: "hard" },
      { id: 4, front: "Enzyme", back: "Biological catalyst made of protein", difficulty: "medium" },
      { id: 5, front: "Photosynthesis Equation", back: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", difficulty: "hard" },
      { id: 6, front: "Xylem", back: "Transports water and minerals up the plant", difficulty: "medium" },
      { id: 7, front: "Phloem", back: "Transports sugars (sucrose) and amino acids", difficulty: "medium" },
      { id: 8, front: "Homeostasis", back: "Maintenance of constant internal environment", difficulty: "hard" },
      { id: 9, front: "Pathogen", back: "Disease-causing organism (virus, bacteria, fungi)", difficulty: "easy" },
      { id: 10, front: "Allele", back: "Different version of a gene", difficulty: "medium" }
    ]
  },
  'igcse-math': {
    id: 'igcse-math',
    title: "IGCSE Mathematics (Core/Extended)",
    description: "Topic-by-topic revision with equation sheets and past-paper style questions",
    category: "IGCSE",
    difficulty: "Advanced",
    cards: [
      { id: 1, front: "Pythagoras Theorem", back: "a² + b² = c² (for right-angled triangles)", difficulty: "easy" },
      { id: 2, front: "Quadratic Formula", back: "x = (-b ± √(b² - 4ac)) / 2a", difficulty: "hard" },
      { id: 3, front: "Area of Circle", back: "πr²", difficulty: "easy" },
      { id: 4, front: "Circumference of Circle", back: "2πr or πd", difficulty: "easy" },
      { id: 5, front: "Volume of Cylinder", back: "πr²h", difficulty: "medium" },
      { id: 6, front: "SOH CAH TOA", back: "Sin=O/H, Cos=A/H, Tan=O/A", difficulty: "medium" },
      { id: 7, front: "Gradient of Line", back: "(y₂ - y₁) / (x₂ - x₁)", difficulty: "medium" },
      { id: 8, front: "Equation of Line", back: "y = mx + c", difficulty: "easy" },
      { id: 9, front: "Sine Rule", back: "a/sinA = b/sinB = c/sinC", difficulty: "hard" },
      { id: 10, front: "Cosine Rule", back: "a² = b² + c² - 2bc cosA", difficulty: "hard" }
    ]
  },
  'igcse-business': {
    id: 'igcse-business',
    title: "IGCSE Business",
    description: "Case study-led classes aligned with ANS past paper questions and style",
    category: "IGCSE",
    difficulty: "Intermediate",
    cards: [
      { id: 1, front: "Opportunity Cost", back: "The next best alternative foregone", difficulty: "medium" },
      { id: 2, front: "Added Value", back: "Difference between selling price and cost of raw materials", difficulty: "medium" },
      { id: 3, front: "Sole Trader", back: "Business owned and operated by one person", difficulty: "easy" },
      { id: 4, front: "Partnership", back: "Business owned by 2-20 people", difficulty: "easy" },
      { id: 5, front: "Limited Liability", back: "Shareholders only lose amount invested if business fails", difficulty: "medium" },
      { id: 6, front: "Stakeholder", back: "Anyone with an interest in the business", difficulty: "easy" },
      { id: 7, front: "Market Segmentation", back: "Dividing market into groups with similar characteristics", difficulty: "medium" },
      { id: 8, front: "Product Life Cycle", back: "Stages product goes through: Intro, Growth, Maturity, Decline", difficulty: "medium" },
      { id: 9, front: "Economies of Scale", back: "Lower average costs as scale of production increases", difficulty: "hard" },
      { id: 10, front: "Break-even Point", back: "Level of output where Total Revenue = Total Costs", difficulty: "hard" }
    ]
  },
  'igcse-english': {
    id: 'igcse-english',
    title: "IGCSE English Language",
    description: "Reading, writing, and summary practice with ANS-style exam prompts",
    category: "IGCSE",
    difficulty: "Intermediate",
    cards: [
      { id: 1, front: "Metaphor", back: "Direct comparison without using 'like' or 'as'", difficulty: "easy" },
      { id: 2, front: "Simile", back: "Comparison using 'like' or 'as'", difficulty: "easy" },
      { id: 3, front: "Personification", back: "Giving human qualities to non-human things", difficulty: "medium" },
      { id: 4, front: "Alliteration", back: "Repetition of initial consonant sounds", difficulty: "easy" },
      { id: 5, front: "Hyperbole", back: "Exaggeration for effect", difficulty: "medium" },
      { id: 6, front: "Rhetorical Question", back: "Question asked for effect, not requiring answer", difficulty: "medium" },
      { id: 7, front: "Imperative", back: "Command or instruction verb", difficulty: "medium" },
      { id: 8, front: "Emotive Language", back: "Words chosen to evoke strong emotion", difficulty: "medium" },
      { id: 9, front: "Juxtaposition", back: "Placing two contrasting ideas close together", difficulty: "hard" },
      { id: 10, front: "Tone", back: "The writer's attitude towards the subject", difficulty: "hard" }
    ]
  },
  'act-science': {
    id: 'act-science',
    title: "ACT (Science Reasoning)",
    description: "Data representation, research summaries, and conflicting viewpoints",
    category: "ACT",
    difficulty: "Advanced",
    cards: [
      { id: 1, front: "Independent Variable", back: "Variable changed by the experimenter (x-axis)", difficulty: "medium" },
      { id: 2, front: "Dependent Variable", back: "Variable measured in response (y-axis)", difficulty: "medium" },
      { id: 3, front: "Control Group", back: "Group not exposed to treatment, used for comparison", difficulty: "easy" },
      { id: 4, front: "Direct Relationship", back: "As one variable increases, the other increases", difficulty: "easy" },
      { id: 5, front: "Inverse Relationship", back: "As one variable increases, the other decreases", difficulty: "easy" },
      { id: 6, front: "Hypothesis", back: "Proposed explanation made on basis of limited evidence", difficulty: "medium" },
      { id: 7, front: "Interpolation", back: "Estimating value within the range of data points", difficulty: "hard" },
      { id: 8, front: "Extrapolation", back: "Estimating value outside the range of data points", difficulty: "hard" },
      { id: 9, front: "pH < 7", back: "Acidic", difficulty: "easy" },
      { id: 10, front: "pH > 7", back: "Basic (Alkaline)", difficulty: "easy" }
    ]
  },
  'sat': {
    id: 'sat',
    title: "SAT (Math & Evidence-Based Reading)",
    description: "Math, reading, and writing sections with question analysis and time strategies",
    category: "SAT",
    difficulty: "Advanced",
    cards: [
      { id: 1, front: "Linear Equation Form", back: "y = mx + b", difficulty: "easy" },
      { id: 2, front: "Quadratic Vertex Form", back: "y = a(x-h)² + k", difficulty: "hard" },
      { id: 3, front: "Difference of Squares", back: "a² - b² = (a+b)(a-b)", difficulty: "medium" },
      { id: 4, front: "Semicolon Usage", back: "Connects two independent clauses", difficulty: "medium" },
      { id: 5, front: "Colon Usage", back: "Introduce list, explanation, or quote after independent clause", difficulty: "medium" },
      { id: 6, front: "Subject-Verb Agreement", back: "Singular subject takes singular verb, plural takes plural", difficulty: "easy" },
      { id: 7, front: "Mean", back: "Average (sum of values / number of values)", difficulty: "easy" },
      { id: 8, front: "Median", back: "Middle value when ordered", difficulty: "easy" },
      { id: 9, front: "Mode", back: "Most frequent value", difficulty: "easy" },
      { id: 10, front: "Pythagorean Triples", back: "3-4-5, 5-12-13, 8-15-17", difficulty: "medium" }
    ]
  }
};

const FlashcardSet = () => {
  const { id } = useParams();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState({
    correct: 0,
    incorrect: 0,
    remaining: 0,
  });
  const [studyMode, setStudyMode] = useState("review"); // "review" or "test"
  const [studyStarted, setStudyStarted] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null); // in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [testStartTime, setTestStartTime] = useState(null);

  const set = flashcardSetsData[id];

  useEffect(() => {
    if (set) {
      setProgress({
        correct: 0,
        incorrect: 0,
        remaining: set.cards.length,
      });
      setCurrentCardIndex(0);
      setFlipped(false);
      setStudyStarted(false);
    }
  }, [id, set]);

  // Timer effect for test mode
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timerActive && timeLeft === 0) {
      // Time's up, mark remaining cards as incorrect
      handleTestComplete();
    }
  }, [timerActive, timeLeft, studyMode]);

  const handleTestComplete = () => {
    setTimerActive(false);
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - testStartTime) / 1000);

    // Mark remaining cards as incorrect
    const remainingCards = set.cards.slice(currentCardIndex);
    const newTestResults = [
      ...testResults,
      ...remainingCards.map(card => ({
        id: card.id,
        question: card.front,
        correctAnswer: card.back,
        userAnswer: "",
        isCorrect: false,
        timeSpent: 0
      }))
    ];

    setTestResults(newTestResults);
    setProgress({
      correct: progress.correct,
      incorrect: progress.incorrect + remainingCards.length,
      remaining: 0
    });
  };

  if (!set) {
    return (
      <div className="flashcard-set-not-found">
        <FloatingNavbar />
        <div className="container">
          <h1>Flashcard Set Not Found</h1>
          <p>The flashcard set you're looking for doesn't exist.</p>
          <Link to="/flashcards" className="back-link">
            <ArrowLeft size={16} />
            Back to Flashcards
          </Link>
        </div>
      </div>
    );
  }

  const currentCard = set.cards[currentCardIndex];
  const progressPercentage = ((currentCardIndex + 1) / set.cards.length) * 100;

  const handleFlip = () => {
    if (studyMode === "review") {
      setFlipped(!flipped);
    }
  };

  const handleNextCard = (isCorrect) => {
    if (studyMode === "test") {
      // For test mode, save the result
      const endTime = new Date();
      const timeSpent = Math.floor((endTime - testStartTime) / 1000);

      const newResult = {
        id: currentCard.id,
        question: currentCard.front,
        correctAnswer: currentCard.back,
        userAnswer: userAnswer,
        isCorrect: isCorrect,
        timeSpent: timeSpent
      };

      setTestResults([...testResults, newResult]);
    }

    if (isCorrect) {
      setProgress({
        ...progress,
        correct: progress.correct + 1,
        remaining: progress.remaining - 1,
      });
    } else {
      setProgress({
        ...progress,
        incorrect: progress.incorrect + 1,
        remaining: progress.remaining - 1,
      });
    }

    setFlipped(false);
    setUserAnswer("");

    if (currentCardIndex < set.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // Study session completed
      if (studyMode === "test") {
        setTimerActive(false);
        setStudyStarted(false);
      } else {
        setStudyStarted(false);
      }
    }
  };

  const startStudy = (mode) => {
    setStudyMode(mode);
    setStudyStarted(true);
    setCurrentCardIndex(0);
    setProgress({
      correct: 0,
      incorrect: 0,
      remaining: set.cards.length,
    });
    setFlipped(false);
    setUserAnswer("");

    if (mode === "test") {
      setTestResults([]);
      setTestStartTime(new Date());
      setTimeLeft(set.cards.length * 15); // 15 seconds per card
      setTimerActive(true);
    } else {
      setTimerActive(false);
      setTimeLeft(null);
    }
  };

  const resetStudy = () => {
    setStudyStarted(false);
    setCurrentCardIndex(0);
    setFlipped(false);
    setProgress({
      correct: 0,
      incorrect: 0,
      remaining: set.cards.length,
    });
  };

  if (!studyStarted) {
    return (
      <div className="flashcard-set-landing">
        <FloatingNavbar />
        <div className="container">
          <Link to="/flashcards" className="back-link">
            <ArrowLeft size={16} />
            Back to Flashcards
          </Link>

          <div className="set-header">
            <h1 className="set-title">{set.title}</h1>
            <p className="set-description">{set.description}</p>

            <div className="set-info">
              <div className="info-item">
                <BookOpen size={18} />
                <span>{set.cards.length} cards</span>
              </div>
              <div className="info-item">
                <Star size={18} />
                <span>{set.difficulty}</span>
              </div>
              <div className="info-item category">
                <span>{set.category}</span>
              </div>
            </div>
          </div>

          <div className="study-modes">
            <h2>Choose Study Mode</h2>
            <div className="mode-cards">
              <div className="mode-card" onClick={() => startStudy("review")}>
                <div className="mode-icon">
                  <BookOpen size={32} />
                </div>
                <h3>Review Mode</h3>
                <p>Study cards at your own pace. Flip cards to see answers.</p>
              </div>

              <div className="mode-card" onClick={() => startStudy("test")}>
                <div className="mode-icon">
                  <Users size={32} />
                </div>
                <h3>Test Mode</h3>
                <p>Challenge yourself with timed questions and immediate feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Study session completed
  if (currentCardIndex >= set.cards.length) {
    if (studyMode === "test") {
      const endTime = new Date();
      const totalTime = Math.floor((endTime - testStartTime) / 1000);
      const percentage = Math.round((progress.correct / set.cards.length) * 100);

      return (
        <div className="flashcard-set-complete">
          <FloatingNavbar />
          <div className="container">
            <h1>Test Results</h1>
            <div className="test-summary">
              <div className="score-card">
                <h2>{percentage}%</h2>
                <p>Score</p>
                <div className="score-detail">
                  {progress.correct} of {set.cards.length} correct
                </div>
              </div>

              <div className="test-stats">
                <div className="test-stat">
                  <div className="stat-label">Time Taken</div>
                  <div className="stat-value">{Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}</div>
                </div>
                <div className="test-stat">
                  <div className="stat-label">Avg. Time/Question</div>
                  <div className="stat-value">{Math.floor(totalTime / set.cards.length)}s</div>
                </div>
              </div>
            </div>

            <h3>Review Your Answers</h3>
            <div className="results-review">
              {testResults.map((result, index) => (
                <div key={result.id} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="result-header">
                    <span className="result-number">Q{index + 1}</span>
                    <span className={`result-status ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                      {result.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="result-question">
                    <strong>Question:</strong> {result.question}
                  </div>
                  <div className="result-answer">
                    <strong>Your Answer:</strong> {result.userAnswer || 'No answer provided'}
                  </div>
                  {!result.isCorrect && (
                    <div className="result-correct">
                      <strong>Correct Answer:</strong> {result.correctAnswer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="completion-actions">
              <button className="btn btn-secondary" onClick={resetStudy}>
                Retake Test
              </button>
              <Link to="/flashcards" className="btn btn-primary">
                Back to Sets
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      // Review mode completion
      return (
        <div className="flashcard-set-complete">
          <FloatingNavbar />
          <div className="container">
            <h1>Study Session Complete!</h1>
            <div className="results">
              <div className="result-card correct">
                <Check size={32} />
                <div className="result-content">
                  <h2>{progress.correct}</h2>
                  <p>Correct</p>
                </div>
              </div>
              <div className="result-card incorrect">
                <X size={32} />
                <div className="result-content">
                  <h2>{progress.incorrect}</h2>
                  <p>Incorrect</p>
                </div>
              </div>
              <div className="result-card total">
                <Star size={32} />
                <div className="result-content">
                  <h2>{set.cards.length}</h2>
                  <p>Total Cards</p>
                </div>
              </div>
            </div>

            <div className="completion-actions">
              <button className="btn btn-secondary" onClick={resetStudy}>
                Study Again
              </button>
              <Link to="/flashcards" className="btn btn-primary">
                Back to Sets
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flashcard-set-study">
      <FloatingNavbar />
      <div className="container">
        <div className="study-header">
          <Link to="/flashcards" className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Sets</span>
          </Link>

          <div className="study-title">
            <h1>{set.title}</h1>
            <p>{studyMode === "review" ? "Review Mode" : "Test Mode"}</p>
          </div>

          <div className="study-progress-indicator">
            {studyMode === "test" && timeLeft !== null && (
              <div className="timer">
                <div className="timer-text">
                  Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
              </div>
            )}
            <div className="progress-text">
              <span className="current">{currentCardIndex + 1}</span>/
              <span className="total">{set.cards.length}</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="study-content">
          <div className="flashcard-stats">
            <div className="stat correct">
              <div className="stat-value">{progress.correct}</div>
              <div className="stat-label">Correct</div>
            </div>
            <div className="stat incorrect">
              <div className="stat-value">{progress.incorrect}</div>
              <div className="stat-label">Incorrect</div>
            </div>
            <div className="stat remaining">
              <div className="stat-value">{progress.remaining}</div>
              <div className="stat-label">Remaining</div>
            </div>
          </div>

          <div
            className={`flashcard ${flipped ? "flipped" : ""} ${currentCard.difficulty} ${studyMode}`}
            onClick={handleFlip}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <div className="card-content">
                  <p>{currentCard.front}</p>
                </div>
                <div className="card-footer">
                  <div className="difficulty-indicator">
                    <span className={`difficulty ${currentCard.difficulty}`}>
                      {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                    </span>
                  </div>
                  <div className="flip-hint">
                    <RotateCw size={16} />
                    <span>{studyMode === "review" ? "Click to flip" : "Think of the answer, then flip"}</span>
                  </div>
                </div>
              </div>
              <div className="flashcard-back">
                <div className="card-content">
                  <p>{currentCard.back}</p>
                </div>
                <div className="card-footer">
                  <div className="difficulty-indicator">
                    <span className={`difficulty ${currentCard.difficulty}`}>
                      {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                    </span>
                  </div>
                  <div className="flip-hint">
                    <RotateCw size={16} />
                    <span>Click to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flashcard-actions">
            {studyMode === "test" ? (
              <>
                <button
                  className="action-btn help"
                  aria-label="Help"
                >
                  <HelpCircle size={24} />
                </button>
                <input
                  type="text"
                  className="answer-input"
                  placeholder="Type your answer..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                <button
                  className="action-btn submit"
                  onClick={() => {
                    setFlipped(true);
                    // Simple answer matching for demo
                    const isCorrect = userAnswer.toLowerCase().trim() === currentCard.back.toLowerCase().trim();
                    setTimeout(() => handleNextCard(isCorrect), 1500);
                  }}
                  aria-label="Submit answer"
                >
                  Check
                </button>
              </>
            ) : (
              <>
                <button
                  className="action-btn help"
                  aria-label="Help"
                >
                  <HelpCircle size={24} />
                </button>
                <button
                  className="action-btn incorrect"
                  onClick={() => handleNextCard(false)}
                  aria-label="Mark as incorrect"
                >
                  <X size={32} />
                </button>
                <button
                  className="action-btn correct"
                  onClick={() => handleNextCard(true)}
                  aria-label="Mark as correct"
                >
                  <Check size={32} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardSet;
```

### File: `./src/pages/Classes.js`

```javascript
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import '../styles/ClassesRedesign.css';
import { Search, ChevronDown, Clock, Calendar, BookOpen, ArrowRight, Target, Atom, FlaskConical, Dna, Calculator, Briefcase, PenTool, Brain } from 'lucide-react';

// Mock data
const classesData = [
  {
    id: 'igcse-physics',
    name: 'Physics — Co-ordinated Sciences',
    subjectIcon: <Atom size={24} />,
    progress: 72,
    topicsDone: '8/11',
    miniMocks: '2 done',
    nextUp: 'Work & Energy recap',
    category: 'coordinated-science',
    description: 'Forces, electricity, energy, and waves tailored to ANS Co-ordinated scheme.',
    tags: ['all', 'progress', 'recent'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'igcse-chemistry',
    name: 'Chemistry — Co-ordinated Sciences',
    subjectIcon: <FlaskConical size={24} />,
    progress: 41,
    topicsDone: '4/11',
    miniMocks: '1 done',
    nextUp: 'Ionic & covalent bonding',
    category: 'coordinated-science',
    description: 'Atomic structure, bonding, and reactions, synced with ANS past paper style.',
    tags: ['all', 'progress'],
    color: 'from-teal-500 to-emerald-400'
  },
  {
    id: 'igcse-biology',
    name: 'Biology — Co-ordinated Sciences',
    subjectIcon: <Dna size={24} />,
    progress: 19,
    topicsDone: '0/11',
    miniMocks: '0 done',
    nextUp: 'Cell structure intro',
    category: 'coordinated-science',
    description: 'Cells, organisation, and ecology, using ANS-style diagrams and questions.',
    tags: ['all', 'recent'],
    color: 'from-green-500 to-lime-400'
  },
  {
    id: 'igcse-math',
    name: 'IGCSE Mathematics (Core/Extended)',
    subjectIcon: <Calculator size={24} />,
    progress: 58,
    topicsDone: 'Paper 2 focus',
    miniMocks: '3 done',
    nextUp: 'Algebra inequalities',
    category: 'igcse',
    description: 'Topic-by-topic revision with equation sheets and past-paper style questions.',
    tags: ['all', 'progress', 'recent'],
    color: 'from-orange-500 to-amber-400'
  },
  {
    id: 'igcse-business',
    name: 'IGCSE Business',
    subjectIcon: <Briefcase size={24} />,
    progress: 26,
    topicsDone: 'Unit 1 done',
    miniMocks: '1 done',
    nextUp: 'Marketing mix examples',
    category: 'igcse',
    description: 'Case study-led classes aligned with ANS past paper questions and style.',
    tags: ['all', 'recent'],
    color: 'from-indigo-500 to-purple-400'
  },
  {
    id: 'igcse-english',
    name: 'IGCSE English Language',
    subjectIcon: <PenTool size={24} />,
    progress: 64,
    topicsDone: 'Writing drill',
    miniMocks: '2 done',
    nextUp: 'Summary question practice',
    category: 'igcse',
    description: 'Reading, writing, and summary practice with ANS-style exam prompts.',
    tags: ['all', 'progress'],
    color: 'from-pink-500 to-rose-400'
  },
  {
    id: 'act-science',
    name: 'ACT (Science Reasoning)',
    subjectIcon: <Brain size={24} />,
    progress: 0,
    topicsDone: '0/6',
    miniMocks: '0 done',
    nextUp: 'Data Representation',
    category: 'act',
    description: 'Data representation, research summaries, and conflicting viewpoints.',
    tags: ['all', 'recent'],
    color: 'from-red-500 to-orange-400'
  }
];

const ClassCard = ({ classData }) => {
  // Mock user state - in a real app this would come from context/props
  const isNewUser = false;

  return (
    <Link to={`/class/${classData.id}`} className="class-card-new group">
      <div className="card-top">
        <div className={`subject-icon bg-gradient-to-br ${classData.color} bg-opacity-20`}>
          {classData.subjectIcon}
        </div>
        <div className="progress-pill">{classData.progress}%</div>
      </div>

      <div>
        <h3 className="card-title group-hover:text-blue-300 transition-colors">{classData.name}</h3>
        <p className="card-desc">{classData.description}</p>
      </div>

      <div className="card-meta">
        <div className="meta-item">
          <BookOpen size={14} />
          <span>{classData.topicsDone} topics</span>
        </div>
        <div className="meta-item">
          <Clock size={14} />
          <span>{classData.miniMocks}</span>
        </div>
      </div>

      <button className="card-btn">
        {isNewUser ? 'Start Studying' : 'Continue Studying'}
        <ArrowRight size={16} />
      </button>
    </Link>
  );
};

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Ensure body background matches Home page
    const gradient = 'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)';
    document.body.style.background = gradient;
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const filteredClasses = classesData.filter(classItem => {
    const matchesSearch = classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || classItem.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const coordinatedScienceClasses = filteredClasses.filter(c => c.category === 'coordinated-science');
  const igcseClasses = filteredClasses.filter(c => c.category === 'igcse');
  const actClasses = filteredClasses.filter(c => c.category === 'act');

  return (
    <div className="classes-redesign-page">
      {/* Floating Navigation Bar */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-5xl mx-auto bg-[#1F2B3A]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://POPStudying.b-cdn.net/ChatGPT%20Image%20Nov%2021%2C%202025%2C%2010_27_38%20PM%20Background%20Removed.png"
              alt="POP Studying Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-semibold text-white tracking-tight">POP Studying</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <Link to="/classes" className="text-white transition-colors">Classes</Link>
            <Link to="/#focus" className="hover:text-white transition-colors">Focus</Link>
            <Link to="/#library" className="hover:text-white transition-colors">Library</Link>
            <Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="hidden sm:block text-sm font-medium text-white hover:text-white transition-colors">
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="px-5 py-2 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold hover:bg-white transition-colors shadow-lg shadow-white/5"
            >
              Join cohort
            </Link>
          </div>
        </div>
      </header>

      <div className="classes-container">
        {/* HERO SECTION */}
        <section className="classes-hero">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-pill">
                <span className="hero-pill-dot"></span>
                <span className="hero-pill-text">Your Learning Hub</span>
              </div>
              <h1 className="hero-title">
                Pick up where <br />
                you <span>left off.</span>
              </h1>
              <p className="hero-subtitle">
                Track your progress across all subjects, access revision notes, and jump straight into your next lesson.
              </p>
            </div>

            {/* Right side visual: Widgets moved here */}
            <div className="hero-widgets">
              {/* Widget 1: Upcoming Clinics */}
              <div className="sidebar-widget">
                <div className="widget-header">
                  <span className="widget-title">Upcoming Clinics</span>
                  <span className="widget-action">View all</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="clinic-item">
                    <div className="clinic-time">19:00</div>
                    <div className="clinic-info">
                      <h4>IB Physics Clinic</h4>
                      <p>Wave superposition drills</p>
                    </div>
                  </div>
                  <div className="clinic-item">
                    <div className="clinic-time">Fri</div>
                    <div className="clinic-info">
                      <h4>Essay Review</h4>
                      <p>Upload drafts by 5pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Widget 2: Daily Goal */}
              <div className="sidebar-widget goal-card">
                <div className="widget-header">
                  <span className="widget-title text-emerald-200">Daily Goal</span>
                  <Target size={16} className="text-emerald-400" />
                </div>
                <div className="goal-content">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <input type="checkbox" className="goal-checkbox" />
                    </div>
                    <div>
                      <p className="goal-text">Complete 2 Physics topics</p>
                      <span className="goal-subtext">0/2 completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN LAYOUT */}
        <div className="classes-layout-single">

          {/* Main Content */}
          <main className="main-content-full">

            {/* Search & Filter Toolbar */}
            <div className="search-toolbar">
              <div className="search-group">
                <Search className="search-icon-toolbar" size={20} />
                <input
                  type="text"
                  className="search-input-toolbar"
                  placeholder="Search for classes, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="toolbar-divider"></div>

              <div className="filter-group">
                {['All', 'Recent', 'Progress'].map(f => (
                  <button
                    key={f}
                    className={`toolbar-filter-btn ${activeFilter === f.toLowerCase() ? 'active' : ''}`}
                    onClick={() => setActiveFilter(f.toLowerCase())}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Co-ordinated Sciences */}
            {coordinatedScienceClasses.length > 0 && (
              <section className="class-section">
                <div className="section-header">
                  <h2 className="section-title">Co-ordinated Sciences</h2>
                  <span className="section-badge">Double Award</span>
                </div>
                <div className="class-grid">
                  {coordinatedScienceClasses.map(c => (
                    <ClassCard key={c.id} classData={c} />
                  ))}
                </div>
              </section>
            )}

            {/* IGCSE Subjects */}
            {igcseClasses.length > 0 && (
              <section className="class-section">
                <div className="section-header">
                  <h2 className="section-title">IGCSE Subjects</h2>
                  <span className="section-badge">Cambridge / Edexcel</span>
                </div>
                <div className="class-grid">
                  {igcseClasses.map(c => (
                    <ClassCard key={c.id} classData={c} />
                  ))}
                </div>
              </section>
            )}

            {/* ACT Subjects */}
            {actClasses.length > 0 && (
              <section className="class-section">
                <div className="section-header">
                  <h2 className="section-title">ACT</h2>
                  <span className="section-badge">Standardized Test</span>
                </div>
                <div className="class-grid">
                  {actClasses.map(c => (
                    <ClassCard key={c.id} classData={c} />
                  ))}
                </div>
              </section>
            )}

            {filteredClasses.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                No classes found. Try adjusting your search.
              </div>
            )}

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Classes;
```

### File: `./src/pages/SignInPage.js`

```javascript
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div className="auth-page-center">
    <SignIn path="/sign-in" routing="path" />
  </div>
);

export default SignInPage;
```

### File: `./src/pages/AccountCreated.js`

```javascript
import React from 'react';

const AccountCreated = () => (
  <div className="auth-page-center">
    <div className="account-created-box">
      <h2>Account Created!</h2>
      <p>Welcome to POP Studying. Your account was created successfully.</p>
      <a href="/" className="btn">Go to Home</a>
    </div>
  </div>
);

export default AccountCreated;
```

### File: `./src/pages/SignUpPage.js`

```javascript
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div className="auth-page-center">
    <SignUp path="/sign-up" routing="path" afterSignUpUrl="/account-created" />
  </div>
);

export default SignUpPage;
```

### File: `./src/pages/Home.js.backup`

```backup
import React, { useState, useEffect } from 'react';
import Footer from '../components/Layout/Footer';
import { Link } from 'react-router-dom';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('notes');
  const [openFAQ, setOpenFAQ] = useState(null);
  const readinessStats = [
    { subject: 'Math Paper 2', score: '92%', status: 'On track' },
    { subject: 'Physics HL', score: '88%', status: 'Reviewed' },
    { subject: 'Chemistry ATP', score: '86%', status: 'Needs recap' }
  ];
  const focusBlocks = [
    { title: 'Functions', detail: 'IB Math AA', time: '08:30' },
    { title: 'Energetics', detail: 'Chemistry HL', time: '11:00' },
    { title: 'Stoichiometry', detail: 'Chemistry SL', time: '14:30' }
  ];
  const clinics = [
    { title: 'IB Physics Clinic', detail: 'Wave superposition drills · 19:00' },
    { title: 'Essay review window', detail: 'Upload drafts by Friday' }
  ];
  const heroStats = [
    { label: 'Mock readiness avg.', value: '89%' },
    { label: 'Weekly clinics', value: '12' },
    { label: 'Active cohorts', value: '48' }
  ];
  const syllabusBadges = ['IGCSE', 'IB', 'A-Level', 'Mock clinics'];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const previousBodyStyles = {
      backgroundImage: document.body.style.backgroundImage,
      backgroundColor: document.body.style.backgroundColor,
      backgroundAttachment: document.body.style.backgroundAttachment,
      backgroundRepeat: document.body.style.backgroundRepeat,
      backgroundSize: document.body.style.backgroundSize
    };
    const previousHtmlStyles = {
      backgroundImage: document.documentElement.style.backgroundImage,
      backgroundColor: document.documentElement.style.backgroundColor,
      backgroundAttachment: document.documentElement.style.backgroundAttachment,
      backgroundRepeat: document.documentElement.style.backgroundRepeat,
      backgroundSize: document.documentElement.style.backgroundSize
    };
    const gradient = 'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)';
    document.body.style.backgroundImage = gradient;
    document.body.style.backgroundColor = '#3A3F61';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    document.documentElement.style.backgroundImage = gradient;
    document.documentElement.style.backgroundColor = '#3A3F61';
    document.documentElement.style.backgroundAttachment = 'fixed';
    document.documentElement.style.backgroundRepeat = 'no-repeat';
    document.documentElement.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = previousBodyStyles.backgroundImage;
      document.body.style.backgroundColor = previousBodyStyles.backgroundColor;
      document.body.style.backgroundAttachment = previousBodyStyles.backgroundAttachment;
      document.body.style.backgroundRepeat = previousBodyStyles.backgroundRepeat;
      document.body.style.backgroundSize = previousBodyStyles.backgroundSize;
      document.documentElement.style.backgroundImage = previousHtmlStyles.backgroundImage;
      document.documentElement.style.backgroundColor = previousHtmlStyles.backgroundColor;
      document.documentElement.style.backgroundAttachment = previousHtmlStyles.backgroundAttachment;
      document.documentElement.style.backgroundRepeat = previousHtmlStyles.backgroundRepeat;
      document.documentElement.style.backgroundSize = previousHtmlStyles.backgroundSize;
    };
  }, []);

  return (
    <div
      className="home-page-wrapper min-h-screen text-slate-100"
      style={{
        background:
          'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        fontFamily:
          '"Inter", "SF Pro Display", "Satoshi", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}
    >
      {/* Header / Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 border-b border-white/5 bg-[#303A52]/70 backdrop-blur-2xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="text-xs tracking-[0.45em] uppercase text-teal-200/70">POP</span>
            <span className="text-xl font-semibold text-slate-100">Studying</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-sm text-slate-200/80">
            <a href="#resources" className="tracking-wide hover:text-slate-100 transition-colors">Programs</a>
            <a href="#focus" className="tracking-wide hover:text-slate-100 transition-colors">Focus</a>
            <a href="#library" className="tracking-wide hover:text-slate-100 transition-colors">Library</a>
            <a href="#faq" className="tracking-wide hover:text-slate-100 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <Link to="/sign-in" className="text-slate-200/90 hover:text-white transition-colors">Sign in</Link>
            <Link
              to="/sign-up"
              className="px-5 py-2 rounded-full border border-white/15 text-slate-50 hover:border-white/30 transition-colors"
            >
              Join cohort
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 lg:px-12" style={{ minHeight: '100vh' }}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-[15px] uppercase text-teal-200/80 font-bold leading-none">
                <span className="w-2 h-2 rounded-full bg-teal-200/80"></span>
                <span>Built for IB + A level mocks</span>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-[64px] font-semibold leading-tight text-slate-50 tracking-tight">
                  Calm, deliberate prep <br className="hidden md:block" /> for every revision block
                </h1>
                <p className="text-lg text-slate-200/80 leading-relaxed max-w-2xl">
                  Guided study cadences, annotated topic packs, and mock submissions in one trusted hub.
                  Keep momentum across busy terms without neon distractions.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {syllabusBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full border border-white/15 text-sm tracking-wide text-slate-200/90"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/sign-up"
                className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-slate-50 text-base font-medium tracking-wide hover:border-white/30 transition"
              >
                Start my plan
              </Link>
              <Link
                to="/class/preview"
                className="px-6 py-3 rounded-2xl border border-white/10 text-slate-200/80 text-base font-medium hover:text-white transition"
              >
                Browse classes
              </Link>
              <p className="text-sm text-slate-300/80">
                Built by alumni scoring 7s & 45
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 p-4 bg-white/5 text-slate-200/90">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                  <div className="text-2xl font-semibold text-slate-50 mt-2">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-5/12 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(8,12,24,0.35)]">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-300/80">
                <span>Weekly focus</span>
                <span className="text-cyan-100/80">3 of 4 blocks set</span>
              </div>
              <div className="mt-5 space-y-4">
                {focusBlocks.map((block) => (
                  <div key={block.title} className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium text-slate-50">{block.title}</p>
                      <p className="text-sm text-slate-300/80">{block.detail}</p>
                    </div>
                    <span className="text-sm text-cyan-100/80">{block.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#1F2B3A]/70 p-6 shadow-[0_25px_60px_rgba(6,10,25,0.35)] space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300/80">Mock readiness</p>
                <button className="text-sm text-teal-200/80 hover:text-teal-100 transition">
                  Continue practice →
                </button>
              </div>
              <div className="space-y-5">
                {readinessStats.map((stat) => {
                  const statusClass = stat.status === 'Needs recap' ? 'text-purple-200/80' : 'text-teal-200/80';
                  return (
                    <div key={stat.subject} className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-medium text-slate-50">{stat.subject}</p>
                        <p className={`text-sm ${statusClass}`}>{stat.status}</p>
                      </div>
                      <span className="text-lg font-semibold text-slate-100">{stat.score}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                {clinics.map((clinic) => (
                  <div key={clinic.title} className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{clinic.title}</span>
                    <span className="text-sm text-slate-200/85">{clinic.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Cadence Section */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Subtle background texture */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" 
             style={{
               background: 'radial-gradient(circle at 70% 30%, #DFF2FC 0%, transparent 70%)',
               filter: 'blur(60px)'
             }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
          {/* Asymmetrical layout with staggered sections */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 flex-1 items-start">
            {/* Main content - spans 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-200"></span>
                <span className="text-[13px] font-medium tracking-wide text-teal-200">How it actually works</span>
              </div>
              
              <div className="space-y-4">
                <h2
                  className="text-5xl lg:text-6xl font-light text-white leading-[1.1]"
                  style={{ fontFamily: '"Clash Display", "Inter", "Poppins", sans-serif' }}
                >
                  Your week, finally<br />making sense.
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  No endless dashboards. Just a thoughtful Sunday brief that tells you exactly what to focus on, when, and why it matters.
                </p>
              </div>

              {/* Focus blocks with varied heights */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-light text-teal-300">01</span>
                    <span className="text-sm text-slate-400">Monday, 8:30 AM</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">Functions</h3>
                  <p className="text-sm text-slate-400">IB Math AA HL · Topic focus: Composition</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-light text-teal-300">02</span>
                    <span className="text-sm text-slate-400">Wednesday, 2:00 PM</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">Energetics</h3>
                  <p className="text-sm text-slate-400">Chemistry HL · Lab prep notes</p>
                </div>
              </div>

              
            </div>

            <div className="lg:col-span-5 lg:translate-y-16">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 min-h-[200px]">
                <p className="text-sm text-slate-300 leading-relaxed">
                  “The cadence feels like a studio critique: calm, specific, and honest. The structure is there,
                  but there’s still room to breathe. By Week 6, my essays were already sharper.”
                </p>
                <p className="mt-4 text-slate-200 font-medium">— Elina, IB Literature · 44/45</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mock readiness pulse</p>
                <div className="mt-5 space-y-4">
                  {readinessStats.map((stat) => (
                    <div key={stat.subject} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">{stat.subject}</p>
                        <p className="text-lg text-slate-50 font-semibold">{stat.score}</p>
                      </div>
                      <span className="text-sm text-teal-200/80">{stat.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 overflow-hidden min-h-[240px] relative bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1455885666463-1ea8c6d662da?auto=format&fit=crop&w=900&q=80"
                  alt="Study group session"
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#274551]/80 via-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-teal-100/80">Cohort 28 · Studio hours</p>
                  <p className="text-lg font-semibold text-white">Low-light focus lab · Thursday 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Tabbed Interface */}
      <section className="py-20 px-6" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need, and then some</h2>
            <p className="text-xl text-gray-400">Unlimited access to all subjects, all completely free.</p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-1 inline-flex backdrop-blur">
              <button 
                onClick={() => setActiveTab('notes')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'notes' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Revision Notes
              </button>
              <button 
                onClick={() => setActiveTab('quizzes')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'quizzes' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Smart Quizzes
              </button>
              <button 
                onClick={() => setActiveTab('papers')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'papers' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Papers
              </button>
            </div>
          </div>
          
          {/* Content Panels */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'notes' && (
              <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-white/15 bg-gradient-to-br from-indigo-500/40 to-cyan-400/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 104 0V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Concise revision notes</h3>
                    <p className="text-gray-400">Expert-crafted notes that cover everything you need to know</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Mathematics</h4>
                    <p className="text-slate-400 text-sm">Calculus, Algebra, Statistics</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Sciences</h4>
                    <p className="text-slate-400 text-sm">Physics, Chemistry, Biology</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <p className="text-slate-400 text-sm">English, Thai, Literature</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'quizzes' && (
              <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-white/15 bg-gradient-to-br from-emerald-500/40 to-teal-400/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 104 0V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Adaptive practice questions</h3>
                    <p className="text-gray-400">Questions that adapt to your skill level</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="font-medium">Instant feedback</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="font-medium">Detailed explanations</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="font-medium">Progress tracking</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'papers' && (
              <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-white/15 bg-gradient-to-br from-amber-400/40 to-orange-400/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 104 0V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Official past papers</h3>
                    <p className="text-gray-400">Real exam questions from previous years</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">IGCSE Papers</h4>
                    <p className="text-slate-400 text-sm">2015-2023 with mark schemes</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">A-Level Papers</h4>
                    <p className="text-slate-400 text-sm">All major examination boards</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">From students who aced their exams, to classroom teachers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "POP Studying helped me go from a C to an A* in Physics. The notes are concise and the practice questions are perfect."
              </p>
              <div className="font-semibold">Leo</div>
              <div className="text-slate-400 text-sm">A-Level Student</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "As a teacher, I recommend POP Studying to all my students. The quality of content is exceptional and it's completely free."
              </p>
              <div className="font-semibold">Ms. Johnson</div>
              <div className="text-slate-400 text-sm">Mathematics Teacher</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "The past papers with mark schemes saved me hours of study time. I got straight A's in all my sciences!"
              </p>
              <div className="font-semibold">Sarah</div>
              <div className="text-slate-400 text-sm">IGCSE Student</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-20 px-6" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-xl text-slate-400">Everything you need to know about POP Studying.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What is POP Studying?",
                answer: "POP Studying is a free online learning platform that provides revision notes, practice quizzes, and past papers for students studying for their exams."
              },
              {
                question: "Is POP Studying free?",
                answer: "Yes! POP Studying is completely free to use. No hidden costs, no premium subscriptions - everything is available for all students."
              },
              {
                question: "What subjects do you cover?",
                answer: "We cover Mathematics, Physics, Chemistry, Biology, English, and more. All content is aligned with major examination boards including Cambridge and Edexcel."
              },
              {
                question: "How do I sign up?",
                answer: "Just click the 'Sign up free' button and fill in your details. It takes less than 30 seconds to create your account and start learning."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 backdrop-blur rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 border-t border-white/10">
                    <p className="text-slate-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-4">Join the UK's fastest-growing student community</h2>
          <p className="text-xl text-slate-300 mb-8">Start learning today and ace your exams with confidence.</p>
          <Link to="/sign-up" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Sign up free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
```

### File: `./src/pages/LearningPage/LearningPage.css`

```css
/* LearningPage.css - Modern Dramatic Design */
:root {
  /* Colors */
  --primary: #6200ea;       /* Vibrant Purple */
  --primary-light: #9d46ff; /* Light Purple */
  --primary-dark: #0a0047;   /* Deep Dark Purple */
  --primary-rgb: 98, 0, 234;  /* Purple RGB */
  --accent: #00e5ff;         /* Cyan Accent */
  --accent-light: #6effff;   /* Light Cyan */
  --accent-dark: #00b2cc;    /* Dark Cyan */
  --accent-rgb: 0, 229, 255;  /* Cyan RGB */
  --background: #0a0a1a;     /* Deep Blue-Black */
  --surface: #141428;        /* Dark Blue-Gray Surface */
  --surface-dark: #0d0d1a;   /* Darker Surface */
  --card-bg: rgba(18, 18, 31, 0.9);  /* Card Background */
  --text-primary: rgba(255, 255, 255, 0.92);   /* Primary Text */
  --text-secondary: rgba(255, 255, 255, 0.7); /* Secondary Text */
  --text-disabled: rgba(255, 255, 255, 0.38);  /* Disabled Text */
  --error: #cf6679;          /* Error Color */
  
  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-display: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', 'Courier New', monospace;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  /* Shadows */
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 15px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 15px rgba(98, 0, 234, 0.3);

  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* Layout */
  --sidebar-width: 280px;
}

/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Removed radial gradients causing circular overlay */
  background-image: none;
  background-attachment: fixed;
}

/* Learning Container */
.learning-container {
  display: flex;
  min-height: 100vh;
  color: var(--text-primary);
  font-family: var(--font-sans);
  line-height: 1.6;
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: linear-gradient(to bottom, rgba(15, 15, 35, 0.97), rgba(10, 10, 25, 0.97));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transform: translateX(-100%);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  z-index: 40;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg), 0 0 20px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  border-right: 1px solid rgba(var(--primary-rgb), 0.15);
}

.sidebar.open {
  transform: translateX(0);
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(var(--primary-rgb), 0.3);
}

@media (max-width: 1023px) {
  .content-wrapper {
    margin-left: 0;
  }

  .sidebar {
    transform: translateX(-100%);
    width: 300px;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .toggle-sidebar {
    display: flex;
  }

  .top-bar {
    padding: 0 1.5rem;
  }

  .content-inner {
    padding: 2rem 1.25rem;
  }

  .topic-title {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .section-title {
    padding: 1.25rem 1.5rem;
    font-size: 1.35rem;
  }

  .section-content {
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    position: fixed;
    transform: translateX(0);
    top: 0;
    height: 100vh;
    left: 0;
    width: var(--sidebar-width);
  }

  .content-wrapper {
    margin-left: var(--sidebar-width);
    width: calc(100% - var(--sidebar-width));
  }

  .toggle-sidebar {
    display: none;
  }
}

.sidebar-header {
  padding: var(--spacing-lg) var(--spacing-md);
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: linear-gradient(to bottom, rgba(var(--surface-rgb), 0.7), rgba(var(--surface-dark-rgb), 0.5));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: 64px; /* Match top bar height */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
}

.sidebar-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, var(--primary-light), var(--accent), transparent);
  opacity: 0.6;
}

.sidebar-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff; /* Bright white for maximum contrast */
  font-family: var(--font-display);
  letter-spacing: 0.01em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); /* Add shadow for better readability */
  margin-bottom: 1rem;
  white-space: normal; /* Allow text to wrap if needed */
  overflow: visible; /* Ensure text isn't hidden */
  padding: 0.5rem 0;
  border-bottom: 2px solid var(--accent);
  width: 100%; /* Use full width available */
  max-width: none; /* Remove max-width constraint */
}

.sidebar-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(var(--surface-rgb), 0.3);
  border: 1px solid rgba(var(--primary-rgb), 0.1);
  transition: all var(--transition-fast);
}

.sidebar-close-btn:hover {
  color: var(--text-primary);
  background: rgba(var(--surface-rgb), 0.5);
  border-color: rgba(var(--accent-rgb), 0.3);
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-light) var(--surface-dark);
  background: linear-gradient(to bottom, rgba(15, 15, 35, 0), rgba(10, 10, 25, 0.5));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Removed oval background effect */
.sidebar-content::before {
  display: none;
}

.sidebar-content::-webkit-scrollbar {
  width: 4px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, var(--primary-light), var(--accent-dark));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-section {
  margin-bottom: 4rem;
  background: rgba(var(--surface-dark-rgb), 0.4);
  border-radius: var(--radius-lg);
  padding: 2rem;
  border: 1px solid rgba(var(--primary-rgb), 0.15);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.nav-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.7), transparent);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}

.nav-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 0 15px rgba(var(--accent-rgb), 0.1);
}

.nav-section-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--accent-light);
  margin: 0.75rem 0 1.25rem 0;
  padding-left: 1rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 0 10px rgba(var(--accent-rgb), 0.4);
  width: 100%;
  position: relative;
}

.nav-section-title::before {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-light), var(--accent));
  box-shadow: 0 0 8px var(--accent);
  margin-right: 6px;
}

.nav-section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 1rem;
  right: 1rem;
  height: 1px;
  background: linear-gradient(to right, var(--accent), transparent);
  opacity: 0.3;
}

.nav-list {
  list-style: none;
  padding: var(--spacing-sm) 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  width: 100%;
}

.nav-list li {
  margin-bottom: 0.25rem;
  transition: all var(--transition-fast);
  position: relative;
  width: 100%;
}

.nav-item {
  display: block;
  padding: 0.85rem 1rem;
  margin: 0.3rem 0.5rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  border-left: 2px solid transparent;
  background: rgba(var(--surface-rgb), 0.25);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  width: calc(100% - 1rem);
  text-align: left;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.03), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.nav-item:hover {
  background: linear-gradient(to right, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.1));
  color: rgba(255, 255, 255, 1);
  border-left-color: var(--accent);
  transform: translateX(3px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), 0 0 12px rgba(var(--accent-rgb), 0.2);
}

.nav-item:hover::before {
  transform: translateX(100%);
}

.nav-item.active {
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.35), rgba(var(--accent-rgb), 0.15));
  color: var(--accent-light);
  font-weight: 600;
  border-left: 2px solid var(--accent-light);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 12px rgba(var(--accent-rgb), 0.25);
  text-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
  transform: translateX(4px);
}

/* Main content area */
.content-wrapper {
  flex: 1;
  min-height: 100vh;
  background-color: var(--background);
  position: relative;
  z-index: 1;
}

/* ===============================================
   OVAL BACKGROUND REMOVAL - COMPREHENSIVE FIX
   =============================================== */

/* 1. Kill all pseudo-elements that might be creating the oval */
.learning-container::before,
.learning-container::after,
.content-wrapper::before,
.content-wrapper::after,
.content-inner::before,
.content-inner::after,
.quiz-wrapper::before,
.quiz-wrapper::after,
.topic-quiz::before,
.topic-quiz::after,
.topic-quiz-container::before,
.topic-quiz-container::after {
  content: none !important;
  display: none !important;
  background: none !important;
  background-image: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

/* 2. Force solid backgrounds on all container elements */
.learning-container,
.content-wrapper,
.content-inner,
.quiz-wrapper,
.topic-quiz,
.topic-quiz-container {
  background: var(--background) !important;
  background-image: none !important;
  position: relative;
  z-index: 1;
}

/* 3. Remove any potential box-shadow or filter effects */
.learning-container,
.content-wrapper,
.content-inner,
.quiz-wrapper,
.topic-quiz,
.topic-quiz-container {
  box-shadow: none !important;
  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* 4. Ensure no background bleed-through */
.learning-container {
  overflow: hidden;
  isolation: isolate;
}

/* 5. Force remove any background effects on all elements */
* {
  background-image: none !important;
  background: none !important;
}

.content-wrapper {
  background: var(--background);
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* Prevent any background elements */
  background-image: none !important;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-lg);
  height: 64px;
  width: 100%;
  background: rgba(var(--surface-dark-rgb), 0.95);
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.15);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 30;
}

.top-bar-left, .top-bar-right {
  flex: 1;
  display: flex;
  align-items: center;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-md);
  background: rgba(var(--surface-rgb), 0.4);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
}

.back-button svg {
  font-size: 1.4rem;
}

.back-button:hover {
  background: rgba(var(--accent-rgb), 0.2);
  border-color: rgba(var(--accent-rgb), 0.4);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 8px rgba(var(--accent-rgb), 0.2);
  color: var(--accent-light);
}

.top-bar-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.top-bar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(var(--accent-rgb), 0.3), transparent);
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-right: auto; /* Push to the left */
  height: 100%;
  padding: var(--spacing-sm) 0;
}

.reading-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-left: var(--spacing-md);
  padding: 0.35rem 0.75rem;
  background: rgba(var(--surface-rgb), 0.25);
  border-radius: var(--radius-full);
  border: 1px solid rgba(var(--primary-rgb), 0.1);
}

@media (max-width: 640px) {
  .reading-time {
    display: none;
  }
}

.search-bar {
  display: flex;
  align-items: center;
  background: rgba(var(--surface-rgb), 0.25);
  border-radius: var(--radius-full);
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 330px;
  border: 1px solid rgba(var(--primary-rgb), 0.15);
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  height: 42px;
}

.search-icon {
  color: rgba(255, 255, 255, 0.6);
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.search-bar:focus-within .search-icon {
  color: var(--accent-light);
  text-shadow: 0 0 8px rgba(var(--accent-rgb), 0.3);
}

.search-input {
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}

.search-input:focus {
  background-color: rgba(var(--accent-rgb), 0.05);
  outline: none;
}

.search-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}

.search-bar:focus-within {
  box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.3), 0 4px 10px rgba(0, 0, 0, 0.15);
  border-color: rgba(var(--accent-rgb), 0.5);
  background: rgba(var(--surface-rgb), 0.4);
  transform: translateY(-1px);
}

.top-bar-right {
  display: flex;
  justify-content: flex-end;
}

.action-buttons {
  display: flex;
  gap: var(--spacing-md);
}

.action-button {
  background: rgba(var(--surface-rgb), 0.3);
  border: 1px solid rgba(var(--primary-rgb), 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.action-button:hover {
  color: var(--accent-light);
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.25), rgba(var(--accent-rgb), 0.1));
  border-color: rgba(var(--accent-rgb), 0.3);
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 0 8px rgba(var(--accent-rgb), 0.25);
}

.action-button.active {
  background: rgba(var(--accent-rgb), 0.15);
  color: var(--accent);
  border-color: var(--accent);
  transform: none;
}

.action-button.active:last-child {
  color: var(--success);
}

/* Content Area */
.content-inner {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
  position: relative;
}

/* Remove ALL background decorations and overlays */
.content-inner::before,
.content-inner::after,
.learning-container::before,
.learning-container::after,
.content-wrapper::before,
.content-wrapper::after,
body::before,
body::after {
  display: none !important;
  opacity: 0 !important;
  background: none !important;
  background-image: none !important;
  border-radius: 0 !important;
  visibility: hidden !important;
}

.content-inner {
  margin: 0 auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .content-inner {
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 640px) {
  .content-inner {
    padding: var(--spacing-xl) var(--spacing-xl);
  }
}

@media (min-width: 768px) {
  .content-inner {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
}

.topic-headsection {
  margin-bottom: 4rem;
  background: rgba(var(--surface-dark-rgb), 0.4);
  border-radius: var(--radius-lg);
  padding: 2rem;
  border: 1px solid rgba(var(--primary-rgb), 0.15);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.topic-headsection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.7), transparent);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}

.topic-headsection:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 0 15px rgba(var(--accent-rgb), 0.1);
}

.topic-header {
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  position: relative;
  text-align: center;
}

.topic-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.7), transparent);
  border-radius: var(--radius-full);
}

.topic-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
  text-shadow: 0 2px 15px rgba(var(--accent-rgb), 0.2);
}

.topic-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px; /* Refined size */
  height: 3px; /* Refined thickness */
  background: linear-gradient(to right, var(--primary-light), var(--accent));
  border-radius: var(--radius-sm);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
  background: rgba(var(--surface-dark-rgb), 0.4);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(var(--accent-rgb), 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  position: relative;
}

.content-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    rgba(var(--accent-rgb), 0.7), 
    rgba(var(--primary-rgb), 0.4), 
    rgba(var(--accent-rgb), 0.2)
  );
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  box-shadow: 0 0 5px rgba(var(--accent-rgb), 0.15);
}

.content-section:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(var(--accent-rgb), 0.1);
  border-color: rgba(var(--accent-rgb), 0.3);
}

.section-title {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.2);
}

.section-title::before {
  content: '•';
  color: var(--accent);
  font-size: 1.5rem;
  margin-right: 0.5rem;
  text-shadow: 0 0 8px var(--accent);
}

.section-content {
  padding: var(--spacing-lg);
  line-height: 1.8;
  font-size: 1.15rem;
  color: var(--text-secondary);
  letter-spacing: 0.01em;
}

.section-content p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.section-content strong {
  color: var(--text-primary);
  font-weight: 600;
}

.section-content ul, .section-content ol {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.section-content li {
  margin-bottom: 0.5rem;
}

.section-content a {
  color: var(--accent-light);
  text-decoration: none;
  transition: all 0.2s ease;
  border-bottom: 1px dotted rgba(var(--accent-rgb), 0.4);
}

.section-content a:hover {
  color: var(--accent);
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.8);
}

.section-content h1 {
  font-size: 1.875rem;
}

.section-content h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary-light);
  margin-top: 1.5rem;
}

.section-content h3 {
  font-size: 1.25rem;
}

.section-content h1,
.section-content h2,
.section-content h3,
.section-content h4,
.section-content h5,
.section-content h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}


.section-content ul,
.section-content ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.section-content li {
  margin-bottom: 0.5rem;
}

.section-content a {
  color: var(--accent-light);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.section-content a:hover {
  text-decoration: underline;
}

.section-content img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  margin: 2rem 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(157, 70, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-content img:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 229, 255, 0.3);
}

.section-content blockquote {
  padding: 1.5rem 2rem;
  border-left: 4px solid var(--accent);
  color: var(--text-secondary);
  font-style: italic;
  margin: 2rem 0;
  background-color: rgba(0, 229, 255, 0.05);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.section-content blockquote::before {
  content: '"';
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2.5rem;
  color: rgba(0, 229, 255, 0.2);
  font-family: Georgia, serif;
}

.section-content pre {
  background-color: rgba(10, 10, 26, 0.8);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  overflow-x: auto;
  margin: 2rem 0;
  border: 1px solid rgba(157, 70, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.section-content code {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--accent-light);
  text-shadow: 0 0 5px rgba(0, 229, 255, 0.3);
}

.section-content :not(pre) > code {
  padding: 0.2rem 0.4rem;
  background-color: rgba(0, 229, 255, 0.1);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(0, 229, 255, 0.2);
  font-size: 0.875rem;
}

.section-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  overflow-x: auto;
  display: block;
}

.section-content th,
.section-content td {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
}

.section-content th {
  background-color: var(--surface-light);
  font-weight: 600;
}

.section-content hr {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
}

/* Info Box */
.info-box {
  background-color: rgba(var(--accent-rgb), 0.08);
  border-left: 4px solid var(--accent);
  padding: 1.25rem 1.5rem;
  margin: 2rem 0;
  border-radius: var(--radius-md);
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.info-box::before {
  content: 'ℹ️';
  position: absolute;
  top: -12px;
  left: -12px;
  width: 24px;
  height: 24px;
  background-color: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
}

/* Scroll to top button */
.scroll-top-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: var(--primary);
  color: white;
  border-radius: 9999px;
  box-shadow: var(--shadow-lg);
  transition: background-color var(--transition-fast);
}

.scroll-top-button:hover {
  background-color: var(--primary-light);
}

.toggle-sidebar {
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), 0 0 10px rgba(98, 0, 234, 0.5);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toggle-sidebar:hover {
  transform: scale(1.1) rotate(90deg);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 229, 255, 0.6);
}

/* Topic Pagination Styles */
.topic-pagination {
  margin: 3rem 0 0;
  width: 100%;
  position: sticky;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(10, 10, 26, 0.9) 20%, rgba(10, 10, 26, 0.95));
  padding: 1.5rem 0 0;
  z-index: 40;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.pagination-progress {
  display: none;
}

.progress-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 500;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6200ea, #00e5ff);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.pagination-nav {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 65px;
  background: linear-gradient(145deg, rgba(20, 20, 40, 0.95), rgba(10, 10, 30, 0.98));
  border-top: 1px solid rgba(98, 0, 234, 0.4);
  border-bottom: 1px solid rgba(0, 229, 255, 0.3);
  box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.3);
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  position: relative;
}

.pagination-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #6200ea, #00e5ff, #6200ea);
  background-size: 200% 100%;
  animation: gradientBG 3s ease infinite;
  opacity: 0.8;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
  border: none;
  border-right: 1px solid rgba(98, 0, 234, 0.15);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;
  text-decoration: none;
  height: 100%;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
}

.pagination-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(98, 0, 234, 0.1), rgba(0, 229, 255, 0.08));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.pagination-button:last-child {
  border-right: none;
  border-left: 1px solid rgba(98, 0, 234, 0.1);
}

.pagination-button:hover {
  color: rgba(255, 255, 255, 1);
  background: rgba(98, 0, 234, 0.15);
}

.pagination-button:hover::after {
  opacity: 1;
}

.pagination-button:active {
  transform: translateY(1px);
}

.pagination-button svg {
  transition: transform 0.2s ease;
}

.pagination-button:hover svg {
  transform: scale(1.1);
}

.pagination-button.prev {
  justify-content: flex-start;
}

.pagination-button.next {
  justify-content: flex-end;
}

.pagination-button.mark-complete {
  border-left: 1px solid rgba(98, 0, 234, 0.2);
  border-right: 1px solid rgba(98, 0, 234, 0.2);
  flex: 1.2;
  font-weight: 600;
  position: relative;
  overflow: visible;
  z-index: 1;
  background: linear-gradient(135deg, rgba(98, 0, 234, 0.15), rgba(0, 0, 0, 0.2));
  color: #9d7aff;
  text-shadow: 0 0 8px rgba(157, 122, 255, 0.3);
  transition: all 0.3s ease, transform 0.1s ease;
}

.pagination-button.mark-complete:hover {
  background: linear-gradient(135deg, rgba(98, 0, 234, 0.25), rgba(0, 0, 0, 0.3));
  color: #b79aff;
  text-shadow: 0 0 12px rgba(183, 154, 255, 0.5);
  box-shadow: 0 0 15px rgba(98, 0, 234, 0.2);
}

.pagination-button.completed {
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 0, 0, 0.2));
  color: #00e5ff;
  text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
  position: relative;
  overflow: hidden;
}

.pagination-button.completed::before {
  content: '✓';
  margin-right: 8px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.7; transform: scale(1); }
}

.pagination-button svg {
  margin: 0 8px;
}

.pagination-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  transform: none;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  transform: none;
  position: relative;
}

.pagination-button:disabled::after {
  content: '❗ Complete quiz first';
  position: absolute;
  top: -36px; /* Position above instead of below to avoid overlapping */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 100;
}

.pagination-button:disabled:hover::after {
  opacity: 1;
}

@media (max-width: 768px) {
  .pagination-nav {
    flex-direction: row;
    height: 60px;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
  
  .topic-pagination {
    margin: 2rem -1rem 0;
    width: calc(100% + 2rem);
  }
  
  .pagination-button {
    font-size: 0.85rem;
    padding: 0 0.75rem;
    flex-direction: column;
    gap: 4px;
  }
  
  .pagination-button span {
    font-size: 0.75rem;
    opacity: 0.9;
  }
  
  .pagination-button svg {
    font-size: 1.1rem;
  }
  
  .pagination-button.mark-complete {
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
  
  .pagination-button:disabled::after {
    display: none;
  }
  
  .pagination-button:disabled:hover::after {
    display: none;
  }
}

/* Disabled state styles */
.pagination-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
  position: relative;
}

.pagination-button.disabled::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
}
```

### File: `./src/pages/LearningPage/LearningPage.js`

```javascript
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';
import './LearningPage.css';
import TopicQuiz from '../../components/TopicQuiz/TopicQuiz';
import {
  X,
  Search,
  Bookmark,
  ArrowUp,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const LearningPage = () => {
  const { subject, topicId } = useParams();
  const [pageContent, setPageContent] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [topicCompleted, setTopicCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('article[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.dataset.section);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [pageContent?.sections]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/content/${subject}/${topicId}.md`);
        if (!response.ok) {
          throw new Error(`Markdown file not found for topic: ${subject}/${topicId}`);
        }
        const markdownText = await response.text();
        const { data, content } = matter(markdownText);

        const sections = [];
        const lines = content.split('\n');
        let currentSection = null;

        lines.forEach(line => {
          const h2Match = line.match(/^##\s+(.*)/);
          const h3Match = line.match(/^###\s+(.*)/);

          if (h2Match) {
            const title = h2Match[1].trim();
            currentSection = {
              id: title.toLowerCase().replace(/\s+/g, '-'),
              title: title,
              level: 2,
              children: [],
            };
            sections.push(currentSection);
          } else if (h3Match && currentSection) {
            const title = h3Match[1].trim();
            currentSection.children.push({
              id: title.toLowerCase().replace(/\s+/g, '-'),
              title: title,
              level: 3,
            });
          }
        });

        setPageContent({
          title: data.title || topicId.replace(/[-_]/g, ' '),
          sections: sections,
          rawContent: content,
          readingTime: data.readingTime || '15 min',
          prevTopic: data.prevTopic || null,
          nextTopic: data.nextTopic || null,
        });

      } catch (error) {
        console.error("Error loading learning content:", error);
        setPageContent({
          title: 'Error',
          sections: [],
          rawContent: `## Content Not Found\nCould not load content for **${subject}/${topicId}**. Please check if the file exists at \`/public/content/${subject}/${topicId}.md\` and the server is running.`,
          readingTime: '0 min',
          prevTopic: null,
          nextTopic: null,
        });
      }
    };

    if (subject && topicId) {
      fetchContent();
    }
  }, [subject, topicId]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredSections = normalizedQuery
    ? pageContent?.sections
      ?.map((section) => {
        const sectionMatches = section.title.toLowerCase().includes(normalizedQuery);
        const matchingChildren = section.children?.filter((child) =>
          child.title.toLowerCase().includes(normalizedQuery)
        );

        if (sectionMatches) {
          return {
            ...section,
            children: matchingChildren && matchingChildren.length > 0 ? matchingChildren : section.children
          };
        }

        if (matchingChildren && matchingChildren.length > 0) {
          return {
            ...section,
            children: matchingChildren
          };
        }

        return null;
      })
      .filter(Boolean)
    : pageContent?.sections;

  const extractHeadingText = (children) => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children.map((child) => extractHeadingText(child)).join(' ');
    }
    if (children && typeof children === 'object' && 'props' in children) {
      return extractHeadingText(children.props.children);
    }
    return '';
  };

  const renderHeading = (Tag) => ({ node, children, ...props }) => {
    const textContent = extractHeadingText(children);
    const slug = textContent
      ? textContent
        .toString()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
      : undefined;

    return (
      <Tag id={slug} {...props}>
        {children}
      </Tag>
    );
  };

  return (
    <div className="learning-container min-h-screen">
      {/* Sidebar */}
      <aside
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
      >
        <div className="sidebar-header">
          <h2 className="sidebar-title">{pageContent?.title}</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="sidebar-close-btn"
            aria-label="Close sidebar"
          >
            <X />
          </button>
        </div>

        <nav className="nav-menu">
          <div className="nav-section">
            <h3 className="nav-section-title">Sections</h3>
            <ul className="nav-list">
              {filteredSections?.map((section) => (
                <li key={section.id} className={`level-${section.level}`}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  >
                    {section.title}
                  </button>
                  {section.children && section.children.length > 0 && (
                    <ul className="nav-list-nested">
                      {section.children.map(child => (
                        <li key={child.id} className={`level-${child.level}`}>
                          <button
                            onClick={() => scrollToSection(child.id)}
                            className={`nav-item ${activeSection === child.id ? 'active' : ''}`}
                          >
                            {child.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="content-wrapper">
        {/* Top bar - full width */}
        <div className="top-bar">
          <div className="top-bar-left">
            <Link to="/" className="back-button">
              <ArrowLeft />
              <span>Home</span>
            </Link>
          </div>

          <div className="top-bar-center">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search sections..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="top-bar-right">
            <div className="action-buttons">
              <button
                onClick={() => setBookmarked((b) => !b)}
                className={`action-button ${bookmarked ? 'active' : ''}`}
                aria-label="Bookmark topic"
              >
                <Bookmark />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="content-inner">
          <div className="topic-header">
            <h1 className="topic-title">{pageContent?.title}</h1>
          </div>

          <div className="section-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: renderHeading('h2'),
                h3: renderHeading('h3'),
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {pageContent?.rawContent}
            </ReactMarkdown>
          </div>

          {/* End of content sections */}
        </div>

        {/* Overlay blocker specifically targeting background effects */}

        {/* Topic Quiz with enhanced overlay blocker */}
        <div className="quiz-overlay-blocker" style={{
          position: 'relative',
          zIndex: 1000, /* Increased z-index to ensure visibility */
          background: '#0a0a1a',
          margin: '2rem 0',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          isolation: 'isolate',
          overflow: 'hidden',
          transform: 'translateZ(0)', /* Force GPU acceleration */
          backfaceVisibility: 'hidden' /* Enhance rendering */
        }}>
          <TopicQuiz
            topicContent={pageContent?.rawContent}
            topicTitle={pageContent?.title}
            topicId={pageContent?.nextTopic?.id || pageContent?.prevTopic?.id || 'current-topic'}
            onQuizComplete={(completed, score, total) => {
              setQuizCompleted(completed);
              // Optionally display a notification about quiz completion
              if (completed && score !== undefined && total !== undefined) {
                // Could show a toast notification here
                console.log(`Quiz completed with score: ${score}/${total}`);
              }
            }}
          />
        </div>

        {/* Topic Pagination */}
        <div className="topic-pagination">
          <div className="pagination-nav">
            <Link
              to={pageContent?.prevTopic ? `/learn/${subject}/${pageContent.prevTopic.id}` : '#'}
              className={`pagination-button prev ${!pageContent?.prevTopic ? 'disabled' : ''}`}
            >
              <ArrowLeft size={20} />
              <span>{pageContent?.prevTopic?.title || 'Previous'}</span>
            </Link>

            <button
              className={`pagination-button mark-complete ${topicCompleted ? 'completed' : ''}`}
              onClick={() => setTopicCompleted(!topicCompleted)}
              disabled={!quizCompleted}
              title={!quizCompleted ? 'Complete the quiz to mark this topic as complete' : ''}
            >
              {topicCompleted ? 'Completed' : 'Mark as Complete'}
            </button>

            {pageContent?.nextTopic && (
              <Link
                to={`/learn/${subject}/${pageContent.nextTopic.id}`}
                className={`pagination-button next ${!quizCompleted ? 'disabled' : ''}`}
                onClick={(e) => {
                  if (!quizCompleted) {
                    e.preventDefault();
                    alert('Please complete the quiz before proceeding to the next topic.');
                  }
                }}
              >
                <span>{pageContent.nextTopic.title || 'Next'}</span>
                <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </div>

        {/* Scroll-to-top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-top-button"
            aria-label="Scroll to top"
          >
            <ArrowUp />
          </button>
        )}
      </main>
    </div>
  );
};

export default LearningPage;
```

### File: `./src/pages/PhysicsRush/PhysicsRushPreview.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './PhysicsRushPreview.css'; // Now in the same directory

const PhysicsRushPreview = () => {
  // This would be replaced with actual progress data from your state management
  const progress = 35;

  return (
    <div className="physics-rush-preview">
      <div className="container">
        <section className="left-section">
        <h1>Physics Rush</h1>
        <div className="description">
          <p>Welcome to Physics Rush, your comprehensive guide to mastering IGCSE and A-level Physics. This course is designed to help you understand complex physics concepts through structured learning and practical applications.</p>
        </div>
        
        <div className="topics">
          <h2>Course Topics</h2>
          <div className="topic">
            <h3>Mechanics</h3>
            <p>Forces, motion, energy, and momentum</p>
          </div>
          <div className="topic">
            <h3>Waves</h3>
            <p>Sound, light, and electromagnetic waves</p>
          </div>
          <div className="topic">
            <h3>Electricity</h3>
            <p>Circuits, charge, and electromagnetic effects</p>
          </div>
          <div className="topic">
            <h3>Thermal Physics</h3>
            <p>Heat transfer, temperature, and thermal properties</p>
          </div>
          <div className="topic">
            <h3>Nuclear Physics</h3>
            <p>Atomic structure, radioactivity, and nuclear reactions</p>
          </div>
        </div>
      </section>

      <section className="right-section">
        <Link to="/physics-rush/dashboard" className="button">Start Studying</Link>
        <Link to="/physics-rush/quiz" className="button secondary">Take Recall Quiz</Link>

        <div className="progress-section">
          <h2>Your Progress</h2>
          <p>Current progress in Physics Rush</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default PhysicsRushPreview;
```

### File: `./src/pages/PhysicsRush/PhysicsRushDashboard.css`

```css
.physics-rush-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: #2d3748;
}

.dashboard-header {
  margin-bottom: 3rem;
  text-align: center;
}

.dashboard-header h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a202c;
}

.dashboard-header p {
  font-size: 1.125rem;
  color: #4a5568;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
}

.stat-icon {
  background: #f0f4ff;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #4f46e5;
}

.stat-details h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #1a202c;
}

.stat-details p {
  margin: 0;
  color: #718096;
  font-size: 0.875rem;
}

.topics-section {
  margin-bottom: 3rem;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #1a202c;
}

.section-header p {
  margin: 0;
  color: #718096;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.topic-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
}

.topic-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  border-color: #c7d2fe;
}

.topic-icon {
  font-size: 1.75rem;
  margin-right: 1rem;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #f0f4ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.topic-details {
  flex: 1;
}

.topic-details h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
}

.progress-container {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin: 0.5rem 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #4f46e5;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.topic-details p {
  margin: 0.25rem 0 0 0;
  font-size: 0.75rem;
  color: #718096;
}

.topic-arrow {
  color: #a0aec0;
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.topic-card:hover .topic-arrow {
  transform: translateX(4px);
  color: #4f46e5;
}

.quick-actions {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.quick-actions h3 {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #4f46e5;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background: #f1f5f9;
  border-color: #c7d2fe;
}

.action-button span {
  margin-top: 1px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
  
  .topics-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .action-button {
    justify-content: center;
  }
}
```

### File: `./src/pages/PhysicsRush/PhysicsRushPreview.css`

```css
.physics-rush-preview {
  --primary: #7C3AED;
  --primary-light: #8B5CF6;
  --accent: #C4B5FD;
  --background-dark: #0A0A0F;
  --surface: #111827;
  --text-light: #F9FAFB;
  --text-muted: rgba(255, 255, 255, 0.7);
  --success: #10B981;
  --info: #3B82F6;
  --gradient-start: #7C3AED;
  --gradient-end: #3B82F6;
  
  min-height: 100vh;
  background-color: var(--background-dark);
  color: var(--text-light);
}

.container {
  display: flex;
  min-height: calc(100vh - 64px);
  padding: 2rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.left-section {
  flex: 2;
  background-color: var(--surface);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.right-section {
  flex: 3;
  background-color: var(--surface);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 2.5rem;
}

h2 {
  color: var(--accent);
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 1.5rem;
}

.description {
  color: var(--text-light);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.physics-rush-preview .topics {
  margin-top: 2rem;
}

.topic {
  background: rgba(124, 58, 237, 0.1);
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary-light);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.topic:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.topic h3 {
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.topic p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
}

.physics-rush-preview .button {
  background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
  color: var(--text-light);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.physics-rush-preview .button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(124, 58, 237, 0.25);
}

.physics-rush-preview .button:active {
  transform: translateY(0);
}

.physics-rush-preview .button.secondary {
  background: transparent;
  border: 2px solid var(--gradient-start);
  color: var(--text-light);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.physics-rush-preview .button.secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
  opacity: 0.1;
  z-index: -1;
}

.physics-rush-preview .button.secondary:hover {
  border-color: var(--gradient-end);
}

.physics-rush-preview .button.secondary:hover::before {
  opacity: 0.15;
}

.progress-section {
  background-color: rgba(74, 20, 140, 0.1);
  padding: 1.8rem;
  border-radius: 12px;
  margin-top: auto;
}

.progress-section h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.progress-section p {
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.physics-rush-preview .progress-bar {
  width: 100%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-top: 1.5rem;
  overflow: hidden;
}

.physics-rush-preview .progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  border-radius: 5px;
  width: 0%;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.2);
}

.physics-rush-preview .progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  animation: physicsRushShimmer 2s infinite linear;
}

@keyframes physicsRushShimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .physics-rush-preview .container {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .physics-rush-preview .left-section, 
  .physics-rush-preview .right-section {
    width: 100%;
  }
  
  .physics-rush-preview .right-section {
    margin-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .physics-rush-preview .container {
    padding: 1rem;
  }
  
  .physics-rush-preview h1 {
    font-size: 2rem;
  }
  
  .physics-rush-preview h2 {
    font-size: 1.3rem;
  }
  
  .physics-rush-preview .description {
    font-size: 1rem;
  }
  
  .physics-rush-preview .topic {
    padding: 1rem;
  }
  
  .physics-rush-preview .topic h3 {
    font-size: 1.1rem;
  }
  
  .physics-rush-preview .topic p {
    font-size: 0.9rem;
  }
  
  .physics-rush-preview .progress-section {
    padding: 1.2rem;
  }
}
```

### File: `./src/pages/PhysicsRush/PhysicsRushDashboard.js`

```javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Award, BarChart2 } from 'lucide-react';
import './PhysicsRushDashboard.css';

const PhysicsRushDashboard = () => {
  const navigate = useNavigate();

  const topics = [
    { id: 'classical-mechanics', title: 'Classical Mechanics', progress: 0, icon: '⚙️' },
    { id: 'energy', title: 'Energy', progress: 0, icon: '⚡' },
    { id: 'thermodynamics', title: 'Thermodynamics', progress: 0, icon: '🌡️' },
    { id: 'electromagnetism', title: 'Electromagnetism', progress: 0, icon: '🧲' },
    { id: 'nuclear-physics', title: 'Nuclear Physics', progress: 0, icon: '☢️' },
  ];

  const handleTopicClick = (topicId) => {
    navigate(`/physics-rush/learn/${topicId}`);
  };

  return (
    <div className="physics-rush-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Physics RUSH Dashboard</h1>
          <p>Track your progress and access learning materials</p>
        </div>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <BookOpen size={24} />
          </div>
          <div className="stat-details">
            <h3>5</h3>
            <p>Topics</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-details">
            <h3>20+</h3>
            <p>Hours of Content</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div className="stat-details">
            <h3>100+</h3>
            <p>Practice Questions</p>
          </div>
        </div>
      </div>

      <div className="topics-section">
        <div className="section-header">
          <h2>Topics</h2>
          <p>Start learning by selecting a topic below</p>
        </div>

        <div className="topics-grid">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="topic-card"
              onClick={() => handleTopicClick(topic.id)}
            >
              <div className="topic-icon">{topic.icon}</div>
              <div className="topic-details">
                <h3>{topic.title}</h3>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>
                <p>{topic.progress}% Complete</p>
              </div>
              <div className="topic-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-button">
            <BarChart2 size={18} />
            <span>View Progress</span>
          </button>
          <button className="action-button">
            <Award size={18} />
            <span>Take Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhysicsRushDashboard;
```

### File: `./src/routes/LearningRoutes.js`

```javascript
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopicView from '../components/LearningPath/TopicView';
import LearningPage from '../pages/LearningPage/LearningPage';

const LearningRoutes = () => {
  return (
    <Routes>
      {/* Keep these routes for backward compatibility */}
      <Route path="/math" element={<Navigate to="/class/1" replace />} />
      <Route path="/math/grade/:grade/topic/:topicId" element={<TopicView />} />
      
      {/* Class-based routes */}
      <Route path="/class/:classId/grade/:grade/topic/:topicId" element={<TopicView />} />
      
      {/* Specific route for the main learning page */}
      <Route path="1" element={<LearningPage />} />
      <Route path="1/:topicId" element={<LearningPage />} />
    </Routes>
  );
};

export default LearningRoutes;
```

### File: `./src/services/quizService.js`

```javascript
import axios from 'axios';

// Deepseek API configuration
const DEEPSEEK_API_URL = process.env.REACT_APP_DEEPSEEK_API_URL || 'https://api.deepseek.com';
const DEEPSEEK_API_KEY = process.env.REACT_APP_DEEPSEEK_API_KEY;

/**
 * Generates a quiz based on topic content using Deepseek API
 * @param {string} topicContent - The content of the topic
 * @param {string} topicTitle - The title of the topic
 * @returns {Object} Formatted quiz data or null if error
 */
export const generateQuiz = async (topicContent, topicTitle) => {
  try {
    // For development/testing, use mock data if no API key is available
    if (!DEEPSEEK_API_KEY) {
      console.warn('No Deepseek API key found. Using mock quiz data.');
      return generateMockQuiz(topicContent, topicTitle);
    }
    
    const response = await axios.post(
      `${DEEPSEEK_API_URL}/generate-quiz`,
      {
        context: topicContent,
        topic: topicTitle,
        questionCount: 10,
        format: 'multiple-choice'
      },
      {
        headers: {
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return formatQuizData(response.data);
  } catch (error) {
    console.error('Error generating quiz:', error);
    // Fallback to mock data in case of API error
    return generateMockQuiz(topicContent, topicTitle);
  }
};

/**
 * Formats API response into standardized quiz format
 * @param {Object} apiResponse - The response from the API
 * @returns {Object} Formatted quiz data
 */
const formatQuizData = (apiResponse) => {
  // Transform API response into our quiz format
  // This will depend on the actual Deepseek API response structure
  return {
    questions: apiResponse.questions.map(q => ({
      question: q.text,
      options: q.options,
      correctAnswer: q.answer,
      explanation: q.explanation
    })),
    timestamp: new Date().toISOString(),
    sessionId: getCurrentSessionId()
  };
};

/**
 * Gets or creates a session ID for the current login session
 * @returns {string} Session ID
 */
const getCurrentSessionId = () => {
  // Get or create a session ID for the current login session
  let sessionId = localStorage.getItem('quiz_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}`;
    localStorage.setItem('quiz_session_id', sessionId);
  }
  return sessionId;
};

/**
 * Determines if a quiz should be regenerated based on session and time
 * @param {Object} storedQuiz - Previously stored quiz data
 * @returns {boolean} True if quiz should be regenerated
 */
export const shouldRegenerateQuiz = (storedQuiz) => {
  if (!storedQuiz) return true;
  
  // Check if session has changed
  const currentSessionId = getCurrentSessionId();
  if (storedQuiz.sessionId !== currentSessionId) return true;
  
  // Check if quiz is older than 24 hours
  const quizTime = new Date(storedQuiz.timestamp).getTime();
  const currentTime = new Date().getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  
  return (currentTime - quizTime) > oneDayMs;
};

/**
 * Simulates a logout by changing the session ID
 */
export const simulateLogout = () => {
  localStorage.removeItem('quiz_session_id');
};

/**
 * Generates mock quiz data for development and testing
 * @param {string} topicContent - The content of the topic
 * @param {string} topicTitle - The title of the topic
 * @returns {Object} Mock quiz data
 */
const generateMockQuiz = (topicContent, topicTitle) => {
  // Simple mock data generator based on topic title
  // In a real implementation, this would be more sophisticated
  const mockQuestions = [
    {
      question: `What is the main concept of ${topicTitle}?`,
      options: [
        `Understanding the principles of ${topicTitle}`,
        `Memorizing formulas related to ${topicTitle}`,
        `Historical development of ${topicTitle}`,
        `Applications of ${topicTitle} in daily life`
      ],
      correctAnswer: 0,
      explanation: `The main concept focuses on understanding the core principles that make up ${topicTitle}.`
    },
    {
      question: `Which of the following is NOT typically associated with ${topicTitle}?`,
      options: [
        "Mathematical equations",
        "Laboratory experiments",
        "Ancient mythology",
        "Scientific theories"
      ],
      correctAnswer: 2,
      explanation: `Ancient mythology is not typically part of scientific topics like ${topicTitle}.`
    },
    {
      question: "What is the relationship between distance and time in a velocity-time graph?",
      options: [
        "Distance is the slope of the line",
        "Distance is the area under the curve",
        "Distance is the y-intercept",
        "Distance is the x-intercept"
      ],
      correctAnswer: 1,
      explanation: "The area under a velocity-time graph represents the distance traveled."
    },
    {
      question: "In physics, what does acceleration measure?",
      options: [
        "The total distance traveled",
        "The rate of change of distance",
        "The rate of change of velocity",
        "The rate of change of force"
      ],
      correctAnswer: 2,
      explanation: "Acceleration is defined as the rate of change of velocity with respect to time."
    },
    {
      question: "Which equation represents Newton's Second Law?",
      options: [
        "F = ma",
        "E = mc²",
        "v = u + at",
        "s = ut + ½at²"
      ],
      correctAnswer: 0,
      explanation: "Newton's Second Law states that force equals mass times acceleration (F = ma)."
    },
    {
      question: "What is the SI unit of force?",
      options: [
        "Watt",
        "Joule",
        "Newton",
        "Pascal"
      ],
      correctAnswer: 2,
      explanation: "The SI unit of force is the Newton, named after Sir Isaac Newton."
    },
    {
      question: "What does the area under an acceleration-time graph represent?",
      options: [
        "Position",
        "Velocity",
        "Force",
        "Power"
      ],
      correctAnswer: 1,
      explanation: "The area under an acceleration-time graph represents the change in velocity."
    },
    {
      question: "Which of these is a vector quantity?",
      options: [
        "Mass",
        "Time",
        "Temperature",
        "Displacement"
      ],
      correctAnswer: 3,
      explanation: "Displacement is a vector quantity because it has both magnitude and direction."
    },
    {
      question: "What happens to the kinetic energy of an object when its velocity doubles?",
      options: [
        "It doubles",
        "It quadruples",
        "It halves",
        "It remains the same"
      ],
      correctAnswer: 1,
      explanation: "Kinetic energy is proportional to the square of velocity (KE = ½mv²), so doubling velocity quadruples kinetic energy."
    },
    {
      question: "Which law states that energy cannot be created or destroyed, only transformed?",
      options: [
        "Newton's First Law",
        "Law of Conservation of Energy",
        "Law of Conservation of Momentum",
        "Ohm's Law"
      ],
      correctAnswer: 1,
      explanation: "The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed from one form to another."
    }
  ];
  
  return {
    questions: mockQuestions,
    timestamp: new Date().toISOString(),
    sessionId: getCurrentSessionId()
  };
};
```

### File: `./src/services/roastService.js`

```javascript
/**
 * Service for generating Gen Z roasts using DeepSeek API
 */

// Default roast to reuse
const DEFAULT_ROAST = "L Rizz";

/**
 * Generate a Gen Z roast using DeepSeek API
 * @param {string} questionText - The text of the question that was answered incorrectly
 * @param {string} correctAnswer - The correct answer to the question
 * @returns {Promise<string>} A Gen Z slang roast related to the question
 */
export const generateRoast = async (questionText, correctAnswer) => {
  try {
    // Check if we should use the default roast (1 in 3 chance)
    if (Math.random() < 0.33) {
      return DEFAULT_ROAST;
    }
    
    // If no question text is provided, use generic roast
    if (!questionText) {
      return getRandomRoast();
    }
    
    const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY;
    const apiUrl = process.env.REACT_APP_DEEPSEEK_API_URL || 'https://api.deepseek.com';
    
    if (!apiKey) {
      console.error('DeepSeek API key not found');
      return DEFAULT_ROAST;
    }
    
    const response = await fetch(`${apiUrl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        "model": "deepseek-chat",
        "messages": [
          {
            "role": "system",
            "content": "You are a Gen Z humor expert. Generate a short, funny Gen Z slang roast (2-8 words) for someone who answered a quiz question incorrectly. Make it playful and slightly sarcastic but not mean. Make the roast specifically related to the question topic they got wrong. Examples: 'Physics got you in the trenches', 'Math equations eating you alive fr', 'Chemistry skill issue detected', etc."
          },
          {
            "role": "user",
            "content": `Generate a Gen Z roast for someone who got this question wrong: '${questionText}'. The correct answer was: '${correctAnswer}'.`
          }
        ],
        "max_tokens": 30,
        "temperature": 0.7
      })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    const roast = data.choices[0]?.message?.content?.trim() || DEFAULT_ROAST;
    
    return roast;
  } catch (error) {
    console.error('Error generating roast:', error);
    return DEFAULT_ROAST;
  }
};

/**
 * Get a random roast from a predefined list (fallback if API fails)
 * @returns {string} A random Gen Z slang roast
 */
export const getRandomRoast = () => {
  const roasts = [
    DEFAULT_ROAST,
    "Big yikes energy",
    "Lowkey struggling",
    "That's so mid",
    "Skill issue fr",
    "Not bussin' at all",
    "Touch grass maybe?",
    "No cap, that's rough",
    "Straight up not vibing"
  ];
  
  return roasts[Math.floor(Math.random() * roasts.length)];
};
```

