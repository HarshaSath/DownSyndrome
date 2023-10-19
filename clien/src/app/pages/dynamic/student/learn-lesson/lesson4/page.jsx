export default function Lesson4(){
    return(
        <div className="container-fluid bg-dark text-white">
      <div className="container mt-5 pt-3">
        <h1>C Output (Print Text)</h1>
      </div>
      <div className="container-fluid">
        <div className="row m-5">
          <h3 className="mb-5">Output (Print Text)</h3>
          <p>To output values or print text in C, you can use the printf() function:</p>
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
          <p>You can use as many printf() functions as you want. However, note that it does not insert a new line at the end of the output:</p>
          <h3>Example</h3>
          <pre className="mx-5">
            <code>
              #include &lt;stdio.h&gt;<br/>

              int main() &#123;<br/>
                printf("Hello World!");<br/>
                printf("I am learning C.");<br/>
                return 0;<br/>
              &#125;
            </code>
          </pre>
        </div>
      </div>
    </div>
    )
}