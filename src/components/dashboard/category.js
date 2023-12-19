import React, { useEffect, useState } from "react";
import PortalHeader from "../shared/portalHeader";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 292,
  bgcolor: "background.paper",
  border: "1px solid #000",
  p: 4,
  textAlign: "center",
};

const Category = () => {
  const [formData, setFormData] = useState({
    category: "",
  });
  const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [categoryValue, setCategoryValue] = useState({ data: [] });

  //   const getCategoryFunc = async () => {
  //     try {
  //       const config = {
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       };
  //       const response = await axios.get("http://localhost:5000/api/category/getCategory", config);

  //       setCategoryValue({ data: response.data });
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };

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
      setCategoryValue(cat);
      //   if (Array.isArray(response.data)) {
      //     setCategoryValue({ data: response.data[0] });
      //   } else {
      //     console.error("Invalid response format. Expected an array.");
      //   }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { category } = formData;
      if (!category.trim()) {
        alert("field cannot be empty");
        return;
      }

      // Check if the category already exists
      if (
        categoryValue?.data?.some(
          (existingCategory) =>
            existingCategory.category.toLowerCase() === category.toLowerCase()
        )
      ) {
        // console.log("Category already exists");
        alert("Category exixts");
        // Handle the case where the category already exists (e.g., show an error message)
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/category/addCategory",
        { category },
        config
      );
      console.log("data post>>>", response?.data?.category);

      setOpen(true);

      // Update categoryValue based on its current value
      setCategoryValue((prevCategoryValue) => {
        const newData = response.data.category;
        return {
          data: Array.isArray(prevCategoryValue?.data)
            ? [newData, ...prevCategoryValue.data]
            : [newData],
        };
      });

      setFormData((prevData) => ({
        ...prevData,
        category: "",
      }));
    } catch (error) {
      console.error("Error posting category:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    getCategoryFunc();
  }, []);

  useEffect(() => {
    // Save to sessionStorage whenever categoryValue changes
    sessionStorage.setItem("categoryData", JSON.stringify(categoryValue));
  }, [categoryValue]);

  console.log(categoryValue?.data?.category, "languageData>>");
  return (
    <PortalHeader>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="broadcaster-form p-5 m-5"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e0dfee", // Background color
          maxWidth: "400px", // Set the desired maximum width
          margin: "auto", // Center the form horizontally
          borderRadius: "8px",
        }}
      >
        <div className="mb-3">
          <label className="text-sm text-gray-600" sx={{ fontSize: "32px" }}>
            Category:
          </label>
          <TextField
            type="text"
            variant="outlined"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="For English"
            sx={{
              backgroundColor: "white", // Set the background color of the input field
            }}
          />
          {/* <TextField
          type="text"
          variant="outlined"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder="For Punjabi"
          sx={{
            backgroundColor: 'white', // Set the background color of the input field
          }}

        /> */}
        </div>
        <Button
          type="submit"
          variant="contained"
        //   color="primary"
          className="mt-3"
        >
          Submit
        </Button>
        <div className="mt-3 text-gray-800">Categories available:</div>

        <div>
          {categoryValue.length > 0 &&
            categoryValue.map((item, index) => {
              return <div style={{ margin: "20px", color: "black",border:' 1px solid ', borderRadius: '4px', padding: '10px' ,  backgroundColor: "#ffeb00", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",  fontSize: "18px", }}>{item}</div>;
            })}
        </div>
      </Box>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            style={{ paddingTop: "20px" }}
          >
            New Category Added Successfully{" "}
            <VerifiedIcon
              style={{
                position: "absolute",
                top: "20px",
                left: "46%",
                color: "#1aa13e",
                fontSize: "30px",
              }}
            />
          </Typography>
        </Box>
      </Modal>
    </PortalHeader>
  );
};

export default Category;
