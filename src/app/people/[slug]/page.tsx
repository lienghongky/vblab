import { TinaMarkdown } from "tinacms/dist/rich-text";
import ProfileCell from "../ProfileCell";
import client from "../../../../tina/__generated__/databaseClient";

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

export const Page = async ({ params: { slug } }) => {
  const { data, query, variables } = await fetchData(slug)


  return (
    <div className=" p-10 bg-white dark:bg-gray-900">
      <section className="py-20">
        <h2 className="drop-shadow-lg">
          PHOHOOO.PHd
          <br />
        </h2>
        <hr />
        <div className="flex items-center justify-center py-20 divide-x-1">
          <div className="w-1/2 flex justify-center items-center space-x-2">
            <ProfileCell />
          </div>
          <div className="w-1/2 flex justify-center px-10">
            <div className="">
              <h3 className="drop-shadow-lg">
                We are committed to sharing our expertise through a series of
                courses and projects aimed at fostering deep understanding and
                practical skills:
              </h3>
              <p className="font-mono text-xs py-10 text-black dark:text-white">
                + Intelligence System (2023, 2024)
                <br />
                + Computer Algorithms
                <br />
                + Data Structures
                <br />
                + Linear Algebra
                <br />
                + Deep Learning for Computer Vision (Graduate Course)
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
        <TinaMarkdown
                content={"# Hello World"}
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
      </section>
    </div>
  );
};

export default Page;