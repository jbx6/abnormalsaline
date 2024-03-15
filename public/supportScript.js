docment.getElementById('supportSelfBtn').addEventListener('click', function() {
    const el = document.getElementById('supportOutput');

    const supportSelfCard = `
        <div class="card">
            <span class="card-span"></span>
            <div class="content">
                <h3>I am Choosing to Look After and Support Myself!</h3>
                <p class="desc">I am going to take a moment to look after myself. Afterall, if my wellbeing is poor, I might be temporarily unable of delivering the level of care which I always stride to.</p>
                <br>
                <button style="float: left;">Lets go</button>

            </div>
            <br>
        </div>
        <br>
        `
    
    el.innerHTML = supportSelfCard;
    
})