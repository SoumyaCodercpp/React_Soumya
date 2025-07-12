import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

//  integrating a Rich Text Editor (RTE) into your forms.
export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    // This connects the WYSIWYG editor to react-hook-form so it becomes part of your form state.
    name={name || "content"} //form field name
    control={control} // controller object-->  const {control}=useform()
    render={({field}) => (
        <Editor
        /*
        This renders the TinyMCE editor inside your React component.
        It gives you a full-featured WYSIWYG(What You See Is What You Get) editor.
        */ 
       apiKey='hqttstwnur91lwqiew4j524p7y4mua97cxsrutx0zzi0gve5'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={field.onChange}
        />
    )}
    />

     </div>
  )
}

// adding a blog post

/*
<form onSubmit={handleSubmit(onSubmit)}>
  <Input {...register("title")} />
  <RTE name="content" control={control} label="Content" />
  <button type="submit">Publish</button>
</form>

*/ 

/*
The title will be a simple input.
The RTE will allow writing the blog content with rich formatting.
Both are tied into form submission via react-hook-form.
*/ 

/*
field: {
    onChange,   
    onBlur,     
    value,      
    name,      
    ref        
  },
*/ 