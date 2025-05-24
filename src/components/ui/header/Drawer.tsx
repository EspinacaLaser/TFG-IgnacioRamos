import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

const CustomDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: { width: 240, bgcolor: "background.paper" },
    }}
  >
    <Box sx={{ p: 2 }}>
      <Navbar drawer />
    </Box>
  </Drawer>
);

export default CustomDrawer;