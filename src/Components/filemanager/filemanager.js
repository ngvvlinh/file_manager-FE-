import React, { Component, useState } from 'react';
import FileList from './FileList/FileList.jsx';
import Navbar from './Navbar/Navbar.jsx';
import ContextMenu from './ContextMenu/ContextMenu.jsx';
import Dialogs from './Dialogs/Dialogs.jsx';

import { MuiThemeProvider as MaterialUI, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { connect } from 'react-redux';
import { setContextMenuVisible, refreshFileList, refreshFolderList } from '../../Actions/Actions.js';
import DynamicSnackbar from './Notification/DynamicSnackbar.jsx';
import { orange, yellow } from '@material-ui/core/colors';
import CreateFolderAction from './ContextMenu/ContextMenuActions/CreateFolderAction.jsx';
import UploadFileAction from './ContextMenu/ContextMenuActions/UploadFileAction.jsx';
import CreatefileAction from './ContextMenu/ContextMenuActions/CreatefileAction.jsx';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OpenAction from './ContextMenu/ContextMenuActions/OpenAction.jsx';
import RemoveAction from './ContextMenu/ContextMenuActions/RemoveAction.jsx';
import MoveAction from './ContextMenu/ContextMenuActions/MoveAction.jsx';
import CopyAction from './ContextMenu/ContextMenuActions/CopyAction.jsx';
import EditAction from './ContextMenu/ContextMenuActions/EditAction.jsx';
import RenameAction from './ContextMenu/ContextMenuActions/RenameAction.jsx';
import DownloadAction from './ContextMenu/ContextMenuActions/DownloadAction.jsx';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
  },
  typography: {
    useNextVariants: true,
  }
});

// config of navbar
class ThreeDotsMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div style={{ marginLeft: '1em' }}>
        <IconButton color="inherit"
          aria-label="More"
          aria-owns={Boolean(anchorEl) ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <CreateFolderAction handleClose={this.handleClose} />
          <CreatefileAction handleClose={this.handleClose} />
          <UploadFileAction handleClose={this.handleClose} />
        </Menu>
      </div>
    );
  }
}

class BreadcrumFunc {
  // change name root title
  constructor(roottitle) {
    this.roottitle = roottitle;
  }
  handeclickpath = () => {
    // do something w 
  }
  handlegoback = () => {

  }
}
const param_rootname = new BreadcrumFunc("File Manager")

//context Mennu
class ContextMenu_ extends React.Component {
  state = { data: "open" }
  render() {

    const { acts, visible, x, y } = this.props;
    const actionsComp = acts.map((act, key) => {
      let component;
      if (act === 'open') {
        component = <OpenAction key={key} />;
      }
      if (act === 'edit') {
        component = <EditAction key={key} />;
      }
      if (act === 'copy') {
        component = <CopyAction key={key} />;
      }
      if (act === 'move') {
        component = <MoveAction key={key} />;
      }
      if (act === 'rename') {
        component = <RenameAction key={key} />;
      }
      if (act === 'download') {
        component = <DownloadAction key={key} />;
      }
      if (act === 'remove') {
        component = <RemoveAction key={key} />;
      }
      return component;
    });
    return (
      <div>
        <p> check links </p>
      </div>
    );

  }
}
console.log("check class context menu")

// function string_sinal(sinal) {
//   sinal = "open";
//   return sinal
// }

class Filemanager extends Component {

  componentDidMount() {
    this.props.init();
  };

  render() {
    return (
      <MaterialUI theme={theme}>
        <div onClick={this.props.handleHideContextMenu} onContextMenu={this.props.handleHideContextMenu}>
          <Navbar threeDotMenu={<ThreeDotsMenu />} roottile={param_rootname.roottitle} />
          <ContextMenu contextmenu={<ContextMenu_ />} />
          <FileList />
          <DynamicSnackbar />
          <Dialogs />
        </div>
      </MaterialUI>


    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(refreshFileList());
    },

    handleHideContextMenu: (event) => {
      if (!(event.target.tagName === 'INPUT' || /label/i.test(event.target.className))) {
        event.preventDefault();
      }
      dispatch(setContextMenuVisible(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filemanager);
