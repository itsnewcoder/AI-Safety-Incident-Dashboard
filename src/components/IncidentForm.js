import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  FormControl, 
  FormHelperText,
  InputLabel, 
  Select, 
  MenuItem, 
  Grid,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const IncidentForm = ({ addIncident }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: ''
  });
  
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.severity) {
      newErrors.severity = 'Severity level is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (validateForm()) {
      addIncident(formData);
      setFormData({
        title: '',
        description: '',
        severity: ''
      });
      setFormSubmitted(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            name="title"
            label="Incident Title"
            fullWidth
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'primary.light',
                },
              },
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <FormControl fullWidth error={!!errors.severity} required>
            <InputLabel id="severity-label">Severity Level</InputLabel>
            <Select
              labelId="severity-label"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              label="Severity Level"
              sx={{
                '&:hover': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
            {errors.severity && <FormHelperText>{errors.severity}</FormHelperText>}
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Incident Description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'primary.light',
                },
              },
            }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              sx={{ 
                mt: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3
                }
              }}
            >
              Submit Report
            </Button>
          </Box>
        </Grid>
        
        {formSubmitted && Object.keys(errors).length > 0 && (
          <Grid item xs={12}>
            <Alert severity="error">
              Please fix the errors before submitting the form.
            </Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default IncidentForm;