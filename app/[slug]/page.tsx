import { notFound } from "next/navigation";
import Navbar from "../Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

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
        <div>
            <Navbar />
            <div className="max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-2">{project.projectName}</h1>
                <p className="text-gray-600 mb-4">By {project.founder}</p>
                <p className="mb-2"><strong>Main Feature:</strong> {project.mainFeature}</p>
                <p className="mb-2"><strong>Why it failed:</strong> {project.failureReason}</p>
                <p className="mb-2"><strong>Lesson:</strong> {project.lesson}</p>
                {project.projectUrl && (
                    <p className="mb-2">
                        <a href={project.projectUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                            Project Link
                        </a>
                    </p>
                )}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-1">Details</h2>
                    <p>{project.details}</p>
                </div>
            </div>
        </div>
    );
}