import React, { useState } from "react";
  
function ImgUploader() {
    const [file, setFile] = useState();
    function handleChange(e) {

        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} alt="IMG" />
  
        </div>
  
    );
}
  
export default ImgUploader;


