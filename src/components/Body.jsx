import React, { useEffect } from "react";
// import Marked from "D:\Web Dev\markdown-previewer\Marked.js";


// Rest of your code...

// Preview text in real time
function updatePreview() {
    let input = document.getElementById('editor').value;
    let output = marked.parse(input); // Use marked like this
    console.log(output);
    document.getElementById('preview').innerHTML = output;
}
  
//Preview text Updater function as soon as we change text in the editor


export default function Body() {
    useEffect(() => {
        //Preview text Updater
        document.getElementById('editor').addEventListener('input', function () {
            updatePreview();});
            
        }, 
    []);
    

    return (
        
        <>
        
           
            <section className="flex justify-between p-4 ">

                {/* Input Section */}
                <div className="border  w-1/2 flex-wrap p-2 ">
                    <div className="top-0 p-1 ">Input</div>
                    <textarea id='editor' className="border border-black w-full p-2 " placeholder="Enter the text in markdown...."></textarea>
                </div>
                
                {/* Output section */}
                <div className="border border-black w-1/2 p-4 ">
                    <div className="top-0 p-1">Output</div>
                    <div id='preview'></div>

                </div>
            </section>
            
        </>

    );

}