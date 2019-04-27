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
        image: 'blah-screen.png',
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
        
            lesson: "Some lessons I learned."
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
                        name: 'blah/hand-sketches.jpg',
                        caption: 'Sketches of the concept and low-fi wireframes',
                    }
                ]
            },

            goal: {
                size: 'xs',

                "images": [
                    {
                        name: 'blah/hero-screen.png',
                        caption: 'Landing screen',
                    }
                ]
            },

            feature1: {
                size: 'xs',
                
                "images": [
                    {
                        name: 'blah/onboard-1.png',
                        caption: 'Onboard-1: Messages not stored',
                    },
                    {
                        name: 'blah/onboard-2.png',
                        caption: 'Onboard-2: No information recorded',
                    },
                    {
                        name: 'blah/onboard-3.png',
                        caption: 'Onboard-3: Suicide Prevention Hotline',
                    }
                ]
            },
            feature2: {
                size: 'xs',
                
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
        image: 'cuny-screen.png',
        primaryColor: 'cuny-primary',
        supportColor: 'cuny-primary-light',
        secondaryColor: 'cuny-primary-blue',
        buttonColor: 'cuny-primary',


        //CASE STUDY SETUP
        summary: {
            overview: 'Being in and out of the CUNY System for almost a decade, I\'ve had the opportunity to experience a majority of their products. Being a decade old in 2019, CUNYfirst has not changed technologies at all (confirmed with faculty). </br></br> With technologies like React, Node.js, and Amazon Web Services, this product can be revamped and be functional for students.',
        
            problem: "CUNYfirst is a distributed product to many Universities. CUNY hasn't tackled this issue because of the cost of changing the product across many schools. However, as new tech appears, Universities might turn to more modern products and students continue to suffer with a bug-ridden product that has no mobile capabilities.",
    
            goal: 'Because the product is so large, I chose to design a mobile version of CUNYfirst. More users handle everything on their phone and with no mobile capabilities, the product is harder to access. The redesign has similar functionality to the current web-app, but completely redesigned for mobile devices.',
    
            approach: 'I.A. Restructuring, user research and testing, new approaches to mobile navigation, and a lot of trial and error.',
    
            lesson: 'Some lessons I learned',

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
                        caption: '',
                    },
                    {
                        name: 'cunyfirst/wireframe-2.svg',
                        caption: '',
                    },
                ]
            },

            navigation: {
                size: 'xs',

                "images": [
                    {
                        name: 'cunyfirst/navigation.png',
                        caption: 'Primary and secondary selection buttons',
                    },
                ]
            },

            dynamic: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/extra-screens.png',
                        caption: 'Primary and secondary selection buttons',
                    },
                    {
                        name: 'cunyfirst/selections.png',
                        caption: 'Primary screens sample',
                    },
                ]
            },
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'Wrapping our heads around CUNYfirst',
            content: 'Content explaining what cunyfirst is as a business'
        },

        //PROBLEM
        problem: {
            name: 'Problems',
            heading: 'Hitting the pain points',
            content: 'summarizing the primary pain points'
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Mobile Web App for CUNYfirst',
            content: 'I decided to focus on the mobile version of the website. Many users know that CUNYfirst has an app, however, do not use it because of its limited functionality and inability to log in properly.</br></br>'
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
            content: 'Primary userflows and why they were important to define before designing the screens.'
        },

        //WIREFRAMES
        wireframe: {
            name: 'Wireframes',
            heading: 'Defining the foundations (low-fi wires)',
            content: 'Presenting the wireframes',
        },

        //NAVIGATION
        navigation: {
            name: 'Nav Design',
            heading: 'Button focused navigation',
            content: 'To navigate this amount of information, dropdowns and gesture memorization were not good options for optimal information accessibility.</br></br> Describe accessability friendly.',
            feedback: {
                heading: 'Button navigation not well recceived',
                content: 'After testing with about 10 students, a majority had mixed feelings about the navigation. Did it function? Yes. Is it ugly? Kind of. Even though this design is efficient, many users pointed out it takes up too much screen space.</br></br> With inspiration from the Google Drive app, I plan on implementing hiding the secondary navigation for each category with a "more" buttone (like my back button here!). add more?'
            },
        },

        //DYNAMIC CONTENT
        dynamicContent: {
            name: 'Dynamic Content',
            heading: 'Componentization and manipulation',
            content: 'Reloading all the content everytime we click a button drives not only us crazy, but the browser as well! This application is a perfect use case for component-driven design. It allows developers and designers to build in flexible units and combine them to create complex complex systems.</br></br> More description?  ',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Brand guidelines create absolute consistency',
            content: 'CUNY recently rebranded and are slowly creating a cohesive look between all their products and to ensure that CUNYfirst would fit into their wide array of products, I followed those guides.</br></br> Thinking about new ways of navigation for this complex interface was a great experience as well. It opened me up to unconventional solutions that I have not seen before (they may be implemented elsewhere). Those who did test it said it was very easy to use; with the exception of the bugs in the prototype. With positive and negative feedback from users, I\'ll iterate over the current design for further improvement.',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough',
            content: 'Take a walk through the screens I\'ve completed. Not everything can be navigated, but a lot can be explored to get a general idea of how the app may function.',
            p: 'https://www.figma.com/proto/dhwt35X2dmleBEXl4F6QAj0U/CUNYFIRST-sample-ifgma?node-id=138%3A14936&viewport=562%2C-660%2C0.25&scaling=scale-down"',

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
         description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
         descColor: 'primary-black-text',
         image: 'salvation-army/before-after-2x.png',
         primaryColor: 'primary-white',
         supportColor: 'cuny-primary-light',
         secondaryColor: 'salvation-primary-red',
            buttonColor: 'cuny-primary',
         
        summary: {
            overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',

            problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

            goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

            approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

            solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",
        },

        tools: [
            'Illustrator',
            'Indesign',
            'Photoshop',
        ],

         //IMAGES


        img: {
            size: 'full',
            images: [
                {
                    name: 'salvation-army/hero-image.png',
                    caption: ''
                },
                {
                    name:  'salvation-army/pattern.png',
                    caption: ''
                },
                {
                    name: 'salvation-army/color-palette.png',
                    caption: ''
                },
            ]
        }
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
         descColor: 'primary-black-text',
         image: 'gladwell/gladwell-hero.png',
         primaryColor: 'primary-white',
         supportColor: 'sex-blue',
         secondaryColor: 'sex-red',
         buttonColor: 'cuny-primary',
         
        summary: {
            overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',

            problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

            goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

            approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

            solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",
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
                size: 'md',

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
        }
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