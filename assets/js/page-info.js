var contentContainer = document.getElementById('content-container');
var navContainer = document.getElementById('nav-container');
var blahContainer = document.getElementById('blah');
var homeContainer = document.getElementById('home');
var cunyfirstContainer = document.getElementById('cunyfirst');
var salvationarmyContainer = document.getElementById('salvationarmy');
// var safeSexContainer = document.getElementById('safesex');
var gladwellContainer = document.getElementById('gladwell');
//NAVIGATION INFORMATION
var navigation =
{
    intro: '<h1>Hey, </br>I\'m Dimitri!</h1><h2>Product Designer</h2> <h2>Visual Designer</h2> <h2>Always Learning</h2>',
    description: 'I work to help create clear user experiences and branding between companies and their clients.</br></br> With a background in product-design and photo-retouching, I aim to bring unique experiences with a focus on usability.',
    love: 'Coded with love',
    primaryButton: 'learn more',
    about: 'about',
    secondaryButton: 'let\'s chat',
    contact: 'contact'
}

// PREVIEW PROJECTS
var cases = [
    //BLAH
    {
        //HOMEPAGE SETUP
        project: 'BLAH',
        next: 'cunyfirst',
        prev: 'gladwell',
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
    
            problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",
    
            goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',
    
            approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',
    
            solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",    
        
            lesson: "From the people I've shared this concept with, they love the idea of being able to express themselves on a temporary platform."
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
                size: 'sm',
                
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
            content: 'The app does not replace therapy. I\'m a big advocate for getting help when people need it most. It is meant as a forgetful journal and not to replace human interaction and comfort. </br></br> If a user feels like harming themselves, I\’ve implemented a contact button to the National Suicide Prevention Line phone number next to the BLAH call button. This button actually calls the hotline so it should only be used in real emergencies.',
        },
       
        //future features
        future: {
            name: 'Future Features',
            heading: 'What else can be added?',
            content: 'Have you gone to therapy? It\'s expensive! It would be great to provide quality therapy to those that can\'t afford it.</br></br> For an intermediate step, I\'d love to test a chatbot custom to each user that adapts to how they speak and allow the user to reflect on their thoughts. Implementing this on both the message and phone features would be awesome but extremely difficult to filter out negative self-speak.</br></br>Through a guided thought process, the chatbots can help users come to their own conclusions and feel accomplished to have come closer to solving their current problem.',
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

    //CUNYFIRST
    {
        //HOMEPAGE SETUP
        project: 'CUNYfirst',
        next: 'salvationarmy',
        prev: 'blah',
        href: 'cunyfirst',
        name: 'Rethinking CUNYfirst',
        platform: 'Mobile-Only',
        role: 'Product Designer | UX/UI | A.I.',
        description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-black-text',
        image: 'cunyfirst/cunyfirst-login.gif',
        primaryColor: 'cuny-primary',
        supportColor: 'cuny-primary-light',
        secondaryColor: 'cuny-primary-blue',
        buttonColor: 'cuny-primary',


        //CASE STUDY SETUP
        summary: {
            overview: 'Being in and out of the CUNY System for almost a decade, I\'ve had the opportunity to experience a majority of their products (no, it\'s not a prison). Being a decade old in 2019, CUNYfirst has not changed technologies at all (confirmed with faculty). </br></br> With technologies like React, Node.js, and Amazon Web Services, this product can be revamped and be functional for students. This is my take on a mobile redesign of CUNYfirst.',
        
            problem: "More users handle everything on their phone and with no mobile capabilities, the product is harder to access. CUNYfirst is a distributed product to many Universities. However, as new tech appears, they might turn to more modern products and current users continue to deal with a bug-ridden product.",
    
            goal: 'I chose to design a mobile version of CUNYfirst. The aim is to have all the functionality of the current site in mobile form with less navigation and clicks to achieve user goals.',
    
            approach: 'I.A. Restructuring, auditing the current site, consolidating features, user research and testing, new approaches to mobile navigation, and a lot of trial and error.',
    
            lesson: 'Not all practical/useful features are liked by users. Even though some features make the product easy to use, a user still may not like it because of how it looks or how much screen real estate it takes up.',

            solution: "The user base is massive for this app so I took a gestureless approach to the web app. Through buttons and easily digestable information, the user doesn't feel overwhelmed by the amount of accessible content. I'm currently working on a more refined approach to the navigation as well.",
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
          
            call: {
                size: 'md',
                
                "images": [
                    {
                        name: 'blah/blah-selected.png',
                        caption: 'Selecting BLAH call',
                    },
                    {
                        name: 'blah/call-screen.png',
                        caption: 'Simulated call screen',
                    },
                ]
            },

            sketch: {
                size: 'sm',

                "images": [
                    {
                        name: 'cunyfirst/cunyfirst-sitemap-sketch.png',
                        caption: 'Planning the sitemap and userflows',
                    },
                    {
                        name: 'cunyfirst/cunyfirst-screen-sketches.png',
                        caption: 'Initial screen concept sketches',
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
                size: 'sm',

                "images": [
                    {
                        name: 'cunyfirst/navigation.png',
                        caption: 'Primary and secondary selection buttons',
                    },
                ]
            },

            dynamic: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/extra-screens.png',
                        caption: 'Primary and secondary selection buttons',
                    },
                    {
                        name: 'cunyfirst/selections.png',
                        caption: 'Primary screen samples',
                    },
                ]
            },
            testing: {
                size: 'xs',

                "images": [
                    {
                        name: 'cunyfirst/planner_v1.png',
                        caption: 'V1 of planner/courses screen',
                    },
                    {
                        name: 'cunyfirst/planner_v2.png',
                        caption: 'V2 of planner/courses screen',
                    },
                    {
                        name: 'cunyfirst/planner_v3.png',
                        caption: 'V3 of planner/courses screen',
                    },
                    {
                        name: 'cunyfirst/planner_v4.png',
                        caption: 'V4 of planner/courses screen',
                    },
                ]
            },
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'Wrapping our heads around CUNYfirst',
            content: 'CUNYfirst is a widely distributed student center created by The City University of New York (CUNY). Because of that, it would be difficult to spend the money it would take to reproduce the product with modern technology and get it redistributed to the current universities.</br></br> Sadly, this means students and staff deal with a genuinely bad user experience based of 10 year old technology. I think there\'s a way to make this product efficiently without breaking the bank.'
        },

        //PROBLEM
        problem: {
            name: 'Problems',
            heading: 'Hitting the pain points',
            content: 'The main pain points of users that I\'ve gathered speaking to various users are a non-responsive design, hard to access information, and not knowing if you qualify to take a course until very moment you go to apply. Nothing a little information re-organization can\'t fix!',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Mobile Web App for CUNYfirst',
            content: 'I decided to focus on the mobile version of the website. Many users know that CUNYfirst has an app, however, do not use it because of its limited functionality and inability to log in properly.</br></br> I plan to make the mobile version the goto for most student activities as more people have phones than computers.'
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
            content: 'Going through all of CUNYfirst and recording each function a user can perform took forever! However, after examining, consolidating, and elimating duplicating functionality for three of the primary screens (finances, academics, courses), I was able to create efficient userflows.</br></br> These userflows gave me enough of the information architecture to begin producing wireframes for the primary layouts.'
        },

        //WIREFRAMES
        wireframe: {
            name: 'Wireframes',
            heading: 'Defining the foundations (low-fi wires)',
            content: 'Sketching these screens were/are challenging because my plan was to reduce the amount of clicks from 1-15 clicks to 1-5 clicks for any given action. Most actions would fall within 1-2 clicks.</br></br> Consolidating the information in a way that allowed for minimal actions required the information for each category to be shown all at once when that category is displayed. Otherwise, users may get annoyed or lost in a maze of menus and dropdowns, eventually disregarding the app.',
        },

        //NAVIGATION
        navigation: {
            name: 'Nav Design',
            heading: 'Button focused navigation',
            content: 'To navigate this amount of information, dropdowns and gesture memorization were not good options for optimal information accessibility.</br></br> Having the information upfront would allow for efficient actions, more readability for screen readers, and an overall responsive-feeling experience.</br></br> How would users feel about it?',
            feedback: {
                name: 'Feedback on nav design',
                heading: 'Button navigation not well received',
                content: 'After testing with about 10 students, a majority had mixed feelings about the navigation. Did it function? Yes. Is it ugly? Kind of. Even though this design is efficient, many users pointed out it takes up too much screen space.</br></br> With inspiration from the Google Drive app, I plan on implementing hiding the secondary navigation for each category with a "more" button (like my back button here!).',
            },
        },

        //DYNAMIC CONTENT
        dynamicContent: {
            name: 'Dynamic Content',
            heading: 'Componentization and manipulation',
            content: 'Reloading all the content everytime we click a button drives not only us crazy, but the technology as well! This application is a perfect use case for component-driven design. It would allow developers and designers to build in flexible units and combine them to create complex design systems.</br></br>',
        },

        //USER TESTING
        testing: {
            name: 'User Testing',
            heading: 'Test and Repeat',
            content: 'Initial designs are never perfect and this project is no exception. I\'m currently on my fourth version based on user feedback.</br></br> Testing is part of the process so designs are bound to change. The navigation, consolidation of information, and overall aesthetic are still improving, but the design has come a long way since the initial designs.',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Branding, navigating complex interfaces, and user testing',
            content: 'CUNY recently rebranded and are slowly creating a cohesive look between all their products. To ensure that CUNYfirst would fit into their wide array of products, I followed those guidelines.</br></br> Thinking about new ways of navigation for this complex interface was a great experience as well. It opened me up to unconventional solutions that I have not seen before (they may be implemented elsewhere).</br></br> Those who did test it said it was very easy to use; with the exception of the bugs in the prototype. With positive and negative feedback from users, I\'ll iterate over the current design for further improvement.',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough',
            content: 'Take a walk through the screens I\'ve completed. Not everything can be navigated, but it will give a general idea of how the app may function.',
            p: 'https://www.figma.com/proto/dhwt35X2dmleBEXl4F6QAj0U/CUNYFIRST-sample-ifgma?node-id=138%3A14936&viewport=562%2C-660%2C0.25&scaling=scale-down',

        },
    },

    //SALVATION ARMY
    {
         //HOMEPAGE SETUP
         project: 'Salvation Army',
         next: 'gladwell',
         prev: 'cunyfirst',
         href: 'salvationarmy',
         name: 'Rebranding Salvation Army',
         platform: 'Print and Web',
         role: 'Designer | Branding | Art Direction',
        //  description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
         descColor: 'primary-white-text',
         image: 'salvation-army/before-after.svg',
         primaryColor: 'salvation-primary-red',
         supportColor: 'cuny-primary-light',
         secondaryColor: 'salvation-secondary',
            buttonColor: 'cuny-primary',
         
        summary: {
            overview: 'The Salvation Army is truly an iconic brand. However, as their reach expands into now over 10 areas, it may be difficult for those seeking help to find exactly what they need. This is my take on creating a modular logo that can be expanded for multiple use cases.',

            problem: 'When viewing the logo in a small size, it is almost illegible. Also, there is currently no way to discern between one volunteer over another which may cause people to not find immediate help.',

            goal: 'Create a simple logo and update the brand guidelines. It should represent the brand\'s mission statement while also being flexible to change in terms of color and text/logo pairings.',

            approach: 'With The Salvation Army being a community-driven, Christian organization, I observed their imagery, brand guidelines, and mission statement for inspiration.',

            solution: 'The arrows represent stacked housing (community) and pointing up towards God. When stacked, it forms a chevron-like pattern to represent people coming together. This was a quick project to brand generation under a tight deadline.',
        
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
         next: 'blah',
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
            overview: 'Gladwell\'s books are fantastic at explaining complex topics of human behavior with simple book covers that are great.</br></br> I challenged myself to add some "life" into these covers. Even though the books aren\'t related, I set out to create cohesiveness for three of his most popular books.',
            
            problem: 'Although all the original covers work for their purpose, they don\'t pop from the shelf to stand out from other books in their category.',

            goal:  'Create a set of book covers for one author that are not related but can stand alone or as a set.',

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

var visual = [


    // {
    //     //SAFE SEX CAMPAIGN
    //      //HOMEPAGE SETUP
    //      project: 'Safe Sex Campaign',
    //      href: 'safesex',
    //      name: 'Male Teen STD Awareness Posters',
    //      platform: 'Print',
    //      role: 'Designer | Art Direction',
    //      description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
    //      descColor: 'primary-black-text',
    //      image: 'teen-safe-sex/hero-image.svg',
    //      primaryColor: 'sex-yellow',
    //      supportColor: 'sex-blue',
    //      secondaryColor: 'sex-blue',
    //      buttonColor: 'cuny-primary',
         
    //     //CASE STUDY SETUP
    //     overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',

    //     problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

    //     goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

    //     approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

    //     solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",

    //     tools: [
    //         'Illustrator',
    //         'Indesign',
    //         'Photoshop',
    //     ],

    //      //IMAGES


    //     images: [
    //         'teen-safe-sex/safesex',
    //     ],
    // },
]