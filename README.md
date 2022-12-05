## CV Template

Hi there! :wave: This is a CV Template made with Next.js, Tailwind and MDX!

If you wanna make it your own, just go and edit the pageConfig.json file, which includes your personal info, skills, experience and your contact links. By default, it looks like this:

```json
{
  "articlePaths": ["/posts/", "/projects/"],
  "profile": {
    "name": "John Doe",
    "description": "As a front end developer, I have experience working with a variety of technologies and am skilled in creating responsive, dynamic interfaces that are easy to navigate on different devices. I am passionate about creating user-centered experiences and strive to stay up-to-date with the latest developments in front end technologies."
  },
  "experience": [
    {
      "title": "Front End Developer",
      "company": "Company Name",
      "dateFrom": "2018-01-01",
      "dateTo": "2019-01-01",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt, nunc orci aliquam nisl, vitae ultricies nisl nunc eget lorem. Sed euismod, nisl nec lacinia tincidunt, nunc orci aliquam nisl, vitae ultricies nisl nunc eget lorem."
    },
    {
      "title": "Front End Developer",
      "company": "Company Name 2",
      "dateFrom": "2019-01-01"
    }
  ],
  "skills": {
    "Front-end": ["HTML", "CSS", "JavaScript"],
    "Back-end": ["Node.js", "Express.js", "MongoDB"],
    "Other": ["Git", "GitHub", "Markdown"]
  },
  "contact": [
    {
      "name": "Twitter",
      "href": "https://twitter.com/username"
    },
    {
      "name": "GitHub",
      "href": "https://github.com/jhon-doe"
    },
    {
      "name": "Email",
      "href": "mailto:your_email@gmail.com"
    }
  ]
}
```

The skills keys are being mapped, which means you can add more of them, like a _Test_ key.  
Also, if you want to change the number of projects/posts displayed on the index page, change the _postsLimit_ and/or the _projectsLimit_. If you set them to 0 it will be limitless.

### Deploy

1. Clone the repo
2. Config the pageConfig file as you wish!
3. Deploy to Vercel
4. Set up an environment variable named NEXT_PUBLIC_VERCEL_URL and set its value to your website's domain!
5. That's it, that's everything you need to do :)

Feel free to change the template as you wish! :)
