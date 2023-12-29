"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5692],{1885:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const i=e=>{let{children:t}=e;const a=()=>n.Children.map(t,(e=>{const t=void 0===e.props.className?"literate-coding":`${e.props.className} literate-coding`;return n.cloneElement(e,{className:t})}));return n.createElement(a,null)}},7693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(7462),i=(a(7294),a(3905)),r=a(6340),l=a(1885);const s={},o="Day 4: Scratchcards",u={unversionedId:"2023/puzzles/day04",id:"2023/puzzles/day04",title:"Day 4: Scratchcards",description:"by @shardulc",source:"@site/target/mdoc/2023/puzzles/day04.md",sourceDirName:"2023/puzzles",slug:"/2023/puzzles/day04",permalink:"/scala-advent-of-code/2023/puzzles/day04",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2023/puzzles/day04.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 3: Gear Ratios",permalink:"/scala-advent-of-code/2023/puzzles/day03"},next:{title:"Day 5: If You Give A Seed A Fertilizer",permalink:"/scala-advent-of-code/2023/puzzles/day05"}},c={},m=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Solution summary",id:"solution-summary",level:2},{value:"Count number of winning numbers",id:"count-number-of-winning-numbers",level:3},{value:"Part 1",id:"part-1",level:3},{value:"Part 2",id:"part-2",level:3},{value:"Final code",id:"final-code",level:3},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1",id:"part-1-1",level:4},{value:"Part 2",id:"part-2-1",level:4},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],p={toc:m};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-4-scratchcards"},"Day 4: Scratchcards"),(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shardulc"},"@shardulc")),(0,i.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2023/day/4"},"https://adventofcode.com/2023/day/4")),(0,i.kt)("h2",{id:"solution-summary"},"Solution summary"),(0,i.kt)("p",null,"First, we note that both parts rely on counting how many winning numbers there\nare on a card, so we write the helper function ",(0,i.kt)("inlineCode",{parentName:"p"},"countWinning"),". Then, part\xa01\nconverts each card's winning numbers count to a number of points and adds them\nup. Part\xa02 cannot be expressed as a map over the winning counts because the\nvalue for a card possibly depends on the cards before it. Thus, we write it as a\nfold, where the accumulator tracks: (1)\xa0the number of cards won up to the\ncurrent card; and (2)\xa0the number of copies of cards to be processed, i.e.\xa0their\n",(0,i.kt)("em",{parentName:"p"},"multiplicities"),", for as many of the following cards as needed."),(0,i.kt)("h3",{id:"count-number-of-winning-numbers"},"Count number of winning numbers"),(0,i.kt)(l.Z,{mdxType:"Literate"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def countWinning(card: String): Int =\n")),(0,i.kt)("p",null,"Most of this function is string manipulation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  val numbers = card\n    .substring(card.indexOf(":") + 1)   // discard "Card X:"\n    .split(" ")\n    .filterNot(_.isEmpty())\n  val (winningNumberStrs, givenNumberStrs) = numbers.span(_ != "|")\n  val winningNumbers = winningNumberStrs.map(_.toInt).toSet\n  // drop the initial "|"\n  val givenNumbers = givenNumberStrs.drop(1).map(_.toInt).toSet\n')),(0,i.kt)("p",null,"Although this is not specified in the puzzle description, it seems like a number\ncan appear at most once in the list of winning numbers as well as in the given\nnumbers, so it is valid to perform ",(0,i.kt)("inlineCode",{parentName:"p"},"toSet")," and the final counting step, which is\nwhat we return:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  winningNumbers.intersect(givenNumbers).size\nend countWinning\n"))),(0,i.kt)("p",null,"Lastly, the standard library conveniently gives us an iterator over lines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def winningCounts(input: String): Iterator[Int] =\n  input.linesIterator.map(countWinning)\nend winningCounts\n")),(0,i.kt)("h3",{id:"part-1"},"Part 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): String =\n  winningCounts(input)\n    .map(winning => if winning > 0 then Math.pow(2, winning - 1).toInt else 0)\n    .sum.toString()\nend part1\n")),(0,i.kt)("h3",{id:"part-2"},"Part 2"),(0,i.kt)(l.Z,{mdxType:"Literate"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part2(input: String): String =\n  winningCounts(input)\n")),(0,i.kt)("p",null,"The key insight here is that when we process one card, the cards we win (if any)\nare always at the immediately following indices. So instead of keeping track of\n",(0,i.kt)("em",{parentName:"p"},"absolute"),' indices (e.g.\xa0"3 copies of card 5"), we only keep track of how many\ncards we\'ve won ',(0,i.kt)("em",{parentName:"p"},"relative to the current index"),' (e.g.\xa0"3 copies of the\nnext-to-next card"). This is the ',(0,i.kt)("inlineCode",{parentName:"p"},"Vector")," in the accumulator of our fold."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"    .foldLeft((0, Vector(1))){ case ((numCards, multiplicities), winning) =>\n")),(0,i.kt)("p",null,"In each iteration, we remove its first element, i.e.\xa0the multiplicity of the\ncurrent card..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"      val thisMult = multiplicities(0)\n")),(0,i.kt)("p",null,"... and carry forward the rest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"      val restMult = multiplicities\n        .drop(1)\n")),(0,i.kt)("p",null,"If we just won no new cards, then we extend the vector by a single ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," for the 1\noriginal copy of the next card to be processed in the next iteration. Else, we\nextend the vector by as many elements as required to keep track of the cards we\njust won."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"        .padTo(Math.max(1, winning), 1)\n")),(0,i.kt)("p",null,"Remember that we win a copy of a later card for every copy we'd already won of\nthe current card."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"        .zipWithIndex\n        .map((mult, idx) => if idx < winning then mult + thisMult else mult)\n      (numCards + thisMult, restMult)\n    }\n    ._1.toString()\nend part2\n"))),(0,i.kt)("p",null,"Throughout the iteration, the vector satisfies the following invariants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It has at least one element."),(0,i.kt)("li",{parentName:"ul"},"All its elements are positive."),(0,i.kt)("li",{parentName:"ul"},"When processing a card, the first element is the final multiplicity of that\ncard. (It is summed up in ",(0,i.kt)("inlineCode",{parentName:"li"},"numCards")," in the accumulator.)")),(0,i.kt)("p",null,"Why track by relative index instead of absolute?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We don't have to parse or store the card numbers."),(0,i.kt)("li",{parentName:"ul"},"We can discard information as soon as it is no longer needed, and keep only\nlimited information about the future, in this case bounded by the maximum\npossible number of winning numbers."),(0,i.kt)("li",{parentName:"ul"},"(Personal opinion) It makes for a nicer, purely functional solution!")),(0,i.kt)("h3",{id:"final-code"},"Final code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def countWinning(card: String): Int =\n  val numbers = card\n    .substring(card.indexOf(":") + 1)   // discard "Card X:"\n    .split(" ")\n    .filterNot(_.isEmpty())\n  val (winningNumberStrs, givenNumberStrs) = numbers.span(_ != "|")\n  val winningNumbers = winningNumberStrs.map(_.toInt).toSet\n  // drop the initial "|"\n  val givenNumbers = givenNumberStrs.drop(1).map(_.toInt).toSet\n  winningNumbers.intersect(givenNumbers).size\nend countWinning\n\ndef winningCounts(input: String): Iterator[Int] =\n  input.linesIterator.map(countWinning)\nend winningCounts\n\ndef part1(input: String): String =\n  winningCounts(input)\n    .map(winning => if winning > 0 then Math.pow(2, winning - 1).toInt else 0)\n    .sum.toString()\nend part1\n\ndef part2(input: String): String =\n  winningCounts(input)\n    // we only track the multiplicities of the next few cards as needed, not all of them;\n    // and the first element always exists, and corresponds to the current card;\n    // and the elements are always positive (because there is at least 1 original copy of each card)\n    .foldLeft((0, Vector(1))){ case ((numCards, multiplicities), winning) =>\n      val thisMult = multiplicities(0)\n      val restMult = multiplicities\n        .drop(1)\n        // these are the original copies of the next few cards\n        .padTo(Math.max(1, winning), 1)\n        .zipWithIndex\n        // these are the extra copies we just won\n        .map((mult, idx) => if idx < winning then mult + thisMult else mult)\n      (numCards + thisMult, restMult)\n    }\n    ._1.toString()\nend part2\n')),(0,i.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,i.kt)("h4",{id:"part-1-1"},"Part 1"),(0,i.kt)(r.Z,{puzzle:"day04-part1",year:"2023",mdxType:"Solver"}),(0,i.kt)("h4",{id:"part-2-1"},"Part 2"),(0,i.kt)(r.Z,{puzzle:"day04-part2",year:"2023",mdxType:"Solver"}),(0,i.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spamegg1/advent-of-code-2023-scala/blob/solutions/04.worksheet.sc#L116"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spamegg1"},"Spamegg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pkarthick/AdventOfCode/blob/master/2023/scala/src/main/scala/day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pkarthick"},"Karthick Pachiappan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/YannMoisan/advent-of-code/blob/master/2023/src/main/scala/Day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YannMoisan"},"Yann Moisan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prinsniels/AdventOfCode2023/blob/main/src/main/scala/solutions/day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prinsniels"},"Niels Prins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Philippus/adventofcode/blob/main/src/main/scala/adventofcode2023/day4/Day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/philippus"},"Philippus Baalman")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jnclt/adventofcode2023/blob/main/day04/scratchcards.sc"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jnclt"},"jnclt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/guycastle/advent_of_code_2023/blob/main/src/main/scala/days/day04/DayFour.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/guycastle"},"Guillaume Vandecasteele")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mpilquist/aoc/blob/main/2023/day4.sc"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mpilquist"},"Michael Pilquist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ChidiRnweke/AOC23/blob/main/src/main/scala/day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ChidiRnweke"},"Chidi Nweke")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.dtth.ch/nki/aoc2023/src/branch/master/Day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/natsukagami"},"natsukagami")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kbielefe/advent-of-code/blob/master/2023/src/main/scala/4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kbielefe"},"Karl Bielefeldt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrigoriiBerezin/advent_code_2023/tree/master/task04/src/main/scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrigoriiBerezin"},"g.berezin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alexandru/advent-of-code/blob/main/scala3/2023/src/main/scala/day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alexandru/"},"Alexandru Nedelcu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lenguyenthanh/aoc-2023/blob/main/Day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lenguyenthanh"},"Thanh Le")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/CJSmith-0141/11981323258a79e497539639763777e4"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CJSmith-0141/"},"CJ Smith")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bishabosha/advent-of-code-2023/blob/main/2023-day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bishabosha"},"Jamie Thompson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SethTisue/adventofcode/blob/main/2023/src/test/scala/Day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SethTisue/"},"Seth Tisue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/marconilanna/advent-of-code/blob/master/2023/Day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/marconilanna"},"Marconi Lanna")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jannyboy11/AdventOfCode2023/blob/master/src/main/scala/day04/Day04.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/JanBoerman95"},"Jan Boerman"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wbillingsley/advent-of-code-2023-scala/blob/star8b/solver.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wbillingsley"},"Will Billingsley")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bxiang/advent-of-code-2023/blob/main/src/main/scala/com/aoc/Day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bxiang/"},"Brian Xiang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/joeledwards/advent-of-code/blob/master/2023/src/main/scala/com/buzuli/advent/days/day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/joeledwards/"},"Joel Edwards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xRuiAlves/advent-of-code-2023/blob/main/Day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/xRuiAlves/"},"Rui Alves"))),(0,i.kt)("p",null,"Share your solution to the Scala community by editing this page."))}h.isMDXComponent=!0}}]);