import React, { useState } from "react";
import { Box, TextField, Button, Typography, Stack, Chip, useTheme } from "@mui/material";

interface Props {
  imagenes: string[];
  setImagenes: (imgs: string[]) => void;
}

const HabitacionImagenes: React.FC<Props> = ({ imagenes, setImagenes }) => {
  const theme = useTheme();
  const [nuevaImagen, setNuevaImagen] = useState("");

  // Añadir imagen por URL manualmente
  const handleAddImagen = () => {
    if (nuevaImagen.trim() && !imagenes.includes(nuevaImagen.trim())) {
      setImagenes([...imagenes, nuevaImagen.trim()]);
      setNuevaImagen("");
    }
  };

  // Eliminar imagen de la lista
  const handleRemoveImagen = (url: string) => {
    setImagenes(imagenes.filter(img => img !== url));
  };

  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          mb: 1,
          fontWeight: 600,
          fontFamily: theme.typography.body1.fontFamily,
          color: theme.palette.secondary.main,
        }}
      >
        Imágenes (URL)
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <TextField
          label="URL de imagen"
          value={nuevaImagen}
          onChange={e => setNuevaImagen(e.target.value)}
          size="small"
          sx={{
            flex: 1,
            fontFamily: theme.typography.body1.fontFamily,
          }}
        />
        <Button
          onClick={handleAddImagen}
          variant="outlined"
          color="secondary"
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            fontFamily: theme.typography.button.fontFamily,
          }}
          disabled={!nuevaImagen.trim()}
        >
          Añadir
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {imagenes.map(url => (
          <Chip
            key={url}
            label={url}
            onDelete={() => handleRemoveImagen(url)}
            color="primary"
            variant="outlined"
            sx={{
              mb: 1,
              maxWidth: 220,
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: theme.typography.body2.fontFamily,
              fontSize: theme.typography.body2.fontSize,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HabitacionImagenes;