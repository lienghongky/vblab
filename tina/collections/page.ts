import { list } from "postcss";

export default {
    name: "page",
    label: "Pages",
    path: "content/pages",
    fields: [
        {
            type: "boolean",
            name: "active",
            label: "Active",
            default: true,
        },
        {
            type: "string",
            name: "target",
            label: "Target Page",
            decscription: "the name of page that this config will be applied to",
            isTitle: true,
            required: true,
        },
      {
        type: "string",
        name: "tag",
        label: "tage",
        required: true,
      },
        {
            type: "object",
            name: "metadata",
            label: "Metadata",
            fields: [
                {
                    type: "object",
                    name: "notification",
                    label: "Notification message",
                    fields: [
                        {
                            type: "string",
                            name: "type",
                            label: "Type",
                            ui: {
                                component: "select",
                                options: ["info", "warning", "error", "success","primary","secondary"],
                            },
                        },
                        {
                            type: "string",
                            name: "message",
                            label: "Message",
                        },
                    ],
                },
                {
                    type: "string",
                    name: "header",
                    label: "Header",
                },
                {
                    type: "object",
                    name: "quickmenu",
                    label: "Quick Menu",
                    list: true,
                    fields : [
                        {
                            type: "string",
                            name: "label",
                            label: "Label",
                        },
                        {
                            type: "string",
                            name: "link",
                            label: "Link",
                        },
                        {
                                    type: "image",
                                    name: "icon",
                                    label: "Icon",
                                }
                    ],
                },
                {
                    type: "string",
                    name: "footer",
                    label: "Footer",
                },
            ],
        },
      {
        type: "object",
        name: "pagelayout",
        label: "Page Layout",
        list: true,
        fields: [
          {
            type: "string",
            name: "component",
            label: "component",
          }
        ],
      },
    ],
    ui: {
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/page/${document._sys.filename}`,
    },
  }