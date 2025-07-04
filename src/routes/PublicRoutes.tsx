// src/routes/AppRoutes.tsx
import {Route, Routes} from 'react-router-dom'
import PublicLayout from "../layout/PublicLayout.tsx";
import Landing from "../features/landing/views/Landing.tsx";
import SuninEnergy from "../features/projects/SuninEnergy/views/SuninEnergy.tsx";
import BankMarketing from "../features/projects/BankMarketing/views/BankMarketing.tsx";
import Contact from "../features/contact/Contact.tsx"
import About from "../features/about/About.tsx";
import Letters from "../features/letters/Letters.tsx";
import Transcripts from "../features/transcripts/Transcripts.tsx";
import Resume from "../features/resume/Resume.tsx";
import Academic from "../features/academic-work/Academic.tsx";
import LeadvilleProject from "../features/projects/Leadville50/views/LeadvilleProject.tsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={"/"} element={<Landing/>} />
                <Route path={"/suninenergy"} element={<SuninEnergy/>} />
                <Route path={"/contact"} element={<Contact/>} />
                <Route path={"/about"} element={<About/>} />
                <Route path={"/letters-of-recommendation"} element={<Letters/>}/>
                <Route path={"/transcripts"} element={<Transcripts/>}/>
                <Route path={"/resume"} element={<Resume/>}/>
                <Route path={"/academic-work"} element={<Academic/>}/>

                <Route path={"/bank-marketing"} element={<BankMarketing/>} />
                <Route path={"/leadville"} element={<LeadvilleProject/>} />
            </Route>
        </Routes>
    )
}
