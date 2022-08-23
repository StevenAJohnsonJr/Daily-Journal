import { getjournalEntries } from "./entries.js"
console.log(getjournalEntries())
const displayEntries = () => {
    const data = getjournalEntries();
    let html = "";
    for (let i = 0; i < data.length; i++) {
        html += `<div class="item"> 
     <p> ${data[i].concept}</p>
     <p>${data[i].date}</p>
     <p>${data[i].entry}</p>
     <p>${data[i].mood}</p>
     </div>`
    }
    console.log(html)
    document.getElementById("entries").innerHTML = html;




};

displayEntries()

/*const journalEntries = [
    {
        id: 1,
        date: "01/28/87",
        concept: "Birth of a King",
        entry:
            "Today the king was born in his rarest form. The very first day of the rest of his life begins, now.",
        mood: "Classified",
    },

    {
        id: 2,
        date: "06/12/91",
        concept: "I was four when Jordan won is first ring ",
        entry:
            "In 1991 Mike showed the world he was Mike. This was the first of six",
        mood: "This guy",
    },

    {
        id: 3,
        date: "09/05/94",
        concept:
            "I was eight when Jerry Rice played his first monday night football game",
        entry:
            "IIt was opening weekend of the 1994 season when Jerry Rice and the 49ers put a serious beating on the Los Angeles Raiders.",
        mood: "Oh yeah he's a star",
    },

    {
        id: 4,
        date: "05/28/06",
        concept: "I was 19 when Barry Bonds broke the home run record",
        entry:
            "Barrey Bonds hit a fastball that was traveling 90mph over center feild of the Colodrado Rockies.",
        mood: "Yup he just broke the record",
    },

    {
        id: 5,
        date: "02/16/89",
        concept:
            "I was two when Denzel Washington starred in Oscar winning role in Oscar winning move Glory.",
        entry:
            "Denzel got his first Oscar when he starred inn this blockbuster smash.  This role earned him more roles and more money",
        mood: "totatlly amazed",
    },
];*/
/*console.log(journalEntries);

for (const journalEntry of journalEntries) {
     console.log(journalEntry.id);
    console.log(journalEntry.concept);
    console.log(journalEntry.entry);
}

for (let journalOdd of journalEntries) {
    if (journalOdd.id % 2 !== 0) {
        console.log(journalOdd);
    }
}*/


/*for (let i = 0; i < journalEntries.length; i++) {


}*/

