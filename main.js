var Prediction = ""

Webcam.set({

    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90
})

camera= document.getElementById("camera")
Webcam.attach(camera)

function TakeSnapshot() {

    Webcam.snap(function (data_uri) {

        document.getElementById("result").innerHTML="<img id='pic' src="+data_uri+">"
    })
}

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/83hTaeEV_/model.json",model_loaded)

function model_loaded() {

    console.log("model loaded!")
}

