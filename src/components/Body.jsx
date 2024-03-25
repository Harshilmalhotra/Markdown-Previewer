import React, { useEffect } from "react";
// import Marked from "D:\Web Dev\markdown-previewer\Marked.js";
import 'boxicons'

const buttonClick = () => {
    // Call multiple functions here
    copy();
    changeContent();
};

function copy() {
    let textarea = document.getElementById("editor");
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

function changeContent() {
    var button = document.getElementById("copyButton");
    var originalContent = button.innerHTML;
    button.innerHTML = "Copied!";
    setTimeout(function() {button.innerHTML = originalContent;}, 2000); 
}
// Preview text in real time
function updatePreview() {
    let input = document.getElementById('editor').value;
    let output = marked.parse(input); // Use marked like this
    console.log(input);
    document.getElementById('preview').innerHTML = output;
}

//Preview text Updater function as soon as we change text in the editor


export default function Body() {
    useEffect(() => {
        //Preview text Updater
        document.getElementById('editor').addEventListener('input', function () {
            updatePreview();
        });

    },
        []);

    

    return (

        <>
           
        

       
        <section className="h-[37rem] flex justify-between pr-16 pl-16 pt-10 pb-10 bg-slate-950 ">
                
        {/* Input Section */}


                <div className="border w-1/2 flex-wrap p-2 border-2 rounded-lg mr-6 bg-gray-900 border-slate-800 shadow-lg shadow-slate-700">

                    <div className="top-0 p-1 flex justify-between text-white text-lg font-semibold">Input 
                        
                        <button id="copyButton" onClick={buttonClick}  className=" click:bg-blue-700 text-white py-[2px] px-2 rounded text-md font-semibold focus:outline-none focus:shadow-outline">
                        <box-icon name='copy' type='solid' color='#f5f4f4' ></box-icon>
                        </button>

                    </div> 
                    
                    <textarea id='editor' className="h-[23.5rem] w-full p-2 bg-gray-900 h-[25rem] text-white font-mono" placeholder="Enter the text in markdown...."  style={{ outline: 'none', /* or borderColor: 'transparent' */ }}></textarea>
                
                </div>

        {/* Output section */}

                <div className="border w-1/2  flex-wrap p-2 border-2 rounded-lg bg-gray-900 border-slate-800 shadow-lg shadow-slate-700">
                    
                    <div className="top-0 p-1 text-white text-lg font-semibold">Output</div>
                    <div id='preview'className="text-white m-4"></div>

                </div>


        </section>

         

        </>

    );

}