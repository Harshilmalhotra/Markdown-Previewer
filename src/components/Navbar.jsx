import React from "react";

export default function Navbar() {
    return (
        <>
        <nav className="h-[4rem] flex justify-between bg-slate-950 p-3 border-b border-dashed border-gray-400">
            <div className="text-3xl font-semibold bg-gradient-to-r from-rose-400 to-indigo-600 bg-clip-text text-transparent">Markdown Previewer</div>
            <div className="text-4xl">
                <a href="https://github.com/Harshilmalhotra/Markdown-Previewer" target="_blank">  <box-icon name='github' type='logo' color='#ffffff' ></box-icon> </a>
                <a href="mailto:contact@harshil.co" target="_blank">  <box-icon name='help-circle' type='solid' color='#ffffff'></box-icon> </a>
            </div>
        </nav>
        
        
        </>
    );
}