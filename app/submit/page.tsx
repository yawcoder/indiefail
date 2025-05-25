"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import Navbar from '../Navbar';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Footer from '../Footer';

type FormData = {
    projectName: string;
    mainFeature: string;
    failureReason: string;
    lesson: string;
    founder: string;
    projectUrl?: string;
    details: string;
    email: string;
    newsletterOptIn: string;
    slug: string;
    dateSubmitted: Date;
};

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '')     // Trim hyphens from start/end
}

export default function page() {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [loading, setLoading] = useState(false);
    const [alertBox, setAlertBox] = useState(false);

    const onSubmit = async (submittedProject: FormData) => {
        setLoading(true);
        const dateSubmitted = new Date();
        const slug = slugify(`${submittedProject.projectName}-${submittedProject.founder}-${dateSubmitted.getUTCDate()}-${dateSubmitted.getUTCMonth()}-${dateSubmitted.getUTCFullYear()}-${dateSubmitted.getUTCHours()}-${dateSubmitted.getUTCMinutes()}-${dateSubmitted.getUTCSeconds()}`);
        const datawithSlug = { ...submittedProject, dateSubmitted, slug };
        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datawithSlug),
            });
            if (!res.ok) throw new Error('Failed to submit');
            reset();
            setAlertBox(true)
        } catch (error) {
            alert((error as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Submit a Failed Project</h1>
                <p className="text-center text-gray-600 mb-8">
                    Share your indie project’s story. Help others learn from your experience!
                </p>
                {loading && (
                    <div className="w-full h-1 bg-gray-200 mb-4 rounded">
                        <div className="h-1 bg-blue-500 animate-pulse w-full rounded" />
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <Input type='text' {...register("projectName")} placeholder='Project Name' required className="bg-gray-100" />
                    <Input type='text' {...register("mainFeature")} placeholder='Main Feature' required className="bg-gray-100" />
                    <Input type='text' {...register("failureReason")} placeholder='Why it failed' required className="bg-gray-100" />
                    <Input type='text' {...register("lesson")} placeholder='Key Lesson' required className="bg-gray-100" />
                    <Input type='text' {...register("founder")} placeholder='Founder Name' required className="bg-gray-100" />
                    <Input type='text' {...register("projectUrl")} placeholder='Project Link (optional)' className="bg-gray-100" />
                    <Input type='email' {...register("email")} placeholder='Your Email Address' required className="bg-gray-100" />
                    <div className="flex items-center gap-2">
                        <Checkbox id="newsletter" {...register("newsletterOptIn")} />
                        <label
                            htmlFor="newsletter"
                            className="text-sm text-gray-700 select-none cursor-pointer"
                        >
                            Yes, I want emails about fails, lessons, and whatever you're building next.
                        </label>
                    </div>
                    <Textarea {...register("details")} className="h-32 bg-gray-100" placeholder="Give details as to what the project was and why it failed (Recommended)" />
                    <Button type='submit' disabled={loading} className="mt-2">
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </div>
            <AlertDialog open={alertBox} onOpenChange={setAlertBox}>
                <AlertDialogContent>
                    <AlertDialogTitle>Submission Received</AlertDialogTitle>
                    <AlertDialogDescription>
                        ✅ Thank you! We’ll review your submission soon, and you’ll get an email once it’s live.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setAlertBox(false)}>Done</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Footer />
        </div>
    )
}