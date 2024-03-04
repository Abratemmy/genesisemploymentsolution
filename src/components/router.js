import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/contact/contact';
import Getstarted from '../pages/getstarted/getstarted';
// import Home from '../pages/home/Home';
import Ourstory from '../pages/ourstory/ourstory';
import Career from '../pages/service/career';
import Employment from '../pages/service/employment';
import Internship from '../pages/service/internship';
import Linkedin from '../pages/service/linkedin';
import Resume from '../pages/service/Resume';
import Training from '../pages/service/training';
import Service from '../pages/service/service';
import EmployerExp from '../pages/EmployerExp/EmployerExp';
import Employerform from '../pages/EmployerExp/employerform';
import Formsuccess from '../pages/formsuccess/formsuccess';
import LandingPage from '../newComponents/LandingPage/LandingPage';
import EmployeeExperience from '../newComponents/Employee/Employee';
import JobSearch from '../newComponents/jobSearch/JobSearch';
import JobDetail from '../newComponents/jobSearch/JobDetail';
import Search from '../newComponents/jobSearch/Search';


const Router = () => (
    <Routes>
        {/* <Route exact path ='/' caseSensitive={false} element={<Home/>} /> */}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path='/employee_experience' element={<EmployeeExperience />} />
        <Route exact path="/search_jobs" caseSensitive={false} element={<JobSearch />} />
        <Route exact path="/job-details/:id" caseSensitive={false} element={<JobDetail />} />
        <Route exact path="/search/:id" caseSensitive={false} element={<Search />} />
        <Route exact path='/services' caseSensitive={false} element={<Service />} />
        <Route exact path='/about_us' caseSensitive={false} element={<Ourstory />} />
        <Route exact path="/contact_us" caseSensitive={false} element={<Contact />} />
        <Route exact path="/resume_services" caseSensitive={false} element={<Resume />} />
        <Route exact path="/linkedin_services" caseSensitive={false} element={<Linkedin />} />
        <Route exact path="/career_management" caseSensitive={false} element={<Career />} />
        <Route exact path="/employment_services" caseSensitive={false} element={<Employment />} />
        <Route exact path="/internship_services" caseSensitive={false} element={<Internship />} />
        <Route exact path="/training_services" caseSensitive={false} element={<Training />} />
        <Route exact path="/get_started" caseSensitive={false} element={<Getstarted />} />
        <Route exact path="/employer_experience" caseSensitive={false} element={<EmployerExp />} />
        <Route exact path="/employer_form" caseSensitive={false} element={<Employerform />} />
        <Route exact path="/form_success" caseSensitive={false} element={<Formsuccess />} />

    </Routes>
)
export default Router