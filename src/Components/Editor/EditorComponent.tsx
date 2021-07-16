import React, { useState,useEffect, useRef } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import IframeComponent from '../iFrame/iFrame';
export default function Editor (props:any) {
    console.log(props);
    const [html,setHtml] = useState('')
    const[css,setCss] = useState(false)
    const[js,setJs] = useState(false)
    
 
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
      const codeMirrorOptions = {
        theme: 'material',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
      };
  
      return (
          <div className="editor">
              <section className="playground">
                  <div className={"code-editor html-code"}>
                      <div className="editor-header">HTML</div>
                          <CodeMirror
                              value={html}
                              options={{
                                  mode: 'htmlmixed',
                                  ...codeMirrorOptions,
                              }}
                              onBeforeChange={(editor, data, html) => {
                                  setHtml(html);
                                  console.log('THIS IS HTML')
                              }}
                          />
                  </div>
                  {/*this.showCss(this.state.css, codeMirrorOptions)*/}
              </section>
              <section className="result">
                  <IframeComponent html={html}/>
              </section>
          </div>
      );
    
  }
  

