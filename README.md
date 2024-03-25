# Markdown Previewer

Markdown Previewer is a simple web application that allows users to easily convert Markdown text into HTML. This tool provides a live preview of the rendered HTML as you type, making it incredibly useful for writing and previewing markdown documents on the fly.

<<<<<<< HEAD

## Features

* **Live Preview** : Instantly see what your markdown will look like in HTML.
* **Responsive Design** : Works on both desktop and mobile devices.
* **Easy to Use** : Simple, intuitive interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js]() (version 12.0.0 or later)

### Installation

1. Clone the repository to your local machine:

<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/yourusername/markdown-previewer.git
</code></div></div></pre>

2. Navigate into the project directory:

<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd markdown-previewer
</code></div></div></pre>

3. Install the necessary packages:

<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
</code></div></div></pre>

4. Run the development server:

<pre><div class="dark bg-gray-950 rounded-md"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre>

The application will now be running on [http://localhost:3000](). Open this link in your browser to view the app.

## Usage

To use the Markdown Previewer, simply start typing or pasting your markdown into the left-hand text area of the application. The right-hand side will automatically update to display the rendered HTML output of your markdown.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Marked]() - A markdown parser and compiler
* [Highlight.js](https://highlightjs.org/) - For syntax highlighting

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are  **greatly appreciated** .

Please refer to the [CONTRIBUTING.md](https://chat.openai.com/c/CONTRIBUTING.md) file for more information on how you can contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://chat.openai.com/c/LICENSE.md) file for details.

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
=======
![Screenshot_25-3-2024_05239_markdown-previewer-inky-theta vercel app](https://github.com/Harshilmalhotra/Markdown-Previewer/assets/111488708/397e85a8-efa6-4cfe-b563-c03a844f9a8c)

![Screenshot_25-3-2024_101010_localhost](https://github.com/Harshilmalhotra/Markdown-Previewer/assets/111488708/644b9708-c712-454f-8333-62e5003c2b07)

## Features

* **Live Preview** : Instantly see what your markdown will look like in HTML.
* **Responsive Design** : Works on both desktop and mobile devices.
* **Easy to Use** : Simple, intuitive interface.

## Getting Started



### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js]() (version 12.0.0 or later)

### Installation

1. Clone the repository to your local machine:

  ```
    git clone https://github.com/Harshilmalhotra/Markdown-Previewer.git
  ```

2. Navigate into the project directory:

```
cd Markdown-Previewer
```

3. Install the necessary packages:
```
npm install
```


4. Run the development server:
```
npm run dev
```


Open this link in your browser to view the app.

## Usage

To use the Markdown Previewer, simply start typing or pasting your markdown into the left-hand text area of the application. The right-hand side will automatically update to display the rendered HTML output of your markdown.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Marked](https://github.com/markedjs/marked) - A markdown parser and compiler

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are  **greatly appreciated** .

Please refer to the [CONTRIBUTING.md]() file for more information on how you can contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Harshilmalhotra/Markdown-Previewer/blob/main/LICENSE) file for details.

>>>>>>> 781f55244dc879972eaf47dd7ccc45e115734585
