import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" class="texturebg">
      <div class="container">
        <h5 class="comp-title">Contact Us</h5>
        <h2>Delicious Flavor of Autumn</h2>
        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="title">
                {state.globalState.companyInfo.location}
              </div>
              <h6 class="address">
                435 Main Street <br/>
                New York, New York 10314
              </h6>
              <p><strong>Email: </strong><a href="mailto:info@primerestaurant.com">info@primerestaurant.com</a></p>
            </div>
            <div class="col-md-6">
              <h6>
                Phone:
              </h6>
              <div class="title">
                718-980-7435
              </div>
              <h6>
                Lunch Service:
              </h6>
              <p>
                Friday, Saturday and Sunday <br/>
                from 12pm - 1:30pm
              </p>
              <h6>
                Dinner Service:
              </h6>
              <p>
                Daily Bookings from 6pm - 9:30pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
