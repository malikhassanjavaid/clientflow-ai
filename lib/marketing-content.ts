export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface WorkflowStep {
  id:
    | "request"
    | "questions"
    | "answers"
    | "requirements"
    | "proposal"
    | "decision";
  number: string;
  title: string;
  description: string;
}

export const productPromise: string =
  "Turn unclear client requests into proposal-ready projects.";

export const navigationItems: readonly NavigationItem[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Product preview", href: "#product-preview" },
  { label: "Why ClientFlow", href: "#why-clientflow" },
  { label: "Human control", href: "#human-control" },
];

export const workflowSteps: readonly WorkflowStep[] = [
  {
    id: "request",
    number: "01",
    title: "Capture the request",
    description:
      "Save the client, their original words, and the context you already know without rewriting the source.",
  },
  {
    id: "questions",
    number: "02",
    title: "Shape discovery questions",
    description:
      "Use AI to surface missing details, then edit and approve every question before the client sees it.",
  },
  {
    id: "answers",
    number: "03",
    title: "Collect clear answers",
    description:
      "Share a secure, no-account form that keeps the client focused on the decisions the project needs.",
  },
  {
    id: "requirements",
    number: "04",
    title: "Review the requirements",
    description:
      "Turn the request and answers into structured requirements while keeping assumptions visible for review.",
  },
  {
    id: "proposal",
    number: "05",
    title: "Build the proposal",
    description:
      "Edit the scope, milestones, timeline, exclusions, and your chosen price in one client-ready document.",
  },
  {
    id: "decision",
    number: "06",
    title: "Record the decision",
    description:
      "Share a fixed proposal version so the client can accept, reject, or request a clearly recorded change.",
  },
];
