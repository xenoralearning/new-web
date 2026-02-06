import { ProgramPhase, TeacherFeature, ParentFeature, TeamMember } from './types';

export const translations = {
  en: {
    nav: {
      home: "Home",
      kids: "Kids",
      teachers: "Teachers",
      parents: "Parents",
      team: "Team",
      join: "Join Now"
    },
    hero: {
      badge: "Future of Learning",
      titleStart: "AI Education",
      titleEnd: "For Every Generation",
      description: "Empowering students, teachers, and parents to master the tools of tomorrow through interactive, phase-based AI programs.",
      explore: "Explore Programs",
      workshop: "Free AI Workshop",
      videoBadge: "AI",
      videoTitle: "Xenora Interactive",
      watchIntro: "WATCH INTRODUCTION"
    },
    homeSections: {
      students: {
        title: "8-Phase Student Journey",
        description: "From basic conversations to building future tech, our curriculum guides students through the complete landscape of Artificial Intelligence."
      },
      kids: {
        title: "Kids & Creative AI",
        description: "Kids learn how to use AI safely and creatively for academics, assignments, research, presentations, and projects. We turn screen time into skill time.",
        list: ["Safe Exploration", "Fun Projects", "Interactive Stories"],
        button: "View Kids Curriculum",
        img1: "Interactive Storytelling"
      },
      teachers: {
        badge: "For Educators",
        title: "Teaching With Intelligence",
        features: [
          { title: "AI-Assisted Planning", description: "Generate lesson plans and curricula in seconds." },
          { title: "Rapid Material Creation", description: "Create worksheets, quizzes, and slides instantly." },
          { title: "Interactive Classes", description: "Engage students with AI-driven simulations and debates." },
          { title: "Automated Feedback", description: "Grade assignments and provide personalized feedback automatically." },
          { title: "Simplified Complexity", description: "Break down complex topics into digestible explanations." },
        ],
        button: "Get Teacher Certification",
        imgLabel: "Lesson Planning"
      },
      parents: {
        title: "Digital Parenting Redefined",
        description: "Take control of the algorithm. We empower parents to fix YouTube recommendations, reset digital habits, and use AI to support their child's learning journey.",
        features: [
          { title: "Algorithm Reset", description: "Step-by-step guide to fixing YouTube recommendations." },
          { title: "Healthy Digital Habits", description: "Strategies to improve children's screen time quality." },
          { title: "Academic Support", description: "Using AI tools for homework help and language learning." },
          { title: "Safety First", description: "Understanding how to use AI tools safely and effectively." },
        ],
        featuredTitle: "Featured: The YouTube Reset Method",
        featuredDesc: "Our step-by-step guide to clearing negative algorithmic influence and restoring educational content streams.",
        stats: "100%",
        statsLabel: "Safe Methods"
      }
    },
    kidsPage: {
      hero: {
        badge: "Next Gen AI",
        titleStart: "AI For",
        titleEnd: "Kids",
        description: "Empowering the youngest minds with safe, creative, and educational Artificial Intelligence tools. Two paths to mastery: Offline Workshops & Online Skills.",
        imgLabel: "Future Builders"
      },
      online: {
        title: "Online AI Skills Program",
        description: "Learn from anywhere. Interactive video modules, virtual playgrounds, and guided projects that teach kids how to master AI tools safely from home.",
        list: ["Self-paced learning", "Virtual projects", "Global community"],
        button: "Start Learning Online"
      },
      offline: {
        title: "Offline AI Workshop",
        description: "Hands-on, in-person collaborative sessions. Kids work in teams to solve problems, build robots, and create art using our proprietary 8-Phase AI Curriculum.",
        list: ["Team collaboration", "AI", "Expert mentorship"],
        button: "Find a Workshop"
      },
      phases: {
        badge: "Offline Workshop Exclusive",
        title: "The 8-Phase Curriculum",
        description: "A comprehensive journey designed for our offline workshops, taking students from basic interaction to building the future.",
        list: [
          { id: 1, title: "Conversational AI & Smart Assistants", description: "Students learn to communicate with AI, ask questions effectively, compare answers, and understand simple AI-generated explanations.", icon: "MessageSquare" },
          { id: 2, title: "Productivity & Creativity Boosting", description: "Students learn summarizing, planning studies, making posters, presentations, videos, and turning text into speech.", icon: "Zap" },
          { id: 3, title: "Automation & Digital Tasks", description: "Students learn to automate workflows, generate presentations, translate content, and organize assignments efficiently.", icon: "Workflow" },
          { id: 4, title: "Multimedia & Creative Expression", description: "Students learn image generation, animation creation, structured writing, and assisted video editing.", icon: "Palette" },
          { id: 5, title: "Web, Apps & Future Tech Builders", description: "Students learn instant website creation, app building without coding, UI/UX prototyping, and research organization.", icon: "Smartphone" },
          { id: 6, title: "Smarter Studying With AI", description: "Students use AI to solve academic problems, extract answers from textbooks, research, and create practice lessons.", icon: "BookOpen" },
          { id: 7, title: "Career Exploration & Life Skills", description: "Students explore future careers, practice communication, improve speaking skills, and learn effective prompting.", icon: "Briefcase" },
          { id: 8, title: "Fun, Games & AI Creativity", description: "Students use AI for storytelling, music creation, interactive characters, and playful educational games.", icon: "Gamepad2" }
        ]
      },
      safety: {
        title: "Safe & Creative Academic Growth",
        safetyTitle: "Safety First",
        safetyDesc: "We teach kids how to use AI responsibly, protecting their privacy and understanding digital ethics.",
        creativeTitle: "Creative Academics",
        creativeDesc: "Using AI for research, presentations, and assignments without replacing critical thinking.",
        stats: "10k+",
        statsLabel: "Students Trained"
      }
    },
    teachersPage: {
      hero: {
        badge: "Professional Development",
        title: "Teaching With Intelligence",
        description: "Transform your classroom with AI-assisted lesson planning, automated feedback, and interactive learning materials. Save time while increasing engagement.",
        btnOnline: "Start Online Training",
        btnOffline: "Book Offline Workshop",
        certTitle: "Certified AI Educator",
        certSubtitle: "Program"
      },
      benefits: {
        title: "The AI Advantage for Educators",
        list: [
            { title: "Lesson Planning", desc: "Generate comprehensive lesson plans, curricula, and schedules in seconds tailored to your standards." },
            { title: "Material Generation", desc: "Create worksheets, quizzes, slides, and interactive visual aids instantly." },
            { title: "Interactive Classrooms", desc: "Engage students with AI-driven simulations, historical debates, and real-time problem solving." },
            { title: "Simplifying Complexity", desc: "Break down complex topics into digestible analogies and explanations for any grade level." },
            { title: "Automated Feedback", desc: "Grade assignments instantly and provide personalized, constructive feedback for every student." },
            { title: "Time Management", desc: "Save 10+ hours per week on administrative tasks, allowing you to focus on mentoring." },
        ]
      },
      training: {
        offlineTitle: "Offline AI Training Session",
        offlineDesc: "Intensive in-person bootcamps for school districts and educational institutions.",
        offlineBtn: "Book a Session →",
        onlineTitle: "Online AI Classroom Training",
        onlineDesc: "Self-paced certification programs with live webinars and resource libraries.",
        onlineBtn: "Start Certification →"
      }
    },
    parentsPage: {
      hero: {
        titleStart: "Digital",
        titleEnd: "Parenting",
        description: "Take control of the algorithm. We empower parents to fix YouTube recommendations, reset digital habits, and use AI to support their child's learning journey at home.",
        button: "Get The Parent's Guide"
      },
      reset: {
        title: "Reset The Algorithm",
        description: "Is your child's feed full of low-quality content? We teach a proven step-by-step method to wipe the slate clean and retrain recommendations to surface educational, inspiring, and creative content.",
        card1Title: "Audit & Cleanse",
        card1Desc: "Identify and remove negative watch history triggers.",
        card2Title: "Positive Reinforcement",
        card2Desc: "Strategically engage with high-value channels to shift the feed.",
        visualStats: "100%",
        visualLabel: "Control Over Content"
      },
      tools: {
        titleStart: "AI Tools for",
        titleEnd: "Home Education",
        description: "Curated categories to support your child's growth.",
        list: [
            { title: "Reading Assistant", desc: "Tools that help with pronunciation, comprehension, and interactive storytelling." },
            { title: "Homework Help", desc: "Socratic AI tutors that guide students to answers rather than doing the work for them." },
            { title: "Language Learning", desc: "Immersive conversation partners to practice new languages in a safe environment." },
            { title: "Digital Habits", desc: "Smart monitors and schedulers to ensure screen time is balanced and productive." }
        ]
      },
      imgLabel: "Family Tech Time"
    },
    teamPage: {
      badge: "Visionaries & Builders",
      titleStart: "The",
      titleEnd: "XenoraLearning Team",
      description: "We are educators, engineers, and creatives united by a single mission: to prepare the next generation for an AI-powered future through safe, structured, and inspiring education.",
      members: [
        { 
          id: 1, 
          name: "Mohammed Sabeeh", 
          role: "CEO & Founder", 
          description: "A skilled computer engineer and forward-thinking entrepreneur redefining modern education. As an AI trainer,who bridges technology and creativity to unlock limitless potential.",
          image: "/images/ceo.png",
          instagram: "https://www.instagram.com/thename_sabyy?igsh=enZ0a2F5ODZsenZ5",
          linkedin: "https://www.linkedin.com/in/mohammed-sabeeh-pp-38bb2b34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 4, 
          name: "Amna Parambat", 
          role: "Head of Edu-trainers", 
          description: "Computer Engineer and AI training with a passion for teaching and innovation. Empower youth through smart learning Strategy, mindset and personal growth.",
          image: "/images/head of trainers.jpeg",
          instagram: "https://www.instagram.com/amnaahhh____?igsh=bmgzMm8wZjJmc2d1",
          linkedin: "https://www.linkedin.com/in/amna-parambat-585911257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 3, 
          name: "Muhammed Zakiy k", 
          role: "Head of Managment", 
          description: "Lead with calm confidence, sharp decision-making, and a results first mindset building strong teams, smarter systems, and a culture where growth and innovation never stop.",
          image: "/images/head of mananagment.jpeg",
          instagram: "https://www.instagram.com/zakiy.mhd?utm_source=qr&igsh=MTNuMGRsMzFhZHpuOQ==",
          linkedin: "https://www.linkedin.com/in/muhammed-zakiy-650b68384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        { 
          id: 2, 
          name: "FADWA KAPPOOR", 
          role: "HEAD OF OPERATIONS", 
          description: "A dedicated mentor committed to empowering youth with practical, future-ready tech skills. Driven by a mission to provide clear guidance that inspires confidence, creativity, and real-world impact.",
          image: "/images/head of operations.jpeg",
          instagram: "https://www.instagram.com/fadwa_kappoor?igsh=cTl2d29xa2duYXRl",
          linkedin: "https://www.linkedin.com/in/fadwa-kappoor-950a83296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 5, 
          name: "Azmeel Muradh", 
          role: "Head of media", 
          description: "Computer Engineer and Digital Creator with a passion for storytelling and innovation. Empowering youth through creative learning, smart digital strategies, and growth-focused mindsets.",
          image: "/images/head of media.jpg",
          linkedin: "https://www.linkedin.com/in/azmeel-muradh-a78771346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 6,
          name: "Abdul Ahad",
          role: "Head of Creativity",
          description: "Computer Engineering student interested in AI and technology. Creative thinker and observer, learning and exploring new things at my own pace.",
          image: "/images/head of creativity.jpeg",
          instagram: "https://www.instagram.com/abdulahad.online?igsh=cnhzMnVyY3Q3c2Nv",
          linkedin: "https://www.linkedin.com/in/abdul-ahad-693a49365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      ]
    },
    footer: {
      description: "Preparing the next generation for an AI-driven future through comprehensive, safe, and creative education.",
      getInTouch: "Get In Touch",
      placeholders: { name: "Name", email: "Email", message: "Message", class: "Class" },
      button: "Send Message",
      rights: "All rights reserved."
    }
  },
  hi: {
    nav: {
      home: "होम",
      kids: "बच्चे",
      teachers: "शिक्षक",
      parents: "अभिभावक",
      team: "टीम",
      join: "अभी शामिल हों"
    },
    hero: {
      badge: "सीखने का भविष्य",
      titleStart: "एआई शिक्षा",
      titleEnd: "हर पीढ़ी के लिए",
      description: "छात्रों, शिक्षकों और अभिभावकों को इंटरैक्टिव, चरण-आधारित एआई कार्यक्रमों के माध्यम से कल के उपकरणों में महारत हासिल करने के लिए सशक्त बनाना।",
      explore: "कार्यक्रम देखें",
      workshop: "मुफ्त एआई कार्यशाला",
      videoBadge: "एआई",
      videoTitle: "ज़ेनोरा इंटरएक्टिव",
      watchIntro: "परिचय देखें"
    },
    homeSections: {
      students: {
        title: "8-चरण छात्र यात्रा",
        description: "बुनियादी बातचीत से लेकर भविष्य की तकनीक बनाने तक, हमारा पाठ्यक्रम छात्रों को आर्टिफिशियल इंटेलिजेंस के पूरे परिदृश्य के माध्यम से मार्गदर्शन करता है।"
      },
      kids: {
        title: "बच्चे और रचनात्मक एआई",
        description: "बच्चे शिक्षा, असाइनमेंट, शोध, प्रस्तुतियों और परियोजनाओं के लिए सुरक्षित और रचनात्मक रूप से एआई का उपयोग करना सीखते हैं। हम स्क्रीन टाइम को स्किल टाइम में बदलते हैं।",
        list: ["सुरक्षित अन्वेषण", "मजेदार परियोजनाएं", "इंटरएक्टिव कहानियां"],
        button: "बच्चों का पाठ्यक्रम देखें",
        img1: "इंटरएक्टिव कहानी कहना"
      },
      teachers: {
        badge: "शिक्षकों के लिए",
        title: "बुद्धिमत्ता के साथ शिक्षण",
        features: [
          { title: "एआई-सहायता प्राप्त योजना", description: "सेकंड में पाठ योजनाएं और पाठ्यक्रम तैयार करें।" },
          { title: "तेजी से सामग्री निर्माण", description: "तुरंत वर्कशीट, क्विज़ और स्लाइड बनाएं।" },
          { title: "इंटरएक्टिव कक्षाएं", description: "एआई-संचालित सिमुलेशन और बहस के साथ छात्रों को शामिल करें।" },
          { title: "स्वचालित फीडबैक", description: "असाइनमेंट ग्रेड करें और स्वचालित रूप से व्यक्तिगत फीडबैक प्रदान करें।" },
          { title: "जटिलता को सरल बनाना", description: "जटिल विषयों को सुपाच्य स्पष्टीकरण में तोड़ें।" },
        ],
        button: "शिक्षक प्रमाणन प्राप्त करें",
        imgLabel: "पाठ योजना"
      },
      parents: {
        title: "डिजिटल पेरेंटिंग को फिर से परिभाषित",
        description: "एल्गोरिथम पर नियंत्रण रखें। हम माता-पिता को YouTube अनुशंसाओं को ठीक करने, डिजिटल आदतों को रीसेट करने और अपने बच्चे की सीखने की यात्रा का समर्थन करने के लिए एआई का उपयोग करने के लिए सशक्त बनाते हैं।",
        features: [
          { title: "एल्गोरिथम रीसेट", description: "YouTube अनुशंसाओं को ठीक करने के लिए चरण-दर-चरण मार्गदर्शिका।" },
          { title: "स्वस्थ डिजिटल आदतें", description: "बच्चों के स्क्रीन समय की गुणवत्ता में सुधार के लिए रणनीतियाँ।" },
          { title: "शैक्षणिक सहायता", description: "गृहकार्य सहायता और भाषा सीखने के लिए एआई टूल का उपयोग करना।" },
          { title: "सुरक्षा पहले", description: "एआई टूल का सुरक्षित और प्रभावी ढंग से उपयोग करने के तरीके को समझना।" },
        ],
        featuredTitle: "विशेष: YouTube रीसेट विधि",
        featuredDesc: "नकारात्मक एल्गोरिथम प्रभाव को साफ करने और शैक्षिक सामग्री धाराओं को बहाल करने के लिए हमारी चरण-दर-चरण मार्गदर्शिका।",
        stats: "100%",
        statsLabel: "सुरक्षित तरीके"
      }
    },
    kidsPage: {
      hero: {
        badge: "नेक्स्ट जेन एआई",
        titleStart: "बच्चों के लिए",
        titleEnd: "एआई",
        description: "सबसे कम उम्र के दिमाग को सुरक्षित, रचनात्मक और शैक्षिक आर्टिफिशियल इंटेलिजेंस टूल के साथ सशक्त बनाना। महारत के दो रास्ते: ऑफलाइन वर्कशॉप और ऑनलाइन कौशल।",
        imgLabel: "भविष्य के निर्माता"
      },
      online: {
        title: "ऑनलाइन एआई कौशल कार्यक्रम",
        description: "कहीं से भी सीखें। इंटरएक्टिव वीडियो मॉड्यूल, वर्चुअल प्लेग्राउंड और निर्देशित प्रोजेक्ट जो बच्चों को घर से सुरक्षित रूप से एआई टूल में महारत हासिल करना सिखाते हैं।",
        list: ["स्व-गति से सीखना", "वर्चुअल प्रोजेक्ट", "वैश्विक समुदाय"],
        button: "ऑनलाइन सीखना शुरू करें"
      },
      offline: {
        title: "ऑफलाइन एआई वर्कशॉप",
        description: "हैंड्स-ऑन, इन-पर्सन सहयोग सत्र। बच्चे समस्याओं को हल करने, रोबोट बनाने और हमारे 8-चरण एआई पाठ्यक्रम का उपयोग करके कला बनाने के लिए टीमों में काम करते हैं।",
        list: ["टीम सहयोग", "एआई", "विशेषज्ञ परामर्श"],
        button: "एक कार्यशाला खोजें"
      },
      phases: {
        badge: "केवल ऑफलाइन कार्यशाला",
        title: "8-चरण पाठ्यक्रम",
        description: "हमारी ऑफलाइन कार्यशालाओं के लिए डिज़ाइन की गई एक व्यापक यात्रा, जो छात्रों को बुनियादी बातचीत से लेकर भविष्य बनाने तक ले जाती है।",
        list: [
          { id: 1, title: "संवादी एआई और स्मार्ट असिस्टेंट", description: "छात्र एआई के साथ संवाद करना, प्रभावी ढंग से प्रश्न पूछना, उत्तरों की तुलना करना और सरल एआई-जनित स्पष्टीकरणों को समझना सीखते हैं।", icon: "MessageSquare" },
          { id: 2, title: "उत्पादकता और रचनात्मकता बढ़ाना", description: "छात्र संक्षेप करना, अध्ययन की योजना बनाना, पोस्टर, प्रस्तुतियाँ, वीडियो बनाना और पाठ को भाषण में बदलना सीखते हैं।", icon: "Zap" },
          { id: 3, title: "स्वचालन और डिजिटल कार्य", description: "छात्र वर्कफ़्लो को स्वचालित करना, प्रस्तुतियाँ उत्पन्न करना, सामग्री का अनुवाद करना और असाइनमेंट को कुशलतापूर्वक व्यवस्थित करना सीखते हैं।", icon: "Workflow" },
          { id: 4, title: "मल्टीमीडिया और रचनात्मक अभिव्यक्ति", description: "छात्र छवि निर्माण, एनीमेशन निर्माण, संरचित लेखन और सहायता प्राप्त वीडियो संपादन सीखते हैं।", icon: "Palette" },
          { id: 5, title: "वेब, ऐप्स और भविष्य के तकनीकी निर्माता", description: "छात्र कोडिंग के बिना तत्काल वेबसाइट निर्माण, ऐप निर्माण, यूआई/यूएक्स प्रोटोटाइपिंग और शोध संगठन सीखते हैं।", icon: "Smartphone" },
          { id: 6, title: "एआई के साथ स्मार्ट अध्ययन", description: "छात्र शैक्षणिक समस्याओं को हल करने, पाठ्यपुस्तकों से उत्तर निकालने, शोध करने और अभ्यास पाठ बनाने के लिए एआई का उपयोग करते हैं।", icon: "BookOpen" },
          { id: 7, title: "करियर अन्वेषण और जीवन कौशल", description: "छात्र भविष्य के करियर का पता लगाते हैं, संचार का अभ्यास करते हैं, बोलने के कौशल में सुधार करते हैं और प्रभावी प्रॉम्प्टिंग सीखते हैं।", icon: "Briefcase" },
          { id: 8, title: "मज़ा, खेल और एआई रचनात्मकता", description: "छात्र कहानी कहने, संगीत निर्माण, इंटरैक्टिव पात्रों और चंचल शैक्षिक खेलों के लिए एआई का उपयोग करते हैं।", icon: "Gamepad2" }
        ]
      },
      safety: {
        title: "सुरक्षित और रचनात्मक शैक्षणिक विकास",
        safetyTitle: "सुरक्षा पहले",
        safetyDesc: "हम बच्चों को एआई का जिम्मेदारी से उपयोग करना सिखाते हैं, उनकी गोपनीयता की रक्षा करते हैं और डिजिटल नैतिकता को समझते हैं।",
        creativeTitle: "रचनात्मक शिक्षाविद",
        creativeDesc: "महत्वपूर्ण सोच को बदले बिना अनुसंधान, प्रस्तुतियों और असाइनमेंट के लिए एआई का उपयोग करना।",
        stats: "10k+",
        statsLabel: "प्रशिक्षित छात्र"
      }
    },
    teachersPage: {
      hero: {
        badge: "व्यावसायिक विकास",
        title: "बुद्धिमत्ता के साथ शिक्षण",
        description: "एआई-सहायता प्राप्त पाठ योजना, स्वचालित फीडबैक और इंटरैक्टिव शिक्षण सामग्री के साथ अपनी कक्षा को बदलें। जुड़ाव बढ़ाते हुए समय बचाएं।",
        btnOnline: "ऑनलाइन प्रशिक्षण शुरू करें",
        btnOffline: "ऑफलाइन कार्यशाला बुक करें",
        certTitle: "प्रमाणित एआई शिक्षक",
        certSubtitle: "कार्यक्रम"
      },
      benefits: {
        title: "शिक्षकों के लिए एआई लाभ",
        list: [
            { title: "पाठ योजना", desc: "सेकंड में व्यापक पाठ योजनाएं, पाठ्यक्रम और कार्यक्रम तैयार करें जो आपके मानकों के अनुरूप हों।" },
            { title: "सामग्री निर्माण", desc: "कार्यपत्रक, क्विज़, स्लाइड और इंटरैक्टिव दृश्य सहायता तुरंत बनाएं।" },
            { title: "इंटरएक्टिव कक्षाएं", desc: "एआई-संचालित सिमुलेशन, ऐतिहासिक बहस और वास्तविक समय की समस्या समाधान के साथ छात्रों को शामिल करें।" },
            { title: "जटिलता को सरल बनाना", desc: "जटिल विषयों को किसी भी ग्रेड स्तर के लिए सुपाच्य उपमाओं और स्पष्टीकरणों में तोड़ें।" },
            { title: "स्वचालित फीडबैक", desc: "असाइनमेंट को तुरंत ग्रेड करें और प्रत्येक छात्र के लिए व्यक्तिगत, रचनात्मक फीडबैक प्रदान करें।" },
            { title: "समय प्रबंधन", desc: "प्रशासनिक कार्यों पर प्रति सप्ताह 10+ घंटे बचाएं, जिससे आप मेंटरिंग पर ध्यान केंद्रित कर सकें।" },
        ]
      },
      training: {
        offlineTitle: "ऑफलाइन प्रशिक्षक कार्यशाला",
        offlineDesc: "स्कूली जिलों और शैक्षणिक संस्थानों के लिए गहन व्यक्तिगत बूटकैंप।",
        offlineBtn: "सत्र बुक करें →",
        onlineTitle: "ऑनलाइन एआई कक्षा प्रशिक्षण",
        onlineDesc: "लाइव वेबिनार और संसाधन पुस्तकालयों के साथ स्व-गति वाले प्रमाणन कार्यक्रम।",
        onlineBtn: "प्रमाणन शुरू करें →"
      }
    },
    parentsPage: {
      hero: {
        titleStart: "डिजिटल",
        titleEnd: "पेरेंटिंग",
        description: "एल्गोरिथम पर नियंत्रण रखें। हम माता-पिता को YouTube अनुशंसाओं को ठीक करने, डिजिटल आदतों को रीसेट करने और घर पर अपने बच्चे की सीखने की यात्रा का समर्थन करने के लिए एआई का उपयोग करने के लिए सशक्त बनाते हैं।",
        button: "माता-पिता की गाइड प्राप्त करें"
      },
      reset: {
        title: "एल्गोरिथम रीसेट करें",
        description: "क्या आपके बच्चे की फ़ीड निम्न-गुणवत्ता वाली सामग्री से भरी है? हम स्लेट को साफ करने और शैक्षिक, प्रेरक और रचनात्मक सामग्री को सतह पर लाने के लिए सिफारिशों को फिर से प्रशिक्षित करने के लिए एक सिद्ध चरण-दर-चरण विधि सिखाते हैं।",
        card1Title: "ऑडिट और सफाई",
        card1Desc: "नकारात्मक घड़ी इतिहास ट्रिगर्स को पहचानें और हटाएं।",
        card2Title: "सकारात्मक सुदृढीकरण",
        card2Desc: "फ़ीड को शिफ्ट करने के लिए रणनीतिक रूप से उच्च-मूल्य वाले चैनलों के साथ जुड़ें।",
        visualStats: "100%",
        visualLabel: "सामग्री पर नियंत्रण"
      },
      tools: {
        titleStart: "घर की शिक्षा के लिए",
        titleEnd: "एआई टूल्स",
        description: "आपके बच्चे के विकास का समर्थन करने के लिए क्यूरेटेड श्रेणियां।",
        list: [
            { title: "पढ़ने में सहायक", desc: "ऐसे उपकरण जो उच्चारण, समझ और इंटरैक्टिव कहानी कहने में मदद करते हैं।" },
            { title: "गृहकार्य सहायता", desc: "सुकरात एआई ट्यूटर जो छात्रों के लिए काम करने के बजाय उन्हें उत्तरों के लिए मार्गदर्शन करते हैं।" },
            { title: "भाषा सीखना", desc: "सुरक्षित वातावरण में नई भाषाओं का अभ्यास करने के लिए इमर्सिव वार्तालाप भागीदार।" },
            { title: "डिजिटल आदतें", desc: "यह सुनिश्चित करने के लिए स्मार्ट मॉनिटर और शेड्यूलर्स कि स्क्रीन समय संतुलित और उत्पादक है।" }
        ]
      },
      imgLabel: "फैमली टेक टाइम"
    },
    teamPage: {
      badge: "दूरदर्शी और निर्माता",
      titleStart: "",
      titleEnd: "XenoraLearning टीम",
      description: "हम एक ही मिशन से जुड़े शिक्षक, इंजीनियर और रचनात्मक हैं: सुरक्षित, संरचित और प्रेरक शिक्षा के माध्यम से अगली पीढ़ी को एआई-संचालित भविष्य के लिए तैयार करना।",
      members: [
        { 
          id: 1, 
          name: "Mohammed Sabeeh", 
          role: "CEO & Founder", 
          description: "एक कुशल कंप्यूटर इंजीनियर और दूरदर्शी उद्यमी जो आधुनिक शिक्षा को फिर से परिभाषित कर रहे हैं। एक एआई ट्रेनर के रूप में, जो असीम क्षमता को अनलॉक करने के लिए प्रौद्योगिकी और रचनात्मकता को पाटता है।",
          image: "/images/ceo.png",
          instagram: "https://www.instagram.com/thename_sabyy?igsh=enZ0a2F5ODZsenZ5",
          linkedin: "https://www.linkedin.com/in/mohammed-sabeeh-pp-38bb2b34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 4, 
          name: "Amna Parambat", 
          role: "Head of Edu-trainers", 
          description: "शिक्षण और नवाचार के जुनून के साथ कंप्यूटर इंजीनियर और एआई प्रशिक्षण। स्मार्ट लर्निंग रणनीति, मानसिकता और व्यक्तिगत विकास के माध्यम से युवाओं को सशक्त बनाना।",
          image: "/images/head of trainers.jpeg",
          instagram: "https://www.instagram.com/amnaahhh____?igsh=bmgzMm8wZjJmc2d1",
          linkedin: "https://www.linkedin.com/in/amna-parambat-585911257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 3, 
          name: "Muhammed Zakiy k", 
          role: "Head of Managment", 
          description: "शांत आत्मविश्वास, तेज निर्णय लेने और परिणाम पहले मानसिकता के साथ नेतृत्व करें, मजबूत टीमों, स्मार्ट सिस्टम और एक ऐसी संस्कृति का निर्माण करें जहां विकास और नवाचार कभी न रुकें।",
          image: "/images/head of mananagment.jpeg",
          instagram: "https://www.instagram.com/zakiy.mhd?utm_source=qr&igsh=MTNuMGRsMzFhZHpuOQ==",
          linkedin: "https://www.linkedin.com/in/muhammed-zakiy-650b68384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        { 
          id: 2, 
          name: "FADWA KAPPOOR", 
          role: "HEAD OF OPERATIONS", 
          description: "व्यावहारिक, भविष्य के लिए तैयार तकनीकी कौशल के साथ युवाओं को सशक्त बनाने के लिए समर्पित एक समर्पित संरक्षक। आत्मविश्वास, रचनात्मकता और वास्तविक दुनिया के प्रभाव को प्रेरित करने वाले स्पष्ट मार्गदर्शन प्रदान करने के मिशन से प्रेरित।",
          image: "/images/head of operations.jpeg",
          instagram: "https://www.instagram.com/fadwa_kappoor?igsh=cTl2d29xa2duYXRl",
          linkedin: "https://www.linkedin.com/in/fadwa-kappoor-950a83296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 5, 
          name: "Azmeel Muradh", 
          role: "Head of media", 
          description: "कहानी कहने और नवाचार के जुनून के साथ कंप्यूटर इंजीनियर और डिजिटल निर्माता। रचनात्मक शिक्षा, स्मार्ट डिजिटल रणनीतियों और विकास-केंद्रित मानसिकता के माध्यम से युवाओं को सशक्त बनाना।",
          image: "/images/head of media.jpg",
          instagram: "https://www.instagram.com/azmeelcm/",
          linkedin: "https://www.linkedin.com/in/azmeel-muradh-a78771346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        { 
          id: 6,
          name: "Abdul Ahad",
          role: "Head of Creativity",
          description: "एआई और प्रौद्योगिकी में रुचि रखने वाले कंप्यूटर इंजीनियरिंग के छात्र। रचनात्मक विचारक और पर्यवेक्षक, अपनी गति से नई चीजें सीखना और तलाशना।",
          image: "/images/head of creativity.jpeg",
          instagram: "https://www.instagram.com/abdulahad.online?igsh=cnhzMnVyY3Q3c2Nv",
          linkedin: "https://www.linkedin.com/in/abdul-ahad-693a49365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      ]
    },
    footer: {
      description: "व्यापक, सुरक्षित और रचनात्मक शिक्षा के माध्यम से अगली पीढ़ी को एआई-संचालित भविष्य के लिए तैयार करना।",
      getInTouch: "संपर्क करें",
      placeholders: { name: "नाम", email: "ईमेल", message: "संदेश", class: "कक्षा" },
      button: "संदेश भेजें",
      rights: "सर्वाधिकार सुरक्षित।"
    }
  },
  ml: {
    nav: {
      home: "ഹോം",
      kids: "കുട്ടികൾ",
      teachers: "അധ്യാപകർ",
      parents: "മാതാപിതാക്കൾ",
      team: "ടീം",
      join: "ഇപ്പോൾ ചേരുക"
    },
    hero: {
      badge: "പഠനത്തിന്റെ ഭാവി",
      titleStart: "AI വിദ്യാഭ്യാസം",
      titleEnd: "എല്ലാ തലമുറയ്ക്കും",
      description: "ഇന്ററാക്ടീവ്, ഫേസ് അടിസ്ഥാനമാക്കിയുള്ള AI പ്രോഗ്രാമുകളിലൂടെ നാളത്തെ ഉപകരണങ്ങളിൽ പ്രാവീണ്യം നേടാൻ വിദ്യാർത്ഥികളെയും അധ്യാപകരെയും മാതാപിതാക്കളെയും ശാക്തീകരിക്കുന്നു.",
      explore: "പ്രോഗ്രാമുകൾ കാണുക",
      workshop: "സൗജന്യ AI വർക്ക്ഷോപ്പ്",
      videoBadge: "AI",
      videoTitle: "സെനോറ ഇന്ററാക്ടീവ്",
      watchIntro: "ആമുഖം കാണുക"
    },
    homeSections: {
      students: {
        title: "8-ഘട്ട വിദ്യാർത്ഥി യാത്ര",
        description: "അടിസ്ഥാന സംഭാഷണങ്ങൾ മുതൽ ഭാവി സാങ്കേതികവിദ്യ നിർമ്മിക്കുന്നത് വരെ, ഞങ്ങളുടെ പാഠ്യപദ്ധതി വിദ്യാർത്ഥികളെ ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസിന്റെ പൂർണ്ണമായ ഭൂപ്രകൃതിയിലൂടെ നയിക്കുന്നു."
      },
      kids: {
        title: "കുട്ടികളും ക്രിയേറ്റീവ് AI-യും",
        description: "അക്കാദമിക്, അസൈൻമെന്റുകൾ, ഗവേഷണം, അവതരണങ്ങൾ, പ്രോജക്റ്റുകൾ എന്നിവയ്ക്കായി AI എങ്ങനെ സുരക്ഷിതമായും ക്രിയാത്മകമായും ഉപയോഗിക്കാമെന്ന് കുട്ടികൾ പഠിക്കുന്നു. ഞങ്ങൾ സ്ക്രീൻ സമയം നൈപുണ്യ സമയമാക്കി മാറ്റുന്നു.",
        list: ["സുരക്ഷിതമായ പര്യവേക്ഷണം", "രസകരമായ പ്രോജക്റ്റുകൾ", "ഇന്ററാക്ടീവ് സ്റ്റോറികൾ"],
        button: "കുട്ടികളുടെ പാഠ്യപദ്ധതി കാണുക",
        img1: "ഇന്ററാക്ടീവ് സ്റ്റോറിടെല്ലിംഗ്"
      },
      teachers: {
        badge: "വിദ്യാഭ്യാസ വിദഗ്ധർക്കായി",
        title: "ബുദ്ധിയോടെ പഠിപ്പിക്കുന്നു",
        features: [
          { title: "AI-അസിസ്റ്റഡ് പ്ലാനിംഗ്", description: "നിമിഷങ്ങൾക്കുള്ളിൽ പാഠ പദ്ധതികളും പാഠ്യപദ്ധതികളും സൃഷ്ടിക്കുക." },
          { title: "ദ്രുത മെറ്റീരിയൽ സൃഷ്ടിക്കൽ", description: "വർക്ക് ഷീറ്റുകൾ, ക്വിസുകൾ, സ്ലൈഡുകൾ എന്നിവ തൽക്ഷണം സൃഷ്ടിക്കുക." },
          { title: "ഇന്ററാക്ടീവ് ക്ലാസുകൾ", description: "AI-ഡ്രൈവ് സിമുലേഷനുകളും സംവാദങ്ങളും ഉപയോഗിച്ച് വിദ്യാർത്ഥികളെ ഉൾക്കൊള്ളിക്കുക." },
          { title: "യാന്ത്രിക ഫീഡ്ബാക്ക്", description: "അസൈൻമെന്റുകൾ ഗ്രേഡ് ചെയ്യുകയും വ്യക്തിഗത ഫീഡ്ബാക്ക് യാന്ത്രികമായി നൽകുകയും ചെയ്യുക." },
          { title: "സങ്കീർണ്ണത ലഘൂകരിക്കുന്നു", description: "സങ്കീർണ്ണമായ വിഷയങ്ങളെ ദഹിപ്പിക്കാവുന്ന വിശദീകരണങ്ങളായി വിഭജിക്കുക." },
        ],
        button: "അധ്യാപക സർട്ടിഫിക്കേഷൻ നേടുക",
        imgLabel: "പാഠാസൂത്രണം"
      },
      parents: {
        title: "ഡിജിറ്റൽ പേരന്റിംഗ് പുനർനിർവചിച്ചു",
        description: "അൽഗോരിതത്തിന്റെ നിയന്ത്രണം ഏറ്റെടുക്കുക. YouTube ശുപാർശകൾ പരിഹരിക്കാനും ഡിജിറ്റൽ ശീലങ്ങൾ പുനഃക്രമീകരിക്കാനും കുട്ടിയുടെ പഠന യാത്രയെ പിന്തുണയ്ക്കാൻ AI ഉപയോഗിക്കാനും ഞങ്ങൾ മാതാപിതാക്കളെ ശാക്തീകരിക്കുന്നു.",
        features: [
          { title: "അൽഗോരിതം റീസെറ്റ്", description: "YouTube ശുപാർശകൾ പരിഹരിക്കുന്നതിനുള്ള ഘട്ടം ഘട്ടമായുള്ള ഗൈഡ്." },
          { title: "ആരോഗ്യകരമായ ഡിജിറ്റൽ ശീലങ്ങൾ", description: "കുട്ടികളുടെ സ്ക്രീൻ സമയത്തിന്റെ ഗുണനിലവാരം മെച്ചപ്പെടുത്തുന്നതിനുള്ള തന്ത്രങ്ങൾ." },
          { title: "അക്കാദമിക് പിന്തുണ", description: "ഗൃഹപാഠ സഹായത്തിനും ഭാഷാ പഠനത്തിനും AI ടൂളുകൾ ഉപയോഗിക്കുന്നു." },
          { title: "ആദ്യം സുരക്ഷ", description: "AI ടൂളുകൾ എങ്ങനെ സുരക്ഷിതമായും ഫലപ്രദമായും ഉപയോഗിക്കാമെന്ന് മനസ്സിലാക്കുന്നു." },
        ],
        featuredTitle: "ഫീച്ചർ ചെയ്തത്: YouTube റീസെറ്റ് രീതി",
        featuredDesc: "നെഗറ്റീവ് അൽഗോരിതം സ്വാധീനം നീക്കം ചെയ്യുന്നതിനും വിദ്യാഭ്യാസ ഉള്ളടക്ക സ്ട്രീമുകൾ പുനഃസ്ഥാപിക്കുന്നതിനുമുള്ള ഞങ്ങളുടെ ഘട്ടം ഘട്ടമായുള്ള ഗൈഡ്.",
        stats: "100%",
        statsLabel: "സുരക്ഷിത രീതികൾ"
      }
    },
    kidsPage: {
      hero: {
        badge: "അടുത്ത തലമുറ AI",
        titleStart: "കുട്ടികൾക്കുള്ള",
        titleEnd: "AI",
        description: "ഏറ്റവും പ്രായം കുറഞ്ഞ മനസ്സുകളെ സുരക്ഷിതവും ക്രിയാത്മകവും വിദ്യാഭ്യാസപരവുമായ ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് ടൂളുകൾ ഉപയോഗിച്ച് ശാക്തീകരിക്കുന്നു. വൈദഗ്ധ്യത്തിലേക്കുള്ള രണ്ട് വഴികൾ: ഓഫ്‌ലൈൻ വർക്ക്‌ഷോപ്പുകളും ഓൺലൈൻ കഴിവുകളും.",
        imgLabel: "ഭാവി നിർമ്മാതാക്കൾ"
      },
      online: {
        title: "ഓൺലൈൻ AI സ്കിൽസ് പ്രോഗ്രാം",
        description: "എവിടെ നിന്നും പഠിക്കുക. വീട്ടിലിരുന്ന് AI ടൂളുകൾ എങ്ങനെ സുരക്ഷിതമായി മാസ്റ്റർ ചെയ്യാമെന്ന് കുട്ടികളെ പഠിപ്പിക്കുന്ന ഇന്ററാക്ടീവ് വീഡിയോ മൊഡ്യൂളുകൾ, വെർച്വൽ പ്ലേഗ്രൗണ്ടുകൾ, ഗൈഡഡ് പ്രോജക്റ്റുകൾ.",
        list: ["സ്വയം പഠനം", "വെർച്വൽ പ്രോജക്റ്റുകൾ", "ആഗോള സമൂഹം"],
        button: "ഓൺലൈനിൽ പഠനം ആരംഭിക്കുക"
      },
      offline: {
        title: "ഓഫ്‌ലൈൻ AI വർക്ക്‌ഷോപ്പ്",
        description: "ഹാൻഡ്-ഓൺ, നേരിട്ടുള്ള സഹകരണ സെഷനുകൾ. പ്രശ്നങ്ങൾ പരിഹരിക്കാനും റോബോട്ടുകൾ നിർമ്മിക്കാനും ഞങ്ങളുടെ 8-ഘട്ട AI പാഠ്യപദ്ധതി ഉപയോഗിച്ച് കല സൃഷ്ടിക്കാനും കുട്ടികൾ ടീമുകളായി പ്രവർത്തിക്കുന്നു.",
        list: ["ടീം സഹകരണം", "AI", "വിദഗ്ധ ഉപദേശം"],
        button: "ഒരു വർക്ക്ഷോപ്പ് കണ്ടെത്തുക"
      },
      phases: {
        badge: "ഓഫ്‌ലൈൻ വർക്ക്‌ഷോപ്പിൽ മാത്രം",
        title: "8-ഘട്ട പാഠ്യപദ്ധതി",
        description: "ഞങ്ങളുടെ ഓഫ്‌ലൈൻ വർക്ക്‌ഷോപ്പുകൾക്കായി രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്ന സമഗ്രമായ യാത്ര, വിദ്യാർത്ഥികളെ അടിസ്ഥാന ആശയവിനിമയത്തിൽ നിന്ന് ഭാവി കെട്ടിപ്പടുക്കുന്നതിലേക്ക് കൊണ്ടുപോകുന്നു.",
        list: [
          { id: 1, title: "സംഭാഷണ AI & സ്മാർട്ട് അസിസ്റ്റന്റുകൾ", description: "AI-യുമായി ആശയവിനിമയം നടത്താനും ചോദ്യങ്ങൾ ചോദിക്കാനും ഉത്തരങ്ങൾ താരതമ്യം ചെയ്യാനും ലളിതമായ AI വിശദീകരണങ്ങൾ മനസ്സിലാക്കാനും വിദ്യാർത്ഥികൾ പഠിക്കുന്നു.", icon: "MessageSquare" },
          { id: 2, title: "ഉൽപ്പാദനക്ഷമതയും സർഗ്ഗാത്മകതയും വർദ്ധിപ്പിക്കുന്നു", description: "സംഗ്രഹിക്കൽ, പഠനങ്ങൾ ആസൂത്രണം ചെയ്യൽ, പോസ്റ്ററുകൾ, അവതരണങ്ങൾ, വീഡിയോകൾ എന്നിവ നിർമ്മിക്കൽ, ടെക്‌സ്‌റ്റ് സംഭാഷണമാക്കി മാറ്റൽ എന്നിവ വിദ്യാർത്ഥികൾ പഠിക്കുന്നു.", icon: "Zap" },
          { id: 3, title: "ഓട്ടോമേഷനും ഡിജിറ്റൽ ജോലികളും", description: "വർക്ക്ഫ്ലോകൾ ഓട്ടോമേറ്റ് ചെയ്യാനും അവതരണങ്ങൾ സൃഷ്ടിക്കാനും ഉള്ളടക്കം വിവർത്തനം ചെയ്യാനും അസൈൻമെന്റുകൾ കാര്യക്ഷമമായി സംഘടിപ്പിക്കാനും വിദ്യാർത്ഥികൾ പഠിക്കുന്നു.", icon: "Workflow" },
          { id: 4, title: "മൾട്ടിമീഡിയയും സർഗ്ഗാത്മക പ്രകടനവും", description: "ചിത്രം സൃഷ്ടിക്കൽ, ആനിമേഷൻ സൃഷ്ടിക്കൽ, ഘടനാപരമായ എഴുത്ത്, അസിസ്റ്റഡ് വീഡിയോ എഡിറ്റിംഗ് എന്നിവ വിദ്യാർത്ഥികൾ പഠിക്കുന്നു.", icon: "Palette" },
          { id: 5, title: "വെബ്, ആപ്പുകൾ, ഭാവിയിലെ ടെക് നിർമ്മാതാക്കൾ", description: "കോഡിംഗ് ഇല്ലാതെ തൽക്ഷണ വെബ്‌സൈറ്റ് സൃഷ്ടിക്കൽ, ആപ്പ് നിർമ്മാണം, UI/UX പ്രോട്ടോടൈപ്പിംഗ്, ഗവേഷണ ഓർഗനൈസേഷൻ എന്നിവ വിദ്യാർത്ഥികൾ പഠിക്കുന്നു.", icon: "Smartphone" },
          { id: 6, title: "AI ഉപയോഗിച്ചുള്ള സ്മാർട്ട് പഠനം", description: "അക്കാദമിക് പ്രശ്നങ്ങൾ പരിഹരിക്കാനും പാഠപുസ്തകങ്ങളിൽ നിന്ന് ഉത്തരങ്ങൾ വേർതിരിച്ചെടുക്കാനും ഗവേഷണം നടത്താനും പരിശീലന പാഠങ്ങൾ സൃഷ്ടിക്കാനും വിദ്യാർത്ഥികൾ AI ഉപയോഗിക്കുന്നു.", icon: "BookOpen" },
          { id: 7, title: "കരിയർ പര്യവേക്ഷണവും ജീവിത നൈപുണ്യവും", description: "വിദ്യാർത്ഥികൾ ഭാവി കരിയറുകൾ പര്യവേക്ഷണം ചെയ്യുന്നു, ആശയവിനിമയം പരിശീലിക്കുന്നു, സംസാരിക്കാനുള്ള കഴിവുകൾ മെച്ചപ്പെടുത്തുന്നു.", icon: "Briefcase" },
          { id: 8, title: "വിനോദം, ഗെയിമുകൾ & AI സർഗ്ഗാത്മകത", description: "കഥപറച്ചിൽ, സംഗീതം സൃഷ്ടിക്കൽ, സംവേദനാത്മക കഥാപാത്രങ്ങൾ, കളിയായ വിദ്യാഭ്യാസ ഗെയിമുകൾ എന്നിവയ്ക്കായി വിദ്യാർത്ഥികൾ AI ഉപയോഗിക്കുന്നു.", icon: "Gamepad2" }
        ]
      },
      safety: {
        title: "സുരക്ഷിതവും ക്രിയാത്മകവുമായ അക്കാദമിക് വളർച്ച",
        safetyTitle: "ആദ്യം സുരക്ഷ",
        safetyDesc: "സ്വകാര്യത സംരക്ഷിക്കുകയും ഡിജിറ്റൽ ധാർമ്മികത മനസ്സിലാക്കുകയും ചെയ്തുകൊണ്ട് AI എങ്ങനെ ഉത്തരവാദിത്തത്തോടെ ഉപയോഗിക്കാമെന്ന് ഞങ്ങൾ കുട്ടികളെ പഠിപ്പിക്കുന്നു.",
        creativeTitle: "സർഗ്ഗാത്മക അക്കാദമിക്സ്",
        creativeDesc: "വിമർശനാത്മക ചിന്തയെ മാറ്റിസ്ഥാപിക്കാതെ ഗവേഷണത്തിനും അവതരണങ്ങൾക്കും അസൈൻമെന്റുകൾക്കും AI ഉപയോഗിക്കുന്നു.",
        stats: "10k+",
        statsLabel: "പരിശീലനം ലഭിച്ച വിദ്യാർത്ഥികൾ"
      }
    },
    teachersPage: {
      hero: {
        badge: "പ്രൊഫഷണൽ ഡെവലപ്‌മെന്റ്",
        title: "ബുദ്ധിയോടെ പഠിപ്പിക്കുന്നു",
        description: "AI-അസിസ്റ്റഡ് ലെസൺ പ്ലാനിംഗ്, ഓട്ടോമേറ്റഡ് ഫീഡ്‌ബാക്ക്, ഇന്ററാക്ടീവ് ലേണിംഗ് മെറ്റീരിയലുകൾ എന്നിവ ഉപയോഗിച്ച് നിങ്ങളുടെ ക്ലാസ്‌റൂമിനെ മാറ്റുക. ഇടപഴകൽ വർദ്ധിപ്പിക്കുമ്പോൾ സമയം ലാഭിക്കുക.",
        btnOnline: "ഓൺലൈൻ പരിശീലനം ആരംഭിക്കുക",
        btnOffline: "ഓഫ്‌ലൈൻ വർക്ക്‌ഷോപ്പ് ബുക്ക് ചെയ്യുക",
        certTitle: "സർട്ടിഫൈഡ് AI അധ്യാപകൻ",
        certSubtitle: "പ്രോഗ്രാം"
      },
      benefits: {
        title: "അധ്യാപകർക്കുള്ള AI നേട്ടം",
        list: [
            { title: "പാഠാസൂത്രണം", desc: "നിങ്ങളുടെ നിലവാരത്തിനനുസരിച്ച് നിമിഷങ്ങൾക്കുള്ളിൽ സമഗ്രമായ പാഠ പദ്ധതികളും പാഠ്യപദ്ധതികളും ഷെഡ്യൂളുകളും സൃഷ്ടിക്കുക." },
            { title: "മെറ്റീരിയൽ ജനറേഷൻ", desc: "വർക്ക് ഷീറ്റുകൾ, ക്വിസുകൾ, സ്ലൈഡുകൾ, ഇന്ററാക്ടീവ് വിഷ്വൽ എയ്ഡുകൾ എന്നിവ തൽക്ഷണം സൃഷ്ടിക്കുക." },
            { title: "ഇന്ററാക്ടീവ് ക്ലാസുകൾ", desc: "AI-ഡ്രൈവ് സിമുലേഷനുകൾ, ചരിത്രപരമായ സംവാദങ്ങൾ, തത്സമയ പ്രശ്‌നപരിഹാരം എന്നിവ ഉപയോഗിച്ച് വിദ്യാർത്ഥികളെ ഉൾക്കൊള്ളിക്കുക." },
            { title: "സങ്കീർണ്ണത ലഘൂകരിക്കുന്നു", desc: "ഏത് ഗ്രേഡ് തലത്തിലും സങ്കീർണ്ണമായ വിഷയങ്ങളെ ദഹിപ്പിക്കാവുന്ന ഉപമകളായും വിശദീകരണങ്ങളായും വിഭജിക്കുക." },
            { title: "യാന്ത്രിക ഫീഡ്ബാക്ക്", desc: "അസൈൻമെന്റുകൾ തൽക്ഷണം ഗ്രേഡ് ചെയ്യുകയും ഓരോ വിദ്യാർത്ഥിക്കും വ്യക്തിഗതവും സൃഷ്ടിപരവുമായ ഫീഡ്‌ബാക്ക് നൽകുകയും ചെയ്യുക." },
            { title: "സമയ മാനേജ്മെന്റ്", desc: "അഡ്മിനിസ്ട്രേറ്റീവ് ടാസ്‌ക്കുകളിൽ ആഴ്ചയിൽ 10+ മണിക്കൂർ ലാഭിക്കുക, ഇത് മെന്ററിംഗിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ നിങ്ങളെ അനുവദിക്കുന്നു." },
        ]
      },
      training: {
        offlineTitle: "ഓഫ്‌ലൈൻ ഇൻസ്ട്രക്ടർ വർക്ക്‌ഷോപ്പ്",
        offlineDesc: "സ്‌കൂൾ ജില്ലകൾക്കും വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾക്കുമായി തീവ്രമായ വ്യക്തിഗത ബൂട്ട്‌ക്യാമ്പുകൾ.",
        offlineBtn: "ഒരു സെഷൻ ബുക്ക് ചെയ്യുക →",
        onlineTitle: "ഓൺലൈൻ AI ക്ലാസ്റൂം പരിശീലനം",
        onlineDesc: "ലൈവ് വെബിനാറുകളും റിസോഴ്‌സ് ലൈബ്രറികളുമുള്ള സെൽഫ് പേസ്ഡ് സർട്ടിഫിക്കേഷൻ പ്രോഗ്രാമുകൾ.",
        onlineBtn: "സർട്ടിഫിക്കേഷൻ ആരംഭിക്കുക →"
      }
    },
    parentsPage: {
      hero: {
        titleStart: "ഡിജിറ്റൽ",
        titleEnd: "പേരന്റിംഗ്",
        description: "അൽഗോരിതത്തിന്റെ നിയന്ത്രണം ഏറ്റെടുക്കുക. YouTube ശുപാർശകൾ പരിഹരിക്കാനും ഡിജിറ്റൽ ശീലങ്ങൾ പുനഃക്രമീകരിക്കാനും വീട്ടിലിരുന്ന് കുട്ടിയുടെ പഠന യാത്രയെ പിന്തുണയ്ക്കാൻ AI ഉപയോഗിക്കാനും ഞങ്ങൾ മാതാപിതാക്കളെ ശാക്തീകരിക്കുന്നു.",
        button: "മാതാപിതാക്കളുടെ ഗൈഡ് നേടുക"
      },
      reset: {
        title: "അൽഗോരിതം റീസെറ്റ് ചെയ്യുക",
        description: "നിങ്ങളുടെ കുട്ടിയുടെ ഫീഡ് നിലവാരം കുറഞ്ഞ ഉള്ളടക്കം നിറഞ്ഞതാണോ? സ്ലേറ്റ് വൃത്തിയാക്കാനും വിദ്യാഭ്യാസപരവും പ്രചോദനാത്മകവും ക്രിയാത്മകവുമായ ഉള്ളടക്കം ഉപരിതലത്തിലേക്ക് കൊണ്ടുവരുന്നതിനുള്ള ശുപാർശകൾ വീണ്ടും പരിശീലിപ്പിക്കാനും തെളിയിക്കപ്പെട്ട ഘട്ടം ഘട്ടമായുള്ള രീതി ഞങ്ങൾ പഠിപ്പിക്കുന്നു.",
        card1Title: "ഓഡിറ്റും ശുദ്ധീകരണവും",
        card1Desc: "നെഗറ്റീവ് വാച്ച് ഹിസ്റ്ററി ട്രിഗറുകൾ തിരിച്ചറിഞ്ഞ് നീക്കം ചെയ്യുക.",
        card2Title: "പോസിറ്റീവ് റൈൻഫോഴ്സ്മെന്റ്",
        card2Desc: "ഫീഡ് മാറ്റുന്നതിന് ഉയർന്ന മൂല്യമുള്ള ചാനലുകളുമായി തന്ത്രപരമായി ഇടപഴകുക.",
        visualStats: "100%",
        visualLabel: "ഉള്ളടക്കത്തിൽ നിയന്ത്രണം"
      },
      tools: {
        titleStart: "ഗൃഹ വിദ്യാഭ്യാസത്തിനുള്ള",
        titleEnd: "AI ടൂളുകൾ",
        description: "നിങ്ങളുടെ കുട്ടിയുടെ വളർച്ചയെ പിന്തുണയ്ക്കുന്നതിനായി ക്യൂറേറ്റ് ചെയ്ത വിഭാഗങ്ങൾ.",
        list: [
            { title: "വായനാ സഹായി", desc: "ഉച്ചാരണം, ഗ്രഹിക്കൽ, സംവേദനാത്മക കഥ പറച്ചിൽ എന്നിവയ്ക്ക് സഹായിക്കുന്ന ഉപകരണങ്ങൾ." },
            { title: "ഗൃഹപാഠ സഹായം", desc: "വിദ്യാർത്ഥികൾക്ക് വേണ്ടി ജോലി ചെയ്യുന്നതിനുപകരം ഉത്തരങ്ങളിലേക്ക് അവരെ നയിക്കുന്ന സോക്രട്ടിക് AI ട്യൂട്ടർമാർ." },
            { title: "ഭാഷാ പഠനം", desc: "സുരക്ഷിതമായ അന്തരീക്ഷത്തിൽ പുതിയ ഭാഷകൾ പരിശീലിക്കുന്നതിന് ഇമ്മേഴ്‌സീവ് സംഭാഷണ പങ്കാളികൾ." },
            { title: "ഡിജിറ്റൽ ശീലങ്ങൾ", desc: "സ്‌ക്രീൻ സമയം സന്തുലിതവും ഉൽപ്പാദനക്ഷമവുമാണെന്ന് ഉറപ്പാക്കാൻ സ്മാർട്ട് മോണിറ്ററുകളും ഷെഡ്യൂളറുകളും." }
        ]
      },
      imgLabel: "ഫാമിലി ടെക് ടൈം"
    },
    teamPage: {
      badge: "ദർശകരും നിർമ്മാതാക്കളും",
      titleStart: "",
      titleEnd: "XenoraLearning ടീം",
      description: "സുരക്ഷിതവും ഘടനാപരവും പ്രചോദനാത്മകവുമായ വിദ്യാഭ്യാസത്തിലൂടെ AI- പവർ ചെയ്യുന്ന ഭാവിക്കായി അടുത്ത തലമുറയെ സജ്ജമാക്കുക എന്ന ഒരൊറ്റ ദൗത്യത്താൽ ഒന്നിച്ച അധ്യാപകരും എഞ്ചിനീയർമാരും ക്രിയേറ്റീവുകളുമാണ് ഞങ്ങൾ.",
      members: [
        { id: 1, name: "Mohammed Sabeeh", role: "CEO & Founder", description: "ഒരു വിദഗ്ദ്ധ കമ്പ്യൂട്ടർ എഞ്ചിനീയറും ആധുനിക വിദ്യാഭ്യാസത്തെ പുനർനിർവചിക്കുന്ന ചിന്തകനുമായ ഒരു സംരംഭകൻ. ഒരു AI പരിശീലകൻ എന്ന നിലയിൽ, അപാരമായ സാധ്യതകളെ അൺലോക്ക് ചെയ്യുന്നതിന് സാങ്കേതികവിദ്യയും സർഗ്ഗാത്മകതയും തമ്മിൽ പാലം തീർക്കുന്നു." },
        { id: 4, name: "Amna Parambat", role: "Head of Edu-trainers", description: "പഠിപ്പിക്കുന്നതിലും നവീകരണത്തിലും താൽപ്പര്യമുള്ള കമ്പ്യൂട്ടർ എഞ്ചിനീയറും AI പരിശീലനവും. സ്മാർട്ട് പഠന തന്ത്രം, മാനസികാവസ്ഥ, വ്യക്തിഗത വളർച്ച എന്നിവയിലൂടെ യുവാക്കളെ ശാക്തീകരിക്കുക." },
        { id: 3, name: "Muhammed Zakiy k", role: "Head of Managment", description: "ശാന്തമായ ആത്മവിശ്വാസം, മൂർച്ചയുള്ള തീരുമാനമെടുക്കൽ, ഫലങ്ങൾ എന്നിവ ഉപയോഗിച്ച് നയിക്കുക, ശക്തമായ ടീമുകളെയും മികച്ച സംവിധാനങ്ങളെയും വളർച്ചയും നവീകരണവും ഒരിക്കലും നിലയ്ക്കാത്ത ഒരു സംസ്കാരത്തെയും കെട്ടിപ്പടുക്കുക." },
        { id: 2, name: "FADWA KAPPOOR", role: "HEAD OF OPERATIONS", description: "പ്രായോഗികവും ഭാവിക്കനുയോജ്യമായതുമായ സാങ്കേതിക വൈദഗ്ധ്യമുള്ള യുവാക്കളെ ശാക്തീകരിക്കുന്നതിന് പ്രതിജ്ഞാബദ്ധനായ ഒരു സമർപ്പിത ഉപദേഷ്ടാവ്. ആത്മവിശ്വാസം, സർഗ്ഗാത്മകത, യഥാർത്ഥ ലോക സ്വാധീനം എന്നിവ പ്രചോദിപ്പിക്കുന്ന വ്യക്തമായ മാർഗ്ഗനിർദ്ദേശം നൽകുക എന്ന ദൗത്യത്താൽ നയിക്കപ്പെടുന്നു." },
        { id: 5, name: "Azmeel Muradh", role: "Head of media", description: "കഥപറച്ചിലിലും നവീകരണത്തിലും താൽപ്പര്യമുള്ള കമ്പ്യൂട്ടർ എഞ്ചിനീയറും ഡിജിറ്റൽ സ്രഷ്ടാവും. ക്രിയേറ്റീവ് ലേണിംഗ്, സ്മാർട്ട് ഡിജിറ്റൽ സ്ട്രാറ്റജികൾ, വളർച്ചയെ അടിസ്ഥാനമാക്കിയുള്ള മാനസികാവസ്ഥ എന്നിവയിലൂടെ യുവാക്കളെ ശാക്തീകരിക്കുന്നു." },
        { id: 6, name: "Abdul Ahad", role: "Head of Creativity", description: "AI, ടെക്നോളജി എന്നിവയിൽ താൽപ്പര്യമുള്ള കമ്പ്യൂട്ടർ എഞ്ചിനീയറിംഗ് വിദ്യാർത്ഥി. ക്രിയേറ്റീവ് ചിന്തകനും നിരീക്ഷകനും, സ്വന്തം വേഗതയിൽ പുതിയ കാര്യങ്ങൾ പഠിക്കുകയും പര്യവേക്ഷണം ചെയ്യുകയും ചെയ്യുന്നു." }
      ]
    },
    footer: {
      description: "സമഗ്രവും സുരക്ഷിതവും സർഗ്ഗാത്മകവുമായ വിദ്യാഭ്യാസത്തിലൂടെ AI- നയിക്കുന്ന ഭാവിക്കായി അടുത്ത തലമുറയെ തയ്യാറാക്കുന്നു.",
      getInTouch: "ബന്ധപ്പെടുക",
      placeholders: { name: "പേര്", email: "ഇമെയിൽ", message: "സന്ദേശം", class: "ക്ലാസ്" },
      button: "സന്ദേശം അയക്കുക",
      rights: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം."
    }
  }
};