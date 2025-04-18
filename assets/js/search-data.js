// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is my resume and you can also download pdf version by clicking PDF icon too.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-my-cissp-journey-how-i-passed-in-100-questions",
        
          title: "My CISSP Journey: How I Passed in 100 Questions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cissp-journey/";
          
        },
      },{id: "post-quot-what-is-to-be-like-a-poet-quot-a-poem-by-suman-sedhai-all-poetry",
        
          title: '&quot;What is to be like a poet??&quot; - a poem by Suman Sedhai... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "is it just a show off, hiding your hatred? / to hide behind and watch your love departed.    .  Published at the web&#39;s largest poetry site.",
        section: "Posts",
        handler: () => {
          
            window.open("https://allpoetry.com/poem/12175514--What-is-to-be-like-a-poet----by-Suman-Sedhai", "_blank");
          
        },
      },{id: "post-light-and-shadow-a-poem-by-suman-sedhai-all-poetry",
        
          title: 'Light and Shadow - a poem by Suman Sedhai - All Poetry <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "You are not illuminated and dark / always with the pitch black but comes with spark / Crea   .  Published at the web&#39;s largest poetry site.",
        section: "Posts",
        handler: () => {
          
            window.open("https://allpoetry.com/poem/12177806-Light-and-Shadow-by-Suman-Sedhai", "_blank");
          
        },
      },{id: "books-atomic-habits-an-easy-amp-proven-way-to-build-good-habits-amp-break-bad-ones",
          title: 'Atomic Habits - An Easy &amp;amp; Proven Way to Build Good Habits &amp;amp;...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/atomichabits/";
            },},{id: "books-isc-cissp-certified-information-systems-security-professional-official-study-guide",
          title: '(ISC)² CISSP Certified Information Systems Security Professional Official Study Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/cissp_official_study_guide/";
            },},{id: "books-how-not-to-be-wrong-the-power-of-mathematical-thinking",
          title: 'How Not to Be Wrong- The Power of Mathematical Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hownottobewrong/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%6D%61%6E%73%65%64%68%61%69%30%31@%67%6D%61%69%6C[.]%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/prakritsedhai", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sumansedhai", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
