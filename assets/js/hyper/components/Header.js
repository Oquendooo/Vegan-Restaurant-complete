import {h, app} from 'hyperapp'

export default function Header({state, actions}) {





  return (
    <header id="myHeader" class="header">
      <div class="container">
        <div class="header-container">
          <div class="logo">
            NYVC
          </div>
          <nav>
            <a href="#">Our Story</a>
            <a href="#">Reviews</a>
            <a href="#">Special Menu</a>
            <a href="#">Reservations</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
