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
        <Card className="mt-5">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p><span className="font-black">Main Feature: </span>{feature}</p>
                <p><span className="font-black">Why it failed: </span>{why}</p>
                <p><span className="font-black">Lesson: </span>{lesson}</p>
                <p><span className="font-black">Founder: </span>{founder}</p>
            </CardContent>
            <CardFooter>
                <Link href={slug}>Read More</Link>
            </CardFooter>
        </Card>
    )
}
