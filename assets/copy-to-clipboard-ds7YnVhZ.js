import{j as f}from"./@babel-fXcOJB-X.js";import{t as m}from"./toggle-selection-fekekO1r.js";var y=m,p={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function b(r){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return r.replace(/#{\s*key\s*}/g,t)}function w(r,t){var o,i,d,l,c,e,n=!1;t||(t={}),o=t.debug||!1;try{d=y(),l=document.createRange(),c=document.getSelection(),e=document.createElement("span"),e.textContent=r,e.ariaHidden="true",e.style.all="unset",e.style.position="fixed",e.style.top=0,e.style.clip="rect(0, 0, 0, 0)",e.style.whiteSpace="pre",e.style.webkitUserSelect="text",e.style.MozUserSelect="text",e.style.msUserSelect="text",e.style.userSelect="text",e.addEventListener("copy",function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),typeof a.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=p[t.format]||p.default;window.clipboardData.setData(s,r)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,r);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(e),l.selectNodeContents(e),c.addRange(l);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");n=!0}catch(a){o&&console.error("unable to copy using execCommand: ",a),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",r),t.onCopy&&t.onCopy(window.clipboardData),n=!0}catch(s){o&&console.error("unable to copy using clipboardData: ",s),o&&console.error("falling back to prompt"),i=b("message"in t?t.message:g),window.prompt(i,r)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(l):c.removeAllRanges()),e&&document.body.removeChild(e),d()}return n}var D=w;const x=f(D);export{x as c};
