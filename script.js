// const rsearch = JSON.parse(localStorage.getItem("rsearch") || "[]");



function openWin() {
    const val = document.querySelector('input').value;
    if(val!=='') {
    window.open("http://www.google.com/search?q=" + val);
    }
}

function fgood() {
    window.open("http://www.google.com/doodles");
    }

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
}
// function showrsearch() {
//     const searchInput = document.getElementById('.s-input');
//     const searchButton = document.getElementById('.s-btn');
//     const recentSearches = document.getElementById('recent-searches');

//     searchButton.addEventListener('click', () => {
//     const searchValue = searchInput.value.trim();
//     if (searchValue !== '') {
//     // Store the search value in local storage
//     let searches = localStorage.getItem('searches');
//     if (!searches) {
//       searches = [];
//     } else {
//       searches = JSON.parse(searches);
//     }
//     searches.push(searchValue);
//     localStorage.setItem('searches', JSON.stringify(searches));
    
//     // Display the recent searches
//     const recentSearchesList = searches.map((search) => `<li>${search}</li>`).join('');
//     recentSearches.innerHTML = `<ul>${recentSearchesList}</ul>`;
//   }
// });
// }