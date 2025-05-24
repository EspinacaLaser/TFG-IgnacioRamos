/**
 * Iconos de características de la habitación.
 * Muestra iconos de wifi, teléfono, secador, TV y aire acondicionado.
 * Usa el color primario del theme para los iconos.
 */
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import WifiIcon from "@mui/icons-material/Wifi";
import PhoneIcon from "@mui/icons-material/Phone";
import TvIcon from "@mui/icons-material/Tv";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import { useTheme } from "@mui/material/styles";

const IconosCaracteristicasHabitacion: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
      <Tooltip title="Wifi">
        <WifiIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
      </Tooltip>
      <Tooltip title="Teléfono">
        <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
      </Tooltip>
      <Tooltip title="Secador">
        <DryCleaningIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
      </Tooltip>
      <Tooltip title="Televisión">
        <TvIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
      </Tooltip>
      <Tooltip title="Aire acondicionado">
        <AcUnitIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
      </Tooltip>
    </Box>
  );
};

export default IconosCaracteristicasHabitacion;