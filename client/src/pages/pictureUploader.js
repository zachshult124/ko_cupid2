import React from "react";

class PictureUploader extends React.Component {
  state = {
    srcs: []
  }

  previewFiles = () => {

    let files = document.querySelector('input[type=file]').files;

    if (files) {
      Promise.all([].map.call(files, this.readAndPreview))
        .then(srcs => {
          this.props.getPhotos(srcs)
          this.setState({ srcs })
        })
    }
  }

  readAndPreview = file => {

    return new Promise((resolve, reject) => {
      // Make sure `file.name` matches our extensions criteria
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        let reader = new FileReader();

        reader.addEventListener("load", function () {
          resolve(this.result)
        }, false);

        reader.readAsDataURL(file);
      }
      else {
        reject()
      }
    })
  }

  renderPicPreviews = () => {
    return this.state.srcs.map((src, idx) => {
      return <img src={src} alt='Trip Picture' style={{ maxHeight: 200, maxWidth: 200 }} key={idx} />
    })
  }

  render() {
    return (
      <div className='picuploader-container'>
        <h6>{`Upload your ${this.props.title} here!`}</h6>
        <form>
          <input type='file' accept='image/*' multiple onChange={this.previewFiles} />
        </form>
        {this.renderPicPreviews()}
      </div>
    )
  }
}

export default PictureUploader;

{/* <input
  type="file"
  accept="image/*"
  id="fab-submit"
  style={{ display: 'none' }}
  onInput={this.handleSubmit}
/>

handleSubmit = event => {
  event.preventDefault();
  var reader = new FileReader();
  reader.onload = e => {
    this.setState({ imgSrc: e.target.result });
  };
  reader.readAsDataURL(event.target.files[0]);
}; */}