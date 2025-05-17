import { useState } from "react"
import { ThemeChange } from "../components/ThemeChange"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HomeSection } from "../components/HomeSection"
import { AboutMe } from "../components/AboutMe"
import { SkillSection } from "../components/SkillsSections"
import { ProjectSection } from "../components/ProjectSection"
export const Home = () => {

    return (
        <>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
            <ThemeChange/>

        {/*Background Effects*/}
            <StarBackground/>

        {/*Navbar*/}
            <Navbar/>

        {/*Main Content*/}
        <main>
            <HomeSection/>
            <AboutMe/>
            <SkillSection/>
            <ProjectSection/>
        </main>
        {/*Footer*/}

        </div>

        </>
    )
}
