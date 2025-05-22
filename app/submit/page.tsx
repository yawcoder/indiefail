"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import Navbar from '../Navbar';

type FormData = {
    projectName: string;
    mainFeature: string;
    failureReason: string;
    lesson: string;
    founder: string;
    link?: string;
};

export default function page() {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const onSubmit = async (submittedProject: FormData) => {
        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submittedProject),
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type='text' {...register("projectName")} placeholder='Project Name' required />
                <Input type='text' {...register("mainFeature")} placeholder='What it was' required />
                <Input type='text' {...register("failureReason")} placeholder='Why it failed' required />
                <Input type='text' {...register("lesson")} placeholder='Key Lesson' required />
                <Input type='text' {...register("founder")} placeholder='Name of Founder' required />
                <Input type='text' {...register("link")} placeholder='link to project (optional)' />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}