import gameImg from "@/assets/images/game.png";

const tttCode =
  "<!DOCTYPE html>\n" +
  '<html lang="en">\n' +
  "<head>\n" +
  '  <meta charset="UTF-8" />\n' +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
  "  <title>Tic-Tac-Toe</title>\n" +
  "  <style>\n" +
  "    :root { --bg:#0f1115; --card:#161a22; --text:#e6e8ee; --accent:#6ea8fe; --muted:#9aa4b2; }\n" +
  "    * { box-sizing:border-box; }\n" +
  '    body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji"; background:var(--bg); color:var(--text); display:grid; place-items:center; min-height:100vh; }\n' +
  "    .container { width:min(560px, 92vw); background:var(--card); border:1px solid #222838; border-radius:16px; padding:24px; box-shadow:0 10px 30px rgba(0,0,0,.35); }\n" +
  "    h1 { margin:0 0 8px; font-size:24px; }\n" +
  "    #status { color:var(--muted); margin-bottom:16px; }\n" +
  "    .board { display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; }\n" +
  "    .cell { width:100%; aspect-ratio:1/1; background:#0f1320; border:1px solid #2a3042; border-radius:12px; font-size:48px; font-weight:700; color:var(--text); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:transform .08s ease, background .2s ease; }\n" +
  "    .cell:hover { background:#13182a; transform:translateY(-1px); }\n" +
  "    .cell:disabled { cursor:default; opacity:.8; transform:none; }\n" +
  "    .actions { display:flex; gap:12px; justify-content:flex-end; margin-top:16px; }\n" +
  "    .btn { padding:10px 14px; border-radius:10px; border:1px solid #2a3042; background:#111627; color:var(--text); cursor:pointer; }\n" +
  "    .btn:hover { background:#151b2f; }\n" +
  "  </style>\n" +
  "</head>\n" +
  "<body>\n" +
  '  <div class="container">\n' +
  "    <h1>Tic-Tac-Toe</h1>\n" +
  '    <div id="status">Player X\\\'s turn</div>\n' +
  '    <div class="board" id="board">\n' +
  '      <button class="cell" data-index="0"></button>\n' +
  '      <button class="cell" data-index="1"></button>\n' +
  '      <button class="cell" data-index="2"></button>\n' +
  '      <button class="cell" data-index="3"></button>\n' +
  '      <button class="cell" data-index="4"></button>\n' +
  '      <button class="cell" data-index="5"></button>\n' +
  '      <button class="cell" data-index="6"></button>\n' +
  '      <button class="cell" data-index="7"></button>\n' +
  '      <button class="cell" data-index="8"></button>\n' +
  "    </div>\n" +
  '    <div class="actions">\n' +
  '      <button id="reset" class="btn">Reset</button>\n' +
  "    </div>\n" +
  "  </div>\n" +
  "  <script>\n" +
  "    (function () {\n" +
  '      var boardEl = document.getElementById("board");\n' +
  '      var statusEl = document.getElementById("status");\n' +
  '      var resetBtn = document.getElementById("reset");\n' +
  "      var board = Array(9).fill(null);\n" +
  '      var current = "X";\n' +
  "      var gameOver = false;\n" +
  "      var combos = [\n" +
  "        [0,1,2],[3,4,5],[6,7,8],\n" +
  "        [0,3,6],[1,4,7],[2,5,8],\n" +
  "        [0,4,8],[2,4,6]\n" +
  "      ];\n" +
  "      function getWinner () {\n" +
  "        for (var i=0;i<combos.length;i++) {\n" +
  "          var a = combos[i][0], b = combos[i][1], c = combos[i][2];\n" +
  "          if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];\n" +
  "        }\n" +
  "        return null;\n" +
  "      }\n" +
  "      function render () {\n" +
  '        var cells = boardEl.querySelectorAll(".cell");\n' +
  "        for (var i=0;i<cells.length;i++) {\n" +
  '          cells[i].textContent = board[i] ? board[i] : "";\n' +
  "          cells[i].disabled = !!board[i] || gameOver;\n" +
  "        }\n" +
  "        var w = getWinner();\n" +
  "        if (gameOver) {\n" +
  '          statusEl.textContent = w ? ("Player " + w + " wins!") : "Draw!";\n' +
  "        } else {\n" +
  '          statusEl.textContent = "Player " + current + "\\\'s turn";\n' +
  "        }\n" +
  "      }\n" +
  "      function handleClick (e) {\n" +
  "        var target = e.target;\n" +
  '        if (!target.classList.contains("cell")) return;\n' +
  '        var i = Number(target.getAttribute("data-index"));\n' +
  "        if (board[i] || gameOver) return;\n" +
  "        board[i] = current;\n" +
  "        var w = getWinner();\n" +
  "        if (w) { gameOver = true; }\n" +
  "        else if (board.every(function (x) { return x; })) { gameOver = true; }\n" +
  '        else { current = current === "X" ? "O" : "X"; }\n' +
  "        render();\n" +
  "      }\n" +
  "      function reset () {\n" +
  "        board = Array(9).fill(null);\n" +
  '        current = "X";\n' +
  "        gameOver = false;\n" +
  "        render();\n" +
  "      }\n" +
  '      boardEl.addEventListener("click", handleClick);\n' +
  '      resetBtn.addEventListener("click", reset);\n' +
  "      render();\n" +
  "    })();\n" +
  "  </script>\n" +
  "</body>\n" +
  "</html>\n";

