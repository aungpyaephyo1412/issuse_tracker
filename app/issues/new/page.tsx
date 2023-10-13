"use client"
import React from 'react';
import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm,Controller} from "react-hook-form"
import axios from "axios";
import {useRouter} from "next/navigation";
interface IssueForm {
    title: string;
    description: string;
}


const NewIssue = () => {
    const {register,control,handleSubmit} = useForm<IssueForm>()
    const router = useRouter()
    return (
        <form onSubmit={handleSubmit(async (data)=> {
            await axios.post("/api/issues",data)
            router.push("/issues")
        })} className='max-w-xl mx-auto space-y-4'>
            <TextField.Root>
                <TextField.Input placeholder="Title" {...register("title")}/>
            </TextField.Root>
            <Controller
                control={control}
                render={({field})=><SimpleMDE {...field}/>}
                name={"description"}/>
            <Button>Submit new issue</Button>
        </form>
    );
};

export default NewIssue;
