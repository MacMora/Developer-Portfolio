"use client";
import CoverParticles from "@/components/coverParticles";
import TransitionPage from "@/components/transition-page";
/*import useTranslation from "@/hooks/use-translation";*/

function App() {
  {/*const { t } = useTranslation();*/}
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <CoverParticles/>
        introduccion
      </div>
    </main>
  );
}

export default App;
