import React, { Component } from "react";
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import "./GenerlaAnalystics.css";
import Img from "./images/NoPath - Copie (16)@3x.png";
import Dubai from "./images/dubai.jpg";
import { ReactComponent as ArrowUp } from "./images/up-arrow(1).svg";
import { ReactComponent as ArrowDown } from "./images/down-arrow(1).svg";
import { ReactComponent as Info } from "./images/information.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatingComponent from "react-star-rating-component";
import MyCard from "../Card/Card.jsx";
import New from "../New/New.jsx";

class GenerlaAnalystics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4
    };
  }
  componentWillMount() {
    return <div>loader</div>;
  }
  render() {
    const { rating } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    var sliderData = [
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      }
    ];
    var data = [
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      }
    ];
    return (
      <div className="app-main__outer">
        <section className="mainGeneralDashbord">
          <div className="app-page-title">
            <div className="page-title-wrapper">
              <div className="GeneralDash">
                <h1>Analytics and Statistics</h1>
              </div>
              <div className="GeneralButtons GeneralDash">
                <a
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  href="#"
                >
                  Tours bookings & Products
                </a>
                <a
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#747474"
                  }}
                  href="#"
                >
                  Users interactions
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="body-tabs">
          <div className="flex mb-4">
            <div className="my-col w-1/2" sm={12} lg={6}>
              <div className="mb-3 card">
                <div className="card-header-tab card-header">
                  <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    Top products
                  </div>
                  <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                    <div className="btn-group dropdown flex justify-center items-center">
                      <button className="btn-icon btn-icon-only btn btn-link">
                        <Info fill="#b3b8bd" className="info-btn" />
                      </button>
                      {/* here the dropdown div... */}
                    </div>
                  </div>
                </div>
                <div className="p-0 card-body">
                  <div className="p-3 product-details">
                    {/* hna tabda */}
                    <div className="tableProduct">
                      <table className="table-fixed table" bordered responsive>
                        <thead>
                          <tr>
                            <th className="w-1/4 px-4 py-2">Product name</th>
                            <th className="w-1/4 px-4 py-2">Price</th>
                            <th className="w-1/6 px-4 py-2">Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(product => (
                            <tr>
                              <td>
                                <div className="widget-content">
                                  <img src={Img} alt="img" width="40" />
                                  <p>{product["productName"]}</p>
                                </div>
                              </td>
                              <td>
                                <p>{product["price"]}</p>
                              </td>
                              <td>
                                <div className="productInfo">
                                  <div className="arrowProduct productInfo">
                                    <h1>{product["NumberUp"]}</h1>
                                    <ArrowUp
                                      fill="#2edc5d"
                                      className="arrowProductUp"
                                    />
                                  </div>
                                  <div className="arrowProduct productInfo">
                                    <h1>{product["NumberDown"]}</h1>
                                    <ArrowDown
                                      fill="#f53636"
                                      className="arrowProductUp"
                                    />
                                  </div>
                                  <div className="arrowProduct productInfo my-staring">
                                    <StarRatingComponent
                                      name="rate1"
                                      starCount={5}
                                      value={product["Rate"]}
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="my-col2 w-1/2 my-col flex flex-col justify-start"
              sm={12}
              lg={6}
            >
              <div className="mb-3 card">
                <div className="card-header-tab card-header">
                  <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    Top tours
                  </div>
                  <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                    <div className="btn-group-lg btn-group" role="groupe">
                      <button className="btn btn-alternate btn-pill1">
                        Hour
                      </button>
                      <button className="btn btn-alternate active">Day</button>
                      <button className="btn btn-alternate">Week</button>
                      <button className="btn btn-alternate btn-pill2">
                        Month
                      </button>
                    </div>
                    <div className="btn-group dropdown flex justify-center items-center">
                      <button className="btn-icon btn-icon-only btn btn-link">
                        <Info fill="#b3b8bd" className="info-btn" />
                      </button>
                      {/* here the dropdown div... */}
                    </div>
                  </div>
                </div>
                <div className="p-0 card-body">
                  <div className="p-3 product-details">
                    <div>
                      <Slider {...settings}>
                        {sliderData.map(element => (
                          <div className="bg-white">
                            <MyCard
                              Title={element["name"]}
                              views={element["views"]}
                              Img={Dubai}
                              Rate={element["rate"]}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="my-col w-1/2">
              <GeneralGraph />
            </div>
            <div className="my-col w-1/2">
              <New name="Kevin maklien" time="Today at 22:45" type="story" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerlaAnalystics;
