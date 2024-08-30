
export default {
    name: "course",
    label: "Courses",
    path: "content/courses",
    fields: [
    {
        type:"string",
        name:"course_number",
        label:"ID",

    },
      {
        type: "string",
        name: "title",
        label: "Title",
        isTitle: true,
        required: true,
      },
      {
        type: "string",
        name: "date",
        label: "Date",
      },
      {
        type: "image",
        name: "thumbnail",
        label: "Thumbnail",
      },
      {
        type: "string",
        name: "room",
        label: "Classroom",

      },
      {
        type: "object",
        name: "link",
        label: "Link",
        list: true,
        fields:[
            {
                type:"string",
                name:"name",
                label:"Name",
            },
            {
                type:"string",
                name:"url",
                label:"URL",
            }
        ]
        

      },
      {
        type: "rich-text",
        name: "body",
        label: "Body",
        isBody: true,
      },
    ],
    ui: {
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/course/${document._sys.filename}`,
    },
  }