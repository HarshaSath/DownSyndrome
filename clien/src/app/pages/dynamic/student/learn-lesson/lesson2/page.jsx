export default function Lesson2(){
    return(
        <div className="container-fluid bg-dark text-white">
            <div className="container mt-5 pt-3">
                <h1>C Get Started</h1>
            </div>
            <div className="container-fluid">
                <div className="row m-5">
                    <h3 className="mb-5">Get Started With C</h3>
                    <p>To start using C, you need two things:</p>
                    <ul className="mb-3 mx-5" >
                        <li>A text editor, like Notepad, to write C code</li>
                        <li>A compiler, like GCC, to translate the C code into a language that the computer will understand</li>
                    </ul>
                    <p>There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).</p>

                    <p><h2>C Install IDE</h2></p>
                    <p>An IDE (Integrated Development Environment) is used to edit AND compile the code.</p>
                    <p>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C code.</p>
                    <p>Note: Web-based IDE's can work as well, but functionality is limited.</p>
                    <p>We will use Code::Blocks in our tutorial, which we believe is a good place to start.</p>
                    <p>You can find the latest version of Codeblocks at <a href="http://www.codeblocks.org/" target="_blank" rel="noopener noreferrer">http://www.codeblocks.org/</a>. Download the mingw-setup.exe file, which will install the text editor with a compiler.</p>

                    <p><h2>C Quickstart</h2></p>
                    <p>Let's create our first C file.</p>
                    <p>Open Codeblocks and go to File &gt; New &gt; Empty File.</p>
                    <p>Write the following C code and save the file as myfirstprogram.c (File &gt; Save File as):</p>


                </div>
            </div>

        </div>
    )
}

function CStarted() {
    return (
        <div style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <h1>C Get Started</h1>
            <p><h2>Get Started With C</h2></p>
            <p>To start using C, you need two things:</p>
            <ul style={{ marginBottom: '10px' }}>
                <li>A text editor, like Notepad, to write C code</li>
                <li>A compiler, like GCC, to translate the C code into a language that the computer will understand</li>
            </ul>
            <p>There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).</p>

            <p><h2>C Install IDE</h2></p>
            <p>An IDE (Integrated Development Environment) is used to edit AND compile the code.</p>
            <p>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C code.</p>
            <p>Note: Web-based IDE's can work as well, but functionality is limited.</p>
            <p>We will use Code::Blocks in our tutorial, which we believe is a good place to start.</p>
            <p>You can find the latest version of Codeblocks at <a href="http://www.codeblocks.org/" target="_blank" rel="noopener noreferrer">http://www.codeblocks.org/</a>. Download the mingw-setup.exe file, which will install the text editor with a compiler.</p>

            <p><h2>C Quickstart</h2></p>
            <p>Let's create our first C file.</p>
            <p>Open Codeblocks and go to File &gt; New &gt; Empty File.</p>
            <p>Write the following C code and save the file as myfirstprogram.c (File &gt; Save File as):</p>
            <pre>
        <code>
          #include &lt;stdio.h&gt;<br/>

          int main() &#123;<br/>
            printf("Hello World!");<br/>
            return 0;<br/>
            &#125;
        </code>
      </pre>
            <p>Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.</p>
            <p>In Codeblocks, it should look like this:</p>
            <p>Then, go to Build &gt; Build and Run to run (execute) the program. The result will look something like this:</p>
            <pre>
        <code>
          Hello World!
          Process returned 0 (0x0) execution time : 0.011 s
          Press any key to continue.
        </code>
      </pre>
            <p>Congratulations! You have now written and executed your first C program.</p>

            <p><h2>Learning C At W3Schools</h2></p>
            <p>When learning C at W3Schools.com, you can use our "Try it Yourself" tool, which shows both the code and the result. This will make it easier for you to understand every part as we move forward:</p>
            <pre>
        <code>
          #include &lt;stdio.h&gt;<br/>

          int main() &#123;<br/>
            printf("Hello World!");<br/>
            return 0;<br/>
            &#125;
        </code>
      </pre>
            <p>Result:</p>
            <pre>
        <code>
          Hello World!
        </code>
      </pre>
        </div>
    );
}