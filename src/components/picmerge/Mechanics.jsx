import React from "react";

/*
  Playable versions of the five image-completion mechanics from the PicMerge thesis,
  plus the merge board used in the case study's hero.

  Every mechanic works with taps (tap a piece, then tap where it should go), so it
  works the same with a mouse, a finger, or a keyboard (Tab + Enter).
*/

const ACCENT = "#E8854A";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1A15]";

// The six coloured, numbered pieces from the thesis sketches. Correct layout: 1 2 3 / 4 5 6.
const COLORS = ["#B0254B", "#EC772F", "#EAC02E", "#4547A8", "#4570A8", "#569270"];
const ROWS = 2;
const COLS = 3;
const COUNT = ROWS * COLS;

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Merge logic (shared by the hero board and the merge demo) ───────────────
// `order[pos]` is the piece sitting at board position `pos`.
// Two pieces are merged when they sit next to each other the same way they sit
// in the picture, wherever that is on the board.

function mergedRight(order, pos, cols) {
  const c = pos % cols;
  if (c === cols - 1) return false;
  const a = order[pos], b = order[pos + 1];
  return b === a + 1 && a % cols !== cols - 1;
}
function mergedDown(order, pos, cols, rows) {
  if (Math.floor(pos / cols) === rows - 1) return false;
  return order[pos + cols] === order[pos] + cols;
}

// Groups of merged pieces, as a list of position arrays.
function findGroups(order, cols, rows) {
  const parent = order.map((_, i) => i);
  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const join = (a, b) => { parent[find(a)] = find(b); };
  order.forEach((_, p) => {
    if (mergedRight(order, p, cols)) join(p, p + 1);
    if (mergedDown(order, p, cols, rows)) join(p, p + cols);
  });
  const groups = {};
  order.forEach((_, p) => { (groups[find(p)] ||= []).push(p); });
  return Object.values(groups);
}

// Move the group containing `from` so that `from` lands on `to`. Pieces in the way
// slide into the spaces the group leaves behind. Returns null if it won't fit.
function moveGroup(order, from, to, cols, rows) {
  const group = findGroups(order, cols, rows).find((g) => g.includes(from));
  const dr = Math.floor(to / cols) - Math.floor(from / cols);
  const dc = (to % cols) - (from % cols);
  const target = group.map((p) => {
    const r = Math.floor(p / cols) + dr, c = (p % cols) + dc;
    return r < 0 || r >= rows || c < 0 || c >= cols ? -1 : r * cols + c;
  });
  if (target.includes(-1)) return null;
  const next = [...order];
  const displaced = target.filter((p) => !group.includes(p)).sort((a, b) => a - b);
  const vacated = group.filter((p) => !target.includes(p)).sort((a, b) => a - b);
  group.forEach((p, i) => { next[target[i]] = order[p]; });
  displaced.forEach((p, i) => { next[vacated[i]] = order[p]; });
  return next;
}

function scrambled(count, cols, rows) {
  let order;
  do {
    order = shuffle([...Array(count).keys()]);
  } while (findGroups(order, cols, rows).length < count - 1); // start with at most one merge
  return order;
}

