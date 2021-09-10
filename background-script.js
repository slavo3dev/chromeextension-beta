chrome.runtime.onInstalled.addListener(() => {
    console.log(`Installed`)
})


chrome.bookmarks.onCreated.addListener(() => {
    alert("Bookmark is Created")
})