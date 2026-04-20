// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "An updated list of publications can be found in my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A full CV is available upon request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-and-supervision",
          title: "Teaching and Supervision",
          description: "Courses, invited teaching, workshops, and supervision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "news-i-defended-my-phd-thesis",
          title: 'I defended my PhD thesis!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/PhDDefence/";
            },},{id: "news-paper-accepted-at-fg21",
          title: 'Paper accepted at FG21!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/FG21_paper/";
            },},{id: "news-new-paper-published-in-multimedia-tools-and-applications",
          title: 'New paper published in Multimedia Tools and Applications',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/MTAPPaper/";
            },},{id: "news-new-position-at-illc-university-of-amsterdam",
          title: 'New position at ILLC, University of Amsterdam',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/new_position/";
            },},{id: "news-nlpitch-at-the-illc",
          title: 'NLPitch at the ILLC!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/NLPITCH/";
            },},{id: "news-teaching-natural-language-models-and-interfaces-at-uva",
          title: 'Teaching Natural Language Models and Interfaces at UvA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/NTMI_course/";
            },},{id: "news-our-research-on-linguistic-alignment-to-be-presented-at-multidisciplinary-workshop-in-france",
          title: 'Our Research on Linguistic Alignment to Be Presented at Multidisciplinary Workshop in France...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/MisAlighmentWorkshop/";
            },},{id: "news-guest-lecture-on-machine-learning-for-multimodal-behavior-at-upcoming-summer-school-program",
          title: 'Guest Lecture on Machine Learning for Multimodal Behavior at Upcoming Summer School Program...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/GuestLecturer/";
            },},{id: "news-our-paper-on-multi-phase-co-speech-gesture-detection-accepted-wacv",
          title: 'Our Paper on Multi-Phase Co-Speech Gesture Detection accepted WACV!',
          description: "",
          section: "News",},{id: "news-lecture-on-dialogue-modeling-module-in-the-master-of-ai-nlp1-course-at-the-uva",
          title: 'Lecture on Dialogue Modeling Module in the Master of AI, NLP1 Course at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/DialogueModellingNLP1/";
            },},{id: "news-pre-print-on-leveraging-speech-to-detect-co-speech-gestures-in-multimodal-communication",
          title: 'Pre-print on leveraging speech to detect co-speech gestures in multimodal communication',
          description: "",
          section: "News",},{id: "news-two-papers-have-been-accepted-at-cogsci24",
          title: 'Two papers have been accepted at CogSci24',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/CogSciPapers/";
            },},{id: "news-seminar-presentation-co-speech-gesture-modeling-at-tilburg-university",
          title: 'Seminar Presentation: Co-Speech Gesture Modeling at Tilburg University',
          description: "",
          section: "News",},{id: "news-guest-lecture-on-body-language-modeling-in-the-master-of-ai-nlp2-course-at-the-uva",
          title: 'Guest Lecture on Body Language Modeling in the Master of AI, NLP2 Course...',
          description: "",
          section: "News",},{id: "news-research-talk-maastrich-university-on-visual-modeling-of-human-behaviors-multimodal-interpretable-grounded-and-self-supervised-approaches",
          title: 'Research Talk @ Maastrich University on Visual Modeling of Human Behaviors: Multimodal, Interpretable,...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-the-26th-acm-international-conference-on-multimodal-interaction",
          title: 'Paper accepted at the 26th ACM International Conference on Multimodal Interaction!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ICMI2024/";
            },},{id: "news-i-gave-a-talk-on-learning-representations-in-dialogue-through-contrastive-learning-an-intrinsic-evaluation-at-the-uva-signlab",
          title: 'I gave a talk on “Learning Representations in Dialogue through Contrastive Learning: An...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-understanding-and-modelling-multimodal-dialogue-coordindation-at-the-max-planck-institute-for-psycholinguistics",
          title: 'I gave a talk on “Understanding and Modelling Multimodal Dialogue Coordindation” at the...',
          description: "",
          section: "News",},{id: "news-two-paper-accepted-at-the-annual-meeting-of-the-association-for-computational-linguistics-acl-2025",
          title: 'Two paper accepted at the Annual Meeting of the Association for Computational Linguistics...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ACL2025/";
            },},{id: "news-plenary-talk-and-workshop-on-multimodal-interaction-at-summer-school-with-raquel-fernández",
          title: 'Plenary Talk and Workshop on Multimodal Interaction at Summer School with Raquel Fernández...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/TalkAndWorkshop/";
            },},{id: "news-paper-accepted-at-iccv-on-semantics-aware-co-speech-gesture-generation",
          title: 'Paper accepted at ICCV on Semantics-Aware Co-Speech Gesture Generation!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ICCV2025/";
            },},{id: "news-nwo-xs-open-competition-domain-science-grant-awarded-for-multimodal-gesture-generation-project",
          title: 'NWO XS Open Competition - Domain Science Grant Awarded for Multimodal Gesture Generation...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ENW-XS-2025-2/";
            },},{id: "news-we-are-hiring-a-postdoc-at-max-planck-institute-on-gesture-generation-in-face-to-face-dialogue",
          title: 'We Are Hiring a Postdoc at Max Planck Institute on Gesture Generation in...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/PostdocJob/";
            },},{id: "news-invited-talk-2025-utrecht-university",
          title: 'Invited Talk 2025 @ Utrecht University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/InvitedTalk2025_UU/";
            },},{id: "news-phd-opportunities-available-at-max-planck-institute-for-psycholinguistics-via-mp-aix",
          title: 'PhD Opportunities Available at Max Planck Institute for Psycholinguistics via MP-AIX',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/PhPMPI/";
            },},{id: "news-guest-lectures-2025-radboud-university",
          title: 'Guest Lectures 2025 @ Radboud University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/GuestLectures2025_RU/";
            },},{id: "news-donders-stimulation-fund-award",
          title: 'Donders Stimulation Fund Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/DondersStimulationFund_QuantityOrQuality/";
            },},{id: "news-workshop-accepted-at-emnlp-2026-multimodal-interaction-in-face-to-face-dialogue-mint",
          title: 'Workshop accepted at EMNLP 2026 - Multimodal INTeraction in face-to-face dialogue (MINT)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/MINT-EMNLP2026/";
            },},{id: "news-joining-the-editorial-board-of-ieee-transactions-on-affective-computing-as-associate-editor",
          title: 'Joining the Editorial Board of IEEE Transactions on Affective Computing as Associate Editor...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/TAFFC-AE/";
            },},{id: "news-registration-open-for-semi-automated-workflows-for-facilitating-multimodal-language-processing-workshop-at-mmsym-2026",
          title: 'Registration open for Semi-Automated Workflows for Facilitating Multimodal Language Processing Workshop at MMSYM...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/SWiFT-MLP-MMSYM2026/";
            },},{id: "news-our-paper-on-the-visual-iconicity-challenge-is-accepted-at-the-main-acl-2026-conference",
          title: 'Our paper on the visual iconicity challenge is accepted at the main ACL...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/VisualIconicity/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%73%61%6D.%67%68%61%6C%65%62@%6D%70%69.%6E%6C", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TqP9GTsAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/esamghaleb", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/esamghaleb", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
