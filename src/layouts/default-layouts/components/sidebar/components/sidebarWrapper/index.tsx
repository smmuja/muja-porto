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
    <nav className="flex flex-col h-screen p-3 gap-5 bg-fuchsia-950 text-gray-400 overflow-y-scroll no-scrollbar">
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
