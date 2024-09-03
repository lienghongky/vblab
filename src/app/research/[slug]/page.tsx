import Feature from "@/app/components/Feature";
import Link from "next/link";
import client from "../../../../tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const fetchData = async (slug) => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${slug}.md` }
  try {
    const res = await client.queries.research(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch(e) {
    console.error('Failed to fetch data from TinaCMS')
    console.error(e)
  }

  return {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
  }
}

const Page = async ({ params: { slug } }) => {
  const { data, query, variables } = await fetchData(slug)

  return (
    <>
      <div className="p-10">
        <div className="flex justify-center">
          <div className="w-1/3 flex justify-center">
            <Feature
              className="w-64 shadow-2xl"
              data={{
                title: data?.research?.title ?? "",
                description: data?.research?.description ?? "",
                image: data?.research?.thumbnail ?? "",
              }}
            />
          </div>
          <div className="w-2/3">
            <div className="">
              <h3 data-tina-field={tinaField(data, 'fulltitle')} className="font-main font-bold text-sm drop-shadow-lg text-black dark:text-white">
                {data?.research?.fulltitle ?? ""}
              </h3>
              <p className="font-mono text-sm text-black dark:text-white">AUTHOR: {data?.research?.author ?? ""}</p>
              <p className="font-mono text-sm text-black dark:text-white">DATE: {data?.research?.date ?? ""}</p>
              <div className="flex justify-end">
                {
                  
                  data?.research?.pdf && data.research.pdf.map((f, index) => (
                    <Link
                    target="_blank"
                    className="font-mono text-sm font-bold text-blue-500"
                     href={f.url} 
                     key={index}>
                      {f.label}
                    </Link>
                  ))
                }
              </div>

              <hr className="py-2" />
              <TinaMarkdown
                content={data?.research?.fulldescription ?? ""}
                components={{
                  h1: (props) => (
                    <h1 className="drop-shadow-lg text-black dark:text-white">
                      {props.children}
                    </h1>
                  ),
                  p: (props) => (
                    <p className="font-mono text-sm drop-shadow-lg  text-black dark:text-white">
                      {props.children}
                    </p>
                  ),
                }}/>
            </div>
          </div>
        </div>

        {
          data?.research && data.research.iframe.url && (
            <div className="flex justify-center py-10">
          <div className="w-full h-[90dvh] bg-gray-800 rounded-xl overflow-clip shadow-2xl">
            <div className="w-full h-10 bg-gradient-to-b from-slate-400  to-slate-300 flex justify-between items-center px-2 shadow-lg">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 rounded-full bg-red-600"> </div>
                <div className="w-4 h-4 rounded-full bg-yellow-600"> </div>
                <div className="w-4 h-4 rounded-full bg-green-600"> </div>
              </div>
              <div className="flex justify-center">
                <p className="font-mono text-xs font-bold text-black">
                  {data.research.iframe.title ?? "VBLab"}
                </p>
              </div>
              <div className="">
                <p className="font-mono text-xs font-bold text-black">
                  Loading...
                </p>
              </div>
            </div>
            <iframe
              className="w-full h-full bg-gray-800"
              src={data.research.iframe.url ?? "/"}
              title={data.research.iframe.title ?? "VBLab"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
          )
        }
      </div>
    </>
  );
};

export default Page;
