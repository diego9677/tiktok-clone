import { VideoPlayer } from "./components/VideoPlayer";

function App() {

  return (
    <main className="h-screen w-full grid place-content-center bg-neutral-800">
      <section className="w-[375px] block" style={{ aspectRatio: '9/16' }}>
        <VideoPlayer />
      </section>
    </main>
  )
}

export default App
