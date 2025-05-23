import Link from "next/link";
import Navbar from "./Navbar";
import Search from "./Search";
import SingleCard from "./SingleCard";
import Footer from "./Footer";

interface SingleFailProps {
  id: number;
  projectName: string;
  founder: string;
  mainFeature: string;
  failureReason: string;
  lesson: string;
  slug: string;
}


async function getFails(): Promise<SingleFailProps[]> {
  const res = await fetch("http://localhost:3000/api/fails", { cache: "no-store" });
  return res.json();
}




export default async function page() {
  const fails = await getFails();

  return (
    <div className="w-full">
      <Navbar />
      <Search />
      <div className="p-5">
        {fails.map((e) => {
          return (
            <SingleCard key={e.id} feature={e.mainFeature} name={e.projectName} why={e.failureReason} lesson={e.lesson} slug={e.slug} founder={e.founder} />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
