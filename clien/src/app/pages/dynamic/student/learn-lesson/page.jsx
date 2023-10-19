

export default function StudentLesson(){

    return(
            <div className="container pt-5">
                <h1 className="mt-3">C Tutorial</h1>
                <div className="container-fluid">
                    <div className="row m-5">

                        <p className="mb-5"><h2>Learn C</h2></p>
                        <p className="mb-5">C is a general-purpose programming language, developed in 1972, and still quite popular.</p>
                        <p className="mb-5">C is very powerful; it has been used to develop operating systems, databases, applications, etc.</p>

                    </div>
                    <div className="row px-5">

                        <h3 className="mb-4">Examples</h3>

                        <pre className="mx-5">
                        <code>
                          #include &lt;stdio.h&gt;<br/>
                          int main() &#123;<br/>
                            &nbsp; &nbsp; printf("Hello World!");<br/>
                            &nbsp; &nbsp; return 0;<br/>
                            &#125;
                        </code>
                    </pre>
                    </div>
                    <div className="row mx-5">
                        <p className="my-2">We recommend reading this tutorial, in the sequence listed in the left menu.</p>

                        <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>C Exercises</h2>
                        <p style={{ marginBottom: '10px' }}>Test Yourself With Exercises</p>
                        <p style={{ marginBottom: '10px' }}>Exercise:</p>
                    </div>
                </div>

            </div>

    )
}