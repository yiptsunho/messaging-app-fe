import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import HistoryIcon from '@mui/icons-material/History';
import SentimentIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function StickerDrawer() {
    const [currentTab, setCurrentTab] = useState("history")
    const handleChange = (event, newTab) => {
        setCurrentTab(newTab)
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
            <Tabs
                value={currentTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ width: "100%" }}
            >
                <Tab value="history" label={<HistoryIcon />} />
                <Tab value="sentiment" label={<SentimentIcon />} />
            </Tabs>
        </Box>
    )
};

export default StickerDrawer;