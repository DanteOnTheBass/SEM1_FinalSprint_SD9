// QAP 5 written by Steven Squires SD9

function greeting() {
    console.log("Let's learn about color codes.");
}

greeting();

function formatColorInfo(color) {
    return `
        <h3><span style="color: ${color.hex};">${color.color}</span></h3>
        ${color.color} is perceived in the wavelength range of ${color.wavelength} from the visible light spectrum.<br>
        The color ${color.color} is categorized as a ${color.category} color.
        <br>
        <br>
        Here are some examples of a ${color.color} hue as different color codes:
        <ul>
            <li>hex: ${color.hex}</li>
            <li>rgb: ${color.rgb}</li>
            <li>cmyk: ${color.cmyk}</li>
        </ul>
        This color is ${color.vibrant === true ? 'vibrant' : 'not vibrant'}.
    `;
}

function formatCategoryExplanation(color) {
    let explanation = '';

    if (color.category === 'Primary') {
        explanation = 'Primary colors are the foundation of color theory. They cannot be created by mixing other colors.';
    } else if (color.category === 'Secondary') {
        explanation = 'Secondary colors are created by mixing two primary colors in equal parts.';
    } else if (color.category === 'Tertiary') {
        explanation = 'Tertiary colors are created by mixing a primary color with a secondary color.';
    }

    return `
        <p><strong>${color.category} Color:</strong> ${explanation}</p>
    `;
}

function aboutHEX() {
    return "Hex Color Codes, also known as Hexadecimal,\n" +
        "are widely used in web design and digital graphics.\n" +
        "They are represented as six-digit codes preceded by a hash symbol (#),\n" +
        "where each pair of digits corresponds to the intensity of the red, green, and blue color channels respectively.\n" +
        "For example, #FF0000 represents pure red.\n" +
        "Hex colors range from #000000 (black) to #FFFFFF (white).\n" +
        "Hex codes provide a compact and intuitive way to specify colors,\n" +
        "and they are commonly used in HTML and CSS.";
}

function aboutCMYK() {
    return "CMYK Color Model:\n\n" +
        "CMYK stands for Cyan, Magenta, Yellow, and Key (black). It's primarily used in color printing processes.\n" +
        "CMYK is a subtractive color model, meaning that colors are created by subtracting varying amounts of cyan, magenta, yellow, and black inks from a white background.\n" +
        "It's commonly used in offset printing, where overlapping of inks results in a wide range of colors.\n" +
        "CMYK values are typically represented as percentages, where 0% means no ink and 100% means full ink coverage.\n" +
        "The CMYK color model is used to ensure accurate color reproduction in printed materials.";
}

function aboutRGB() {
    return "RGB Color Model:\n\n" +
        "RGB stands for Red, Green, and Blue. It's used in electronic displays like computer monitors, TVs, and digital screens.\n" +
        "RGB is an additive color model, where colors are created by mixing varying intensities of red, green, and blue light on a black background.\n" +
        "Each color channel is represented by an integer value ranging from 0 to 255 or a floating-point value ranging from 0.0 to 1.0.\n" +
        "The combination of full intensity red, green, and blue light results in white, while the absence of all three channels results in black.\n" +
        "RGB is widely used in digital media, graphics software, and web design.";
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('Colors.json')
        .then(response => response.json())
        .then(colorData => {
            console.log('JSON Data:', colorData);
            const contentContainer = document.getElementById("contentContainer");
            colorData.colors.forEach(color => {
                console.log(`JSON Value Pairs for ${color.color}:`, color);
                const colorInfo = formatColorInfo(color);
                const categoryExplanation = formatCategoryExplanation(color);

                contentContainer.innerHTML += colorInfo;
                contentContainer.innerHTML += categoryExplanation;
            });

            const hexInfo = aboutHEX();
            const cmykInfo = aboutCMYK();
            const rgbInfo = aboutRGB();

            const hexInfoElement = document.getElementById("hexInfo");
            const cmykInfoElement = document.getElementById("cmykInfo");
            const rgbInfoElement = document.getElementById("rgbInfo");

            hexInfoElement.textContent = hexInfo;
            cmykInfoElement.textContent = cmykInfo;
            rgbInfoElement.textContent = rgbInfo;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

const html = `
    <center>
        <h1>Project 3 - JavaScript: FINAL SPRINT</h1>
        <h2>Finding <span style="color: #FF0000;">R</span><span style="color: #FFA500;">O</span><span
                style="color: #FFFF00;">Y</span><span style="color: #00FF00;"> G </span><span
                style="color: #0000FF;">B</span><span style="color: #4B0082;">I</span><span
                style="color: #EE82EE;">V</span>: The colors of the rainbow.</h2>
        <h3>by<br>Steven Squires</h3>
    </center>
    <h2>Introduction to color codes.</h2>
    <p>Hex, CMYK, and RGB are different color encoding systems used to represent colors in various digital media and printing processes. Each system has its own purpose and characteristics. Hex color codes are commonly used for web design, CMYK is used for color printing, and RGB is used for electronic displays. Each system has its own strengths and is suited for specific applications. 
    It's important to choose the appropriate color representation depending on the context in which the colors will be used.</p>
    <div id="contentContainer">
        <h2>About Hex Color Codes:</h2>
        <p id="hexInfo"></p>
        <h2>About RGB Color Model:</h2>
        <p id="rgbInfo"></p>
        <h2>About CMYK Color Model:</h2>
        <p id="cmykInfo"></p>
    </div>
`;

document.body.innerHTML += html;
