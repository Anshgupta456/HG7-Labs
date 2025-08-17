import { ImageWithFallback } from "../ImageWithFallback.jsx";
import { Button } from "../ui/button.jsx";

const hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent"
    >
      {/* BG Image with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&crop=center"
          alt="Fitness is Everything"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full transform rotate-12"></div>
        <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-white/5 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl mb-6 font-['Playfair_Display'] font-bold leading-tight">
            Fuel Your Potential
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed font-body">
            Premium supplements crafted for peak performance and optimal health
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection("products")}
              className="bg-white text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:shadow-2xl min-w-[200px] hover:bg-primary hover:text-white hover:border-2 hover:border-white"
            >
              Shop Now
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="border-2 border-white text-primary px-8 py-4 text-lg rounded-full transition-all duration-300 min-w-[200px] hover:bg-primary hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-20 text-white"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,96L1200,48L1200,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default hero;
