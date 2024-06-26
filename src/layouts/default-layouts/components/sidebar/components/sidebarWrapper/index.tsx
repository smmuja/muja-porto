import {
  Contact,
  Education,
  Home,
  ProjectExperiences,
  Resume,
  SearchBar,
  About,
  Skilss,
  WorkingExperiences,
} from "layouts/default-layouts";

export function SidebarWrapper() {
  return (
    <nav className="flex flex-col p-3 gap-5 bg-fuchsia-950 text-gray-400 overflow-y-scroll w-20 sm:w-2/5 lg:w-1/5 h-screen max-h-screen ">
      {/* <Head /> */}
      <SearchBar />
      <Home />
      <About />
      <Education />
      <WorkingExperiences />
      <ProjectExperiences />
      <Skilss />
      <Contact />
      <Resume />
    </nav>
  );
}
