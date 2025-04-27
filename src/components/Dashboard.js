import React, { useState } from 'react';
import { mockIncidents } from '../mockData';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import FilterControls from './FilterControls';
import { Box, Paper, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';

const Dashboard = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filterBySeverity, setFilterBySeverity] = useState('All');
  const [sortByDate, setSortByDate] = useState('newest');
  const [expandedIncidentId, setExpandedIncidentId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Filter incidents by severity
  const filteredIncidents = incidents.filter(incident => 
    filterBySeverity === 'All' ? true : incident.severity === filterBySeverity
  );

  // Sort incidents by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortByDate === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // Add new incident
  const addIncident = (newIncident) => {
    const incidentWithId = {
      ...newIncident,
      id: Math.max(...incidents.map(i => i.id), 0) + 1,
      reported_at: new Date().toISOString()
    };
    setIncidents([...incidents, incidentWithId]);
    setShowForm(false);
  };

  // Toggle incident details
  const toggleIncidentDetails = (id) => {
    setExpandedIncidentId(expandedIncidentId === id ? null : id);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          padding: isMobile ? 2 : 3, 
          mb: 3, 
          backgroundColor: 'rgba(26, 35, 126, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 4
          }
        }}
      >
        <FilterControls 
          filterBySeverity={filterBySeverity}
          setFilterBySeverity={setFilterBySeverity}
          sortByDate={sortByDate}
          setSortByDate={setSortByDate}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      </Paper>
      
      {showForm && (
        <Paper 
          elevation={3} 
          sx={{ 
            padding: isMobile ? 2 : 3, 
            mb: 3,
            backgroundColor: 'rgba(26, 35, 126, 0.02)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: 4
            }
          }}
        >
          <Typography variant="h6" gutterBottom color="primary">
            Report New Incident
          </Typography>
          <IncidentForm addIncident={addIncident} />
        </Paper>
      )}

      <Paper 
        elevation={3} 
        sx={{ 
          padding: isMobile ? 2 : 3,
          backgroundColor: 'rgba(26, 35, 126, 0.02)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 4
          }
        }}
      >
        <Typography variant="h6" gutterBottom color="primary">
          Incidents ({sortedIncidents.length})
        </Typography>
        <IncidentList 
          incidents={sortedIncidents} 
          expandedIncidentId={expandedIncidentId}
          toggleIncidentDetails={toggleIncidentDetails}
        />
      </Paper>
    </Box>
  );
};

export default Dashboard;