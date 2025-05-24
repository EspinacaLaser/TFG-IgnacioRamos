/**
 * Drawer (menú lateral) personalizado para navegación en móvil.
 * Usa el Navbar en modo columna y adapta el fondo según el tema.
 * Los nav items están sincronizados con el Navbar principal.
 */
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

const CustomDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={onClose}
    slotProps={{
      paper: { sx: { width: 240, bgcolor: "background.paper" } },
    }}
  >
    <Box sx={{ p: 2 }}>
      <Navbar drawer />
    </Box>
  </Drawer>
);

export default CustomDrawer;