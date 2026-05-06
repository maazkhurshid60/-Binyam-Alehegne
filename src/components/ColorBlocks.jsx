export default function ColorBlocks({ colors, flexes }) {
  return (
    <div className="cblocks">
      {colors.map((color, i) => (
        <div key={i} className="b" style={{ background: color, flex: flexes[i] }} />
      ))}
    </div>
  )
}
