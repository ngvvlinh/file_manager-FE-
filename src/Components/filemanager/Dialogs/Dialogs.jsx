import React from 'react';
import DialogContent from './Content/Content.jsx';
import DialogEdit from './Edit/Edit.jsx';
import DialogCreateFolder from './CreateFolder/CreateFolder.jsx';
import DialogCreateFile from './CreateFile/CreateFile.jsx';
import DialogRename from './Rename/Rename.jsx';
import DialogMove from './Move/Move.jsx';
import DialogCopy from './Copy/Copy.jsx';
import DialogUploadFile from './UploadFile/UploadFile.jsx';

function check() {
  return "hall 10ss"
}

function Dialogs(props) {

  //const vars = "string";
  return (
    <div className="Dialogs">
      <DialogContent />
      <DialogEdit vars={check} />
      <DialogCreateFolder />
      <DialogCreateFile />
      <DialogMove />
      <DialogCopy />
      <DialogRename />
      <DialogUploadFile />
    </div>
  );
}

export default Dialogs;
