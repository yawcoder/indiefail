import Navbar from "./Navbar";
import Search from "./Search";
import SingleCard from "./SingleCard";

interface SingleFailProps {
  id: number;
  name: string;
  why: string;
  lesson: string;
  link: string;
  more: string;
}

const singlefail: SingleFailProps[] = [
  {
    id: 1,
    name: "NomadNotes",
    why: "No one paid for it",
    lesson: "validate pricing before building",
    link: "https://x.com",
    more: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolore porro ab ducimus, voluptatem eos aliquam fuga eum labore aut rerum culpa quo repellendus ipsa asperiores vero. Dignissimos, illum libero!"
  }
]


export default function page() {
  return (
    <div className="w-full">
      <Navbar />
      <Search />
      <div className="p-5">
        {singlefail.map((e) => {
          return (
            <SingleCard key={e.id} name={e.name} why={e.why} lesson={e.lesson} link={e.link} more={e.more} />
          )
        })}
      </div>
    </div>
  )
}
