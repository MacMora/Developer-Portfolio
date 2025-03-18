"use client";
import Introduction from "@/components/introduction";
import CoverParticles from "@/components/coverParticles";
import TransitionPage from "@/components/transition-page";

function App() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>
  );
}

export default App;
