import Upload from "./componets/Upload"
export default {
    name: "research",
    label: "Research",
    path: "content/researchs",
    fields: [
      {
        type:"boolean",
        name:"visible",
        label:"Visible",
      },
      {
        type:"boolean",
        name:"pinned",
        label:"Pin",
        description:"Pin the IFrame to the top of the page only 4",
      },
    {
        type:"string",
        name:"code",
        label:"Code",

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
        name: "fulltitle",
        label: "Long Title",
      },
      {
        type: "string",
        name: "author",
        label: "Author",
      },
      {
        type: "string",
        name: "date",
        label: "Date",
      },
      {
        type: "string",
        name: "category",
        label: "Category",
      },
      {
        type: "string",
        name: "type",
        label: "Type",
        default:"Research",
        required: true,
        ui: {
          component: "select",
          default:"Research",
          options: ["Research", "Project", "Thesis", "Dissertation"],
        }
      },
      {
        type: "image",
        name: "thumbnail",
        label: "Thumbnail",
        ui: {
          parse: (media) => media.id,
      },
      },
      {
        type: "rich-text",
        name: "description",
        label: "Description",
      },
      {
        type: "rich-text",
        name: "fulldescription",
        label: "Long Description",
      },
      {
        type: "object",
        name: "pdf",
        label: "PDF Link",
        list: true,
        fields: [
          {
            type: "string",
            name: "url",
            label: "URL",
          },
          {
            type: "string",
            name: "label",
            label: "Label",
          },
        ],
      },
      {
        type: "object",
        name: "iframe",
        label: "Iframe configuration",
        list: false,
        fields:[
          {
            type:"string",
            name:"title",
            label:"IFrame Title",
          },
            {
                type:"string",
                name:"css",
                label:"IFrame CSS",
            },
            {
                type:"string",
                name:"url",
                label:"IFrame URL",
            }
        ]
      }
    ],
    ui: {
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/research/${document._sys.filename}`,
    },
  }