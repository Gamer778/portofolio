let number = Math. floor(Math. random()*11)

let Quote = ""

if (number === 0) {
   Quote = "If, at first, you do not succeed, call it version 1.0. ― Khayri R.R. Woulfe"
} else if (number === 1) {
    Quote = "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk"
} else if ( number === 2) {
    Quote = "Code is like humor. When you have to explain it, it’s bad. – Cory House"
} else if ( number === 3) {
    Quote = "Clean code always looks like it was written by someone who cares. — Robert C. Martin"
} else if ( number === 4) {
    Quote = "Programmer: A machine that turns coffee into code. – Anonymous"
} else if ( number === 5) {
    Quote = "When I wrote this code, only God and I understood what I did. Now only God knows.  – Anonymous"
} else if ( number === 6) {
    Quote = "I’m not a great programmer; I’m just a good programmer with great habits. ― Kent Beck"
} else if ( number === 7) {
    Quote = "Software comes from heaven when you have good hardware. – Ken Olsen"
} else if ( number === 8) {
    Quote = "Computers are fast; developers keep them slow. – Anonymous"
} else if ( number === 9) {
    Quote = "Experience is the name everyone gives to their mistakes. – Oscar Wilde"
} else {
    Quote = "It’s not a bug; it’s an undocumented feature. ― Anonymous"
}

console.log(Quote)