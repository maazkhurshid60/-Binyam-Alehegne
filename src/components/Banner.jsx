export default function Banner({ isUS }) {
  return (
    <div className="banner" id="siteBanner">
      {isUS ? (
        <>🚀 Speed running high school? BoostAI solves any question instantly — <a href="#">Start free →</a></>
      ) : (
        <>🚀 New: Generate unlimited exam questions from any question — <a href="#">Try BoostAI free →</a></>
      )}
    </div>
  )
}
