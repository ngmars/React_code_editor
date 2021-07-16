import React, { useState, useRef,useEffect} from 'react'

export default function IFrameComponent (props:any){
  const[iframeLoading,setiFrameLoading] = useState(false)
  const[html,setHtml] = useState(props?.html)
  const[css, setCss] = useState(props?.css)
  const[js,setJs] = useState(props?.js)
  const ifrm = useRef<HTMLIFrameElement>(null);
  const onLoadHandler = ()=>{
    setiFrameLoading(true);
    }

    useEffect(()=>{
        setHtml(props.html)
        setCss(props.css)
        setJs(props.js)
        
    },[props])
    useEffect(()=>{
        if(iframeLoading===true){
            runCode()
        }
    },[html,css,js])
    const runCode = () => {
        var document = ifrm?.current?.contentDocument
      const documentContents = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          </script>
        </body>
        </html>
      `;
  
      document?.open();
      document?.write(documentContents);
      document?.close();
    };
  return (
    <iframe title="result" onLoad={onLoadHandler} className="iframe" id="CodePresenter" ref={ifrm} />
  )
}
