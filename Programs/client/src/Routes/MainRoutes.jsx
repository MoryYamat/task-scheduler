import * as React from 'react';

// project import
import Dashboard from '../Layout/Dashboard';

//pages
import DashboardDefault from '../pages/dashboard/index';
import ProjectDefault from '../pages/project/index';
import ScheduleDefault from '../pages/schedule/index';

const MainRoutes = {
    path: '/',
    element: <Dashboard />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                path: 'default',
                element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'schedule',
            element: <ScheduleDefault />
        },
        {
            path: 'project',
            element: <ProjectDefault />
        },
        

    ]
}

export default MainRoutes;
