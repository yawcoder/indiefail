"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import Navbar from '../Navbar';
import { Textarea } from '@/components/ui/textarea';

type FormData = {
    projectName: string;
    mainFeature: string;
    failureReason: string;
    lesson: string;
    founder: string;
    projectUrl?: string;
    details: string;
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
    const onSubmit = async (submittedProject: FormData) => {

        const dateSubmitted = new Date()
        const slug = slugify(`${submittedProject.projectName}-${submittedProject.founder}-${dateSubmitted.getUTCDate()}-${dateSubmitted.getUTCMonth()}-${dateSubmitted.getUTCFullYear()}-${dateSubmitted.getUTCHours()}-${dateSubmitted.getUTCMinutes()}-${dateSubmitted.getUTCSeconds()}`)
        const datawithSlug = {...submittedProject,dateSubmitted,slug}
        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datawithSlug),
            });
            if (!res.ok) throw new Error('Failed to submit');
            reset();
            alert('Submitted!');
        } catch (error) {
            alert((error as Error).message);
        }
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-5">
                <Input type='text' {...register("projectName")} placeholder='Project Name' required />
                <Input type='text' {...register("mainFeature")} placeholder='What it was' required />
                <Input type='text' {...register("failureReason")} placeholder='Why it failed' required />
                <Input type='text' {...register("lesson")} placeholder='Key Lesson' required />
                <Input type='text' {...register("founder")} placeholder='Name of Founder' required />
                <Input type='text' {...register("projectUrl")} placeholder='link to project (optional)' />
                <Textarea {...register("details")} className="h-40" placeholder="Give details as to what the project was and why it failed (Recommended)" />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}