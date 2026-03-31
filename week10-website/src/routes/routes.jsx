import React from 'react'
import Classroom from "../pages/classroom";
import OnlineCourses from "../pages/onlinecourses";
import TestSeries from "../pages/testseries";
import Results from "../pages/results";
import StudyMaterials from "../pages/studymaterails";
import Scholarships from "../pages/scholarship";
import EStore from "../pages/estore";
import More from "../pages/more";

export const routes = [
  { path: "classes/classroom", element: <Classroom /> },
  { path: "classes/onlinecourses", element: <OnlineCourses /> },
  { path: "classes/testseries", element: <TestSeries /> },
  { path: "classes/results", element: <Results /> },
  { path: "classes/studymaterials", element: <StudyMaterials /> },
  { path: "classes/scholarships", element: <Scholarships /> },
  { path: "classes/estore", element: <EStore /> },
  { path: "classes/more", element: <More /> }
];