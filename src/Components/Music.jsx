import React from 'react'

const Music = () => {
  return (
    <section className='musicSection' id="music">
      <iframe style={{borderRadius:"12px",width: "80%",height:"10vh", marginRight: "5vw"}} src="https://open.spotify.com/embed/playlist/0l3UmSoBmnJ9r8EHqiLZBx?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>
  )
}

export default Music