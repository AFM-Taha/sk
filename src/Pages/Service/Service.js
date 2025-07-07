import React, { useEffect } from 'react';
import './service.css';
import AboutUs from '../../Components/Service/AboutUs';
import ServiceWedo from '../../Components/Service/ServiceWedo';
import WhyChooseSkillra from '../../Components/Service/WhyChooseSkillra';
import CoursesOffered from '../../Components/Service/CourseOffered';
import TestimonialWall from '../../Components/Service/TestimonialWall';
import FAQSection from '../../Components/Service/FAQSection';
import ServiceBanner from '../../Components/Service/ServiceBanner';
import Footer from '../../Components/Footer/Footer';
import Success from '../../Components/Success';
import WhyChooseSkillraForm from '../../Components/WhyChooseSkillraForm';
import { useLocation } from 'react-router-dom';

const Service = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div>
            {/* <WhyChooseSkillraForm/> */}
            {/* <Success /> */}
            <ServiceBanner />
            <AboutUs />
            <ServiceWedo />
            <WhyChooseSkillra />
            <CoursesOffered />
            <TestimonialWall />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default Service;