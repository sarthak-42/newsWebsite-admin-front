import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
// import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import './App.css';
import VerifiedIcon from '@mui/icons-material/Verified';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
// import NewsAdded from "./newsAdded";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 292,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  p: 4,
  textAlign:'center'
};

const Categories = () => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [img, setImg] = useState(null);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [desc, setDesc] = useState("");
  // const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);

   const [formData, setFormData] = useState({
    title: "",
    category: "",
    desc: "",
    img: null,
    videoUrl: "",
  });
  const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
 const handleClose = () =>{setOpen(false)}

 const getCategoryFunc = async () => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.get(
      "http://localhost:5000/api/category/getCategory",
      config
    );
    const cat = response.data.categories.map((index) => {
      return index.category;
    });
    console.log(cat)
    setCategories(cat);
    //   if (Array.isArray(response.data)) {
    //     setCategoryValue({ data: response.data[0] });
    //   } else {
    //     console.error("Invalid response format. Expected an array.");
    //   }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};





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
        headers: {
            // "Content-type": "application/json",
            "Content-type": "multipart/form-data",
           
        },
    };
    // console.log('image path --', formData.img)
      const apiUrl = "http://localhost:5000/api/news/addNews"
    try {
      const {response} = await axios.post(
        apiUrl, formDataToSend, config
   
      );
          console.log(formDataToSend)
        setOpen(true)
      // alert("news added successfully");
      console.log(response);
    } catch (error) {
      console.error("Error", error.response);
    //   alert("Try again");
    }
  };

   useEffect(() => {
    getCategoryFunc();
  }, []);

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
            

               
              {/* <label className="form-label">Categories</label> */}
              {/* <input
                className="inpit_row form-input"
                name="category"
                placeholder="Enter News Category"
                value={formData.category}
                type="text"
                onChange={handleChange}
         
                
              /> */}
                 <label className="form-label">Categories</label>
                 <select
        id="default"
        className="input_row form-input"
        name="category"
        value={formData.category}
        onChange={handleChange}
    >
        <option value="" disabled>Select a category</option>
        {categories.map((category) => (
            <option key={category} value={category}>
                {category}
            </option>
        ))}
    </select>
           
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
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{paddingTop: "20px"}}>
            News Add Successfully <VerifiedIcon style={{position:"absolute", top:"20px", left:"46%", color:"#1aa13e", fontSize:"30px"}}/>
          </Typography>
        </Box>
      </Modal>
      </div>
    </>
  );
;
}

export default Categories;
