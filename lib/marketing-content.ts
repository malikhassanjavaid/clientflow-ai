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
  label: string;
}

export interface WorkflowStage {
  id: "discover" | "define" | "propose";
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly WorkflowStep[];
}

export const productPromise: string =
  "Turn vague client requests into clear, client-ready proposals.";

export const navigationItems: readonly NavigationItem[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Product preview", href: "#product-preview" },
  { label: "Why ClientFlow", href: "#why-clientflow" },
  { label: "Human control", href: "#human-control" },
];

export const workflowStages: readonly WorkflowStage[] = [
  {
    id: "discover",
    number: "01",
    eyebrow: "Discover",
    title: "Understand the real request",
    description:
      "Keep the client’s original message, then use AI to surface the questions that separate an idea from a workable project.",
    steps: [
      { id: "request", label: "Capture the original request" },
      { id: "questions", label: "Review AI discovery questions" },
    ],
  },
  {
    id: "define",
    number: "02",
    eyebrow: "Define",
    title: "Turn answers into scope",
    description:
      "Collect focused answers through a no-account client form and shape them into requirements you can verify and edit.",
    steps: [
      { id: "answers", label: "Collect clear client answers" },
      { id: "requirements", label: "Approve structured requirements" },
    ],
  },
  {
    id: "propose",
    number: "03",
    eyebrow: "Propose",
    title: "Share a confident next step",
    description:
      "Build the scope, milestones, timeline, and your chosen price into a versioned proposal with a recorded client decision.",
    steps: [
      { id: "proposal", label: "Edit the client-ready proposal" },
      { id: "decision", label: "Record the final decision" },
    ],
  },
];
