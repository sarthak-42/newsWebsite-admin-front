import React, { useState } from "react";
import Grid from "@mui/material/Grid";
// import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";

const Categories = () => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [img, setImg] = useState(null);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [desc, setDesc] = useState("");
  // const [error, setError] = useState('');
   const [formData, setFormData] = useState({
    title: "",
    category: "",
    desc: "",
    image: null,
    videoUrl: "",
  });
  const handleChange = (e) => {
    e.persist();
    const { name, value, type } = e.target;

    const newValue =
      name === "img" && type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
}
    const data = formData;
    console.log(data)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData)

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("image", formData.img);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("videoUrl", formData.videoUrl);

    const config = {
        Headers: {
            // "Content-type": "application/json",
            "Content-Type": "multipart/form-data",
        },
    };
    // console.log('image path --', formData.img)
      const apiUrl = "/api/news/addNews"
    try {
      const {response} = await axios.post(
        apiUrl, formDataToSend, config
   
      );
          console.log(formDataToSend)
      alert("news added successfully");
      console.log(response);
    } catch (error) {
      console.error("Error", error.response);
    //   alert("Try again");
    }
  };

  return (
    <>
      <div className="Categories-form relative z-9 bg-white mx-auto grid rounded-[10px]">
        <h1 className="uppercase">News</h1>
        <form
          action="/addNews"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <Grid className="mb-3" container spacing={2} md={8}>
            <Grid item md={6}>
        
                <label className="form-label">Title</label>

                <input
                  className="inpit_row form-input"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter News Title"
                  
                    // setError(null);
              
                />
       
            </Grid>
            <Grid item md={6}>
            

               
              <label className="form-label">Categories</label>
              <input
                className="inpit_row form-input"
                name="category"
                placeholder="Enter News Category"
                value={formData.category}
                type="text"
                onChange={handleChange}
         
              />
           
            </Grid>
            <Grid item md={6}>
          
                <label className="form-label">Image</label>

                <div className="relative">
                  <input
                    className="inpit_row form-input"
                    accept="image/"
                    multiple
                    type="file"
                    id="image-button"
                    // value={img}
                    name="img"
                    onChange={handleChange}
                  />
                  {/* <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  /> */}
                  <label
                    htmlFor="image-button"
                    className="absolute left-[0] w-[100%] h-[100%] bg-white"
                  >
                    <Button
                      style={{ justifyContent: "left" }}
                      className="absolute left-[0] w-[100%] h-[100%] bg-white"
                      variant="raised"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                </div>
        
            </Grid>

            <Grid item md={6}>
             

                
              <label className="form-label">Video</label>
              <div className="relative">
                {/* <input
                                    className="inpit_row form-input"
                                    accept="image/*"
                                    multiple
                                    type="file"
                                    id="image-button"
                                    />
                                    <label htmlFor="image-button" className="absolute left-[0] w-[100%] h-[100%] bg-white">
                                    <Button style={{ justifyContent: 'left' }} className="absolute left-[0] w-[100%] h-[100%] bg-white" variant="raised" component="span"  >
                                    Upload
                                    </Button>
                                </label> */}
                <input
                  className="inpit_row form-input"
                  name="videoUrl"
                  placeholder="Enter url Link"
                  value={formData.videoUrl}
                  type="link"
                  onChange={handleChange}
                />
              </div>
              {/* <iframe width="560" height="50" src="https://www.youtube.com/embed/FtJRfsJgtYI?si=DygKanIEDcg7zoNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
            </Grid>
            <Grid item md={12}>
             
                <label className="form-label">Description</label>

                <textarea
                  className="inpit_row form-input"
                  name="desc"
                  style={{ height: "10rem" }}
                  placeholder="Enter Description"
                  value={formData.desc}
                  onChange={handleChange}
                />
            
            </Grid>
          </Grid>

          <button className="form-action w-60 " type="Submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
;
}

export default Categories;
