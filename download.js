
document.getElementById('roscDownloadBtn').addEventListener('click', function() {
    // Your text content that you want to include in the file
    const content = `
        +------------------------------------------------------------+
        |                 Cardiac Arrest Aide-Memoir                 |
        +-------------+-------------------+--------------------------+
        |        Name |                   |   Pharmacy Intervention  |
        +-------------+-------------------+-------------+------------+
        |         Sex |                   | Epinephrine | Amiodarone |
        +-------------+-------------------+-------------+------------+
        |              Times              |      :      |      :     |
        +-------------+-------------------+-------------+------------+
        |   Last seen |         :         |      :      |      :     |
        +-------------+-------------------+-------------+------------+
        |  When found |         :         |      :      |            |
        +-------------+-------------------+-------------+            |
        | CPR started |         :         |      :      |            |
        +-------------+-------------------+-------------+            |
        |          Defibrillation         |      :      |            |
        +-------------+-------------------+-------------+            |
        |    Shocks   |       Rhythm      |      :      |            |
        +-------------+-------------------+-------------+            |
        |      :      | A | PEA | VF | VT |      :      |            |
        +-------------+-------------------+-------------+            |
        |      :      | A | PEA | VF | VT |      :      |            |
        +-------------+-------------------+-------------+            |
        |      :      | A | PEA | VF | VT |      :      |            |
        +-------------+-------------------+-------------+            |
        |      :      | A | PEA | VF | VT |      :      |            |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |     Post ROSC Vitals     |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |          HR |        bpm |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |          BP |       mmHg |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |        Temp |         ˚C |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |         CBG |     mmol/L |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |        SpO2 |          % |
        +-------------+-------------------+-------------+------------+
        |      :      | A | PEA | VF | VT |       EtCo2 |       mmHg |
        +-------------+-------------------+-------------+------------+
        NB. This will overflow an A4 paper. Increase/ decrease font-size depending upon desired print-size requirements.
        `;

    //const content = document.getElementById('tg-wrap').innerText;

    // Set additional metadata as an object
    const metadata = {
        type: 'text/plain',
        lastModified: new Date(),
        author: 'Jeremy Bailey' // Set the author here
    };

    // Create a new Blob with the text content
    const blob = new Blob([content], metadata);

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = url;

    // Set the filename for the download
    anchor.download = 'cardiac_arrest_aide-memoir.txt';

    // Programmatically trigger the anchor click event to start the download
    anchor.click();

    // Clean up the temporary URL object
    URL.revokeObjectURL(url);
});

document.getElementById('narcDownloadBtn').addEventListener('click', function() {
    // Your text content that you want to include in the file
    const content = `
    +-------------------------------------------------------------------------------------------------------------------------+
    |                                            Opioid/Opiate Equivalency & Misc.                                            |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |               |  IV Morphine (IV-M)  |  Oral Oxycodone (PO-O)  |  Oral Morphine  |  Tramadol (PO-T)  |  Codeine (PO-C)  |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |      IV-M 1mg |          1mg         |           1mg           |    1ml (2mg)    |        20mg       |       20mg       |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |      IV-M 2mg |          2mg         |           2mg           |    2ml (4mg)    |        40mg       |       40mg       |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |      IV-M 5mg |          5mg         |           5mg           |    5ml (10mg)   |       100mg       |       100mg      |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |     IV-M 10mg |         10mg         |           10mg          |   10ml (20mg)   |       200mg       |       200mg      |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |     IV-M 20mg |         20mg         |           20mg          |   20ml (40mg)   |       400mg       |       400mg      |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |     PO-C 30mg |         1.5mg        |          1.5mg          |   1.5ml (3mg)   |        30mg       |       30mg       |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |     PO-C 60mg |          3mg         |           3mg           |    3ml (6mg)    |        60mg       |       60mg       |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |     PO-O 10mg |         10mg         |           10mg          |   10ml (20mg)   |       200mg       |       200mg      |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |    PO-T 100mg |          5mg         |           5mg           |    5ml (10mg)   |       100mg       |       100mg      |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |                                                                                                                         |
    +---------------+----------------------+-------------------------------------------+--------------------------------------+
    |               |                      |             Renal Impairment*             |         Hepatic Impairment**         |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |                                      |        Moderate†        |     Severe‡     |      Moderate     |      Severe      |
    |               Morphine               +-------------------------+-----------------+-------------------+------------------+
    |                                      |       Reduce dose       |      Avoid      |    Normal dose    |    Reduce dose   |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    |               |                      |                         |                 |                   |                  |
    +---------------+----------------------+-------------------------+-----------------+-------------------+------------------+
    | *Renal Impairment: morphine's clearance from the body may be reduced, leading to a longer duration of action and        |
    | increased risk of drug accumulation, which could result in heightened sedation, respiratory depression,                 |
    | and potential adverse reactions.                                                                                        |
    | **Hepatic Impairment: the effects of morphine may be prolonged and intensified due to decreased liver function,         |
    | potentially leading to a higher risk of drug accumulation and side effects such as respiratory depression and sedation. |
    |                                                                                                                         |
    | †Moderate: GFR < 30ml/ min.                                                                                             |
    | ‡Severe: GFR < 15ml/ min.                                                                                               |
    |                                                                                                                         |
    | GFR = "Glomerular Filtration Rate"                                                                                      |
    +-------------------------------------------------------------------------------------------------------------------------+
    NB. This will overflow an A4 paper. Increase/ decrease font-size depending upon desired print-size requirements.`;

    // Set additional metadata as an object
    const metadata = {
        type: 'text/plain',
        lastModified: new Date(),
        author: 'Jeremy Bailey' // Set the author here
    };

    // Create a new Blob with the text content
    const blob = new Blob([content], metadata);

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = url;

    // Set the filename for the download
    anchor.download = 'opioid-opiate_equivalency_aide-memoir.txt';

    // Programmatically trigger the anchor click event to start the download
    anchor.click();

    // Clean up the temporary URL object
    URL.revokeObjectURL(url);
});


