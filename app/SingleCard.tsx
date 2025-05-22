import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SingleCardProps {
    name: string;
    feature: string;
    why: string;
    lesson: string;
    link: string;
    founder: string;
    more: string;
}

export default function SingleCard({ name, feature, why, lesson, link, founder, more }: SingleCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p><span className="font-black">Main Feature: </span>{feature}</p>
                <p><span className="font-black">Why it failed: </span>{why}</p>
                <p><span className="font-black">Lesson: </span>{lesson}</p>
                <p><span className="font-black">Founder: </span>{founder}</p>
                <p><span className="font-black">Link: </span>{link}</p>
            </CardContent>
            <CardFooter>
                <a href={more}>Read More</a>
            </CardFooter>
        </Card>
    )
}
