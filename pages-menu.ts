import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/demo/655625500-0',
    home: true,
  },
  /**{
    title: 'FEATURES',
    group: true,
  },**/
  {
    title: 'My Subscriptions',
    icon: 'nb-grid-a-outline',
    link: '/pages/demo/655625500-83',
   // link: '/pages/ui-features',
     children: [
       {
         title: 'My Profile',
        //  icon: 'nb-grid-b-outline',
         link: '/pages/ui-features/profile',
       },
       {
         title: 'My Processes',
         link: '/pages/wizly-analytics/myprocesses',
       },
    //   {
    //     title: 'Role',
    //     link: '/pages/ui-features/buttons',
    //   },	  
     ],
  },
/**  {
    title: 'Analytics',
    icon: 'nb-lightbulb',
    link: '',
    children: [
      {
        title: 'Wizards',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Design',
        link: '',
		children: [
			  {
				title: 'Projects',
				link: '/pages/wizly-analytics/design/projects',
			  },
			  {
				title: 'Catalog',
				link: '/pages/wizly-analytics/design/catalog',
			  },
			  {
				title: 'Attribution',
				link: '#',
			  },
			  {
				title: 'Enumeration',
				link: '#',
			  },
			],
      },
      {
        title: 'Models',
        link: '#',
      },	  
    ],
  },
  {
    title: 'Performance',
    icon: 'nb-bar-chart',
    link: '/pages/components',
    children: [
      {
        title: 'Design',
        link: '/pages/performance/design',
      },
      {
        title: 'Results',
        link: '/pages/components/notifications',
      },
      {
        title: 'Reports',
        link: '#',
      },	  
    ],
  },**/
  {
    title: 'Process',
    icon: 'nb-shuffle',
    link: '/pages/editors',
    
                        
                          
    children: [
      {
        title: 'Process Framework',
        link: '/pages/demo/655625500-279',
      },
      {
        title: 'Documents',
        link: '/pages/demo/655625500-47',
      },
      {
        title: 'E-books',
        link: '/pages/demo/655625500-319148456',
      },	  
    ],
  },  
  {
    title: 'User Profile',
    icon: 'nb-person',
    //link: '/pages/map',
    link: '/pages/ui-features/profile',
  },
  {
    title: 'Configuration',
    icon: 'nb-gear',
    link: '/pages/tables',


  },  
  /**,
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },**/ 
];