document.getElementById('toxicDownloadBtn').addEventListener('click', function() {
    // Your text content that you want to include in the file
    const content = `
    +-------------------------------------------------------------------------------------------------------------------------+
    |                                                Toxidrome Comparison Table                                               |
    +---------------------+---------------------------------------------------------------------------------------------------+
    |                     |                                              Feature                                              |
    |      Toxidrome      +------------+--------+-----------+------------+--------------+----------------+--------------------+
    |                     |   Pupils   |  Skin  |    Tone   |  Reflexes  |    Arousal   |     Vitals     |        Other       |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |    Anti-cholinergic |    Wide    |   Dry  |   Normal  |   Normal   |  Depressed,  |  Tachycardia,  |  ± Hallucinations  |
    |                     |            |        |           |            |   confused   |  hypertensive, |                    |
    |                     |            |        |           |            |              |  hyperthermia  |                    |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |         Cholinergic |   Narrow   |   Wet  |   Normal  |   Normal   |   Confused,  |   Bradycardia  |     ± Seizures     |
    |                     |            |        |           |            |   obtunded   |                |                    |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |        Hallucinogen | Nystagmus, | Normal |   Normal  |   Normal   |   Confused   |   Tachycardia  |  ± Hallucinations  |
    |                     |    ± wide  |        |           |            |              |                |                    |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |              Opioid |   Narrow   |   Dry  |   Normal  |   Normal   |   Confused,  |  Bradypnoeic,  | ± Pulmonary oedema |
    |                     |            |        |           |            |   obtunded,  |   hypotensive  |                    |
    |                     |            |        |           |            |   somnolent  |                |                    |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |                 NMS |    Wide    |   Wet  | Increased |  Decreased |              | ± Hyperthermia |     ± Rigidity     |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |   Sedative-Hypnotic |   Narrow   |   Dry  |   Normal  | Unaffected | Stupor/ coma |     Normal     |   ± Hyperreflexia  |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    | Sedative Withdrawal |    Wide    |   Wet  |   Normal  |   Normal   |              |                |      ± Tremor      |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |  Serotonin Syndrome |    Wide    |   Wet  | Increased |  Increased |              | ± Hyperthermia |  ± Trismus, clonus |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    |     Sympathomimetic |    Wide    |   Wet  |   Normal  |   Normal   |    Alert,    |  Tachycardia,  |      ± Tremor,     |
    |                     |            |        |           |            |   agitated,  |  hypertensive, |   hyperreflexia,   |
    |                     |            |        |           |            |   restless   |   tachypnoeic  |      seizures      |
    +---------------------+------------+--------+-----------+------------+--------------+----------------+--------------------+
    | Sources: https://ddxof.com/app/; https://www.jems.com/patient-care/common-poisoning-syndromes-to-know/                  |
    +-------------------------------------------------------------------------------------------------------------------------+
    NB. This will overflow an A4 paper. Increase/ decrease font-size depending upon desired print-size requirements.
    `;

    //const content = document.getElementById('tg-wrap').innerText;

    // Set additional metadata as an object
    const metadata = {
        type: 'text/plain',
        lastModified: new Date(),
        author: 'Jeremy Bailey' // Set the author here
    };

    // Create a new Blob with the text content
    const blob = new Blob([content], metadata);

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = url;

    // Set the filename for the download
    anchor.download = 'toxidrome_aide-memoir.txt';

    // Programmatically trigger the anchor click event to start the download
    anchor.click();

    // Clean up the temporary URL object
    URL.revokeObjectURL(url);
});