const makeAssets = () => Array(10).fill(gameImg);

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Etiam semper et platea tincidunt nisl elementum egestas morbi. Ut ac vestibulum dictumst suspendisse tempus pellentesque ultricies facilisis. Et scelerisque ac vitae lectus lorem dui. Mi lectus malesuada amet pretium nulla. Feugiat tortor diam in condimentum. Vel dolor ac tincidunt mauris felis tempor nulla purus.";

const baseIntegrations = (overrides = {}) => ({
  readyCheck: { label: "Ready Check", note: "ready event", done: true },
  scoreReported: {
    label: "Score Reported",
    note: "game over event",
    done: true,
  },
  playAgain: {
    label: "Play again implemented",
    note: "play again handler",
    done: true,
  },
  wagering: {
    label: "Wagering implemented",
    note: "wager handler",
    done: false,
  },
  ...overrides,
});

export const mockGames = [
  {
    id: "g1",
    name: "Game 1",
    aiModel: "Gemini",
    integrate: { label: "Ready Check", done: true },
    details: { label: "Done", done: true },
    cover: gameImg,
    prompt: lorem,
    code: tttCode,
    integrations: baseIntegrations({}),
    assets: makeAssets(),
  },
  {
    id: "g2",
    name: "Game 2",
    aiModel: "GPT-4o",
    integrate: { label: "Ready Check", done: true },
    details: { label: "Done", done: true },
    cover: gameImg,
    prompt: lorem,
    code: tttCode,
    integrations: baseIntegrations(),
    assets: makeAssets(),
  },
  {
    id: "g3",
    name: "Game 3",
    aiModel: "Claude 3.5 Sonnet",
    integrate: { label: "Ready Check", done: true },
    details: { label: "Done", done: true },
    cover: gameImg,
    prompt: lorem,
    code: tttCode,
    integrations: baseIntegrations(),
    assets: makeAssets(),
  },
  {
    id: "g4",
    name: "Game 4",
    aiModel: "Llama 3 70B",
    integrate: { label: "Ready Check", done: true },
    details: { label: "Done", done: true },
    cover: gameImg,
    prompt: lorem,
    code: tttCode,
    assets: makeAssets(),
    integrations: baseIntegrations({
      scoreReported: {
        label: "Score Reported",
        note: "game over event",
        done: true,
      },
      playAgain: {
        label: "Play again implemented",
        note: "play again handler",
        done: true,
      },
    }),
  },
  {
    id: "g5",
    name: "Game 5",
    aiModel: "Mistral Large",
    integrate: { label: "Ready Check", done: true },
    details: { label: "Done", done: true },
    cover: gameImg,
    prompt: lorem,
    code: tttCode,
    assets: makeAssets(),
    integrations: baseIntegrations(),
  },
];
