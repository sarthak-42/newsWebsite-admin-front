import React from "react";
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const Categories = () => {
    return (
        <>
            <div className="Categories-form relative z-9 bg-white mx-auto grid rounded-[10px]">
                <h1 className="uppercase">News</h1>
                <Grid className="mb-3" container spacing={2} md={8}>
                    <Grid item md={6}>
                        <div>
                            <label className="form-label">Title</label>

                            <input
                                className="inpit_row form-input"
                                name="refId"
                                placeholder="Enter News Title"
                            />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <label className="form-label">Categories</label>
                        <select id="default" class="inpit_row form-input">
                            <option selected>Politics</option>
                            <option value="Politics">Politics</option>
                        </select>
                    </Grid>
                    <Grid item md={6}>
                        <div>
                            <label className="form-label">Image</label>

                            <div className="relative">
                                <input
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
                                </label>
                            </div>
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
                                name="refId"
                                placeholder="Enter url Link"
                            />
                            </div>
                        {/* <iframe width="560" height="50" src="https://www.youtube.com/embed/FtJRfsJgtYI?si=DygKanIEDcg7zoNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </Grid>
                    <Grid item md={12}>
                        <div>
                            <label className="form-label">Description</label>

                            <textarea
                                className="inpit_row form-input"
                                name="refId"
                                style={{height: '10rem'}}
                                placeholder="Enter Description"
                            />

                        </div>
                    </Grid>
                </Grid>



                <button className="form-action w-60 "  >
                    Add
                </button>
            </div >
        </>
    )
}

export default Categories;