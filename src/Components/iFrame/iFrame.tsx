import React, { useState, useRef,useEffect} from 'react'

export default function IFrameComponent (props:any){
  console.log('props: ',props)
  const[iframeLoading,setiFrameLoading] = useState(false)
  const[html,setHtml] = useState('')
  const ifrm = useRef<HTMLIFrameElement>(null);
  const onLoadHandler = ()=>{
    setiFrameLoading(true);
    }
    useEffect(()=>{
        setHtml(props.html)
        if(iframeLoading==true){
            runCode()
        }
        
    },[props])

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
            
          </style>
        </head>
        <body>
          ${html}
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
