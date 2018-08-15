import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteMovie } from "../../actions/profileActions";

class Movie extends Component {
  onDeleteClick(id) {
    this.props.deleteMovie(id);
  }

  render() {
    const movie = this.props.movie.map(mov => (
      <tr key={mov._id}>
        <td>{mov.title}</td>
        <td>{mov.director}</td>
        <td>
          <Moment format="YYYY/MM/DD">{mov.yearofrelease}</Moment>
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, mov._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Movies</h4>
        <table className="table">
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Released</th>
            <th />
          </tr>
          {movie}
        </table>
      </div>
    );
  }
}

Movie.propTypes = {
  deleteMovie: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteMovie }
)(Movie);
