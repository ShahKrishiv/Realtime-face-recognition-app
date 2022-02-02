function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    v = createCapture(VIDEO)
    v.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-zWN4IHSk/model.json', modelLoaded);

}

function draw() {
    image(v, 0, 0, 300, 300)
    classifier.classify(v, gotResult);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy_name").innerHTML = results[0].confidence;
    }
}

