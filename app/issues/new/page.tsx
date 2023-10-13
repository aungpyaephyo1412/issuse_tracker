"use client"
import React from 'react';
import {Button, TextArea, TextField} from "@radix-ui/themes";

const NewIssue = () => {
    return (
        <div className='max-w-xl mx-auto space-y-4'>
            <TextField.Root>
                <TextField.Input placeholder="Title"/>
            </TextField.Root>
            <TextArea placeholder="Description"/>
            <Button>Submit new issue</Button>
        </div>
    );
};

export default NewIssue;
