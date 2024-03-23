import React,{useEffect} from "react";
var editor='10';
// Preview text in real time
function updatePreview() {
    var editor = document.getElementById('editor').value;
    document.getElementById('preview').innerHTML= editor;
}

//Preview text Updater




export default function Body() {
    useEffect(() => {
        //Preview text Updater
        document.getElementById('editor').addEventListener('input', function() {
            updatePreview();
        });
    }, []);
    return (
        <>
            
            <section className="flex justify-between p-4 ">
                <div className="border border-black w-1/2  ">
                    <div className="top-0 p-1">Input</div>
                    <textarea id='editor' className="border border-black w-full m-3 p-2 " placeholder="Enter your text here"></textarea>
                </div>

                <div className="border border-black w-1/2 ">
                    <div className="top-0 p-1">Output</div>
                    <div id='preview'></div>

                </div>
            </section>
        </>
        
    );
    
}