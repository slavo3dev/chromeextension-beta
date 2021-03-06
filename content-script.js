window.onload = () => {
    const label = document.createElement("label")
    const textarea = document.createElement("TEXTAREA")
    const button = document.createElement('button');
    const submitBtn = document.createElement('button')

    // Button notes 
    button.id = "notes";
    button.textContent = "Add Notes"

    submitBtn.id = "saveNote";
    submitBtn.textContent = "Save Note"

    label.style.cssText = "color: white; font-size: 24px";
    label.textContent = "Add Notes"
    
    // Text Input 
    textarea.id = "textArea"
    textarea.style.cssText = "font-size:12px; width: 99%; border: 1px solid #888; height: 10%"


    const checkboxInput = document.createElement("input")
    checkboxInput.type = 'checkbox'
    checkboxInput.id = 'noteSetting'


    document.getElementById("end").prepend(button, checkboxInput, 'Auto Apply?')
    button.addEventListener("click",() => { enableNotes(label,textarea,submitBtn); })

    checkboxInput.addEventListener("click",() => storeSetting())
    
    checkSetting(label,textarea,submitBtn)
    
    submitBtn.addEventListener("click", () => saveNote(textarea))
}

function checkSetting(label,textarea,submitBtn) {
    chrome.storage.local.get(['enabled'],(result) => {
        const isEnabled = result.enabled
        console.log("Check Setting: ", isEnabled)
        document.getElementById("noteSetting").checked = isEnabled


        isEnabled ? (
          enableNotes(label,textarea,submitBtn)
        ) : null
    })

    
}


function storeSetting() {
    const isEnabled = document.getElementById("noteSetting").checked

    const setting = {enabled: isEnabled}
    
    chrome.storage.local.set(setting,() => {
        console.log("Stored: ", setting)
    })

    /* to stor data in sync storage per account 
    chrome.storage.sync.set(setting,() => {
        console.log("Stored: ", setting)
    })
    */
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