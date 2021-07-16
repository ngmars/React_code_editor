import React, { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useSelector, useDispatch } from 'react-redux';
import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import IframeComponent from '../iFrame/iFrame';
import addCodeAction from '../../Redux/Codebase/actions';
const {changeSyntax} = addCodeAction
export default function Editor (props:any) {
    console.log(props)
    const dispatch = useDispatch();
    //console.log(props);
    const [html,setHtml] = useState('')
    const[css,setCss] = useState('')
    const[js,setJs] = useState('')
    const syntax= useSelector((state:any)=>state?.changeSyntax?.syntaxType)
    const gotHtmlCode= useSelector((state:any)=>state?.addCode?.gotHtmlCode);
    const gotCssCode= useSelector((state:any)=>state?.addCode?.gotCssCode);
    const gotJsCode= useSelector((state:any)=>state?.addCode?.gotJsCode);
    useEffect(()=>{
        if(gotHtmlCode!=null){
            setHtml(gotHtmlCode)
        }
        if(gotCssCode!=null){
            setCss(gotCssCode)
        }
        if(gotJsCode!=null){
            setJs(gotJsCode)
        }
    },[gotHtmlCode,gotCssCode,gotJsCode])
    const codeMirrorOptions = {
        theme: 'material',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
      };
    let CodeMirrorCmp
    if(syntax && syntax=='html'){
        CodeMirrorCmp= ( 
            <div className={"code-editor javascript-code"}>
            <div className="editor-header">Index.{syntax}</div>
                <CodeMirror
                value={html}
                options={{
                    mode: 'htmlmixed',
                    ...codeMirrorOptions,
                }}
                
                onBeforeChange={(editor, data, html) => {
                    setHtml(html);
                    dispatch(changeSyntax('html',html))
                    //console.log('THIS IS HTML')
                }}
            />
            </div>
        )
    } else if(syntax=='css'){
        CodeMirrorCmp= ( 
        <div className={"code-editor css-code"}>
            <div className="editor-header">Index.{syntax}</div>
                <CodeMirror
                    value={css}
                    options={{
                        mode: 'css',
                        ...codeMirrorOptions,
                    }}
                    onBeforeChange={(editor, data, css) => {
                        setCss(css);
                        dispatch(changeSyntax('css',css))
                        //console.log('THIS IS CSS')
                    }}
                />
          </div>
          )
    }
    else if(syntax=='js'){
        CodeMirrorCmp= ( 
            <div className={"code-editor javascript-code"}>
            <div className="editor-header">Index.{syntax}</div>
                <CodeMirror
                    value={js}
                    options={{
                        mode: 'javascript',
                        ...codeMirrorOptions,
                    }}
                    onBeforeChange={(editor, data, js) => {
                        setJs(js);
                        dispatch(changeSyntax('js',js))
                        //console.log('THIS IS JS')
                    }}
                />
            </div>
        )
    }
    /*showCss = (show, codeMirrorOptions) => {
        if (show) {
            return (
                <div className="code-editor css-code">
                    <div className="editor-header">CSS</div>
                    <CodeMirror
                        value={this.state.css}
                        options={{
                            mode: "css",
                            ...codeMirrorOptions
                        }}
                        onBeforeChange={(editor, data, css) => {
                        this.setState({ css }, () => this.syncUpdates());
                    }}
                    />
                </div>
            )
        } else {
            return ""
        }
    };
  */
    
  
      return (
          <div className="editor">
              <section className="playground">
                 
                        {CodeMirrorCmp}
                  {/*this.showCss(this.state.css, codeMirrorOptions)*/}
              </section>
              <section className="result">
                  <IframeComponent html={html} css={css} js={js}/>
              </section>
          </div>
      );
    
  }
  

