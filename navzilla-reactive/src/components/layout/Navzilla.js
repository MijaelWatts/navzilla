import { Component } from 'react';

class Navzilla extends Component {
  render () {
    return (
      <div id="navigation-pane" className="container-fluid">

        <div className="row col-lg-12">

          <div className="col-lg-4">
            <div className="thumbnail navzilla-thumbnail" >
              <a href="">
                <img src="http://3.bp.blogspot.com/_UqUwVPikChs/R-C-tHbATUI/AAAAAAAAC_A/CrGGzjyLi14/s320/wyvern-luke-tuxwalker-1944.png" alt="Image1" />
                <hr />
                <h4 style="text-align: center;">
                  Option 01
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="thumbnail navzilla-thumbnail" >
              <a href="">
                <img src="http://i589.photobucket.com/albums/ss338/MrAbcBoi/SW7.png" alt="Image2" />
                <hr />
                <h4 style="text-align: center;">
                  Option 02
                </h4>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="thumbnail navzilla-thumbnail" >
              <a href="">
                <img src="https://media.quizizz.com/resource/gs/quizizz-media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVxWmxlMFdXdERkU2NuNkNPVGxGanZYWTM2VEluZ3ZzaVR0T1RpQUJfbUlkQUJvdUVuNXdQTVl3NXpOdzA1dm5kNmFwVEpna2d3dmh2a3N5dVBJbXdma3FpZEptNXR6YmlhaEVncFZGM0xveVlfTFViMC5JTXNPV2Y1Q2R2RkhvcElQ?w=500" alt="Image1" />
                <hr />
                <h4 style="text-align: center;">
                  Option 03
                </h4>
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }
}