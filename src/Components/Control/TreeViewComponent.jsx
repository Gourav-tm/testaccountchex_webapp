import * as React from "react";
import TreeView from "@material-ui/lab/TreeView";
/* import ExpandMoreIcon from '@material-ui/icons-material/ExpandMore';
import ChevronRightIcon from '@material-ui/icons-material/ChevronRight'; */
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
export default function TreeViewComponent() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
       defaultExpandIcon={<ChevronRightIcon />} 
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
