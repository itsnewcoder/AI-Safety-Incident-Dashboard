import React from 'react';
import { 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Button,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

const FilterControls = ({ 
  filterBySeverity, 
  setFilterBySeverity, 
  sortByDate, 
  setSortByDate,
  setShowForm,
  showForm
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel id="severity-filter-label">
            <FilterListIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Filter by Severity
          </InputLabel>
          <Select
            labelId="severity-filter-label"
            value={filterBySeverity}
            onChange={(e) => setFilterBySeverity(e.target.value)}
            label="Filter by Severity"
            sx={{
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              },
            }}
          >
            <MenuItem value="All">All Severities</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel id="date-sort-label">
            <SortIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Sort by Date
          </InputLabel>
          <Select
            labelId="date-sort-label"
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
            label="Sort by Date"
            sx={{
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              },
            }}
          >
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="oldest">Oldest First</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Button
          variant={showForm ? "outlined" : "contained"}
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setShowForm(!showForm)}
          fullWidth
          sx={{
            height: '40px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 2
            }
          }}
        >
          {showForm ? "Cancel" : "Report New Incident"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterControls;