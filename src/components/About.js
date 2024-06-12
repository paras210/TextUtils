import React ,{useState}from 'react'

export default function About(props) {
    let myStyle={
        color: props.modeColor == 'light' ? 'black' : 'white',
        backgroundColor: props.modeColor == 'light' ? 'white' : 'black',
        
    }
    
    return (
        <div>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <h1>About us</h1>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                             "The Text Utility App provides a suite of tools to analyze and manipulate your text efficiently. From character and word counting to text transformations, our app offers a versatile range of features to meet your text processing needs."
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free to use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Enjoy unlimited access to powerful text utilities designed to simplify and enhance your text processing experience, without any hidden fees or subscriptions."
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The Text Utility App is designed to be fully compatible with all modern web browsers, ensuring a seamless experience regardless of your preferred platform. Whether you use Chrome, Firefox, Safari, or Edge, our app delivers consistent performance and functionality.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
