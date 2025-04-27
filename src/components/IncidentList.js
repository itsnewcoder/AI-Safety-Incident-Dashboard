import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Button, 
  Chip,
  Collapse,
  Box,
  Divider,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const IncidentList = ({ incidents, expandedIncidentId, toggleIncidentDetails }) => {
  // Function to format date
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get severity color
  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Low':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <List disablePadding>
      {incidents.length > 0 ? (
        incidents.map((incident, index) => (
          <Paper 
            key={incident.id}
            elevation={1} 
            sx={{ 
              mb: 2, 
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'rgba(26, 35, 126, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 3,
                borderColor: 'rgba(26, 35, 126, 0.3)'
              }
            }}
          >
            <ListItem 
              alignItems="flex-start"
              sx={{ 
                backgroundColor: expandedIncidentId === incident.id 
                  ? 'rgba(26, 35, 126, 0.05)' 
                  : 'white',
                transition: 'background-color 0.2s ease'
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {incident.title}
                    </Typography>
                    <Chip 
                      label={incident.severity} 
                      size="small" 
                      color={getSeverityColor(incident.severity)}
                      sx={{ minWidth: 80, fontWeight: 'medium' }}
                    />
                  </Box>
                }
                secondary={
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mt: 1 }}
                  >
                    {formatDate(incident.reported_at)}
                  </Typography>
                }
              />
              <Button
                color="primary"
                onClick={() => toggleIncidentDetails(incident.id)}
                startIcon={expandedIncidentId === incident.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                sx={{ 
                  ml: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.08)'
                  }
                }}
              >
                {expandedIncidentId === incident.id ? 'Hide Details' : 'View Details'}
              </Button>
            </ListItem>
            <Collapse in={expandedIncidentId === incident.id} timeout="auto" unmountOnExit>
              <Box sx={{ p: 3, pt: 0, backgroundColor: 'rgba(26, 35, 126, 0.02)' }}>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">
                  {incident.description}
                </Typography>
              </Box>
            </Collapse>
          </Paper>
        ))
      ) : (
        <Typography variant="body1" sx={{ textAlign: 'center', py: 4 }}>
          No incidents found matching your criteria.
        </Typography>
      )}
    </List>
  );
};

export default IncidentList;