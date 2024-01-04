import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";
import {Navigate} from "react-router-dom";
import Editor from '../Editor'

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const CreatePost = () => {

    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent] =useState('');
    const [files,setFiles] =useState('');
    const [redirect,setRedirect] = useState(false);

    function createNewPost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        // console.log(files);
        const response=fetch('https://myblogwebsite-2nxz.onrender.com/post',{
            method: 'POST',
            body: data,
            credentials: 'include'
        })
        console.log(response);
        setRedirect(true);
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }

  return (
    <form className="view ql-editor" onSubmit={createNewPost}>
        <input type="title" placeholder={'Title'} value={title} onChange={ev=>setTitle(ev.target.value)} />
        <input type="summary" placeholder={'Summary'} value={summary} onChange={ev=>setSummary(ev.target.value)}/>
        <input type="file"  onChange={ev=>setFiles(ev.target.files)} />
        <Editor value={content} onChange={setContent} />
        <button style={{margin:'5px'}}>Create Post</button>
    </form>
  )
}

export default CreatePost
