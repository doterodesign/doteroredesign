var contentContainer = document.getElementById('content-container');
var navContainer = document.getElementById('nav-container');
var blahContainer = document.getElementById('blah');
var homeContainer = document.getElementById('home');
var cunyfirstContainer = document.getElementById('cunyfirst');
var salvationArmyContainer = document.getElementById('salvationarmy');
var safeSexContainer = document.getElementById('safesex');
var gladwellContainer = document.getElementById('gladwell');
//NAVIGATION INFORMATION
var navigation =
{
    intro: '<h1>Hey, </br>I\'m Dimitri!</h1><h2>Product Designer</h2> <h2>Visual Designer</h2> <h2>Wannabe Developer</h2> <h2>Always Learning</h2>',
    description: 'I help communicate clear user experiences and brand messaging with easy to understand designs',
    love: 'Coded with love',
    primaryButton: 'learn more',
    about: 'about',
    secondaryButton: 'let\'s chat',
    contact: 'contact'
}

// PREVIEW PROJECTS
var cases = [
    {
    //CASE STUDY SETUP

        //HOMEPAGE SETUP
        project: 'BLAH',
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

            sketch: {
                size: 'sm',
                
                "images": [
                    {
                        name: 'blah/hand-sketches.jpg',
                        caption: 'Sketches of the concept and low-fi wireframes',
                    }
                ]
            },

            approach: {
                size: 'md',
            
                "images": [
                    {
                        name: 'blah/stat2.png',
                        caption: 'Statistics of adults that use apps to relieve stress in 2017'
                    },
                    {
                        name: 'blah/stat3.png',
                        caption: 'Statistics of how serious mental health was taken in 2018'
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



    
        approaches: {
            name: 'introduction',

            "approach": [
                {
                    name: 'Information Inputted Is Never Stored',
                    heading: 'No information storage = No permissions needed',
                    content: 'I wouldn\'t want my thoughts recorded anywhere for anyone to grab; Would you? After a message is complete on BLAH, it gets swiped away and no information is stored. </br></br>The call feature behaves the same way. Nothing is recorded before, during, or after a call. It\'s just you yelling at your phone until you feel better. You won\'t hurt it\'s feelings, I promise.',
                    "image": [
                        {
                            name: 'blah/stat2.png',
                            caption: 'Statistics of adults that use apps to relieve stress in 2017'
                        },
                        {
                            name: 'blah/stat3.png',
                            caption: 'Statistics of how serious mental health was taken in 2018'
                        },
                    ]
                },
                {
                    name: 'My approach to self-harm prevention',
                    heading: 'Quick access to the best suicide prevention resource',
                    content: 'The app does not replace therapy. I\'m a big advocate for getting help when people need it most. It is meant as a forgetful journal and not to replace human interaction and comfort. </br></br> If a user feels like harming themselves, I\’ve implemented a contact button to the National Suicide Prevention Line phone number next to the BLAH call button. This button actually calls the hotline so it should only be used in real emergencies.',
                    "image": [
                        {
                            name: 'blah/stat2.png',
                            caption: 'Statistics of adults that use apps to relieve stress in 2017'
                        },
                        {
                            name: 'blah/stat3.png',
                            caption: 'Statistics of how serious mental health was taken in 2018'
                        },
                    ]
                },
            ]
        },

        //future features
        future: {
            name: 'Future Features',
            heading: 'What else can be added?',
            content: 'Have you gone to therapy? It\'s expensive! It would be great to provide quality therapy to those that can\'t afford it.</br></br> For an intermediate step, I\'d love to test a chatbot custom to each user that adapts to how they speak and allow the user to reflect on their thoughts. Implementing this on both the message and phone features would be awesome but extremely difficult to filter out negative self-speak.</br></br>Through a guided thought process, the chatbots can help users come to their own conclusions and feel accomplished to have come closer to solving their current problem.',
        },

        proto: {
            name: 'Prototype',
            heading: 'Brief walkthrough',
            content: 'Because the app is a concept and not fully fleshed out, this is a walkthrough of the barebones functionality. You\'ll walk through the basic onboarding process and get to explore how to interact with the messaging and call features (sorry swiping the messages up is not in this prototype).',
            p: '<iframe title="BLAH Walkthrough Preview" style="border: none;" src="https://marvelapp.com/458gfhe?emb=1&iosapp=false&frameless=false"></iframe>',
        },
        
    },

    {
        //HOMEPAGE SETUP
        project: 'CUNYfirst',
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
        overview: 'Being in and out of the CUNY System for almost a decade, I\'ve had the opportunity to experience a majority of their products. Being a decade old in 2019, CUNYfirst has not changed technologies at all (confirmed with faculty). </br></br> With technologies like React, Node.js, and Amazon Web Services, this product can be revamped and be functional for students.',
        
        problem: "CUNYfirst is a distributed product to many Universities. CUNY hasn't tackled this issue because of the cost of changing the product across many schools. However, as new tech appears, Universities might turn to more modern products and students continue to suffer with a bug-ridden product that has no mobile capabilities.",

        goal: 'Because the product is so large, I chose to design a mobile version of CUNYfirst. More users handle everything on their phone and with no mobile capabilities, the product is harder to access. The redesign has similar functionality to the current web-app, but completely redesigned for mobile devices.',

        approach: 'I.A. Restructuring, user research and testing, new approaches to mobile navigation, and a lot of trial and error.',

        solution: "The user base is massive for this app so I took a gestureless approach to the web app. Through buttons and easily digestable information, the user doesn't feel overwhelmed by the amount of accessible content. I'm currently working on a more refined approach to the navigation as well.",

        tools: [
            'Figma',
            'Overflow',
            'Illustrator',
            'Principle'
        ],

        prototype: '#prototype',

        //INTRODUCTION
        introductionSub: 'Wrapping our heads around CUNYfirst',

        introduction: 'Have you ever felt like you have no one to speak to? Not because there\'s no one there to listen, but because you fear being judged. Even worse, you can get hurt if you do. Anxiety affects 25.1% of kids ages 13-18 but only 60% get treatment. Anxiety can be caused by many things and after speaking to many individuals around 20-24 about their teenage to adult years, many agreed social media made them more self-conscious, anxious, and depressed more often.',

        urSub: 'Who\'ll even use this? & demographic',

        ur: 'Even though anyone can use the app, based on the statistics I found, 18-29 year old females would be the main user demographic.</br></br>About 50% of all age groups imagine they would use an app for stress and anxiety relief, while only 8% on average use them regularly. The odds aren\'t looking great for long-term use of the app but let\'s be hopeful.',
        
        //IMAGES
        image1: 'cunyfirst/home-hero.png',
        urPreview: 'blah/stat1.png',
        sketches: {
            "image": [
                {
                    name: 'blah/hand-sketches.jpg',
                    caption: 'Sketches of the concept and low-fi wireframes',
                }
            ]
        },
        urImage: {
            "image": [
                {
                    name: 'blah/stat2.png',
                    caption: 'Statistics of adults that use apps to relieve stress in 2017'
                },
                {
                    name: 'blah/stat3.png',
                    caption: 'Statistics of how serious mental health was taken in 2018'
                },
            ]
        },

        //COMPETITOR RESEARCH
        crSub: 'Phew! No Competitors',

        cr: 'Thankfully there\'s no one to compete with! Unlike apps such as Daylio, Uplifter, and Moodnotes, Blah does not track any progress of your emotions. Emotion tracking is pretty helpful for people with a therapist. It may not be effective for those that would rather vent and forget.',

        goalSub: 'Why should I use BLAH?',

        goals: {
            "goal": [
                {
                    name: 'What',
                    content: 'Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we\'ve seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.',
                },
                {
                    name: 'Why',
                    content: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',
                },
            ]
        },
        approaches: {
            "approach": [
                {
                    name: 'Information Inputted Is Never Stored',
                    sub: 'No more notebook nonsense',
                    content: 'I wouldn\'t want my thoughts recorded anywhere for anyone to grab; Would you? After a message is complete on BLAH, it gets swiped away and no information is stored. </br></br>The call feature behaves the same way. Nothing is recorded before, during, or after a call. It\'s just you yelling at your phone until you feel better. You won\'t hurt it\'s feelings, I promise.',
                    "image": [
                        {
                            name: 'blah/stat2.png',
                            caption: 'Statistics of adults that use apps to relieve stress in 2017'
                        },
                        {
                            name: 'blah/stat3.png',
                            caption: 'Statistics of how serious mental health was taken in 2018'
                        },
                    ]
                },
                {
                    name: 'My approach to self-harm prevention',
                    sub: 'Getting real help when it\'s needed',
                    content: 'THE APP DOES NOT REPLACE THERAPY. I\'m a big advocate for getting help when people need it most. It is meant as a forgetful journal and not to replace human interaction and comfort. </br></br> If a user feels like harming themselves, I\’ve implemented a contact button to the National Suicide Prevention Line phone number next to the BLAH call button. This button actually calls the hotline so it should only be used in real emergencies.',
                    "image": [
                        {
                            name: 'blah/stat2.png',
                            caption: 'Statistics of adults that use apps to relieve stress in 2017'
                        },
                        {
                            name: 'blah/stat3.png',
                            caption: 'Statistics of how serious mental health was taken in 2018'
                        },
                    ]
                },
            ]
        },
    },
]

var visual = [

    {
        //SALVATION ARMY
         //HOMEPAGE SETUP
         project: 'Salvation Army',
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
         
        //CASE STUDY SETUP
        overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',

        problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

        goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

        approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

        solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",

        tools: [
            'Illustrator',
            'Indesign',
            'Photoshop',
        ],

         //IMAGES


        images: [
            'salvation-army/hero-image',
            'salvation-army/pattern',
            'salvation-army/color-palette',
        ],
    },

    {
        //SAFE SEX CAMPAIGN
         //HOMEPAGE SETUP
         project: 'Safe Sex Campaign',
         href: 'safesex',
         name: 'Male Teen STD Awareness Posters',
         platform: 'Print',
         role: 'Designer | Art Direction',
         description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
         descColor: 'primary-black-text',
         image: 'teen-safe-sex/hero-image.svg',
         primaryColor: 'sex-yellow',
         supportColor: 'sex-blue',
         secondaryColor: 'sex-blue',
         buttonColor: 'cuny-primary',
         
        //CASE STUDY SETUP
        overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',

        problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

        goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

        approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

        solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",

        tools: [
            'Illustrator',
            'Indesign',
            'Photoshop',
        ],

         //IMAGES


        images: [
            'teen-safe-sex/safesex',
        ],
    },

    {
        //SAFE SEX CAMPAIGN
         //HOMEPAGE SETUP
         project: 'Malcolm Gladwell',
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
         
        //CASE STUDY SETUP
        overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',

        problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

        goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

        approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

        solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",

        tools: [
            'Illustrator',
            'Indesign',
            'Photoshop',
        ],

         //IMAGES


        images: [
            'gladwell/gladwell',
        ],
    },
]