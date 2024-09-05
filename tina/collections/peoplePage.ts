import { list } from "postcss";

export default {
    name: "people",
    label: "People Page",
    path: "content/page/people",
    list:true,
    fields: [
        {
            type: "boolean",
            name: "active",
            label: "Active",
            default: true,
        },
        {
            type: "string",
            name: "professor",
            label: "Professor",
            list:true,
        },
        {
            
        }
        
    ],
    ui: {
     global: true,
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/people/${document._sys.filename}`,
    },
  }