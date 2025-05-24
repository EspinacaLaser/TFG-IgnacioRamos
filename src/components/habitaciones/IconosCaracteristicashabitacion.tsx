/**
 * Iconos de características de la habitación.
 * Muestra iconos con texto para wifi gratis, teléfono, televisor, lavandería, despertador, escritorio y más.
 * Usa el color primario del theme para los iconos.
 */
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import WifiIcon from "@mui/icons-material/Wifi";
import PhoneIcon from "@mui/icons-material/Phone";
import TvIcon from "@mui/icons-material/Tv";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeskIcon from "@mui/icons-material/Desk";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const caracteristicas = [
  { icon: WifiIcon, label: "Wifi gratis" },
  { icon: PhoneIcon, label: "Teléfono" },
  { icon: TvIcon, label: "Televisor" },
  { icon: DryCleaningIcon, label: "Lavandería" },
  { icon: AlarmIcon, label: "Reloj despertador" },
  { icon: DeskIcon, label: "Escritorio" },

];

const IconosCaracteristicasHabitacion: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
      {caracteristicas.map(({ icon: Icon, label }) => (
        <Box key={label} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Tooltip title={label}>
            <Icon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
          </Tooltip>
          <Typography variant="caption" sx={{ mt: 0.5, fontFamily: "'Open Sans', Arial, sans-serif" }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default IconosCaracteristicasHabitacion;