document.getElementById('mapOptionsButton').addEventListener('click', function() {
    var mapOptionsContainer = document.getElementById('mapOptionsContainer');
    mapOptionsContainer.style.display = (mapOptionsContainer.style.display === 'none') ? 'block' : 'none';
});


let map; // Declare map variable outside the functions

let osmButton = document.getElementById('osmButton')
let otmButton = document.getElementById('otmButton')
let hotButton = document.getElementById('hotButton')
let signOnButton = document.getElementById('signOnButton')

function initializeMap() {
    map = L.map('map').setView([51.16056, -4.1235], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([51.16056, -4.1235]).addTo(map);
}

osmButton.onclick = function() {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    //L.marker([51.16056, -4.1235]).addTo(map);
}

otmButton.onclick = function() {
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map);
    //L.marker([51.16056, -4.1235]).addTo(map);
};

hotButton.onclick = function() {
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);
    //L.marker([51.16056, -4.1235]).addTo(map);
};

function signOn() {
    console.log('Sign On button clicked');
    let el = document.getElementById('display');
    var html = `<input type="text">`;
    el.innerHTML = html;
}


signOnButton.onclick = signOn



function renderMap() {
    let el = document.getElementById('incident-container');
    el.innerHTML = ''; // Clear the content

    initializeMap();

    let closeIncidentButton = document.getElementById('closeIncidentButton');
    closeIncidentButton.addEventListener('click', renderMap);
}

function renderIncident() {
    let el = document.getElementById('incident-container');
    let html = `<div class="incidentWrapper">
    <p class="incidentNoSubHead">Incident No: 9020713 (Update)</p>
        <div class="incidentInfoParent">
            <div class="incidentInfoDiv1">
                <p><strong>Call Type</strong></p>
                <p><strong>Priority Colour</strong></p>
                <p><strong>Incident Number</strong></p>
                <p><strong>Patient Details</strong></p>
                <p><strong>Pickup Address</strong></p><br>
                <p><strong>Map Reference/page</strong></p>
                <p><strong>Diagnosis Code</strong></p>
                <p><strong>AMPDS Code</strong></p><br>
                <p><strong>Remarks</strong></p><br>
                <br>
                <p><strong>Receipt of Call Time</strong></p>
                <p><strong>Allocation time</strong></p>
            </div>
            <div class="incidentInfoDiv2">
                <p>999</p>
                <p>RED</p>
                <p>XXXXXXX</p>
                <p>[SEX/ AGE(F/M)]</p>
                <p>ADDRESS(PLACE, HOUSE(NAME, NUMBER)) ROAD NAME TOWN COUNTY POST CODE : ( special details specific to geo. of incident) IN THE RIVER</p>
                <p>Not Available</p>
                <p>C1 DROWNING / WATER INCIDENT C1</p>
                <p>NHS999/Dx010 - Emergency Ambulance Response for Potential Cardiac Arrest</p>
                <p>$ REDACTED FACE DOEN IN THE RIVER $HEMS AVAILABLE, EARLY UPDATE PLEASE - REDACTED $Chief Complaint: C1 DROWNING / WATER INCIDENT C1</p>
                <p>12:58</p>
                <p>13:02</p>
            </div>
        </div>
        <div class="incidentButtonContainer">
            <div class="navButonsBox">
                <button class="incidentButton">Current</button>
                <button class="incidentButton">Previous</button>
                <button class="incidentButton">Next</button>
            </div>
            <div class="closeButtonBox">
                <button class="incidentButton" id="closeIncidentButton" onclick="renderHome">Close</button>
            </div>
            <div class="ackButtonBox">
                <button class="incidentButton">Ack</button>
            </div>
        </div>
    </div>`;
    el.innerHTML = html;

    // Add event listener to the Close button in the incident
    let closeIncidentButton = document.getElementById('closeIncidentButton');
    closeIncidentButton.addEventListener('click', renderMap);
}

// Initial rendering of the map
initializeMap();

let currentIncidentButton = document.getElementById('currentIncidentButton');
currentIncidentButton.addEventListener('click', renderIncident);
