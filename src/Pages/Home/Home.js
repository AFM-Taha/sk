import React from 'react';
import Banner from './Banner';
import FAQSectionFlex from '../../Components/Service/FAQSection';
import WhyChooseSkillraForm from '../../Components/WhyChooseSkillraForm';
import Footer from '../../Components/Footer/Footer';
import WCSHome from './WCSHome';
import HiringPartners from './HiringPartners';
import TeachingTrack from './TeachingTrack';
import Industry from './Industry';
import Placements from './Placements';
import LearningStack from './LearningStack';

const Home = () => {
    return (
        <>
            <Banner />
            <Placements />
            <Industry />
            <TeachingTrack />
            <LearningStack />
            <HiringPartners />
            <WCSHome />
            <FAQSectionFlex />
            <WhyChooseSkillraForm />
            <Footer />
        </>
    );
};

export default Home;