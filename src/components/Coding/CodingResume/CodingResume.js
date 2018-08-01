import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../../../assets/ResumeJacobS.pdf';
import Button from '../../UI/Button/Button'

class CodingResume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    this.setState({pageNumber: this.state.pageNumber + 1})
  }

  prevPage = () => {
    this.setState({pageNumber: this.state.pageNumber - 1})
  }

  render() {
  const { pageNumber, numPages } = this.state;

  // TODO: Make buttons disable if they are at min or max page

    return (
      <div>
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>

        <Button clicked={this.prevPage}>Previous</Button>
        <Button clicked={this.nextPage}>Next</Button>
      </div>
    );
  }
}

export default CodingResume;