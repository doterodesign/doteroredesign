var contentContainer = document.getElementById('content-container');
var navContainer = document.getElementById('nav-container');
var blahContainer = document.getElementById('blah');
var homeContainer = document.getElementById('home');
var cunyfirstContainer = document.getElementById('cunyfirst');
var coredContainer = document.getElementById('cored');
var ipcContainer = document.getElementById('ipc');
var salvationarmyContainer = document.getElementById('salvationarmy');
// var safeSexContainer = document.getElementById('safesex');
var gladwellContainer = document.getElementById('gladwell');
//NAVIGATION INFORMATION
var navigation =
{
    intro: '<h1>Hey, </br>I\'m Dimitri!</h1><h2>UX | UI | Product Designer</h2> <h2>Visual Designer</h2> <h2>Always Learning</h2>',
    description: 'I work to help create clear user experiences and branding between companies and their users.</br></br> With a background in product-design and photo-retouching, I aim to bring unique experiences with a focus on usability.',
    love: 'Coded with love',
    primaryButton: 'learn more',
    about: 'about',
    secondaryButton: 'let\'s chat',
    contact: 'contact'
}

// PREVIEW PROJECTS
var cases = [

    //CORED
    {
        //HOMEPAGE SETUP
        project: 'corED',
        next: 'cunyfirst',
        prev: 'gladwell',
        href: 'cored',
        name: 'My solution to an outdated college student portal platform ecosystem',
        platform: 'Progressive Web App',
        role: 'Product Designer | UX/UI | I.A. | Founder',
        // description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'cunyfirst/cored-login-mockup.png',
        primaryColor: 'core-primary',
        supportColor: 'core-primary',
        secondaryColor: 'core-secondary',
        buttonColor: 'core-primary',


        //CASE STUDY SETUP
        summary: {
            overview: 'I decided to take on designing a space that had the core-features necessary for a student to get through their college experience. </br></br>I\'ve only been able to tackle the mobile, student version of the platform but will take you through my overall learning experience into what creating a white-label software entails from both the design and technology perspective.</br></br> This difficult challenge resulted in a long process of research, feature consolidation, and testing. It made me appreciate why these softwares may not have been updated over the years. Let\'s begin the process!',
        
            problem: 'Most education portals do not meet accessibility and responsive standards needed for modern applications. After observing platforms like CUNYfirst, Blackboard, and PupilPath, I found critical usability issues that made the application very hard to use on both the mobile and desktop platforms.',
    
            goal: 'Design and create a progressive web app that will allow complete flexibility in use for students and faculty while providing optimal, standardized accessibility practices. Currently on designing the student side of the portal.',
    
            approach: 'I.A. Restructuring, auditing competitor applications, find core features, user research and testing, and a lot of trial and error.',
    
            lesson: 'Iteration, competitor research, and user-testing is key to creating a product people would enjoy using.',

            solution: "Found the core features needed for students and tested multiple types of navigation for quick and easy to use features. Faculty platform is in progress.",
        },
       
        tools: [
            'Figma',
            'Overflow',
            'Protopie',
            'Zero Height',
            'Illustrator',
            'Principle'
        ],

        img: {

            introduction: {
                size: 'sm',
                
                "images": [
                    {
                        name: 'cunyfirst/current.png',
                        caption: 'Current web (desktop) CUNYfirst',
                    },
                    {
                        name: 'cunyfirst/current-mobile.png',
                        caption: 'Current web (mobile) CUNYfirst',
                    },
                ]
            },

            problem: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/combining-projects.svg',
                        caption: 'Gathering all products and features into one product'
                    }
                ]
            },

            sketch: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/cunyfirst-screen-sketches.png',
                        caption: 'Initial screen concept sketches',
                    },
                ]
            },

            sneakpeak: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/desktop-overview.png',
                        caption: 'Sneakpeak: Desktop Main Dashboard',
                    },
                    {
                        name: 'cunyfirst/desktop-course-active.png',
                        caption: 'Sneakpeak: Desktop Active Course',
                    },
                    {
                        name: 'cunyfirst/desktop-transcript-overview.png',
                        caption: 'Sneakpeak: Desktop Transcript Overview',
                    },
                ]
            },

            userflow: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/finances-flowchart.png',
                        caption: '',
                    },
                    {
                        name: 'cunyfirst/courses-flowchart.png',
                        caption: '',
                    },
                    {
                        name: 'cunyfirst/academics-flowchart.png',
                        caption: '',
                    },
                ]
            },

            wireframe: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/wireframe-1.svg',
                        caption: 'Empty state, courses state, information state, alert state',
                    },
                    {
                        name: 'cunyfirst/wireframe-2.svg',
                        caption: 'Secondary courses state, information state 2, courses state 2',
                    },
                ]
            },

            navigation: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/navigation.png',
                        caption: 'Main Navigation Points',
                    },
                ]
            },

            dynamic: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/overview-screens.png',
                        caption: 'Primary screen samples',
                    },
                    {
                        name: 'cunyfirst/extra-screens.png',
                        caption: 'Primary and secondary selection buttons',
                    },
                ]
            },
            testing: {
                size: 'xs',

                "images": [
                    {
                        name: 'cunyfirst/planner_v1.png',
                        caption: 'V1 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v2.png',
                        caption: 'V2 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v3.png',
                        caption: 'V3 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v4.png',
                        caption: 'V4 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v5.png',
                        caption: 'V5 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v6.png',
                        caption: 'V6 of Current Courses',
                    },
                ]
            },
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'A lot of what exists is built on inaccessible older technologies',
            content: 'The platforms that exist currently spread out their features into multiple softwares. This is because new products get developed separately due to the of the complexity of the legacy-code of the original platforms. It causes a break in the user experience when a user has to visit multiple platforms to complete different tasks.'
        },

        //PROBLEM
        problem: {
            name: 'Problem',
            // heading: 'Hitting the pain points',
            content: 'I\'ve interviewed and casually spoken to many users throughout the years about what they would like in a student platform and how they interact with it on a daily basis. I was able to research and consolidate their needs based on the existing platform\'s features into the core-features necessary for their day-to-day use cases.',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Progressive Web App',
            content: 'My current goal is to establish a design system that I\'m calling the CORE System that will allow for building complex, flexible components for each type of user of the platform. Initially this was being designed as a mobile app but upon researching progressive web apps and them becoming more popular, I\'d love to see if this can be a good use case for that technology.',
        },

        //SNEAKPEAK
        sneakpeak: {
            name: 'Sneakpeak',
            heading: 'The desktop is not forgotten',
            content: 'As this is still more about the mobile version of the site, I wanted to show my current exploration of the desktop version of the application.',
        },

        //USER RESEARCH
        ur: {
            name: 'User Research',
            heading: 'Surrounded by users!',
            content: 'I used CUNYfirst as my foundation for my feature choices as it is the platform I have the most experience with. Having used CUNY products and for almost 10 years and being surrounded by users of other education applications, getting feedback on different platforms was fairly easy.</br></br> With casual interviews and observing students and staff, I felt confident to move forward with planning out the I.A. and userflows.',
        },

        //USERFLOWS
        userflow: {
            name: 'Userflows',
            heading: 'Focus on userflows = Clear directions',
            content: 'Going through all of CUNYfirst and recording each function a user can perform took forever! However, after examining, consolidating, and elimating duplicating functionality for three of the primary screens (finances, academics, courses), I created foundational userflows for those categories.</br></br> They gave me enough of the information architecture to begin producing wireframes for the primary layouts.'
        },

        //WIREFRAMES
        foundation: {
            name: 'Wireframes',
            heading: 'Defining the foundations (low-fi wires)',
            content: 'The user flows from the research created the foundation to start sketching from. I began with the mobile version because it gives the most constraints in information architecture and how to organize the content. Eventually landing on about 7 base screens for the majority of the content, I got to work on structuring the content.',
        },

        //NAVIGATION
        navigation: {
            name: 'Nav Design',
            heading: 'Testing different types of navigation',
            content: 'I tested button-only, tabular, dropdown, and iconic navigation and decided a combination of all three depending on the type of infomration being accessed. With button-only navigation, users felt the space was cluttered but functional. I have not gotten a large amount of feedback on the tabular and dropdown navigation but will be testing soon for those observations!',
        },

        //DYNAMIC CONTENT
        dynamicContent: {
            name: 'Dynamic Content',
            heading: 'Componentization and manipulation',
            content: 'Reloading all the content everytime we click a button drives everyone crazy. This application is a perfect use case for component-driven design. It would allow developers and designers to build flexible units and combine them to create complex design systems and allowing for a fast turnaround after user testing.</br></br>',
        },

        //USER TESTING
        testing: {
            name: 'User Testing',
            heading: 'I tend to work in higher-fidelity to make testing feel like a real experience',
            content: 'Working on my own, it allows me to gauge both the overall visual and functional design quickly. I make sure to tell anyone using it that it isn\'t in final form which I\'ve noticed, makes testers less frustrated if something doesn\'t work. </br></br>The tests I conducted revolved around information architecture and overall flow of the platform. Users needed to find their information quickly as some tasks require immediate attention. These tests helped me define features I may have missed, unnecessary ways of navigating, and overall improvements in information architecture.',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Branding, navigating complex interfaces, and user testing',
            content: 'Designing components is difficult. I learned that a component needs the perfect balance of flexibility of uses with having specific uses. Too abstracted and the component can become overwhelming. Too focused and we may end up repeating code since two components can use the same features. As the project progresses, I can\'t wait to learn more about the relationship between code, design, and how to structure them to work cohesively.',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough',
            content: 'This is an ongoing project and the screens are being updated constantly. Please disregard inconsistencies in elements since I hop on whenever I can to keep working. Not everything can be navigated, but it will give a general idea of how the app may function.',
            p: 'https://www.figma.com/proto/dVg3M7TD36D1EGTXUgxNSu0T/In-progress?node-id=1%3A4886&viewport=1994%2C1387%2C0.31970152258872986&scaling=min-zoom',

        },
    },

    //CUNYFIRST
    {
        //HOMEPAGE SETUP
        project: 'CUNYfirst',
        next: 'blah',
        prev: 'cored',
        href: 'cunyfirst',
        name: 'Rethinking an outdated education portal – CUNYfirst',
        platform: 'Mobile',
        role: 'Product Designer | UX/UI | I.A.',
        description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-black-text',
        image: 'cunyfirst/cunyfirst-login.gif',
        primaryColor: 'cuny-primary',
        supportColor: 'cuny-primary-light',
        secondaryColor: 'cuny-primary-blue',
        buttonColor: 'cuny-primary',


        //CASE STUDY SETUP
        summary: {
            overview: 'The ed-tech space, although growing rapidly in educating people, hasn’t expanded far into the day-to-day applications that students and employees use like Asana or Monday has for business teams.</br></br> What if there was a universal application specifically made for students and staff of Universities or schools to better communication, resources, and functionality to all users?',
        
            problem: "More users handle everything on their phone and with no mobile capabilities, the product is harder to access. CUNYfirst is a distributed product to many Universities and as new tech appears, they might turn to more modern products as current users in the CUNY system continue to deal with a bug-ridden product.",
    
            goal: 'I chose to design a mobile version of CUNYfirst. The aim is to have all the functionality of the current site in mobile form with less navigation and clicks to achieve user goals.',
    
            approach: 'I.A. Restructuring, auditing the current site, consolidating features, user research and testing, new approaches to mobile navigation, and a lot of trial and error.',
    
            lesson: 'Not all practical/useful features are liked by users. Even though some features make the product easy to use, a user still may not like it because of how it looks or how much screen space it takes up.',

            solution: "The user base is massive for this app so I took a gestureless approach to the web app. Through buttons and easily digestable information, the user doesn't feel overwhelmed by the amount of accessible content. I'm currently working on a more refined approach to the navigation.",
        },
       
        tools: [
            'Figma',
            'Overflow',
            'Illustrator',
            'Principle'
        ],

        img: {

            introduction: {
                size: 'sm',
                
                "images": [
                    {
                        name: 'cunyfirst/current.png',
                        caption: 'Current web (desktop) CUNYfirst',
                    },
                    {
                        name: 'cunyfirst/current-mobile.png',
                        caption: 'Current web (mobile) CUNYfirst',
                    },
                ]
            },

            sketch: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/cunyfirst-screen-sketches.png',
                        caption: 'Initial screen concept sketches',
                    },
                ]
            },

            sneakpeak: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/cunyfirst-course-dashboard.png',
                        caption: 'Initial V1 Course Dashboard Design',
                    },
                ]
            },

            userflow: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/cunyfirst-sitemap-sketch.png',
                        caption: 'Planning the sitemap and userflows',
                    },
                    {
                        name: 'cunyfirst/finances-flowchart.png',
                        caption: '',
                    },
                    {
                        name: 'cunyfirst/courses-flowchart.png',
                        caption: '',
                    },
                    {
                        name: 'cunyfirst/academics-flowchart.png',
                        caption: '',
                    },
                ]
            },

            wireframe: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/wireframe-1.svg',
                        caption: 'Empty state, courses state, information state, alert state',
                    },
                    {
                        name: 'cunyfirst/wireframe-2.svg',
                        caption: 'Secondary courses state, information state 2, courses state 2',
                    },
                ]
            },

            navigation: {
                size: 'sm',

                "images": [
                    {
                        name: 'cunyfirst/navigation-v1.png',
                        caption: 'Button Navigation',
                    },
                ]
            },

            dynamic: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/overview-screens-v1.png',
                        caption: 'Primary screen samples',
                    },
                    {
                        name: 'cunyfirst/extra-screens-v1.png',
                        caption: 'More screen samples',
                    },
                ]
            },
            testing: {
                size: 'xs',

                "images": [
                    {
                        name: 'cunyfirst/planner_v1.png',
                        caption: 'V1 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v2.png',
                        caption: 'V2 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v3.png',
                        caption: 'V3 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v4.png',
                        caption: 'V4 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v5.png',
                        caption: 'V5 of Current Courses',
                    },
                    {
                        name: 'cunyfirst/planner_v6.png',
                        caption: 'V6 of Current Courses',
                    },
                ]
            },
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'Wrapping our heads around CUNYfirst',
            content: 'CUNYfirst is a widely distributed student center created by The City University of New York (CUNY). Because of that, it would be difficult to spend the money it would take to reproduce the product with modern technology and get it redistributed to the current universities.</br></br> Sadly, this means students and staff deal with a genuinely bad user experience on 10 year old technology. I think there\'s a way to make this product efficiently without breaking the bank.'
        },

        //PROBLEM
        problem: {
            name: 'Problems',
            heading: 'Hitting the pain points',
            content: 'The main pain points of users I\'ve gathered speaking to various users are a non-responsive design, hard to access information, and not knowing if you qualify to take a course until very moment you go to apply. Nothing a little information re-organization can\'t fix!',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Mobile Web App for CUNYfirst',
            content: 'I decided to focus on the mobile version of the website. Many users know that CUNYfirst has an app but do not use it because of its limited functionality and inability to log in properly (rejects your account occasionally).</br></br> I plan to make the mobile version the goto for most student activities as more people have phones than computers.',
        },

        //SNEAKPEAK
        sneakpeak: {
            name: 'Sneakpeak',
            heading: 'The desktop is not forgotten',
            content: 'SNEAKPEAK! Before moving forward, I wanted to give a sneakpeak into the desktop version and show it\'s being worked on. Back to the study!',
        },

        //USER RESEARCH
        ur: {
            name: 'User Research',
            heading: 'Surrounded by users!',
            content: 'Having used CUNY products for almost 10 years and being surrounded by other users, getting feedback on the current website was fairly easy.</br></br> With casual interviews and observing students and staff using CUNYfirst, I felt confident to move forward with planning out the I.A. and userflows.',
        },

        //USERFLOWS
        userflow: {
            name: 'Userflows',
            heading: 'Focus on userflows = Clear directions',
            content: 'Going through all of CUNYfirst and recording each function a user can perform took forever! However, after examining, consolidating, and elimating duplicating functionality for three of the primary screens (finances, academics, courses), I created foundational userflows for those categories.</br></br> They gave me enough of the information architecture to begin producing wireframes for the primary layouts.'
        },

        //WIREFRAMES
        wireframe: {
            name: 'Wireframes',
            heading: 'Defining the foundations (low-fi wires)',
            content: 'Sketching these screens were/are challenging because my goal was to reduce the amount of clicks from 1-15 clicks to 1-5 clicks for any given action. Most actions would fall within 1-2 clicks.</br></br> Consolidating the information in a way that allowed for minimal actions required the information for each category to be shown all at once when that category is displayed. Otherwise, users may get annoyed or lost in a maze of menus and dropdowns, eventually disregarding the app.',
        },

        //NAVIGATION
        navigation: {
            name: 'Nav Design',
            heading: 'Button focused navigation',
            content: 'To navigate this amount of information, dropdowns and gesture memorization were not great for optimal information accessibility.</br></br> Having the information upfront allows for efficient actions, more readability for screen readers, and an overall responsive-feeling experience.</br></br> How would users feel about it?',
            feedback: {
                name: 'Feedback on nav design',
                heading: 'Button navigation not well received',
                content: 'After testing with over 10 students, a majority had mixed feelings about the navigation. Did it function? Yes. Is it ugly? Kind of. Even though this design is efficient, many users pointed out it takes up too much screen space.</br></br> With inspiration from the Google Drive app, I plan on implementing hiding the secondary navigation for each category with a "more" button (like my back button here!).',
            },
        },

        //DYNAMIC CONTENT
        dynamicContent: {
            name: 'Dynamic Content',
            heading: 'Componentization and manipulation',
            content: 'Reloading all the content everytime we click a button drives everyone crazy. This application is a perfect use case for component-driven design. It would allow developers and designers to build flexible units and combine them to create complex design systems and allowing for a fast turnaround after user testing.</br></br>',
        },

        //USER TESTING
        testing: {
            name: 'User Testing',
            heading: 'Test and Repeat',
            content: 'Initial designs are never perfect and this project is no exception. I\'m currently on my fourth version from testing.</br></br> Testing is part of the process so designs are bound to change. The navigation, consolidation of information, and overall aesthetic are still improving, but the design has come a long way since the initial designs.',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Branding, navigating complex interfaces, and user testing',
            content: 'CUNY recently rebranded and are slowly creating a cohesive look between all their products. To ensure that CUNYfirst would fit into their wide array of products, following the guidelines were essential.</br></br> Thinking about new ways of navigation for this complex interface was a great experience as well. It opened me up to unconventional solutions that I have not seen before (they may be implemented elsewhere).</br></br> Those who did test it said it was easy to use; with the exception of the bugs in the prototype. With positive and negative feedback from users, I\'ll iterate over the current design for further improvement.',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough',
            content: 'This is an ongoing project and the screens are being updated constantly. Please disregard inconsistencies in elements since I hop on whenever I can to keep working. Not everything can be navigated, but it will give a general idea of how the app may function. <br></br> P.S. I\'m now working on the desktop version along side the mobile and it\'s looking good!',
            p: 'https://www.figma.com/proto/dVg3M7TD36D1EGTXUgxNSu0T/In-progress?node-id=1%3A4886&viewport=1994%2C1387%2C0.31970152258872986&scaling=min-zoom',

        },
    },
    
     //BLAH
     {
        //HOMEPAGE SETUP
        project: 'BLAH',
        next: 'ipc',
        prev: 'cunyfirst',
        href: 'blah',
        name: 'Rethinking Mental Self-Help',
        platform: 'Mobile App',
        role: 'Product Designer | Founder',
        description: 'With mental health more important than ever, I strived to give people their voice back with this passion project.',
        descColor: 'primary-white-text',
        image: 'blah/blah-screen.png',
        primaryColor: 'blah-primary',
        supportColor: 'blah-primary-light',
        secondaryColor: 'blah-secondary',
        buttonColor: 'blah-primary',

        summary: {
            overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',
    
            problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed them.",
    
            goal: 'Create a space where people can express themselves off of social media without feeling judged or having their words used against them.',
    
            approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',
    
            solution: "A vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",    
        
            lesson: "Self-help is being taken more seriously, especially amongst youth. More resources have to be made available to combat the increasing stress levels people face today."
        },
        
        tools: [
            'Figma',
            'Overflow',
            'Illustrator',
            'Principle'
        ],
    

        img: {

            cover: {
                size: 'full',
                
                "images": [
                    {
                        name: 'blah/blah-landing.svg',
                        caption: '',
                    }
                ]
            },
          
            call: {
                size: 'md',
                
                "images": [
                    {
                        name: 'blah/blah-selected.svg',
                        caption: 'Selecting BLAH call',
                    },
                    {
                        name: 'blah/call-screen.svg',
                        caption: 'Simulated call screen',
                    },
                ]
            },

            sketch: {
                size: 'md',
                
                "images": [
                    {
                        name: 'blah/hand-sketches.jpg',
                        caption: 'Sketches of the concept and low-fi wireframes',
                    }
                ]
            },

            stat: {
                size: 'md',
                
                "images": [
                    {
                        name: 'blah/stat2.png ',
                        caption: 'People that have used apps for therapy SAMHSA 2017',
                    },
                    {
                        name: 'blah/stat3.png ',
                        caption: 'People that believe depression isn\'t taken seriously SAMHSA 2017',
                    },
                ]
            },

            goal: {
                size: 'xs',

                "images": [
                    {
                        name: 'blah/hero-screen.svg',
                        caption: 'Landing screen',
                    }
                ]
            },

            feature1: {
                size: 'xs',
                
                "images": [
                    {
                        name: 'blah/onboard-1.svg',
                        caption: 'Onboard-1: Messages not stored',
                    },
                    {
                        name: 'blah/onboard-2.svg',
                        caption: 'Onboard-2: No information recorded',
                    },
                    {
                        name: 'blah/onboard-3.svg',
                        caption: 'Onboard-3: Suicide Prevention Hotline',
                    }
                ]
            },
            feature2: {
                size: 'xs',
                
                "images": [
                    {
                        name: 'blah/blah-selected.svg',
                        caption: 'Selecting BLAH call',
                    },
                    {
                        name: 'blah/call-screen.svg',
                        caption: 'Simulated call screen',
                    },
                ]
            }
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'General and Social Anxiety from social media',
            content: 'Have you ever felt like you have no one to speak to? Not because there\'s no one there to listen, but because you fear being judged. Even worse, you can get hurt if you do. Anxiety affects 25.1% of kids ages 13-18 but only 60% get treatment. Anxiety can be caused by many things and after speaking to many individuals around 20-24 about their teenage to adult years, many agreed social media made them more self-conscious, anxious, and depressed more often.',
        },

        //USER RESEARCH
        ur: {
            name: 'User Research',
            heading: 'Who\'ll even use this? & demographic',
            content: 'Even though anyone can use the app, based on the statistics I found, 18-29 year old females would be the main user demographic.</br></br>About 50% of all age groups imagine they would use an app for stress and anxiety relief, while only 8% on average use them regularly. The odds aren\'t looking great for long-term use of the app but let\'s be hopeful.',
        },

        //COMPETITOR RESEARCH
        cr: {
            name: 'Competitor Research',
            heading: 'Phew! No competitors',
            content: 'Thankfully there\'s no one to compete with! Unlike apps such as Daylio, Uplifter, and Moodnotes, Blah does not track any progress of your emotions. Emotion tracking is pretty helpful for people with a therapist. It may not be effective for those that would rather vent and forget.',
        },
        
        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Why should I use BLAH?',
            content: 'Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we\'ve seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.</br></br> I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',
        },

        feature1: {
            name: 'No Permissions',
            heading: 'No information storage = No permissions needed',
            content: 'I wouldn\'t want my thoughts recorded anywhere for anyone to grab; Would you? After a message is complete on BLAH, it gets swiped away and no information is stored. </br></br>The call feature behaves the same way. Nothing is recorded before, during, or after a call. It\'s just you yelling at your phone until you feel better. You won\'t hurt it\'s feelings, I promise.',
        },
        feature2: {
            name: 'Resource Accessability',
            heading: 'Quick access to the best suicide prevention resource',
            content: 'The app does not replace therapy. I\'m a big advocate for getting help when people need it most. It is meant as a forgetful journal and not to replace human interaction and comfort. </br></br> If a user feels like harming themselves, I\’ve implemented a National Suicide Prevention Line contact button next to the BLAH call button. This button calls the hotline and should only be used in real emergencies.',
        },
       
        //future features
        future: {
            name: 'Future Features',
            heading: 'What else can be added?',
            content: 'Have you gone to therapy? It\'s expensive! It would be great to provide quality therapy to those that can\'t afford it.</br></br> I\'d love to test a chatbot custom to each user that adapts to how they speak and allow the user to reflect on their thoughts. Implementing this on both the message and phone features would be awesome but extremely difficult to filter out negative self-speak.</br></br>Through a guided thought process, the chatbots can help users come to their own conclusions and feel accomplished to have come closer to solving their current problem.',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Sometimes simple is best',
            content: 'I quickly started imagining what the app could potentially do in the future. After a while, I\'d realized that adding more features might disrupt the primary goal of venting because a user might explore too much.</br></br> However, there\'s no proof to that claim and hopefully I can make this app really happen to test it!',
        },

        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough',
            content: 'Because the app is a concept and not fully fleshed out, this is a walkthrough of the barebones functionality. You\'ll walk through the basic onboarding process and get to explore how to interact with the messaging and call features (sorry swiping the messages up is not in this prototype).',
            p: '<iframe title="BLAH Walkthrough Preview" style="border: none; overflow-y: scroll" src="https://marvelapp.com/458gfhe?emb=1&iosapp=true&frameless=false"></iframe>',
        },
    },

    //IPC
    {
        //HOMEPAGE SETUP
        project: 'International Paralympic Committee',
        next: 'salvationarmy',
        prev: 'blah',
        href: 'ipc',
        name: 'Restructuring IPC News',
        platform: 'Web & Mobile',
        role: 'Design System | UX/UI | A.I.',
        description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'paralympic/paralympic-landing-page.jpg',
        primaryColor: 'ipc-blue',
        supportColor: 'ipc-yellow',
        secondaryColor: 'ipc-blue-lighten',
        buttonColor: 'ipc-blue',


        //CASE STUDY SETUP
        summary: {
            overview: 'Athletics is popular now more than ever and with technology, disabled athletes have better chances in participating in physical activities.</br></br> The International Paralympic Committee\'s efforts to bring athletics to disabled athletes is amazing but with a bounce rate of over 40%, their site needs to be updated immediately.',
                
            problem: 'Sadly, this great organization has a severely outdated site that they keep up with daily. There is so much potential for improvement and they deserve a better web presence.',
            
            goal: 'I wanted to explore the homepage and news story pages of the site. With multiple types of news being the main priority, creating good flow throughout these pages is essential.',
            
            approach: 'Competitor/user research, persona development, journey mapping, I.A. restructuring, and creating a mini-design system helped to give direction.',
            
            lesson: 'I\'d love to do this project again with a small team. The process was extremely overwhelming and the end result could be much better. I plan on returning to this project but the process taught me a lot about research and time prioritization.',

            solution: 'Originally starting as a full-page redesign, the depth of this project landed me into creating a mini-design system and prototypes of the home and news pages.',
        },
       
        tools: [
            'Sketch',
            'Figma',
            'Overflow',
        ],

        img: {

            introduction: {
                size: 'full',
                
                "images": [
                    {
                        name: 'paralympic/homepage-comparison.png',
                        caption: 'Current vs. revised homepage design (relatively positioned)',
                    },
                ]
            },

            goal: {
                size: 'lg',
                
                "images": [
                    {
                        name: 'paralympic/paralympic-webtraffic.jpg',
                        caption: 'Paralympic.org web traffic',
                    },
                ]
            },
          
            persona: {
                size: 'lg',
                
                "images": [
                    {
                        name: 'paralympic/persona-jim.jpg',
                        caption: 'Elder persona Jim',
                    },
                    {
                        name: 'paralympic/persona-sarah.jpg',
                        caption: 'Young athlete persona Sarah',
                    },
                    {
                        name: 'paralympic/persona-liana.jpg',
                        caption: 'Paralympic Supporter Liana',
                    },
                ]
            },

            olympic: {
                size: 'lg',

                "images": [
                    {
                        name: 'paralympic/olympic-menu.jpg',
                        caption: 'Olympic.org mega navigation'
                    },
                ]
            },
            
            nfl: {
                size: 'lg',

                "images": [
                    {
                        name: 'paralympic/nfl-header.png',
                        caption: 'NFL live score tracker'
                    },
                ]
            },

            lpga: {
                size: 'lg',

                "images": [
                    {
                        name: 'paralympic/lpga-example.jpg',
                        caption: 'LPGA homepage'
                    },
                ]
            },

            journey: {
                size: 'xl',

                "images": [
                    {
                        name: 'paralympic/paralympic-journey-map.jpg',
                        caption: 'Lego-Inspired journey map',
                    },
                ]
            },

            wireframe: {
                size: 'lg',

                "images": [
                    {
                        name: 'paralympic/desktop-mockup.jpg',
                        caption: 'Hand sketches of desktop mockups',
                    },
                    {
                        name: 'paralympic/paralympic-wireframe1.svg',
                        caption: 'Starting wireframes of homepage',
                    },
                ]
            },

            sitemap: {
                size: 'xl',

                "images": [
                    {
                        name: 'paralympic/paralympic-sitemap.png',
                        caption: 'Sitemap of Navigation Structure',
                    },
                ]
            },

            userflow: {
                size: 'lg',

                "images": [
                    {
                        name: 'paralympic/competitions-userflow.png',
                        caption: 'Userflow of competitiions section',
                    },
                    {
                        name: 'paralympic/news-userflow.png',
                        caption: 'Userflow of news',
                    },
                ]
            },

            preview: {
                size: 'xl',

                "images": [
                    {
                        name: 'paralympic/page-previews.jpg',
                        caption: 'V1 Page previews (not finals)',
                    },
                ]
            },

            final: {
                size: 'full',

                "images": [
                    {
                        name: 'paralympic/final-layouts.png',
                        caption: 'Final layout structure for home and article',
                    },
                ]
            },
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'Outdated site for a modern organization',
            content: 'With technology developing at a rapid pace, responsiveness and ease of use have become critical to a positive experience. Paralympic.org\'s navigation and functionality is severely outdated, negatively impacting access to content.',
        },

        //PROBLEM
        problem: {
            name: 'Problems',
            heading: 'Hitting the pain points',
            content: 'The main pain points of users that I\'ve gathered are a non-responsive design, hard to access information, and an outdated design in general. Their current bounce rate is at 41% and although the content is informative, no one is accessing it because it is hard to find.',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Start with the important content: Homepage and News',
            content: 'A bounce rate is how often a user leaves right after landing on the site. As you\'d guess, a high bounce rate means a low retention rate.</br></br> Creating a compelling homepage, as well as reformatting the content such as articles and video is a great start to improving their retention rate. To start, I took a look at their direct and indirect competitors within the televised sports industry.',
        },

        //COMPETITOR RESEARCH
        cr: {
            competitors: {
                name: 'Competitor Research',

                olympics: {
                    name: 'CR: Olympics',
                    heading: 'Main Competitor: Olympic.org',
                    content: 'With a clean and modern design, detailed navigation, and mostly responsive design, there\'s a lot to like. However, with non-responsive imagery for small screens and two-four clicks to drill down through the mobile navigation, it showed me what not to do for mega-navigations on mobile devices.'
                },
                lpga: {
                    name: 'CR: lgpa',
                    heading: 'Indirect Competitor: LGPA',
                    content: 'With an inconsistent information architecture and scattered content, a hidden secondary navigation, non-predictive search bar, and a transparent background on the navigation, this was my least favorite competitor. It showed that although some of their features were modern such as a transparent nav background, it shouldn\'t be implemented everywhere.',
                },
                nfl: {
                    name: 'CR: NFL',
                    heading: 'Indirect Competitor: NFL',
                    content: 'The NFL\'s scoreboard in the header is the main positive feature found on the site. Other than that, I found the scattered and unstructured content hard to consume. Although the news section features content different from the homepage, not all the "news" content on the homepage is featured in the news section.</br></br> This leads to information being distributed in two places and all the content may not be seen by a user. Why write something for it to not be seen?',
                },
            },
        },

        //USER RESEARCH
        ur: {
            name: 'User Research',
            heading: 'Developing Personas',
            content: 'After getting an idea of core features I may need to include, I crafted a few personas that match the target audiences. The Paralympic events have a broad audience and not all are disabled. I included ages, disabilities (or lack of one), and basic information about each person.'
        },

        //JOURNEY   
        journey: {
            name: 'Journey Maps',
            heading: 'Inspired by Lego\'s Journey Mapping',
            content: 'Lego developed a journey map experience that allows for describing users feelings before they know of the product, during an encounter, and after modifications based on their feedback. This type of map allows stakeholders get an idea of what users seek in a concise manner.',
        },

        //USERFLOWS AND SITEMAPS
        userflow: {
            name: 'Userflows and Sitemap',
            heading: 'Critical information architecture development',
            content: 'Knowing the users helped in determining the flow of news and events because it guided me to organizing content for both sighted and non-sighted people. I also included the sitemap I created before knowing what I was getting myself into and changing the project\'s scope.'
        },

        //WIREFRAMES
        wireframe: {
            name: 'Wireframes',
            heading: 'Defining the foundations (low-fi wires)',
            content: 'I struggled with changing my design to hi-fidelity after realizing my initial structure was not user friendly. With over three iterations, this is where I started changing the project\'s scope from the whole site to only the homepage, article page, and creating a component library/mini-design system.',
        },

        //DYNAMIC CONTENT
        designsystem: {
            name: 'Design System',
            heading: 'Crafting component libraries and design systems are fun',
            content: 'Learning to begin crafting a design system was a great experience. It gave constraints for a more efficient workflow in the long run. It\'s not complete but does gives a good idea of the overall structure and direction I was taking for the site. Check out that system below.',
            p: 'https://www.figma.com/proto/PJSDl4Ycf7G2AYPtBXdtota1/IPC-Design-System?node-id=0%3A1&viewport=98%2C263%2C0.05&scaling=contain',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough of desktop/mobile homepage & news',
            content: 'I incorporated the dropdowns and points of contact a user encounters while searching for content, specifically news. You\'ll be able to navigate the hompage and linking out to an article.',
            p: 'https://www.figma.com/proto/PJSDl4Ycf7G2AYPtBXdtota1/IPC-Design-System?node-id=92%3A2271&viewport=174%2C274%2C0.0853344202041626&scaling=scale-down',

        },

        //LESSON
        lesson: {
            name: 'Lesson',
            heading: 'Know the complete scope of the project',
            content: 'I\'ll be honest and say I thought it wouldn\'t be as challenging as it was. I would do this project much differently in the future but I learned to incorporate journey maps, personas, and developing design systems along the way. In realizing how large the project was, I re-evaluated where I should start and landed on what you saw above.</br></br> Thanks for coming along on this one with me. It was definitely a learning experience.'
        },
    },


    //SALVATION ARMY
    {
         //HOMEPAGE SETUP
         project: 'Salvation Army',
         next: 'gladwell',
         prev: 'ipc',
         href: 'salvationarmy',
         name: 'Rebranding Salvation Army',
         platform: 'Print and Web',
         role: 'Designer | Branding | Art Direction',
        //  description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
         descColor: 'primary-white-text',
         image: 'salvation-army/hero-image.svg',
         primaryColor: 'salvation-primary-red',
         supportColor: 'cuny-primary-light',
         secondaryColor: 'salvation-secondary',
            buttonColor: 'cuny-primary',
         
        summary: {
            overview: 'The Salvation Army is truly an iconic brand. However, as their reach expands into now over 10 programs, it may be difficult for those seeking help to find exactly what they need. This is my take on creating a modular logo that can be expanded for multiple use cases.',

            problem: 'When viewing the current logo in a small size, it is almost illegible. Also, there is currently no way to discern between one volunteer over another which may cause people to not find immediate help.',

            goal: 'Create a simple logo and update the brand guidelines. It should represent the brand\'s mission statement while also being flexible to change in terms of color and text/logo pairings.',

            approach: 'With The Salvation Army being a community-driven, Christian organization, I observed their imagery, brand guidelines, and mission statement for inspiration.',

            solution: 'The arrows represent stacked housing (community) and pointing up towards God. When stacked, it forms a chevron-like pattern to represent people coming together. This was a quick project for brand generation under a tight deadline.',
        
            lesson: 'When you have a good idea, pursue it. I get stuck in a loop sometimes and because it was a tight turnaround, I had to embrace an early concept and not feel the need to revise constantly.',
        },

        tools: [
            'Illustrator',
            'Indesign',
            'Photoshop',
        ],

         //IMAGES
        
         img: {
            full: {
                name: '',
                size: 'full',

                "images": [
                    {
                        name: 'salvation-army/hero-image.svg',
                        caption: ''
                    },
                    {
                        name:  'salvation-army/pattern.svg',
                        caption: ''
                    },
                ]
            },
            lg: {
                name: '',
                size: 'lg',

                'images': [
                    {
                        name: 'salvation-army/color-palette.svg',
                        caption: ''
                    },
                    {
                        name: 'salvation-army/all-logos.svg',
                        caption: ''
                    },
                ]
            }
        },
         
          //viewMore
        viewMore: {
            name: 'View Whole Project',
            heading: 'Want to see more?',
            content: 'Want to see the rest of the brand guidelines? Visit my behance to see the rest of the spreads!',
            p:'https://www.behance.net/gallery/76060487/Salvation-Army-Logo-Redesign-Styleguide-Concept',
        },
    },

    //GLADWELL
    {
         //HOMEPAGE SETUP
         project: 'Malcolm Gladwell',
         next: 'cored',
         prev: 'salvationarmy',
         href: 'gladwell',
         name: 'Gladwell Cover Redesigns',
         platform: 'Print',
         role: 'Designer | Art Direction | Typography',
         description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
         descColor: 'primary-white-text',
         image: 'gladwell/gladwell-hero.png',
         primaryColor: 'gladwell-blue',
         supportColor: 'sex-blue',
         secondaryColor: 'sex-red',
         buttonColor: 'cuny-primary',
         
        summary: {
            overview: 'Gladwell\'s books are fantastic at explaining complex topics of human behavior with great, simple book covers.</br></br> I challenged myself to add some "life" into these covers. Even though the books aren\'t related, I set out to create a cohesive look for three of his most popular books.',
            
            problem: 'Although all the original covers work for their purpose, they don\'t pop from the shelf to stand out from other books in their category.',

            goal:  'Create a set of book covers for Malcolm Gladwell\'s three most popular books that are not related but can stand alone or as a set.',

            approach: 'A lot of exploration and sketching went into this project. I looked for colors that popped and wanted to create graphics that told the story of the title to enhance its meaning.',

            solution: 'I used the key words of each title to create the main graphic of the cover. All the covers are type only to not distract or confuse the viewer with imagery. The color palette consists of three main colors that span across all the covers as well.',
        
            lesson: 'Iterating over original ideas and exploration helps a lot. I went through about four rounds of multiple sketches before landing on these final covers. Explore and reap the benefits!',
        },

        tools: [
            'Illustrator',
            'Indesign',
            'Photoshop',
        ],

         //IMAGES
       
        img: {
            lg: {
                name: 'Front Covers',
                size: 'lg',

                "images": [
                    {
                        name: 'gladwell/gladwell.png',
                        caption: ''
                    },

                    {
                        name: 'gladwell/gladwell3.png',
                        caption: ''
                    },

                    {
                        name: 'gladwell/gladwell5.png',
                        caption: ''
                    },
                ]
            },
            full: {
                name: 'Full Book Jacket',
                size: 'full',

                'images': [
                    {
                        name: 'gladwell/gladwell2.png',
                        caption: ''
                    },
                    {
                        name: 'gladwell/gladwell4.png',
                        caption: ''
                    },
                    {
                        name: 'gladwell/gladwell6.png',
                        caption: ''
                    },
                ]
            }
        },

        viewMore: {
            name: 'View Whole Project',
            heading: 'Want to see more?',
            content: 'Want to see the whole design process? Visit my behance to see the first versions and exploration of the concept.',
            p: 'https://www.behance.net/gallery/76059619/Malcolm-Gladwell-Book-Cover-Redesigns',
        },
    },
]

