import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import StudySection from "@/components/StudySection"

const Index = () => {
  return (
    <div>
      <div className="relative h-screen">
        <ShaderBackground>
          <Header />
          <HeroContent />
          <PulsingCircle />
        </ShaderBackground>
      </div>
      <StudySection />
    </div>
  )
}

export default Index