import { UsernamePasswordAuthJSProvider as UsernamePasswordAuthJSProvider, TinaUserCollection as TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { defineConfig as defineConfig, LocalAuthProvider as LocalAuthProvider } from "tinacms";
import LocalMediaStore from "./addon/LocalMediaStore";

import collectionPage from "./collections/page";
import collectionCourse from "./collections/course";
import collectionResearch from "./collections/research";
import collectionGlobal from "./collections/global";
import collectionMember from "./collections/member";
import collectionPeoplePage from "./collections/peoplePage";



const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";



export default defineConfig({
    contentApiUrlOverride: `/api/tina/gql`, // `${process.env.BASE_URL}/api/tina/gql`
    authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
    // branch,
    // // Get this from tina.io
    // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // // Get this from tina.io
    // token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media:{
        // tina: {
        //     mediaRoot: "",
        //     publicFolder: "public",
        //     static:false
        // },
        loadCustomStore: async ()=>Promise.resolve(LocalMediaStore),

    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            TinaUserCollection,
            collectionPage,
            collectionCourse,
            collectionResearch,
            collectionMember,
            collectionPeoplePage,
            collectionGlobal,

        ]
    }
});
