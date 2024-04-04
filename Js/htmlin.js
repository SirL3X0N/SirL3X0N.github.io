Myhtml = `
<div class="board">
  <div class="supercell" id="BA1">
    <div class="subboard nontarget" id="A1">
      <div class="cell" id="0A1" onclick="Placement('0','A','1')"></div>
      <div class="cell" id="0A2" onclick="Placement('0','A','2')"></div>
      <div class="cell" id="0A3" onclick="Placement('0','A','3')"></div>
      <div class="cell" id="0B1" onclick="Placement('0','B','1')"></div>
      <div class="cell" id="0B2" onclick="Placement('0','B','2')"></div>
      <div class="cell" id="0B3" onclick="Placement('0','B','3')"></div>
      <div class="cell" id="0C1" onclick="Placement('0','C','1')"></div>
      <div class="cell" id="0C2" onclick="Placement('0','C','2')"></div>
      <div class="cell" id="0C3" onclick="Placement('0','C','3')"></div>
    </div>
  </div>    
  <div class="supercell" id="BA2">
    <div class="subboard nontarget" id="A2">
      <div class="cell" id="1A1" onclick="Placement('1','A','1')"></div>
      <div class="cell" id="1A2" onclick="Placement('1','A','2')"></div>
      <div class="cell" id="1A3" onclick="Placement('1','A','3')"></div>
      <div class="cell" id="1B1" onclick="Placement('1','B','1')"></div>
      <div class="cell" id="1B2" onclick="Placement('1','B','2')"></div>
      <div class="cell" id="1B3" onclick="Placement('1','B','3')"></div>
      <div class="cell" id="1C1" onclick="Placement('1','C','1')"></div>
      <div class="cell" id="1C2" onclick="Placement('1','C','2')"></div>
      <div class="cell" id="1C3" onclick="Placement('1','C','3')"></div>
    </div>
  </div>
  <div class="supercell" id="BA3">
    <div class="subboard nontarget" id="A3">
      <div class="cell" id="2A1" onclick="Placement('2','A','1')"></div>
      <div class="cell" id="2A2" onclick="Placement('2','A','2')"></div>
      <div class="cell" id="2A3" onclick="Placement('2','A','3')"></div>
      <div class="cell" id="2B1" onclick="Placement('2','B','1')"></div>
      <div class="cell" id="2B2" onclick="Placement('2','B','2')"></div>
      <div class="cell" id="2B3" onclick="Placement('2','B','3')"></div>
      <div class="cell" id="2C1" onclick="Placement('2','C','1')"></div>
      <div class="cell" id="2C2" onclick="Placement('2','C','2')"></div>
      <div class="cell" id="2C3" onclick="Placement('2','C','3')"></div>
    </div>
  </div>
  <div class="supercell" id="BB1">
    <div class="subboard nontarget" id="B1">
      <div class="cell" id="3A1" onclick="Placement('3','A','1')"></div>
      <div class="cell" id="3A2" onclick="Placement('3','A','2')"></div>
      <div class="cell" id="3A3" onclick="Placement('3','A','3')"></div>
      <div class="cell" id="3B1" onclick="Placement('3','B','1')"></div>
      <div class="cell" id="3B2" onclick="Placement('3','B','2')"></div>
      <div class="cell" id="3B3" onclick="Placement('3','B','3')"></div>
      <div class="cell" id="3C1" onclick="Placement('3','C','1')"></div>
      <div class="cell" id="3C2" onclick="Placement('3','C','2')"></div>
      <div class="cell" id="3C3" onclick="Placement('3','C','3')"></div>
    </div>
  </div>
  <div class="supercell" id="BB2">
    <div class="subboard nontarget" id="B2">
      <div class="cell" id="4A1" onclick="Placement('4','A','1')"></div>
      <div class="cell" id="4A2" onclick="Placement('4','A','2')"></div>
      <div class="cell" id="4A3" onclick="Placement('4','A','3')"></div>
      <div class="cell" id="4B1" onclick="Placement('4','B','1')"></div>
      <div class="cell" id="4B2" onclick="Placement('4','B','2')"></div>
      <div class="cell" id="4B3" onclick="Placement('4','B','3')"></div>
      <div class="cell" id="4C1" onclick="Placement('4','C','1')"></div>
      <div class="cell" id="4C2" onclick="Placement('4','C','2')"></div>
      <div class="cell" id="4C3" onclick="Placement('4','C','3')"></div>
    </div>
  </div>
  <div class="supercell" id="BB3">
    <div class="subboard nontarget" id="B3">
      <div class="cell" id="5A1" onclick="Placement('5','A','1')"></div>
      <div class="cell" id="5A2" onclick="Placement('5','A','2')"></div>
      <div class="cell" id="5A3" onclick="Placement('5','A','3')"></div>
      <div class="cell" id="5B1" onclick="Placement('5','B','1')"></div>
      <div class="cell" id="5B2" onclick="Placement('5','B','2')"></div>
      <div class="cell" id="5B3" onclick="Placement('5','B','3')"></div>
      <div class="cell" id="5C1" onclick="Placement('5','C','1')"></div>
      <div class="cell" id="5C2" onclick="Placement('5','C','2')"></div>
      <div class="cell" id="5C3" onclick="Placement('5','C','3')"></div>
    </div>
  </div>
      <div class="supercell" id="BC1">
    <div class="subboard nontarget" id="C1">
      <div class="cell" id="6A1" onclick="Placement('6','A','1')"></div>
      <div class="cell" id="6A2" onclick="Placement('6','A','2')"></div>
      <div class="cell" id="6A3" onclick="Placement('6','A','3')"></div>
      <div class="cell" id="6B1" onclick="Placement('6','B','1')"></div>
      <div class="cell" id="6B2" onclick="Placement('6','B','2')"></div>
      <div class="cell" id="6B3" onclick="Placement('6','B','3')"></div>
      <div class="cell" id="6C1" onclick="Placement('6','C','1')"></div>
      <div class="cell" id="6C2" onclick="Placement('6','C','2')"></div>
      <div class="cell" id="6C3" onclick="Placement('6','C','3')"></div>
    </div>
  </div>
  <div class="supercell" id="BC2">
    <div class="subboard nontarget" id="C2">
      <div class="cell" id="7A1" onclick="Placement('7','A','1')"></div>
      <div class="cell" id="7A2" onclick="Placement('7','A','2')"></div>
      <div class="cell" id="7A3" onclick="Placement('7','A','3')"></div>
      <div class="cell" id="7B1" onclick="Placement('7','B','1')"></div>
      <div class="cell" id="7B2" onclick="Placement('7','B','2')"></div>
      <div class="cell" id="7B3" onclick="Placement('7','B','3')"></div>
      <div class="cell" id="7C1" onclick="Placement('7','C','1')"></div>
      <div class="cell" id="7C2" onclick="Placement('7','C','2')"></div>
      <div class="cell" id="7C3" onclick="Placement('7','C','3')"></div>
    </div>
  </div>
  <div class="supercell" id="BC3">
    <div class="subboard nontarget" id="C3">
      <div class="cell" id="8A1" onclick="Placement('8','A','1')"></div>
      <div class="cell" id="8A2" onclick="Placement('8','A','2')"></div>
      <div class="cell" id="8A3" onclick="Placement('8','A','3')"></div>
      <div class="cell" id="8B1" onclick="Placement('8','B','1')"></div>
      <div class="cell" id="8B2" onclick="Placement('8','B','2')"></div>
      <div class="cell" id="8B3" onclick="Placement('8','B','3')"></div>
      <div class="cell" id="8C1" onclick="Placement('8','C','1')"></div>
      <div class="cell" id="8C2" onclick="Placement('8','C','2')"></div>
      <div class="cell" id="8C3" onclick="Placement('8','C','3')"></div>
    </div>
  </div>
</div>
<div class="screenfade going" id="screenfade"></div>
<div class="endcard going" id="endcard" onclick="newGame()"></div>
  `