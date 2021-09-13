window.onload = () => {
    const label = document.createElement("label")
    const textarea = document.createElement("TEXTAREA")
    const button = document.createElement('button');
    const submitBtn = document.createElement('button')

    button.id = "notes";
    button.textContent = "Add Notes"

    submitBtn.id = "saveNote";
    submitBtn.textContent = "Save Note"

    label.style.cssText = "color: white; font-size: 24px";
    label.textContent = "Add Notes"

    textarea.id = "textArea"
    textarea.style.cssText = "font-size:12px; width: 99%; border: 1px solid #888; height: 10%"


   

    const input = document.createElement("input")
    input.type = 'checkbox'
    input.id = 'nodeSetting'


     document.getElementById("end").prepend(button, input)

    button.addEventListener("click",() => {
        
        enableNotes(label,textarea,submitBtn);
    })
    
    submitBtn.addEventListener("click", () => saveNote(textarea))
}


function enableNotes(labal,textarea,submitBtn) {
    
    document.getElementsByTagName("ytd-app")[0].style.background = "rgba(255, 0, 0, 0.2)"
    document.getElementById("secondary").prepend(submitBtn)
    document.getElementById("secondary").prepend(textarea);
    document.getElementById("secondary").prepend(labal);   
}

function saveNote(textarea) {
    alert(textarea.value)
}