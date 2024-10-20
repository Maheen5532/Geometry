        // Function to update visible fields based on selected shape
        function updateFields() {
            const shape = document.getElementById("Shapes").value;
            document.getElementById("length-div").style.display = (shape === "triangle" || shape === "square" || shape === "rectangle") ? "block" : "none";
            document.getElementById("width-div").style.display = (shape === "triangle" || shape === "rectangle") ? "block" : "none";
            document.getElementById("radius-div").style.display = (shape === "circle") ? "block" : "none";
        }

        // Initial field display setup
        updateFields();

        // Add event listener for shape selection change
        document.getElementById("Shapes").addEventListener("change", updateFields);

        // Add event listener to the Calculate button
        document.getElementById("calculate-btn").addEventListener("click", function() {
            const shape = document.getElementById("Shapes").value;
            let answer = document.getElementById("answer");

            let length = Number(document.getElementById("length").value);
            let width = Number(document.getElementById("width").value);
            let radius = Number(document.getElementById("radius").value);
            let area = 0;

            if (shape === "circle") {
                area = Math.PI * radius * radius;
                answer.innerText = "Area of Circle: " + area.toFixed(2);
            } else if (shape === "triangle") {
                area = 0.5 * length * width;
                answer.innerText = "Area of Triangle: " + area.toFixed(2);
            } else if (shape === "square") {
                area = length * length;
                answer.innerText = "Area of Square: " + area.toFixed(2);
            } else if (shape === "rectangle") {
                area = length * width;
                answer.innerText = "Area of Rectangle: " + area.toFixed(2);
            } else {
                answer.innerText = "Please select a shape and enter the required values.";
            }
        });