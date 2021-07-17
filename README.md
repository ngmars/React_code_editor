## DYTE PROBLEM STATEMENT - Frontend (React)
You can try the editor [here](https://lool-6b320.web.app/)<br/>
For the shareable link you can checkout [http:localhost:3000/kQxtFU2p](http:localhost:3000/kQxtFU2p) <br/>
Check out the editor [here](https://github.com/ngmars/React_code_editor/edit/main/README.md).

## There are 3 sections:

### File Explorer Pane
 - Contains 3 files: index.html, index.css, index.js.
 - Clicking on a file from the “file explorer” should display the corresponding content on the code editor for editing.

### Code editor
-  A “code editor” that supports syntax highlighting for HTML, CSS, and JS.

### Live view section
 - A “live view” section to show the rendered HTML website.
 - The “live view” section must display the rendered website that was created by the user. When a change is made to any of the index.html, index.css, or index.js files, the “live view” section should hot-reload, and display the new output.

### The Share code setup
To set up the share code, the CORSproxyworker.txt has to be copied and pasted in the cloudflare worker. The hosted link then must be put in src/config/workerUrl.ts file. 
It must be set as the value for url.


### Bonus
- Feature to save your code, and generate a shareable link that should show the saved code when the link is visited. 
- Pastebin Developer API to save code, generate a unique link, and then load it back at a later stage.
- Deploy website on Github pages.
- React application using Typescript.

![preview](https://github.com/ngmars/React_code_editor/blob/main/WhatsApp%20Image%202021-07-17%20at%2021.56.29.jpeg?raw=true)
