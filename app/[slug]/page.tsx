import { notFound } from "next/navigation";
import Navbar from "../Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Footer from "../Footer";

type Project = {
    id: string;
    projectName: string;
    founder: string;
    mainFeature: string;
    failureReason: string;
    lesson: string;
    projectUrl?: string;
    details: string;
};

async function getProjectBySlug(slug: string): Promise<Project | null> {
    const failsCollectionRef = collection(db, "fails");
    const q = query(failsCollectionRef, where("slug", "==", slug));
    const snapshot = await getDocs(q);
    if(snapshot.empty) return null;
    const data = snapshot.docs[0].data();
    return {
        id: snapshot.docs[0].id,
        projectName: data.projectName,
        founder: data.founder,
        mainFeature: data.mainFeature,
        failureReason: data.failureReason,
        lesson: data.lesson,
        projectUrl: data.projectUrl,
        details: data.details,
        // add any other fields as needed
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) return notFound();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">{project.projectName}</h1>
                <p className="text-gray-600 mb-6 text-center text-base md:text-lg">By <span className="font-semibold">{project.founder}</span></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <p className="mb-3">
                            <span className="font-black text-gray-700">Main Feature: </span>
                            <span className="text-gray-800">{project.mainFeature}</span>
                        </p>
                        <p className="mb-3">
                            <span className="font-black text-gray-700">Why it failed: </span>
                            <span className="text-gray-800">{project.failureReason}</span>
                        </p>
                        <p className="mb-3">
                            <span className="font-black text-gray-700">Lesson: </span>
                            <span className="text-gray-800">{project.lesson}</span>
                        </p>
                        {project.projectUrl && (
                            <p className="mb-3">
                                <a
                                    href={project.projectUrl}
                                    className="text-blue-600 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Project Link
                                </a>
                            </p>
                        )}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">Details</h2>
                        <p className="text-gray-700 whitespace-pre-line">{project.details}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}