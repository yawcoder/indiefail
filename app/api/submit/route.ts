import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const submittedProjectsCollection = collection(db, "submittedProjects");
    await addDoc(submittedProjectsCollection, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}