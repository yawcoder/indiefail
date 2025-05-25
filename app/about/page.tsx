import Footer from "../Footer";
import Navbar from "../Navbar";

export default function page() {
    return (
        <div className="max-w-2xl mx-auto px-4 pb-12">
            <Navbar />
            <h1 className="text-4xl font-bold mb-6 text-center">About IndieFails</h1>
            <p className="mb-4 text-lg text-gray-800">
                <span className="font-semibold text-blue-700">IndieFails</span> is a public database of indie hacker projects that didn’t go as planned—and that’s exactly the point.
            </p>
            <p className="mb-4 text-gray-700">
                Building something from scratch is hard. Sometimes it works. Sometimes it flops. And sometimes it flops spectacularly. I believe those stories—the unpolished, brutally honest, slightly awkward ones—are worth sharing.
            </p>
            <p className="mb-8 text-gray-700">
                At IndieFails, I collect and showcase these failed projects not to poke fun, but to learn, normalize failure, and remind each other that behind every overnight success is a trail of broken side projects.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Why this exists:</h2>
            <ul className="mb-8 list-disc list-inside text-gray-700 space-y-1">
                <li>To de-stigmatize failure in the indie community.</li>
                <li>To help makers learn from real missteps, not just glossy success stories.</li>
                <li>To build a space where founders can say, <span className="italic">“Here’s what I tried, here’s what I learned, and wow, please don’t do what I did.”</span></li>
            </ul>
            <p className="mb-8 text-gray-700">
                Whether it was the wrong market, bad timing, burnout, or just a really terrible idea that seemed great at 2am—we’ve been there.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">What you’ll find here:</h2>
            <ul className="mb-8 list-disc list-inside text-gray-700 space-y-1">
                <li>Candid postmortems from indie hackers around the world.</li>
                <li>Lessons learned, mistakes made, and the occasional existential crisis.</li>
                <li>A strangely comforting collection of things that didn’t work out—but might help you figure out what will.</li>
            </ul>
            <p className="text-gray-700">
                If you’ve ever launched something that fizzled, stalled, or straight-up faceplanted, you’re in the right place. <span className="font-medium text-blue-700">Contribute your story</span> by clicking the submit button at the top right corner, learn from others, and let’s build smarter—failures and all.
            </p>
            <Footer />
        </div>
    )
}