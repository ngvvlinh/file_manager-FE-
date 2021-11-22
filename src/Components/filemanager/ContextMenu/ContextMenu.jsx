import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContextMenu.css';
import Menu from '@material-ui/core/Menu';
import { getActionsByMultipleFiles } from '../../../Api/ApiHandler.js';
import OpenAction from './ContextMenuActions/OpenAction.jsx';
import RemoveAction from './ContextMenuActions/RemoveAction.jsx';
import MoveAction from './ContextMenuActions/MoveAction.jsx';
import CopyAction from './ContextMenuActions/CopyAction.jsx';
import EditAction from './ContextMenuActions/EditAction.jsx';
import RenameAction from './ContextMenuActions/RenameAction.jsx';
import DownloadAction from './ContextMenuActions/DownloadAction.jsx';

class ContextMenu extends Component {
  state = { data: "open" }
  render() {

    const { acts, visible, x, y, contextmenu } = this.props;
    console.log("cccc", contextmenu);
    console.log("visible", typeof visible, x, y);
    const actionsComp = acts.map((act, key) => {
      let component;
      console.log("check act", act)
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
        component = <RenameAction key={key} keycontext={contextmenu} />;
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

      < div >
        <Menu
          anchorReference="anchorPosition"
          anchorPosition={{ top: y, left: x }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={visible}
          onClose={() => { }}
          PaperProps={{ style: { width: 170 } }}>
          {actionsComp}

        </Menu>

      </div >
    );
  }
}
// class TCT extends Component {
//   render() {
//     const { contextmenu } = this.props;
//     //{ contextmenu }

//     return (

//       < div >
//         <Menu
//           anchorReference="anchorPosition"
//           anchorPosition={{ top: y, left: x }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//           }}
//           open={visible}
//           onClose={() => { }}
//           PaperProps={{ style: { width: 170 } }}>
//           {actionsComp}
//         </Menu>
//       </div >
//     );
//   }
// }


const mapStateToProps = (state) => {
  console.log("check mapstatetoprops", state)
  return {

    x: state.contextMenuPosition[0] || 0,
    y: state.contextMenuPosition[1] || 0,
    visible: !!state.contextMenuVisible,
    acts: getActionsByMultipleFiles(state.selectedFiles),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
