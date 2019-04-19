var contentContainer = document.getElementById('content-container');
var navContainer = document.getElementById('nav-container');
var blahContainer = document.getElementById('blah');
var homeContainer = document.getElementById('home');
var cunyfirstContainer = document.getElementById('cunyfirst');
//NAVIGATION INFORMATION
var navigation =
{
    intro: 'Designer.<br>Climber.<br>Learner.',
    description: 'Creating fluid experiences for users that businesses love. </br>Currently open to new opportunities!',
    love: 'Coded with love',
    primaryButton: 'learn more',
    about: 'about',
    secondaryButton: 'let\'s chat',
    contact: 'contact'

}

// PREVIEW PROJECTS
var cases = [
    {
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

        //CASE STUDY SETUP
        overview: 'I’ve always been interested in psychology and how the mind works. In junior high, my friend and I came up with a concept to share your thoughts without being identified (similar to Twitter). </br></br>Fast forward to today, I’ve taken a new approach on this concept with an offline app that allows you to share your thoughts without fear of the information being stored, manipulated, or read by someone else.',
        
        problem: "Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we've seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.",

        goal: 'I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',

        approach: 'I conducted interviews with family and friends about mental health and self-expression, as well as tested the concept to see how people felt about its practicality.',

        solution: "With people expressing themselves in both written and spoken form, I created a vent and forget system that never stores or records anything a user says or does in the app. After venting, the user is less likely to remember what they were upset about and without reference to why, they move on faster.",

        tools: [
            'Figma',
            'Overflow',
            'Illustrator',
            'Principle'
        ],

        prototype: '#prototype',

        //INTRODUCTION
        introductionSub: 'General and Social Anxiety from Social Media',

        introduction: 'Have you ever felt like you have no one to speak to? Not because there\'s no one there to listen, but because you fear being judged. Even worse, you can get hurt if you do. Anxiety affects 25.1% of kids ages 13-18 but only 60% get treatment. Anxiety can be caused by many things and after speaking to many individuals around 20-24 about their teenage to adult years, many agreed social media made them more self-conscious, anxious, and depressed more often.',

        urSub: 'Who\'ll even use this? & Demographic',

        ur: 'Even though anyone can use the app, based on the statistics I found, 18-29 year old females would be the main user demographic.</br></br>About 50% of all age groups imagine they would use an app for stress and anxiety relief, while only 8% on average use them regularly. The odds aren\'t looking great for long-term use of the app but let\'s be hopeful.',
        
        //IMAGES
        image1: 'blah/blah-landing.svg',
        image2: 'blah/blah-test.jpg',
        image3: 'blah/isometric-map.jpg',
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
        }
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

        urSub: 'Who\'ll even use this? & Demographic',

        ur: 'Even though anyone can use the app, based on the statistics I found, 18-29 year old females would be the main user demographic.</br></br>About 50% of all age groups imagine they would use an app for stress and anxiety relief, while only 8% on average use them regularly. The odds aren\'t looking great for long-term use of the app but let\'s be hopeful.',
        
        //IMAGES
        image1: 'cunyfirst/home-hero.png',
        image2: 'blah/blah-test.jpg',
        image3: 'blah/isometric-map.jpg',
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
        }
    },
]