//NAVIGATION INFORMATION
const homeContent =
{
    intro: '<h1>Hey, </br>I\'m Dimitri!</h1><h2>UX | UI | Product Designer</h2> <h2>Visual Designer</h2> <h2>Always Learning</h2>',
    description: 'I work to help create clear user experiences and branding between companies and their users.</br></br> With a background in product-design and photo-retouching, I aim to bring unique experiences with a focus on usability.',
    love: 'Coded with love',
    primaryButton: 'learn more',
    about: 'about',
    secondaryButton: 'let\'s chat',
    contact: 'contact',
    process: [
                {
                    name: 'research',
                    heading: 'Sample title',
                    content: 'The platforms that exist currently spread out their features into multiple softwares. This is because new products get developed separately due to the of the complexity of the legacy-code of the original platforms. It causes a break in the user experience when a user has to visit multiple platforms to complete different tasks.'
                },
                {
                    name: 'research',
                    heading: 'Sample title',
                    content: 'The platforms that exist currently spread out their features into multiple softwares. This is because new products get developed separately due to the of the complexity of the legacy-code of the original platforms. It causes a break in the user experience when a user has to visit multiple platforms to complete different tasks.'
                },
            ]
}

// PREVIEW PROJECTS
const caseStudies = [
    
    //ALUMINYZE
    {
        //HOMEPAGE SETUP
        // status: 'view application</br> <p>case study coming soon</p>',
        // disable: 'true',
        project: 'ALUMINYZE',
        next: 'house2homeBusiness',
        prev: 'ipc',
        href: '#aluminyze',
        buttonCTA: 'VIEW WEBSITE',
        name: 'Designing a responsive metal print ordering experience',
        platform: 'Mobile',
        role: '<bold class="cr-red-base">Intern</bold> | Component Library | Prototyping',
        purpose: 'Simplifying the online photo ordering experience',
        csDetails: {
            length: {
                name: 'Length',
                description: '3 months',
            },
            capacity: {
                name: 'Capacity',
                description: 'Full-time',
            },
            industry: {
                name: 'Industry',
                description: 'Photography',
            },
            where: {
                name: 'Agency',
                description: 'UX Design Collective',
            },
            role: {
                name: 'roles',
                description: 'UX/UI<br>Research<br>Prototyping<br>Component Library<br>',
            },
            tools: {
                name: 'tools',
                description: 'Figma<br>Miro<br>',
            },
        },
        // description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'cover/aluminyze-cover-v2.png',
        primaryColor: 'ft-green',
        supportColor: 'ft-green',
        secondaryColor: 'core-secondary',
        buttonColor: 'core-primary',


        //CASE STUDY SETUP
        summary: {
            overview: 'We wanted to create a guided ordering for Aluminyze\'s clients to make the creating custom orders easier and more intuitive for a growing audience. With most of their competitors having a responsive site and application, standing out as a metal print company versus a traditional photo was a selling point.<br><br>When the client decided to create a responsive web experience versus only desktop, it was my job to research competitors, synthesize our user-testing for patterns and potential features, build out the component library, write the flow documentation, and create the prototypes used to present to the client and be a reference for the development team when we handed off.',
        
            problem: 'The client was doing a full rebrand and wanted to compete in the modern market for metal print ordering. The previous design was not completely responsive, accessible, or pleasant to use.',

            goal: 'Because the client wanted the design to potentially be used for a mobile app, we needed to design reusable, modular components to help reduce development time for multiple use cases and expanding feature sets.',

            approach: 'Competitive analysis, user-testing, information architecture, and feature consolidation were used to make sure we only designed what was necessary for users to complete their tasks.',

            lesson: 'Working with a PM and dev team to ensure the product was able to be developed on schedule taught me client constraints and the difficulties one may face when selling an idea.',

            solution: "We found that mobile apps were great references for photo-editing applications with the growing use of Instagram and Snapchat. We used our user-testing and analysis of competitors to create a guided ordering experience so even older users wouldn't be overwhelmed with the process.",
        },

        img: {

            introduction: {
                size: 'xl',
                bgColor: 'none',
            
                
                "images": [
                    {
                        name: 'aluminyze/single-image-flow.jpg',
                        caption: 'User-journey for one prototype that was tested',
                    },
                    {
                        name: 'aluminyze/after-thoughts.jpg',
                        caption: 'Compilation of key observations from user testing',
                    },
                    {
                        name: 'aluminyze/after-thoughts-summary.png',
                        caption: 'Summary of all the most important observations during testing',
                    },
                ]
            },

            problem: {
                size: 'lg',
                bgColor: '#DAE2F4',
                bgState: 'true',

                "images": [
                    {
                        name: 'aluminyze/modal-example.png',
                        caption: 'Modal example and initial design for image editing feature',
                    },
                    {
                        name: 'aluminyze/dropdown-example.png',
                        caption: 'Dropdown example: Not the best for small screens',
                    },
                ]
            },

            mobileTest: {
                size: 'xs',
                bgColor: '#DAE2F4',
                bgState: 'true',

                "images": [
                    {
                        name: 'aluminyze/mobile-dropdown-test-1.png',
                        caption: 'Test for dropdowns in mobile layout',
                    },
                    {
                        name: 'aluminyze/mobile-dropdown-test-2.png',
                        caption: 'Alternate test for dropdown integration',
                    },
                ]
            },

            v1: {
                size: 'xs',
                bgColor: 'rgba(127, 196, 175, 0.4)',
                bgState: 'true',

                "images": [
                    {
                        name: 'aluminyze/v1-editing.png',
                        caption: 'v1 of editing feature',
                    },
                    {
                        name: 'aluminyze/v1-finish.png',
                        caption: 'v1 of choosing print finish',
                    },
                    {
                        name: 'aluminyze/v1-image-selection.png',
                        caption: 'v1 of uploading images from your device',
                    },
                    {
                        name: 'aluminyze/v1-navigation.png',
                        caption: 'v1 of primary navigation w/ footer-descriptors',
                    },
                    {
                        name: 'aluminyze/v1-upload.png',
                        caption: 'v1 of upload screen for clear CTA testing',
                    },
                ]
            },

            v2: {
                size: 'xs',
                bgColor: '#F4E9D9',
                bgState: 'true',

                "images": [
                    {
                        name: 'aluminyze/v2-home.png',
                        caption: 'v2 of home screen',
                    },
                    {
                        name: 'aluminyze/v2-finish.png',
                        caption: 'v2 of choosing print finish',
                    },
                    {
                        name: 'aluminyze/v2-edit.png',
                        caption: 'v2 of editing features',
                    },
                    {
                        name: 'aluminyze/v2-modal-cta.png',
                        caption: 'v2 of modal example',
                    },
                    {
                        name: 'aluminyze/v2-upload.png',
                        caption: 'v1 of uploading images from your device',
                    },
                    {
                        name: 'aluminyze/v2-save.png',
                        caption: 'v2 of save functionality',
                    },
                ]
            },

            mobileToDesktop: {
                size: 'xl',
                bgColor: '#F4E9D9',
                bgState: 'true',

                "images": [
                    {
                        name: 'aluminyze/mobile-desktop-editing.png',
                        caption: 'mobile to desktop for editing functionality',
                    },
                    {
                        name: 'aluminyze/mobile-desktop-save.png',
                        caption: 'mobile to desktop for save functionality',
                    },
                ]
            },

            annotationExample: {
                size: 'lg',
                bgColor: 'none',

                "images": [
                    {
                        name: 'aluminyze/annotation-example.png',
                        caption: 'Annotation example for photos tray functionality',
                    },
                ]
            },
        },

        //INTRODUCTION
        introduction: {
            name: 'introduction',
            heading: 'User-Testing and Information Summary',
            content: 'My first major task during my internship was to document our recorded user-testing and although it was my first time doing this, I came prepared. I proposed a method of documentation that AJ&Smart, a Design Sprint studio in Berlin, had created using the application Miro(visual below).<br><br>The team was open to a different method of documentation and allowed me to run with it. Here are some of the things that using Miro allowed us to do easily and quickly:<br><br><bold>1. Live collaboration during testing<br>2. User profiles<br>3. Detailed test summaries</bold>',
            list: [
                'Live collaboration during testing',
                'User profiles',
                'Detailed test summaries'
            ]
        },

        //PROBLEM
        problem: {
            name: 'Problem',
            heading: 'Initial Designs Weren\'t Responsive',
            content: 'The application was supposed to be desktop-only initially. The designer on the project before me came up with good solutions based on the information given by the client and the research that was done.<br><br>Although the client assured us it would not become responsive, towards the end of handing off the designs, the design was requested to be mobile-friendly. <bold>After testing, some features wouldn\'t translate well to mobile including:<br><br>1. Long dropdowns<br>2. Dependency on modals<br>3. Very tall buttons and inputs</bold>',
        },

        //USER RESEARCH
        ur: {
            name: 'User Research',
            heading: 'Back to the Drawing Board',
            content: 'After a lot of brainstorming and testing, we decided to start from scratch. By researching competitors like Adorama Pics and Shutterfly, we were able to access what features Aluminyze had versus what they have implemented.<br><br>We also checked out what mobile photo-editing apps were doing to see what features were being implemented specifically for mobile.<bold> From there, we began building out wireframes for major touch-points including:<br><br>1. Primary and secondary navigations<br>2. Image editing features<br>3. Selection states of customizable options</bold>',
        },

        //INTERNALTESTING
        internalTesting: {
            name: 'Internal Testing',
            heading: 'Development Requests & Component Flexibility',
            content: 'After doing internal testing and presenting to the client for the designs above, the development team informed us that the designs must be flexible enough to be used for both desktop and mobile seamlessly. The dev team was building in Angular and because we were behind schedule, they did not want to have to build two sets of features.<br><br>This constraint was great in hindsight because we ended up continuing to research and modify our designs to work as truely modular components. Also, with how Figma components work, I structured them as you would in code. Some were heavily nested but it gave us insight into how things would shift and change while designing for desktop and tablets.',
        },
        //WIREFRAMES
        mobileApproved: {
            name: 'Mobile Approved',
            heading: 'With mobile approved, desktop and tablet were relatively easy',
            content: 'Once a majority of the heavy features like navigation, CTA\'s, and editing capabilities were approved, we began translating those designs to desktop. Because the mobile components were designed with modularity in-mind, we only had to shift the orientation of the navigation and create extended versions of other components to fit the larger screen sizes.',
        },

        //NAVIGATION
        handoff: {
            name: 'Handoff',
            heading: 'Handoff to Development',
            content: 'We began handing off to development once the mobile designs got approved so they could begin building out the components. Once the desktop designs were approved, I worked with the dev team to ensure that any questions about interactions, functionality, and logic were answered.<br><br>To help with this, my lead taught me an annotation method to document the states of components and describe how they would function. This was extremely helpful for both me to learn and the development team to refer to as they built. We used status symbols for each screen annotation to determine which were up to date and what needed to be reviewed.',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Lessons Learned',
            content: 'Balancing client needs with constraints in time and development was the most difficult aspect of the project. As deliverables shifted, being able to adjust quickly was essential to meet the deadline.<br><br>The visual branding guidelines were also being developed at the same time for the rest of the site so I had to make sure every color and text-block was a style because the guide could change at anytime (which it did multiple times).<bold>Other main takeaways include:<br><br>1. Tight naming and file structure for less confusion<br>2. Pixel-perfect components make development much easier<br>3. Always have a type and spacing system in place for functional constraints<br>4. Building a component library from scratch</bold>',
        },

        //PROTOTYPE
        proto: {
            name: 'Visit Website',
            heading: 'Visit the live site!',
            content: 'This project is officially live! You can visit it using the button below. There\'s more to discuss about the project like building and maintaining the component library so feel free to reach out if you\'d like to learn more!',
            p: 'https://aluminyze.com/pages/order-now/builder',
        },
    },
     //HOUSE2HOME BUSINESS
     {
        //HOMEPAGE SETUP
        // status: 'view application</br> <p>case study coming soon</p>',
        // disable: 'true',
        project: 'House2Home – Business Plan Discovery',
        next: 'cored',
        prev: 'aluminyze',
        href: '#house2homeBusiness',
        buttonCTA: 'View MVP',
        name: 'Planning ethical e-commerce practices',
        platform: 'responsive',
        role: '<bold class="cr-red-base">Lead Designer</bold> | Business Strategy | MVP Design',
        purpose: 'Planning an ethical e-commerce platform',
        csDetails: {
            length: {
                name: 'Length',
                description: '2 Days',
            },
            capacity: {
                name: 'Capacity',
                description: 'Exploration',
            },
            industry: {
                name: 'Industry',
                description: 'E-commerce',
            },
            where: {
                name: 'Design Challenge',
                description: 'Bitesize UX',
            },
            role: {
                name: 'roles',
                description: 'Product<br>Business Strategy<br>Userflows<br>MVP Design<br>',
            },
            tools: {
                name: 'tools',
                description: 'Figma<br>Miro<br>',
            },
        },
        // description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'cover/house2home-cover.svg',
        primaryColor: 'ft-green',
        supportColor: 'ft-green',
        secondaryColor: 'core-secondary',
        buttonColor: 'core-primary',
    
    
        //CASE STUDY SETUP
        summary: {
            overview: 'Joe Formica of Bitesize UX created a great five day design challenge. With only user-research and a persona, the task was to design a home accessory starter-kit builder for people that moved into a new home.<br><br>Here\'s some insider information; I love a good challenge. However, in typical fashion, I wanted to make this a well-rounded project focusing on the business as a whole, as well as the initial challenge.<b> This decision increased the scope dramatically into planning an ethical e-commerce experience</b> geared towards helping customers stick to their objective and not go over budget. Not only that, it\'ll help them make smarter purchasing decisions through customizable and personalized results.<br><br><b>This case study is split into two parts.</b> This part focuses on business objectives, feature planning, and user research to give an in-depth look into what drove the design decisions made and what makes this platform different than other e-commerce sites like Target, Way Fair, and Amazon. The second part is all about creating the MVP and what I learned. I\'ll take you through the wireframes, how the kit-builder flow was implemented, feature design decisions, and the final designs. Let\'s get started!',
        
            problem: 'Customers have a hard time shopping for accessories for their new homes. Some reasons include overchoice, budget limitations, and being unsure of their own design choices.',
    
            goal: 'Create a platform to help reduce overchoice and help customers stay within their shopping objectives while staying in profit as a business.',
    
            approach: 'Define a bird\'s eye view of the business, discover core features needed for user objectives, map out a current e-commerce user experience, and create the user flow for the starter kit builder.',
    
            lesson: 'E-commerce is a money game. I think if businesses focused more on user needs and not primarily company profits, they\'d be able to build a platform on trust and not just low prices or deals. In short, the long game builds customer loyalty.',
    
            solution: "In simple terms, create the Zola of home accessories with budget in mind. Through wholesale agreements and commission-based profits, build a platform on trust that can be recommended by loyal, return customers",
        },
    
        img: {
    
            persona: {
                size: 'lg',
                bgColor: '#DFF9D4',
                bgState: 'true',
                
                "images": [
                    {
                        name: 'house2home/persona-frustrations.png',
                        caption: 'The current frustrations of Amy, our persona (Bitesize UX Research)',
                    },
                    {
                        name: 'house2home/persona-behavior.png',
                        caption: 'How and why Amy is looking to decorate her apartment (Bitesize UX Research)',
                    },
                    {
                        name: 'house2home/persona-goals.png',
                        caption: 'What Amy wants to achieve for her apartment (Bitesize UX Research)',
                    },
                ]
            },

            leanCanvas: {
                size: 'xl',
                bgColor: 'none',
                // bgState: 'true',
                
                "images": [
                    {
                        name: 'house2home/lean-canvas.jpg',
                        caption: 'Lean canvas to provide an overview of the business',
                    },
                ]
            },
    
            hmw: {
                size: 'xl',
                bgColor: 'none',
                // bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/priority-matrix.jpg',
                        caption: 'Priority matrix determines the importance of the \'How Might We\' questions with votes',
                    },
                ]
            },
    
            disneyPlanning: {
                size: 'xl',
                bgColor: 'none',
                // bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/hmw-questions.jpg',
                        caption: 'The selected questions form the priority matrix exercise',
                    },
                    {
                        name: 'house2home/disney-planning-step1.jpg',
                        caption: 'Creative, no-constraints solutions for the HMW questions',
                    },
                ]
            },
    
            impactEffort: {
                size: 'xl',
                bgColor: 'none',
                // bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/impact-effort.jpg',
                        caption: 'Measuring the relative amount of impact and effort to implement features from the Disney exercise',
                    },
                ]
            },

            todo: {
                size: 'lg',
                bgColor: '#F4F5F7',
                bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/mvp-todo-list.jpg',
                        caption: 'Todo list of features in backlog, progress, and complete states for MVP design priorities',
                    },
                ]
            },
    
            sitemap: {
                size: 'lg',
                bgColor: 'none',
                // bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/sitemap.jpg',
                        caption: 'Sitemap of the primary navigation structure',
                    },
                ]
            },
    
            starterkit: {
                size: 'xl',
                bgColor: 'none',
                // bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/starter-kit-flow.jpg',
                        caption: 'An overview flow of how the starter kit tool would function (in-progress)',
                    },
                ]
            },

            mindMap: {
                size: 'xl',
                bgColor: 'none',
    
                "images": [
                    {
                        name: 'house2home/feature-mind-map.jpg',
                        caption: 'Brainstorming wizard solutions for the starter kit functionality',
                    },
                ]
            },

            currentJourney: {
                size: 'full',
                bgColor: 'none',
                // bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/journey-map-current.jpg',
                        caption: 'mobile to desktop for editing functionality',
                    },
                ]
            },

            homepagePreview: {
                size: 'xl',
                bgColor: '#075EBA',
                bgState: 'true',
    
                "images": [
                    {
                        name: 'house2home/homepage-preview.jpg',
                        caption: '<font color="#fff">Sneakpeak of the homepage with the starter kit tool in the MVP</font>',
                    },
                ]
            },
        },
    
        //INTRODUCTION
        introduction: {
            name: 'Persona',
            heading: 'Where do we start? Our persona!',
            content: 'Have you ever bought a personal gift for someone you didn\'t know? Of course not! So how can someone create a user-centered business for your customers if they don\'t understand their needs?<br><br>Luckily, someone else did all that hard research for us. Some key insights I took away from that research (including some not shown) were:<br><br><b>1. Choosing items is difficult due to overchoice<br>2. Staying within budget is essential<br>3. Pinterest is great for inspiration; not decisions<br>4. Choosing items for the specific home style is a challenge<br>5. Can\'t afford an interior designer</b>',
            list: [
                'Live collaboration during testing',
                'User profiles',
                'Detailed test summaries'
            ]
        },
    
        //PROBLEM
        introduction2: {
            name: 'Current Customer Journey',
            heading: '',
            content: 'You\'ve just met Amy, a 23 year old woman from Chicago. Combining her insights with quotes from other potential customers that are frustrated with their current shopping experiences, the journey below is something we can all relate to. It takes into account:<br><br><b>1. Having just moved and being inspired by Pinterest<br>2. Shopping on Wayfair and realizing how expensive it is<br>3. Being satisfied with most items but returning a lamp</b><br><br>We\'ve all bought an item that didn\'t fit our home and returned it, right? Well, what if your shopping experience was more customized for you? Would your choice satisfaction increase and lead to less returns?',
        },
    
        //USER RESEARCH
        leanCanvas: {
            name: 'Lean Canvas',
            heading: 'Lean Canvas – Getting a bird\'s eye view of the business',
            content: 'Customer satisfaction is at the core of House2Home. Not only that, it cares about the customer\'s happiness with the products, as well as their financial well-being.<br><br>Name one e-commerce site that allows you to stick to a budget. You can\'t. They don\'t exist! That competitive advantage is what makes the idea of House2Home so exciting. Now why would they do that? Trust. They have your best interests in mind as a customer and no, it isn\'t a bunch of discounted items. They\'re curated, under $50 items chosen to fit any budget.<br><br>What we learn from the lean canvas includes:<br><br><b>1. The problem we\'re solving for<br>2. Unique value proposition of the company<br>3. Ideal customers & early adopters<br>4. Direct and indirect competitors<br>5. Key metrics<br>6. Competitive advantages<br>7. Cost structure<br>8. Revenue streams<br>9. Potential broad solutions.</b><br><br>That\'s a lot. What we don\'t know yet is what the focus should be on from a design perspective. <b>The next few steps were designed to discover the main features that are needed to test the main business model through an MVP.</b>',
        },
    
        //INTERNALTESTING
        priority: {
            name: 'Priority Matrix',
            heading: 'Priority Matrix w/ HMW – Asking broad questions',
            content: '<b>I\'m going to break down the rest of the process as if you were to recreate these steps.</b> These next few exercises are to determine the features we should focus on for the MVP by importance, impact, and urgency.<br><br>Think of the How Might We exercise as bombarding your friend with questions too broad for an immediate answer. Then prioritize those by importance and how soon you need a solution.<b>The result are the most essential questions that need immediate answers.</b>',
        },
        //WIREFRAMES
        disney: {
            name: 'Disney Creative Design',
            heading: 'Braindumping potential solutions',
            content: 'I like to call this the Disney brain dump. It\'s based off Disney\'s first step of their creative thinking exercise. Once you know which HMW questions to focus on, <b>branch out potential solutions for each question without restrictions.</b><br><br>The example below is my braindump of ideas, no matter how difficult or simple they would be to implement. I then connected solutions that compliment each other to emphasize a particular solution\'s importance to the overall user and business goals (it looks like an investigation). <b>The best ideas get voted on and taken to the last step.</b>',
        },
    
        //NAVIGATION
        impact: {
            name: 'Impact Matrix',
            heading: 'Impact/Effort Matrix – How much work is it to build?',
            content: 'This is the last steps of stickies! Using our chosen stickies from the Disney step, we organize the post-its by how much impact they\'ll provide for the company with how much effort they require.<br><br>To get off the ground quickly, we need a sweetspot of high impact, low effort key features. Those features include:<br><br><b>1. Item selection customization tool<br>2. Help users stay on a budget<br>3. Provide distinction between decor styles, rooms, and items<br>4. Personalized and accurate results through customer needs and preferences<br>5. Create a deep human relationship between the customer and brand</b><br><br>All of that would put enough on anyone\'s plate! But now we have a focus and I categorized each objective into a todo list format. The backlog are features we want, in-progress are features we need, and done, is well, done.',
        },
    
        //Starter Kit
        starterkit: {
            name: 'Starter Kit',
            heading: 'Starter Kit Builder Flow',
            content: 'The result of all the above work was concluding the need for a tool on the site to help users customize their search options. The idea is still being tested and thought out but some of the categories include:<br><br><b>1. Home Size<br>2. Budget<br>3. Decor Styles<br>4. Max Item Count<br>5. Rooms<br>6. Product Categories</b><br><br>To tie in all the concepts we put on virtual stickies, the userflow below outlines the general structure of the tool. More flows such as budget conditionals, checkout, the full tool functionality, and regular searching still have to be documented to see how all the features integrate together.',
        },
    
        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Lessons Learned',
            content: 'All this work was done upfront to ensure that the MVP focused on the essential needs of the user and stayed within the goals of what House2Home would provide for customers. <b>Without this planning, the features that would have been built may not be the current data needed to proceed with creating a barebones, ethical e-commerce platform.</b>',
        },

        //LESSON LEARNED
        nextsteps: {
            name: 'Next Steps',
            heading: 'Next Steps – Designing the MVP',
            content: 'First off, thanks for going through the process with me. We got to understand the business from most angles which influenced the features that need to be implemented and tested in the MVP.<br><br>The next case study for this project will outline the whole design process of the MVP. <b>You can view my progress with the MVP below where you can test the homepage version of the starter kit builder tool.</b> However, I\'d like to build out a full experience to test with users that include all the filtering options to make the experience as customizable as possible. You\'ll be exposed to:<br><br><b>1. Homepage starter kit tool and fields<br>2. Personalized starter kit samples<br>3. Ability to add items + view your cart<br>4. Over budget functionality</b><br><br>Please reach if you have any questions or would like to learn more about my process. Enjoy the rest of the case studies! Oh, and check out the live Miro file that has all the planning that you saw above but with more explanations. Thanks!',
        },
    
        //PROTOTYPE
        proto: {
            name: 'View MVP Prototype',
            heading: 'Visit the live site!',
            content: 'This project is officially live! You can visit it using the button below. There\'s more to discuss about the project like building and maintaining the component library so feel free to reach out if you\'d like to learn more!',
            p: 'https://www.figma.com/proto/0ubMguscZ6bGS9EneEjFit/House2Home?node-id=20%3A1202&viewport=-1918%2C3568%2C0.40846243500709534&scaling=scale-down-width',
            embed: '<iframe src="https://miro.com/app/embed/o9J_kunrghM=/?" frameborder="0" scrolling="no" allowfullscreen></iframe>',
        },
        },

    //CORED
    {
        //HOMEPAGE SETUP
        project: 'corED',
        next: 'blah',
        prev: 'house2homeBusiness',
        href: 'cored',
        name: 'My solution to an outdated college student portal',
        platform: 'Progressive Web App',
        role: '<bold class="cr-red-base">Lead Designer</bold> | UX/UI | I.A. | Component System',
        purpose: 'Moderning the college student portal experience',
        csDetails: {
            capacity: {
                name: 'Capacity',
                description: 'Exploration',
            },
            type: {
                name: 'Industry',
                description: 'Education',
            },
            platform: {
                name: 'platform',
                description: 'Progressive Web App',
            },
            role: {
                name: 'roles',
                description: 'Lead Designer<br>UX/UI<br>I.A.<br>Component System',
            },
            tools: {
                name: 'tools',
                description: 'Figma<br>Overflow<br>Protopie<br>Zero Height<br>Illustrator<br>Principle',
            },
        },
        // description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'cover/cored-cover.png',
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
                size: 'lg-svg',

                "images": [
                    {
                        name: `<svg id="mockup-screen" viewBox="0 0 453 890" fill="none">
                        <g filter="url(#filter0_dd)">
                        <g id="Mask Group">
                        <g id="courses">
                        <g clip-path="url(#clip0)">
                        <path d="M42 53C42 33.1177 58.1177 17 78 17H375C394.882 17 411 33.1177 411 53V793C411 812.882 394.882 829 375 829H78C58.1178 829 42 812.882 42 793V53Z" fill="#FCFCFC"/>
                        <g id="courses-overview">
                        <g id="class-expand" class="class">
                        <g id="Card/primary--default">
                        <rect id="background" x="42" y="211" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2">
                        <text id="primary-text" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="235.844">Spanish 120</tspan></text>
                        <g id="secondary-text">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="257.988">NAC 521&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="279.988">Mon&#x2013;Thu 10:00 AM&#x2013;12:00 PM</tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options">
                        <path d="M371 213H411V297H371V213Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive">
                        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M389 248C389 249.105 389.895 250 391 250C392.105 250 393 249.105 393 248C393 246.895 392.105 246 391 246C389.895 246 389 246.895 389 248ZM391 257C389.895 257 389 256.105 389 255C389 253.895 389.895 253 391 253C392.105 253 393 253.895 393 255C393 256.105 392.105 257 391 257ZM391 264C389.895 264 389 263.105 389 262C389 260.895 389.895 260 391 260C392.105 260 393 260.895 393 262C393 263.105 392.105 264 391 264Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar">
                        <g id="status">
                        <rect id="bar" width="2" height="84" transform="matrix(-1 0 0 1 51 213)" fill="#EEEEEE"/>
                        <rect id="status_2" x="46" y="236" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom" x1="42" y1="297" x2="411" y2="297" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top" x1="42" y1="212" x2="411" y2="212" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        <g class="class">
                        <g id="Card/primary--default_2">
                        <rect id="background_2" x="42" y="296" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2_2">
                        <text id="primary-text_2" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="320.844">Design for Developers</tspan></text>
                        <g id="secondary-text_2">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="342.988">Comp Goeth CG121&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="364.988">Mon&#x2013;Tue 2:00 PM &#x2013; 4:50 PM </tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options_2">
                        <path d="M371 298H411V382H371V298Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive_2">
                        <path id="icon_2" fill-rule="evenodd" clip-rule="evenodd" d="M389 333C389 334.105 389.895 335 391 335C392.105 335 393 334.105 393 333C393 331.895 392.105 331 391 331C389.895 331 389 331.895 389 333ZM391 342C389.895 342 389 341.105 389 340C389 338.895 389.895 338 391 338C392.105 338 393 338.895 393 340C393 341.105 392.105 342 391 342ZM391 349C389.895 349 389 348.105 389 347C389 345.895 389.895 345 391 345C392.105 345 393 345.895 393 347C393 348.105 392.105 349 391 349Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar_2">
                        <g id="status_3">
                        <rect id="bar_2" width="2" height="84" transform="matrix(-1 0 0 1 51 298)" fill="#EEEEEE"/>
                        <rect id="status_4" x="46" y="321" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom_2" x1="42" y1="382" x2="411" y2="382" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top_2" x1="42" y1="297" x2="411" y2="297" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        <g class="class">
                        <g id="primary/primary--double">
                        <g id="Card/primary--default_3">
                        <rect id="background_3" x="42" y="381" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2_3">
                        <text id="primary-text_3" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="405.844">Electronic Design 1</tspan></text>
                        <g id="secondary-text_3">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="427.988">Comp Goeth  CG521&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="449.988">Wed 6:15 PM &#x2013; 9:15 PM</tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options_3">
                        <path d="M371 383H411V467H371V383Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive_3">
                        <path id="icon_3" fill-rule="evenodd" clip-rule="evenodd" d="M389 418C389 419.105 389.895 420 391 420C392.105 420 393 419.105 393 418C393 416.895 392.105 416 391 416C389.895 416 389 416.895 389 418ZM391 427C389.895 427 389 426.105 389 425C389 423.895 389.895 423 391 423C392.105 423 393 423.895 393 425C393 426.105 392.105 427 391 427ZM391 434C389.895 434 389 433.105 389 432C389 430.895 389.895 430 391 430C392.105 430 393 430.895 393 432C393 433.105 392.105 434 391 434Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar_3">
                        <g id="status_5">
                        <rect id="bar_3" width="2" height="84" transform="matrix(-1 0 0 1 51 383)" fill="#EEEEEE"/>
                        <rect id="status_6" x="46" y="406" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom_3" x1="42" y1="467" x2="411" y2="467" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top_3" x1="42" y1="382" x2="411" y2="382" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        </g>
                        <g class="class">
                        <g id="Card/primary--default_4">
                        <rect id="background_4" x="42" y="466" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2_4">
                        <text id="primary-text_4" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="490.844">Programming for Artists</tspan></text>
                        <g id="secondary-text_4">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="512.988">Comp Goeth CG119&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="534.988">Mon &#x2013; Thu 10:00 AM &#x2013; 12:00 PM</tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options_4">
                        <path d="M371 468H411V552H371V468Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive_4">
                        <path id="icon_4" fill-rule="evenodd" clip-rule="evenodd" d="M389 503C389 504.105 389.895 505 391 505C392.105 505 393 504.105 393 503C393 501.895 392.105 501 391 501C389.895 501 389 501.895 389 503ZM391 512C389.895 512 389 511.105 389 510C389 508.895 389.895 508 391 508C392.105 508 393 508.895 393 510C393 511.105 392.105 512 391 512ZM391 519C389.895 519 389 518.105 389 517C389 515.895 389.895 515 391 515C392.105 515 393 515.895 393 517C393 518.105 392.105 519 391 519Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar_4">
                        <g id="status_7">
                        <rect id="bar_4" width="2" height="84" transform="matrix(-1 0 0 1 51 468)" fill="#EEEEEE"/>
                        <rect id="status_8" x="46" y="491" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom_4" x1="42" y1="552" x2="411" y2="552" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top_4" x1="42" y1="467" x2="411" y2="467" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        <g id="section-header">
                        <path id="Rectangle" d="M42 163H410V211H42V163Z" fill="#FCFCFC"/>
                        <text id="Spring 2019" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="193.836">Spring 2019</tspan></text>
                        </g>
                        </g>
                        <g id="finances-overview">
                        <g id="loan-aid" filter="url(#filter1_i)">
                        <rect x="42" y="163" width="188" height="97" fill="#FCFCFC"/>
                        <g id="balance-module/--default">
                        <text id="$5123.00" fill="#1077D1" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="25" font-weight="bold" letter-spacing="0px"><tspan x="82.1182" y="233.045">$5123.00</tspan></text>
                        </g>
                        <text id="Loans Balance" fill="black" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="82.4609" y="196.469">Loans Balance</tspan></text>
                        </g>
                        <g id="loan-aid_2" filter="url(#filter2_i)">
                        <rect x="230" y="163" width="187" height="97" fill="#FCFCFC"/>
                        <g id="balance-module/--default_2">
                        <text id="$3919.24" fill="#1077D1" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="25" font-weight="bold" letter-spacing="0px"><tspan x="269.618" y="233.045">$3919.24</tspan></text>
                        </g>
                        <text id="Aid Received" fill="black" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="276.156" y="196.469">Aid Recieved</tspan></text>
                        </g>
                        <g class="finance-details">
                            <path id="Rectangle_2" d="M42 260H410V308H42V260Z" fill="#FCFCFC"/>
                            <text id="Loan Disbursement" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="290.836">Loan Disbursement</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_5" filter="url(#filter3_ii)">
                        <rect x="42" y="308" width="375" height="41" fill="white"/>
                        </g>
                        <text id="May 12 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="308.406" y="334.469">May 12 2019</tspan></text>
                        <text id="Fall 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="332.785">Fall 2019</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_6" filter="url(#filter4_ii)">
                        <rect x="42" y="346" width="375" height="41" fill="white"/>
                        </g>
                        <text id="October 29 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="281.781" y="372.469">October 29 2019</tspan></text>
                        <text id="Spring 2020" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="370.785">Spring 2020</tspan></text>
                        </g>
                        <g class="finance-details">
                            <path id="Rectangle_3" d="M42 387H410V435H42V387Z" fill="#FCFCFC"/>
                            <text id="Financial Aid Disbursement" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="417.836">Financial Aid Disbursement</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_7" filter="url(#filter5_ii)">
                        <rect x="42" y="435" width="375" height="41" fill="white"/>
                        </g>
                        <text id="May 12 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="308.406" y="461.469">May 12 2019</tspan></text>
                        <text id="Fall 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="459.785">Fall 2019</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_8" filter="url(#filter6_ii)">
                        <rect x="42" y="473" width="375" height="41" fill="white"/>
                        </g>
                        <text id="October 29 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="281.781" y="499.469">October 29 2019</tspan></text>
                        <text id="Spring 2020_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="497.785">Spring 2020</tspan></text>
                        </g>
                        </g>
                        <g id="navigation">
                        <g class="sections">
                        <g id="section">
                        <path d="M319 115H411V163H319V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-4" x="319" y="115" width="92" height="48" fill="white"/>
                        <g id="status-bar_5">
                        <rect id="inactive" x="319" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-4" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="343.282" y="143.785">Search</tspan></text>
                        </g>
                        </g>
                        <g class="sections">
                        <g id="section_2">
                        <path d="M227 115H319V163H227V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-3" x="227" y="115" width="92" height="48" fill="white"/>
                        <g id="status-bar_6">
                        <rect id="inactive_2" x="227" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-3" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="244.993" y="143.785">Calendar</tspan></text>
                        </g>
                        </g>
                        <g class="sections">
                        <g id="section_3">
                        <path d="M134 115H226V163H134V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-2" x="134" y="115" width="92" height="48" fill="white"/>
                        <g id="status-bar_7">
                        <rect id="inactive_3" x="134" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-2" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="166.677" y="143.785">Cart</tspan></text>
                        </g>
                        </g>
                        <g class="sections">
                        <g id="section_4">
                        <path d="M42 115H134V163H42V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-1" x="42" y="115" width="92" height="48" fill="#DDF5FD"/>
                        <g id="status-bar_8">
                        <rect id="inactive_4" x="42" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-1" fill="#0A1974" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="62.0986" y="143.785">Courses</tspan></text>
                        </g>
                        </g>
                        <rect id="secondary-navigation-bar" x="42" y="161" width="92" height="2" fill="#6BC1F2"/>
                        </g>
                        <g id="screen-category-name">
                        <rect id="background_9" x="42" y="53" width="369" height="65" fill="#1077D1"/>
                        <g id="center">
                        <text id="header-title" fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="144.338" y="93.8359">Courses Overview</tspan></text>
                        </g>
                        </g>
                        <g id="phone-defaults">
                        <g id="__mobile-navigation">
                        <g id="mobile/container">
                        <g id="mobile/--active/course">
                        <g id="menu-button__core/master">
                        <path d="M42 749H134.496V797H42V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_4" x="42" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="navigation-bar" x="42" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="basic/table">
                        <path id="icon_5" fill-rule="evenodd" clip-rule="evenodd" d="M84.1819 762.5H99.4545C100.86 762.5 102 763.606 102 764.971V781.029C102 782.394 100.86 783.5 99.4545 783.5H84.1819H81.6364H76.5455C75.1396 783.5 74 782.394 74 781.029V764.971C74 763.606 75.1396 762.5 76.5455 762.5H81.6364H84.1819ZM81.6364 764.971H76.5455V768.676H81.6364V764.971ZM84.1819 768.676V764.971H99.4546V768.676H84.1819ZM81.6364 771.147H76.5455V774.853H81.6364V771.147ZM84.1819 774.853V771.147H99.4546V774.853H84.1819ZM81.6364 777.324H76.5455V781.029H81.6364V777.324ZM84.1819 781.029V777.324H99.4546V781.029H84.1819Z" fill="#666D80"/>
                        </g>
                        </g>
                        </g>
                        <g id="mobile/--inactive/finance">
                        <path d="M134.496 749H226.992V797H134.496V749Z" fill="#FCFCFC"/>
                        <g id="menu-button__core/master_2">
                        <path d="M134.496 749H226.992V797H134.496V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_5" x="134.496" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="Rectangle_6" x="134.496" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="finance/strongbox">
                        <path id="icon_6" fill-rule="evenodd" clip-rule="evenodd" d="M189.496 761.95H171.496C170.391 761.95 169.496 762.931 169.496 764.14V781.664C169.496 782.874 170.391 783.855 171.496 783.855H172.796V784.95H174.996V783.855H185.996V784.95H188.196V783.855H189.496C190.601 783.855 191.496 782.874 191.496 781.664V764.14C191.496 762.931 190.601 761.95 189.496 761.95ZM171.696 781.664V764.14H189.296V766.331H188.196V768.521H189.296V777.283H188.196V779.474H189.296V781.664H171.696ZM186.774 777.604L185.218 779.153L182.731 776.677C182.076 777.062 181.312 777.283 180.496 777.283C179.68 777.283 178.916 777.062 178.261 776.677L175.774 779.153L174.218 777.604L176.705 775.128C176.318 774.475 176.096 773.715 176.096 772.902C176.096 772.09 176.318 771.329 176.705 770.677L174.218 768.201L175.774 766.652L178.261 769.128C178.916 768.742 179.68 768.521 180.496 768.521C181.312 768.521 182.076 768.742 182.731 769.128L185.218 766.652L186.774 768.201L184.287 770.677C184.674 771.329 184.896 772.09 184.896 772.902C184.896 773.715 184.674 774.476 184.287 775.128L186.774 777.604ZM182.696 772.902C182.696 774.112 181.711 775.093 180.496 775.093C179.281 775.093 178.296 774.112 178.296 772.902C178.296 771.692 179.281 770.712 180.496 770.712C181.711 770.712 182.696 771.692 182.696 772.902Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        </g>
                        <g id="mobile/--inactive/academics">
                        <path d="M226.992 749H318.504V797H226.992V749Z" fill="#FCFCFC"/>
                        <g id="mobile/__master/master">
                        <path d="M226.992 749H318.504V797H226.992V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_7" x="226.992" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="Rectangle_8" x="226.992" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="basic/book">
                        <path id="icon_7" fill-rule="evenodd" clip-rule="evenodd" d="M283.492 784.667H265.992C264.059 784.667 262.492 783.1 262.492 781.167V764.833C262.492 762.9 264.059 761.333 265.992 761.333H283.492V780C282.848 780 282.325 780.522 282.325 781.167C282.325 781.811 282.848 782.333 283.492 782.333V784.667ZM279.992 781.167C279.992 780.758 280.062 780.365 280.191 780H265.992C265.348 780 264.825 780.522 264.825 781.167C264.825 781.811 265.348 782.333 265.992 782.333H280.191C280.062 781.968 279.992 781.576 279.992 781.167ZM265.992 763.667H281.159V777.667H265.992C265.583 777.667 265.19 777.737 264.825 777.866V764.833C264.825 764.189 265.348 763.667 265.992 763.667Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        </g>
                        <g id="mobile/--inactive/account">
                        <path d="M318.504 749H411V797H318.504V749Z" fill="#FCFCFC"/>
                        <g id="mobile/__master/master_2">
                        <path d="M318.504 749H411V797H318.504V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_9" x="318.504" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="Rectangle_10" x="318.504" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="basic/user">
                        <path id="icon_8" fill-rule="evenodd" clip-rule="evenodd" d="M364.504 785.833C357.416 785.833 351.671 780.088 351.671 773C351.671 765.912 357.416 760.167 364.504 760.167C371.592 760.167 377.337 765.912 377.337 773C377.337 780.088 371.592 785.833 364.504 785.833ZM373.137 778.979C374.314 777.282 375.004 775.222 375.004 773C375.004 767.201 370.303 762.5 364.504 762.5C358.705 762.5 354.004 767.201 354.004 773C354.004 775.222 354.694 777.282 355.871 778.979C357.184 777.244 360.27 776.5 364.504 776.5C368.738 776.5 371.824 777.244 373.137 778.979ZM371.463 780.863C371.121 779.635 368.668 778.833 364.504 778.833C360.34 778.833 357.887 779.635 357.545 780.863C359.398 782.504 361.835 783.5 364.504 783.5C367.173 783.5 369.61 782.504 371.463 780.863ZM364.504 776.5C361.892 776.5 359.837 774.665 359.837 770.667C359.837 768.048 361.68 766 364.504 766C367.321 766 369.171 768.242 369.171 770.9C369.171 774.726 367.092 776.5 364.504 776.5ZM362.171 770.667C362.171 773.314 363.125 774.167 364.504 774.167C365.878 774.167 366.837 773.348 366.837 770.9C366.837 769.442 365.922 768.333 364.504 768.333C363.027 768.333 362.171 769.285 362.171 770.667Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        </g>
                        </g>
                        </g>
                        <rect id="main-navigation-bar" x="42" y="749" width="88" height="2" fill="#FFC502"/>
                        <g id="Status Bar">
                        <rect x="42" y="17" width="369" height="44" fill="#1077D1"/>
                        <g id="Action">
                        <text id="&#226;&#134;&#179; Time" fill="white" xml:space="preserve" style="white-space: pre" font-family="SF Pro Text" font-size="15" font-weight="600" letter-spacing="-0.165px"><tspan x="73.2167" y="45.2822">9:41</tspan></text>
                        </g>
                        <g id="Container">
                        <g id="Battery">
                        <path id="Rectangle_11" fill-rule="evenodd" clip-rule="evenodd" d="M371.589 34.1599H386.411C387.659 34.1599 388.111 34.2899 388.568 34.5339C389.024 34.7779 389.382 35.136 389.626 35.5923C389.87 36.0486 390 36.5012 390 37.7494V42.0705C390 43.3186 389.87 43.7712 389.626 44.2275C389.382 44.6838 389.024 45.0419 388.568 45.2859C388.111 45.53 387.659 45.6599 386.411 45.6599H371.589C370.341 45.6599 369.889 45.53 369.432 45.2859C368.976 45.0419 368.618 44.6838 368.374 44.2275C368.13 43.7712 368 43.3186 368 42.0705V37.7494C368 36.5012 368.13 36.0486 368.374 35.5923C368.618 35.136 368.976 34.7779 369.432 34.5339C369.889 34.2899 370.341 34.1599 371.589 34.1599ZM371.589 35.1599C370.602 35.1599 370.258 35.2264 369.904 35.4157C369.622 35.5665 369.407 35.7819 369.256 36.0639C369.067 36.4178 369 36.7624 369 37.7494V42.0705C369 43.0575 369.067 43.402 369.256 43.7559C369.407 44.0379 369.622 44.2533 369.904 44.4041C370.258 44.5934 370.602 44.6599 371.589 44.6599H386.411C387.398 44.6599 387.742 44.5934 388.096 44.4041C388.378 44.2533 388.593 44.0379 388.744 43.7559C388.933 43.402 389 43.0575 389 42.0705V37.7494C389 36.7624 388.933 36.4178 388.744 36.0639C388.593 35.7819 388.378 35.5665 388.096 35.4157C387.742 35.2264 387.398 35.1599 386.411 35.1599H371.589ZM392.5 39.8499C392.5 41.0865 391 41.8499 391 41.8499V37.8499C391 37.8499 392.5 38.6133 392.5 39.8499Z" fill="white"/>
                        <rect id="Rectangle_12" x="370" y="36.0767" width="18" height="7.66667" rx="1.6" fill="white"/>
                        </g>
                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M339.623 35.5657C339.6 35.6817 339.6 35.8211 339.6 36.0999V43.7999C339.6 44.0786 339.6 44.218 339.623 44.334C339.718 44.81 340.09 45.1821 340.566 45.2768C340.682 45.2999 340.821 45.2999 341.1 45.2999C341.379 45.2999 341.518 45.2999 341.634 45.2768C342.11 45.1821 342.482 44.81 342.577 44.334C342.6 44.218 342.6 44.0786 342.6 43.7999V36.0999C342.6 35.8211 342.6 35.6817 342.577 35.5657C342.482 35.0897 342.11 34.7176 341.634 34.6229C341.518 34.5999 341.379 34.5999 341.1 34.5999C340.821 34.5999 340.682 34.5999 340.566 34.6229C340.09 34.7176 339.718 35.0897 339.623 35.5657ZM334.9 38.4999C334.9 38.2211 334.9 38.0817 334.923 37.9657C335.018 37.4897 335.39 37.1176 335.866 37.0229C335.982 36.9999 336.121 36.9999 336.4 36.9999C336.679 36.9999 336.818 36.9999 336.934 37.0229C337.41 37.1176 337.782 37.4897 337.877 37.9657C337.9 38.0817 337.9 38.2211 337.9 38.4999V43.7999C337.9 44.0787 337.9 44.218 337.877 44.334C337.782 44.81 337.41 45.1821 336.934 45.2768C336.818 45.2999 336.679 45.2999 336.4 45.2999C336.121 45.2999 335.982 45.2999 335.866 45.2768C335.39 45.1821 335.018 44.81 334.923 44.334C334.9 44.218 334.9 44.0787 334.9 43.7999V38.4999ZM330.323 40.2657C330.3 40.3817 330.3 40.5211 330.3 40.7999V43.7999C330.3 44.0787 330.3 44.218 330.323 44.334C330.418 44.81 330.79 45.1821 331.266 45.2768C331.382 45.2999 331.521 45.2999 331.8 45.2999C332.079 45.2999 332.218 45.2999 332.334 45.2768C332.81 45.1821 333.182 44.81 333.277 44.334C333.3 44.218 333.3 44.0787 333.3 43.7999V40.7999C333.3 40.5211 333.3 40.3817 333.277 40.2657C333.182 39.7897 332.81 39.4176 332.334 39.3229C332.218 39.2999 332.079 39.2999 331.8 39.2999C331.521 39.2999 331.382 39.2999 331.266 39.3229C330.79 39.4176 330.418 39.7897 330.323 40.2657ZM325.523 42.2657C325.5 42.3817 325.5 42.5211 325.5 42.7999V43.7999C325.5 44.0787 325.5 44.218 325.523 44.334C325.618 44.81 325.99 45.1821 326.466 45.2768C326.582 45.2999 326.721 45.2999 327 45.2999C327.279 45.2999 327.418 45.2999 327.534 45.2768C328.01 45.1821 328.382 44.81 328.477 44.334C328.5 44.218 328.5 44.0787 328.5 43.7999V42.7999C328.5 42.5211 328.5 42.3817 328.477 42.2657C328.382 41.7897 328.01 41.4176 327.534 41.3229C327.418 41.2999 327.279 41.2999 327 41.2999C326.721 41.2999 326.582 41.2999 326.466 41.3229C325.99 41.4176 325.618 41.7897 325.523 42.2657Z" fill="white"/>
                        <path id="Wi-Fi" fill-rule="evenodd" clip-rule="evenodd" d="M355.3 36.6963C357.535 36.6964 359.684 37.5549 361.303 39.0945C361.425 39.2133 361.62 39.2118 361.74 39.0911L362.906 37.9147C362.967 37.8535 363 37.7705 363 37.6842C362.999 37.5979 362.965 37.5154 362.903 37.4549C358.653 33.3816 351.947 33.3816 347.697 37.4549C347.635 37.5154 347.601 37.5979 347.6 37.6842C347.599 37.7705 347.633 37.8534 347.694 37.9147L348.86 39.0911C348.98 39.212 349.175 39.2135 349.297 39.0945C350.917 37.5548 353.066 36.6963 355.3 36.6963V36.6963ZM355.3 40.5236C356.528 40.5236 357.712 40.9799 358.622 41.8039C358.745 41.9209 358.939 41.9183 359.059 41.7982L360.223 40.6218C360.285 40.5601 360.319 40.4764 360.318 40.3894C360.317 40.3024 360.281 40.2194 360.218 40.159C357.447 37.5812 353.156 37.5812 350.385 40.159C350.322 40.2194 350.286 40.3024 350.286 40.3895C350.285 40.4765 350.319 40.5602 350.38 40.6218L351.544 41.7982C351.664 41.9183 351.858 41.9209 351.981 41.8039C352.891 40.9804 354.074 40.5242 355.3 40.5236V40.5236ZM357.538 43.3312C357.6 43.2701 357.635 43.186 357.633 43.0988C357.631 43.0116 357.593 42.9289 357.529 42.8704C356.242 41.7825 354.358 41.7825 353.072 42.8704C353.008 42.9289 352.97 43.0115 352.968 43.0987C352.966 43.186 353 43.2701 353.063 43.3312L355.077 45.3638C355.136 45.4235 355.216 45.4571 355.3 45.4571C355.384 45.4571 355.465 45.4235 355.524 45.3638L357.538 43.3312Z" fill="white"/>
                        </g>
                        </g>
                        <g id="&#226;&#128;&#162; iPhone X / Home Indicator">
                        <rect id="Line" x="159" y="818" width="135" height="5" rx="2.5" fill="black"/>
                        </g>
                        </g>
                        <g id="course-overview-tooltip">
                            <rect id="course-overview-overlay" x="42" y="17" width="375" height="812" fill="#05111A" fill-opacity="0.1"/>
                            <g id="course-overview-tooltip-items" fill="#FCFCFC" filter="">
                            <g class="course-tooltip">
                            <rect id="course-tooltip-background-3" x="79" y="443" width="320" height="42" fill="#FCFCFC"/>
                            <text id="text" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="469.469">Drop Course</tspan></text>
                            </g>
                            <g class="course-tooltip">
                            <rect id="course-tooltip-background-2" x="79" y="401" width="320" height="42" fill="#FCFCFC"/>
                            <text id="text_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="427.469">Swap Course</tspan></text>
                            </g>
                            <g class="course-tooltip">
                            <rect id="course-tooltip-background-1" x="79" y="359" width="320" height="42" fill="#FCFCFC"/>
                            <text id="text_3" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="385.469">Course Details</tspan></text>
                            </g>
                            </g>
                            </g>
                            <g id="touch-indicator" opacity="0.2" filter="">
                            <circle cx="384" cy="359" r="20" fill="#1077D1"/>
                            </g>
                        </g>
                        </g>
                        </g>
                        <g id="phone-outline">
                        <path id="stroke" d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="#F0F1F2" stroke-width="4"/>
                        <g id="stroke_2">
                        <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint0_radial)" stroke-width="6"/>
                        <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint1_radial)" stroke-width="6"/>
                        </g>
                        <g id="stroke_3" opacity="0.3" filter="url(#filter7_f)">
                        <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint2_linear)" stroke-width="2"/>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_dd" x="0" y="0" width="453" height="890" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="22"/>
                        <feGaussianBlur stdDeviation="18"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="3.5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter1_i" x="42" y="163" width="188" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        </filter>
                        <filter id="filter2_i" x="230" y="163" width="187" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        </filter>
                        <filter id="filter3_ii" x="42" y="308" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter4_ii" x="42" y="346" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter5_ii" x="42" y="435" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter6_ii" x="42" y="473" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter7_f" x="37" y="15" width="379" height="816" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
                        </filter>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1241.5 411.5) rotate(0.279667) scale(2356.03 1088.07)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="#C8C8C8"/>
                        <stop offset="1" stop-color="#FDFDFD"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(184.5 1417.5) rotate(-88.8985) scale(2158.9 997.028)">
                        <stop stop-color="#F2F2F2"/>
                        <stop offset="1" stop-color="#C8C8C8"/>
                        <stop offset="1" stop-color="white"/>
                        </radialGradient>
                        <linearGradient id="paint2_linear" x1="-10" y1="377" x2="16.5" y2="376.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C9C9C9"/>
                        <stop offset="1" stop-color="#EFEFEF"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <clipPath id="clip0">
                        <path d="M42 53C42 33.1177 58.1177 17 78 17H375C394.882 17 411 33.1177 411 53V793C411 812.882 394.882 829 375 829H78C58.1178 829 42 812.882 42 793V53Z" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>`,
                        caption: 'Short Navigation Demo'
                    }
                ]
            },

            sketch: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/combining-projects.svg',
                        caption: 'Combining multiple standalone apps into one ecosystem',
                    },
                ]
            },

            sneakpeak: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/desktop-overview.png',
                        caption: 'Desktop Main Dashboard',
                    },
                    {
                        name: 'cunyfirst/desktop-course-active.png',
                        caption: 'Desktop Active Course',
                    },
                    {
                        name: 'cunyfirst/desktop-transcript-overview.png',
                        caption: 'Desktop Transcript Overview',
                    },
                ]
            },

            userflow: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/finances-flowchart.png',
                        caption: 'Finances Userflow',
                    },
                    {
                        name: 'cunyfirst/courses-flowchart.png',
                        caption: 'Courses Userflow',
                    },
                    {
                        name: 'cunyfirst/academics-flowchart.png',
                        caption: 'Academics Userflow',
                    },
                ]
            },

            wireframe: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/wireframe-1.svg',
                        caption: 'empty state / courses state / information state / alert state',
                    },
                    {
                        name: 'cunyfirst/wireframe-2.svg',
                        caption: 'secondary courses state / information state 2 / courses state 2',
                    },
                ]
            },

            navigation: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/navigation.png',
                        caption: 'Primary types of navigation',
                    },
                ]
            },

            dynamic: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/overview-screens.png',
                        caption: 'current courses / academic overview / finances overview',
                    },
                    {
                        name: 'cunyfirst/extra-screens.png',
                        caption: 'search courses / course details / course options',
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
            id: 'main-animation',
            name: 'Problem',
            heading: 'Hitting The Pain Points',
            content: 'I\'ve interviewed and casually spoken to many users throughout the years about what they would like in a student platform and how they interact with it on a daily basis. I was able to research and consolidate their needs based on the existing platform\'s features into the core-features necessary for their day-to-day use cases.',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Future goals involve a design system',
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
            name: 'Flows and Wires',
            heading: 'Defining The Foundations',
            content: 'The user flows from the research created the foundation to start sketching from. I began with the mobile version because it gives the most constraints in information architecture and how to organize the content. Eventually landing on about 7 base screens for the majority of the content, I got to work on structuring the content.',
        },

        //NAVIGATION
        navigation: {
            name: 'Nav-Design',
            heading: 'Testing Four Types Of Navigation',
            content: 'After testing button-only, tabular, dropdown, and iconic navigation, I decided on a combination of three depending on the type of information being accessed. With button-only navigation, users felt the space was cluttered but functional. I have not gotten a large amount of feedback on the tabular and dropdown navigation but will be testing soon for those observations!',
        },

        //DYNAMIC CONTENT
        dynamicContent: {
            name: 'White-Label Software',
            heading: 'Defining Business Goals',
            content: 'A white-label software is an all-in-one packaged product that companies and agencies can buy into and customize for their own uses. This means that the overall components and features have to be flexible enough for different use cases while still being able to complete the core-tasks of the software.<br><br>I took this approach because the platforms being used the most by universities is white-label. I wanted to design something that could replace the existing platforms so from a business perspective, this was at the core of corED.',
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
            heading: 'Lessons Learned',
            content: 'As I mentioned in the beginning, this project was big for one person...really big. I didn\'t get to tackle everything I hoped for because of school and other projects. However, I learned a ton about process development, presenting the work early for quicker and more consistent feedback, and designing a component system. I\'d love to create a design system for the current component set in the near future but for now, thanks for reading and feel free to ping me on Twitter or LinkedIn for feedback!',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Prototype Walkthrough',
            content: 'This is an ongoing project and the screens are being updated constantly. Please disregard inconsistencies in elements since I hop on whenever I can to keep working. Not everything can be navigated, but it will give a general idea of how the app may function.',
            p: 'https://www.figma.com/proto/dVg3M7TD36D1EGTXUgxNSu0T/In-progress?node-id=1%3A4886&viewport=1994%2C1387%2C0.31970152258872986&scaling=scale-down',
        },
    },

     //BLAH
     {
        //HOMEPAGE SETUP
        project: 'BLAH',
        next: 'ipc',
        prev: 'cored',
        href: 'blah',
        name: 'Rethinking Mental Self-Help',
        platform: 'Mobile App',
        role: '<bold class="cr-red-base">Lead Designer</bold> | UX/UI | Research',
        purpose: 'An offline approach to emotional venting',
        csDetails: {
            capacity: {
                name: 'Capacity',
                description: 'Exploration',
            },
            type: {
                name: 'Industry',
                description: 'Mental Health',
            },
            platform: {
                name: 'platform',
                description: 'Mobile App',
            },
            role: {
                name: 'roles',
                description: 'Lead Designer<br>UX/UI<br>Research',
            },
            tools: {
                name: 'tools',
                description: 'Figma<br>Marvel',
            },
        },
        description: 'With mental health more important than ever, I strived to give people their voice back with this passion project.',
        descColor: 'primary-white-text',
        image: 'cover/blah-cover.png',
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
            heading: 'General and Social Anxiety From Social Media',
            content: 'Have you ever felt like you have no one to speak to? Not because there\'s no one there to listen, but because you fear being judged. Even worse, you can get hurt if you do. Anxiety affects 25.1% of kids ages 13-18 but only 60% get treatment. Anxiety can be caused by many things and after speaking to many individuals around 20-24 about their teenage to adult years, many agreed social media made them more self-conscious, anxious, and depressed more often.',
        },

        //USER RESEARCH
        ur: {
            name: 'User Research',
            heading: 'Who\'ll Even Use This?',
            content: 'Even though anyone can use the app, based on the statistics I found, 18-29 year old females would be the main user demographic.</br></br>About 50% of all age groups imagine they would use an app for stress and anxiety relief, while only 8% on average use them regularly. The odds aren\'t looking great for long-term use of the app but let\'s be hopeful.',
        },

        //COMPETITOR RESEARCH
        cr: {
            name: 'Competitor Research',
            heading: 'Phew! No Competitors',
            content: 'Thankfully there\'s no one to compete with! Unlike apps such as Daylio, Uplifter, and Moodnotes, Blah does not track any progress of your emotions. Emotion tracking is pretty helpful for people with a therapist. It may not be effective for those that would rather vent and forget.',
        },
        
        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Why Should I Use BLAH?',
            content: 'Many people do not have an outlet to express their feelings without judgement. Although social media seems like a good option to vent, as we\'ve seen in recent news, many of those thoughts are used against the people that expressed themselves in the past.</br></br> I set out to create a space where people can express themselves off of social media without feeling judged or having their words used against them.',
        },

        feature1: {
            name: 'No Permissions',
            heading: 'No Stored Info = No Permissions Needed',
            content: 'I wouldn\'t want my thoughts recorded anywhere for anyone to grab; Would you? After a message is complete on BLAH, it gets swiped away and no information is stored. </br></br>The call feature behaves the same way. Nothing is recorded before, during, or after a call. It\'s just you yelling at your phone until you feel better. You won\'t hurt it\'s feelings, I promise.',
        },
        feature2: {
            name: 'Resource Accessability',
            heading: 'Quick Access to Suicide Prevention Resources',
            content: 'The app does not replace therapy. I\'m a big advocate for getting help when people need it most. It is meant as a forgetful journal and not to replace human interaction and comfort. </br></br> If a user feels like harming themselves, I\’ve implemented a National Suicide Prevention Line contact button next to the BLAH call button. This button calls the hotline and should only be used in real emergencies.',
        },
       
        //future features
        future: {
            name: 'Future Features',
            heading: 'Other Features? Chatbot Therapy',
            content: 'Have you gone to therapy? It\'s expensive! It would be great to provide quality therapy to those that can\'t afford it.</br></br> I\'d love to test a chatbot custom to each user that adapts to how they speak and allow the user to reflect on their thoughts. Implementing this on both the message and phone features would be awesome but extremely difficult to filter out negative self-speak.</br></br>Through a guided thought process, the chatbots can help users come to their own conclusions and feel accomplished to have come closer to solving their current problem.',
        },

        //LESSON LEARNED
        lesson: {
            name: 'Lessons Learned',
            heading: 'Sometimes Simple Is Best',
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
        project: 'I.P.C.',
        next: 'aluminyze',
        prev: 'blah',
        href: 'ipc',
        name: 'Restructuring IPC News',
        platform: 'Web & Mobile',
        role: '<bold class="cr-red-base">UX/UI</bold> | RESEARCH | I.A. | Styleguide',
        purpose: 'An accessibility-friendly news experience',
        csDetails: {
            capacity: {
                name: 'Capacity',
                description: 'Exploration',
            },
            type: {
                name: 'Industry',
                description: 'Sports',
            },
            platform: {
                name: 'platform',
                description: 'Responsive Website',
            },
            role: {
                name: 'roles',
                description: 'UX/UI<br>Research<br>Information Architecture<br>Component System',
            },
            tools: {
                name: 'tools',
                description: 'Figma<br>Sketch<br>Overflow',
            },
        },
        description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'cover/ipc-cover.jpg',
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
                bgColor: 'none',
                
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
            heading: 'Hitting the Pain Points',
            content: 'The main pain points of users that I\'ve gathered are a non-responsive design, hard to access information, and an outdated design in general. Their current bounce rate is at 41% and although the content is informative, no one is accessing it because it is hard to find.',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Goal: Homepage and News',
            content: 'A bounce rate is how often a user leaves right after landing on the site. As you\'d guess, a high bounce rate means a low retention rate.</br></br> Creating a compelling homepage, as well as reformatting the content such as articles and video is a great start to improving their retention rate. To start, I took a look at their direct and indirect competitors within the televised sports industry.',
        },

        //COMPETITOR RESEARCH
        cr: {
            competitors: {
                name: 'Competitor Research',

                olympics: {
                    name: 'CR: Olympics',
                    heading: 'Defining Competitors: Olympic.org',
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
            heading: 'Journey Mapping: Lego Inspired',
            content: 'This map developed by lego documents the user\'s feelings before they know of the product, during an encounter, and after modifications based on their feedback. This type of map allows stakeholders get an idea of what users seek in a concise manner.',
        },

        //USERFLOWS AND SITEMAPS
        userflow: {
            name: 'Userflows and Sitemap',
            heading: 'Defining the Foundations',
            content: 'Knowing the users helped in determining the flow of news and events because it guided me to organizing content for both sighted and non-sighted people. I also included the sitemap I created before knowing what I was getting myself into and changing the project\'s scope.'
        },

        //WIREFRAMES
        wireframe: {
            name: 'Wireframes',
            heading: 'Initial Design Not Accessible',
            content: 'I struggled with changing my design to hi-fidelity after realizing my initial structure was not user friendly. With over three iterations, this is where I started changing the project\'s scope from the whole site to only the homepage, article page, and creating a component library/mini-design system.',
        },

        //DYNAMIC CONTENT
        designsystem: {
            name: 'Design System',
            heading: 'Crafting a Design System',
            content: 'Learning to begin creating a design system was a great experience. It gave constraints for a more efficient workflow in the long run. It\'s not complete but does gives a good idea of the overall structure and direction I was taking for the site. Check out that system below.',
            p: 'https://www.figma.com/proto/PJSDl4Ycf7G2AYPtBXdtota1/IPC-Design-System?node-id=0%3A1&viewport=98%2C263%2C0.05&scaling=contain',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Short Walkthrough of Homepage & News',
            content: 'I incorporated the dropdowns and points of contact a user encounters while searching for content, specifically news. You\'ll be able to navigate the hompage and linking out to an article.',
            p: 'https://www.figma.com/proto/PJSDl4Ycf7G2AYPtBXdtota1/IPC-Design-System?node-id=92%3A2271&viewport=174%2C274%2C0.0853344202041626&scaling=scale-down',

        },

        //LESSON
        lesson: {
            name: 'Lesson',
            heading: 'Know the Project\'s Complete Scope',
            content: 'I\'ll be honest and say I thought it wouldn\'t be as challenging as it was. I would do this project much differently in the future but I learned to incorporate journey maps, personas, and developing design systems along the way. In realizing how large the project was, I re-evaluated where I should start and landed on what you saw above.</br></br> Thanks for coming along on this one with me. It was a great learning experience.'
        },
    },

    //FUELTIME
    {
        //HOMEPAGE SETUP
        status: 'view prototype</br> <p>case study coming soon</p>',
        disable: 'true',
        project: 'FUELTIME – Hack-a-thon (5 members)',
        next: 'blah',
        prev: 'cored',
        href: 'https://www.figma.com/proto/JESCUlrpGHV40L78WXrm2qNd/FuelTime-New-Order?node-id=233%3A564&viewport=104%2C387%2C0.3435290455818176&scaling=scale-down',
        name: '<b style="font-size:1rem">Coming Soon</b><br>Fuel Ordering Hack-a-thon',
        platform: 'Mobile',
        role: '<bold class="cr-red-base">Hack-a-thon</bold> | UI | Prototype | Userflow',
        purpose: 'Winner for best designed fuel ordering startup',
        // description: 'With decade old technology, CUNY has not developed a mobile platform for their most distributed software. This is my mobile solution.',
        descColor: 'primary-white-text',
        image: 'cover/fueltime-cover.png',
        primaryColor: 'ft-green',
        supportColor: 'ft-green',
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
                        name: `<svg id="mockup-screen" viewBox="0 0 453 890" fill="none">
                        <g filter="url(#filter0_dd)">
                        <g id="Mask Group">
                        <g id="courses">
                        <g clip-path="url(#clip0)">
                        <path d="M42 53C42 33.1177 58.1177 17 78 17H375C394.882 17 411 33.1177 411 53V793C411 812.882 394.882 829 375 829H78C58.1178 829 42 812.882 42 793V53Z" fill="#FCFCFC"/>
                        <g id="courses-overview">
                        <g id="class-expand" class="class">
                        <g id="Card/primary--default">
                        <rect id="background" x="42" y="211" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2">
                        <text id="primary-text" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="235.844">Spanish 120</tspan></text>
                        <g id="secondary-text">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="257.988">NAC 521&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="279.988">Mon&#x2013;Thu 10:00 AM&#x2013;12:00 PM</tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options">
                        <path d="M371 213H411V297H371V213Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive">
                        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M389 248C389 249.105 389.895 250 391 250C392.105 250 393 249.105 393 248C393 246.895 392.105 246 391 246C389.895 246 389 246.895 389 248ZM391 257C389.895 257 389 256.105 389 255C389 253.895 389.895 253 391 253C392.105 253 393 253.895 393 255C393 256.105 392.105 257 391 257ZM391 264C389.895 264 389 263.105 389 262C389 260.895 389.895 260 391 260C392.105 260 393 260.895 393 262C393 263.105 392.105 264 391 264Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar">
                        <g id="status">
                        <rect id="bar" width="2" height="84" transform="matrix(-1 0 0 1 51 213)" fill="#EEEEEE"/>
                        <rect id="status_2" x="46" y="236" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom" x1="42" y1="297" x2="411" y2="297" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top" x1="42" y1="212" x2="411" y2="212" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        <g class="class">
                        <g id="Card/primary--default_2">
                        <rect id="background_2" x="42" y="296" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2_2">
                        <text id="primary-text_2" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="320.844">Design for Developers</tspan></text>
                        <g id="secondary-text_2">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="342.988">Comp Goeth CG121&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="364.988">Mon&#x2013;Tue 2:00 PM &#x2013; 4:50 PM </tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options_2">
                        <path d="M371 298H411V382H371V298Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive_2">
                        <path id="icon_2" fill-rule="evenodd" clip-rule="evenodd" d="M389 333C389 334.105 389.895 335 391 335C392.105 335 393 334.105 393 333C393 331.895 392.105 331 391 331C389.895 331 389 331.895 389 333ZM391 342C389.895 342 389 341.105 389 340C389 338.895 389.895 338 391 338C392.105 338 393 338.895 393 340C393 341.105 392.105 342 391 342ZM391 349C389.895 349 389 348.105 389 347C389 345.895 389.895 345 391 345C392.105 345 393 345.895 393 347C393 348.105 392.105 349 391 349Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar_2">
                        <g id="status_3">
                        <rect id="bar_2" width="2" height="84" transform="matrix(-1 0 0 1 51 298)" fill="#EEEEEE"/>
                        <rect id="status_4" x="46" y="321" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom_2" x1="42" y1="382" x2="411" y2="382" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top_2" x1="42" y1="297" x2="411" y2="297" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        <g class="class">
                        <g id="primary/primary--double">
                        <g id="Card/primary--default_3">
                        <rect id="background_3" x="42" y="381" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2_3">
                        <text id="primary-text_3" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="405.844">Electronic Design 1</tspan></text>
                        <g id="secondary-text_3">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="427.988">Comp Goeth  CG521&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="449.988">Wed 6:15 PM &#x2013; 9:15 PM</tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options_3">
                        <path d="M371 383H411V467H371V383Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive_3">
                        <path id="icon_3" fill-rule="evenodd" clip-rule="evenodd" d="M389 418C389 419.105 389.895 420 391 420C392.105 420 393 419.105 393 418C393 416.895 392.105 416 391 416C389.895 416 389 416.895 389 418ZM391 427C389.895 427 389 426.105 389 425C389 423.895 389.895 423 391 423C392.105 423 393 423.895 393 425C393 426.105 392.105 427 391 427ZM391 434C389.895 434 389 433.105 389 432C389 430.895 389.895 430 391 430C392.105 430 393 430.895 393 432C393 433.105 392.105 434 391 434Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar_3">
                        <g id="status_5">
                        <rect id="bar_3" width="2" height="84" transform="matrix(-1 0 0 1 51 383)" fill="#EEEEEE"/>
                        <rect id="status_6" x="46" y="406" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom_3" x1="42" y1="467" x2="411" y2="467" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top_3" x1="42" y1="382" x2="411" y2="382" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        </g>
                        <g class="class">
                        <g id="Card/primary--default_4">
                        <rect id="background_4" x="42" y="466" width="369" height="88" fill="#F7F7F8"/>
                        <g id="text-row-2_4">
                        <text id="primary-text_4" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="490.844">Programming for Artists</tspan></text>
                        <g id="secondary-text_4">
                        <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="512.988">Comp Goeth CG119&#10;</tspan></text>
                        <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="534.988">Mon &#x2013; Thu 10:00 AM &#x2013; 12:00 PM</tspan></text>
                        </g>
                        </g>
                        <g id="Button/more-options_4">
                        <path d="M371 468H411V552H371V468Z" fill="#FCFCFC"/>
                        <g id="basic/more-vertical/inactive_4">
                        <path id="icon_4" fill-rule="evenodd" clip-rule="evenodd" d="M389 503C389 504.105 389.895 505 391 505C392.105 505 393 504.105 393 503C393 501.895 392.105 501 391 501C389.895 501 389 501.895 389 503ZM391 512C389.895 512 389 511.105 389 510C389 508.895 389.895 508 391 508C392.105 508 393 508.895 393 510C393 511.105 392.105 512 391 512ZM391 519C389.895 519 389 518.105 389 517C389 515.895 389.895 515 391 515C392.105 515 393 515.895 393 517C393 518.105 392.105 519 391 519Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        <g id="status-bar_4">
                        <g id="status_7">
                        <rect id="bar_4" width="2" height="84" transform="matrix(-1 0 0 1 51 468)" fill="#EEEEEE"/>
                        <rect id="status_8" x="46" y="491" width="8" height="38" rx="4" fill="#FFC502"/>
                        </g>
                        </g>
                        <line id="Border_bottom_4" x1="42" y1="552" x2="411" y2="552" stroke="#E8E8E8" stroke-width="2"/>
                        <line id="Border_top_4" x1="42" y1="467" x2="411" y2="467" stroke="#E8E8E8" stroke-width="2"/>
                        </g>
                        </g>
                        <g id="section-header">
                        <path id="Rectangle" d="M42 163H410V211H42V163Z" fill="#FCFCFC"/>
                        <text id="Spring 2019" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="193.836">Spring 2019</tspan></text>
                        </g>
                        </g>
                        <g id="finances-overview">
                        <g id="loan-aid" filter="url(#filter1_i)">
                        <rect x="42" y="163" width="188" height="97" fill="#FCFCFC"/>
                        <g id="balance-module/--default">
                        <text id="$5123.00" fill="#1077D1" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="25" font-weight="bold" letter-spacing="0px"><tspan x="82.1182" y="233.045">$5123.00</tspan></text>
                        </g>
                        <text id="Loans Balance" fill="black" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="82.4609" y="196.469">Loans Balance</tspan></text>
                        </g>
                        <g id="loan-aid_2" filter="url(#filter2_i)">
                        <rect x="230" y="163" width="187" height="97" fill="#FCFCFC"/>
                        <g id="balance-module/--default_2">
                        <text id="$3919.24" fill="#1077D1" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="25" font-weight="bold" letter-spacing="0px"><tspan x="269.618" y="233.045">$3919.24</tspan></text>
                        </g>
                        <text id="Aid Received" fill="black" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="276.156" y="196.469">Aid Recieved</tspan></text>
                        </g>
                        <g class="finance-details">
                            <path id="Rectangle_2" d="M42 260H410V308H42V260Z" fill="#FCFCFC"/>
                            <text id="Loan Disbursement" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="290.836">Loan Disbursement</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_5" filter="url(#filter3_ii)">
                        <rect x="42" y="308" width="375" height="41" fill="white"/>
                        </g>
                        <text id="May 12 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="308.406" y="334.469">May 12 2019</tspan></text>
                        <text id="Fall 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="332.785">Fall 2019</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_6" filter="url(#filter4_ii)">
                        <rect x="42" y="346" width="375" height="41" fill="white"/>
                        </g>
                        <text id="October 29 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="281.781" y="372.469">October 29 2019</tspan></text>
                        <text id="Spring 2020" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="370.785">Spring 2020</tspan></text>
                        </g>
                        <g class="finance-details">
                            <path id="Rectangle_3" d="M42 387H410V435H42V387Z" fill="#FCFCFC"/>
                            <text id="Financial Aid Disbursement" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="417.836">Financial Aid Disbursement</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_7" filter="url(#filter5_ii)">
                        <rect x="42" y="435" width="375" height="41" fill="white"/>
                        </g>
                        <text id="May 12 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="308.406" y="461.469">May 12 2019</tspan></text>
                        <text id="Fall 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="459.785">Fall 2019</tspan></text>
                        </g>
                        <g class="finance-details">
                        <g id="background_8" filter="url(#filter6_ii)">
                        <rect x="42" y="473" width="375" height="41" fill="white"/>
                        </g>
                        <text id="October 29 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="281.781" y="499.469">October 29 2019</tspan></text>
                        <text id="Spring 2020_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="497.785">Spring 2020</tspan></text>
                        </g>
                        </g>
                        <g id="navigation">
                        <g class="sections">
                        <g id="section">
                        <path d="M319 115H411V163H319V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-4" x="319" y="115" width="92" height="48" fill="white"/>
                        <g id="status-bar_5">
                        <rect id="inactive" x="319" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-4" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="343.282" y="143.785">Search</tspan></text>
                        </g>
                        </g>
                        <g class="sections">
                        <g id="section_2">
                        <path d="M227 115H319V163H227V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-3" x="227" y="115" width="92" height="48" fill="white"/>
                        <g id="status-bar_6">
                        <rect id="inactive_2" x="227" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-3" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="244.993" y="143.785">Calendar</tspan></text>
                        </g>
                        </g>
                        <g class="sections">
                        <g id="section_3">
                        <path d="M134 115H226V163H134V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-2" x="134" y="115" width="92" height="48" fill="white"/>
                        <g id="status-bar_7">
                        <rect id="inactive_3" x="134" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-2" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="166.677" y="143.785">Cart</tspan></text>
                        </g>
                        </g>
                        <g class="sections">
                        <g id="section_4">
                        <path d="M42 115H134V163H42V115Z" fill="#FCFCFC"/>
                        <rect id="section-background-1" x="42" y="115" width="92" height="48" fill="#DDF5FD"/>
                        <g id="status-bar_8">
                        <rect id="inactive_4" x="42" y="162" width="92" height="1" fill="#DEDEDE"/>
                        </g>
                        <text id="section-1" fill="#0A1974" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="62.0986" y="143.785">Courses</tspan></text>
                        </g>
                        </g>
                        <rect id="secondary-navigation-bar" x="42" y="161" width="92" height="2" fill="#6BC1F2"/>
                        </g>
                        <g id="screen-category-name">
                        <rect id="background_9" x="42" y="53" width="369" height="65" fill="#1077D1"/>
                        <g id="center">
                        <text id="header-title" fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="144.338" y="93.8359">Courses Overview</tspan></text>
                        </g>
                        </g>
                        <g id="phone-defaults">
                        <g id="__mobile-navigation">
                        <g id="mobile/container">
                        <g id="mobile/--active/course">
                        <g id="menu-button__core/master">
                        <path d="M42 749H134.496V797H42V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_4" x="42" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="navigation-bar" x="42" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="basic/table">
                        <path id="icon_5" fill-rule="evenodd" clip-rule="evenodd" d="M84.1819 762.5H99.4545C100.86 762.5 102 763.606 102 764.971V781.029C102 782.394 100.86 783.5 99.4545 783.5H84.1819H81.6364H76.5455C75.1396 783.5 74 782.394 74 781.029V764.971C74 763.606 75.1396 762.5 76.5455 762.5H81.6364H84.1819ZM81.6364 764.971H76.5455V768.676H81.6364V764.971ZM84.1819 768.676V764.971H99.4546V768.676H84.1819ZM81.6364 771.147H76.5455V774.853H81.6364V771.147ZM84.1819 774.853V771.147H99.4546V774.853H84.1819ZM81.6364 777.324H76.5455V781.029H81.6364V777.324ZM84.1819 781.029V777.324H99.4546V781.029H84.1819Z" fill="#666D80"/>
                        </g>
                        </g>
                        </g>
                        <g id="mobile/--inactive/finance">
                        <path d="M134.496 749H226.992V797H134.496V749Z" fill="#FCFCFC"/>
                        <g id="menu-button__core/master_2">
                        <path d="M134.496 749H226.992V797H134.496V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_5" x="134.496" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="Rectangle_6" x="134.496" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="finance/strongbox">
                        <path id="icon_6" fill-rule="evenodd" clip-rule="evenodd" d="M189.496 761.95H171.496C170.391 761.95 169.496 762.931 169.496 764.14V781.664C169.496 782.874 170.391 783.855 171.496 783.855H172.796V784.95H174.996V783.855H185.996V784.95H188.196V783.855H189.496C190.601 783.855 191.496 782.874 191.496 781.664V764.14C191.496 762.931 190.601 761.95 189.496 761.95ZM171.696 781.664V764.14H189.296V766.331H188.196V768.521H189.296V777.283H188.196V779.474H189.296V781.664H171.696ZM186.774 777.604L185.218 779.153L182.731 776.677C182.076 777.062 181.312 777.283 180.496 777.283C179.68 777.283 178.916 777.062 178.261 776.677L175.774 779.153L174.218 777.604L176.705 775.128C176.318 774.475 176.096 773.715 176.096 772.902C176.096 772.09 176.318 771.329 176.705 770.677L174.218 768.201L175.774 766.652L178.261 769.128C178.916 768.742 179.68 768.521 180.496 768.521C181.312 768.521 182.076 768.742 182.731 769.128L185.218 766.652L186.774 768.201L184.287 770.677C184.674 771.329 184.896 772.09 184.896 772.902C184.896 773.715 184.674 774.476 184.287 775.128L186.774 777.604ZM182.696 772.902C182.696 774.112 181.711 775.093 180.496 775.093C179.281 775.093 178.296 774.112 178.296 772.902C178.296 771.692 179.281 770.712 180.496 770.712C181.711 770.712 182.696 771.692 182.696 772.902Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        </g>
                        <g id="mobile/--inactive/academics">
                        <path d="M226.992 749H318.504V797H226.992V749Z" fill="#FCFCFC"/>
                        <g id="mobile/__master/master">
                        <path d="M226.992 749H318.504V797H226.992V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_7" x="226.992" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="Rectangle_8" x="226.992" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="basic/book">
                        <path id="icon_7" fill-rule="evenodd" clip-rule="evenodd" d="M283.492 784.667H265.992C264.059 784.667 262.492 783.1 262.492 781.167V764.833C262.492 762.9 264.059 761.333 265.992 761.333H283.492V780C282.848 780 282.325 780.522 282.325 781.167C282.325 781.811 282.848 782.333 283.492 782.333V784.667ZM279.992 781.167C279.992 780.758 280.062 780.365 280.191 780H265.992C265.348 780 264.825 780.522 264.825 781.167C264.825 781.811 265.348 782.333 265.992 782.333H280.191C280.062 781.968 279.992 781.576 279.992 781.167ZM265.992 763.667H281.159V777.667H265.992C265.583 777.667 265.19 777.737 264.825 777.866V764.833C264.825 764.189 265.348 763.667 265.992 763.667Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        </g>
                        <g id="mobile/--inactive/account">
                        <path d="M318.504 749H411V797H318.504V749Z" fill="#FCFCFC"/>
                        <g id="mobile/__master/master_2">
                        <path d="M318.504 749H411V797H318.504V749Z" fill="#FCFCFC"/>
                        <rect id="Rectangle_9" x="318.504" y="749" width="92" height="48" fill="#FCFCFC"/>
                        <rect id="Rectangle_10" x="318.504" y="749" width="92" height="2" fill="#E8E8E8"/>
                        <g id="basic/user">
                        <path id="icon_8" fill-rule="evenodd" clip-rule="evenodd" d="M364.504 785.833C357.416 785.833 351.671 780.088 351.671 773C351.671 765.912 357.416 760.167 364.504 760.167C371.592 760.167 377.337 765.912 377.337 773C377.337 780.088 371.592 785.833 364.504 785.833ZM373.137 778.979C374.314 777.282 375.004 775.222 375.004 773C375.004 767.201 370.303 762.5 364.504 762.5C358.705 762.5 354.004 767.201 354.004 773C354.004 775.222 354.694 777.282 355.871 778.979C357.184 777.244 360.27 776.5 364.504 776.5C368.738 776.5 371.824 777.244 373.137 778.979ZM371.463 780.863C371.121 779.635 368.668 778.833 364.504 778.833C360.34 778.833 357.887 779.635 357.545 780.863C359.398 782.504 361.835 783.5 364.504 783.5C367.173 783.5 369.61 782.504 371.463 780.863ZM364.504 776.5C361.892 776.5 359.837 774.665 359.837 770.667C359.837 768.048 361.68 766 364.504 766C367.321 766 369.171 768.242 369.171 770.9C369.171 774.726 367.092 776.5 364.504 776.5ZM362.171 770.667C362.171 773.314 363.125 774.167 364.504 774.167C365.878 774.167 366.837 773.348 366.837 770.9C366.837 769.442 365.922 768.333 364.504 768.333C363.027 768.333 362.171 769.285 362.171 770.667Z" fill="#A8ADB1"/>
                        </g>
                        </g>
                        </g>
                        </g>
                        </g>
                        <rect id="main-navigation-bar" x="42" y="749" width="88" height="2" fill="#FFC502"/>
                        <g id="Status Bar">
                        <rect x="42" y="17" width="369" height="44" fill="#1077D1"/>
                        <g id="Action">
                        <text id="&#226;&#134;&#179; Time" fill="white" xml:space="preserve" style="white-space: pre" font-family="SF Pro Text" font-size="15" font-weight="600" letter-spacing="-0.165px"><tspan x="73.2167" y="45.2822">9:41</tspan></text>
                        </g>
                        <g id="Container">
                        <g id="Battery">
                        <path id="Rectangle_11" fill-rule="evenodd" clip-rule="evenodd" d="M371.589 34.1599H386.411C387.659 34.1599 388.111 34.2899 388.568 34.5339C389.024 34.7779 389.382 35.136 389.626 35.5923C389.87 36.0486 390 36.5012 390 37.7494V42.0705C390 43.3186 389.87 43.7712 389.626 44.2275C389.382 44.6838 389.024 45.0419 388.568 45.2859C388.111 45.53 387.659 45.6599 386.411 45.6599H371.589C370.341 45.6599 369.889 45.53 369.432 45.2859C368.976 45.0419 368.618 44.6838 368.374 44.2275C368.13 43.7712 368 43.3186 368 42.0705V37.7494C368 36.5012 368.13 36.0486 368.374 35.5923C368.618 35.136 368.976 34.7779 369.432 34.5339C369.889 34.2899 370.341 34.1599 371.589 34.1599ZM371.589 35.1599C370.602 35.1599 370.258 35.2264 369.904 35.4157C369.622 35.5665 369.407 35.7819 369.256 36.0639C369.067 36.4178 369 36.7624 369 37.7494V42.0705C369 43.0575 369.067 43.402 369.256 43.7559C369.407 44.0379 369.622 44.2533 369.904 44.4041C370.258 44.5934 370.602 44.6599 371.589 44.6599H386.411C387.398 44.6599 387.742 44.5934 388.096 44.4041C388.378 44.2533 388.593 44.0379 388.744 43.7559C388.933 43.402 389 43.0575 389 42.0705V37.7494C389 36.7624 388.933 36.4178 388.744 36.0639C388.593 35.7819 388.378 35.5665 388.096 35.4157C387.742 35.2264 387.398 35.1599 386.411 35.1599H371.589ZM392.5 39.8499C392.5 41.0865 391 41.8499 391 41.8499V37.8499C391 37.8499 392.5 38.6133 392.5 39.8499Z" fill="white"/>
                        <rect id="Rectangle_12" x="370" y="36.0767" width="18" height="7.66667" rx="1.6" fill="white"/>
                        </g>
                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M339.623 35.5657C339.6 35.6817 339.6 35.8211 339.6 36.0999V43.7999C339.6 44.0786 339.6 44.218 339.623 44.334C339.718 44.81 340.09 45.1821 340.566 45.2768C340.682 45.2999 340.821 45.2999 341.1 45.2999C341.379 45.2999 341.518 45.2999 341.634 45.2768C342.11 45.1821 342.482 44.81 342.577 44.334C342.6 44.218 342.6 44.0786 342.6 43.7999V36.0999C342.6 35.8211 342.6 35.6817 342.577 35.5657C342.482 35.0897 342.11 34.7176 341.634 34.6229C341.518 34.5999 341.379 34.5999 341.1 34.5999C340.821 34.5999 340.682 34.5999 340.566 34.6229C340.09 34.7176 339.718 35.0897 339.623 35.5657ZM334.9 38.4999C334.9 38.2211 334.9 38.0817 334.923 37.9657C335.018 37.4897 335.39 37.1176 335.866 37.0229C335.982 36.9999 336.121 36.9999 336.4 36.9999C336.679 36.9999 336.818 36.9999 336.934 37.0229C337.41 37.1176 337.782 37.4897 337.877 37.9657C337.9 38.0817 337.9 38.2211 337.9 38.4999V43.7999C337.9 44.0787 337.9 44.218 337.877 44.334C337.782 44.81 337.41 45.1821 336.934 45.2768C336.818 45.2999 336.679 45.2999 336.4 45.2999C336.121 45.2999 335.982 45.2999 335.866 45.2768C335.39 45.1821 335.018 44.81 334.923 44.334C334.9 44.218 334.9 44.0787 334.9 43.7999V38.4999ZM330.323 40.2657C330.3 40.3817 330.3 40.5211 330.3 40.7999V43.7999C330.3 44.0787 330.3 44.218 330.323 44.334C330.418 44.81 330.79 45.1821 331.266 45.2768C331.382 45.2999 331.521 45.2999 331.8 45.2999C332.079 45.2999 332.218 45.2999 332.334 45.2768C332.81 45.1821 333.182 44.81 333.277 44.334C333.3 44.218 333.3 44.0787 333.3 43.7999V40.7999C333.3 40.5211 333.3 40.3817 333.277 40.2657C333.182 39.7897 332.81 39.4176 332.334 39.3229C332.218 39.2999 332.079 39.2999 331.8 39.2999C331.521 39.2999 331.382 39.2999 331.266 39.3229C330.79 39.4176 330.418 39.7897 330.323 40.2657ZM325.523 42.2657C325.5 42.3817 325.5 42.5211 325.5 42.7999V43.7999C325.5 44.0787 325.5 44.218 325.523 44.334C325.618 44.81 325.99 45.1821 326.466 45.2768C326.582 45.2999 326.721 45.2999 327 45.2999C327.279 45.2999 327.418 45.2999 327.534 45.2768C328.01 45.1821 328.382 44.81 328.477 44.334C328.5 44.218 328.5 44.0787 328.5 43.7999V42.7999C328.5 42.5211 328.5 42.3817 328.477 42.2657C328.382 41.7897 328.01 41.4176 327.534 41.3229C327.418 41.2999 327.279 41.2999 327 41.2999C326.721 41.2999 326.582 41.2999 326.466 41.3229C325.99 41.4176 325.618 41.7897 325.523 42.2657Z" fill="white"/>
                        <path id="Wi-Fi" fill-rule="evenodd" clip-rule="evenodd" d="M355.3 36.6963C357.535 36.6964 359.684 37.5549 361.303 39.0945C361.425 39.2133 361.62 39.2118 361.74 39.0911L362.906 37.9147C362.967 37.8535 363 37.7705 363 37.6842C362.999 37.5979 362.965 37.5154 362.903 37.4549C358.653 33.3816 351.947 33.3816 347.697 37.4549C347.635 37.5154 347.601 37.5979 347.6 37.6842C347.599 37.7705 347.633 37.8534 347.694 37.9147L348.86 39.0911C348.98 39.212 349.175 39.2135 349.297 39.0945C350.917 37.5548 353.066 36.6963 355.3 36.6963V36.6963ZM355.3 40.5236C356.528 40.5236 357.712 40.9799 358.622 41.8039C358.745 41.9209 358.939 41.9183 359.059 41.7982L360.223 40.6218C360.285 40.5601 360.319 40.4764 360.318 40.3894C360.317 40.3024 360.281 40.2194 360.218 40.159C357.447 37.5812 353.156 37.5812 350.385 40.159C350.322 40.2194 350.286 40.3024 350.286 40.3895C350.285 40.4765 350.319 40.5602 350.38 40.6218L351.544 41.7982C351.664 41.9183 351.858 41.9209 351.981 41.8039C352.891 40.9804 354.074 40.5242 355.3 40.5236V40.5236ZM357.538 43.3312C357.6 43.2701 357.635 43.186 357.633 43.0988C357.631 43.0116 357.593 42.9289 357.529 42.8704C356.242 41.7825 354.358 41.7825 353.072 42.8704C353.008 42.9289 352.97 43.0115 352.968 43.0987C352.966 43.186 353 43.2701 353.063 43.3312L355.077 45.3638C355.136 45.4235 355.216 45.4571 355.3 45.4571C355.384 45.4571 355.465 45.4235 355.524 45.3638L357.538 43.3312Z" fill="white"/>
                        </g>
                        </g>
                        <g id="&#226;&#128;&#162; iPhone X / Home Indicator">
                        <rect id="Line" x="159" y="818" width="135" height="5" rx="2.5" fill="black"/>
                        </g>
                        </g>
                        <g id="course-overview-tooltip">
                            <rect id="course-overview-overlay" x="42" y="17" width="375" height="812" fill="#05111A" fill-opacity="0.1"/>
                            <g id="course-overview-tooltip-items" fill="#FCFCFC" filter="">
                            <g class="course-tooltip">
                            <rect id="course-tooltip-background-3" x="79" y="443" width="320" height="42" fill="#FCFCFC"/>
                            <text id="text" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="469.469">Drop Course</tspan></text>
                            </g>
                            <g class="course-tooltip">
                            <rect id="course-tooltip-background-2" x="79" y="401" width="320" height="42" fill="#FCFCFC"/>
                            <text id="text_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="427.469">Swap Course</tspan></text>
                            </g>
                            <g class="course-tooltip">
                            <rect id="course-tooltip-background-1" x="79" y="359" width="320" height="42" fill="#FCFCFC"/>
                            <text id="text_3" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="385.469">Course Details</tspan></text>
                            </g>
                            </g>
                            </g>
                            <g id="touch-indicator" opacity="0.2" filter="">
                            <circle cx="384" cy="359" r="20" fill="#1077D1"/>
                            </g>
                        </g>
                        </g>
                        </g>
                        <g id="phone-outline">
                        <path id="stroke" d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="#F0F1F2" stroke-width="4"/>
                        <g id="stroke_2">
                        <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint0_radial)" stroke-width="6"/>
                        <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint1_radial)" stroke-width="6"/>
                        </g>
                        <g id="stroke_3" opacity="0.3" filter="url(#filter7_f)">
                        <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint2_linear)" stroke-width="2"/>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <filter id="filter0_dd" x="0" y="0" width="453" height="890" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="22"/>
                        <feGaussianBlur stdDeviation="18"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="3.5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter1_i" x="42" y="163" width="188" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        </filter>
                        <filter id="filter2_i" x="230" y="163" width="187" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        </filter>
                        <filter id="filter3_ii" x="42" y="308" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter4_ii" x="42" y="346" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter5_ii" x="42" y="435" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter6_ii" x="42" y="473" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                        </filter>
                        <filter id="filter7_f" x="37" y="15" width="379" height="816" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
                        </filter>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1241.5 411.5) rotate(0.279667) scale(2356.03 1088.07)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="#C8C8C8"/>
                        <stop offset="1" stop-color="#FDFDFD"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(184.5 1417.5) rotate(-88.8985) scale(2158.9 997.028)">
                        <stop stop-color="#F2F2F2"/>
                        <stop offset="1" stop-color="#C8C8C8"/>
                        <stop offset="1" stop-color="white"/>
                        </radialGradient>
                        <linearGradient id="paint2_linear" x1="-10" y1="377" x2="16.5" y2="376.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C9C9C9"/>
                        <stop offset="1" stop-color="#EFEFEF"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <clipPath id="clip0">
                        <path d="M42 53C42 33.1177 58.1177 17 78 17H375C394.882 17 411 33.1177 411 53V793C411 812.882 394.882 829 375 829H78C58.1178 829 42 812.882 42 793V53Z" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>`,
                        caption: 'Short Navigation Demo'
                    }
                ]
            },

            sketch: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/combining-projects.svg',
                        caption: 'Combining multiple standalone apps into one ecosystem',
                    },
                ]
            },

            sneakpeak: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/desktop-overview.png',
                        caption: 'Desktop Main Dashboard',
                    },
                    {
                        name: 'cunyfirst/desktop-course-active.png',
                        caption: 'Desktop Active Course',
                    },
                    {
                        name: 'cunyfirst/desktop-transcript-overview.png',
                        caption: 'Desktop Transcript Overview',
                    },
                ]
            },

            userflow: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/finances-flowchart.png',
                        caption: 'Finances Userflow',
                    },
                    {
                        name: 'cunyfirst/courses-flowchart.png',
                        caption: 'Courses Userflow',
                    },
                    {
                        name: 'cunyfirst/academics-flowchart.png',
                        caption: 'Academics Userflow',
                    },
                ]
            },

            wireframe: {
                size: 'lg',

                "images": [
                    {
                        name: 'cunyfirst/wireframe-1.svg',
                        caption: 'empty state / courses state / information state / alert state',
                    },
                    {
                        name: 'cunyfirst/wireframe-2.svg',
                        caption: 'secondary courses state / information state 2 / courses state 2',
                    },
                ]
            },

            navigation: {
                size: 'md',

                "images": [
                    {
                        name: 'cunyfirst/navigation.png',
                        caption: 'Primary types of navigation',
                    },
                ]
            },

            dynamic: {
                size: 'xl',

                "images": [
                    {
                        name: 'cunyfirst/overview-screens.png',
                        caption: 'current courses / academic overview / finances overview',
                    },
                    {
                        name: 'cunyfirst/extra-screens.png',
                        caption: 'search courses / course details / course options',
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
            id: 'main-animation',
            name: 'Problem',
            heading: 'Hitting The Pain Points',
            content: 'I\'ve interviewed and casually spoken to many users throughout the years about what they would like in a student platform and how they interact with it on a daily basis. I was able to research and consolidate their needs based on the existing platform\'s features into the core-features necessary for their day-to-day use cases.',
        },

        //GOAL
        goal: {
            name: 'Goal',
            heading: 'Future goals involve a design system',
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
            name: 'Flows and Wires',
            heading: 'Defining The Foundations',
            content: 'The user flows from the research created the foundation to start sketching from. I began with the mobile version because it gives the most constraints in information architecture and how to organize the content. Eventually landing on about 7 base screens for the majority of the content, I got to work on structuring the content.',
        },

        //NAVIGATION
        navigation: {
            name: 'Nav-Design',
            heading: 'Testing Four Types Of Navigation',
            content: 'After testing button-only, tabular, dropdown, and iconic navigation, I decided on a combination of three depending on the type of information being accessed. With button-only navigation, users felt the space was cluttered but functional. I have not gotten a large amount of feedback on the tabular and dropdown navigation but will be testing soon for those observations!',
        },

        //DYNAMIC CONTENT
        dynamicContent: {
            name: 'White-Label Software',
            heading: 'Defining Business Goals',
            content: 'A white-label software is an all-in-one packaged product that companies and agencies can buy into and customize for their own uses. This means that the overall components and features have to be flexible enough for different use cases while still being able to complete the core-tasks of the software.<br><br>I took this approach because the platforms being used the most by universities is white-label. I wanted to design something that could replace the existing platforms so from a business perspective, this was at the core of corED.',
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
            heading: 'Lessons Learned',
            content: 'As I mentioned in the beginning, this project was big for one person...really big. I didn\'t get to tackle everything I hoped for because of school and other projects. However, I learned a ton about process development, presenting the work early for quicker and more consistent feedback, and designing a component system. I\'d love to create a design system for the current component set in the near future but for now, thanks for reading and feel free to ping me on Twitter or LinkedIn for feedback!',
        },

        //PROTOTYPE
        proto: {
            name: 'Prototype',
            heading: 'Prototype Walkthrough',
            content: 'This is an ongoing project and the screens are being updated constantly. Please disregard inconsistencies in elements since I hop on whenever I can to keep working. Not everything can be navigated, but it will give a general idea of how the app may function.',
            p: 'https://www.figma.com/proto/dVg3M7TD36D1EGTXUgxNSu0T/In-progress?node-id=1%3A4886&viewport=1994%2C1387%2C0.31970152258872986&scaling=scale-down',
        },
    },

    //SALVATION ARMY
    {
         //HOMEPAGE SETUP
         project: 'Salvation Army',
         status: 'view Style Guide</br><p>Behance</p>',
         disable: 'true',
         next: 'gladwell',
         prev: 'blah',
         href: 'https://www.behance.net/gallery/76060487/Salvation-Army-Logo-Redesign-Styleguide-Concept',
         name: 'Rebranding Salvation Army',
         platform: 'Print and Web',
         role: '<bold class="cr-red-base">Personal</bold> | Branding | Art Direction',
         purpose: 'Expanding the brand of a growing non-profit',
        //  description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
         descColor: 'primary-white-text',
         image: 'cover/salvation-army-cover.svg',
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
            status: 'view case study</br><p>Behance</p>',
            disable: 'true',
            next: 'cored',
            prev: 'salvationarmy',
            href: 'https://www.behance.net/gallery/76059619/Malcolm-Gladwell-Book-Cover-Redesigns',
            name: 'Gladwell Cover Redesigns',
            platform: 'Print',
            role: '<bold class="cr-red-base">Personal</bold> | Art Direction | Typography',
            purpose: 'Designing engaging covers for impactful books',
            description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
            descColor: 'primary-white-text',
            image: 'cover/gladwell-cover.jpeg',
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


//CASE STUDY POSITIONS IN JSON FILE

// const cs__cunyfirst = caseStudies[1];
const cs__house2homeBusiness = caseStudies[1];
const cs__aluminyze = caseStudies[0];
const cs__cored = caseStudies[2];
const cs__blah = caseStudies[3];
// const cs__fueltime = caseStudies[4];
const cs__ipc = caseStudies[4];
const cs__salvationarmy = caseStudies[5];
const cs__gladwell = caseStudies[6];

//CONTENT PARENT CONTAINERS IN INDEX.HTML
const contentContainer = document.getElementById('content-container');
const blahContainer = document.getElementById('blah');
const homeContainer = document.getElementById('home');
// const cunyfirstContainer = document.getElementById('cunyfirst');
const coredContainer = document.getElementById('cored');
const ipcContainer = document.getElementById('ipc');
const salvationarmyContainer = document.getElementById('salvationarmy');
// var safeSexContainer = document.getElementById('safesex');
const gladwellContainer = document.getElementById('gladwell');
const fueltimeContainer = document.getElementById('fueltime');
const aluminyzeContainer = document.getElementById('aluminyze');
const house2homeBusinessContainer = document.getElementById('house2homeBusiness');

//NAVIGATION VARIABLES
const navContainer = document.getElementById('nav-container');
const contentContainerChildren = Array.from($(contentContainer).children());
const noHash = location.hash.replace(/^#/, '');
var caseStudy = false;

//SCROLLMAGIC INITIALIZATION
var controller = new ScrollMagic.Controller();





//OLD CASE STUDIES

//      //KINGSTON 12
//      {
//         //HOMEPAGE SETUP
//         status: 'coming soon',
//         disable: 'true',
//         project: 'Kingston 12',
//         next: '',
//         prev: '',
//         href: '',
//         name: 'Kingston 12',
//         platform: 'Print and Web',
//         role: '<bold class="cr-red-base">Client</bold> | Logo | Branding',
//         purpose: 'A logo for a family-owned Jamaican restaurant',
//        //  description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
//         descColor: 'primary-white-text',
//         image: 'cover/kingston12-cover.svg',
//         primaryColor: 'salvation-primary-red',
//         supportColor: 'cuny-primary-light',
//         secondaryColor: 'salvation-secondary',
//            buttonColor: 'cuny-primary',
//     },
     
//      //MOD-UH-FIED
//      {
//         //HOMEPAGE SETUP
//         status: 'coming soon',
//         disable: 'true',
//         project: 'MOD.UH.FIED',
//         next: '',
//         prev: '',
//         href: '',
//         name: 'MOD.UH.FIED',
//         platform: 'Print and Web',
//         role: '<bold class="cr-red-base">Client</bold> | Logo | Branding',
//         purpose: 'A logo for car enthusiast clothing',
//        //  description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
//         descColor: 'primary-white-text',
//         image: 'cover/moduhfied-cover.jpeg',
//         primaryColor: 'salvation-primary-red',
//         supportColor: 'cuny-primary-light',
//         secondaryColor: 'salvation-secondary',
//            buttonColor: 'cuny-primary',
//     },
     
//      //DOCTOR WITHOUT BORDERS
//      {
//         //HOMEPAGE SETUP
//         status: 'coming soon',
//         disable: 'true',
//         project: 'Doctors Without Borders',
//         next: '',
//         prev: '',
//         href: '',
//         name: 'Doctors Without Borders',
//         platform: 'Print and Web',
//         role: '<bold class="cr-red-base">Personal</bold> | Logo | Branding',
//         purpose: 'Logo design for a worldwide health organization',
//        //  description: 'Modular branding is extremely helpful for brands that have a hand in many areas of interest. When searching for help, people want to know who to go to right away and although the current Salvation Army logo is immediately recognizable, seeing it doesn\'t mean immediate help. </br></br> This is my take on creating a logo and system that is simple, modular, and connects well with the brand\'s overall mission statement while catering their branding to the specific areas they provide help to.',
//         descColor: 'primary-white-text',
//         image: 'cover/dwb-cover.svg',
//         primaryColor: 'salvation-primary-red',
//         supportColor: 'cuny-primary-light',
//         secondaryColor: 'salvation-secondary',
//            buttonColor: 'cuny-primary',
//    },