// One board for both the hero (photo) and the demo (numbered colours).
export function MergeBoard({ image, rows = ROWS, cols = COLS, onMove, label = "Merge puzzle" }) {
  const count = rows * cols;
  const [order, setOrder] = React.useState(() => scrambled(count, cols, rows));
  const [picked, setPicked] = React.useState(null);
  const [ratio, setRatio] = React.useState(image ? 1 : cols / rows);

  React.useEffect(() => {
    if (!image) return;
    const img = new Image();
    img.onload = () => setRatio(img.naturalWidth / img.naturalHeight || 1);
    img.src = image;
  }, [image]);

  const groups = findGroups(order, cols, rows);
  const groupOf = (p) => groups.find((g) => g.includes(p));
  const solved = groups.length === 1;

  function tap(p) {
    if (solved) return;
    if (picked === null) return setPicked(p);
    if (groupOf(picked).includes(p)) return setPicked(null);
    const next = moveGroup(order, picked, p, cols, rows);
    if (next) { setOrder(next); onMove?.(); }
    setPicked(null);
  }

  const gap = 3, r = 6;
  const pickedGroup = picked === null ? [] : groupOf(picked);

  return (
    <div>
      <div className="grid w-full select-none" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, aspectRatio: ratio }} role="group" aria-label={label}>
        {order.map((piece, pos) => {
          const right = mergedRight(order, pos, cols);
          const left = pos % cols > 0 && mergedRight(order, pos - 1, cols);
          const down = mergedDown(order, pos, cols, rows);
          const up = pos >= cols && mergedDown(order, pos - cols, cols, rows);
          const isPicked = pickedGroup.includes(pos);
          const art = image
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${((piece % cols) / (cols - 1)) * 100}% ${(Math.floor(piece / cols) / (rows - 1)) * 100}%`,
                backgroundColor: "#D9D0C2",
              }
            : { background: COLORS[piece % COLORS.length] };
          return (
            <button key={pos} type="button" onClick={() => tap(pos)} aria-pressed={isPicked}
              aria-label={`Piece ${piece + 1}, at spot ${pos + 1}${isPicked ? ", picked up" : ""}`}
              className={`relative ${FOCUS} rounded-md`}>
              <span
                className="absolute flex items-center justify-center transition-all duration-300"
                style={{
                  top: up ? 0 : gap, bottom: down ? 0 : gap, left: left ? 0 : gap, right: right ? 0 : gap,
                  borderTopLeftRadius: up || left ? 0 : r, borderTopRightRadius: up || right ? 0 : r,
                  borderBottomLeftRadius: down || left ? 0 : r, borderBottomRightRadius: down || right ? 0 : r,
                  ...art,
                  outline: isPicked ? `3px solid ${ACCENT}` : "none",
                  outlineOffset: -3,
                  transform: isPicked ? "scale(0.96)" : "none",
                  boxShadow: up || down || left || right ? "none" : "0 1px 3px rgba(0,0,0,0.25)",
                }}
              >
                {!image && <span className="text-white font-bold text-sm">{piece + 1}</span>}
              </span>
            </button>
          );
        })}
      </div>
      <Status solved={solved} onReset={() => { setOrder(scrambled(count, cols, rows)); setPicked(null); }}
        hint={image ? "Tap a card, then where it should go. Right neighbours stick together and move as one." : "Swap cards. Right neighbours stick and move together."}
        done={image ? "That's merge. In the game, every finished puzzle flips a card toward a bigger picture." : "Done."} />
    </div>
  );
}

function Status({ solved, hint, done, onReset }) {
  return (
    <div className="mt-2 flex items-start justify-between gap-2 text-xs text-[var(--muted)] leading-snug">
      <span aria-live="polite">{solved ? done : hint}</span>
      <button type="button" onClick={onReset} aria-label="Shuffle again" title="Shuffle again"
        className={`shrink-0 pm-mono px-2 py-0.5 border border-[var(--rule)] hover:border-[var(--ink)] rounded-sm ${FOCUS}`}>
        ↺
      </button>
    </div>
  );
}

function Piece({ n, picked, small, className = "" }) {
  return (
    <span
      className={`flex items-center justify-center rounded-md text-white font-bold transition-transform ${small ? "text-xs" : "text-sm"} ${className}`}
      style={{ background: COLORS[n], outline: picked ? `3px solid ${ACCENT}` : "none", outlineOffset: -3, transform: picked ? "scale(0.94)" : "none" }}
    >
      {n + 1}
    </span>
  );
}

// ─── Jigsaw-shaped pieces (Conventional Jigsaw only) ─────────────────────────
// Each inside edge has a tab on one side and a matching blank on the other.
// H[r][c]: edge between (r,c) and (r,c+1); V[r][c]: edge between (r,c) and (r+1,c).
// 1 = the first piece has the tab, -1 = the second piece has it.
const H = [[1, -1], [-1, 1]];
const V = [[1, -1, 1]];
const PW = 100, PH = 75, PAD = 25; // piece box (4:3 like the slots) and room for tabs

function pieceEdges(n) {
  const r = Math.floor(n / COLS), c = n % COLS;
  return {
    top: r > 0 ? -V[r - 1][c] : 0,
    right: c < COLS - 1 ? H[r][c] : 0,
    bottom: r < ROWS - 1 ? V[r][c] : 0,
    left: c > 0 ? -H[r][c - 1] : 0,
  };
}

// One side of a piece, drawn clockwise from (x0,y0) to (x1,y1).
// sign 1 = tab bulging out, -1 = blank cut in, 0 = flat.
function edgePath(x0, y0, x1, y1, sign) {
  if (!sign) return ` L${x1} ${y1}`;
  const len = Math.hypot(x1 - x0, y1 - y0);
  const dx = (x1 - x0) / len, dy = (y1 - y0) / len;
  const ox = dy, oy = -dx; // outward, for a clockwise path in screen coordinates
  const h = 30 * sign; // bulge size, the same on every side
  const at = (t, n) => `${(x0 + dx * len * t + ox * n).toFixed(1)} ${(y0 + dy * len * t + oy * n).toFixed(1)}`;
  const neckA = 0.5 - 18 / len, neckB = 0.5 + 18 / len;
  const wideA = 0.5 - 34 / len, wideB = 0.5 + 34 / len;
  return ` L${at(neckA, 0)} C${at(wideA, h)} ${at(wideB, h)} ${at(neckB, 0)} L${x1} ${y1}`;
}

function jigsawPath(n) {
  const e = pieceEdges(n);
  return `M0 0${edgePath(0, 0, PW, 0, e.top)}${edgePath(PW, 0, PW, PH, e.right)}${edgePath(PW, PH, 0, PH, e.bottom)}${edgePath(0, PH, 0, 0, e.left)} Z`;
}

// On the board the shape spills past its slot so tabs reach into the neighbours;
// in the tray it's scaled down to fit its button.
function JigsawPiece({ n, picked, inTray }) {
  const box = inTray
    ? { width: "100%", height: "100%" }
    : { position: "absolute", width: `${((PW + 2 * PAD) / PW) * 100}%`, height: `${((PH + 2 * PAD) / PH) * 100}%`, left: `${(-PAD / PW) * 100}%`, top: `${(-PAD / PH) * 100}%` };
  return (
    <svg viewBox={`${-PAD} ${-PAD} ${PW + 2 * PAD} ${PH + 2 * PAD}`} style={{ ...box, overflow: "visible", pointerEvents: "none" }} aria-hidden="true">
      <path d={jigsawPath(n)} fill={COLORS[n]} stroke={picked ? ACCENT : "rgba(30,26,21,0.25)"} strokeWidth={picked ? 6 : 1.5} strokeLinejoin="round" />
      <text x={PW / 2} y={PH / 2} textAnchor="middle" dominantBaseline="central" fill="#fff" fontWeight="700" fontSize={inTray ? 30 : 22}>{n + 1}</text>
    </svg>
  );
}

// ─── Shared by layer reveal and ordered placement: a tray and a board ────────
// Conventional Jigsaw: put any piece in any slot and move it until it's right.
// Jigsaw Without Edges: a piece only fits in its own slot.
// Prefixed Pieces: same, but some pieces start already in place.
function TrayAndBoard({ prefixed = [], free = false }) {
  const fresh = () => {
    const board = Array(COUNT).fill(null);
    prefixed.forEach((p) => { board[p] = p; });
    return { tray: shuffle([...Array(COUNT).keys()].filter((p) => !prefixed.includes(p))), board };
  };
  const strict = !free;
  const [state, setState] = React.useState(fresh);
  const [picked, setPicked] = React.useState(null); // { from: "tray"|"board", index }
  const [miss, setMiss] = React.useState(null);
  const solved = state.board.every((p, i) => p === i);

  function pickTray(i) { if (!solved) setPicked({ from: "tray", index: i }); }
  function tapSlot(slot) {
    if (solved) return;
    const occupant = state.board[slot];
    if (!picked) { if (!strict && occupant !== null) setPicked({ from: "board", index: slot }); return; }
    const piece = picked.from === "tray" ? state.tray[picked.index] : state.board[picked.index];
    if (strict && piece !== slot) { setMiss(slot); setTimeout(() => setMiss(null), 400); setPicked(null); return; }
    const tray = [...state.tray], board = [...state.board];
    if (picked.from === "tray") tray.splice(picked.index, 1); else board[picked.index] = null;
    if (occupant !== null) {
      if (picked.from === "board") board[picked.index] = occupant; else tray.push(occupant);
    }
    board[slot] = piece;
    setState({ tray, board });
    setPicked(null);
  }

  return (
    <div>
      <div className={`grid rounded-md bg-[#E9E2D5] p-1 ${free ? "gap-0" : "gap-1"}`} style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }} role="group" aria-label="Board">
        {state.board.map((piece, slot) => (
          <button key={slot} type="button" onClick={() => tapSlot(slot)} className={`relative aspect-[4/3] rounded-md ${FOCUS}`}
            aria-label={piece === null ? `Empty slot ${slot + 1}` : `Slot ${slot + 1}, piece ${piece + 1}`}
            style={{ animation: miss === slot ? "pm-shake 0.3s" : "none" }}>
            {piece !== null && free ? (
              <JigsawPiece n={piece} picked={picked?.from === "board" && picked.index === slot} />
            ) : piece !== null ? (
              <Piece n={piece} picked={picked?.from === "board" && picked.index === slot} className="w-full h-full" />
            ) : (
              <span className={`flex items-center justify-center w-full h-full rounded-md border border-dashed ${miss === slot ? "border-[#B23A2E]" : "border-[#CFC5B5]"}`} />
            )}
          </button>
        ))}
      </div>
      <div className="mt-1.5 flex gap-1 min-h-[2.5rem] rounded-md bg-[#DCD3C4] p-1" role="group" aria-label="Tray">
        {state.tray.map((piece, i) => (
          <button key={piece} type="button" onClick={() => pickTray(i)} className={`${free ? "flex-1 min-w-0 max-w-12 h-10" : "w-8 h-8 shrink-0"} rounded-md ${FOCUS}`} aria-label={`Piece ${piece + 1} in the tray`}>
            {free
              ? <JigsawPiece n={piece} inTray picked={picked?.from === "tray" && picked.index === i} />
              : <Piece n={piece} small picked={picked?.from === "tray" && picked.index === i} className="w-full h-full" />}
          </button>
        ))}
      </div>
      <Status solved={solved} onReset={() => { setState(fresh()); setPicked(null); }}
        hint={free ? "Place pieces anywhere, then move them until they're right." : prefixed.length ? "Two pieces start in place. Fill in the rest." : "Each piece only fits in its own spot."}
        done="Done." />
    </div>
  );
}

// ─── 4. Region completion: a sliding puzzle ──────────────────────────────────
function slideShuffle() {
  let board = [0, 1, 2, 3, 4, null]; // the last spot starts empty
  for (let i = 0; i < 60; i++) {
    const e = board.indexOf(null);
    const options = [e - 1, e + 1, e - COLS, e + COLS].filter((p) =>
      p >= 0 && p < COUNT && (Math.abs(p - e) === COLS || Math.floor(p / COLS) === Math.floor(e / COLS)));
    const p = options[Math.floor(Math.random() * options.length)];
    [board[e], board[p]] = [board[p], board[e]];
  }
  return board.every((v, i) => v === (i < 5 ? i : null)) ? slideShuffle() : board;
}

function RegionCompletion() {
  const [board, setBoard] = React.useState(slideShuffle);
  const empty = board.indexOf(null);
  const solved = board.every((v, i) => v === (i < 5 ? i : null));
  const canSlide = (p) => Math.abs(p - empty) === COLS || (Math.abs(p - empty) === 1 && Math.floor(p / COLS) === Math.floor(empty / COLS));

  function tap(p) {
    if (solved || !canSlide(p)) return;
    const next = [...board];
    [next[empty], next[p]] = [next[p], next[empty]];
    setBoard(next);
  }

  return (
    <div>
      <div className="grid gap-1 rounded-md bg-[#E9E2D5] p-1" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }} role="group" aria-label="Sliding puzzle">
        {board.map((piece, p) => (
          <button key={p} type="button" onClick={() => tap(p)} disabled={piece === null} className={`aspect-[4/3] rounded-md ${FOCUS}`}
            aria-label={piece === null ? "Empty space" : `Piece ${piece + 1}${canSlide(p) ? ", can slide" : ""}`}>
            {piece !== null ? <Piece n={piece} className="w-full h-full" /> : <span className="block w-full h-full rounded-md border border-dashed border-[#CFC5B5]" />}
          </button>
        ))}
      </div>
      <Status solved={solved} onReset={() => setBoard(slideShuffle())}
        hint="Slide pieces into the empty space."
        done="Done." />
    </div>
  );
}

