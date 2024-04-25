import React from 'react'

const Characters = () => {
  return (
    <section className=''>
      <div className='flex justify-between items-center my-10'>
        <div className='w-1/2 '>
          <h3 className='character-head'>The Goddess Of Everything</h3>
          <p className='text-2xl font-bold font-comic text-brand my-5 '>The Goddess of Everything Else is a whirlwind of vibrant chaos. Forget the neatly categorized and predictable aspects of life – she revels in the messy, unexpected corners. From the uncontrollable bursts of laughter that erupt during board games to the quiet moments of introspection sparked by a rogue dandelion seed, she celebrates the unpredictable beauty of "all the rest." Her domain encompasses the mundane and the magnificent, the mundane joys of a perfectly toasted bagel to the awe-inspiring power of a thunderstorm.</p>
        </div>
          <img className='w-1/3 side-img' src="/assets/images/evil-3.jpg" alt="" />
      </div>
      <div className='flex justify-between items-center flex-row-reverse my-10'>
        <div className='w-1/2'>
          <h3 className='character-head'>The Goddess of Good</h3>
          <p className='text-2xl font-bold font-comic text-brand my-5'>The Goddess of Good is an embodiment of order and serenity. Think of her as the calm in the storm of existence. She champions tradition, structure, and the comforting glow of familiar virtues. Hard work, kindness, and a commitment to good deeds are her hallmarks.  She fosters a sense of security and predictability, ensuring life has a foundation of stability. While her methods may seem rigid at times, her unwavering commitment to good ensures a moral compass for the universe.</p>
        </div>
          <img className='w-1/3 side-img' src="/assets/images/good-god-1.jpg" alt="" />
      </div>
    </section>
  )
}

export default Characters;