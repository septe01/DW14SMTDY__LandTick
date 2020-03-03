import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-landing jumbotron-fluid bg-primary-90">
          <div className="container">
            <div class="row">
              <div class="col-md-6 slug">
                <h3 className="">Selamat Pagi, Ticket Seekers !</h3>
                <div className="slug-p">
                  <p className="lead">Masuk atau Daftar Sekarang !!</p>
                  <p className="lead">Ingin Pulkam dengan Good Deal ?</p>
                </div>
              </div>
              <div class="col-md-6">
                <div className="img-landing"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