// ─── All five, side by side ───────────────────────────────────────────────────
const MECHANIC_DEMOS = [
  { id: "merge", name: "Piece Merging", paper: "#4 (tied)", digital: "#1", Demo: () => <MergeBoard label="Piece Merging demo" />, picked: true },
  { id: "jigsaw", name: "Conventional Jigsaw", paper: "#1", digital: "#4", Demo: () => <TrayAndBoard free /> },
  { id: "edges", name: "Jigsaw Without Edges", paper: "#2–3", digital: "#5", Demo: () => <TrayAndBoard /> },
  { id: "prefixed", name: "Prefixed Pieces", paper: "#2–3", digital: "#3", Demo: () => <TrayAndBoard prefixed={[0, 5]} /> },
  { id: "sliding", name: "Sliding Puzzle", paper: "#4 (tied)", digital: "#2", Demo: RegionCompletion },
];

export function MechanicPlayground() {
  return (
    <div>
      <style>{"@keyframes pm-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}"}</style>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {MECHANIC_DEMOS.map(({ id, name, paper, digital, Demo, picked }) => (
          <li key={id} className={`rounded-md p-3 ${picked ? "bg-[var(--accent-soft)] ring-1 ring-[var(--accent)]" : "bg-[var(--card)] border border-[var(--rule)]"}`}>
            <p className="text-sm font-semibold leading-tight">{name}</p>
            <p className="pm-mono text-[0.7rem] text-[var(--muted)] mt-0.5 mb-2">paper {paper} · digital {digital}</p>
            <Demo />
          </li>
        ))}
      </ul>
    </div>
  );
}
