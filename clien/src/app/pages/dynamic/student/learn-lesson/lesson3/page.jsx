export default function Lesson3(){
    return(
        <div className="container-fluid bg-dark text-white">
            <div className="container mt-5 pt-3">
                <h1>C Syntax</h1>
            </div>
            <div className="container-fluid">
                <div className="row m-5">
                    <h3 className="mb-5">Syntax</h3>
                    <p><p>You have already seen the following code a couple of times in the first chapters. Let's break it down to understand it better:</p></p>
                    <h3>Example</h3>
                    <pre className="mx-5">
                        <code>
                          #include &lt;stdio.h&gt;<br/>

                          int main() &#123;<br/>
                            printf("Hello World!");<br/>
                            return 0;<br/>
                            &#125;
                        </code>
                    </pre>
                    <h3>Example explained</h3>
                    <p>Line 1: #include &lt;stdio.h&gt; is a header file library that lets us work with input and output functions, such as printf() (used in line 4). Header files add functionality to C programs.</p>
                    <p>Don't worry if you don't understand how #include &lt;stdio.h&gt; works. Just think of it as something that (almost) always appears in your program.</p>
                    <p>Line 2: A blank line. C ignores white space. But we use it to make the code more readable.</p>
                    <p>Line 3: Another thing that always appears in a C program is main(). This is called a function. Any code inside its curly brackets &#123;&#125; will be executed.</p>
                    <p>Line 4: printf() is a function used to output/print text to the screen. In our example, it will output "Hello World!".</p>
                    <p>Note that: Every C statement ends with a semicolon ;</p>
                    <p>Note: The body of int main() could also have been written as:</p>
                    <pre>
                        <code>
                          int main() &#123; printf("Hello World!"); return 0; &#125;
                        </code>
                    </pre>
                    <p>Remember: The compiler ignores white spaces. However, multiple lines make the code more readable.</p>
                    <p>Line 5: return 0 ends the main() function.</p>
                    <p>Line 6: Do not forget to add the closing curly bracket &#125; to actually end the main function.</p>



                </div>
            </div>

        </div>
    )
}

function CSyntax() {
    return (
        <div style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <h1>C Syntax</h1>
            <p><h2>Syntax</h2></p>
            <p>You have already seen the following code a couple of times in the first chapters. Let's break it down to understand it better:</p>



            <h3>Example explained</h3>
            <p>Line 1: #include &lt;stdio.h&gt; is a header file library that lets us work with input and output functions, such as printf() (used in line 4). Header files add functionality to C programs.</p>
            <p>Don't worry if you don't understand how #include &lt;stdio.h&gt; works. Just think of it as something that (almost) always appears in your program.</p>
            <p>Line 2: A blank line. C ignores white space. But we use it to make the code more readable.</p>
            <p>Line 3: Another thing that always appears in a C program is main(). This is called a function. Any code inside its curly brackets &#123;&#125; will be executed.</p>
            <p>Line 4: printf() is a function used to output/print text to the screen. In our example, it will output "Hello World!".</p>
            <p>Note that: Every C statement ends with a semicolon ;</p>
            <p>Note: The body of int main() could also have been written as:</p>
            <pre>
        <code>
          int main() &#123; printf("Hello World!"); return 0; &#125;
        </code>
      </pre>
            <p>Remember: The compiler ignores white spaces. However, multiple lines make the code more readable.</p>
            <p>Line 5: return 0 ends the main() function.</p>
            <p>Line 6: Do not forget to add the closing curly bracket &#125; to actually end the main function.</p>
        </div>
    );}