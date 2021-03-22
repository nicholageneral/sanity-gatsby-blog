export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6057f316fb2bd8cd7e2bc2f9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-oh7pw7vi",
                  apiId: "91926fd3-05ea-4a4d-a837-7a43eee94886",
                },
                {
                  buildHookId: "6057f3169d138258b30c687d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-jay28cpy",
                  apiId: "ccf2b7d7-f770-46e3-b2dc-e1d8d63159b6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nicholageneral/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-jay28cpy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
