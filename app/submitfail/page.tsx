"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function page() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d: any) => {
        alert(JSON.stringify(d));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type='text' {...register("projectName")} placeholder='Project Name' required/>
            <Input type='text' {...register("mainFeature")} placeholder='What it was' required/>
            <Input type='text' {...register("failureReason")} placeholder='Why it failed' required/>
            <Input type='text' {...register("lesson")} placeholder='Key Lesson'required />
            <Input type='text' {...register("founder")} placeholder='Name of Founder' required/>
            <Input type='text' {...register("link")} placeholder='link to project (optional)' />
            <Button type='submit'>Submit</Button>
        </form>
    )
}
