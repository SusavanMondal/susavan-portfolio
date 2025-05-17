import { ArrowDown } from "lucide-react"

export const HomeSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 space-x-2">
                    <h1 className="text-4xl font-mono md:text-6xl font-bold tracking-tight">
                        <span className="mx-1 opacity-0 animate-fade-in-delay-1">
                            Hi I'm
                        </span>
                        <span className="mx-1 text-primary opacity-0 animate-fade-in-delay-2">
                            Susavan
                        </span>
                        <span className="mx-1 text-gradient opacity-0 animate-fade-in-delay-3">
                            Mondal
                        </span>
                    </h1>
                    <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I enjoy problem solving and building full-stack web applications.</p>
                    <div className="pt-3 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="font-serif cosmic-button bg-blue-500 text-black border border-blue-950">
                            My Work
                        </a>
                    </div>
                </div>

                {/* 👇 Bouncing Mouse Scroll Icon */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center">
                        <div className="w-1 h-2 bg-primary rounded-full animate-scroll mt-2" />
                    </div>
                    <ArrowDown className="h-5 w-5 text-primary mt-1" />
                </div>
            </div>
        </section>
    )
}