document.getElementById('fallsDownloadBtn').addEventListener('click', function() {
    // Your text content that you want to include in the file
    const content = `
    +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |                                                                                  Falls & Rhabdomyolysis Aide-Memoir                                                                                  |
    +----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |          | Falls are the leading cause of emergency calls in the over 65s and account for 10-25% of emergency responses each year for adults aged over 65.                                           |
    |   Info   |                                                                                                                                                                                           |
    |          | JRCALC defines a long lie as “someone who has been on the floor for over an hour and is unable to get up".                                                                                |
    +----------+----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |          |                |                                                                         Swollen ±painful muscles                                                                         |
    |          |                |                                                                      Confusion, agitation, delirium                                                                      |
    |          |       Specific |                                                                       Anuria ±clinical dehydration                                                                       |
    |          |                |                                                                         Myalgia, muscle weakness                                                                         |
    | Symptoms |                |                                                                         Tea/ cola-coloured urine                                                                         |
    |          +----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |          |                |                                                                                   Fever                                                                                  |
    |          |   Non-specific |                                                                                  Malaise                                                                                 |
    |          |                |                                                                                 Anorexia                                                                                 |
    |          |                |                                                                             Nausea ±vomiting                                                                             |
    +----------+----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |                                                                                              Background                                                                                              |
    +----------+----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |          |                | This is a clinical syndrome associated with the breakdown of skeletal muscle fibres and cell membranes, leading to the release of muscle contents into the circulation.  |
    |          |                |  •.     It results in multiple complications, including hyperkalaemia, arrhythmias, compartment syndrome and acute kidney injury (AKI).                                  |
    |          |                |  •      It is a medical emergency that can lead to cardiac arrest if not promptly treated.                                                                               |
    |          |                |                                                                                                                                                                          |
    |          | Rhabdomyolysis | Long-lasting muscle compression such as that caused by prolonged immobilisation after a fall or lying unconscious on a hard surface                                      |
    |          |                | during illness or while under the influence of alcohol or medication are known causes.                                                                                   |
    |          |                |                                                                                                                                                                          |
    |   Info   |                | Rhabdomyolysis would be difficult to identify in the early stages but the presence of any of the above indicate a high suspicion of the                                  |
    |          |                | condition and these patients must be conveyed to the nearest ED.                                                                                                         |
    |          +----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |          |                | Patients who are lying on the floor after a fall can be divided into 2 groups:                                                                                           |
    |          |                |  •      Immobile long lie (ILL) – where patients have been unable to move around on the floor                                                                            |
    |          |       Lay Time |  •      Mobile long lie (MoLL) – where patients have been able to shuffle or roll themselves around on the floor                                                         |
    |          |                |                                                                                                                                                                          |
    |          |                | For ILL patients – the guidance is that patients should be referred to ongoing care if they have been on the floor for one hour or more.                                 |
    |          |                | For MoLL patients – the guidance is that they should be referred to ongoing care if they have been on the floor four hours or more.                                      |
    +----------+----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |                                                                                                                                                                                                      |
    +------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    NB. This will overflow an A4 paper. Increase/ decrease font-size depending upon desired print-size requirements.
    `;

    //const content = document.getElementById('tg-wrap').innerText;

    // Set additional metadata as an object
    const metadata = {
        type: 'text/plain',
        lastModified: new Date(),
        author: 'Jeremy Bailey' // Set the author here
    };

    // Create a new Blob with the text content
    const blob = new Blob([content], metadata);

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = url;

    // Set the filename for the download
    anchor.download = 'falls_and_rhabdomyolysis_aide-memoir.txt';

    // Programmatically trigger the anchor click event to start the download
    anchor.click();

    // Clean up the temporary URL object
    URL.revokeObjectURL(url);
});

