import About from "@/components/about/About";
import Team from "@/components/about/Team";

export default function about_us() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between mx-16">
        <About />
        {/* <Team /> ADD LATER*/}
      </main>
    );
  }
