"use client"
import React from 'react';
import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssue = () => {
    return (
        <div className='max-w-xl mx-auto space-y-4'>
            <TextField.Root>
                <TextField.Input placeholder="Title"/>
            </TextField.Root>
            <SimpleMDE/>
            <Button>Submit new issue</Button>
        </div>
    );
};

export default NewIssue;
