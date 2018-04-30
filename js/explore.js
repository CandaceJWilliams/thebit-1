function changeColors(div) {
  console.log(div.id)
  colors = ["#ed559c","#E2416F","#229EE0", "#1A6CA3","#f8ae6b"]
  div.style.backgroundColor = colors[Math.floor(Math.random()*3)]
}

// 