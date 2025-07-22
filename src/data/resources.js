import { FaFilePdf, FaFileAlt, FaLink } from "react-icons/fa";

export const resources = {
  checklists: [
    { label: "Pre-departure Checklist", url: "#", icon: <FaFilePdf /> },
    { label: "Landing Checklist", url: "#", icon: <FaFilePdf /> },
    { label: "First 48 Hours in UK Checklist", url: "#", icon: <FaFilePdf /> },
    { label: "Banking & Finance Checklist", url: "#", icon: <FaFilePdf /> },
    {
      label: "Healthcare Registration Checklist",
      url: "#",
      icon: <FaFilePdf />,
    },
    { label: "Moving Out Checklist", url: "#", icon: <FaFilePdf /> },
    { label: "Job Application Checklist", url: "#", icon: <FaFilePdf /> },
    { label: "Innovation Founder Checklist", url: "#", icon: <FaFilePdf /> },
    { label: "CV Template", url: "#", icon: <FaFileAlt /> },
    { label: "Business Plan Template", url: "#", icon: <FaFileAlt /> },
  ],
  guides: [
    { label: "UK University Survival Guide", url: "#", icon: <FaFileAlt /> },
    { label: "UK Workplace Culture Guide", url: "#", icon: <FaFileAlt /> },
    { label: "UK Housing Guide", url: "#", icon: <FaFileAlt /> },
    {
      label: "UK Tax Guide for Students/Workers",
      url: "#",
      icon: <FaFileAlt />,
    },
    {
      label: "Weather & Seasonal Preparation Guide",
      url: "#",
      icon: <FaFileAlt />,
    },
  ],
  tools: [
    { label: "BetalysTR", url: "#", icon: <FaLink /> },
    { label: "Just In Mind", url: "#", icon: <FaLink /> },
    { label: "Mindmeter", url: "#", icon: <FaLink /> },
  ],
};
