import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export async function GET() {
  const snapshot = await getDocs(collection(db, "fails"));
  const fails = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json(fails);
}