import React from "react";
import insight from "../Images/insight.png";
import app from "../Images/app.png";
import compain from "../Images/compain.png";
import casemanagement from "../Images/casemanagement.png";
import sociallisten from "../Images/sociallisten.png";
import socialmonitor from "../Images/socialmoniter.png";

export const pData = [
  {
    img: insight,
    alt: "zen",
    title: "Insight & Analysis",
    description:
      " Detailed Analysis of social media trends, engagement &amp; more",
    URL: "/insight",
  },
  {
    img: sociallisten,
    title: "Social Listening",
    description:
      " Track customer feedback, competitor activity, and industry trends",
    URL: "/sociallisten",
  },

  {
    img: socialmonitor,
    title: "Social Media Monitoring",
    description: "Track brand mentions and monitor sentiment gaps ...",
    URL: "/socialmonitor",
  },
  {
    img: app,
    title: "App Analysis",
    description:
      "Know users engagement on mobile apps and identify scope of improvement",
    URL: "/appanalysis",
  },

  {
    img: compain,
    title: "Campaign Analyzer",
    description:
      "Track social media campaigns and get competitive predictions to success",
    URL: "/compaign",
  },
  {
    img: casemanagement,
    title: "Case Management",
    description:
      "Effectively manage and reduce the risks of virality on social media.",
    URL: "/casemanagement",
  },
];
