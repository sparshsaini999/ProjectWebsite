import React from 'react';
import { StyledHomePage } from './index.styled';
import AskQuestion from '../../../components/home-page/ask-question';
import OurTeam from '../../../components/home-page/our-team';
import OurClients from '../../../components/home-page/our-clients';
import OurAchivement from '../../../components/home-page/our-achivements';
import Testimonials from '../../../components/home-page/testimonials';
import OurProjects from '../../../components/home-page/our-projects';
import OurServices from '../../../components/home-page/our-services';
import AboutUs from '../../../components/home-page/about-us';
import BannerCarousel from '../../../components/home-page/banner-carousel';

const HomePage = () => {
  const HOMEPAGE_DATA = {
    banner_data: [
      {
        id: 1,
        title: (
          <>
            Welcome
            <br />
            <span>Kaizen Architect & Interior Designer</span>
          </>
        ),
        imgUrl: 'banners/banner-1.webp',
        buttonText: 'Talk to our Designer',
        url: '',
      },
      {
        id: 2,
        title: (
          <>
            Welcome
            <br />
            <span>Kaizen Architect & Interior Designer</span>
          </>
        ),
        imgUrl: 'banners/banner-2.webp',
        buttonText: 'Talk to our Designer',
        url: '',
      },
      {
        id: 3,
        title: (
          <>
            Welcome
            <br />
            <span>Kaizen Architect & Interior Designer</span>
          </>
        ),
        imgUrl: 'banners/banner-3.webp',
        buttonText: 'Talk to our Designer',
        url: '',
      },
      {
        id: 4,
        title: (
          <>
            Welcome
            <br />
            <span>Kaizen Architect & Interior Designer</span>
          </>
        ),
        imgUrl: 'banners/banner-4.webp',
        buttonText: 'Talk to our Designer',
        url: '',
      },
    ],
    about_us_data: {
      imgUrl: 'temp/01.png',
      button_url: '',
      button_text: 'READ MORE',
    },
    our_services_data: {
      button_text: 'READ MORE',
      button_url: '',
      footer_text:
        'From Interior Designing to Architectural Solutions, We Do It All!',
      items: [
        {
          id: 1,
          imgUrl: 'services/service-1.webp',
          title: 'ARCHITECTURE DESIGN',
          text: (
            <>
              Architecture is the cornerstone of Kaizen studio's interdisciplinary
              design practice. Our approach leverages contemporary design
              thinking to define new buildings and redefine existing ones,
              re-purpose abandoned infrastructure, re-mediate brownfield sites,
              and create vibrant open space. We can design any building
              anywhere, with extraordinary results !!
            </>
          ),
          url: '',
        },
        {
          id: 2,
          imgUrl: 'services/service-2.webp',
          title: 'INTERIOR DESIGN',
          text: (
            <>
              We offer a complete range of services for the planning, design,
              and delivery of interior environments. Services include strategy,
              space planning, and budgets, along with 3D visualization and
              animation. Our interior designs reflect each clients' business
              goals and their brand.
            </>
          ),
          url: '',
        },
        {
          id: 3,
          imgUrl: 'services/service-3.webp',
          title: 'WORKPLACE RENOVATION',
          text: (
            <>
              We align space requirements to business objectives; By
              discovering, understanding and defining an organization's unique
              workflow, communication patterns, and employee time utilization,
              Kaizen studio create's spaces that ensure optimal outcomes.
            </>
          ),
          url: '',
        },
        {
          id: 4,
          imgUrl: 'services/service-4.webp',
          title: 'COMMERCIAL PROJECTS',
          text: (
            <>
              Commercial interior design aims to optimize spaces for businesses like offices, retail stores, restaurants, and hotels, focusing on efficiency, branding, and welcoming ambiance. Key elements encompass space planning, furniture, lighting, colors, and materials, balancing functionality with brand identity.
            </>
          ),
          url: '',
        },
      ],
    },
    our_projects_data: {
      button_text: 'ALL PROJECTS',
      button_url: '',
      items: [
        {
          id: 1,
          imgUrl: 'projects/project-1.webp',
          title: 'Project 1',
        },
        {
          id: 2,
          imgUrl: 'projects/project-2.webp',
          title: 'Project 2',
        },
        {
          id: 3,
          imgUrl: 'projects/project-3.webp',
          title: 'Project 3',
        },
        {
          id: 4,
          imgUrl: 'projects/project-4.webp',
          title: 'Project 4',
        },
        {
          id: 5,
          imgUrl: 'projects/project-5.webp',
          title: 'Project 5',
        },
        {
          id: 6,
          imgUrl: 'projects/project-6.webp',
          title: 'Project 6',
        },
      ],
    },
    testimonials_data: {
      button_url: '',
      button_text: 'GET STARTED NOW',
      items: [
        {
          id: 1,
          imgUrl: 'testimonials/testimonials-1.webp',
          title: 'Atul Sharma',
          designation: 'Director, Sales Force, Grazitti Interactive',
          content: `Great team, always ready to help and available. Siddhant and team went out of the way to provide all fine details we needed and were involved from start to end of our home's delivery. They would work with us even when they were on day offs. They made lots of visits to our site making sure everything is in line with the original design. Will definitely recommend them to everyone.`,
        },
        {
          id: 2,
          imgUrl: 'testimonials/testimonials-2.webp',
          title: 'Tarun Himral',
          designation: 'MANAGER, SBI',
          content: `Professional and friendly behaviour`,
        },
        {
          id: 3,
          imgUrl: 'testimonials/testimonials-3.webp',
          title: 'Shuchi Bhalla',
          designation: 'Director, Mountview International School',
          content: `It was a wonderful experience being associated with 261 Degree projects. Really appreciate the commitment, dedication, professionalism, and the client first approach of Siddhant, the owner. The team delivered the project on time and are very reliable and easy to work with. I would recommend them for their work ethics, high quality architect services, and always striving to deliver the best.`,
        },
        {
          id: 4,
          imgUrl: 'testimonials/testimonials-4.webp',
          title: 'Dr. Puja Agarwal',
          designation: 'Director, Arya Group of Colleges',
          content: `Amazing Designs and concepts...have found a perfect solution for all our problems.. would highly recommend 261 Degree Projects`,
        },
      ],
    },
    our_achivements_data: {
      items: [
        {
          id: 1,
          title: 'PROJECTS COMPLETED',
          value: 50,
        },
        {
          id: 2,
          title: 'DRAWINGS ISSUED',
          value: 700,
        },
        {
          id: 3,
          title: 'SITE VISITS',
          value: 100,
        },
        {
          id: 4,
          title: 'TURNKEY PROJECTS',
          value: 4,
        },
      ],
    },
    our_clients_data: {
      items: [
        {
          id: 1,
          imgUrl: 'clients/client-1.png',
        },
        {
          id: 2,
          imgUrl: 'clients/client-2.png',
        },
        {
          id: 3,
          imgUrl: 'clients/client-3.png',
        },
        {
          id: 4,
          imgUrl: 'clients/client-4.png',
        },
        {
          id: 5,
          imgUrl: 'clients/client-5.png',
        },
        {
          id: 6,
          imgUrl: 'clients/client-6.png',
        },
        {
          id: 7,
          imgUrl: 'clients/client-7.png',
        },
        {
          id: 8,
          imgUrl: 'clients/client-8.png',
        },
        {
          id: 9,
          imgUrl: 'clients/client-9.png',
        },
        {
          id: 10,
          imgUrl: 'clients/client-10.png',
        },
        {
          id: 11,
          imgUrl: 'clients/client-11.png',
        },
      ],
    },
    our_teams_data: {
      items: [
        {
          id: 1,
          name: 'Pankaj Kumar',
          designation: 'Customer Relationship Manager',
          imgUrl: 'team/tm-1.webp',
          url: '/teams/pankaj-kumar',
        },
        {
          id: 2,
          name: 'Siddhant Garg',
          designation: 'Founder & Design Head',
          imgUrl: 'team/tm-2.webp',
          url: '/teams/siddhant-garg',
        },
        {
          id: 3,
          name: 'Pragati Goyal',
          designation: 'Partner & Studio Manager',
          imgUrl: 'team/tm-3.webp',
          url: '/teams/pragati-goyal',
        },
        {
          id: 4,
          name: 'Honey Malik',
          designation: 'Architect',
          imgUrl: 'team/tm-4.webp',
          url: '/teams/honey-malik',
        },
        {
          id: 5,
          name: 'Pranik Vashisht',
          designation: 'Junior Architect',
          imgUrl: 'team/tm-5.webp',
          url: '/teams/pranik-vashisht',
        },
        {
          id: 6,
          name: 'Sparsh Saini',
          designation: '3D Visualizer',
          imgUrl: 'team/tm-6.webp',
          url: '/teams/sparsh-saini',
        },
        {
          id: 7,
          name: 'Randeep Kamboj',
          designation: 'Architect',
          imgUrl: 'team/tm-7.webp',
          url: '/teams/randeep-kamboj',
        },
      ],
    },
  };

  return (
    <StyledHomePage>
      <section>
        <BannerCarousel data={HOMEPAGE_DATA?.banner_data} />
      </section>
      <section>
        <AboutUs data={HOMEPAGE_DATA?.about_us_data} />
      </section>
      <section>
        <OurServices data={HOMEPAGE_DATA?.our_services_data} />
      </section>
      <section>
        <OurProjects data={HOMEPAGE_DATA?.our_projects_data} />
      </section>
      {false && (
        <section>
          <Testimonials data={HOMEPAGE_DATA?.testimonials_data} />
        </section>
      )}
      <section>
        <OurAchivement data={HOMEPAGE_DATA?.our_achivements_data} />
      </section>
      {false && (
        <section>
          <OurClients data={HOMEPAGE_DATA?.our_clients_data} />
        </section>
      )}
      <section>
        <AskQuestion />
      </section>
      {false && (
        <section>
          <OurTeam data={HOMEPAGE_DATA?.our_teams_data} />
        </section>
      )}
    </StyledHomePage>
  );
};

export default HomePage;