document.getElementById('condenseFallsRhabdoTableBtn').addEventListener('click', function() {
    let tableHTML = document.getElementById('fallsRhabdoTable');
  
    const condenseFallsRhabdoTable = `
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
    .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
      overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
      font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}
    .tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
    .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
    .tg .tg-yz93{border-color:inherit;text-align:right;vertical-align:middle}
    @media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
    <div class="tg-wrap"><table class="tg">
    <thead>
      <tr>
        <th class="tg-c3ow" colspan="3">Falls &amp; Rhabdomyolysis Aide-Memoir</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-9wq8">Info</td>
        <td class="tg-0pky" colspan="2">Falls are the leading cause of emergency calls in the over 65s <br>and account for 10-25% of emergency responses each year for <br>adults aged over 65.<br><br><span style="font-weight:400;font-style:normal;text-decoration:none">JRCALC defines a long lie as “</span><span style="font-weight:bold;font-style:normal;text-decoration:none">someone who has been on the </span><br><span style="font-weight:bold;font-style:normal;text-decoration:none">floor for over an hour and is unable to get up</span><span style="font-style:normal;text-decoration:none">".</span></td>
      </tr>
      <tr>
        <td class="tg-9wq8" rowspan="2">Symptoms</td>
        <td class="tg-yz93">Specific</td>
        <td class="tg-c3ow">Swollen ±painful muscles<br>Confusion, agitation, delirium<br>Anuria ±clinical dehydration<br>Myalgia, muscle weakness<br>Tea/ cola-coloured urine</td>
      </tr>
      <tr>
        <td class="tg-yz93">Non-specific</td>
        <td class="tg-c3ow">Fever<br>Malaise<br>Anorexia<br>Nausea ±vomiting</td>
      </tr>
      <tr>
        <td class="tg-0pky" colspan="3"></td>
      </tr>
    </tbody>
    </table>
    <br>
    <button id="condensedFallsDownloadBtn">Download</button>
    <br>
    </div>
    `;
  
    tableHTML.innerHTML = condenseFallsRhabdoTable;

    document.getElementById('condensedFallsDownloadBtn').addEventListener('click', function() {
        // Your text content that you want to include in the file
        const content = `
        +----------------------------------------------------------------------------+
        |                     Falls & Rhabdomyolysis Aide-Memoir                     |
        +----------+-----------------------------------------------------------------+
        |          | Falls are the leading cause of emergency calls in the over 65s  |
        |          | and account for 10-25% of emergency responses each year for     |
        |   Info   | adults aged over 65.                                            |
        |          |                                                                 |
        |          | JRCALC defines a long lie as “someone who has been on the       |
        |          | floor for over an hour and is unable to get up".                |
        +----------+-----------------------+-----------------------------------------+
        |          |                       |         Swollen ±painful muscles        |
        |          |                       |      Confusion, agitation, delirium     |
        |          |              Specific |       Anuria ±clinical dehydration      |
        |          |                       |         Myalgia, muscle weakness        |
        | Symptoms |                       |         Tea/ cola-coloured urine        |
        |          +-----------------------+-----------------------------------------+
        |          |                       |                  Fever                  |
        |          |          Non-specific |                 Malaise                 |
        |          |                       |                 Anorexia                |
        |          |                       |             Nausea ±vomiting            |
        +----------+-----------------------+-----------------------------------------+
        |                                                                            |
        +----------------------------------------------------------------------------+
        NB. This will overflow an A4 paper. Increase/ decrease font-size depending upon desired print-size requirements.
        `;
    
        //const content = document.getElementById('tg-wrap').innerText;
    
        // Set additional metadata as an object
        const metadata = {
            type: 'text/plain',
            lastModified: new Date(),
            author: 'Jeremy Bailey' // Set the author here
        };
    
        // Create a new Blob with the text content
        const blob = new Blob([content], metadata);
    
        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);
    
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        anchor.href = url;
    
        // Set the filename for the download
        anchor.download = 'falls_and_rhabdomyolysis_condensed_aide-memoir.txt';
    
        // Programmatically trigger the anchor click event to start the download
        anchor.click();
    
        // Clean up the temporary URL object
        URL.revokeObjectURL(url);
    });
  });


  


