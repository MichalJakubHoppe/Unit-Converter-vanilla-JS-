let input

let m2fResult = document.getElementById("m2f-result")
let f2mResult = document.getElementById("f2m-result")
let l2gResult = document.getElementById("l2g-result")
let g2lResult = document.getElementById("g2l-result")
let k2pResult = document.getElementById("k2p-result")
let p2kResult = document.getElementById("p2k-result")

function convertLength (){
    input = document.getElementById("input-value").value
    document.getElementById("m2f").textContent=input
    document.getElementById("f2m").textContent=input 
    let op=input * 3.28
    m2fResult.textContent=op.toFixed(3)
    let operation2=input/3.28
    f2mResult.textContent=operation2.toFixed(3)
}

convertLength ()

function convertVolume (){
    input = document.getElementById("input-value").value
    document.getElementById("l2g").textContent=input
   document.getElementById("g2l").textContent=input
    let op=input*0.264172
    l2gResult.textContent=op.toFixed(3)
    let operation2=input/0.264172
    g2lResult.textContent=operation2.toFixed(3)
}

convertVolume ()

function convertMass (){
    input = document.getElementById("input-value").value
    document.getElementById("k2p").textContent=input
    document.getElementById("p2k").textContent=input
    let op=input* 2.2046
    k2pResult.textContent=op.toFixed(3)
    let operation2=input/ 2.2046
    p2kResult.textContent=operation2.toFixed(3)
}
convertMass()