import React, { Component } from "react";
import Moment from "react-moment";

class ProfileMovies extends Component {
  render() {
    const { movies } = this.props;

    const movItems = movies.map(mov => (
      <li key={mov._id} className="list-group-item mt-3 rounded">
        <h4>{mov.title}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{mov.yearofrelease}</Moment>
        </p>
        <p>
          <strong>Director:</strong> {mov.director}
        </p>
        <p>
          {mov.genre === "" ? null : (
            <span>
              <strong>Genre: </strong> {mov.genre}
            </span>
          )}
        </p>
        <p>
          {mov.rating === "" ? null : (
            <span>
              <strong>Rated: </strong> {mov.rating}
            </span>
          )}
        </p>
        <p>
          {mov.plotsummary === "" ? null : (
            <span>
              <strong>Summary: </strong> {mov.plotsummary}
            </span>
          )}
        </p>
        <p>
          {mov.review === "" ? null : (
            <span>
              <strong>Review: </strong> {mov.review}
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">Movies</h3>
            <div>
              {movItems.length > 0 ? (
                <span>{movItems}</span>
              ) : (
                <span className="text-center">No Movies Listed</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileMovies;
