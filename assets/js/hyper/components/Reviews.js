import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {

  var currentReview = function() {
    return(
      <div>
        <h5 class="comp-title">Reviews</h5>
        <h2>{state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].company}</h2>
        <h4>{state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].highlight}</h4>
        <p>{state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review}
        </p>
        <div class="author"><strong>{state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].author}</strong> - <em>{state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].authorInfo}</em></div>
      </div>
    )
  }
  var leftClickBTN = function(){
    if(state.globalState.reviewStatus.currentReview == 0){
      console.log('do nothing')
    }else{
      actions.reviewLeftClicked()
    }
  }
  var rightClickBTN = function(){
    if(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsData.length - 1)){
      console.log('do nothing')
    }else{
      actions.reviewRightClicked()
    }
  }
  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="side-img">
              <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg"/>
            </div>
          </div>
          <div class="col-md-4">
            {currentReview()}
            <div class="arrows">
              <i onclick={leftClickBTN}
              class={`fas fa-arrow-left ${(state.globalState.reviewStatus.currentReview > 0) ? 'ready'   : ''}`}></i>
              <i onclick={rightClickBTN}
                class={`fas fa-arrow-right ${(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsData.length - 1)) ? '' : 'ready'}`}></i>
                {console.log(state.globalState.reviewStatus.currentReview)}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
