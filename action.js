let number = Math. floor(Math. random()*11)

let Quote = ""

let fact = ""

if (number === 0) {
   Quote = "If, at first, you do not succeed, call it version 1.0. -  Khayri R.R. Woulfe "
   fact = "Khayri RR Woulfe is a Filipino blogger who writes on the popular and controversial teletronic Get Real Philippines and Rainbow Khrayons."
} else if (number === 1) {
    Quote = "Quality is a product of a conflict between programmers and testers. - Yegor Bugayenk"
    fact = "He was a founder and CEO of Zerocracy, a software engineering and management platform with an absolutely unique methodology called XDSD."
} else if ( number === 2) {
    Quote = "Code is like humor. When you have to explain it, it's bad. - Cory House"
    fact = "Cory House is a React and JavaScript specialist. Cory is principal consultant at reactjsconsulting.com. He is a Pluralsight author, a Microsoft MVP, and an international speaker."
} else if ( number === 3) {
    Quote = "Clean code always looks like it was written by someone who cares. - Robert C. Martin"
    fact = "In 1991, Martin founded Object Mentor, now defunct, which provided instructor-led training on the extreme programming methodology."
} else if ( number === 4) {
    Quote = "Make it work, make it right, make it fast. - Kent Beck"
    fact = "Beck pioneered software design patterns, as well as the commercial application of Smalltalk. He wrote the SUnit unit testing framework for Smalltalk."
} else if ( number === 5) {
    Quote = "There is always one more bug to fix. - Ellen Ullman"
    fact = " Ullman earned a B.A. in English at Cornell University in the early 1970s. She began working professionally in 1978 as a programmer of electronic data interchange applications."
} else if ( number === 6) {
    Quote = "I'm not a great programmer; I'm just a good programmer with great habits. - Kent Beck"
    fact = "Beck pioneered software design patterns, as well as the commercial application of Smalltalk. He wrote the SUnit unit testing framework for Smalltalk."
} else if ( number === 7) {
    Quote = "Software comes from heaven when you have good hardware. - Ken Olsen"
    fact = "Olsen was forced to retire from DEC, stepping down as president in 1992. He subsequently became the chairman of Advanced Modular Solutions."
} else if ( number === 8) {
    Quote = "Of course, bad code can be cleaned up. But it's very expensive. - Robert C. Martin"
    fact = "In 1991, Martin founded Object Mentor, now defunct, which provided instructor-led training on the extreme programming methodology."
} else if ( number === 9) {
    Quote = "Experience is the name everyone gives to their mistakes. - Oscar Wilde"
    fact = "He was an Irish poet and playwright. After writing in different forms throughout the 1880s, he became one of the most popular playwrights in London in the early 1890s."
} else {
    Quote = "Confusion is part of programming. - Felienne Hermans"
    fact = "Hermans produced several Massive open online courses (MOOCs) on edX, with topics including programming in Scratch for teachers and children."
}

document.getElementById("quote").textContent = Quote;
document.getElementById("fact").textContent = fact