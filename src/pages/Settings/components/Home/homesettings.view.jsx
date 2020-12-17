import React from "react";
import { Grid, Box, Paper } from "@material-ui/core";

//Components
import ImageUpload from "./components/ImageUpload";
import ProfileBanner from "./components/ProfileBanner";
import ProfileEditor from "./components/ProfileEditor";
import ProfileContent from "./components/ProfileContent";

const HomeSettingsView = ({
  isEdit,
  names,
  coverAnchorEl,
  profileAnchorEl,
  profileUploadOpen,
  uploadType,
  handleChange,
  handleOperation,
  userDetails,
  handleImageDialog,
  handleCoverPopoverOpen,
  handleCoverPopoverClose,
  handleProfilePopoverOpen,
  handleProfilePopoverClose,
  handleProfileUploadClickOpen,
  handleProfileUploadClose,
  handleSubmitProfileUpload,
}) => {
  return (
    <>
      <form noValidate autoComplete="off">
        <Grid
          container
          flexDirection="column"
          component={Paper}
          justify="center"
          alignItems="center"
        >
          <ProfileBanner
            names={names}
            coverAnchorEl={coverAnchorEl}
            profileAnchorEl={profileAnchorEl}
            handleProfilePopoverOpen={handleProfilePopoverOpen}
            handleCoverPopoverOpen={handleCoverPopoverOpen}
            handleCoverPopoverClose={handleCoverPopoverClose}
            handleProfilePopoverClose={handleProfilePopoverClose}
            handleProfileUploadClickOpen={handleProfileUploadClickOpen}
            handleImageDialog={handleImageDialog}
          />
          <ProfileEditor isEdit={isEdit} handleOperation={handleOperation} />
          <Grid item container xs={12} component={Box} p={2}>
            <>
              <ProfileContent
                userDetails={userDetails}
                isEdit={isEdit}
                names={names}
                handleChange={handleChange}
              />
            </>
          </Grid>
        </Grid>
      </form>
      <ImageUpload
        profileUploadOpen={profileUploadOpen}
        uploadType={uploadType}
        handleProfileUploadClose={handleProfileUploadClose}
        handleSubmitProfileUpload={handleSubmitProfileUpload}
      />
    </>
  );
};
export default HomeSettingsView;
