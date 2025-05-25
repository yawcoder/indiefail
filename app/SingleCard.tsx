import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface SingleCardProps {
    name: string;
    feature: string;
    why: string;
    lesson: string;
    link?: string;
    founder: string;
    slug: string;
}

export default function SingleCard({ name, feature, why, lesson, founder, slug }: SingleCardProps) {
    return (
        <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold">{name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-base md:text-lg">
                <p>
                    <span className="font-black text-gray-700">Main Feature: </span>
                    <span className="text-gray-800">{feature}</span>
                </p>
                <p>
                    <span className="font-black text-gray-700">Why it failed: </span>
                    <span className="text-gray-800">{why}</span>
                </p>
                <p>
                    <span className="font-black text-gray-700">Lesson: </span>
                    <span className="text-gray-800">{lesson}</span>
                </p>
                <p>
                    <span className="font-black text-gray-700">Founder: </span>
                    <span className="text-gray-800">{founder}</span>
                </p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Link
                    href={`/${slug}`}
                    className="px-4 py-2 rounded bg-blue-600 text-white text-sm md:text-base hover:bg-blue-700 transition-colors"
                >
                    Read More
                </Link>
            </CardFooter>
        </Card>
    )
}
