import { list } from "postcss";
import { title } from "process";

export default {
    name: "global",
    label: "Global",
    path: "content/global",
    fields: [
        {
            type: "image",
            name: "favicon",
            label: "Favicon",
            ui: {
                parse: (media) => media.id,
            },
        },
        {
            type: "object",
            name: "Notification",
            label: "Notification",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    title: true,
                },
                {
                    type: "rich-text",
                    name: "message",
                    label: "Message",
                },
                {
                    type: "string",
                    name: "type",
                    label: "Type",
                    ui: {
                        component: "select",
                        options: ["info", "warning", "error", "success","primary","secondary"],
                    },
                },
                
            ]
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
            ],
            
        },
        {
            type: "object",
            name: "header",
            label: "Header",
            fields: [
                {
                    type: "object",
                    name: "logo",
                    label: "Logo",
                    fields: [
                        {
                            type: "image",
                            name: "image",
                            label: "Image",
                            ui: {
                                parse: (media) => media.id,
                            },
                        },
                        {
                            type: "string",
                            name: "alt",
                            label: "Alt Text",
                        },
                    ],
                },
                {
                    type: "image",
                    name: "banners",
                    label: "Banners",
                    list: true,
                    ui: {
                        parse: (media) => media.id,
                    },
                },
                {
                    type: "string",
                    name: "title",
                    label: "Default Title",
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
                        },
                        {
                            type: "string",
                            name: "target",
                            label: "Target",
                            default: "",
                            description: "Set to _blank to open in new tab"
                        }
                    ],
                },
                {
                    type: "object",
                    name: "menus",
                    label: "Menus",
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
                        },
                        {
                            type: "string",
                            name: "target",
                            label: "Target",
                            default: "",
                            description: "Set to _blank to open in new tab"
                        },
                        {
                            type: "object",
                            name: "style",
                            label: "Style",
                            fields: [
                                {
                                    type: "string",
                                    name: "className",
                                    label: "Class Name",
                                },
                                {
                                    type: "string",
                                    name: "css",
                                    label: "CSS",
                                },
                            ],
                        },
                        {
                            type: "object",
                            name: "submenus",
                            label: "Sub Menus",
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
                                },
                                {
                                    type: "string",
                                    name: "target",
                                    label: "Target",
                                    default: "",
                                    description: "Set to _blank to open in new tab"
                                },
                                {
                                    type: "object",
                                    name: "style",
                                    label: "Style",
                                    fields: [
                                        {
                                            type: "string",
                                            name: "className",
                                            label: "Class Name",
                                        },
                                        {
                                            type: "string",
                                            name: "css",
                                            label: "CSS",
                                        },
                                    ],
                                },
                            ],



                        }

                    ],
                }, 
            ],
        },
        {
            type: "object",
            name: "footer",
            label: "Footer",
            fields:[
                {
                    type : "object",
                    name : "meta",
                    label : "footer Meta",
                    fields:[
                        {
                            type: "string",
                            name: "title",
                            label: "Title"
                        },
                        {
                            type: "image",
                            name: "logo",
                            label: "Logo",
                        },
                        {
                            type: "string",
                            name: "description",
                            label: "Description",

                        },
                        {
                            type: "object",
                            name: "contacts",
                            label: "Contacts",
                            list: true,
                            fields:[
                                {
                                    type: "string",
                                    name: "text",
                                    label: "Text",
                                },
                                {
                                    type: "string",
                                    name: "url",
                                    label: "Url",
                                },
                            ]
                        },
                        {
                            type: "string",
                            name: "address",
                            label: "Address",
                        },
                        {
                            type: "string",
                            name: "footnote",
                            label: "Footnote",
                        }
                    ]
                },
            ]
        },
      {
        type: "string",
        name: "theme",
        label: "Theme",
      },
    ],
    ui: {
        global: true,
      // This is an DEMO router. You can remove this to fit your site
      router: ({ document }) => `/`,
    },
  }