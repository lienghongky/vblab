
export default {
    name: "member",
    label: "Members",
    path: "content/members",
    fields: [
      {
        type:"boolean",
        name:"visible",
        label:"Visible",
      },
      {
        type:"string",
        name:"type",
        label:"Type",
        required:true,
        default:"Select",
        ui: {
          component: "select",
          options: ["Professor", "PhD", "Master", "Alumni"],
      },
    },
    {
        type:"string",
        name:"code",
        label:"ID",

    },
      {
        type: "string",
        name: "name",
        label: "Full Name",
        isTitle: true,
        required: true,
      },
      {
        type: "string",
        name: "position",
        label: "Position",
      },
      { 
        type: "string",
        name: "field",
        label: "Field of Study",
      },
      
      {
        type: "string",
        name: "email",
        label: "Email",
      },
      {
        type: "string",
        name: "phone",
        label: "phone",
      },
      {
        type: "string",
        name: "address",
        label: "Address",
      },
      {
        type: "object",
        name: "link",
        label: "Homepage",
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
        type: "image",
        name: "profile",
        label: "Profile Picture",
        ui: {
          parse: (media) => media.id,
        },
      },
      {
        type: "string",
        name: "bio",
        label: "Bio",
      },
      {
        type : "rich-text",
        name : "fullintro",
        label: "Full Introduction",
        describe: "Full introduction of the member reseach interest and background",
      }
    ],
    ui: {
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/member/${document._sys.filename}`,
    },
  }