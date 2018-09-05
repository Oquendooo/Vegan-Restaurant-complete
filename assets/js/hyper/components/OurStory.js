import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>Lorem ipsum dolor amet portland viral paleo, meditation hexagon tacos austin chicharrones vaporware distillery lumbersexual chartreuse raclette. Helvetica taiyaki crucifix air plant. Helvetica DIY tattooed man bun taiyaki, bushwick meggings 90's before they sold out hoodie.</p>
            <div class="quote">"The best vegan food in the town" - <strong>Aaron Oquendo</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>

          </div>
          <div class="col-md-6">
            <div class="video-img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
